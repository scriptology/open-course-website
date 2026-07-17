(() => {
  const buttons = document.querySelectorAll(".hero-install-copy");
  if (!buttons.length) return;

  const copyText = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const text =
        btn.getAttribute("data-copy") ||
        document.getElementById("install-cmd")?.textContent?.trim() ||
        "";
      if (!text) return;
      try {
        await copyText(text);
        btn.classList.add("is-copied");
        btn.setAttribute("aria-label", "Copied");
        window.setTimeout(() => {
          btn.classList.remove("is-copied");
          btn.setAttribute("aria-label", "Copy install command");
        }, 1600);
      } catch (_) {
        /* ignore */
      }
    });
  });
})();
