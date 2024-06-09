import base from "./base";
import locale from "./locales/zh-Hant.json";
import generated from "./zh-Hant.json";

const zhHant = {
  ...base,
  ...generated,
  ...locale,
  // API.
  lang: "zh-TW",
  region: "AP",
  // UI.
  log_in: "登入",
  log_in_warning:
    "法螺灣並不會盜用您的帳號或導致您的個人資料外洩。但介於任天堂持續對第三方應用的負面態度，您需要自負使用法螺灣的風險。",
  log_in_notice:
    "您可以在不登入的情況下使用法螺灣查看時間表與魷魚須商城，匯入記錄並透過統計與趨勢分析。登入將允許您載入記錄與好友，查看裝備以及造訪魷魚圈3。登入需要向任天堂以外的imink或nxapi發送非識別訊息，這些資訊不會被記錄或存儲，請參閱私隱政策以取得更多資訊。",
  log_in_continue: "我已閱讀並瞭解",
  alternative_log_in_notice:
    "如果您擁有會話令牌並希望跳過由法螺灣取得會話令牌，您可以複製會話令牌並透過會話令牌登入。",
  log_in_with_session_token: "透過會話令牌登入",
  logging_in: "取得令牌中",
  failed_to_acquire_session_token: "未能取得會話令牌 (%{error})",
  log_out_notice:
    "登出後，您將無法載入記錄與好友，查看裝備以及造訪魷魚圈3。法螺灣已儲存的記錄不會被清除。",
  log_out_continue: "登出",
  logging_out: "登出中",
  upgrading_database: "升級資料庫中",
  reacquiring_tokens: "重新取得令牌中",
  failed_to_acquire_web_service_token: "未能取得Web服務令牌 (%{error})",
  failed_to_acquire_bullet_token: "未能取得Bullet令牌 (%{error})",
  failed_to_update_schedules: "未能更新時間表 (%{error})",
  failed_to_update_splatnet_shop: "未能更新魷魚鬚商城 (%{error})",
  failed_to_check_api_update: "未能檢查API更新 (%{error})",
  failed_to_load_friends: "未能載入朋友 (%{error})",
  failed_to_load_friends_splatfest_voting: "未能載入朋友的祭典投票狀況 (%{error})",
  failed_to_check_splatfest: "未能檢查祭典 (%{error})",
  failed_to_load_summary: "未能載入總覽 (%{error})",
  failed_to_load_battle_results: "未能載入對戰記錄 (%{error})",
  failed_to_load_salmon_run_results: "未能載入鮭魚跑記錄 (%{error})",
  loading_n_results: "載入%{n}項記錄中",
  loaded_n_results: "已載入%{n}項記錄",
  loaded_n_results_failed: "已載入%{n}項記錄，%{fail}項失敗 (%{error})",
  loaded_n_results_skipped: "已載入%{n}項記錄，%{skip}項跳過",
  loaded_n_results_skipped_failed: "已載入%{n}項記錄，%{skip}項跳過，%{fail}項失敗 (%{error})",
  show_more: "顯示更多",
  loading_more: "載入更多中",
  all_results_showed: "已顯示全部記錄",
  n_results_showed: "已顯示%{n}/%{total}項記錄",
  n_filtered_results_showed: "已顯示%{n}/%{filtered} (%{total})項篩選的記錄",
  today: "今日",
  this_week: "本週",
  this_month: "本月",
  this_season: "本賽季",
  all_results: "全部記錄",
  splatnet: "魷魚圈",
  splatnet_3: "魷魚圈3",
  export: "匯出",
  exporting: "匯出中",
  update_notice: "法螺灣有更新。請參閱發行說明以獲取更多資訊。",
  go_to_app_store: "前往App Store",
  go_to_google_play: "前往Google Play",
  release_notes: "發行說明",
  disclaimer: "本應用是使用魷魚圈3的資訊的非官方應用，與任天堂有限公司無關。",
  support: "支援",
  preference_notice: "您可以根據自己的喜好自訂法螺灣。",
  enable: "啟用",
  disable: "停用",
  auto_refresh: "自動重新整理 (%{enable})",
  background_refresh: "背景重新整理 (%{enable})",
  salmon_run_friendly_mode: "鮭魚跑友好模式 (%{enable})",
  language_notice:
    "您可以修改您的地區與語言，以便於法螺灣加載對應地區與語言的祭典、記錄與魷魚圈3。",
  change_game_language: "修改遊戲語言 (%{language})",
  change_splatfest_region: "修改祭典地區 (%{region})",
  japan: "日本",
  the_americas_australia_new_zealand: "美洲大陸、澳洲、新西蘭",
  europe: "歐洲",
  hong_kong_south_korea: "香港、韓國",
  change_display_language: "修改顯示語言 (%{language})",
  relog_in_notice: "如果法螺灣無法取得令牌，您可以重新登入。",
  relog_in: "重新登入",
  relog_in_with_session_token: "通過會話令牌重新登入",
  resource_notice:
    "如果法螺灣無法載入影像，您可以清除快取或預先載入資源。請注意，由於魷魚圈3的限制，法螺灣僅能預先載入部分圖片。",
  clear_cache: "清除快取",
  clearing_cache: "清除快取中",
  preload_resources: "預先載入資源",
  preloading_resources: "預先載入資源中",
  feedback_notice: "如果您在使用法螺灣時遇到任何問題或有任何建議，請隨時分享您的回饋。",
  create_a_github_issue: "創建GitHub Issue",
  send_a_mail: "傳送郵件",
  join_the_beta_version: "加入Beta版本",
  database_notice: "如果您想清除資料庫，請長按清除資料庫。請在繼續之前完成備份。",
  clear_database: "清除資料庫",
  clearing_database: "清除資料庫中",
  debug_notice:
    "調試資訊的外洩可能導致您的帳號被盜用或個人資訊外洩。如果您需要調試，請長按啟用調試並不要與他人分享調試資訊。",
  enable_debugging: "啟用調試",
  copy_session_token: "複製會話令牌",
  copy_web_service_token: "複製Web服務令牌",
  copy_bullet_token: "複製Bullet令牌",
  copied_to_clipboard: "已複製到剪貼簿",
  export_configuration: "匯出配置",
  export_database: "匯出資料庫",
  privacy_policy: "私隱政策",
  acknowledgments: "致謝",
  creators: "創作者",
  license: "許可",
  oss_licenses: "開源軟體許可",
  source_code_repository: "原始碼庫",
  auto_refresh_enabled: "已啟用自動重新整理",
  auto_refresh_disabled: "已停用自動重新整理",
  notification_notice:
    "當法螺灣運行於背景時，法螺灣將定期載入記錄。請允許法螺灣傳送通知以提醒您載入狀況。",
  ok: "OK",
  failed_to_enable_background_refresh: "未能啟用背景重新整理 (%{error})",
  new_results: "新記錄",
  loaded_n_results_in_the_background: "法螺灣已在背景載入%{n}項記錄，請開啟應用以確認。",
  sorry: "抱歉",
  sorry_notice:
    "法螺灣遇到了一些問題，請檢查應用更新並重新啟動應用。如果您持續遇到此問題，請與我們聯絡。",
  error_report: "錯誤報告",
  error_description: "您可以描述一下，在遇到這一問題之前，您正在做什麼嗎？",
  version: "版本",
  error_information: "錯誤資訊",
  export_results: "匯出記錄",
  // Shop.
  gesotown: "魷魚鬚商城",
  shop_notice: "您可以透過主頁下方的魷魚圈3預訂裝備。",
  // Friend.
  playing: "比賽中",
  working: "打工中",
  online: "線上",
  offline: "離線",
  // Filter.
  filter: "篩選",
  players: "玩家",
  modes: "模式",
  rules: "規則",
  stages: "場地",
  weapons: "武器",
  clear_filter: "清除篩選",
  filter_notice: "您可以透過長按篩選按鈕清除篩選。",
  // Result.
  n_x_battle: "%{n}倍比賽",
  conch_clash: "法螺爭奪戰",
  n_x_conch_clash: "%{n}倍法螺爭奪戰",
  n_win_strike: "%{n}連勝",
  score_n: "%{score}計數",
  knock_out: "完勝！",
  no_contest: "本次對戰已被判定為無效比賽。",
  penalty: "比賽未能正常結束。",
  exemption: "因有玩家中斷連線，比賽結果不會以落敗計算。",
  details: "詳細數據",
  rule: "規則",
  stage: "場地",
  rank_points: "技術點數",
  anarchy_power: "蠻頹戰力",
  x_power: "X戰力",
  challenge_e: "活動",
  challenge_power: "活動戰力",
  splatfest_power: "祭典戰力",
  clout: "貢獻度",
  synergy_bonus: "團隊穿搭獎勵",
  festival_shell: "祭典貝",
  played_time: "遊戲時間",
  medals_earned: "獲得的表揚",
  title: "%{adjective}%{subject}",
  boss_salmonids: "巨大鮭魚",
  hazard_level: "危險度",
  supplied_weapons: "派發武器",
  job_title: "打工稱號",
  your_points: "獲得點數",
  job_score: "打工分數",
  pay_grade: "評價倍率",
  clear_bonus: "完成獎勵",
  salmometer: "頭目槽",
  scenario_code: "劇本代碼",
  hide_player_names: "隱藏玩家名稱",
  show_player_names: "顯示玩家名稱",
  share_image: "分享圖片",
  show_raw_data: "顯示原始數據",
  view_battles_and_jobs_with_this_player: "查看與此玩家的戰鬥與打工",
  failed_to_view_battles_and_jobs_with_this_player: "未能查看與此玩家的戰鬥與打工",
  analyze_build: "分析配裝",
  view_x_rankings: "查看X排名",
  checking_x_rankings: "檢查X排名中",
  failed_to_check_x_rankings: "未能檢查X排名",
  self: "自己",
  team: "團隊",
  // Stats.
  stats: "統計",
  default: "預設",
  appearance: "出現數",
  win_rate: "勝率",
  all: "全部",
  day: "日",
  week: "周",
  month: "月",
  season: "赛季",
  victory: "WIN!",
  defeat: "LOSE...",
  power: "戰力",
  turf_inked: "塗墨面積",
  splatted: "擊倒",
  be_splatted: "陣亡",
  special_weapon_uses: "特殊武器發動",
  stage_stats: "場地記錄",
  weapon_stats: "武器記錄",
  clear: "Clear!!",
  failure: "Failure",
  waves_cleared: "完成WAVE",
  boss_salmonids_defeated: "擊倒的巨大鮭魚",
  king_salmonids_defeated: "擊倒的頭目鮭魚",
  scales: "鱗片",
  golden_eggs_collected: "收集的金鮭魚卵",
  power_eggs_collected: "收集的鮭魚卵",
  rescued: "救援",
  be_rescued: "被救助",
  wave_stats: "WAVE記錄",
  supplied_special_weapons: "派發特殊武器",
  stats_notice: "括號內的數字對戰為每分鐘，鮭魚跑為每次打工的平均值。",
  stats_notice2: "在主頁點選記錄組標題可以顯示記錄組的統計。",
  // Trend.
  trends: "趨勢",
  recent: "近期",
  splatted_including_assisted: "擊倒 (含助攻)",
  golden_eggs_collected_including_assisted: "收集的金鮭魚卵 (含助攻)",
  trends_notice: "對戰為每分鐘，鮭魚跑為每次打工的平均值。",
  trends_notice2: "長按標籤以顯示團隊平均值。",
  // Rotations.
  rotations: "場次",
  // Gears.
  gears: "顯示裝備",
  failed_to_load_gears: "未能載入裝備 (%{error})",
  headgear: "頭部裝備",
  clothes: "服裝",
  shoes: "鞋子",
  brand: "品牌",
  ability: "裝備能力",
  // Import.
  import: "匯入",
  importing: "匯入中",
  import_notice:
    "法螺灣支持匯入由法螺灣匯出的記錄，您也可以將其它第三方應用匯出的記錄轉換至法螺灣支援的格式並匯入。",
  convert_s3s_outputs: "轉換s3s匯出的記錄",
  convert_stat_ink_salmon_run_json: "轉換stat.ink鮭魚跑JSON",
  import_ikawidget3_ikax3: "匯入ikawidget3 IKAX3",
  import_salmdroidnw_backup: "匯入salmdroidNW備份",
  "import_salmonia3+_backup": "匯入Salmonia3+备份",
  import_ikawidget3_ikax3_notice:
    "請在ikawidget3中匯出並匯入。請注意，由於IKAX3包含加密數據，部分資訊可能不準確。",
  import_salmdroidnw_backup_notice: "請在salmdroidNW中備份並匯入。",
  "import_salmonia3+_backup_notice":
    "請在Salmonia3+中備份並匯入。請注意，由於Salmonia3+備份並未包含記錄的所有數據，部分資訊可能缺失。",
  random: "隨機",
  split_and_import_notice:
    "法螺灣需要佔用大量的記憶體以匯入記錄。如果法螺灣無法匯入記錄，您可以分割記錄並匯入。請注意，分割並匯入需要數分鐘到數十分鐘的時間。",
  split_and_import: "分割並匯入",
  // Modes.
  battle: "對戰",
  regular_battle: "一般比賽",
  anarchy_battle: "蠻頹比賽",
  anarchy_battle_series: "蠻頹比賽 (挑戰)",
  anarchy_battle_open: "蠻頹比賽 (開放)",
  x_battle: "X比賽",
  challenge_b: "活動比賽",
  private_battle: "私人比賽",
  splatfest_battle_open: "祭典比賽 (開放)",
  splatfest_battle_pro: "祭典比賽 (挑戰)",
  tricolor_battle: "三色奪寶比賽",
  tableturf_battle: "占地鬥士",
  salmon_run: "鮭魚跑",
  big_run: "大型跑",
  eggstra_work: "團隊打工競賽",
  // Rules.
  splat_zones: "真格區域",
  tower_control: "真格塔樓",
  rainmaker: "真格魚虎對戰",
  clam_blitz: "真格蛤蜊",
  REGULAR: "鮭魚跑",
  BIG_RUN: "大型跑",
  TEAM_CONTEST: "團隊打工競賽",
  // Waves.
  wave_n: "WAVE %{n}",
  xtrawave: "EX-WAVE",
  // Water levels.
  low_tide: "乾潮",
  normal: "普通",
  high_tide: "滿潮",
  // Escaped.
  "VnNTdGFnZS0tMQ==": "隨機",
  VnNTdGFnZS0tOTk5: "",
  Q29vcFN0YWdlLS0x: "各地同時發生",
  "Q29vcFN0YWdlLS05OTk=": "",
  "TGVhZ3VlTWF0Y2hFdmVudC1Ob3RGb3VuZA==": "",
  Q29vcEVuZW15LTMw: "頭目聯合",
  Q29vcEVuZW15LTMx: "隨機",
};

export default zhHant;
