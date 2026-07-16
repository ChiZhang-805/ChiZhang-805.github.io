(function () {
  const root = document.documentElement;
  const masthead = document.querySelector(".masthead");

  const syncMastheadHeight = () => {
    if (!masthead) return;
    root.style.setProperty("--portfolio-nav-height", `${masthead.getBoundingClientRect().height}px`);
  };

  syncMastheadHeight();
  window.addEventListener("resize", syncMastheadHeight, { passive: true });
  if ("ResizeObserver" in window && masthead) {
    new ResizeObserver(syncMastheadHeight).observe(masthead);
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));

  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );
    revealItems.forEach((item) => observer.observe(item));
  }

  if (!reducedMotion.matches && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.querySelectorAll("[data-project-card]").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty("--tilt-x", `${(x * 2.2).toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${(-y * 2.2).toFixed(2)}deg`);
      });

      card.addEventListener("pointerleave", () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
      });
    });
  }
})();
