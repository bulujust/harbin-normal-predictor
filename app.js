const admissions = [
  {
    province: "黑龙江",
    track: "物理类",
    major: "数学与应用数学（行知实验班）",
    scores: {
      2023: { score: 536, rank: 9540 },
      2024: { score: 586, rank: 11483 },
      2025: { score: 564, rank: 13227 },
    },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "物理学（行知实验班）",
    scores: {
      2023: { score: 516, rank: 12569 },
      2024: { score: 577, rank: 13320 },
      2025: { score: 548, rank: 17306 },
    },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "汉语言文学（行知实验班）",
    scores: {
      2023: { score: null, rank: null },
      2024: { score: 570, rank: 14906 },
      2025: { score: 536, rank: 20638 },
    },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "数学与应用数学（师范类）",
    scores: {
      2023: { score: 504, rank: 14656 },
      2024: { score: 560, rank: 17241 },
      2025: { score: 530, rank: 22442 },
    },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "化学（行知实验班）",
    scores: {
      2023: { score: 498, rank: 15754 },
      2024: { score: 556, rank: 18272 },
      2025: { score: 527, rank: 23358 },
    },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "生物科学（行知实验班）",
    scores: {
      2023: { score: 489, rank: 17444 },
      2024: { score: 550, rank: 19799 },
      2025: { score: 514, rank: 27485 },
    },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "汉语言文学（师范类）",
    scores: {
      2023: { score: null, rank: null },
      2024: { score: 523, rank: 27469 },
      2025: { score: 508, rank: 29482 },
    },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "计算机科学与技术（师范类）",
    scores: {
      2023: { score: 440, rank: 29039 },
      2024: { score: 520, rank: 28339 },
      2025: { score: 511, rank: 28493 },
    },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "法学",
    scores: {
      2023: { score: 468, rank: 21945 },
      2024: { score: 500, rank: 34515 },
      2025: { score: 506, rank: 30143 },
    },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "物理学（师范类）",
    scores: {
      2023: { score: 429, rank: 32164 },
      2024: { score: 535, rank: 23987 },
      2025: { score: 499, rank: 32535 },
    },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "化学（师范类）",
    scores: {
      2023: { score: 450, rank: 26278 },
      2024: { score: 534, rank: 24261 },
      2025: { score: 494, rank: 34234 },
    },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "会计学",
    scores: {
      2023: { score: 434, rank: 30731 },
      2024: { score: 473, rank: 43637 },
      2025: { score: 493, rank: 34567 },
    },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "软件工程",
    scores: {
      2023: { score: 429, rank: 32164 },
      2024: { score: 493, rank: 36710 },
      2025: { score: 490, rank: 35620 },
    },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "英语（师范类）",
    scores: {
      2023: { score: 434, rank: 30731 },
      2024: { score: 509, rank: 31720 },
      2025: { score: 470, rank: 42656 },
    },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "地理科学（师范类）",
    scores: {
      2023: { score: 433, rank: 30986 },
      2024: { score: 490, rank: 37704 },
      2025: { score: 424, rank: 60117 },
    },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "小学教育（师范类）",
    scores: {
      2023: { score: null, rank: null },
      2024: { score: 502, rank: 33913 },
      2025: { score: 460, rank: 46345 },
    },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "电子信息科学与技术",
    scores: {
      2023: { score: 392, rank: 44085 },
      2024: { score: 476, rank: 42594 },
      2025: { score: 468, rank: 43426 },
    },
  },
  {
    province: "黑龙江",
    track: "物理类",
    major: "学前教育（师范类）",
    scores: {
      2023: { score: 409, rank: 38389 },
      2024: { score: 487, rank: 38734 },
      2025: { score: 443, rank: 52639 },
    },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "汉语言文学（行知实验班）",
    scores: {
      2023: { score: 494, rank: 2279 },
      2024: { score: 575, rank: 2373 },
      2025: { score: 553, rank: 3201 },
    },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "思想政治教育（行知实验班）",
    scores: {
      2023: { score: 483, rank: 2937 },
      2024: { score: 562, rank: 3174 },
      2025: { score: 546, rank: 3684 },
    },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "思想政治教育（师范类）",
    scores: {
      2023: { score: 468, rank: 4024 },
      2024: { score: 557, rank: 3535 },
      2025: { score: 542, rank: 4022 },
    },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "汉语言文学（师范类）",
    scores: {
      2023: { score: 466, rank: 4176 },
      2024: { score: 549, rank: 4182 },
      2025: { score: 515, rank: 6400 },
    },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "历史学（行知实验班）",
    scores: {
      2023: { score: 466, rank: 4176 },
      2024: { score: 549, rank: 4182 },
      2025: { score: 514, rank: 6497 },
    },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "法学",
    scores: {
      2023: { score: 454, rank: 5198 },
      2024: { score: 531, rank: 5870 },
      2025: { score: 524, rank: 5533 },
    },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "会计学",
    scores: {
      2023: { score: 447, rank: 5889 },
      2024: { score: 518, rank: 7189 },
      2025: { score: 515, rank: 6400 },
    },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "经济学",
    scores: {
      2023: { score: 443, rank: 6281 },
      2024: { score: 514, rank: 7628 },
      2025: { score: 513, rank: 6600 },
    },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "历史学（师范类）",
    scores: {
      2023: { score: 457, rank: 4936 },
      2024: { score: 539, rank: 5075 },
      2025: { score: 490, rank: 9321 },
    },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "教育学（师范类）",
    scores: {
      2023: { score: 444, rank: 6179 },
      2024: { score: 531, rank: 5870 },
      2025: { score: 496, rank: 8595 },
    },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "英语（师范类）",
    scores: {
      2023: { score: 445, rank: 6078 },
      2024: { score: 529, rank: 6081 },
      2025: { score: 487, rank: 9696 },
    },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "小学教育（师范类）",
    scores: {
      2023: { score: 443, rank: 6281 },
      2024: { score: 522, rank: 6762 },
      2025: { score: 482, rank: 10349 },
    },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "汉语国际教育（师范类）",
    scores: {
      2023: { score: 437, rank: 6986 },
      2024: { score: 528, rank: 6173 },
      2025: { score: 493, rank: 8945 },
    },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "日语（师范类）",
    scores: {
      2023: { score: 430, rank: 7852 },
      2024: { score: 520, rank: 6977 },
      2025: { score: 482, rank: 10349 },
    },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "学前教育（师范类）",
    scores: {
      2023: { score: 435, rank: 7239 },
      2024: { score: 521, rank: 6858 },
      2025: { score: 483, rank: 10223 },
    },
  },
  {
    province: "黑龙江",
    track: "历史类",
    major: "文物保护技术",
    scores: {
      2023: { score: 423, rank: 8759 },
      2024: { score: 474, rank: 12747 },
      2025: { score: 425, rank: 19248 },
    },
  },
];

const controlLines = {
  "物理类": { 2024: 360, 2025: 360, 2026: 340 },
  "历史类": { 2024: 410, 2025: 405, 2026: 385 },
};

const rankToScoreAnchors = {
  "物理类": [
    { rank: 6600, score: 600 },
    { rank: 13200, score: 565 },
    { rank: 22500, score: 530 },
    { rank: 33000, score: 500 },
    { rank: 43000, score: 470 },
    { rank: 60000, score: 425 },
    { rank: 85000, score: 340 },
  ],
  "历史类": [
    { rank: 860, score: 600 },
    { rank: 3200, score: 553 },
    { rank: 5500, score: 524 },
    { rank: 9000, score: 493 },
    { rank: 12000, score: 470 },
    { rank: 19000, score: 425 },
    { rank: 25000, score: 385 },
  ],
};

const els = {
  province: document.querySelector("#province"),
  track: document.querySelector("#track"),
  score: document.querySelector("#score"),
  rank: document.querySelector("#rank"),
  major: document.querySelector("#major"),
  button: document.querySelector("#predictBtn"),
  body: document.querySelector("#resultBody"),
  stableCount: document.querySelector("#stableCount"),
  bestMajor: document.querySelector("#bestMajor"),
  bestChance: document.querySelector("#bestChance"),
  predictedLine: document.querySelector("#predictedLine"),
};

function formatValue(value) {
  return value === null || value === undefined ? "缺数据" : value.toLocaleString("zh-CN");
}

function weightedAverage(values) {
  const weights = { 2025: 0.5, 2024: 0.3, 2023: 0.2 };
  const usable = Object.entries(weights).filter(([year]) => values[year]?.rank);
  const totalWeight = usable.reduce((sum, [, weight]) => sum + weight, 0);
  return Math.round(
    usable.reduce((sum, [year, weight]) => sum + values[year].rank * weight, 0) / totalWeight,
  );
}

function estimateScore(track, rank) {
  const anchors = rankToScoreAnchors[track];
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
  const lines = controlLines[track];
  const lineChange = lines[2026] - lines[2025];
  const easierToReach = lineChange < 0 ? 1.025 : 0.985;
  return Math.round(baseRank * easierToReach);
}

function classify(userRank, predictedRank) {
  const gap = predictedRank - userRank;
  const ratio = gap / predictedRank;

  if (ratio >= 0.18) {
    return { label: "保", className: "safe", note: `你的位次领先预测线 ${Math.abs(gap).toLocaleString("zh-CN")} 名，录取把握较高。` };
  }
  if (ratio >= 0.06) {
    return { label: "稳", className: "steady", note: `你的位次领先预测线 ${Math.abs(gap).toLocaleString("zh-CN")} 名，可作为重点选择。` };
  }
  if (ratio >= -0.06) {
    return { label: "冲", className: "rush", note: `你的位次接近预测线，建议结合招生计划和服从调剂。` };
  }
  return { label: "风险", className: "risk", note: `你的位次落后预测线 ${Math.abs(gap).toLocaleString("zh-CN")} 名，录取难度较高。` };
}

function buildRows() {
  const province = els.province.value;
  const track = els.track.value;
  const major = els.major.value;
  const userRank = Number(els.rank.value || 0);

  return admissions
    .filter((item) => item.province === province && item.track === track)
    .filter((item) => !major || item.major === major)
    .map((item) => {
      const baseRank = weightedAverage(item.scores);
      const predictedRank = applyYearAdjustment(track, baseRank);
      const predictedScore = estimateScore(track, predictedRank);
      const verdict = classify(userRank, predictedRank);
      return { ...item, predictedRank, predictedScore, verdict };
    })
    .sort((a, b) => {
      const order = { safe: 0, steady: 1, rush: 2, risk: 3 };
      return order[a.verdict.className] - order[b.verdict.className] || a.predictedRank - b.predictedRank;
    });
}

function renderMajorOptions() {
  const track = els.track.value;
  const current = els.major.value;
  const majors = admissions
    .filter((item) => item.province === els.province.value && item.track === track)
    .map((item) => item.major)
    .sort((a, b) => a.localeCompare(b, "zh-CN"));

  els.major.innerHTML = `<option value="">全部专业</option>${majors
    .map((major) => `<option value="${major}">${major}</option>`)
    .join("")}`;
  if (majors.includes(current)) els.major.value = current;
}

function render() {
  const rows = buildRows();
  els.body.innerHTML = rows
    .map((item) => {
      const cells = [2023, 2024, 2025]
        .map((year) => {
          const value = item.scores[year];
          return `<td>${formatValue(value.score)}<br><span class="muted">${formatValue(value.rank)}</span></td>`;
        })
        .join("");

      return `<tr>
        <td><strong>${item.major}</strong></td>
        ${cells}
        <td class="predicted">${item.predictedScore}<br><span>${item.predictedRank.toLocaleString("zh-CN")}</span></td>
        <td><span class="tag ${item.verdict.className}">${item.verdict.label}</span></td>
        <td>${item.verdict.note}</td>
      </tr>`;
    })
    .join("");

  const stableRows = rows.filter((item) => ["safe", "steady"].includes(item.verdict.className));
  const best = stableRows[0] || rows[0];
  els.stableCount.textContent = stableRows.length;
  els.bestMajor.textContent = best ? best.major.replace("（师范类）", "") : "-";
  els.bestChance.textContent = best ? `${best.verdict.label}，预测位次 ${best.predictedRank.toLocaleString("zh-CN")}` : "暂无结果";
  els.predictedLine.textContent = best ? `${best.predictedScore} 分` : "-";
}

els.track.addEventListener("change", () => {
  renderMajorOptions();
  render();
});
els.province.addEventListener("change", () => {
  renderMajorOptions();
  render();
});
els.major.addEventListener("change", render);
els.button.addEventListener("click", render);
els.rank.addEventListener("input", render);
els.score.addEventListener("input", render);

renderMajorOptions();
render();
