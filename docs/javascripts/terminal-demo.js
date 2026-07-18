(() => {
  const screen = document.getElementById("term-demo-screen");
  if (!screen) return;

  const TASK = "My friend works in a cafe";
  const ANSWER = "Mi amigo trabajo en un cafe";
  const SPIN = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
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

  async function revealReport() {
    const full = reportHtml();
    // Reveal by chunks (paragraphs) for a terminal feel without char spam
    const parts = full.split("\n");
    let acc = "";
    for (let i = 0; i < parts.length; i += 1) {
      acc += (i ? "\n" : "") + parts[i];
      screen.innerHTML = acc;
      await sleep(parts[i].trim() === "" ? 120 : 90);
    }
  }

  async function runLoop() {
    if (reduceMotion) {
      screen.innerHTML = reportHtml();
      return;
    }
    // eslint-disable-next-line no-constant-condition
    while (true) {
      await typeAnswer();
      await showLoading();
      await revealReport();
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
