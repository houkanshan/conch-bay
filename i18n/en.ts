import base from "./base";

const en = {
  ...base,
  // API.
  lang: "en-US",
  // UI.
  log_in: "Log In",
  log_in_notice:
    "Conch Bay requires acquiring tokens to access SplatNet 3. The process involves making a secure request to non-Nintendo imink or nxapi with minimal, non-identifying information. This information will not be logged or stored, please see the privacy policy for more information.",
  log_in_continue: "I have read and understand",
  alternative_log_in_notice:
    "If you have a session token and want to skip acquiring tokens by Conch Bay, you can also copy the session token and complete logging in alternatively.",
  log_in_with_session_token: "Log In with Session Token",
  logging_in: "Acquiring tokens",
  failed_to_acquire_session_token: "Failed to acquire session token (%{error})",
  log_out_notice:
    "Logging out will remove all stored data from Conch Bay! Please complete backup before proceeding.",
  log_out_continue: "Remove Data and Log Out",
  logging_out: "Logging out",
  failed_to_check_update: "Failed to check Conch Bay update",
  reacquiring_tokens: "Reacquiring tokens",
  failed_to_acquire_web_service_token: "Failed to acquire web service token (%{error})",
  failed_to_acquire_bullet_token: "Failed to acquire bullet token (%{error})",
  failed_to_update_schedules: "Failed to update schedules (%{error})",
  failed_to_update_splatnet_shop: "Failed to update SplatNet Shop (%{error})",
  failed_to_check_api_update: "Failed to check API update (%{error})",
  failed_to_load_friends: "Failed to load friends (%{error})",
  failed_to_load_friends_splatfest_voting: "Failed to load friends Splatfest voting (%{error})",
  failed_to_check_splatfest: "Failed to check Splatfest (%{error})",
  failed_to_load_summary: "Failed to load summary (%{error})",
  failed_to_load_catalog: "Failed to load catalog (%{error})",
  failed_to_load_battle_results: "Failed to load battle results (%{error})",
  failed_to_load_salmon_run_results: "Failed to load Salmon Run results (%{error})",
  loading_n_results: "Loading %{n} result(s)",
  loaded_n_results: "Loaded %{n} result(s)",
  loaded_n_results_fail_failed: "Loaded %{n} result(s), %{fail} failed (%{error})",
  loaded_n_results_skip_skipped: "Loaded %{n} result(s), %{skip} skipped",
  loaded_n_results_skip_skipped_fail_failed:
    "Loaded %{n} result(s), %{skip} skipped, %{fail} failed (%{error})",
  show_more: "Show more",
  loading_more: "Loading more",
  all_results_showed: "All results showed",
  current_battle_schedule: "Current Battle Schedule",
  current_salmon_run_schedule: "Current Salmon Run Schedule",
  n_total_results_showed: "%{n}/%{total} result(s) showed",
  n_filtered_total_filtered_results_showed: "%{n}/%{filtered} (%{total}) filtered result(s) showed",
  today: "Today",
  this_week: "This Week",
  this_month: "This Month",
  this_season: "This Season",
  all_results: "All Results",
  show_more_notice: "Long press on Show more to show results for a specified period.",
  import: "Import",
  importing: "Importing",
  import_notice:
    "Conch Bay supports importing results exported by Conch Bay, and you can also convert results exported by other 3rd party apps to formats supported by Conch Bay and import them. In addition, Conch Bay requires a lot of memory to import records. If Conch Bay cannot import records, you can split and import them.",
  convert_s3s_outputs: "Convert s3s Outputs",
  convert_stat_ink_salmon_run_json: "Convert stat.ink Salmon Run JSON",
  convert_ikawidget3_ikax3: "Convert ikawidget3 IKAX3",
  convert_salmdroidnw_backup: "Convert salmdroidNW Backup",
  "convert_salmonia3+_backup": "Convert Salmonia3+ Backup",
  split_results: "Split Results",
  export: "Export",
  exporting: "Exporting",
  export_notice:
    "Conch Bay requires a lot of memory to export records. If Conch Bay cannot export records, you can split and export them.",
  split_and_export: "Split and Export",
  disclaimer:
    "This app is an unofficial app which uses the information of SplatNet 3, and is not related to Nintendo Co., Ltd.",
  update: "Update",
  support: "Support",
  language_notice:
    "If your game language is inconsistent with the display one, you can change it here. This will allow Conch Bay to load results with the corresponding language.",
  change_game_language_language: "Change Game Language (%{language})",
  change_display_language_language: "Change Display Language (%{language})",
  relog_in_notice: "If Conch Bay cannot acquire tokens, you can relog in.",
  relog_in: "Relog in",
  relog_in_with_session_token: "Relog in with Session Token",
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
  debug_notice: "The following information is for debugging only. Please do NOT share with others.",
  copy_session_token: "Copy Session Token",
  copy_web_service_token: "Copy Web Service Token",
  copy_bullet_token: "Copy Bullet Token",
  copied_to_clipboard: "Copied to clipboard",
  export_results: "Export Results",
  split_and_export_results: "Split and Export Results",
  export_database: "Export Database",
  privacy_policy: "Privacy Policy",
  acknowledgments: "Acknowledgments",
  creators: "Creators",
  license: "License",
  oss_licenses: "Open-Source Softwares Licenses",
  source_code_repository: "Source Code Repository",
  first_aid_notice:
    "The database is corrupted and cannot be loaded. Please export results and reinstall Conch Bay.",
  auto_refresh_enabled: "Auto refresh enabled",
  auto_refresh_disabled: "Auto refresh disabled",
  background_refresh_notice:
    "When Conch Bay is running in the background, Conch Bay will load results regularly. Please allow Conch Bay to send notifications to remind you of the load status.",
  ok: "OK",
  failed_to_enable_background_refresh: "Failed to enable background refresh (%{error})",
  new_results: "New Results",
  loaded_n_results_in_the_background:
    "Conch Bay has loaded %{n} result(s) in the background, please open the app to check.",
  // Shop.
  gesotown: "SplatNet Shop",
  order_in_nintendo_switch_online: "Order in Nintendo Switch Online",
  show_owned_gears: "Display Owned Gears",
  loading_owned_gears: "Loading Owned Gears",
  failed_to_load_owned_gears: "Failed to load owned gears (%{error})",
  headgear: "Headgear",
  clothes: "Clothes",
  shoes: "Shoes",
  // Friend.
  playing: "Playing",
  working: "Working",
  online: "Online",
  offline: "Offline",
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
  details: "Details",
  rule: "Rule",
  stage: "Stage",
  rank_points: "Rank Points",
  anarchy_power: "Anarchy Power",
  x_power: "X Power",
  challenge_e: "Challenge",
  challenge_power: "Challenge Power",
  clout: "Clout",
  festival_shell: "Festival Shell",
  splatfest_power: "Splatfest Power",
  played_time: "Played Time",
  medals_earned: "Medals Earned",
  hazard_level: "Hazard Level",
  supplied_weapons: "Supplied Weapons",
  job_title: "Job Title",
  your_points: "Your Points",
  job_score: "Job Score",
  pay_grade: "Pay Grade",
  clear_bonus: "Clear Bonus",
  salmometer: "Salmometer",
  scenario_code: "Scenario Code",
  hide_player_names: "Hide Player Names",
  show_player_names: "Show Player Names",
  show_raw_data: "Show Raw Data",
  open_in_nintendo_switch_online: "Open in Nintendo Switch Online",
  // Stats.
  stats: "Stats",
  all: "All",
  day: "Day",
  week: "Week",
  month: "Month",
  season: "Season",
  victory: "VICTORY",
  defeat: "DEFEAT",
  power: "Power",
  turf_inked: "Turf Inked",
  splatted: "Splatted",
  be_splatted: "Be Splatted",
  special_weapon_uses: "Special Weapon Uses",
  clear: "Clear!",
  failure: "Defeat",
  waves_cleared: "Waves Cleared",
  boss_salmonids_defeated: "Boss Salmonids Defeated",
  king_salmonids_defeated: "King Salmonids Defeated",
  golden_eggs_collected: "Golden Eggs Collected",
  power_eggs_collected: "Power Eggs Collected",
  rescued: "Rescued",
  be_rescued: "Be Rescued",
  stats_notice:
    "Statistics from currently showed results. The number in parentheses is over 1-minute average in battles and over each shift average in Salmon Run.",
  // Trends.
  trends: "Trends",
  average: "Average",
  splatted_including_assisted: "Splatted (Including Assisted)",
  golden_eggs_collected_including_assisted: "Golden Eggs Collected (Including Assisted)",
  trends_notice:
    "Trends from currently showed results. The number is over 1-minute average in battles and over each shift average in Salmon Run.",
  trends_notice2: "Long press on tags to show team's average.",
  // Modes.
  modes: "Modes",
  battle: "Battle",
  regular_battle: "Regular Battle",
  anarchy_battle: "Anarchy Battle",
  anarchy_battle_series: "Anarchy Battle (Series)",
  anarchy_battle_open: "Anarchy Battle (Open)",
  x_battle: "X Battle",
  challenge_b: "Challenge",
  private_battle: "Private Battle",
  splatfest_battle: "Splatfest Battle",
  tricolor_battle: "Tricolor Battle",
  tableturf_battle: "Tableturf Battle",
  "VnNNb2RlLTE=": "Regular Battle",
  "VnNNb2RlLTI=": "Anarchy Battle (Series)",
  "VnNNb2RlLTM=": "X Battle",
  "VnNNb2RlLTQ=": "Challenge",
  "VnNNb2RlLTU=": "Private Battle",
  "VnNNb2RlLTY=": "Splatfest Battle (Open)",
  "VnNNb2RlLTc=": "Splatfest Battle (Pro)",
  "VnNNb2RlLTg=": "Tricolor Battle",
  VnNNb2RlLTUx: "Anarchy Battle (Open)",
  CHALLENGE: "Series",
  OPEN: "Open",
  salmon_run: "Salmon Run",
  big_run: "Big Run",
  eggstra_work: "Eggstra Work",
  // Rules.
  rules: "Rules",
  "VnNSdWxlLTA=": "Turf War",
  "VnNSdWxlLTE=": "Splat Zones",
  "VnNSdWxlLTI=": "Tower Control",
  "VnNSdWxlLTM=": "Rainmaker",
  "VnNSdWxlLTQ=": "Clam Blitz",
  "VnNSdWxlLTU=": "Tricolor Turf War",
  splat_zones: "Splat Zones",
  tower_control: "Tower Control",
  rainmaker: "Rainmaker",
  clam_blitz: "Clam Blitz",
  REGULAR: "Salmon Run",
  BIG_RUN: "Big Run",
  TEAM_CONTEST: "Eggstra Work",
  // Challenges.
  "TGVhZ3VlTWF0Y2hFdmVudC1Db21wZXRpdGlvbnNBVQ==": "Tournament Qualifiers (AU/NZ)",
  "TGVhZ3VlTWF0Y2hFdmVudC1Db21wZXRpdGlvbnNFVQ==": "Tournament Qualifiers (EU)",
  "TGVhZ3VlTWF0Y2hFdmVudC1Db21wZXRpdGlvbnNKUA==": "Tournament Qualifiers (JP)",
  "TGVhZ3VlTWF0Y2hFdmVudC1Db21wZXRpdGlvbnNVUw==": "Tournament Qualifiers (US)",
  TGVhZ3VlTWF0Y2hFdmVudC1EZWVwRm9n: "Foggy Notion",
  "TGVhZ3VlTWF0Y2hFdmVudC1IaWdoSnVtcA==": "Extreme Jump Battle",
  TGVhZ3VlTWF0Y2hFdmVudC1Nb250aGx5TGVhZ3VlTWF0Y2hSZWFs: "Monthly Challenge",
  "TGVhZ3VlTWF0Y2hFdmVudC1OZXdTZWFzb25DdXA=": "New Season Challenge",
  TGVhZ3VlTWF0Y2hFdmVudC1QYWlyQ3Vw: "Duel of Dynamic Duos",
  "TGVhZ3VlTWF0Y2hFdmVudC1SYW5kb21XZWFwb24=": "The Sheldon Sampler Challenge",
  "TGVhZ3VlTWF0Y2hFdmVudC1TcGVjaWFsUnVzaF9VbHRyYVNob3Q=": "Too Many Trizookas!",
  "TGVhZ3VlTWF0Y2hFdmVudC1TcGVjaWFsUnVzaF9aaXBDYXN0ZXI=": "Zip-to-It Zipcaster Challenge",
  TGVhZ3VlTWF0Y2hFdmVudC1Vc3VhbGx5: "Tournament Qualifiers",
  TGVhZ3VlTWF0Y2hFdmVudC1XZWFwb25MaW1pdGVkX1JvbGxlckJydXNo: "Art Battle for the Ages",
  // Stages.
  stages: "Stages",
  VnNTdGFnZS0x: "Scorch Gorge",
  VnNTdGFnZS0y: "Eeltail Alley",
  VnNTdGFnZS0z: "Hagglefish Market",
  VnNTdGFnZS00: "Undertow Spillway",
  VnNTdGFnZS01: "Um'ami Ruins",
  VnNTdGFnZS02: "Mincemeat Metalworks",
  VnNTdGFnZS03: "Brinewater Springs",
  VnNTdGFnZS04: "Barnacle & Dime",
  VnNTdGFnZS05: "Flounder Heights",
  "VnNTdGFnZS0xMA==": "Hammerhead Bridge",
  "VnNTdGFnZS0xMQ==": "Museum d'Alfonsino",
  "VnNTdGFnZS0xMg==": "Mahi-Mahi Resort",
  "VnNTdGFnZS0xMw==": "Inkblot Art Academy",
  "VnNTdGFnZS0xNA==": "Sturgeon Shipyard",
  "VnNTdGFnZS0xNQ==": "MakoMart",
  "VnNTdGFnZS0xNg==": "Wahoo World",
  "VnNTdGFnZS0xNw==": "Humpback Pump Track",
  "VnNTdGFnZS0xOA==": "Manta Maria",
  VnNTdGFnZS0tOTk5: "",
  // Coop stages.
  "Q29vcFN0YWdlLTE=": "Spawning Grounds",
  "Q29vcFN0YWdlLTI=": "Sockeye Station",
  "Q29vcFN0YWdlLTY=": "Marooner's Bay",
  "Q29vcFN0YWdlLTc=": "Gone Fission Hydroplant",
  "Q29vcFN0YWdlLTg=": "Jammin' Salmon Junction",
  "Q29vcFN0YWdlLTEwMA==": "Wahoo World",
  "Q29vcFN0YWdlLTEwMg==": "Inkblot Art Academy",
  "Q29vcFN0YWdlLTEwMw==": "Undertow Spillway",
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
  "V2VhcG9uLTEwMQ==": "Annaki Splattershot Nova",
  "V2VhcG9uLTIwMA==": "Luna Blaster",
  "V2VhcG9uLTIwMQ==": "Luna Blaster Neo",
  "V2VhcG9uLTIxMA==": "Blaster",
  "V2VhcG9uLTIyMA==": "Range Blaster",
  "V2VhcG9uLTIzMA==": "Clash Blaster",
  "V2VhcG9uLTIzMQ==": "Clash Blaster Neo",
  "V2VhcG9uLTI0MA==": "Rapid Blaster",
  "V2VhcG9uLTI0MQ==": "Rapid Blaster Deco",
  "V2VhcG9uLTI1MA==": "Rapid Blaster Pro",
  "V2VhcG9uLTI1MQ==": "Rapid Blaster Pro Deco",
  "V2VhcG9uLTI2MA==": "S-BLAST '92",
  "V2VhcG9uLTMwMA==": "L-3 Nozzlenose",
  "V2VhcG9uLTMwMQ==": "L-3 Nozzlenose D",
  "V2VhcG9uLTMxMA==": "H-3 Nozzlenose",
  "V2VhcG9uLTMxMQ==": "H-3 Nozzlenose D",
  "V2VhcG9uLTQwMA==": "Squeezer",
  "V2VhcG9uLTEwMDA=": "Carbon Roller",
  "V2VhcG9uLTEwMDE=": "Carbon Roller Deco",
  "V2VhcG9uLTEwMTA=": "Splat Roller",
  "V2VhcG9uLTEwMTE=": "Krak-On Splat Roller",
  "V2VhcG9uLTEwMjA=": "Dynamo Roller",
  "V2VhcG9uLTEwMzA=": "Flingza Roller",
  "V2VhcG9uLTEwNDA=": "Big Swig Roller",
  "V2VhcG9uLTEwNDE=": "Big Swig Roller Express",
  "V2VhcG9uLTExMDA=": "Inkbrush",
  "V2VhcG9uLTExMDE=": "Inkbrush Nouveau",
  "V2VhcG9uLTExMTA=": "Octobrush",
  "V2VhcG9uLTExMjA=": "Painbrush",
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
  "V2VhcG9uLTQwMTE=": "Heavy Splatling Deco",
  "V2VhcG9uLTQwMjA=": "Hydra Splatling",
  "V2VhcG9uLTQwMzA=": "Ballpoint Splatling",
  "V2VhcG9uLTQwNDA=": "Nautilus 47",
  "V2VhcG9uLTUwMDA=": "Dapple Dualies",
  "V2VhcG9uLTUwMDE=": "Dapple Dualies Nouveau",
  "V2VhcG9uLTUwMTA=": "Splat Dualies",
  "V2VhcG9uLTUwMjA=": "Glooga Dualies",
  "V2VhcG9uLTUwMzA=": "Dualie Squelchers",
  "V2VhcG9uLTUwMzE=": "Custom Dualie Squelchers",
  "V2VhcG9uLTUwNDA=": "Dark Tetra Dualies",
  "V2VhcG9uLTUwNDE=": "Light Tetra Dualies",
  "V2VhcG9uLTYwMDA=": "Splat Brella",
  "V2VhcG9uLTYwMTA=": "Tenta Brella",
  "V2VhcG9uLTYwMTE=": "Tenta Sorella Brella",
  "V2VhcG9uLTYwMjA=": "Undercover Brella",
  "V2VhcG9uLTcwMTA=": "Tri-Stringer",
  "V2VhcG9uLTcwMjA=": "REEF-LUX 450",
  "V2VhcG9uLTgwMDA=": "Splatana Stamper",
  "V2VhcG9uLTgwMTA=": "Splatana Wiper",
  "V2VhcG9uLTgwMTE=": "Splatana Wiper Deco",
  V2VhcG9uLTIwOTAw: "Grizzco Blaster",
  V2VhcG9uLTIyOTAw: "Grizzco Charger",
  V2VhcG9uLTIzOTAw: "Grizzco Slosher",
  V2VhcG9uLTI2OTAw: "Grizzco Brella",
  V2VhcG9uLTI3OTAw: "Grizzco Stringer",
  V2VhcG9uLTI4OTAw: "Grizzco Splatana",
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
  Q29vcEV2ZW50V2F2ZS0x: "Rush",
  Q29vcEV2ZW50V2F2ZS0y: "Goldie Seeking",
  Q29vcEV2ZW50V2F2ZS0z: "The Griller",
  Q29vcEV2ZW50V2F2ZS00: "The Mothership",
  Q29vcEV2ZW50V2F2ZS01: "Fog",
  Q29vcEV2ZW50V2F2ZS02: "Cohock Charge",
  Q29vcEV2ZW50V2F2ZS03: "Giant Tornado",
  Q29vcEV2ZW50V2F2ZS04: "Mudmouth Eruptions",
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
