import base from "./base";
import generated from "./zh-Hans.json";

const zhHans = {
  ...base,
  ...generated,
  // API.
  lang: "zh-CN",
  region: "AP",
  // UI.
  log_in: "登录",
  log_in_warning:
    "法螺湾并不会盗用您的账号或导致您的个人信息泄漏。但介于任天堂持续对第三方应用的消极态度，您需要自负使用法螺湾的风险。",
  log_in_notice:
    "您可以在不登录的情况下使用法螺湾查看日程与鱿鱼须商城，导入记录并通过统计与趋势分析。登录将允许您加载记录、好友与目录，显示持有的装备以及访问鱿鱼圈3。登录需要向任天堂以外的imink或nxapi发送非识别信息，这些信息不会被记录或存储，请参阅隐私政策以获取更多信息。",
  log_in_continue: "我已阅读并理解",
  alternative_log_in_notice:
    "如果您拥有会话令牌并希望跳过由法螺湾获取会话令牌，您可以复制会话令牌并通过会话令牌登录。",
  log_in_with_session_token: "通过会话令牌登录",
  logging_in: "获取令牌中",
  failed_to_acquire_session_token: "未能获取会话令牌 (%{error})",
  log_out_notice:
    "登出后，您将无法加载记录、好友与目录，显示持有的装备以及访问鱿鱼圈3。法螺湾已存储的记录不会被清除。",
  log_out_continue: "登出",
  logging_out: "登出中",
  upgrading_database: "升级数据库中",
  reacquiring_tokens: "重新获取令牌中",
  failed_to_acquire_web_service_token: "未能获取Web服务令牌 (%{error})",
  failed_to_acquire_bullet_token: "未能获取Bullet令牌 (%{error})",
  failed_to_update_schedules: "未能更新日程 (%{error})",
  failed_to_update_splatnet_shop: "未能更新鱿鱼须商城 (%{error})",
  failed_to_check_api_update: "未能检查API更新 (%{error})",
  failed_to_load_friends: "未能加载好友 (%{error})",
  failed_to_load_friends_splatfest_voting: "未能加载好友的祭典投票情况 (%{error})",
  failed_to_check_splatfest: "未能检查祭典 (%{error})",
  failed_to_load_summary: "未能加载总览 (%{error})",
  failed_to_load_catalog: "未能加载目录 (%{error})",
  failed_to_load_battle_results: "未能加载对战记录 (%{error})",
  failed_to_load_salmon_run_results: "未能加载鲑鱼跑记录 (%{error})",
  loading_n_results: "加载%{n}项记录中",
  loaded_n_results: "已加载%{n}项记录",
  loaded_n_results_fail_failed: "已加载%{n}项记录，%{fail}项失败 (%{error})",
  loaded_n_results_skip_skipped: "已加载%{n}项记录，%{skip}项跳过",
  loaded_n_results_skip_skipped_fail_failed:
    "已加载%{n}项记录，%{skip}项跳过，%{fail}项失败 (%{error})",
  show_more: "显示更多",
  loading_more: "加载更多中",
  all_results_showed: "已显示全部记录",
  n_total_results_showed: "已显示%{n}/%{total}项记录",
  n_filtered_total_filtered_results_showed: "已显示%{n}/%{filtered} (%{total})项筛选的记录",
  today: "今日",
  this_week: "本周",
  this_month: "本月",
  this_season: "本赛季",
  all_results: "全部记录",
  splatnet: "鱿鱼圈",
  splatnet_3: "鱿鱼圈3",
  export: "导出",
  exporting: "导出中",
  disclaimer: "本应用是使用鱿鱼圈3的信息的非官方应用，与任天堂有限公司无关。",
  update: "更新",
  support: "支持",
  preference_notice:
    "您可以根据自己的喜好自定义法螺湾。例如，您可以允许法螺湾在后台加载记录或是优先显示鲑鱼跑的相关信息。",
  background_refresh_enabled: "后台刷新 (%{enabled})",
  salmon_run_friendly_mode_enabled: "鲑鱼跑友好模式 (%{enabled})",
  enabled: "已启用",
  disabled: "已停用",
  language_notice:
    "您可以修改您的地区与语言，以便于法螺湾加载对应地区与语言的祭典、记录与鱿鱼圈3。",
  change_game_language_language: "修改游戏语言 (%{language})",
  change_splatfest_region: "修改祭典地区 (%{region})",
  japan: "日本",
  the_americas_australia_new_zealand: "美洲大陆、澳大利亚、新西兰",
  europe: "欧洲",
  hong_kong_south_korea: "香港、韩国",
  change_display_language_language: "修改显示语言 (%{language})",
  relog_in_notice: "如果法螺湾无法获取令牌，您可以重新登录。",
  relog_in: "重新登录",
  relog_in_with_session_token: "通过会话令牌重新登录",
  resource_notice:
    "如果法螺湾无法加载图像，您可以清除缓存或预加载资源。请注意，由于鱿鱼圈3的限制，法螺湾仅能预加载部分图片。",
  clear_cache: "清除缓存",
  clearing_cache: "清除缓存中",
  preload_resources: "预加载资源",
  preloading_resources: "预加载资源中",
  feedback_notice: "如果您在使用法螺湾时遇到任何问题或有任何建议，请随时分享您的反馈。",
  create_a_github_issue: "创建GitHub Issue",
  send_a_mail: "发送邮件",
  database_notice: "如果您想清除数据库，请长按清除数据库。请在继续之前完成备份。",
  clear_database: "清除数据库",
  clearing_database: "清除数据库中",
  debug_notice: "以下信息仅用于调试。请不要与他人分享。",
  diagnose_network: "诊断网络",
  diagnosing_network: "诊断网络中",
  copy_session_token: "复制会话令牌",
  copy_web_service_token: "复制Web服务令牌",
  copy_bullet_token: "复制Bullet令牌",
  copied_to_clipboard: "已复制到剪贴板",
  copy_configuration_and_state: "复制配置与状态",
  export_database: "导出数据库",
  privacy_policy: "隐私政策",
  acknowledgments: "致谢",
  creators: "创作者",
  license: "许可",
  oss_licenses: "开源软件许可",
  source_code_repository: "源代码库",
  auto_refresh_enabled: "已启用自动刷新",
  auto_refresh_disabled: "已停用自动刷新",
  notification_notice:
    "当法螺湾运行于后台时，法螺湾将定期加载记录。请允许法螺湾发送通知以提醒您加载状况。",
  ok: "OK",
  failed_to_enable_background_refresh: "未能启用后台刷新 (%{error})",
  new_results: "新记录",
  loaded_n_results_in_the_background: "法螺湾已在后台加载%{n}项记录，请打开应用以确认。",
  sorry: "抱歉",
  sorry_notice:
    "法螺湾遇到了一些问题，请检查应用更新并重新启动应用。如果您持续遇到这一问题，请联系我们。",
  error_report: "错误报告",
  error_description: "您可以描述一下，在遇到这一问题之前，您正在做什么吗？",
  version: "版本",
  error_information: "错误信息",
  export_results: "导出记录",
  // Shop.
  gesotown: "鱿鱼须商城",
  show_owned_gears: "显示持有的装备",
  loading_owned_gears: "加载持有的装备中",
  failed_to_load_owned_gears: "未能加载持有的装备 (%{error})",
  headgear: "头部装备",
  clothes: "服装",
  shoes: "鞋子",
  shop_notice: "您可以通过主页下方的鱿鱼圈3预订装备。",
  // Friend.
  playing: "比赛中",
  working: "打工中",
  online: "线上",
  offline: "离线",
  // Filter.
  filter: "筛选",
  modes: "模式",
  rules: "规则",
  stages: "场地",
  weapons: "武器",
  clear_filter: "清除筛选",
  // Result.
  n_x_battle: "%{n}倍比赛",
  n_win_strike: "%{n}连胜",
  score_score: "%{score}计数",
  knock_out: "完胜！",
  no_contest: "本场对战已被判定为无效比赛。",
  penalty: "对战未能正常结束。",
  exemption: "由于有玩家中断连接，本场对战不会以落败计算。",
  details: "详细数据",
  rule: "规则",
  stage: "场地",
  rank_points: "技术点数",
  anarchy_power: "蛮颓战力",
  x_power: "X战力",
  challenge_e: "活动",
  challenge_power: "活动战力",
  splatfest_power: "祭典战力",
  clout: "贡献度",
  festival_shell: "祭典贝",
  played_time: "游戏时间",
  medals_earned: "获得的表彰",
  title: "%{adjective}%{subject}",
  boss_salmonids: "巨大鲑鱼",
  hazard_level: "危险度",
  supplied_weapons: "发放武器",
  job_title: "打工称号",
  your_points: "获得点数",
  job_score: "打工分数",
  pay_grade: "评价倍率",
  clear_bonus: "通关奖励",
  salmometer: "头目槽",
  scenario_code: "剧本代码",
  hide_player_names: "隐藏玩家名称",
  show_player_names: "显示玩家名称",
  show_raw_data: "显示原始数据",
  self: "自己",
  team: "团队",
  // Stats.
  stats: "统计",
  all: "全部",
  day: "日",
  week: "周",
  month: "月",
  season: "赛季",
  victory: "WIN!",
  defeat: "LOSE...",
  power: "战力",
  turf_inked: "涂墨面积",
  splatted: "击倒",
  be_splatted: "阵亡",
  special_weapon_uses: "特殊武器发动",
  stage_stats: "场地记录",
  weapon_stats: "武器记录",
  clear: "Clear!!",
  failure: "Failure",
  waves_cleared: "通关的WAVE",
  boss_salmonids_defeated: "击倒的巨大鲑鱼",
  king_salmonids_defeated: "击倒的头目鲑鱼",
  scales: "鳞片",
  golden_eggs_collected: "收集的金鲑鱼卵",
  power_eggs_collected: "收集的鲑鱼卵",
  rescued: "救援",
  be_rescued: "被救助",
  wave_stats: "WAVE记录",
  supplied_special_weapons: "发放特殊武器",
  stats_notice: "括号内的数字对战为每分钟，鲑鱼跑为每场打工的平均值。",
  stats_notice2: "在主页点击记录组标题可以显示记录组的统计。",
  // Trend.
  trends: "趋势",
  recent: "近期",
  splatted_including_assisted: "击倒 (含助攻)",
  golden_eggs_collected_including_assisted: "收集的金鲑鱼卵 (含助攻)",
  trends_notice: "对战为每分钟，鲑鱼跑为每场打工的平均值。",
  trends_notice2: "长按标签以显示团队平均值。",
  // Rotations.
  rotations: "场次",
  // Import.
  import: "导入",
  importing: "导入中",
  import_notice:
    "法螺湾支持导入由法螺湾导出的记录，您也可以将其它第三方应用导出的记录转换至法螺湾支持的格式并导入。",
  convert_s3s_outputs: "转换s3s导出的记录",
  convert_stat_ink_salmon_run_json: "转换stat.ink鲑鱼跑JSON",
  import_ikawidget3_ikax3: "导入ikawidget3 IKAX3",
  import_salmdroidnw_backup: "导入salmdroidNW备份",
  "import_salmonia3+_backup": "导入Salmonia3+备份",
  import_ikawidget3_ikax3_notice:
    "请在ikawidget3中导出并导入。请注意，由于IKAX3包含加密数据，部分信息可能有误。",
  import_salmdroidnw_backup_notice: "请在salmdroidNW中备份并导入。",
  "import_salmonia3+_backup_notice":
    "请在Salmonia3+中备份为JSON并导入。请注意，由于Salmonia3+备份并未包含记录的所有数据，部分信息可能缺失。",
  random: "随机",
  split_and_import_notice:
    "法螺湾需要占用大量的内存以导入记录。如果法螺湾无法导入记录，您可以分割记录并导入。请注意，分割并导入需要数分钟到数十分钟的时间。",
  split_and_import: "分割并导入",
  // Modes.
  battle: "对战",
  regular_battle: "一般比赛",
  anarchy_battle: "蛮颓比赛",
  anarchy_battle_series: "蛮颓比赛 (挑战)",
  anarchy_battle_open: "蛮颓比赛 (开放)",
  x_battle: "X比赛",
  challenge_b: "活动比赛",
  private_battle: "私人比赛",
  splatfest_battle_open: "祭典比赛 (开放)",
  splatfest_battle_pro: "祭典比赛 (挑战)",
  tricolor_battle: "三色夺宝比赛",
  tableturf_battle: "占地斗士",
  salmon_run: "鲑鱼跑",
  big_run: "大型跑",
  eggstra_work: "团队打工竞赛",
  // Rules.
  splat_zones: "真格区域",
  tower_control: "真格塔楼",
  rainmaker: "真格鱼虎对战",
  clam_blitz: "真格蛤蜊",
  REGULAR: "鲑鱼跑",
  BIG_RUN: "大型跑",
  TEAM_CONTEST: "团队打工竞赛",
  // Waves.
  wave_n: "WAVE %{n}",
  xtrawave: "EX-WAVE",
  // Water levels.
  low_tide: "干潮",
  normal: "普通",
  high_tide: "满潮",
  // Escaped.
  "VnNTdGFnZS0tMQ==": "随机",
  VnNTdGFnZS0tOTk5: "",
  "Q29vcFN0YWdlLS05OTk=": "",
  "TGVhZ3VlTWF0Y2hFdmVudC1Ob3RGb3VuZA==": "",
};

export default zhHans;
