import base from "./base";

const en = {
  ...base,
  // API.
  lang: "en-US",
  // UI.
  log_in: "Log In",
  log_in_notice:
    "Conch Bay requires acquiring tokens to access SplatNet 3. The process involves making a secure request to non-Nintendo imink with minimal, non-identifying information, and this information will not be logged or stored. See the privacy policy for more information.",
  imink_privacy_policy: "imink Privacy Policy",
  log_in_continue: "I have read and understand",
  logging_in: "Acquiring tokens",
  log_out_notice:
    "Logging out will remove all stored data from Conch Bay! Please complete backup before proceeding.",
  log_out_continue: "Remove Data and Log Out",
  logging_out: "Logging out",
  failed_to_check_api_update: "Failed to check API update",
  reacquiring_tokens: "Reacquiring tokens",
  loading_n_results: "Loading %{n} result(s)",
  loaded_n_results: "Loaded %{n} result(s)",
  loaded_n_results_fail_failed: "Loaded %{n} result(s), %{fail} failed",
  loaded_n_results_skip_skipped: "Loaded %{n} result(s), %{skip} skipped",
  loaded_n_results_fail_failed_skip_skipped:
    "Loaded %{n} result(s), %{fail} failed, %{skip} skipped",
  load_more: "Load more",
  loading_more: "Loading more",
  loaded_all: "Loaded all",
  load_more_notice: "Long press on Load more to load all results.",
  import: "Import",
  export: "Export",
  exporting: "Exporting",
  disclaimer:
    "This app is an unofficial app which uses the information of SplatNet 3, and is not related to Nintendo Co., Ltd.",
  support: "Support",
  language_notice:
    "If your game language is inconsistent with the display one, you can change it here. This will allow Conch Bay to loading results with the corresponding language.",
  change_game_language_language: "Change Game Language (%{language})",
  change_display_language_language: "Change Display Language (%{language})",
  relog_in_notice: "If Conch Bay cannot acquire tokens, you can relog in.",
  relog_in: "Relog In",
  resource_notice:
    "If Conch Bay cannot load images, you can clear cache or preload resources. Please note, due to SplatNet 3 restrictions, Conch Bay can only preload some images.",
  clear_cache: "Clear Cache",
  clearing_cache: "Clearing Cache",
  preload_resources: "Preload Resources",
  preloading_resources: "Preloading Resources",
  feedback_notice:
    "If you encountered any problems using Conch Bay or have any advice, feel free to share your feedback.",
  create_a_github_issue: "Create a GitHub Issue",
  send_a_mail: "Send a mail",
  debug_notice: "The following information is for debug only. Please do NOT share with others.",
  copy_session_token: "Copy Session Token",
  copy_bullet_token: "Copy Bullet Token",
  export_results: "Export Results",
  export_database: "Export Database",
  privacy_policy: "Privacy Policy",
  acknowledgments: "Acknowledgments",
  creators: "Creators",
  license: "License",
  oss_licenses: "Open-Source Softwares Licenses",
  first_aid_notice:
    "The database is corrupted and cannot be loaded. Please export results and reinstall Conch Bay.",
  auto_refresh_enabled: "Auto refresh enabled",
  // Shop.
  gesotown: "SplatNet Shop",
  order_in_nintendo_switch_online: "Order in Nintendo Switch Online",
  display_owned_gears: "Display Owned Gears",
  loading_owned_gears: "Loading Owned Gears",
  headgear: "Headgear",
  clothes: "Clothes",
  shoes: "Shoes",
  // Filter.
  filter: "Filter",
  clear_filter: "Clear Filter",
  // Result.
  n_x_battle: "%{n}x Battle",
  n_win_strike: "%{n}-WIN STRIKE",
  score_score: "Score %{score}",
  knock_out: "KNOCKOUT!",
  no_contest: "No contest.",
  penalty: "The match was not fully completed.",
  exemption:
    "Because one or more players were not able to continue, the match will not count as a loss.",
  hide_player_names: "Hide Player Names",
  show_player_names: "Show Player Names",
  show_raw_data: "Show Raw Data",
  open_in_nintendo_switch_online: "Open in Nintendo Switch Online",
  // Stats.
  stats: "Stats",
  count: "Count",
  database: "Database",
  victory: "VICTORY",
  defeat: "DEFEAT",
  splatted: "Splatted",
  be_splatted: "Be Splatted",
  special_weapon_uses: "Special Weapon Uses",
  clear: "Clear!",
  failure: "Defeat",
  waves_cleared: "Waves Cleared",
  boss_salmonids_defeated: "Boss Salmonids Defeated",
  golden_eggs_collected: "Golden Eggs Collected",
  power_eggs_collected: "Power Eggs Collected",
  rescued: "Rescued",
  be_rescued: "Be Rescued",
  stats_notice: "Statistics from currently loaded results.",
  // Modes.
  modes: "Modes",
  battle: "Battle",
  regular_battle: "Regular Battle",
  anarchy_battle: "Anarchy Battle",
  anarchy_battle_series: "Anarchy Battle (Series)",
  anarchy_battle_open: "Anarchy Battle (Open)",
  x_battle: "X Battle",
  private_battle: "Private Battle",
  splatfest_battle: "Splatfest Battle",
  tricolor_battle: "Tricolor Battle",
  "VnNNb2RlLTE=": "Regular Battle",
  "VnNNb2RlLTI=": "Anarchy Battle (Series)",
  "VnNNb2RlLTM=": "X Battle",
  "VnNNb2RlLTU=": "Private Battle",
  "VnNNb2RlLTY=": "Splatfest Battle (Open)",
  "VnNNb2RlLTc=": "Splatfest Battle (Pro)",
  "VnNNb2RlLTg=": "Tricolor Battle",
  VnNNb2RlLTUx: "Anarchy Battle (Open)",
  CHALLENGE: "Series",
  OPEN: "Open",
  salmon_run: "Salmon Run",
  big_run: "Big Run",
  // Rules.
  rules: "Rules",
  "VnNSdWxlLTA=": "Turf War",
  "VnNSdWxlLTE=": "Splat Zones",
  "VnNSdWxlLTI=": "Tower Control",
  "VnNSdWxlLTM=": "Rainmaker",
  "VnNSdWxlLTQ=": "Clam Blitz",
  "VnNSdWxlLTU=": "Tricolor Turf War",
  REGULAR: "Salmon Run",
  BIG_RUN: "Big Run",
  // Stages.
  stages: "Stages",
  VnNTdGFnZS0x: "Scorch Gorge",
  VnNTdGFnZS0y: "Eeltail Alley",
  VnNTdGFnZS0z: "Hagglefish Market",
  VnNTdGFnZS00: "Undertow Spillway",
  VnNTdGFnZS01: "Um'ami Ruins",
  VnNTdGFnZS02: "Mincemeat Metalworks",
  VnNTdGFnZS03: "Brinewater Springs",
  VnNTdGFnZS05: "Flounder Heights",
  "VnNTdGFnZS0xMA==": "Hammerhead Bridge",
  "VnNTdGFnZS0xMQ==": "Museum d'Alfonsino",
  "VnNTdGFnZS0xMg==": "Mahi-Mahi Resort",
  "VnNTdGFnZS0xMw==": "Inkblot Art Academy",
  "VnNTdGFnZS0xNA==": "Sturgeon Shipyard",
  "VnNTdGFnZS0xNQ==": "MakoMart",
  "VnNTdGFnZS0xNg==": "Wahoo World",
  "VnNTdGFnZS0xOA==": "Manta Maria",
  VnNTdGFnZS0tOTk5: "",
  // Coop stages.
  "Q29vcFN0YWdlLTE=": "Spawning Grounds",
  "Q29vcFN0YWdlLTI=": "Sockeye Station",
  "Q29vcFN0YWdlLTY=": "Marooner's Bay",
  "Q29vcFN0YWdlLTc=": "Gone Fission Hydroplant",
  "Q29vcFN0YWdlLTEwMA==": "Wahoo World",
  "Q29vcFN0YWdlLTEwMg==": "Inkblot Art Academy",
  "Q29vcFN0YWdlLS05OTk=": "",
  // Weapons.
  weapons: "Weapons",
  "V2VhcG9uLTA=": "Sploosh-o-matic",
  "V2VhcG9uLTE=": "Neo Sploosh-o-matic",
  V2VhcG9uLTEw: "Splattershot Jr.",
  V2VhcG9uLTEx: "Custom Splattershot Jr.",
  V2VhcG9uLTIw: "Splash-o-matic",
  V2VhcG9uLTIx: "Neo Splash-o-matic",
  V2VhcG9uLTMw: "Aerospray MG",
  V2VhcG9uLTMx: "Aerospray RG",
  V2VhcG9uLTQw: "Splattershot",
  V2VhcG9uLTQx: "Tentatek Splattershot",
  V2VhcG9uLTQ1: "Hero Shot Replica",
  V2VhcG9uLTUw: ".52 Gal",
  V2VhcG9uLTYw: "N-ZAP '85",
  V2VhcG9uLTYx: "N-ZAP '89",
  V2VhcG9uLTcw: "Splattershot Pro",
  V2VhcG9uLTcx: "Forge Splattershot Pro",
  V2VhcG9uLTgw: ".96 Gal",
  V2VhcG9uLTgx: ".96 Gal Deco",
  V2VhcG9uLTkw: "Jet Squelcher",
  V2VhcG9uLTkx: "Custom Jet Squelcher",
  "V2VhcG9uLTEwMA==": "Splattershot Nova",
  "V2VhcG9uLTIwMA==": "Luna Blaster",
  "V2VhcG9uLTIwMQ==": "Luna Blaster Neo",
  "V2VhcG9uLTIxMA==": "Blaster",
  "V2VhcG9uLTIyMA==": "Range Blaster",
  "V2VhcG9uLTIzMA==": "Clash Blaster",
  "V2VhcG9uLTIzMQ==": "Clash Blaster Neo",
  "V2VhcG9uLTI0MA==": "Rapid Blaster",
  "V2VhcG9uLTI0MQ==": "Rapid Blaster Deco",
  "V2VhcG9uLTI1MA==": "Rapid Blaster Pro",
  "V2VhcG9uLTMwMA==": "L-3 Nozzlenose",
  "V2VhcG9uLTMwMQ==": "L-3 Nozzlenose D",
  "V2VhcG9uLTMxMA==": "H-3 Nozzlenose",
  "V2VhcG9uLTQwMA==": "Squeezer",
  "V2VhcG9uLTEwMDA=": "Carbon Roller",
  "V2VhcG9uLTEwMDE=": "Carbon Roller Deco",
  "V2VhcG9uLTEwMTA=": "Splat Roller",
  "V2VhcG9uLTEwMTE=": "Krak-On Splat Roller",
  "V2VhcG9uLTEwMjA=": "Dynamo Roller",
  "V2VhcG9uLTEwMzA=": "Flingza Roller",
  "V2VhcG9uLTEwNDA=": "Big Swig Roller",
  "V2VhcG9uLTExMDA=": "Inkbrush",
  "V2VhcG9uLTExMDE=": "Inkbrush Nouveau",
  "V2VhcG9uLTExMTA=": "Octobrush",
  "V2VhcG9uLTIwMDA=": "Classic Squiffer",
  "V2VhcG9uLTIwMTA=": "Splat Charger",
  "V2VhcG9uLTIwMTE=": "Z+F Splat Charger",
  "V2VhcG9uLTIwMjA=": "Splatterscope",
  "V2VhcG9uLTIwMjE=": "Z+F Splatterscope",
  "V2VhcG9uLTIwMzA=": "E-liter 4K",
  "V2VhcG9uLTIwNDA=": "E-liter 4K Scope",
  "V2VhcG9uLTIwNTA=": "Bamboozler 14 Mk I",
  "V2VhcG9uLTIwNjA=": "Goo Tuber",
  "V2VhcG9uLTIwNzA=": "Snipewriter 5H",
  "V2VhcG9uLTMwMDA=": "Slosher",
  "V2VhcG9uLTMwMDE=": "Slosher Deco",
  "V2VhcG9uLTMwMTA=": "Tri-Slosher",
  "V2VhcG9uLTMwMTE=": "Tri-Slosher Nouveau",
  "V2VhcG9uLTMwMjA=": "Sloshing Machine",
  "V2VhcG9uLTMwMzA=": "Bloblobber",
  "V2VhcG9uLTMwNDA=": "Explosher",
  "V2VhcG9uLTQwMDA=": "Mini Splatling",
  "V2VhcG9uLTQwMDE=": "Zink Mini Splatling",
  "V2VhcG9uLTQwMTA=": "Heavy Splatling",
  "V2VhcG9uLTQwMjA=": "Hydra Splatling",
  "V2VhcG9uLTQwMzA=": "Ballpoint Splatling",
  "V2VhcG9uLTQwNDA=": "Nautilus 47",
  "V2VhcG9uLTUwMDA=": "Dapple Dualies",
  "V2VhcG9uLTUwMDE=": "Dapple Dualies Nouveau",
  "V2VhcG9uLTUwMTA=": "Splat Dualies",
  "V2VhcG9uLTUwMjA=": "Glooga Dualies",
  "V2VhcG9uLTUwMzA=": "Dualie Squelchers",
  "V2VhcG9uLTUwNDA=": "Dark Tetra Dualies",
  "V2VhcG9uLTYwMDA=": "Splat Brella",
  "V2VhcG9uLTYwMTA=": "Tenta Brella",
  "V2VhcG9uLTYwMjA=": "Undercover Brella",
  "V2VhcG9uLTcwMTA=": "Tri-Stringer",
  "V2VhcG9uLTcwMjA=": "REEF-LUX 450",
  "V2VhcG9uLTgwMDA=": "Splatana Stamper",
  "V2VhcG9uLTgwMTA=": "Splatana Wiper",
  // Brands.
  "QnJhbmQtMA==": "SquidForce",
  "QnJhbmQtMQ==": "Zink",
  "QnJhbmQtMg==": "Krak-On",
  "QnJhbmQtMw==": "Rockenberg",
  "QnJhbmQtNA==": "Zekko",
  "QnJhbmQtNQ==": "Forge",
  "QnJhbmQtNg==": "Firefin",
  "QnJhbmQtNw==": "Skalop",
  "QnJhbmQtOA==": "Splash Mob",
  "QnJhbmQtOQ==": "Inkline",
  "QnJhbmQtMTA=": "Tentatek",
  "QnJhbmQtMTE=": "Takoroka",
  "QnJhbmQtMTU=": "Annaki",
  "QnJhbmQtMTY=": "Enperry",
  "QnJhbmQtMTc=": "Toni Kensa",
  "QnJhbmQtMTg=": "Z+F",
  "QnJhbmQtMTk=": "Barazushi",
  "QnJhbmQtMjA=": "Emberz",
  "QnJhbmQtOTc=": "Grizzco",
  "QnJhbmQtOTg=": "Cuttlegear",
  "QnJhbmQtOTk=": "amiibo",
  // Work suits.
  "Q29vcFVuaWZvcm0tMQ==": "Orange Slopsuit",
  "Q29vcFVuaWZvcm0tMg==": "Green Slopsuit",
  "Q29vcFVuaWZvcm0tMw==": "Yellow Slopsuit",
  "Q29vcFVuaWZvcm0tNA==": "Pink Slopsuit",
  "Q29vcFVuaWZvcm0tNQ==": "Blue Slopsuit",
  "Q29vcFVuaWZvcm0tNg==": "Black Slopsuit",
  "Q29vcFVuaWZvcm0tNw==": "White Slopsuit",
  "Q29vcFVuaWZvcm0tOA==": "Orange Gloopsuit",
  "Q29vcFVuaWZvcm0tOQ==": "Black Gloopsuit",
  "Q29vcFVuaWZvcm0tMTA=": "Yellow Gloopsuit",
  "Q29vcFVuaWZvcm0tMTE=": "Brown Gloopsuit",
  // Grades.
  "Q29vcEdyYWRlLTA=": "Apprentice",
  "Q29vcEdyYWRlLTE=": "Part-Timer",
  "Q29vcEdyYWRlLTI=": "Go-Getter",
  "Q29vcEdyYWRlLTM=": "Overachiever",
  "Q29vcEdyYWRlLTQ=": "Profreshional Part-Timer",
  "Q29vcEdyYWRlLTU=": "Profreshional +1",
  "Q29vcEdyYWRlLTY=": "Profreshional +2",
  "Q29vcEdyYWRlLTc=": "Profreshional +3",
  "Q29vcEdyYWRlLTg=": "Eggsecutive VP",
  // Waves.
  wave_n: "Wave %{n}",
  xtrawave: "XTRAWAVE",
  // Water levels.
  low_tide: "Low Tide",
  normal: "Normal",
  high_tide: "High Tide",
  // Events.
  Q29vcEV2ZW50V2F2ZS00: "The Mothership",
  Q29vcEV2ZW50V2F2ZS01: "Fog",
  Q29vcEV2ZW50V2F2ZS02: "Cohock Charge",
  Q29vcEV2ZW50V2F2ZS03: "Giant Tornado",
  Q29vcEV2ZW50V2F2ZS04: "Mudmouth Eruptions",
  Q29vcEV2ZW50V2F2ZS0x: "Rush",
  Q29vcEV2ZW50V2F2ZS0y: "Goldie Seeking",
  Q29vcEV2ZW50V2F2ZS0z: "The Griller",
  // Boss Salmonids.
  boss_salmonids: "Boss Salmonids",
  "Q29vcEVuZW15LTQ=": "Steelhead",
  "Q29vcEVuZW15LTU=": "Flyfish",
  "Q29vcEVuZW15LTY=": "Scrapper",
  "Q29vcEVuZW15LTc=": "Steel Eel",
  "Q29vcEVuZW15LTg=": "Stinger",
  "Q29vcEVuZW15LTk=": "Maws",
  Q29vcEVuZW15LTEw: "Drizzler",
  Q29vcEVuZW15LTEx: "Fish Stick",
  Q29vcEVuZW15LTEy: "Flipper-Flopper",
  Q29vcEVuZW15LTEz: "Big Shot",
  Q29vcEVuZW15LTE0: "Slammin' Lid",
  Q29vcEVuZW15LTE1: "Goldie",
  Q29vcEVuZW15LTE3: "Griller",
  Q29vcEVuZW15LTIw: "Mudmouth",
  // King Salmonids.
  Q29vcEVuZW15LTIz: "Cohozuna",
  Q29vcEVuZW15LTI0: "Horrorboros",
};

export default en;
