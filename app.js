(function () {
  const data = window.FOUR_U_DATA;
  const totalQuestions = data.questions.length;
  const state = {
    nickname: "",
    current: 0,
    answers: [],
    sharedResult: false,
    latestResult: null
  };

  const screens = {
    home: document.getElementById("homeScreen"),
    quiz: document.getElementById("quizScreen"),
    result: document.getElementById("resultScreen")
  };

  const startForm = document.getElementById("startForm");
  const nicknameInput = document.getElementById("nickname");
  const backBtn = document.getElementById("backBtn");
  const questionCounter = document.getElementById("questionCounter");
  const progressFill = document.getElementById("progressFill");
  const dimensionHint = document.getElementById("dimensionHint");
  const questionText = document.getElementById("questionText");
  const optionsWrap = document.getElementById("optionsWrap");
  const resultName = document.getElementById("resultName");
  const resultPersonaImage = document.getElementById("resultPersonaImage");
  const resultType = document.getElementById("resultType");
  const resultTitle = document.getElementById("resultTitle");
  const resultDesc = document.getElementById("resultDesc");
  const dimensionBars = document.getElementById("dimensionBars");
  const positionText = document.getElementById("positionText");
  const partnerText = document.getElementById("partnerText");
  const verdictText = document.getElementById("verdictText");
  const copyResultBtn = document.getElementById("copyResultBtn");
  const posterBtn = document.getElementById("posterBtn");
  const copyLinkBtn = document.getElementById("copyLinkBtn");
  const restartBtn = document.getElementById("restartBtn");
  const toast = document.getElementById("toast");

  function showScreen(name) {
    Object.values(screens).forEach((screen) => screen.classList.remove("active"));
    screens[name].classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cleanNickname(value) {
    return (value || "").trim().replace(/[<>]/g, "").slice(0, 14) || "4U玩家";
  }

  function dimensionLabel(question) {
    const dim = data.dimensions.find((item) => item.key === question.dimension);
    return `${dim.left}/${dim.right} · ${dim.leftName} vs ${dim.rightName}`;
  }

  function startQuiz(name) {
    state.nickname = cleanNickname(name);
    localStorage.setItem("fourUPlayerName", state.nickname);
    state.current = 0;
    state.answers = [];
    state.sharedResult = false;
    renderQuestion();
    showScreen("quiz");
  }

  function renderQuestion() {
    const question = data.questions[state.current];
    questionCounter.textContent = `${state.current + 1} / ${totalQuestions}`;
    progressFill.style.width = `${(state.current / totalQuestions) * 100}%`;
    backBtn.disabled = state.current === 0;
    backBtn.style.opacity = state.current === 0 ? "0.45" : "1";
    dimensionHint.textContent = dimensionLabel(question);
    questionText.textContent = question.text;
    optionsWrap.innerHTML = "";

    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.className = "option-btn";
      button.type = "button";
      button.textContent = option.text;
      button.addEventListener("click", () => chooseOption(index));
      optionsWrap.appendChild(button);
    });
  }

  function chooseOption(index) {
    state.answers[state.current] = index;
    if (state.current < totalQuestions - 1) {
      state.current += 1;
      renderQuestion();
      return;
    }

    progressFill.style.width = "100%";
    showResult(calculateResult(), false);
  }

  function baseScores() {
    return { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  }

  function calculateScoresFromAnswers() {
    const scores = baseScores();
    data.questions.forEach((question, index) => {
      const selectedIndex = state.answers[index];
      const selected = question.options[selectedIndex];
      if (selected) scores[selected.score] += 1;
    });
    return scores;
  }

  function calculateResult() {
    const scores = calculateScoresFromAnswers();
    const type = [
      scores.E >= scores.I ? "E" : "I",
      scores.S >= scores.N ? "S" : "N",
      scores.T >= scores.F ? "T" : "F",
      scores.J >= scores.P ? "J" : "P"
    ].join("");

    return { nickname: state.nickname, type, scores };
  }

  function scoresFromType(type) {
    const scores = baseScores();
    data.dimensions.forEach((dim) => {
      const winner = type.includes(dim.left) ? dim.left : dim.right;
      const loser = winner === dim.left ? dim.right : dim.left;
      scores[winner] = 3;
      scores[loser] = 1;
    });
    return scores;
  }

  function showResult(result, fromShare) {
    const detail = data.results[result.type] || data.results.ENTJ;
    state.latestResult = { ...result, detail };
    state.sharedResult = Boolean(fromShare);

    resultName.textContent = `${result.nickname}的玩家类型`;
    resultPersonaImage.src = personaImagePath(result.type);
    resultPersonaImage.alt = `${result.type} ${detail.title} 4U公会人格图`;
    resultType.textContent = result.type;
    resultTitle.textContent = detail.title;
    resultDesc.textContent = detail.description;
    positionText.textContent = detail.position;
    partnerText.textContent = detail.partner;
    verdictText.textContent = detail.verdict;
    restartBtn.textContent = fromShare ? "我也测一测" : "重新测试";
    renderDimensionBars(result.scores, result.type);
    showScreen("result");
  }

  function renderDimensionBars(scores, type) {
    dimensionBars.innerHTML = "";
    data.dimensions.forEach((dim) => {
      const leftScore = scores[dim.left] || 0;
      const rightScore = scores[dim.right] || 0;
      const total = Math.max(leftScore + rightScore, 1);
      const leftPercent = Math.round((leftScore / total) * 100);
      const activeLetter = type.includes(dim.left) ? dim.left : dim.right;
      const activeName = activeLetter === dim.left ? dim.leftName : dim.rightName;

      const item = document.createElement("div");
      item.className = "bar-item";
      item.innerHTML = `
        <div class="bar-head">
          <span>${dim.left} ${dim.leftName}</span>
          <strong>${activeLetter} · ${activeName}</strong>
          <span>${dim.right} ${dim.rightName}</span>
        </div>
        <div class="bar-track">
          <div class="bar-fill" style="width: ${leftPercent}%"></div>
        </div>
      `;
      dimensionBars.appendChild(item);
    });
  }

  function resultText() {
    const result = state.latestResult;
    return [
      "【4U 玩家人格测试】",
      `${result.nickname} 的类型：${result.type} · ${result.detail.title}`,
      result.detail.description,
      `推荐队伍位置：${result.detail.position}`,
      `最佳搭档类型：${result.detail.partner}`,
      `公会鉴定意见：${result.detail.verdict}`,
      "本测试为 4U 公会娱乐内容，仅反映游戏风格，不属于专业人格测评。"
    ].join("\n");
  }

  function shareUrl() {
    const result = state.latestResult;
    const url = new URL(window.location.href);
    url.search = "";
    url.hash = "";
    url.searchParams.set("type", result.type);
    url.searchParams.set("nick", result.nickname);
    return url.toString();
  }

  function personaImagePath(type) {
    return `assets/personas/${type.toLowerCase()}.webp`;
  }

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });
  }

  function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
    const words = String(text).split("");
    const lines = [];
    let line = "";

    words.forEach((word) => {
      const testLine = line + word;
      if (ctx.measureText(testLine).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = testLine;
      }
    });
    if (line) lines.push(line);

    lines.slice(0, maxLines).forEach((item, index) => {
      const finalText = index === maxLines - 1 && lines.length > maxLines ? `${item.slice(0, -1)}...` : item;
      ctx.fillText(finalText, x, y + index * lineHeight);
    });
    return Math.min(lines.length, maxLines) * lineHeight;
  }

  function drawPill(ctx, x, y, width, height, color) {
    const radius = height / 2;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.fill();
  }

  function drawPosterLogoFallback(ctx) {
    ctx.save();
    ctx.translate(540, 320);
    ctx.shadowColor = "rgba(255,79,163,0.46)";
    ctx.shadowBlur = 46;
    ctx.fillStyle = "rgba(255,79,163,0.14)";
    ctx.beginPath();
    ctx.arc(0, 0, 230, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.strokeStyle = "rgba(80,228,221,0.5)";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(0, 0, 190, 0, Math.PI * 2);
    ctx.stroke();

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#ffffff";
    ctx.font = "900 190px Arial, Microsoft YaHei, sans-serif";
    ctx.fillText("4U", 0, 8);
    ctx.fillStyle = "#ff9ccc";
    ctx.font = "700 34px Microsoft YaHei, sans-serif";
    ctx.fillText("FOR YOU, ALWAYS", 0, 164);
    ctx.restore();
  }

  function canvasToBlob(canvas) {
    return new Promise((resolve, reject) => {
      try {
        canvas.toBlob((blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error("empty poster image"));
          }
        }, "image/png");
      } catch (error) {
        reject(error);
      }
    });
  }

  async function generatePoster() {
    const result = state.latestResult;
    if (!result) return;

    posterBtn.disabled = true;
    posterBtn.textContent = "正在生成...";

    try {
      const canvas = document.createElement("canvas");
      const width = 1080;
      const height = 1440;
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      let posterImage = null;
      if (window.location.protocol !== "file:") {
        try {
          posterImage = await loadImage(personaImagePath(result.type));
        } catch (error) {
          posterImage = null;
        }
      }

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#171821");
      gradient.addColorStop(0.45, "#241826");
      gradient.addColorStop(1, "#10141c");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(255,255,255,0.07)";
      ctx.lineWidth = 2;
      for (let x = 0; x < width; x += 72) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 72) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      ctx.shadowColor = "rgba(255,79,163,0.42)";
      ctx.shadowBlur = 42;
      if (posterImage) {
        ctx.drawImage(posterImage, 220, 54, 640, 640);
      } else {
        drawPosterLogoFallback(ctx);
      }
      ctx.shadowBlur = 0;

      ctx.textAlign = "center";
      ctx.fillStyle = "#ff9ccc";
      ctx.font = "700 32px Microsoft YaHei, sans-serif";
      ctx.fillText("4U 玩家人格测试", width / 2, 720);

      ctx.fillStyle = "#ffffff";
      ctx.font = "900 132px Arial, Microsoft YaHei, sans-serif";
      ctx.fillText(result.type, width / 2, 860);

      ctx.fillStyle = "#ff4fa3";
      ctx.font = "900 64px Microsoft YaHei, sans-serif";
      ctx.fillText(result.detail.title, width / 2, 950);

      drawPill(ctx, 244, 986, 592, 64, "rgba(80,228,221,0.15)");
      ctx.fillStyle = "#50e4dd";
      ctx.font = "700 30px Microsoft YaHei, sans-serif";
      ctx.fillText(`${result.nickname}的玩家类型`, width / 2, 1028);

      ctx.textAlign = "left";
      ctx.fillStyle = "#e9dfec";
      ctx.font = "400 34px Microsoft YaHei, sans-serif";
      wrapCanvasText(ctx, result.detail.description, 100, 1082, 880, 48, 3);

      ctx.fillStyle = "rgba(255,255,255,0.08)";
      ctx.fillRect(100, 1248, 880, 1);
      ctx.fillStyle = "#ffffff";
      ctx.font = "700 30px Microsoft YaHei, sans-serif";
      ctx.fillText(`推荐位置：${result.detail.position}`, 100, 1300);
      ctx.fillText(`最佳搭档：${result.detail.partner}`, 100, 1350);

      ctx.fillStyle = "rgba(255,255,255,0.56)";
      ctx.font = "400 24px Microsoft YaHei, sans-serif";
      ctx.fillText("本测试为 4U 公会娱乐内容，仅反映游戏风格，不属于专业人格测评。", 100, 1400);

      const blob = await canvasToBlob(canvas);
      const fileName = `4U-${result.type}-${result.nickname}.png`;
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(link.href);
      showToast("海报已生成并下载");
    } catch (error) {
      showToast("海报生成失败，请重试");
    } finally {
      posterBtn.disabled = false;
      posterBtn.textContent = "生成结果海报";
    }
  }

  async function copyText(text, successMessage) {
    try {
      await navigator.clipboard.writeText(text);
      showToast(successMessage);
    } catch (error) {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
      showToast(successMessage);
    }
  }

  function showToast(message) {
    toast.textContent = message;
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => {
      toast.textContent = "";
    }, 2200);
  }

  function readSharedResult() {
    const params = new URLSearchParams(window.location.search);
    const type = (params.get("type") || "").toUpperCase();
    if (!data.results[type]) return false;

    showResult(
      {
        nickname: cleanNickname(params.get("nick")),
        type,
        scores: scoresFromType(type)
      },
      true
    );
    return true;
  }

  startForm.addEventListener("submit", (event) => {
    event.preventDefault();
    startQuiz(nicknameInput.value);
  });

  backBtn.addEventListener("click", () => {
    if (state.current === 0) return;
    state.current -= 1;
    renderQuestion();
  });

  copyResultBtn.addEventListener("click", () => copyText(resultText(), "测试结果已复制"));
  posterBtn.addEventListener("click", generatePoster);
  copyLinkBtn.addEventListener("click", () => copyText(shareUrl(), "分享链接已复制"));
  restartBtn.addEventListener("click", () => {
    const savedName = localStorage.getItem("fourUPlayerName") || "";
    nicknameInput.value = state.sharedResult ? "" : savedName;
    showScreen("home");
  });

  const savedName = localStorage.getItem("fourUPlayerName");
  if (savedName) nicknameInput.value = savedName;
  if (!readSharedResult()) showScreen("home");
})();
