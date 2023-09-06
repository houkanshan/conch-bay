import base from "./base";
import generated from "./en.json";

const en = {
  ...base,
  ...generated,
  // API.
  lang: "en-US",
  // UI.
  log_in: "Log In",
  log_in_notice:
    "You can use Conch Bay to view schedules and SplatNet Shop, import results, and analyze stats and trends without logging in. Logging in will allow you to load results, friends and catalog, display owned gears, and access SplatNet 3. Logging in involves sending non-identifying information to non-Nintendo imink or nxapi. This information will not be logged or stored, please see the privacy policy for more information.",
  log_in_continue: "I have read and understand",
  alternative_log_in_notice:
    "If you have a session token and want to skip acquiring session token by Conch Bay, you can also copy the session token and complete logging in alternatively.",
  log_in_with_session_token: "Log In with Session Token",
  logging_in: "Acquiring tokens",
  failed_to_acquire_session_token: "Failed to acquire session token (%{error})",
  log_out_notice:
    "After logging out, you will be not able to load results, friends and catalog, display owned gears, and access SplatNet 3. Results stored in Conch Bay will not be removed.",
  log_out_continue: "Log Out",
  logging_out: "Logging out",
  upgrading_database: "Upgrading database",
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
  n_total_results_showed: "%{n}/%{total} result(s) showed",
  n_filtered_total_filtered_results_showed: "%{n}/%{filtered} (%{total}) filtered result(s) showed",
  today: "Today",
  this_week: "This Week",
  this_month: "This Month",
  this_season: "This Season",
  all_results: "All Results",
  splatnet: "SplatNet",
  splatnet_3: "SplatNet 3",
  export: "Export",
  exporting: "Exporting",
  disclaimer:
    "This app is an unofficial app which uses the information of SplatNet 3, and is not related to Nintendo Co., Ltd.",
  update: "Update",
  support: "Support",
  language_notice:
    "If your game language is inconsistent with the display one, you can change it here. This will allow Conch Bay to load results and SplatNet 3 with the corresponding language.",
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
  database_notice:
    "If you want to clear the database, please long press on Clear Database. Please complete a backup before proceeding.",
  clear_database: "Clear Database",
  clearing_database: "Clearing Database",
  debug_notice: "The following information is for debugging only. Please do NOT share with others.",
  diagnose_network: "Diagnose Network",
  diagnosing_network: "Diagnosing Network",
  copy_session_token: "Copy Session Token",
  copy_web_service_token: "Copy Web Service Token",
  copy_bullet_token: "Copy Bullet Token",
  copied_to_clipboard: "Copied to clipboard",
  export_database: "Export Database",
  privacy_policy: "Privacy Policy",
  acknowledgments: "Acknowledgments",
  creators: "Creators",
  license: "License",
  oss_licenses: "Open-Source Softwares Licenses",
  source_code_repository: "Source Code Repository",
  auto_refresh_enabled: "Auto refresh enabled",
  auto_refresh_disabled: "Auto refresh disabled",
  background_refresh_notice:
    "When Conch Bay is running in the background, Conch Bay will load results regularly. Please allow Conch Bay to send notifications to remind you of the load status.",
  ok: "OK",
  failed_to_enable_background_refresh: "Failed to enable background refresh (%{error})",
  new_results: "New Results",
  loaded_n_results_in_the_background:
    "Conch Bay has loaded %{n} result(s) in the background, please open the app to check.",
  sorry: "Sorry",
  sorry_notice:
    "Conch Bay has encountered some problems, please check for app updates and restart the app. If you continue to face the problem, please contact us.",
  error_report: "Error report",
  error_description: "Can you describe what you were doing before you encountered the problem?",
  version: "Version",
  error_information: "Error information",
  export_results: "Export Results",
  // Shop.
  gesotown: "SplatNet Shop",
  show_owned_gears: "Display Owned Gears",
  loading_owned_gears: "Loading Owned Gears",
  failed_to_load_owned_gears: "Failed to load owned gears (%{error})",
  headgear: "Headgear",
  clothes: "Clothes",
  shoes: "Shoes",
  shop_notice: "You can order gear through the SplatNet 3 below the homepage.",
  // Friend.
  playing: "Playing",
  working: "Working",
  online: "Online",
  offline: "Offline",
  // Filter.
  filter: "Filter",
  modes: "Modes",
  rules: "Rules",
  stages: "Stages",
  weapons: "Weapons",
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
  title: "%{adjective} %{subject}",
  boss_salmonids: "Boss Salmonids",
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
  self: "Self",
  team: "Team",
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
  stage_stats: "Stage Stats",
  weapon_stats: "Weapon Stats",
  clear: "Clear!",
  failure: "Defeat",
  waves_cleared: "Waves Cleared",
  boss_salmonids_defeated: "Boss Salmonids Defeated",
  king_salmonids_defeated: "King Salmonids Defeated",
  scales: "Scales",
  golden_eggs_collected: "Golden Eggs Collected",
  power_eggs_collected: "Power Eggs Collected",
  rescued: "Rescued",
  be_rescued: "Be Rescued",
  wave_stats: "Wave Stats",
  supplied_special_weapons: "Supplied Special Weapons",
  stats_notice:
    "The number in parentheses is over 1-minute average in battles and over each shift average in Salmon Run.",
  stats_notice2:
    "Press on the results group title on the homepage to show statistics of the results group.",
  // Trends.
  trends: "Trends",
  recent: "Recent",
  splatted_including_assisted: "Splatted (Including Assisted)",
  golden_eggs_collected_including_assisted: "Golden Eggs Collected (Including Assisted)",
  trends_notice:
    "The number is over 1-minute average in battles and over each shift average in Salmon Run.",
  trends_notice2: "Long press on tags to show team's average.",
  // Import.
  import: "Import",
  importing: "Importing",
  import_notice:
    "Conch Bay supports importing results exported by Conch Bay, and you can also convert results exported by other 3rd party apps to formats supported by Conch Bay and import them.",
  convert_s3s_outputs: "Convert s3s Outputs",
  convert_stat_ink_salmon_run_json: "Convert stat.ink Salmon Run JSON",
  import_ikawidget3_ikax3: "Import ikawidget3 IKAX3",
  import_salmdroidnw_backup: "Import salmdroidNW Backup",
  "import_salmonia3+_backup": "Import Salmonia3+ Backup",
  import_ikawidget3_ikax3_notice:
    "Please export in ikawidget3 and import it. Please note, some information may be wrong since IKAX3 contains encrypted data.",
  import_salmdroidnw_backup_notice: "Please backup in salmdroidNW and import it.",
  "import_salmonia3+_backup_notice":
    "Please backup as JSON in Salmonia3+ and import it. Please note, some information may be missing since the Salmonia3+ backup does not contain all the data of results.",
  random: "Random",
  split_and_import_notice:
    "Conch Bay requires a lot of memory to import records. If Conch Bay cannot import records, you can split and import them. Please note, splitting and importing takes several minutes to tens of minutes. Besides, you can contact us for assistance through Support at the bottom of the homepage.",
  split_and_import: "Split and Import",
  // Modes.
  battle: "Battle",
  regular_battle: "Regular Battle",
  anarchy_battle: "Anarchy Battle",
  anarchy_battle_series: "Anarchy Battle (Series)",
  anarchy_battle_open: "Anarchy Battle (Open)",
  x_battle: "X Battle",
  challenge_b: "Challenge",
  private_battle: "Private Battle",
  splatfest_battle_open: "Splatfest Battle (Open)",
  splatfest_battle_pro: "Splatfest Battle (Pro)",
  tricolor_battle: "Tricolor Battle",
  tableturf_battle: "Tableturf Battle",
  salmon_run: "Salmon Run",
  big_run: "Big Run",
  eggstra_work: "Eggstra Work",
  // Rules.
  splat_zones: "Splat Zones",
  tower_control: "Tower Control",
  rainmaker: "Rainmaker",
  clam_blitz: "Clam Blitz",
  REGULAR: "Salmon Run",
  BIG_RUN: "Big Run",
  TEAM_CONTEST: "Eggstra Work",
  // Waves.
  wave_n: "Wave %{n}",
  xtrawave: "XTRAWAVE",
  // Water levels.
  low_tide: "Low Tide",
  normal: "Normal",
  high_tide: "High Tide",
  // Escaped.
  VnNTdGFnZS0tOTk5: "",
  "Q29vcFN0YWdlLS05OTk=": "",
  "TGVhZ3VlTWF0Y2hFdmVudC1Ob3RGb3VuZA==": "",
};

export default en;
