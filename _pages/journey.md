---
layout: portfolio
permalink: /journey/
title: "My Journey — Chi Zhang"
excerpt: "A visual archive of Chi Zhang's teaching, engineering, and travel experiences."
author_profile: false
---

<main class="portfolio journey-page" id="main-content" data-page-key="journey" data-base-url="{{ site.baseurl }}">
  <section class="journey-hero" aria-labelledby="journey-page-title">
    <div class="portfolio-shell" data-reveal>
      <a class="journey-back" href="{{ '/#journey' | relative_url }}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>
        <span data-i18n="journey.back">Back to portfolio</span>
      </a>
      <p class="journey-kicker" data-i18n="journey.kicker">Places, people, and moments beyond the project list</p>
      <h1 id="journey-page-title" data-i18n="section.journey">My Journey</h1>
      <p class="journey-intro" data-i18n="journey.intro">Engineering shapes how I solve problems; these experiences shape how I see people, places, and learning.</p>
    </div>
  </section>

  <section class="journey-archive" aria-labelledby="journey-archive-title">
    <div class="portfolio-shell">
      <header class="journey-archive-heading" data-reveal>
        <h2 id="journey-archive-title" data-i18n="journey.archiveTitle">Experiences</h2>
        <span data-i18n="journey.archiveHint">Select an experience to open its photo story.</span>
      </header>

      <div class="journey-archive-grid">
        <button class="journey-card journey-card--archive" type="button" data-gallery="meitan" data-reveal aria-label="Open Teaching in Meitan, Guizhou Province gallery" data-i18n-aria-label="journey.openMeitan">
          <img src="{{ '/assets/media/journey/meitan/meitan-01.webp' | relative_url }}" alt="Volunteer teaching group with students in Meitan, Guizhou Province" data-i18n-alt="journey.meitanAlt" width="1440" height="1080" />
          <span class="journey-card-shade" aria-hidden="true"></span>
          <span class="journey-card-index">01</span>
          <span class="journey-card-title" data-i18n="journey.meitanTitle">Teaching in Meitan, Guizhou Province</span>
          <span class="journey-card-count">17 <span data-i18n="journey.photos">photos</span></span>
        </button>

        <button class="journey-card journey-card--archive" type="button" data-gallery="ece484" data-reveal aria-label="Open ECE 484 Autonomous Tracking Drone gallery" data-i18n-aria-label="journey.openEce">
          <img src="{{ '/assets/media/journey/ece484/ece484-01.webp' | relative_url }}" alt="Drone flight-testing facility for ECE 484" data-i18n-alt="journey.eceAlt" width="1702" height="1276" />
          <span class="journey-card-shade" aria-hidden="true"></span>
          <span class="journey-card-index">02</span>
          <span class="journey-card-title" data-i18n="journey.eceTitle">ECE 484 — Autonomous Tracking Drone</span>
          <span class="journey-card-count">5 <span data-i18n="journey.photos">photos</span></span>
        </button>

        <button class="journey-card journey-card--archive" type="button" data-gallery="chicago" data-reveal aria-label="Open A Journey Through Chicago gallery" data-i18n-aria-label="journey.openChicago">
          <img src="{{ '/assets/media/journey/chicago/chicago-01.webp' | relative_url }}" alt="Cloud Gate in Chicago framed by trees" data-i18n-alt="journey.chicagoAlt" width="1707" height="1280" />
          <span class="journey-card-shade" aria-hidden="true"></span>
          <span class="journey-card-index">03</span>
          <span class="journey-card-title" data-i18n="journey.chicagoTitle">A Journey Through Chicago</span>
          <span class="journey-card-count">11 <span data-i18n="journey.photos">photos</span></span>
        </button>
      </div>
    </div>
  </section>

  <div class="journey-modal" data-journey-modal role="dialog" aria-modal="true" aria-labelledby="journey-modal-title" aria-describedby="journey-modal-caption" hidden>
    <button class="journey-modal-backdrop" type="button" data-gallery-close tabindex="-1" aria-label="Close gallery" data-i18n-aria-label="journey.close"></button>
    <div class="journey-modal-panel">
      <header class="journey-modal-header">
        <div>
          <span class="journey-modal-eyebrow" data-i18n="journey.photoStory">Photo story</span>
          <h2 id="journey-modal-title"></h2>
        </div>
        <button class="journey-modal-close" type="button" data-gallery-close aria-label="Close gallery" data-i18n-aria-label="journey.close">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"></path></svg>
        </button>
      </header>

      <div class="journey-modal-stage">
        <button class="journey-modal-arrow journey-modal-arrow--previous" type="button" data-gallery-previous aria-label="Previous photo" data-i18n-aria-label="journey.previous">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"></path></svg>
        </button>
        <figure>
          <img data-gallery-image alt="" />
          <figcaption id="journey-modal-caption">
            <span data-gallery-caption></span>
            <span data-gallery-counter></span>
          </figcaption>
        </figure>
        <button class="journey-modal-arrow journey-modal-arrow--next" type="button" data-gallery-next aria-label="Next photo" data-i18n-aria-label="journey.next">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"></path></svg>
        </button>
      </div>
    </div>
  </div>
</main>

<script defer src="{{ '/assets/js/journey-gallery.js' | relative_url }}"></script>
