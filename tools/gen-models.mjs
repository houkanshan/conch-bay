import { Buffer } from "buffer";
import { createHash } from "crypto";
import { createWriteStream } from "fs";
import { get } from "https";

const VERSION = "400";

const versionsFile = createWriteStream("models/versions.json", "utf-8");
const weaponsFile = createWriteStream("models/weapons.json", "utf-8");

function getAll(url, callback) {
  return get(url, (res) => {
    let raw = "";

    res.on("data", (chunk) => {
      raw += chunk;
    });

    res.on("end", () => {
      callback(raw);
    });
  });
}

getAll(
  "https://raw.githubusercontent.com/nintendoapis/nintendo-app-versions/main/data/coral-google-play.json",
  (res) => {
    const json = JSON.parse(res);
    const nso_version = json["version"];

    getAll(
      "https://raw.githubusercontent.com/nintendoapis/nintendo-app-versions/main/data/splatnet3-app.json",
      (res) => {
        const json = JSON.parse(res);
        const splatnet_version = json["web_app_ver"];
        versionsFile.write(
          JSON.stringify(
            { NSO_VERSION: nso_version, SPLATNET_VERSION: splatnet_version },
            undefined,
            2
          ) + "\n"
        );
      }
    );
  }
);

getAll(
  `https://raw.githubusercontent.com/Leanny/splat3/main/data/mush/${VERSION}/WeaponInfoMain.json`,
  (res) => {
    const json = JSON.parse(res);
    const weapons = {};
    for (const weapon of json) {
      const id = Buffer.from(`Weapon-${weapon["Id"]}`).toString("base64");
      const image = createHash("sha256").update(weapon["__RowId"]).digest("hex");
      weapons[id] = image;
    }
    weaponsFile.write(JSON.stringify(weapons, undefined, 2) + "\n");
  }
);
