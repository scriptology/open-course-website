(() => {
  const screen = document.getElementById("term-demo-screen");
  if (!screen) return;

  const TASK = "My friend works in a cafe";
  const ANSWER = "Mi amigo trabajo en un cafe";
  const SPIN = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
  const BAR_WIDTH = 16;
  const LEVELS = [
    { level: "A1", completed: 0, inProgress: 6, notStarted: 0 },
    { level: "A2", completed: 0, inProgress: 6, notStarted: 6 },
    { level: "B1", completed: 0, inProgress: 6, notStarted: 9 },
    { level: "B2", completed: 0, inProgress: 0, notStarted: 13 },
    { level: "C1", completed: 0, inProgress: 0, notStarted: 17 },
    { level: "C2", completed: 0, inProgress: 0, notStarted: 16 },
  ];
  const COURSE = { completed: 0, inProgress: 18, notStarted: 61 };
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const esc = (s) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  function practiceHtml(answer, showCursor) {
    const cursor = showCursor ? '<span class="t-cursor">|</span>' : "";
    return (
      `<div class="t-card">` +
      `<div class="t-card__title">Translate 1/1</div>` +
      `<div class="t-card__body">${esc(TASK)}</div>` +
      `</div>` +
      `<div class="t-card">` +
      `<div class="t-card__title">Your answer</div>` +
      `<div class="t-card__body">${esc(answer)}${cursor}</div>` +
      `</div>` +
      `<div class="t-footer">Enter: submit | Esc: back</div>`
    );
  }

  function loadingHtml(frame) {
    const sym = SPIN[frame % SPIN.length];
    return (
      `<span class="t-amber">${sym}</span> Analyzing answers...\n\n` +
      `<span class="t-dim">Esc: cancel</span>`
    );
  }

  function reportHtml() {
    return (
      `<span class="t-mint t-bold">Topic: Present Simple</span>\n\n` +
      `<span class="t-blue t-bold">Per-exercise results</span>\n\n` +
      `<span class="t-bold">1. Task:</span> ${esc(TASK)}\n` +
      `   <span class="t-bold">Your translation:</span> <span class="t-red">✗</span> Mi amigo <span class="t-red">trabajo</span> en un cafe\n` +
      `   <span class="t-bold">Correct answer:</span> Mi amigo <span class="t-mint t-bold">trabaja</span> en un café\n` +
      `   <span class="t-amber t-italic">↪ Third person: "trabaja", not "trabajo"</span>\n\n` +
      `<span class="t-blue t-bold">Topic scores</span>\n` +
      `• present-simple: <span class="t-mint">72</span> (+12)\n\n` +
      `<span class="t-blue t-bold">Added to review</span>\n` +
      `• Present: trabajar\n\n` +
      `<span class="t-dim">↑/↓: scroll | n: new topic | r: repeat | Esc: dashboard</span>`
    );
  }

  function stackedBar(completed, inProgress, notStarted) {
    const total = completed + inProgress + notStarted;
    if (total === 0) {
      return `<span class="t-bar t-bar--empty"></span>`;
    }
    const c = Math.round((completed / total) * BAR_WIDTH);
    const ip = Math.round((inProgress / total) * BAR_WIDTH);
    const n = Math.max(0, BAR_WIDTH - c - ip);
    const seg = (cls, w) =>
      w > 0 ? `<span class="t-bar__seg ${cls}" style="flex:${w}"></span>` : "";
    return (
      `<span class="t-bar">` +
      seg("t-bar__done", c) +
      seg("t-bar__ip", ip) +
      seg("t-bar__new", n) +
      `</span>`
    );
  }

  function progressHtml() {
    const rows = LEVELS.map(
      (l) =>
        `<div class="t-progress-row">` +
        `<span class="t-progress-label"><span class="t-bold">${l.level}:</span> ` +
        `<span class="t-mint">${l.completed}</span>/` +
        `<span class="t-amber">${l.inProgress}</span>/` +
        `<span class="t-blue">${l.notStarted}</span></span>` +
        stackedBar(l.completed, l.inProgress, l.notStarted) +
        `</div>`
    ).join("");

    return (
      `<div class="t-card t-card--progress">` +
      `<div class="t-card__title">Progress</div>` +
      `<div class="t-card__body">` +
      `<div class="t-progress-course">` +
      `<span class="t-bold">Course:</span> ` +
      `<span class="t-mint">${COURSE.completed} (completed)</span>` +
      ` / ` +
      `<span class="t-amber">${COURSE.inProgress} (in progress)</span>` +
      ` / ` +
      `<span class="t-blue">${COURSE.notStarted} (new)</span>` +
      `</div>` +
      `<div class="t-progress-levels">${rows}</div>` +
      `</div>` +
      `</div>` +
      `<div class="t-footer">n: start next | d: docs | Esc: quit</div>`
    );
  }

  async function typeAnswer() {
    let typed = "";
    screen.innerHTML = practiceHtml(typed, true);
    await sleep(400);
    for (const ch of ANSWER) {
      typed += ch;
      screen.innerHTML = practiceHtml(typed, true);
      await sleep(38 + Math.random() * 28);
    }
    await sleep(500);
    screen.innerHTML = practiceHtml(typed, false);
    await sleep(350);
  }

  async function showLoading() {
    let frame = 0;
    screen.innerHTML = loadingHtml(frame);
    const start = performance.now();
    while (performance.now() - start < 1600) {
      frame += 1;
      screen.innerHTML = loadingHtml(frame);
      await sleep(80);
    }
  }

  async function revealLines(html) {
    const parts = html.split("\n");
    let acc = "";
    for (let i = 0; i < parts.length; i += 1) {
      acc += (i ? "\n" : "") + parts[i];
      screen.innerHTML = acc;
      await sleep(parts[i].trim() === "" ? 120 : 90);
    }
  }

  async function revealReport() {
    await revealLines(reportHtml());
  }

  async function revealProgress() {
    // HTML structure: fade in as a block (bars need full DOM)
    screen.innerHTML = progressHtml();
    await sleep(200);
  }

  async function runLoop() {
    if (reduceMotion) {
      screen.innerHTML = progressHtml();
      return;
    }
    // eslint-disable-next-line no-constant-condition
    while (true) {
      await typeAnswer();
      await showLoading();
      await revealReport();
      await sleep(2500);
      await revealProgress();
      await sleep(3200);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      runLoop();
    });
  } else {
    runLoop();
  }
})();
