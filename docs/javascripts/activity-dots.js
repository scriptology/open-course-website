/* Fills the decorative activity-dot grid (.lp-dots) so it covers the free
   space of its card: columns and rows are computed from the container size,
   dot and gap dimensions stay fixed, so dots never clip. Re-runs on resize. */
(function () {
  var grids = document.querySelectorAll(".lp-dots");
  if (!grids.length) return;

  function dotMetrics() {
    var root = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    return { dot: root * 0.7, gap: root * 0.25 };
  }

  function fill(grid) {
    var rect = grid.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    var m = dotMetrics();
    var cols = Math.max(1, Math.floor((rect.width + m.gap) / (m.dot + m.gap)));
    var rows = Math.max(1, Math.floor((rect.height + m.gap) / (m.dot + m.gap)));
    var key = cols + "x" + rows;
    if (grid.dataset.layout === key) return;
    grid.dataset.layout = key;
    grid.style.gridTemplateColumns = "repeat(" + cols + ", 0.7rem)";
    grid.style.gridTemplateRows = "repeat(" + rows + ", 0.7rem)";
    var frag = document.createDocumentFragment();
    for (var i = 0; i < cols * rows; i++) {
      frag.appendChild(document.createElement("span"));
    }
    grid.replaceChildren(frag);
  }

  function fillAll() {
    grids.forEach(fill);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fillAll);
  } else {
    fillAll();
  }

  if (typeof ResizeObserver !== "undefined") {
    var ro = new ResizeObserver(fillAll);
    grids.forEach(function (grid) {
      ro.observe(grid);
    });
  } else {
    window.addEventListener("resize", fillAll);
  }
})();
