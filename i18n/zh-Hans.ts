import base from "./base";

const zhHans = {
  ...base,
  // API.
  lang: "zh-CN",
  // UI.
  log_in: "登录",
  log_in_notice:
    "法螺湾需要获取令牌以访问鱿鱼圈3。该过程涉及向非任天堂的imink发送含有最少的非身份信息的安全请求。这些信息不会被记录或存储，请参阅隐私政策以获取更多信息。",
  imink_privacy_policy: "imink隐私政策",
  log_in_continue: "我已阅读并理解",
  logging_in: "获取令牌中",
  log_out_notice: "登出将清除法螺湾所有存储的数据！请在继续之前完成备份。",
  log_out_continue: "清除数据并登出",
  logging_out: "登出中",
  failed_to_check_update: "未能检查更新",
  failed_to_check_api_update: "未能检查API更新",
  reacquiring_tokens: "重新获取令牌中",
  loading_n_results: "加载%{n}项记录中",
  loaded_n_results: "已加载%{n}项记录",
  loaded_n_results_fail_failed: "已加载%{n}项记录，%{fail}项失败",
  loaded_n_results_skip_skipped: "已加载%{n}项记录，%{skip}项跳过",
  loaded_n_results_fail_failed_skip_skipped: "已加载%{n}项记录，%{fail}项失败，%{skip}项跳过",
  load_more: "加载更多",
  loading_more: "加载更多中",
  loaded_all: "已全部加载",
  load_more_notice: "长按加载更多以加载所有记录。",
  import: "导入",
  export: "导出",
  exporting: "导出中",
  disclaimer: "本应用是使用鱿鱼圈3的信息的非官方应用，与任天堂有限公司无关。",
  update: "更新",
  support: "支持",
  alternative_log_in_notice:
    "如果您拥有会话令牌并希望跳过由法螺湾获取令牌，您可以复制会话令牌并完成登录。",
  log_in_with_session_token: "通过会话令牌登录",
  language_notice:
    "如果您的游戏语言与显示语言不一致，您可以在此修改。这将使法螺湾加载对应语言的记录。",
  change_game_language_language: "修改游戏语言 (%{language})",
  change_display_language_language: "修改显示语言 (%{language})",
  relog_in_notice: "如果法螺湾无法获取令牌，您可以重新登录。",
  relog_in: "重新登录",
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
  // Shop.
  gesotown: "鱿鱼须商城",
  order_in_nintendo_switch_online: "在Nintendo Switch Online中预订",
  display_owned_gears: "显示持有的装备",
  loading_owned_gears: "加载持有的装备中",
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
  hide_player_names: "隐藏玩家名称",
  show_player_names: "显示玩家名称",
  show_raw_data: "显示原始数据",
  open_in_nintendo_switch_online: "在Nintendo Switch Online中查看",
  // Stats.
  stats: "统计",
  count: "计数",
  database: "数据库",
  victory: "WIN!",
  defeat: "LOSE...",
  splatted: "击倒",
  be_splatted: "阵亡",
  special_weapon_uses: "特殊武器发动",
  clear: "Clear!!",
  failure: "Failure",
  waves_cleared: "通关的WAVE",
  boss_salmonids_defeated: "击倒的巨大鲑鱼",
  king_salmonids_defeated: "击倒的头目鲑鱼",
  golden_eggs_collected: "收集的金鲑鱼卵",
  power_eggs_collected: "收集的鲑鱼卵",
  rescued: "救援",
  be_rescued: "被救助",
  stats_notice: "由当前已加载的记录统计。",
  // Trend.
  trend: "趋势",
  hazard_level: "危险度",
  splatted_including_assisted: "击倒 (含助攻)",
  golden_eggs_collected_including_assisted: "收集的金鲑鱼卵 (含助攻)",
  // Modes.
  modes: "模式",
  battle: "对战",
  regular_battle: "一般比赛",
  anarchy_battle: "蛮颓比赛",
  anarchy_battle_series: "蛮颓比赛 (挑战)",
  anarchy_battle_open: "蛮颓比赛 (开放)",
  x_battle: "X比赛",
  private_battle: "私人比赛",
  splatfest_battle: "祭典比赛",
  tricolor_battle: "三色夺宝比赛",
  tableturf_battle: "占地斗士",
  "VnNNb2RlLTE=": "一般比赛",
  "VnNNb2RlLTI=": "蛮颓比赛 (挑战)",
  "VnNNb2RlLTM=": "X比赛",
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
  REGULAR: "鲑鱼跑",
  BIG_RUN: "大型跑",
  TEAM_CONTEST: "团队打工竞赛",
  // Stages.
  stages: "场地",
  VnNTdGFnZS0x: "温泉花大峡谷",
  VnNTdGFnZS0y: "鳗鲶区",
  VnNTdGFnZS0z: "烟管鱼市场",
  VnNTdGFnZS00: "竹蛏疏洪道",
  VnNTdGFnZS01: "鱼露遗迹",
  VnNTdGFnZS02: "鱼肉碎金属",
  VnNTdGFnZS03: "臭鱼干温泉",
  VnNTdGFnZS05: "比目鱼住宅区",
  "VnNTdGFnZS0xMA==": "真鲭跨海大桥",
  "VnNTdGFnZS0xMQ==": "金眼鲷美术馆",
  "VnNTdGFnZS0xMg==": "鬼头刀SPA度假区",
  "VnNTdGFnZS0xMw==": "海女美术大学",
  "VnNTdGFnZS0xNA==": "鲟鱼造船厂",
  "VnNTdGFnZS0xNQ==": "座头购物中心",
  "VnNTdGFnZS0xNg==": "醋饭海洋世界",
  "VnNTdGFnZS0xOA==": "鬼蝠鲼玛利亚号",
  VnNTdGFnZS0tOTk5: "",
  // Coop stages.
  "Q29vcFN0YWdlLTE=": "鲑坝",
  "Q29vcFN0YWdlLTI=": "新卷堡",
  "Q29vcFN0YWdlLTY=": "漂浮落难船",
  "Q29vcFN0YWdlLTc=": "麦年海洋发电所",
  "Q29vcFN0YWdlLTEwMA==": "醋饭海洋世界",
  "Q29vcFN0YWdlLTEwMg==": "海女美术大学",
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
  "V2VhcG9uLTIwMA==": "新星爆破枪",
  "V2VhcG9uLTIwMQ==": "新星爆破枪 新型",
  "V2VhcG9uLTIxMA==": "火热爆破枪",
  "V2VhcG9uLTIyMA==": "远距爆破枪",
  "V2VhcG9uLTIzMA==": "冲涂爆破枪",
  "V2VhcG9uLTIzMQ==": "冲涂爆破枪 新型",
  "V2VhcG9uLTI0MA==": "快速爆破枪",
  "V2VhcG9uLTI0MQ==": "快速爆破枪 装饰",
  "V2VhcG9uLTI1MA==": "快速爆破枪 精英",
  "V2VhcG9uLTMwMA==": "L3卷管枪",
  "V2VhcG9uLTMwMQ==": "L3卷管枪D",
  "V2VhcG9uLTMxMA==": "H3卷管枪",
  "V2VhcG9uLTQwMA==": "开瓶喷泉枪",
  "V2VhcG9uLTEwMDA=": "碳纤维滚筒",
  "V2VhcG9uLTEwMDE=": "碳纤维滚筒 装饰",
  "V2VhcG9uLTEwMTA=": "斯普拉滚筒",
  "V2VhcG9uLTEwMTE=": "斯普拉滚筒 联名",
  "V2VhcG9uLTEwMjA=": "电动马达滚筒",
  "V2VhcG9uLTEwMzA=": "可变式滚筒",
  "V2VhcG9uLTEwNDA=": "宽滚筒",
  "V2VhcG9uLTExMDA=": "巴勃罗",
  "V2VhcG9uLTExMDE=": "巴勃罗·新艺术",
  "V2VhcG9uLTExMTA=": "北斋",
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
  "V2VhcG9uLTQwMjA=": "消防栓旋转枪",
  "V2VhcG9uLTQwMzA=": "圆珠笔",
  "V2VhcG9uLTQwNDA=": "鹦鹉螺号47",
  "V2VhcG9uLTUwMDA=": "溅镀枪",
  "V2VhcG9uLTUwMDE=": "溅镀枪·新艺术",
  "V2VhcG9uLTUwMTA=": "斯普拉机动枪",
  "V2VhcG9uLTUwMjA=": "开尔文525",
  "V2VhcG9uLTUwMzA=": "双重清洁枪",
  "V2VhcG9uLTUwNDA=": "四重弹跳手枪 黑",
  "V2VhcG9uLTYwMDA=": "遮阳防空伞",
  "V2VhcG9uLTYwMTA=": "露营防空伞",
  "V2VhcG9uLTYwMjA=": "特工配件",
  "V2VhcG9uLTcwMTA=": "三发猎鱼弓",
  "V2VhcG9uLTcwMjA=": "LACT-450",
  "V2VhcG9uLTgwMDA=": "工作刮水刀",
  "V2VhcG9uLTgwMTA=": "雨刷刮水刀",
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
  Q29vcEV2ZW50V2F2ZS00: "走私鱼来袭",
  Q29vcEV2ZW50V2F2ZS01: "雾",
  Q29vcEV2ZW50V2F2ZS02: "大胖鱼大量出现",
  Q29vcEV2ZW50V2F2ZS03: "巨型龙卷风",
  Q29vcEV2ZW50V2F2ZS04: "泥鲑鱼喷发",
  Q29vcEV2ZW50V2F2ZS0x: "狂潮",
  Q29vcEV2ZW50V2F2ZS0y: "寻找金鲑鱼",
  Q29vcEV2ZW50V2F2ZS0z: "烤架鱼进发",
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
