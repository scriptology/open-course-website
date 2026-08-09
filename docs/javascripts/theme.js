/* Theme handling for the landing page, mirroring the web app
   (open-course-web src/shared/config/theme.ts). The toggle button is
   created here so the markup in home.html stays clean. */
(() => {
  const STORAGE_KEY = "oc-theme";
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  function load() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw === "light" || raw === "dark" || raw === "system") return raw;
    } catch (e) {
      /* storage unavailable */
    }
    return "system";
  }

  function persist(choice) {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch (e) {
      /* non-critical */
    }
  }

  function resolve(choice) {
    if (choice !== "system") return choice;
    return media.matches ? "dark" : "light";
  }

  function apply() {
    document.documentElement.setAttribute("data-theme", resolve(load()));
  }

  media.addEventListener("change", () => {
    if (load() === "system") apply();
  });

  function createToggle() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "theme-toggle";
    button.innerHTML =
      '<svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>' +
      '<svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';

    const syncLabel = () => {
      const target = resolve(load()) === "dark" ? "light" : "dark";
      button.setAttribute(
        "aria-label",
        target === "dark" ? "Switch to dark theme" : "Switch to light theme"
      );
    };

    button.addEventListener("click", () => {
      const current = resolve(load());
      persist(current === "dark" ? "light" : "dark");
      apply();
      syncLabel();
    });

    media.addEventListener("change", syncLabel);

    syncLabel();
    const topbar = document.querySelector(".lp-topbar");
    (topbar || document.body).appendChild(button);
  }

  apply();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createToggle);
  } else {
    createToggle();
  }
})();
