(function () {
  const page = document.querySelector(".journey-page");
  const modal = document.querySelector("[data-journey-modal]");
  if (!page || !modal) return;

  const baseUrl = (page.dataset.baseUrl || "").replace(/\/$/, "");
  const makePhotos = (folder, prefix, count) =>
    Array.from({ length: count }, (_, index) =>
      `${baseUrl}/assets/media/journey/${folder}/${prefix}-${String(index + 1).padStart(2, "0")}.webp`
    );

  const galleries = {
    meitan: {
      title: {
        en: "Teaching in Meitan, Guizhou Province",
        zh: "贵州湄潭支教"
      },
      photos: makePhotos("meitan", "meitan", 17)
    },
    ece484: {
      title: {
        en: "ECE 484 — Autonomous Tracking Drone",
        zh: "ECE 484 自主循迹无人机"
      },
      photos: makePhotos("ece484", "ece484", 5)
    },
    chicago: {
      title: {
        en: "A Journey Through Chicago",
        zh: "芝加哥之旅"
      },
      photos: makePhotos("chicago", "chicago", 11)
    }
  };

  const image = modal.querySelector("[data-gallery-image]");
  const title = modal.querySelector("#journey-modal-title");
  const caption = modal.querySelector("[data-gallery-caption]");
  const counter = modal.querySelector("[data-gallery-counter]");
  const closeButton = modal.querySelector(".journey-modal-close");
  const previousButton = modal.querySelector("[data-gallery-previous]");
  const nextButton = modal.querySelector("[data-gallery-next]");
  const cardButtons = Array.from(document.querySelectorAll("[data-gallery]"));
  let activeGallery = null;
  let activeIndex = 0;
  let trigger = null;
  let touchStartX = null;
  let closeTimer = null;

  const getLanguage = () => document.documentElement.dataset.language === "zh" ? "zh" : "en";

  const render = () => {
    if (!activeGallery) return;
    const gallery = galleries[activeGallery];
    const language = getLanguage();
    const galleryTitle = gallery.title[language];
    const total = gallery.photos.length;
    image.src = gallery.photos[activeIndex];
    image.alt = language === "zh"
      ? `${galleryTitle}，第 ${activeIndex + 1} 张照片，共 ${total} 张`
      : `${galleryTitle}, photo ${activeIndex + 1} of ${total}`;
    title.textContent = galleryTitle;
    caption.textContent = galleryTitle;
    counter.textContent = language === "zh"
      ? `${String(activeIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`
      : `${String(activeIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

    [-1, 1].forEach((offset) => {
      const adjacent = new Image();
      adjacent.src = gallery.photos[(activeIndex + offset + total) % total];
    });
  };

  const move = (step) => {
    if (!activeGallery) return;
    const total = galleries[activeGallery].photos.length;
    activeIndex = (activeIndex + step + total) % total;
    image.classList.remove("is-entering");
    void image.offsetWidth;
    image.classList.add("is-entering");
    render();
  };

  const openGallery = (key, source) => {
    if (!galleries[key]) return;
    window.clearTimeout(closeTimer);
    activeGallery = key;
    activeIndex = 0;
    trigger = source || document.activeElement;
    modal.hidden = false;
    document.body.classList.add("journey-modal-open");
    render();
    window.history.replaceState(null, "", `#${key}`);
    window.requestAnimationFrame(() => {
      modal.classList.add("is-open");
      closeButton.focus({ preventScroll: true });
    });
  };

  const closeGallery = () => {
    if (modal.hidden) return;
    modal.classList.remove("is-open");
    document.body.classList.remove("journey-modal-open");
    activeGallery = null;
    image.removeAttribute("src");
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    closeTimer = window.setTimeout(() => {
      modal.hidden = true;
      if (trigger instanceof HTMLElement) trigger.focus({ preventScroll: true });
    }, 180);
  };

  cardButtons.forEach((button) => {
    button.addEventListener("click", () => openGallery(button.dataset.gallery, button));
  });

  modal.querySelectorAll("[data-gallery-close]").forEach((button) => button.addEventListener("click", closeGallery));
  previousButton.addEventListener("click", () => move(-1));
  nextButton.addEventListener("click", () => move(1));

  modal.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeGallery();
      return;
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
      return;
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
      return;
    }
    if (event.key !== "Tab") return;

    const focusable = Array.from(modal.querySelectorAll("button:not([tabindex='-1'])"));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  image.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0]?.clientX ?? null;
  }, { passive: true });

  image.addEventListener("touchend", (event) => {
    if (touchStartX === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX;
    const distance = endX - touchStartX;
    touchStartX = null;
    if (Math.abs(distance) < 48) return;
    move(distance > 0 ? -1 : 1);
  }, { passive: true });

  window.addEventListener("portfolio:language-change", render);

  window.addEventListener("hashchange", () => {
    const key = window.location.hash.slice(1);
    if (galleries[key] && key !== activeGallery) {
      openGallery(key, cardButtons.find((button) => button.dataset.gallery === key));
    }
  });

  const requestedGallery = window.location.hash.slice(1);
  if (galleries[requestedGallery]) {
    window.setTimeout(() => openGallery(requestedGallery, cardButtons.find((button) => button.dataset.gallery === requestedGallery)), 0);
  }
})();
