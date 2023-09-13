import base from "./base";
import generated from "./zh-Hant.json";

const zhHant = {
  ...base,
  ...generated,
  // API.
  lang: "zh-TW",
  // UI.
  log_in: "登錄",
  log_in_notice:
    "您可以在不登錄的情況下使用法螺灣查看日程與魷魚須商城，匯入記錄並通過統計與趨勢分析。登錄將允許您載入記錄、朋友與目錄，顯示持有的裝備以及訪問魷魚圈3。登錄需要向任天堂以外的imink或nxapi發送非識別資訊，這些資訊不會被記錄或存儲，請參閱私隱政策以獲取更多資訊。",
  log_in_continue: "我已閱讀並理解",
  alternative_log_in_notice:
    "如果您擁有會話令牌並希望跳過由法螺灣獲取會話令牌，您也可以複製會話令牌並完成登錄。",
  log_in_with_session_token: "通過會話令牌登錄",
  logging_in: "獲取令牌中",
  failed_to_acquire_session_token: "未能獲取會話令牌 (%{error})",
  log_out_notice:
    "登出後，您將無法載入記錄、朋友與目錄，顯示持有的裝備以及訪問魷魚圈3。法螺灣已存儲的記錄不會被清除。",
  log_out_continue: "登出",
  logging_out: "登出中",
  upgrading_database: "升級資料庫中",
  reacquiring_tokens: "重新獲取令牌中",
  failed_to_acquire_web_service_token: "未能獲取Web服務令牌 (%{error})",
  failed_to_acquire_bullet_token: "未能獲取Bullet令牌 (%{error})",
  failed_to_update_schedules: "未能更新時間表 (%{error})",
  failed_to_update_splatnet_shop: "未能更新魷魚鬚商城 (%{error})",
  failed_to_check_api_update: "未能檢查API更新 (%{error})",
  failed_to_load_friends: "未能載入朋友 (%{error})",
  failed_to_load_friends_splatfest_voting: "未能載入朋友的祭典投票狀況 (%{error})",
  failed_to_check_splatfest: "未能檢查祭典 (%{error})",
  failed_to_load_summary: "未能載入總覽 (%{error})",
  failed_to_load_catalog: "未能載入目錄 (%{error})",
  failed_to_load_battle_results: "未能載入對戰記錄 (%{error})",
  failed_to_load_salmon_run_results: "未能載入鮭魚跑記錄 (%{error})",
  loading_n_results: "載入%{n}項記錄中",
  loaded_n_results: "已載入%{n}項記錄",
  loaded_n_results_fail_failed: "已載入%{n}項記錄，%{fail}項失敗 (%{error})",
  loaded_n_results_skip_skipped: "已載入%{n}項記錄，%{skip}項跳過",
  loaded_n_results_skip_skipped_fail_failed:
    "已載入%{n}項記錄，%{skip}項跳過，%{fail}項失敗 (%{error})",
  show_more: "顯示更多",
  loading_more: "載入更多中",
  all_results_showed: "已顯示全部記錄",
  n_total_results_showed: "已顯示%{n}/%{total}項記錄",
  n_filtered_total_filtered_results_showed: "已顯示%{n}/%{filtered} (%{total})項篩選的記錄",
  today: "今日",
  this_week: "本週",
  this_month: "本月",
  this_season: "本賽季",
  all_results: "全部記錄",
  splatnet: "魷魚圈",
  splatnet_3: "魷魚圈3",
  export: "匯出",
  exporting: "匯出中",
  disclaimer: "本應用是使用魷魚圈3的資訊的非官方應用，與任天堂有限公司無關。",
  update: "更新",
  support: "支援",
  preference_notice: "您可以根據自己的喜好定制法螺灣。例如，您可以優先顯示鮭魚跑的相關資訊。",
  salmon_run_friendly_mode_enabled: "鮭魚跑友好模式 (%{enabled})",
  enabled: "已啟用",
  disabled: "已停用",
  language_notice:
    "如果您的遊戲語言與顯示語言不一致，您可以在此修改。這將使法螺灣載入對應語言的記錄與魷魚圈3。",
  change_game_language_language: "修改遊戲語言 (%{language})",
  change_display_language_language: "修改顯示語言 (%{language})",
  relog_in_notice: "如果法螺灣無法獲取令牌，您可以重新登錄。",
  relog_in: "重新登錄",
  relog_in_with_session_token: "通過會話令牌重新登錄",
  resource_notice:
    "如果法螺灣無法載入圖像，您可以清除緩存或預載入資源。請注意，由於魷魚圈3的限制，法螺灣僅能預載入部分圖像。",
  clear_cache: "清除緩存",
  clearing_cache: "清除緩存中",
  preload_resources: "預載入資源",
  preloading_resources: "預載入資源中",
  feedback_notice: "如果您在使用法螺灣時遇到任何問題或有任何建議，請隨時分享您的反饋。",
  create_a_github_issue: "創建GitHub Issue",
  send_a_mail: "發送郵件",
  database_notice: "如果您想清除資料庫，請長按清除資料庫。請在繼續之前完成備份。",
  clear_database: "清除資料庫",
  clearing_database: "清除資料庫中",
  debug_notice: "以下資訊僅用於調試。請不要與他人分享。",
  diagnose_network: "診斷網路",
  diagnosing_network: "診斷網路中",
  copy_session_token: "複製會話令牌",
  copy_web_service_token: "複製Web服務令牌",
  copy_bullet_token: "複製Bullet令牌",
  copied_to_clipboard: "已復製到剪貼板",
  export_database: "匯出資料庫",
  privacy_policy: "私隱政策",
  acknowledgments: "致謝",
  creators: "創作者",
  license: "許可",
  oss_licenses: "開源軟體許可",
  source_code_repository: "源代碼庫",
  auto_refresh_enabled: "已啟用自動刷新",
  auto_refresh_disabled: "已停用自動刷新",
  background_refresh_notice:
    "當法螺灣運行於背景時，法螺灣將定期載入記錄。請允許法螺灣傳送通知以提醒您載入狀況。",
  ok: "OK",
  failed_to_enable_background_refresh: "未能啟用背景重新整理 (%{error})",
  new_results: "新記錄",
  loaded_n_results_in_the_background: "法螺灣已在背景載入%{n}項記錄，請打開應用以確認。",
  sorry: "抱歉",
  sorry_notice:
    "法螺灣遇到了一些問題，請檢查應用更新並重新啟動應用。如果您持續遇到這一問題，請聯繫我們。",
  error_report: "錯誤報告",
  error_description: "您可以描述一下，在遇到這一問題之前，您正在做什麼嗎？",
  version: "版本",
  error_information: "錯誤資訊",
  export_results: "匯出記錄",
  // Shop.
  gesotown: "魷魚鬚商城",
  show_owned_gears: "顯示持有的裝備",
  loading_owned_gears: "載入持有的裝備中",
  failed_to_load_owned_gears: "未能載入持有的裝備 (%{error})",
  headgear: "頭部裝備",
  clothes: "服裝",
  shoes: "鞋子",
  shop_notice: "您可以通過主頁下方的魷魚圈3預訂裝備。",
  // Friend.
  playing: "比賽中",
  working: "打工中",
  online: "線上",
  offline: "離線",
  // Filter.
  filter: "篩選",
  modes: "模式",
  rules: "規則",
  stages: "場地",
  weapons: "武器",
  clear_filter: "清除篩選",
  // Result.
  n_x_battle: "%{n}倍比賽",
  n_win_strike: "%{n}連勝",
  score_score: "%{score}計數",
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
  show_raw_data: "顯示原始數據",
  self: "自己",
  team: "團隊",
  // Stats.
  stats: "統計",
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
  stats_notice2: "在主頁點擊記錄組標題可以顯示記錄組的統計。",
  // Trend.
  trends: "趨勢",
  recent: "近期",
  splatted_including_assisted: "擊倒 (含助攻)",
  golden_eggs_collected_including_assisted: "收集的金鮭魚卵 (含助攻)",
  trends_notice: "對戰為每分鐘，鮭魚跑為每次打工的平均值。",
  trends_notice2: "長按標籤以顯示團隊平均值。",
  // Rotations.
  rotations: "場次",
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
    "請在ikawidget3中匯出並匯入。請注意，由於IKAX3包含加密數據，部分資訊可能有誤。",
  import_salmdroidnw_backup_notice: "請在salmdroidNW中備份並匯入。",
  "import_salmonia3+_backup_notice":
    "請在Salmonia3+中備份為JSON並匯入。請注意，由於Salmonia3+備份並未包含記錄的所有數據，部分資訊可能缺失。",
  random: "隨機",
  split_and_import_notice:
    "法螺灣需要佔用大量的內存以匯入記錄。如果法螺灣無法匯入記錄，您可以分割記錄並匯入。請注意，分割並匯入需要數分鐘到數十分鐘的時間。此外，您還可以通過主頁下方的支持聯繫我們以獲得幫助。",
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
  "Q29vcFN0YWdlLS05OTk=": "",
  "TGVhZ3VlTWF0Y2hFdmVudC1Ob3RGb3VuZA==": "",
};

export default zhHant;
