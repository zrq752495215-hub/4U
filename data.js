window.FOUR_U_DATA = {
  dimensions: [
    { key: "EI", left: "E", right: "I", leftName: "气氛型队友", rightName: "沉浸型队友" },
    { key: "SN", left: "S", right: "N", leftName: "信息派", rightName: "直觉派" },
    { key: "TF", left: "T", right: "F", leftName: "战术派", rightName: "情义派" },
    { key: "JP", left: "J", right: "P", leftName: "规划派", rightName: "随缘派" }
  ],
  questions: [
    {
      text: "飞机刚起飞，你通常怎么选跳点？",
      dimension: "EI",
      options: [
        { text: "直接开麦提议：来个热闹点的地方", score: "E" },
        { text: "先听队友想法，再帮大家拍板", score: "E" },
        { text: "默默标一个安全点，等队友发现", score: "I" },
        { text: "喜欢跳人少的边缘点，慢慢发育", score: "I" }
      ]
    },
    {
      text: "落地发现隔壁队很多脚步，你会？",
      dimension: "SN",
      options: [
        { text: "报清人数、方向、楼层和距离", score: "S" },
        { text: "先听脚步节奏，判断他们具体位置", score: "S" },
        { text: "感觉他们马上会包过来，先提醒队友", score: "N" },
        { text: "根据枪声和路线猜他们下一步想法", score: "N" }
      ]
    },
    {
      text: "队友说想去劝架，你第一反应是？",
      dimension: "TF",
      options: [
        { text: "先看圈、枪线和撤退路线", score: "T" },
        { text: "判断有没有击倒信息，够不够收割", score: "T" },
        { text: "队友想打，那就一起打出气势", score: "F" },
        { text: "只要大家状态好，输赢都能接受", score: "F" }
      ]
    },
    {
      text: "你搜索物资时更像哪一种？",
      dimension: "JP",
      options: [
        { text: "固定路线，缺什么补什么", score: "J" },
        { text: "先把药、投掷物、配件按计划补齐", score: "J" },
        { text: "随手开门，惊喜全靠缘分", score: "P" },
        { text: "看见什么都想摸一下，背包经常满", score: "P" }
      ]
    },
    {
      text: "陌生队友不开麦，你会？",
      dimension: "EI",
      options: [
        { text: "主动打招呼，顺便活跃一下气氛", score: "E" },
        { text: "用简短报点把队伍沟通带起来", score: "E" },
        { text: "默默观察，用行动配合就好", score: "I" },
        { text: "不开麦也没关系，我会看小地图", score: "I" }
      ]
    },
    {
      text: "你捡到高倍镜后最常做什么？",
      dimension: "SN",
      options: [
        { text: "立刻找高点，把信息报清楚", score: "S" },
        { text: "记录枪声方向，给队友补充细节", score: "S" },
        { text: "看看地形，预判下一波人会从哪来", score: "N" },
        { text: "盯着圈边，感觉那里迟早有人冒头", score: "N" }
      ]
    },
    {
      text: "队友被击倒，位置有点危险，你会？",
      dimension: "TF",
      options: [
        { text: "先封烟清点，能救再救", score: "T" },
        { text: "先反打压住对面，救援要有条件", score: "T" },
        { text: "烟雾弹一丢，先把人扶起来", score: "F" },
        { text: "嘴上喊别怕，身体已经冲过去了", score: "F" }
      ]
    },
    {
      text: "毒圈开始收缩，你倾向于？",
      dimension: "JP",
      options: [
        { text: "提前进圈，占住能打能撤的位置", score: "J" },
        { text: "先安排载具、路线和停车点", score: "J" },
        { text: "再搜一会儿，说不定路上还能发财", score: "P" },
        { text: "边跑边看，哪里有机会就往哪里拐", score: "P" }
      ]
    },
    {
      text: "队伍连续沉默三分钟，你会？",
      dimension: "EI",
      options: [
        { text: "来一句：兄弟们，咱们还活着吗", score: "E" },
        { text: "报个小信息，让大家重新上线", score: "E" },
        { text: "继续听声辨位，沉默也是战术", score: "I" },
        { text: "安静挺好，我正好进入状态", score: "I" }
      ]
    },
    {
      text: "决赛圈只剩三队，你更相信？",
      dimension: "SN",
      options: [
        { text: "枪声、击杀提示和脚步这些硬信息", score: "S" },
        { text: "哪里有烟、哪里有人倒过这些线索", score: "S" },
        { text: "对手心理和他们可能犯的错", score: "N" },
        { text: "根据圈型猜他们最想藏的位置", score: "N" }
      ]
    },
    {
      text: "队友刚枪失误白给，你会说？",
      dimension: "TF",
      options: [
        { text: "下次等我架住再拉出去", score: "T" },
        { text: "这波问题是角度没同步，下一波改", score: "T" },
        { text: "没事没事，这波至少很有节目效果", score: "F" },
        { text: "先稳住心态，下一局我们打回来", score: "F" }
      ]
    },
    {
      text: "进圈路上遇到空旷地带，你会？",
      dimension: "JP",
      options: [
        { text: "规划载具、烟路和停靠点", score: "J" },
        { text: "先让队友分批过，减少一起白给", score: "J" },
        { text: "看哪边顺眼就从哪边冲", score: "P" },
        { text: "边走边扔烟，活下来再说细节", score: "P" }
      ]
    },
    {
      text: "你看到远处有人跑毒，会？",
      dimension: "EI",
      options: [
        { text: "喊全队一起看，顺便安排火力", score: "E" },
        { text: "边笑边提醒：这位朋友有点辛苦", score: "E" },
        { text: "自己先架着，等机会再开口", score: "I" },
        { text: "不急着暴露，等他进到更好打的位置", score: "I" }
      ]
    },
    {
      text: "你最喜欢哪种报点方式？",
      dimension: "SN",
      options: [
        { text: "数字方位、距离、掩体，一次说清", score: "S" },
        { text: "用建筑、树、坡这些参照物讲清楚", score: "S" },
        { text: "他要绕了，我感觉他想偷侧身", score: "N" },
        { text: "他们现在不打，应该是在等我们露破绽", score: "N" }
      ]
    },
    {
      text: "最后一波要不要主动开团？",
      dimension: "TF",
      options: [
        { text: "看击倒、投掷物和站位，机会够才打", score: "T" },
        { text: "先算人数和夹角，别把优势送掉", score: "T" },
        { text: "队友状态来了，就该把气势打出来", score: "F" },
        { text: "如果大家都想冲，那就一起留个名场面", score: "F" }
      ]
    },
    {
      text: "一局打完，你最在意什么？",
      dimension: "JP",
      options: [
        { text: "复盘哪里转移慢了、哪里没协同", score: "J" },
        { text: "想清楚下一局跳点和分工怎么改", score: "J" },
        { text: "这局有没有名场面，快乐最重要", score: "P" },
        { text: "先聊刚才最好笑的一幕，再开下一把", score: "P" }
      ]
    }
  ],
  results: {
    ENTJ: {
      title: "战术总指挥",
      description: "你进队以后，语音频道会自动变成作战会议。你喜欢掌控节奏、分配任务，也很擅长在混乱里找出最能吃鸡的路线。",
      position: "指挥位 / 转移决策",
      partner: "ISFJ 可靠医疗兵",
      verdict: "建议授予临时队长权限，但麦克风音量需要队友共同监督。"
    },
    ENTP: {
      title: "搞事型自由人",
      description: "你脑子里的路线永远比安全区更会刷新。你不怕变数，甚至有点享受变数，经常把普通对局打成大型连续剧。",
      position: "自由人 / 侧翼骚扰",
      partner: "ISTJ 稳健架枪位",
      verdict: "此人自带节目效果，建议配一名稳重队友负责拉回现实。"
    },
    ENFJ: {
      title: "团队发动机",
      description: "你很会把队伍拧成一股绳，能打气、能协调，也愿意照顾每个人的状态。只要你在，队伍就很难冷场。",
      position: "副指挥 / 团队节奏",
      partner: "ISTP 冷面独狼",
      verdict: "公会频道欢迎你常驻，缺点是容易把路人也聊成自己人。"
    },
    ENFP: {
      title: "快乐刚枪王",
      description: "你相信一局游戏最重要的是热血和快乐。只要队友一句走，你已经在路上了，结果可能是高光，也可能是大家一起笑到下一局。",
      position: "突击位 / 气氛推进",
      partner: "INTJ 决赛圈棋手",
      verdict: "火力很猛，笑声更猛，建议备足烟雾弹和降压药。"
    },
    ESTJ: {
      title: "纪律型队长",
      description: "你做事利落，路线清晰，讨厌全队像无头苍蝇一样乱跑。你不一定最花哨，但总能把队伍带到能打的位置。",
      position: "主指挥 / 运营位",
      partner: "ISFP 随缘探险家",
      verdict: "公会鉴定为强执行力选手，随机队友可能需要三局适应期。"
    },
    ESTP: {
      title: "莽夫突击手",
      description: "你对枪声有天然反应，听见交火就像收到邀请函。你敢冲、敢贴、敢赌一波手感，是队伍里最容易打出破口的人。",
      position: "一号突击 / 破点位",
      partner: "INFJ 静默守护者",
      verdict: "建议重点培养，但请在冲楼前完成一句完整报点。"
    },
    ESFJ: {
      title: "全能后勤官",
      description: "你会记得谁缺药、谁缺配件、谁刚才心态有点歪。你的存在让队伍很舒服，哪怕枪线紧张，也能把团队稳住。",
      position: "支援位 / 物资协调",
      partner: "INTP 数据流观察员",
      verdict: "公会仓库管理员候选人，背包里总有别人需要的东西。"
    },
    ESFP: {
      title: "气氛组战神",
      description: "你是语音频道里的快乐核心，越打越有状态。你不一定每次都按计划走，但总能让队友记住这局发生了什么。",
      position: "突击位 / 近点支援",
      partner: "ISTJ 稳健架枪位",
      verdict: "击倒和名场面随机刷新，建议录屏常开。"
    },
    INTJ: {
      title: "决赛圈棋手",
      description: "你喜欢提前思考几步，把地形、圈边和对手位置放在脑子里推演。别人还在问去哪，你已经知道哪里最难被夹。",
      position: "战术规划 / 决赛圈指挥",
      partner: "ENFP 快乐刚枪王",
      verdict: "此人适合管最后三分钟，前二十分钟可能在静音思考人生。"
    },
    INTP: {
      title: "数据流观察员",
      description: "你很少无脑冲动，更喜欢从信息里推结论。枪声、时间、人数、物资消耗在你这里都会变成一套小型分析模型。",
      position: "观察位 / 信息分析",
      partner: "ESFJ 全能后勤官",
      verdict: "建议赛后复盘发言限时三分钟，否则队友会开始点外卖。"
    },
    INFJ: {
      title: "静默守护者",
      description: "你不抢话，但一直在看队友的位置和危险。关键时候你会补枪、封烟、扶人，用很安静的方式把队伍托住。",
      position: "支援位 / 侧翼保护",
      partner: "ESTP 莽夫突击手",
      verdict: "公会鉴定为低调核心，存在感不大，含金量很高。"
    },
    INFP: {
      title: "佛系拾荒者",
      description: "你对胜负看得没有那么重，更享受慢慢搜、慢慢转、偶尔捡到神装的快乐。你温和不抢戏，却经常在关键时刻掏出好东西。",
      position: "后勤位 / 灵活补位",
      partner: "ENTJ 战术总指挥",
      verdict: "此人背包像盲盒，战术价值需要到中后期才显现。"
    },
    ISTJ: {
      title: "稳健架枪位",
      description: "你稳、准、守纪律，不爱乱冒险。队友前压时，你就是后面那条可靠的保险线，让大家敢打也敢撤。",
      position: "架枪位 / 后点控制",
      partner: "ENTP 搞事型自由人",
      verdict: "公会认证放心后点，缺点是看队友乱冲时血压略高。"
    },
    ISTP: {
      title: "冷面独狼",
      description: "你话不多，处理问题很直接。复杂局面里你能冷静找角度、抓机会，一旦开枪，通常不是为了热闹。",
      position: "自由人 / 单点突破",
      partner: "ENFJ 团队发动机",
      verdict: "表面像路人，实战像隐藏高手，请不要被沉默骗了。"
    },
    ISFJ: {
      title: "可靠医疗兵",
      description: "你是队伍里的安全感来源，救人、补给、封烟都很靠谱。你不一定站在聚光灯下，但少了你全队都会明显变脆。",
      position: "医疗支援 / 后勤保护",
      partner: "ENTJ 战术总指挥",
      verdict: "建议全队主动上交多余急救包，以示尊重。"
    },
    ISFP: {
      title: "随缘探险家",
      description: "你玩游戏讲究感觉，路线可以变，打法也可以变。你不喜欢太死板的安排，却常常能在奇怪角落发现机会。",
      position: "灵活补位 / 边路探索",
      partner: "ESTJ 纪律型队长",
      verdict: "公会地图探索员，可能带队发现宝点，也可能发现一整队敌人。"
    }
  }
};
