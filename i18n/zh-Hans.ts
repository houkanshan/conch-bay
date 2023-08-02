import base from "./base";
import generated from "./zh-Hans.json";

const zhHans = {
  ...base,
  ...generated,
  // API.
  lang: "zh-CN",
  // UI.
  log_in: "登录",
  log_in_notice:
    "法螺湾需要获取令牌以访问鱿鱼圈3。该过程涉及向非任天堂的imink或nxapi发送含有最少的非身份信息的安全请求。这些信息不会被记录或存储，请参阅隐私政策以获取更多信息。",
  log_in_continue: "我已阅读并理解",
  alternative_log_in_notice:
    "如果您拥有会话令牌并希望跳过由法螺湾获取令牌，您也可以复制会话令牌并完成登录。",
  log_in_with_session_token: "通过会话令牌登录",
  logging_in: "获取令牌中",
  failed_to_acquire_session_token: "未能获取会话令牌 (%{error})",
  log_out_notice:
    "登出后，您将无法加载记录、好友与目录，显示持有的装备与访问鱿鱼圈3。法螺湾已存储的记录不会被清除。",
  log_out_continue: "登出",
  logging_out: "登出中",
  failed_to_check_update: "未能检查法螺湾更新 (%{error})",
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
  current_battle_schedule: "目前的对战日程",
  current_salmon_run_schedule: "目前的鲑鱼跑日程",
  n_total_results_showed: "已显示%{n}/%{total}项记录",
  n_filtered_total_filtered_results_showed: "已显示%{n}/%{filtered} (%{total})项筛选的记录",
  today: "今日",
  this_week: "本周",
  this_month: "本月",
  this_season: "本赛季",
  all_results: "全部记录",
  show_more_notice: "长按显示更多以显示指定时间段内的记录。",
  splatnet: "鱿鱼圈",
  splatnet_3: "鱿鱼圈3",
  import: "导入",
  importing: "导入中",
  import_notice:
    "法螺湾支持导入由法螺湾导出的记录，您也可以将其它第三方App导出的记录转换至法螺湾支持的格式并导入。此外，法螺湾需要占用大量的内存以导入记录。如果法螺湾无法导入记录，您可以分割记录并导入。",
  convert_s3s_outputs: "转换s3s导出的记录",
  convert_stat_ink_salmon_run_json: "转换stat.ink鲑鱼跑JSON",
  convert_ikawidget3_ikax3: "转换ikawidget3 IKAX3",
  convert_salmdroidnw_backup: "转换salmdroidNW备份",
  "convert_salmonia3+_backup": "转换Salmonia3+备份",
  split_results: "分割记录",
  export: "导出",
  exporting: "导出中",
  disclaimer: "本应用是使用鱿鱼圈3的信息的非官方应用，与任天堂有限公司无关。",
  update: "更新",
  support: "支持",
  language_notice:
    "如果您的游戏语言与显示语言不一致，您可以在此修改。这将使法螺湾加载对应语言的记录。",
  change_game_language_language: "修改游戏语言 (%{language})",
  change_display_language_language: "修改显示语言 (%{language})",
  relog_in_notice: "如果法螺湾无法获取令牌，您可以重新登录。",
  relog_in: "重新登录",
  relog_in_with_session_token: "通过会话令牌重新登录",
  resource_notice:
    "如果法螺湾无法加载图片，您可以清除缓存或预加载资源。请注意，由于鱿鱼圈3的限制，法螺湾仅能预加载部分图片。",
  clear_cache: "清除缓存",
  clearing_cache: "清除缓存中",
  preload_resources: "预加载资源",
  preloading_resources: "预加载资源中",
  feedback_notice: "如果您在使用法螺湾时遇到任何问题或有任何建议，请随时分享您的反馈。",
  create_a_github_issue: "创建GitHub Issue",
  send_a_mail: "发送邮件",
  debug_notice: "以下信息仅用于调试。请不要与他人分享。",
  copy_session_token: "复制会话令牌",
  copy_web_service_token: "复制Web服务令牌",
  copy_bullet_token: "复制Bullet令牌",
  copied_to_clipboard: "已复制到剪贴板",
  export_results: "导出记录",
  export_database: "导出数据库",
  privacy_policy: "隐私政策",
  acknowledgments: "致谢",
  creators: "创作者",
  license: "许可",
  oss_licenses: "开源软件许可",
  source_code_repository: "源代码库",
  first_aid_notice: "数据库已损坏并无法加载。请导出记录并重新安装法螺湾。",
  auto_refresh_enabled: "已启用自动刷新",
  auto_refresh_disabled: "已停用自动刷新",
  background_refresh_notice:
    "当法螺湾运行于后台时，法螺湾将定期加载记录。请允许法螺湾发送通知以提醒您加载状况。",
  ok: "OK",
  failed_to_enable_background_refresh: "未能启用后台刷新 (%{error})",
  new_results: "新记录",
  loaded_n_results_in_the_background: "法螺湾已在后台加载%{n}项记录，请打开App以确认。",
  // Shop.
  gesotown: "鱿鱼须商城",
  order_in_nintendo_switch_online: "在Nintendo Switch Online中预订",
  show_owned_gears: "显示持有的装备",
  loading_owned_gears: "加载持有的装备中",
  failed_to_load_owned_gears: "未能加载持有的装备 (%{error})",
  headgear: "头部装备",
  clothes: "服装",
  shoes: "鞋子",
  // Friend.
  playing: "比赛中",
  working: "打工中",
  online: "线上",
  offline: "离线",
  // Filter.
  filter: "筛选",
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
  clout: "贡献度",
  festival_shell: "祭典贝",
  splatfest_power: "祭典战力",
  played_time: "游戏时间",
  medals_earned: "获得的表彰",
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
  open_in_nintendo_switch_online: "在Nintendo Switch Online中查看",
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
  golden_eggs_collected: "收集的金鲑鱼卵",
  power_eggs_collected: "收集的鲑鱼卵",
  rescued: "救援",
  be_rescued: "被救助",
  wave_stats: "WAVE记录",
  special_weapon_stats: "特殊武器记录",
  stats_notice: "括号内的数字对战为每分钟，鲑鱼跑为每场打工的平均值。",
  // Trend.
  trends: "趋势",
  recent: "近期",
  splatted_including_assisted: "击倒 (含助攻)",
  golden_eggs_collected_including_assisted: "收集的金鲑鱼卵 (含助攻)",
  trends_notice: "对战为每分钟，鲑鱼跑为每场打工的平均值。",
  trends_notice2: "长按标签以显示团队平均值。",
  // Modes.
  modes: "模式",
  battle: "对战",
  regular_battle: "一般比赛",
  anarchy_battle: "蛮颓比赛",
  anarchy_battle_series: "蛮颓比赛 (挑战)",
  anarchy_battle_open: "蛮颓比赛 (开放)",
  x_battle: "X比赛",
  challenge_b: "活动比赛",
  private_battle: "私人比赛",
  splatfest_battle: "祭典比赛",
  tricolor_battle: "三色夺宝比赛",
  tableturf_battle: "占地斗士",
  "VnNNb2RlLTE=": "一般比赛",
  "VnNNb2RlLTI=": "蛮颓比赛 (挑战)",
  "VnNNb2RlLTM=": "X比赛",
  "VnNNb2RlLTQ=": "活动比赛",
  "VnNNb2RlLTU=": "私人比赛",
  "VnNNb2RlLTY=": "祭典比赛 (开放)",
  "VnNNb2RlLTc=": "祭典比赛 (挑战)",
  "VnNNb2RlLTg=": "三色夺宝比赛",
  VnNNb2RlLTUx: "蛮颓比赛 (开放)",
  CHALLENGE: "挑战",
  OPEN: "开放",
  salmon_run: "鲑鱼跑",
  big_run: "大型跑",
  eggstra_work: "团队打工竞赛",
  // Rules.
  rules: "规则",
  "VnNSdWxlLTA=": "占地对战",
  "VnNSdWxlLTE=": "真格区域",
  "VnNSdWxlLTI=": "真格塔楼",
  "VnNSdWxlLTM=": "真格鱼虎对战",
  "VnNSdWxlLTQ=": "真格蛤蜊",
  "VnNSdWxlLTU=": "三色夺宝对战",
  splat_zones: "真格区域",
  tower_control: "真格塔楼",
  rainmaker: "真格鱼虎对战",
  clam_blitz: "真格蛤蜊",
  REGULAR: "鲑鱼跑",
  BIG_RUN: "大型跑",
  TEAM_CONTEST: "团队打工竞赛",
  // Challenges.
  "TGVhZ3VlTWF0Y2hFdmVudC1Db21wZXRpdGlvbnNBVQ==": "大赛活动 (AU/NZ)",
  "TGVhZ3VlTWF0Y2hFdmVudC1Db21wZXRpdGlvbnNFVQ==": "大赛活动 (EU)",
  "TGVhZ3VlTWF0Y2hFdmVudC1Db21wZXRpdGlvbnNKUA==": "大赛活动 (JP)",
  "TGVhZ3VlTWF0Y2hFdmVudC1Db21wZXRpdGlvbnNVUw==": "大赛活动 (US)",
  TGVhZ3VlTWF0Y2hFdmVudC1EZWVwRm9n: "迷雾之战",
  "TGVhZ3VlTWF0Y2hFdmVudC1IaWdoSnVtcA==": "冲天跳跃对战",
  TGVhZ3VlTWF0Y2hFdmVudC1Nb250aGx5TGVhZ3VlTWF0Y2hSZWFs: "月一·活动比赛",
  "TGVhZ3VlTWF0Y2hFdmVudC1OZXdTZWFzb25DdXA=": "新赛季开幕纪念杯",
  TGVhZ3VlTWF0Y2hFdmVudC1QYWlyQ3Vw: "最强搭档争夺战",
  "TGVhZ3VlTWF0Y2hFdmVudC1SYW5kb21XZWFwb24=": "爱惜使用各种武器的武器子杯",
  "TGVhZ3VlTWF0Y2hFdmVudC1TcGVjaWFsUnVzaF9VbHRyYVNob3Q=": "终极发射狂欢祭",
  "TGVhZ3VlTWF0Y2hFdmVudC1TcGVjaWFsUnVzaF9aaXBDYXN0ZXI=": "触手喷射狂欢祭",
  TGVhZ3VlTWF0Y2hFdmVudC1Vc3VhbGx5: "大赛活动",
  TGVhZ3VlTWF0Y2hFdmVudC1XZWFwb25MaW1pdGVkX1JvbGxlckJydXNo: "最强滚筒&画笔争夺战",
  // Stages.
  stages: "场地",
  VnNTdGFnZS0x: "温泉花大峡谷",
  VnNTdGFnZS0y: "鳗鲶区",
  VnNTdGFnZS0z: "烟管鱼市场",
  VnNTdGFnZS00: "竹蛏疏洪道",
  VnNTdGFnZS01: "鱼露遗迹",
  VnNTdGFnZS02: "鱼肉碎金属",
  VnNTdGFnZS03: "臭鱼干温泉",
  VnNTdGFnZS04: "塔拉波特购物公园",
  VnNTdGFnZS05: "比目鱼住宅区",
  "VnNTdGFnZS0xMA==": "真鲭跨海大桥",
  "VnNTdGFnZS0xMQ==": "金眼鲷美术馆",
  "VnNTdGFnZS0xMg==": "鬼头刀SPA度假区",
  "VnNTdGFnZS0xMw==": "海女美术大学",
  "VnNTdGFnZS0xNA==": "鲟鱼造船厂",
  "VnNTdGFnZS0xNQ==": "座头购物中心",
  "VnNTdGFnZS0xNg==": "醋饭海洋世界",
  "VnNTdGFnZS0xNw==": "昆布赛道",
  "VnNTdGFnZS0xOA==": "鬼蝠鲼玛利亚号",
  VnNTdGFnZS0tOTk5: "",
  // Coop stages.
  "Q29vcFN0YWdlLTE=": "鲑坝",
  "Q29vcFN0YWdlLTI=": "新卷堡",
  "Q29vcFN0YWdlLTY=": "漂浮落难船",
  "Q29vcFN0YWdlLTc=": "麦年海洋发电所",
  "Q29vcFN0YWdlLTg=": "生筋子系统交流道遗址",
  "Q29vcFN0YWdlLTEwMA==": "醋饭海洋世界",
  "Q29vcFN0YWdlLTEwMg==": "海女美术大学",
  "Q29vcFN0YWdlLTEwMw==": "竹蛏疏洪道",
  "Q29vcFN0YWdlLS05OTk=": "",
  // Weapons.
  weapons: "武器",
  "V2VhcG9uLTA=": "广域标记枪",
  "V2VhcG9uLTE=": "广域标记枪 新型",
  V2VhcG9uLTEw: "新叶射击枪",
  V2VhcG9uLTEx: "枫叶射击枪",
  V2VhcG9uLTIw: "窄域标记枪",
  V2VhcG9uLTIx: "窄域标记枪 新型",
  V2VhcG9uLTMw: "专业模型枪MG",
  V2VhcG9uLTMx: "专业模型枪RG",
  V2VhcG9uLTQw: "斯普拉射击枪",
  V2VhcG9uLTQx: "斯普拉射击枪 联名",
  V2VhcG9uLTQ1: "英雄射击枪 复制",
  V2VhcG9uLTUw: ".52加仑",
  V2VhcG9uLTYw: "N-ZAP85",
  V2VhcG9uLTYx: "N-ZAP89",
  V2VhcG9uLTcw: "顶尖射击枪",
  V2VhcG9uLTcx: "顶尖射击枪 联名",
  V2VhcG9uLTgw: ".96加仑",
  V2VhcG9uLTgx: ".96加仑 装饰",
  V2VhcG9uLTkw: "喷射清洁枪",
  V2VhcG9uLTkx: "喷射清洁枪 改装",
  "V2VhcG9uLTEwMA==": "太空射击枪",
  "V2VhcG9uLTEwMQ==": "太空射击枪 联名",
  "V2VhcG9uLTIwMA==": "新星爆破枪",
  "V2VhcG9uLTIwMQ==": "新星爆破枪 新型",
  "V2VhcG9uLTIxMA==": "火热爆破枪",
  "V2VhcG9uLTIyMA==": "远距爆破枪",
  "V2VhcG9uLTIzMA==": "冲涂爆破枪",
  "V2VhcG9uLTIzMQ==": "冲涂爆破枪 新型",
  "V2VhcG9uLTI0MA==": "快速爆破枪",
  "V2VhcG9uLTI0MQ==": "快速爆破枪 装饰",
  "V2VhcG9uLTI1MA==": "快速爆破枪 精英",
  "V2VhcG9uLTI1MQ==": "快速爆破枪 精英装饰",
  "V2VhcG9uLTI2MA==": "S-BLAST92",
  "V2VhcG9uLTMwMA==": "L3卷管枪",
  "V2VhcG9uLTMwMQ==": "L3卷管枪D",
  "V2VhcG9uLTMxMA==": "H3卷管枪",
  "V2VhcG9uLTMxMQ==": "H3卷管枪D",
  "V2VhcG9uLTQwMA==": "开瓶喷泉枪",
  "V2VhcG9uLTEwMDA=": "碳纤维滚筒",
  "V2VhcG9uLTEwMDE=": "碳纤维滚筒 装饰",
  "V2VhcG9uLTEwMTA=": "斯普拉滚筒",
  "V2VhcG9uLTEwMTE=": "斯普拉滚筒 联名",
  "V2VhcG9uLTEwMjA=": "电动马达滚筒",
  "V2VhcG9uLTEwMzA=": "可变式滚筒",
  "V2VhcG9uLTEwNDA=": "宽滚筒",
  "V2VhcG9uLTEwNDE=": "宽滚筒 联名",
  "V2VhcG9uLTExMDA=": "巴勃罗",
  "V2VhcG9uLTExMDE=": "巴勃罗·新艺术",
  "V2VhcG9uLTExMTA=": "北斋",
  "V2VhcG9uLTExMjA=": "文森",
  "V2VhcG9uLTIwMDA=": "鱿快洁α",
  "V2VhcG9uLTIwMTA=": "斯普拉蓄力狙击枪",
  "V2VhcG9uLTIwMTE=": "斯普拉蓄力狙击枪 联名",
  "V2VhcG9uLTIwMjA=": "斯普拉准星枪",
  "V2VhcG9uLTIwMjE=": "斯普拉准星枪 联名",
  "V2VhcG9uLTIwMzA=": "公升4K",
  "V2VhcG9uLTIwNDA=": "4K准星枪",
  "V2VhcG9uLTIwNTA=": "14式竹筒枪·甲",
  "V2VhcG9uLTIwNjA=": "高压油管枪",
  "V2VhcG9uLTIwNzA=": "R-PEN/5H",
  "V2VhcG9uLTMwMDA=": "飞溅泼桶",
  "V2VhcG9uLTMwMDE=": "飞溅泼桶 装饰",
  "V2VhcG9uLTMwMTA=": "洗笔桶",
  "V2VhcG9uLTMwMTE=": "洗笔桶·新艺术",
  "V2VhcG9uLTMwMjA=": "回旋泼桶",
  "V2VhcG9uLTMwMzA=": "满溢泡澡泼桶",
  "V2VhcG9uLTMwNDA=": "爆炸泼桶",
  "V2VhcG9uLTQwMDA=": "斯普拉旋转枪",
  "V2VhcG9uLTQwMDE=": "斯普拉旋转枪 联名",
  "V2VhcG9uLTQwMTA=": "桶装旋转枪",
  "V2VhcG9uLTQwMTE=": "桶装旋转枪 装饰",
  "V2VhcG9uLTQwMjA=": "消防栓旋转枪",
  "V2VhcG9uLTQwMzA=": "圆珠笔",
  "V2VhcG9uLTQwNDA=": "鹦鹉螺号47",
  "V2VhcG9uLTUwMDA=": "溅镀枪",
  "V2VhcG9uLTUwMDE=": "溅镀枪·新艺术",
  "V2VhcG9uLTUwMTA=": "斯普拉机动枪",
  "V2VhcG9uLTUwMjA=": "开尔文525",
  "V2VhcG9uLTUwMzA=": "双重清洁枪",
  "V2VhcG9uLTUwMzE=": "双重清洁枪 改装",
  "V2VhcG9uLTUwNDA=": "四重弹跳手枪 黑",
  "V2VhcG9uLTUwNDE=": "四重弹跳手枪 白",
  "V2VhcG9uLTYwMDA=": "遮阳防空伞",
  "V2VhcG9uLTYwMTA=": "露营防空伞",
  "V2VhcG9uLTYwMTE=": "露营防空伞 姐妹",
  "V2VhcG9uLTYwMjA=": "特工配件",
  "V2VhcG9uLTcwMTA=": "三发猎鱼弓",
  "V2VhcG9uLTcwMjA=": "LACT-450",
  "V2VhcG9uLTgwMDA=": "工作刮水刀",
  "V2VhcG9uLTgwMTA=": "雨刷刮水刀",
  "V2VhcG9uLTgwMTE=": "雨刷刮水刀 装饰",
  V2VhcG9uLTIwOTAw: "熊先生印章爆破枪",
  V2VhcG9uLTIyOTAw: "熊先生印章狙击枪",
  V2VhcG9uLTIzOTAw: "熊先生印章泼桶",
  V2VhcG9uLTI2OTAw: "熊先生印章防空伞",
  V2VhcG9uLTI3OTAw: "熊先生印章猎鱼弓",
  V2VhcG9uLTI4OTAw: "熊先生印章刮水刀",
  // Special weapons (coop).
  "U3BlY2lhbFdlYXBvbi0yMDAwNg==": "赞气弹",
  "U3BlY2lhbFdlYXBvbi0yMDAwNw==": "弹跳声呐",
  "U3BlY2lhbFdlYXBvbi0yMDAwOQ==": "喇叭镭射5.1ch",
  "U3BlY2lhbFdlYXBvbi0yMDAxMA==": "喷射背包",
  "U3BlY2lhbFdlYXBvbi0yMDAxMg==": "螃蟹坦克",
  "U3BlY2lhbFdlYXBvbi0yMDAxMw==": "鲨鱼坐骑",
  "U3BlY2lhbFdlYXBvbi0yMDAxNA==": "三重龙卷风",
  // Brands.
  "QnJhbmQtMA==": "战斗鱿鱼",
  "QnJhbmQtMQ==": "钢铁先锋",
  "QnJhbmQtMg==": "海月",
  "QnJhbmQtMw==": "罗肯贝格",
  "QnJhbmQtNA==": "泽酷",
  "QnJhbmQtNQ==": "锻品",
  "QnJhbmQtNg==": "暖流",
  "QnJhbmQtNw==": "帆立",
  "QnJhbmQtOA==": "寺门",
  "QnJhbmQtOQ==": "时雨",
  "QnJhbmQtMTA=": "艾洛眼",
  "QnJhbmQtMTE=": "暇古",
  "QnJhbmQtMTU=": "无法无天",
  "QnJhbmQtMTY=": "鱿皇",
  "QnJhbmQtMTc=": "剑尖鱿",
  "QnJhbmQtMTg=": "泽酷暖流",
  "QnJhbmQtMTk=": "散寿司",
  "QnJhbmQtMjA=": "七轮",
  "QnJhbmQtOTc=": "熊先生商会",
  "QnJhbmQtOTg=": "鱼干制造",
  "QnJhbmQtOTk=": "amiibo",
  // Work suits.
  "Q29vcFVuaWZvcm0tMQ==": "打工连身工作服 橘色",
  "Q29vcFVuaWZvcm0tMg==": "打工连身工作服 绿色",
  "Q29vcFVuaWZvcm0tMw==": "打工连身工作服 黄色",
  "Q29vcFVuaWZvcm0tNA==": "打工连身工作服 粉红色",
  "Q29vcFVuaWZvcm0tNQ==": "打工连身工作服 蓝色",
  "Q29vcFVuaWZvcm0tNg==": "打工连身工作服 黑色",
  "Q29vcFVuaWZvcm0tNw==": "打工连身工作服 白色",
  "Q29vcFVuaWZvcm0tOA==": "打工防水衣 橘色",
  "Q29vcFVuaWZvcm0tOQ==": "打工防水衣 黑色",
  "Q29vcFVuaWZvcm0tMTA=": "打工防水衣 黄色",
  "Q29vcFVuaWZvcm0tMTE=": "打工防水衣 棕色",
  // Grades.
  "Q29vcEdyYWRlLTA=": "新手",
  "Q29vcEdyYWRlLTE=": "半吊子",
  "Q29vcEdyYWRlLTI=": "独当一面",
  "Q29vcEdyYWRlLTM=": "熟练",
  "Q29vcEdyYWRlLTQ=": "达人",
  "Q29vcEdyYWRlLTU=": "达人+1",
  "Q29vcEdyYWRlLTY=": "达人+2",
  "Q29vcEdyYWRlLTc=": "达人+3",
  "Q29vcEdyYWRlLTg=": "传说",
  // Waves.
  wave_n: "WAVE %{n}",
  xtrawave: "EX-WAVE",
  // Water levels.
  low_tide: "干潮",
  normal: "普通",
  high_tide: "满潮",
  // Events.
  Q29vcEV2ZW50V2F2ZS0x: "狂潮",
  Q29vcEV2ZW50V2F2ZS0y: "寻找金鲑鱼",
  Q29vcEV2ZW50V2F2ZS0z: "烤架鱼进发",
  Q29vcEV2ZW50V2F2ZS00: "走私鱼来袭",
  Q29vcEV2ZW50V2F2ZS01: "雾",
  Q29vcEV2ZW50V2F2ZS02: "大胖鱼大量出现",
  Q29vcEV2ZW50V2F2ZS03: "巨型龙卷风",
  Q29vcEV2ZW50V2F2ZS04: "泥鲑鱼喷发",
  // Boss Salmonids.
  boss_salmonids: "巨大鲑鱼",
  "Q29vcEVuZW15LTQ=": "炸弹鱼",
  "Q29vcEVuZW15LTU=": "垫肩飞鱼",
  "Q29vcEVuZW15LTY=": "铁板鱼",
  "Q29vcEVuZW15LTc=": "蛇鱼",
  "Q29vcEVuZW15LTg=": "高塔鱼",
  "Q29vcEVuZW15LTk=": "鼹鼠鱼",
  Q29vcEVuZW15LTEw: "蝙蝠鱼",
  Q29vcEVuZW15LTEx: "柱鱼",
  Q29vcEVuZW15LTEy: "潜水鱼",
  Q29vcEVuZW15LTEz: "铁球鱼",
  Q29vcEVuZW15LTE0: "锅盖鱼",
  Q29vcEVuZW15LTE1: "金鲑鱼",
  Q29vcEVuZW15LTE3: "烤架鱼",
  Q29vcEVuZW15LTIw: "泥鲑鱼",
  // King Salmonids.
  Q29vcEVuZW15LTIz: "横纲",
  Q29vcEVuZW15LTI0: "辰龙",
};

export default zhHans;
