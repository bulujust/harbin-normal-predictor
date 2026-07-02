const provinces = [
  "黑龙江",
  "北京",
  "天津",
  "河北",
  "山西",
  "内蒙古",
  "辽宁",
  "吉林",
  "上海",
  "江苏",
  "浙江",
  "安徽",
  "福建",
  "江西",
  "山东",
  "河南",
  "湖北",
  "湖南",
  "广东",
  "广西",
  "海南",
  "重庆",
  "四川",
  "贵州",
  "云南",
  "西藏",
  "陕西",
  "甘肃",
  "青海",
  "宁夏",
  "新疆",
];

const trackOptions = {
  普通类: ["物理类", "历史类", "理工", "文史", "综合改革"],
  艺术类: ["美术与设计类", "音乐类", "舞蹈类", "播音与主持类", "表演类", "书法类"],
  体育单招: ["运动训练", "武术与民族传统体育"],
  数据说明: ["数据导入说明"],
};

const dataMeta = window.HRBNU_DATA_METADATA || {};
const ordinaryAdmissions = window.HRBNU_ORDINARY_ADMISSIONS || [
  {
    province: "黑龙江",
    track: "物理类",
    major: "数学与应用数学（行知实验班）",
    scores: { 2023: { score: 536, rank: 9540 }, 2024: { score: 586, rank: 11483 }, 2025: { score: 564, rank: 13227 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "物理学（行知实验班）",
    scores: { 2023: { score: 516, rank: 12569 }, 2024: { score: 577, rank: 13320 }, 2025: { score: 548, rank: 17306 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "汉语言文学（行知实验班）",
    scores: { 2023: { score: null, rank: null }, 2024: { score: 570, rank: 14906 }, 2025: { score: 536, rank: 20638 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "数学与应用数学（师范类）",
    scores: { 2023: { score: 504, rank: 14656 }, 2024: { score: 560, rank: 17241 }, 2025: { score: 530, rank: 22442 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "化学（行知实验班）",
    scores: { 2023: { score: 498, rank: 15754 }, 2024: { score: 556, rank: 18272 }, 2025: { score: 527, rank: 23358 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "生物科学（行知实验班）",
    scores: { 2023: { score: 489, rank: 17444 }, 2024: { score: 550, rank: 19799 }, 2025: { score: 514, rank: 27485 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "汉语言文学（师范类）",
    scores: { 2023: { score: null, rank: null }, 2024: { score: 523, rank: 27469 }, 2025: { score: 508, rank: 29482 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "计算机科学与技术（师范类）",
    scores: { 2023: { score: 440, rank: 29039 }, 2024: { score: 520, rank: 28339 }, 2025: { score: 511, rank: 28493 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "法学",
    scores: { 2023: { score: 468, rank: 21945 }, 2024: { score: 500, rank: 34515 }, 2025: { score: 506, rank: 30143 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "物理学（师范类）",
    scores: { 2023: { score: 429, rank: 32164 }, 2024: { score: 535, rank: 23987 }, 2025: { score: 499, rank: 32535 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "化学（师范类）",
    scores: { 2023: { score: 450, rank: 26278 }, 2024: { score: 534, rank: 24261 }, 2025: { score: 494, rank: 34234 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "会计学",
    scores: { 2023: { score: 434, rank: 30731 }, 2024: { score: 473, rank: 43637 }, 2025: { score: 493, rank: 34567 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "软件工程",
    scores: { 2023: { score: 429, rank: 32164 }, 2024: { score: 493, rank: 36710 }, 2025: { score: 490, rank: 35620 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "英语（师范类）",
    scores: { 2023: { score: 434, rank: 30731 }, 2024: { score: 509, rank: 31720 }, 2025: { score: 470, rank: 42656 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "地理科学（师范类）",
    scores: { 2023: { score: 433, rank: 30986 }, 2024: { score: 490, rank: 37704 }, 2025: { score: 424, rank: 60117 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "小学教育（师范类）",
    scores: { 2023: { score: null, rank: null }, 2024: { score: 502, rank: 33913 }, 2025: { score: 460, rank: 46345 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "电子信息科学与技术",
    scores: { 2023: { score: 392, rank: 44085 }, 2024: { score: 476, rank: 42594 }, 2025: { score: 468, rank: 43426 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "学前教育（师范类）",
    scores: { 2023: { score: 409, rank: 38389 }, 2024: { score: 487, rank: 38734 }, 2025: { score: 443, rank: 52639 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "教育技术学（师范类）",
    scores: { 2023: { score: null, rank: null }, 2024: { score: null, rank: null }, 2025: { score: 429, rank: 57714 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "地理信息科学",
    scores: { 2023: { score: null, rank: null }, 2024: { score: null, rank: null }, 2025: { score: 360, rank: 85313 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "人文地理与城乡规划",
    scores: { 2023: { score: null, rank: null }, 2024: { score: null, rank: null }, 2025: { score: 367, rank: 82719 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "法语",
    scores: { 2023: { score: null, rank: null }, 2024: { score: null, rank: null }, 2025: { score: 402, rank: 68985 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "日语（师范类）",
    scores: { 2023: { score: null, rank: null }, 2024: { score: null, rank: null }, 2025: { score: 404, rank: 68284 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "人力资源管理（中美人才培养计划）",
    scores: { 2023: { score: null, rank: null }, 2024: { score: null, rank: null }, 2025: { score: 430, rank: 57352 } },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "计算机科学与技术（中美人才培养计划）",
    scores: { 2023: { score: null, rank: null }, 2024: { score: null, rank: null }, 2025: { score: 437, rank: 54791 } },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "汉语言文学（行知实验班）",
    scores: { 2023: { score: 494, rank: 2279 }, 2024: { score: 575, rank: 2373 }, 2025: { score: 553, rank: 3201 } },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "思想政治教育（行知实验班）",
    scores: { 2023: { score: 483, rank: 2937 }, 2024: { score: 562, rank: 3174 }, 2025: { score: 546, rank: 3684 } },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "思想政治教育（师范类）",
    scores: { 2023: { score: 468, rank: 4024 }, 2024: { score: 557, rank: 3535 }, 2025: { score: 542, rank: 4022 } },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "汉语言文学（师范类）",
    scores: { 2023: { score: 466, rank: 4176 }, 2024: { score: 549, rank: 4182 }, 2025: { score: 515, rank: 6400 } },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "历史学（行知实验班）",
    scores: { 2023: { score: 466, rank: 4176 }, 2024: { score: 549, rank: 4182 }, 2025: { score: 514, rank: 6497 } },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "法学",
    scores: { 2023: { score: 454, rank: 5198 }, 2024: { score: 531, rank: 5870 }, 2025: { score: 524, rank: 5533 } },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "会计学",
    scores: { 2023: { score: 447, rank: 5889 }, 2024: { score: 518, rank: 7189 }, 2025: { score: 515, rank: 6400 } },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "经济学",
    scores: { 2023: { score: 443, rank: 6281 }, 2024: { score: 514, rank: 7628 }, 2025: { score: 513, rank: 6600 } },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "历史学（师范类）",
    scores: { 2023: { score: 457, rank: 4936 }, 2024: { score: 539, rank: 5075 }, 2025: { score: 490, rank: 9321 } },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "教育学（师范类）",
    scores: { 2023: { score: 444, rank: 6179 }, 2024: { score: 531, rank: 5870 }, 2025: { score: 496, rank: 8595 } },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "英语（师范类）",
    scores: { 2023: { score: 445, rank: 6078 }, 2024: { score: 529, rank: 6081 }, 2025: { score: 487, rank: 9696 } },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "小学教育（师范类）",
    scores: { 2023: { score: 443, rank: 6281 }, 2024: { score: 522, rank: 6762 }, 2025: { score: 482, rank: 10349 } },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "汉语国际教育（师范类）",
    scores: { 2023: { score: 437, rank: 6986 }, 2024: { score: 528, rank: 6173 }, 2025: { score: 493, rank: 8945 } },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "日语（师范类）",
    scores: { 2023: { score: 430, rank: 7852 }, 2024: { score: 520, rank: 6977 }, 2025: { score: 482, rank: 10349 } },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "学前教育（师范类）",
    scores: { 2023: { score: 435, rank: 7239 }, 2024: { score: 521, rank: 6858 }, 2025: { score: 483, rank: 10223 } },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "文物保护技术",
    scores: { 2023: { score: 423, rank: 8759 }, 2024: { score: 474, rank: 12747 }, 2025: { score: 425, rank: 19248 } },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "旅游管理",
    scores: { 2023: { score: null, rank: null }, 2024: { score: null, rank: null }, 2025: { score: 474, rank: 11397 } },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "秘书学",
    scores: { 2023: { score: null, rank: null }, 2024: { score: null, rank: null }, 2025: { score: 478, rank: 10818 } },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "劳动与社会保障",
    scores: { 2023: { score: null, rank: null }, 2024: { score: null, rank: null }, 2025: { score: 482, rank: 10349 } },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "法语",
    scores: { 2023: { score: null, rank: null }, 2024: { score: null, rank: null }, 2025: { score: 483, rank: 10223 } },
  },
];

const artCards = [
  {
    title: "艺术类不能直接套普通位次",
    kicker: "录取口径",
    text: "艺术类通常同时看文化课、专业统考成绩和省内投档规则，有些省按综合分投档，有些专业还会有不同的排序办法。",
  },
  {
    title: "专业线需要按省份单独导入",
    kicker: "数据要求",
    text: "美术与设计、音乐、舞蹈、播音、表演、书法等方向，应该导入对应省份的艺术类投档分、专业分或综合分，不能用普通类分数替代。",
  },
  {
    title: "可做成艺术版预测",
    kicker: "下一步",
    text: "如果录入文化分、专业分、综合分算法和近三年投档数据，系统可以给出艺术类冲稳保，但需要和普通类分开计算。",
  },
];

const artAdmissions = window.HRBNU_ART_ADMISSIONS || [];
const sportAdmissions = window.HRBNU_SPORT_ADMISSIONS || [];

const sportCards = [
  {
    title: "体育单招是另一套通道",
    kicker: "单招口径",
    text: "运动训练、武术与民族传统体育等体育单招，通常按专项考试、文化考试和学校规则录取，不等同于普通高考位次预测。",
  },
  {
    title: "不能只输入普通高考排名",
    kicker: "输入项",
    text: "体育单招版应该输入专项成绩、文化成绩、项目、性别或小项等字段，再结合当年招生计划判断档位。",
  },
  {
    title: "当前先做入口和说明",
    kicker: "功能状态",
    text: "页面已把体育单招入口独立出来，后续导入单招简章和往年录取名单后，再开放真正的单招预测。",
  },
];

const dataCards = [
  {
    title: "全国省份入口已补齐",
    kicker: "页面结构",
    text: "省份下拉已包含全国主要招生省份。没有专业线的省份会显示待导入，不会输出看似准确但没有依据的结果。",
  },
  {
    title: "官网专业线已批量导入",
    kicker: "已录入",
    text: "当前已按哈师大招生网导入 2023-2025 年普通类、艺术类和体育类公开分数线，页面会按省份自动显示。",
  },
  {
    title: "完整版本的数据来源",
    kicker: "已接入官网",
    text: "数据来自学校本科招生网历年分数查询接口；若后续要更精细预测，可继续补各省考试院投档位次和招生计划。",
  },
];

const controlLines = {
  物理类: { 2024: 360, 2025: 360, 2026: 340 },
  历史类: { 2024: 410, 2025: 405, 2026: 385 },
};

const rankToScoreAnchors = {
  物理类: [
    { rank: 6600, score: 600 },
    { rank: 13200, score: 565 },
    { rank: 22500, score: 530 },
    { rank: 33000, score: 500 },
    { rank: 43000, score: 470 },
    { rank: 60000, score: 425 },
    { rank: 85000, score: 340 },
  ],
  历史类: [
    { rank: 860, score: 600 },
    { rank: 3200, score: 553 },
    { rank: 5500, score: 524 },
    { rank: 9000, score: 493 },
    { rank: 12000, score: 470 },
    { rank: 19000, score: 425 },
    { rank: 25000, score: 385 },
  ],
};

const state = {
  category: "普通类",
};

const els = {
  tabs: document.querySelectorAll(".tab"),
  province: document.querySelector("#province"),
  track: document.querySelector("#track"),
  score: document.querySelector("#score"),
  rank: document.querySelector("#rank"),
  major: document.querySelector("#major"),
  button: document.querySelector("#predictBtn"),
  body: document.querySelector("#resultBody"),
  resultWrap: document.querySelector("#resultWrap"),
  cardsList: document.querySelector("#cardsList"),
  stableCount: document.querySelector("#stableCount"),
  bestMajor: document.querySelector("#bestMajor"),
  bestChance: document.querySelector("#bestChance"),
  predictedLine: document.querySelector("#predictedLine"),
  statusTitle: document.querySelector("#statusTitle"),
  statusText: document.querySelector("#statusText"),
  dataBadge: document.querySelector("#dataBadge"),
  resultTitle: document.querySelector("#resultTitle"),
  resultIntro: document.querySelector("#resultIntro"),
  legend: document.querySelector("#legend"),
  metricOneLabel: document.querySelector("#metricOneLabel"),
  metricOneHint: document.querySelector("#metricOneHint"),
  metricTwoLabel: document.querySelector("#metricTwoLabel"),
  metricThreeLabel: document.querySelector("#metricThreeLabel"),
  metricThreeHint: document.querySelector("#metricThreeHint"),
  controlPanel: document.querySelector("#controlPanel"),
};

function formatValue(value) {
  return value === null || value === undefined ? "缺数据" : value.toLocaleString("zh-CN");
}

function hasData(item) {
  return Object.values(item.scores).some((year) => year?.rank || year?.score);
}

function weightedAverageField(values, field) {
  const weights = { 2025: 0.5, 2024: 0.3, 2023: 0.2 };
  const usable = Object.entries(weights).filter(([year]) => values[year]?.[field]);
  const totalWeight = usable.reduce((sum, [, weight]) => sum + weight, 0);
  if (!totalWeight) return null;
  return Math.round(usable.reduce((sum, [year, weight]) => sum + values[year][field] * weight, 0) / totalWeight);
}

function estimateScore(track, rank) {
  const anchors = rankToScoreAnchors[track];
  if (!anchors) return null;
  if (rank <= anchors[0].rank) return anchors[0].score + Math.round((anchors[0].rank - rank) / 450);
  if (rank >= anchors.at(-1).rank) return anchors.at(-1).score - Math.round((rank - anchors.at(-1).rank) / 1200);

  for (let i = 0; i < anchors.length - 1; i += 1) {
    const left = anchors[i];
    const right = anchors[i + 1];
    if (rank >= left.rank && rank <= right.rank) {
      const progress = (rank - left.rank) / (right.rank - left.rank);
      return Math.round(left.score + (right.score - left.score) * progress);
    }
  }
  return anchors.at(-1).score;
}

function applyYearAdjustment(track, baseRank) {
  if (!baseRank) return null;
  const lines = controlLines[track];
  if (!lines) return baseRank;
  const lineChange = lines[2026] - lines[2025];
  const adjustment = lineChange < 0 ? 1.025 : 0.985;
  return Math.round(baseRank * adjustment);
}

function classify(userRank, predictedRank) {
  if (!userRank || !predictedRank) {
    return { label: "参考", className: "rush", note: "该专业缺少可比位次，先按历年分数作参考。" };
  }
  const gap = predictedRank - userRank;
  const ratio = gap / predictedRank;

  if (ratio >= 0.18) {
    return { label: "保", className: "safe", note: `你的位次领先预测线 ${Math.abs(gap).toLocaleString("zh-CN")} 名，录取把握较高。` };
  }
  if (ratio >= 0.06) {
    return { label: "稳", className: "steady", note: `你的位次领先预测线 ${Math.abs(gap).toLocaleString("zh-CN")} 名，可作为重点选择。` };
  }
  if (ratio >= -0.06) {
    return { label: "冲", className: "rush", note: "你的位次接近预测线，建议结合招生计划和服从调剂判断。" };
  }
  return { label: "风险", className: "risk", note: `你的位次落后预测线 ${Math.abs(gap).toLocaleString("zh-CN")} 名，录取难度较高。` };
}

function classifyByScore(userScore, predictedScore) {
  if (!userScore || !predictedScore) {
    return { label: "参考", className: "rush", note: "该专业缺少位次，建议结合当年招生计划和省考试院投档线判断。" };
  }
  const gap = userScore - predictedScore;
  if (gap >= 15) return { label: "保", className: "safe", note: `你的分数高于预测线 ${gap} 分，录取把握较高。` };
  if (gap >= 5) return { label: "稳", className: "steady", note: `你的分数高于预测线 ${gap} 分，可作为重点选择。` };
  if (gap >= -5) return { label: "冲", className: "rush", note: "你的分数接近预测线，建议结合招生计划和服从调剂判断。" };
  return { label: "风险", className: "risk", note: `你的分数低于预测线 ${Math.abs(gap)} 分，录取难度较高。` };
}

function supportsOrdinaryPrediction() {
  return state.category === "普通类" && filteredAdmissions().some(hasData);
}

function filteredAdmissions() {
  const major = els.major.value;
  return ordinaryAdmissions
    .filter((item) => item.province === els.province.value && item.track === els.track.value)
    .filter((item) => !major || item.major === major);
}

function buildRows() {
  const userRank = Number(els.rank.value || 0);
  const userScore = Number(els.score.value || 0);
  return filteredAdmissions()
    .filter(hasData)
    .map((item) => {
      const baseRank = weightedAverageField(item.scores, "rank");
      const baseScore = weightedAverageField(item.scores, "score");
      const predictedRank = applyYearAdjustment(item.track, baseRank);
      const predictedScore = predictedRank ? estimateScore(item.track, predictedRank) || baseScore : baseScore;
      const verdict = predictedRank ? classify(userRank, predictedRank) : classifyByScore(userScore, predictedScore);
      return { ...item, predictedRank, predictedScore, verdict };
    })
    .sort((a, b) => {
      const order = { safe: 0, steady: 1, rush: 2, risk: 3 };
      const rankA = a.predictedRank || Number.MAX_SAFE_INTEGER;
      const rankB = b.predictedRank || Number.MAX_SAFE_INTEGER;
      return order[a.verdict.className] - order[b.verdict.className] || rankA - rankB || (b.predictedScore || 0) - (a.predictedScore || 0);
    });
}

function getArtRows() {
  const major = els.major.value;
  return artAdmissions
    .filter((item) => item.province === els.province.value && item.track === els.track.value)
    .filter((item) => !major || item.major === major)
    .sort((a, b) => b.year - a.year || (a.minScore || 9999) - (b.minScore || 9999) || a.major.localeCompare(b.major, "zh-CN"));
}

function getSportRows() {
  const major = els.major.value;
  return sportAdmissions
    .filter((item) => item.province === els.province.value && item.track === els.track.value)
    .filter((item) => !major || item.major === major)
    .sort((a, b) => b.year - a.year || (a.minScore || 9999) - (b.minScore || 9999) || a.major.localeCompare(b.major, "zh-CN"));
}

function fillSelect(select, values, selected) {
  select.innerHTML = values.map((value) => `<option value="${value}">${value}</option>`).join("");
  if (selected && values.includes(selected)) select.value = selected;
}

function getProvinceOptions() {
  return [
    ...new Set([
      ...provinces,
      ...ordinaryAdmissions.map((item) => item.province),
      ...artAdmissions.map((item) => item.province),
      ...sportAdmissions.map((item) => item.province),
    ]),
  ];
}

function renderProvinceOptions() {
  const options = getProvinceOptions();
  fillSelect(els.province, options, els.province.value || "黑龙江");
}

function renderTrackOptions() {
  if (state.category === "普通类") {
    const tracks = [...new Set(ordinaryAdmissions.filter((item) => item.province === els.province.value).map((item) => item.track))];
    fillSelect(els.track, tracks.length ? tracks : trackOptions[state.category], tracks[0] || trackOptions[state.category][0]);
    return;
  }
  if (state.category === "艺术类" && artAdmissions.length) {
    const tracks = [...new Set(artAdmissions.filter((item) => item.province === els.province.value).map((item) => item.track))];
    fillSelect(els.track, tracks.length ? tracks : ["艺术类"], tracks[0]);
    return;
  }
  if (state.category === "体育单招" && sportAdmissions.length) {
    const tracks = [...new Set(sportAdmissions.filter((item) => item.province === els.province.value).map((item) => item.track))];
    fillSelect(els.track, tracks.length ? tracks : ["体育类"], tracks[0]);
    return;
  }
  fillSelect(els.track, trackOptions[state.category], trackOptions[state.category][0]);
}

function renderMajorOptions() {
  if (state.category === "艺术类") {
    const current = els.major.value;
    const majors = artAdmissions
      .filter((item) => item.province === els.province.value && item.track === els.track.value)
      .map((item) => item.major)
      .filter((value, index, arr) => arr.indexOf(value) === index)
      .sort((a, b) => a.localeCompare(b, "zh-CN"));

    if (!majors.length) {
      els.major.innerHTML = `<option value="">待导入艺术类数据</option>`;
      return;
    }

    els.major.innerHTML = `<option value="">全部艺术专业</option>${majors.map((major) => `<option value="${major}">${major}</option>`).join("")}`;
    if (majors.includes(current)) els.major.value = current;
    return;
  }

  if (state.category === "体育单招") {
    const current = els.major.value;
    const majors = sportAdmissions
      .filter((item) => item.province === els.province.value && item.track === els.track.value)
      .map((item) => item.major)
      .filter((value, index, arr) => arr.indexOf(value) === index)
      .sort((a, b) => a.localeCompare(b, "zh-CN"));

    if (!majors.length) {
      els.major.innerHTML = `<option value="">待导入体育类数据</option>`;
      return;
    }

    els.major.innerHTML = `<option value="">全部体育类专业</option>${majors.map((major) => `<option value="${major}">${major}</option>`).join("")}`;
    if (majors.includes(current)) els.major.value = current;
    return;
  }

  if (state.category !== "普通类") {
    els.major.innerHTML = `<option value="">全部方向</option>`;
    return;
  }

  const majors = filteredAdmissions()
    .map((item) => item.major)
    .filter((value, index, arr) => arr.indexOf(value) === index)
    .sort((a, b) => a.localeCompare(b, "zh-CN"));

  if (!majors.length) {
    els.major.innerHTML = `<option value="">待导入专业线</option>`;
    return;
  }

  const current = els.major.value;
  els.major.innerHTML = `<option value="">全部专业</option>${majors.map((major) => `<option value="${major}">${major}</option>`).join("")}`;
  if (majors.includes(current)) els.major.value = current;
}

function setStatus(kind, title, text) {
  els.statusTitle.textContent = title;
  els.statusText.textContent = text;
  els.dataBadge.className = `data-badge ${kind === "ready" ? "ready" : "pending"}`;
  els.dataBadge.textContent = kind === "ready" ? "可预测" : "待导入";
}

function renderStatus() {
  if (state.category === "艺术类") {
    const provinceRows = artAdmissions.filter((item) => item.province === els.province.value);
    if (provinceRows.length) {
      setStatus("ready", "艺术类分数已导入", `${els.province.value} 已导入 ${provinceRows.length} 条艺术类分数记录。艺术类先展示历年分数，不套普通高考位次预测。`);
    } else {
      setStatus("pending", "该省份艺术类待导入", "艺术类需要按省份导入文化分、专业统考分、综合分和投档规则后再预测。");
    }
    return;
  }
  if (state.category === "体育单招") {
    const provinceRows = sportAdmissions.filter((item) => item.province === els.province.value);
    if (provinceRows.length) {
      setStatus("ready", "体育类分数已导入", `${els.province.value} 已导入 ${provinceRows.length} 条官网体育类分数记录。体育单招仍需专项考试规则，当前先展示历年分数。`);
    } else {
      setStatus("pending", "体育单招入口已拆分", "体育单招走专项考试、文化考试和学校规则，不能用普通高考分数位次直接判断。");
    }
    return;
  }
  if (state.category === "数据说明") {
    setStatus("ready", "已导入官网公开数据", `普通类 ${dataMeta.ordinaryCount || ordinaryAdmissions.length} 条，艺术类 ${dataMeta.artCount || artAdmissions.length} 条，体育类 ${dataMeta.sportCount || sportAdmissions.length} 条；覆盖 ${dataMeta.provinceCount || getProvinceOptions().length} 个省区市。`);
    return;
  }
  if (supportsOrdinaryPrediction()) {
    const provinceRows = ordinaryAdmissions.filter((item) => item.province === els.province.value);
    setStatus("ready", "普通类预测", `${els.province.value} 已导入普通类 ${provinceRows.length} 条，包含本科批、提前批、专项计划、公费师范等批次。`);
    return;
  }
  setStatus("pending", "该省份暂未导入专业线", "这个省份或科类的入口已经有了，但还缺少近三年专业最低分和最低位次。导入官方数据后即可开放预测。");
}

function renderSummary(rows) {
  if (state.category !== "普通类") {
    if (state.category === "艺术类") {
      const artRows = getArtRows();
      const years = [...new Set(artRows.map((item) => item.year))].sort();
      els.metricOneLabel.textContent = "艺术记录";
      els.metricOneHint.textContent = "历年分数表";
      els.metricTwoLabel.textContent = "覆盖年份";
      els.metricThreeLabel.textContent = "录取口径";
      els.metricThreeHint.textContent = "不套普通位次";
      els.stableCount.textContent = artRows.length;
      els.bestMajor.textContent = years.length ? years.join(" / ") : "待导入";
      els.bestChance.textContent = "按专业统考/综合分口径查看";
      els.predictedLine.textContent = "艺术类";
      return;
    }
    if (state.category === "体育单招") {
      const sportRows = getSportRows();
      const years = [...new Set(sportRows.map((item) => item.year))].sort();
      els.metricOneLabel.textContent = "体育记录";
      els.metricOneHint.textContent = "官网体育类分数";
      els.metricTwoLabel.textContent = "覆盖年份";
      els.metricThreeLabel.textContent = "单招口径";
      els.metricThreeHint.textContent = "需另看专项考试";
      els.stableCount.textContent = sportRows.length;
      els.bestMajor.textContent = years.length ? years.join(" / ") : "待导入";
      els.bestChance.textContent = "当前先展示体育类历年分数";
      els.predictedLine.textContent = "体育类";
      return;
    }

    const labels = {
      艺术类: ["艺术入口", "需看综合分", "待导入规则"],
      体育单招: ["单招入口", "需看专项分", "待导入简章"],
      数据说明: ["全国省份", "官网已导入", "可继续核验"],
    };
    const [one, two, three] = labels[state.category];
    els.metricOneLabel.textContent = one;
    els.metricOneHint.textContent = "独立于普通类算法";
    els.metricTwoLabel.textContent = "判断口径";
    els.metricThreeLabel.textContent = "数据状态";
    els.metricThreeHint.textContent = "不输出伪预测";
    els.stableCount.textContent = state.category === "数据说明" ? getProvinceOptions().length : trackOptions[state.category].length;
    els.bestMajor.textContent = two;
    els.bestChance.textContent = "录入官方规则后开放预测";
    els.predictedLine.textContent = three;
    return;
  }

  els.metricOneLabel.textContent = "可重点考虑";
  els.metricOneHint.textContent = "稳 / 保专业";
  els.metricTwoLabel.textContent = "最高把握";
  els.metricThreeLabel.textContent = "今年参考线";
  els.metricThreeHint.textContent = "预测值用橙色标注";

  if (!supportsOrdinaryPrediction() || !rows.length) {
    els.stableCount.textContent = "0";
    els.bestMajor.textContent = "待导入";
    els.bestChance.textContent = "暂无该省份专业线";
    els.predictedLine.textContent = "-";
    return;
  }

  const stableRows = rows.filter((item) => ["safe", "steady"].includes(item.verdict.className));
  const best = stableRows[0] || rows[0];
  els.stableCount.textContent = stableRows.length;
  els.bestMajor.textContent = best ? best.major.replace("（师范类）", "") : "-";
    els.bestChance.textContent = best
      ? `${best.verdict.label}，${best.predictedRank ? `预测位次 ${best.predictedRank.toLocaleString("zh-CN")}` : `预测分 ${formatValue(best.predictedScore)}`}`
      : "暂无结果";
  els.predictedLine.textContent = best ? `${formatValue(best.predictedScore)} 分` : "-";
}

function renderOrdinaryTable(rows) {
  els.resultWrap.hidden = false;
  els.cardsList.hidden = true;
  els.legend.hidden = false;
  els.resultTitle.textContent = "专业预测结果";
  els.resultIntro.textContent = "按录取把握排序，预测位次越小代表竞争越激烈。";
  els.resultWrap.querySelector("thead").innerHTML = `<tr>
    <th>专业 / 批次</th>
    <th>2023 最低分 / 位次</th>
    <th>2024 最低分 / 位次</th>
    <th>2025 最低分 / 位次</th>
    <th class="predicted">2026 预测分 / 位次</th>
    <th>档位</th>
    <th>说明</th>
  </tr>`;

  if (!supportsOrdinaryPrediction()) {
    els.body.innerHTML = `<tr class="empty-row"><td colspan="7">${els.province.value} ${els.track.value} 的三年专业线还没有导入。请先导入官方录取分数表，再开放预测。</td></tr>`;
    return;
  }

  if (!rows.length) {
    els.body.innerHTML = `<tr class="empty-row"><td colspan="7">当前筛选条件下暂无专业数据。</td></tr>`;
    return;
  }

  els.body.innerHTML = rows
    .map((item) => {
      const cells = [2023, 2024, 2025]
        .map((year) => {
          const value = item.scores[year] || {};
          return `<td>${formatValue(value.score)}<br><span class="muted">${formatValue(value.rank)}</span></td>`;
        })
        .join("");

      return `<tr>
        <td><strong>${item.major}</strong><br><span class="muted">${item.batch || "本科批"}</span></td>
        ${cells}
        <td class="predicted">${formatValue(item.predictedScore)}<br><span>${item.predictedRank ? formatValue(item.predictedRank) : "按分数判断"}</span></td>
        <td><span class="tag ${item.verdict.className}">${item.verdict.label}</span></td>
        <td>${item.verdict.note}</td>
      </tr>`;
    })
    .join("");
}

function renderArtTable() {
  const rows = getArtRows();
  els.resultWrap.hidden = false;
  els.cardsList.hidden = true;
  els.legend.hidden = true;
  els.resultTitle.textContent = "艺术类历年分数";
  els.resultIntro.textContent = "艺术类先展示公开表格中的最低分、平均分和最高分；后续导入各省综合分公式后再做冲稳保预测。";
  els.resultWrap.querySelector("thead").innerHTML = `<tr>
    <th>年份</th>
    <th>专业 / 批次</th>
    <th>科类</th>
    <th>最低分</th>
    <th>平均分</th>
    <th>最高分</th>
    <th>备注</th>
  </tr>`;

  if (!rows.length) {
    els.body.innerHTML = `<tr class="empty-row"><td colspan="7">${els.province.value} ${els.track.value} 艺术类数据暂未导入。</td></tr>`;
    return;
  }

  els.body.innerHTML = rows
    .map(
      (item) => `<tr>
        <td>${item.year}</td>
        <td><strong>${item.major}</strong><br><span class="muted">${item.batch}</span></td>
        <td>${item.track}</td>
        <td class="predicted">${formatValue(item.minScore)}</td>
        <td>${formatValue(item.avgScore)}</td>
        <td>${formatValue(item.maxScore)}</td>
        <td>${item.note || item.controlLine || "按艺术类投档规则"}</td>
      </tr>`,
    )
    .join("");
}

function renderSportTable() {
  const rows = getSportRows();
  els.resultWrap.hidden = false;
  els.cardsList.hidden = true;
  els.legend.hidden = true;
  els.resultTitle.textContent = "体育类历年分数";
  els.resultIntro.textContent = "这里展示的是官网公开的体育类录取分数；体育单招还要看专项考试、文化考试和学校单招简章，不能直接用普通位次预测。";
  els.resultWrap.querySelector("thead").innerHTML = `<tr>
    <th>年份</th>
    <th>专业 / 批次</th>
    <th>科类</th>
    <th>最低分</th>
    <th>平均分</th>
    <th>最高分</th>
    <th>备注</th>
  </tr>`;

  if (!rows.length) {
    els.body.innerHTML = `<tr class="empty-row"><td colspan="7">${els.province.value} ${els.track.value} 体育类数据暂未导入。</td></tr>`;
    return;
  }

  els.body.innerHTML = rows
    .map(
      (item) => `<tr>
        <td>${item.year}</td>
        <td><strong>${item.major}</strong><br><span class="muted">${item.batch}</span></td>
        <td>${item.track}</td>
        <td class="predicted">${formatValue(item.minScore)}</td>
        <td>${formatValue(item.avgScore)}</td>
        <td>${formatValue(item.maxScore)}</td>
        <td>${item.note || item.type || "按体育类投档规则录取"}</td>
      </tr>`,
    )
    .join("");
}

function renderCards(title, intro, cards) {
  els.resultWrap.hidden = true;
  els.cardsList.hidden = false;
  els.legend.hidden = true;
  els.resultTitle.textContent = title;
  els.resultIntro.textContent = intro;
  els.cardsList.innerHTML = cards
    .map(
      (card) => `<article class="info-card">
        <span class="card-kicker">${card.kicker}</span>
        <h3>${card.title}</h3>
        <p>${card.text}</p>
      </article>`,
    )
    .join("");
}

function renderSpecialCategory() {
  if (state.category === "艺术类") {
    if (artAdmissions.length) {
      renderArtTable();
    } else {
      renderCards("艺术类预测口径", "艺术类先独立出来，后续按省份、专业统考类别和综合分规则做专门预测。", artCards);
    }
    return;
  }
  if (state.category === "体育单招") {
    if (getSportRows().length) {
      renderSportTable();
    } else {
      renderCards("体育单招预测口径", "体育单招不走普通位次算法，需要单独录入专项与文化考试数据。", sportCards);
    }
    return;
  }
  renderCards("完整版数据说明", "已接入哈师大招生网 2023-2025 年公开分数线，后续可继续补各省考试院投档位次和招生计划。", dataCards);
}

function renderControls() {
  const isExplanation = state.category === "数据说明";
  els.score.closest(".field").hidden = isExplanation || state.category !== "普通类";
  els.rank.closest(".field").hidden = isExplanation || state.category !== "普通类";
  els.major.closest(".field").hidden = isExplanation;
  els.button.hidden = isExplanation;
}

function render() {
  renderStatus();
  renderControls();

  if (state.category === "普通类") {
    const rows = buildRows();
    renderSummary(rows);
    renderOrdinaryTable(rows);
    return;
  }

  renderSummary([]);
  renderSpecialCategory();
}

function switchCategory(category) {
  state.category = category;
  els.tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.category === category));
  renderTrackOptions();
  renderMajorOptions();
  render();
}

renderProvinceOptions();
renderTrackOptions();
renderMajorOptions();
render();

els.tabs.forEach((tab) => {
  tab.addEventListener("click", () => switchCategory(tab.dataset.category));
});

els.track.addEventListener("change", () => {
  renderMajorOptions();
  render();
});
els.province.addEventListener("change", () => {
  renderTrackOptions();
  renderMajorOptions();
  render();
});
els.major.addEventListener("change", render);
els.button.addEventListener("click", render);
els.rank.addEventListener("input", render);
els.score.addEventListener("input", render);
