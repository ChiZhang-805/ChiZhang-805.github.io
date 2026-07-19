const viewers = Array.from(document.querySelectorAll("[data-project-viewer]"));

if (viewers.length) {
  let runtimePromise;
  let warmStarted = false;
  let initializationQueue = Promise.resolve();
  const loadRuntime = () => {
    runtimePromise ??= import("./project-viewers-runtime.js");
    return runtimePromise;
  };

  const warmResources = () => {
    if (warmStarted) return;
    warmStarted = true;
    const urls = [
      new URL("./project-viewers-runtime.js", import.meta.url),
      new URL("../vendor/three/three.module.min.js", import.meta.url),
      new URL("../vendor/three/three.core.min.js", import.meta.url),
    ];
    const warm = () => Promise.allSettled(urls.map((url) => fetch(url, {
      cache: "force-cache",
      priority: "low",
    })));
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(warm, { timeout: 1800 });
    } else {
      window.setTimeout(warm, 180);
    }
  };

  const initialize = (viewer) => {
    initializationQueue = initializationQueue.then(async () => {
      const runtime = await loadRuntime();
      runtime.initializeProjectViewer(viewer);
      await new Promise((resolve) => window.requestAnimationFrame(resolve));
    }).catch(() => {
      viewer.dataset.modelReady = "false";
    });
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        initialize(entry.target);
      });
    }, { rootMargin: "120px 0px", threshold: 0.01 });
    viewers.forEach((viewer) => observer.observe(viewer));
  } else {
    viewers.forEach(initialize);
  }

  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const canWarm = !connection?.saveData && (!connection || !["slow-2g", "2g"].includes(connection.effectiveType));
  if (canWarm) {
    window.addEventListener("scroll", warmResources, { once: true, passive: true });
    document.querySelectorAll('a[href="#work"]').forEach((link) => {
      link.addEventListener("pointerenter", warmResources, { once: true, passive: true });
      link.addEventListener("focus", warmResources, { once: true, passive: true });
      link.addEventListener("touchstart", warmResources, { once: true, passive: true });
    });
  }
}
