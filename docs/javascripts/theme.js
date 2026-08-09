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

    const syncLabel = () => {
      const target = resolve(load()) === "dark" ? "light" : "dark";
      button.textContent = target === "dark" ? "Dark" : "Light";
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
    document.body.appendChild(button);
  }

  apply();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createToggle);
  } else {
    createToggle();
  }
})();
