---
layout: portfolio
permalink: /
title: "Chi Zhang — Engineer & Builder"
excerpt: "Chi Zhang's selected projects in autonomous systems, simulation, and interactive engineering."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<main class="portfolio" id="main-content">
  <section class="portfolio-hero" aria-labelledby="portfolio-title">
    <div class="portfolio-hero-orbit portfolio-hero-orbit--one" aria-hidden="true"></div>
    <div class="portfolio-hero-orbit portfolio-hero-orbit--two" aria-hidden="true"></div>
    <div class="portfolio-shell portfolio-hero-layout">
      <div class="portfolio-hero-copy" data-reveal>
        <p class="portfolio-kicker"><span></span> Chi Zhang · Engineer &amp; Builder</p>
        <h1 id="portfolio-title">Making complex engineering <em>visible.</em></h1>
        <p class="portfolio-hero-lead">
          I build interactive systems for autonomous machines, simulation, and engineering education—turning difficult workflows into experiences people can see, test, and understand.
        </p>
        <div class="portfolio-actions" aria-label="Primary links">
          <a class="portfolio-button portfolio-button--primary" href="#work">Explore selected work <span aria-hidden="true">↓</span></a>
          <a class="portfolio-button portfolio-button--quiet" href="https://github.com/ChiZhang-805">GitHub <span aria-hidden="true">↗</span></a>
        </div>
        <ul class="portfolio-hero-meta" aria-label="Current profile">
          <li><strong>ECE</strong><span>ZJU–UIUC</span></li>
          <li><strong>Visiting student</strong><span>UIUC</span></li>
          <li><strong>Based in</strong><span>Hangzhou</span></li>
        </ul>
      </div>

      <aside class="portfolio-profile-card" aria-label="Profile summary" data-reveal>
        <div class="portfolio-profile-photo">
          <img src="{{ '/images/profile.jpg' | relative_url }}" alt="Portrait of Chi Zhang" width="520" height="650" />
          <span class="portfolio-status"><i></i> Research · systems · simulation</span>
        </div>
        <div class="portfolio-profile-copy">
          <div>
            <p>Currently exploring</p>
            <strong>Multimodal AI · LLM reasoning · autonomous systems</strong>
          </div>
          <a href="mailto:cz005623@gmail.com" aria-label="Email Chi Zhang">Email me <span aria-hidden="true">↗</span></a>
        </div>
      </aside>
    </div>
  </section>

  <section class="portfolio-section portfolio-work" id="work" aria-labelledby="work-title">
    <div class="portfolio-shell">
      <header class="portfolio-section-heading" data-reveal>
        <div>
          <p class="portfolio-section-index">01 / Selected work</p>
          <h2 id="work-title">Projects built to be explored.</h2>
        </div>
        <p>Two ongoing projects at the intersection of simulation, autonomy, and interactive technical learning.</p>
      </header>

      <div class="portfolio-project-list">
        <article class="portfolio-project-card portfolio-project-card--drone" data-project-card data-reveal>
          <a class="portfolio-project-media" href="http://47.93.180.216/" aria-label="Open the DroneDream live project">
            <picture>
              <source media="(prefers-reduced-motion: reduce)" srcset="{{ '/assets/media/projects/dronedream-poster.webp' | relative_url }}" />
              <img class="portfolio-project-image portfolio-project-image--drone" src="{{ '/assets/media/projects/dronedream-loop.webp' | relative_url }}" alt="Animated 3D DroneDream quadcopter taking off in a simulation scene" width="760" height="520" loading="eager" />
            </picture>
          </a>

          <div class="portfolio-project-copy">
            <div class="portfolio-project-title-row">
              <h3>DroneDream</h3>
              <div class="portfolio-project-icon-links" aria-label="DroneDream links">
                <a href="http://47.93.180.216/" target="_blank" rel="noopener noreferrer" aria-label="Open the DroneDream website" title="Website">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.2 2.5 3.4 5.5 3.4 9S14.2 18.5 12 21M12 3C9.8 5.5 8.6 8.5 8.6 12s1.2 6.5 3.4 9"></path></svg>
                </a>
                <a href="https://github.com/ChiZhang-805/DroneDream" target="_blank" rel="noopener noreferrer" aria-label="Open the DroneDream GitHub repository" title="GitHub">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8a9.4 9.4 0 0 0-3 18.3c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.4-2.3-.3-4.6-1.1-4.6-4.7 0-1 .4-1.9 1-2.5-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.6 1a9 9 0 0 1 4.8 0c1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.6.7.7 1 1.5 1 2.5 0 3.6-2.3 4.4-4.6 4.7.4.3.7 1 .7 1.9v2.8c0 .3.2.6.7.5A9.4 9.4 0 0 0 12 2.8Z"></path></svg>
                </a>
              </div>
            </div>
            <p class="portfolio-project-byline">Chi Zhang</p>
            <p class="portfolio-project-description">
              A local-first PX4 and Gazebo tuning platform designed to turn control-parameter search into a visual, repeatable workflow—from experiment setup and simulation to comparison and evidence.
            </p>
          </div>
        </article>

        <article class="portfolio-project-card portfolio-project-card--racecar" data-project-card data-reveal>
          <a class="portfolio-project-media" href="http://124.221.220.60/" aria-label="Open the RaceCar Lab live project">
            <img class="portfolio-project-image" src="{{ '/assets/media/projects/racecar-lab.webp' | relative_url }}" alt="Interactive 3D formula race car in RaceCar Lab" width="760" height="520" loading="lazy" />
          </a>

          <div class="portfolio-project-copy">
            <div class="portfolio-project-title-row">
              <h3>RaceCar Lab</h3>
              <div class="portfolio-project-icon-links" aria-label="RaceCar Lab links">
                <a href="http://124.221.220.60/" target="_blank" rel="noopener noreferrer" aria-label="Open the RaceCar Lab website" title="Website">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.2 2.5 3.4 5.5 3.4 9S14.2 18.5 12 21M12 3C9.8 5.5 8.6 8.5 8.6 12s1.2 6.5 3.4 9"></path></svg>
                </a>
                <a href="https://github.com/ChiZhang-805/racecar-lab" target="_blank" rel="noopener noreferrer" aria-label="Open the RaceCar Lab GitHub repository" title="GitHub">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8a9.4 9.4 0 0 0-3 18.3c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.4-2.3-.3-4.6-1.1-4.6-4.7 0-1 .4-1.9 1-2.5-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.6 1a9 9 0 0 1 4.8 0c1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.6.7.7 1 1.5 1 2.5 0 3.6-2.3 4.4-4.6 4.7.4.3.7 1 .7 1.9v2.8c0 .3.2.6.7.5A9.4 9.4 0 0 0 12 2.8Z"></path></svg>
                </a>
              </div>
            </div>
            <p class="portfolio-project-byline">Chi Zhang · Yi Youcheng</p>
            <p class="portfolio-project-description">
              An interactive formula-car engineering lab with code-generated 3D vehicles, component teardown, formulas, diagnostics, and bilingual learning paths—built for learning by exploration.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="portfolio-section portfolio-about" id="about" aria-labelledby="about-title">
    <div class="portfolio-shell portfolio-about-layout">
      <header data-reveal>
        <p class="portfolio-section-index">02 / About</p>
        <h2 id="about-title">Research-minded.<br />Product-driven.</h2>
      </header>
      <div class="portfolio-about-copy" data-reveal>
        <p class="portfolio-about-lead">
          I am an Electrical and Computer Engineering student at Zhejiang University and a visiting student in Prof. Huan Zhang’s research group at UIUC.
        </p>
        <p>
          My work is shaped by a simple question: how can technically complex systems become easier for people to operate, evaluate, and learn from? That question connects my projects in autonomous flight, AI, simulation, and interactive engineering education.
        </p>
        <div class="portfolio-focus-grid" aria-label="Research interests">
          <article><span>01</span><h3>Multimodal AI</h3><p>Reasoning across language, vision, and interactive environments.</p></article>
          <article><span>02</span><h3>LLM reasoning</h3><p>Reliable problem solving for technical and engineering workflows.</p></article>
          <article><span>03</span><h3>Autonomous systems</h3><p>Simulation, control, and tools that improve how machines are tuned.</p></article>
        </div>
      </div>
    </div>
  </section>

  <section class="portfolio-section portfolio-news" id="news" aria-labelledby="news-title">
    <div class="portfolio-shell">
      <header class="portfolio-section-heading" data-reveal>
        <div>
          <p class="portfolio-section-index">03 / News</p>
          <h2 id="news-title">Recent notes.</h2>
        </div>
      </header>
      <ol class="portfolio-news-list" data-reveal>
        <li><time datetime="2026-02">2026.02</time><p>Named to the <strong>FA25 Dean’s List</strong> at The Grainger College of Engineering. <a href="{{ '/files/dean_list.pdf' | relative_url }}">Certificate ↗</a></p></li>
        <li><time datetime="2025-12">2025.12</time><p>Published the <strong>Autonomous Tracking Drone</strong> project from ECE 484. <a href="https://www.youtube.com/watch?v=8l80orgLiXs">Video ↗</a></p></li>
        <li><time datetime="2025-08">2025.08</time><p>Joined the EIE summer school at <strong>Westlake University</strong>. <a href="https://mp.weixin.qq.com/s/49DCmogXu0ha68liPvc2KQ">Article ↗</a></p></li>
        <li><time datetime="2025-06">2025.06</time><p>National SRTP programme rated <strong>Excellent</strong> among 24 teams.</p></li>
        <li><time datetime="2024-11">2024.11</time><p>Received both <strong>Best Summer Research Project</strong> and <strong>Best Summer Research Poster</strong>. <a href="{{ '/files/srtp_award.pdf' | relative_url }}">Certificate ↗</a></p></li>
      </ol>
    </div>
  </section>

  <section class="portfolio-contact" aria-labelledby="contact-title">
    <div class="portfolio-shell portfolio-contact-inner" data-reveal>
      <p class="portfolio-section-index">Let’s connect</p>
      <h2 id="contact-title">Interested in building something technically ambitious?</h2>
      <a href="mailto:cz005623@gmail.com">cz005623@gmail.com <span aria-hidden="true">↗</span></a>
    </div>
  </section>
</main>
