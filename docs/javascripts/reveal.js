/* Staggered scroll reveals via IntersectionObserver.
   Elements opt in with [data-reveal]; siblings stagger via --ri.
   Honors prefers-reduced-motion (CSS collapses to static). */
(() => {
  const els = Array.from(document.querySelectorAll("[data-reveal]"));
  if (els.length === 0) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    for (const el of els) el.classList.add("is-in");
    return;
  }

  // Stagger siblings that share a parent.
  const groups = new Map();
  for (const el of els) {
    const parent = el.parentElement;
    if (!groups.has(parent)) groups.set(parent, 0);
    el.style.setProperty("--ri", groups.get(parent));
    groups.set(parent, groups.get(parent) + 1);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
  );

  for (const el of els) observer.observe(el);
})();
