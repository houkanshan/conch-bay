import * as Convert from "color-convert";
import { Color } from "../components";
import {
  VsMode,
  VsHistoryDetailResult,
  VsStage,
  CoopRule,
  Gear,
  Judgement,
  CoopHistoryDetailResult,
} from "../models/types";
import { decode64Index } from "./codec";
import { getAuthorityAndPath } from "./url";

export const getImageExpires = (image: string) => {
  const regex = /Expires=(\d*)&/;
  const match = regex.exec(image);
  if (!match) {
    return null;
  }
  return match[1];
};
export const isImageExpired = (image: string) => {
  const expires = getImageExpires(image);
  if (expires && parseInt(expires) * 1000 < new Date().valueOf()) {
    return true;
  }
  return false;
};
export const getImageCacheKey = (image: string) => {
  const splitted = image.split("?")[0].split("/");
  return `${splitted[splitted.length - 2]}/${splitted[splitted.length - 1]}`;
};
export const getImageHash = (image: string) => {
  const splitted = image.split("?")[0].split("/");
  return splitted[splitted.length - 1].split("_")[0];
};
export const getImageCacheSource = (image: string) => {
  return {
    uri: image,
    cacheKey: getImageCacheKey(image),
  };
};
export const getUserIconCacheSource = (userIcon: string) => {
  return {
    uri: userIcon,
    cacheKey: userIcon,
  };
};

export const getColor = (color: { a: number; b: number; g: number; r: number }) => {
  return `rgba(${Math.round(color.r * 255)}, ${Math.round(color.g * 255)}, ${Math.round(
    color.b * 255
  )}, ${Math.round(color.a * 255)})`;
};
export const getSolidColor = (color: { a: number; b: number; g: number; r: number }) => {
  const hex = Convert.rgb.hex(color.r * 255, color.g * 255, color.b * 255);
  return `#${hex}`;
};
export const burnColor = (color: string) => {
  const hsl = Convert.hex.hsl(color.replace("#", ""));
  const hex = Convert.hsl.hex([hsl[0], hsl[1], hsl[2] * 0.7]);
  return `#${hex}`;
};
export const dodgeColor = (color: string) => {
  const hsl = Convert.hex.hsl(color.replace("#", ""));
  const hex = Convert.hsl.hex([hsl[0], hsl[1], Math.min(hsl[2] * 1.3, 100)]);
  return `#${hex}`;
};

export const convertStageImageUrl = (stage: VsStage) => {
  const url = getAuthorityAndPath(stage.image.url);
  const pathComponents = url.split("/");
  const imageId = pathComponents[pathComponents.length - 1].split("_")[0];
  return `https://splatoon3.ink/assets/splatnet/v1/stage_img/icon/high_resolution/${imageId}_0.png`;
};

export const getVsModeColor = (mode: VsMode) => {
  switch (mode.id) {
    case "VnNNb2RlLTE=":
      return Color.RegularBattle;
    case "VnNNb2RlLTI=":
    case "VnNNb2RlLTUx":
      return Color.AnarchyBattle;
    case "VnNNb2RlLTM=":
      return Color.XBattle;
    case "VnNNb2RlLTQ=":
      return Color.Challenge;
    case "VnNNb2RlLTU=":
      return Color.PrivateBattle;
    case "VnNNb2RlLTY=":
    case "VnNNb2RlLTc=":
    case "VnNNb2RlLTg=":
      return Color.AccentColor;
  }
};
export const getCoopRuleColor = (rule: string) => {
  switch (rule) {
    case CoopRule.REGULAR:
      return Color.SalmonRun;
    case CoopRule.BIG_RUN:
      return Color.BigRun;
    case CoopRule.TEAM_CONTEST:
      return Color.EggstraWork;
  }
};

export const getGearPadding = (gears: Gear[]) => {
  return Math.max(...gears.map((gear) => gear.additionalGearPowers.length));
};

export const getVsPower = (battle: VsHistoryDetailResult) => {
  if (
    battle.vsHistoryDetail?.bankaraMatch &&
    battle.vsHistoryDetail.bankaraMatch["bankaraPower"] &&
    battle.vsHistoryDetail.bankaraMatch["bankaraPower"]["power"] !== undefined
  ) {
    return battle.vsHistoryDetail.bankaraMatch["bankaraPower"]["power"];
  }
  if (battle.vsHistoryDetail?.xMatch) {
    return battle.vsHistoryDetail!.xMatch!.lastXPower;
  }
  if (
    battle.vsHistoryDetail?.leagueMatch &&
    battle.vsHistoryDetail.leagueMatch["myLeaguePower"] !== undefined
  ) {
    return battle.vsHistoryDetail.leagueMatch["myLeaguePower"];
  }
  if (battle.vsHistoryDetail?.festMatch) {
    return battle.vsHistoryDetail.festMatch.myFestPower;
  }
  return undefined;
};
export const getVsSelfPlayer = (battle: VsHistoryDetailResult) => {
  return battle.vsHistoryDetail!.myTeam.players.find((player) => player.isMyself)!;
};

export const countBattles = (battles: VsHistoryDetailResult[]) => {
  const result = {
    count: 0,
    win: 0,
    lose: 0,
    power: 0,
    powerCount: 0,
    powerMax: 0,
    duration: 0,
    member: 0,
    turf: 0,
    turfTeam: 0,
    kill: 0,
    killTeam: 0,
    assist: 0,
    assistTeam: 0,
    death: 0,
    deathTeam: 0,
    special: 0,
    specialTeam: 0,
  };
  for (const battle of battles) {
    result.count += 1;
    switch (battle.vsHistoryDetail!.judgement as Judgement) {
      case Judgement.WIN:
        result.win += 1;
        break;
      case Judgement.LOSE:
      case Judgement.DEEMED_LOSE:
      case Judgement.EXEMPTED_LOSE:
        result.lose += 1;
        break;
      case Judgement.DRAW:
        break;
    }
    const power = getVsPower(battle);
    if (power !== undefined && power !== null) {
      result.power += power;
      result.powerCount += 1;
      result.powerMax = Math.max(result.powerMax, power);
    }
    // Disconnected and draw should be skipped.
    if (
      (battle.vsHistoryDetail!.judgement === Judgement.DEEMED_LOSE &&
        battle.vsHistoryDetail!.duration === 0) ||
      battle.vsHistoryDetail!.judgement === Judgement.DRAW
    ) {
      continue;
    }
    result.duration += battle.vsHistoryDetail!.duration;
    const selfPlayer = getVsSelfPlayer(battle);
    result.turf += selfPlayer.paint;
    result.kill += selfPlayer.result?.kill ?? 0;
    result.assist += selfPlayer.result?.assist ?? 0;
    result.death += selfPlayer.result?.death ?? 0;
    result.special += selfPlayer.result?.special ?? 0;
    for (const player of battle.vsHistoryDetail!.myTeam.players) {
      result.member += 1;
      result.turfTeam += player.paint;
      result.killTeam += player.result?.kill ?? 0;
      result.assistTeam += player.result?.assist ?? 0;
      result.deathTeam += player.result?.death ?? 0;
      result.specialTeam += player.result?.special ?? 0;
    }
  }
  return result;
};
export const countCoops = (coops: CoopHistoryDetailResult[]) => {
  const result = {
    count: 0,
    deemed: 0,
    clear: 0,
    member: 0,
    wave: 0,
    hazardLevel: 0,
    king: 0,
    defeat: 0,
    defeatTeam: 0,
    golden: 0,
    goldenTeam: 0,
    assist: 0,
    assistTeam: 0,
    power: 0,
    powerTeam: 0,
    rescue: 0,
    rescueTeam: 0,
    rescued: 0,
    rescuedTeam: 0,
  };
  const kingMap = new Map(),
    bossMap = new Map();
  for (const coop of coops) {
    result.count += 1;
    // Disconnected should be skipped.
    if (coop.coopHistoryDetail!.resultWave < 0) {
      result.deemed += 1;
      continue;
    }
    if (coop.coopHistoryDetail!.resultWave >= 0) {
      if (coop.coopHistoryDetail!.resultWave === 0) {
        result.clear += 1;
        // The maximum wave cleared is 3 in SplatNet, but we will fix it and have 5 in eggstra works.
        result.wave += coop.coopHistoryDetail!.waveResults.length;
        switch (coop.coopHistoryDetail!.rule as CoopRule) {
          case CoopRule.REGULAR:
          case CoopRule.BIG_RUN:
            result.wave -= 1;
            break;
          case CoopRule.TEAM_CONTEST:
            break;
        }
      } else {
        result.wave += coop.coopHistoryDetail!.resultWave - 1;
      }
    }
    result.hazardLevel += coop.coopHistoryDetail!.dangerRate;
    if (coop.coopHistoryDetail!.bossResult) {
      if (!kingMap.has(coop.coopHistoryDetail!.bossResult.boss.id)) {
        kingMap.set(coop.coopHistoryDetail!.bossResult.boss.id, { appear: 0, defeat: 0 });
      }
      kingMap.get(coop.coopHistoryDetail!.bossResult.boss.id)["appear"] += 1;
      if (coop.coopHistoryDetail!.bossResult.hasDefeatBoss) {
        result.king += 1;
        kingMap.get(coop.coopHistoryDetail!.bossResult.boss.id)["defeat"] += 1;
      }
    }
    result.defeat += coop.coopHistoryDetail!.myResult.defeatEnemyCount;
    result.golden += coop.coopHistoryDetail!.myResult.goldenDeliverCount;
    result.assist += coop.coopHistoryDetail!.myResult.goldenAssistCount;
    result.power += coop.coopHistoryDetail!.myResult.deliverCount;
    result.rescue += coop.coopHistoryDetail!.myResult.rescueCount;
    result.rescued += coop.coopHistoryDetail!.myResult.rescuedCount;
    for (const memberResult of coop.coopHistoryDetail!.memberResults) {
      result.member += 1;
      result.defeatTeam += memberResult.defeatEnemyCount;
      result.goldenTeam += memberResult.goldenDeliverCount;
      result.assistTeam += memberResult.goldenAssistCount;
      result.powerTeam += memberResult.deliverCount;
      result.rescueTeam += memberResult.rescueCount;
      result.rescuedTeam += memberResult.rescuedCount;
    }
    for (const enemyResult of coop.coopHistoryDetail!.enemyResults) {
      if (!bossMap.has(enemyResult.enemy.id)) {
        bossMap.set(enemyResult.enemy.id, { appear: 0, defeat: 0, defeatTeam: 0 });
      }
      bossMap.get(enemyResult.enemy.id)["appear"] += enemyResult.popCount;
      bossMap.get(enemyResult.enemy.id)["defeat"] += enemyResult.defeatCount;
      bossMap.get(enemyResult.enemy.id)["defeatTeam"] += enemyResult.teamDefeatCount;
    }
  }
  result.member += result.count;
  result.defeatTeam += result.defeat;
  result.goldenTeam += result.golden;
  result.assistTeam += result.assist;
  result.powerTeam += result.power;
  result.rescueTeam += result.rescue;
  result.rescuedTeam += result.rescued;
  const kings = Array.from(kingMap, (king) => ({
    id: king[0],
    appear: king[1]["appear"],
    defeat: king[1]["defeat"],
  }));
  kings.sort((a, b) => decode64Index(a.id) - decode64Index(b.id));
  const bosses = Array.from(bossMap, (boss) => ({
    id: boss[0],
    appear: boss[1]["appear"],
    defeat: boss[1]["defeat"],
    defeatTeam: boss[1]["defeatTeam"] + boss[1]["defeat"],
  }));
  bosses.sort((a, b) => decode64Index(a.id) - decode64Index(b.id));
  return { ...result, bosses, kings };
};
