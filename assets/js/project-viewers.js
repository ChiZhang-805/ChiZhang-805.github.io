const viewers = Array.from(document.querySelectorAll("[data-project-viewer]"));

if (viewers.length) {
  let runtimePromise;
  const loadRuntime = () => {
    runtimePromise ??= import("./project-viewers-runtime.js");
    return runtimePromise;
  };

  const initialize = async (viewer) => {
    const runtime = await loadRuntime();
    runtime.initializeProjectViewer(viewer);
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        initialize(entry.target);
      });
    }, { rootMargin: "180px 0px", threshold: 0.01 });
    viewers.forEach((viewer) => observer.observe(viewer));
  } else {
    viewers.forEach(initialize);
  }

  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const fastEnoughToWarm = !connection || !["slow-2g", "2g", "3g"].includes(connection.effectiveType);
  if (!connection?.saveData && fastEnoughToWarm) {
    window.addEventListener("load", () => {
      const warmRuntime = () => loadRuntime().catch(() => undefined);
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(warmRuntime, { timeout: 5000 });
      } else {
        window.setTimeout(warmRuntime, 3000);
      }
    }, { once: true });
  }
}
