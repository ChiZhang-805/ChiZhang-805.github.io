(function () {
  const translations = {
    en: {
      "page.title": "Chi Zhang",
      "journey.pageTitle": "My Journey — Chi Zhang",
      "nav.0": "Work",
      "nav.1": "About",
      "nav.2": "News",
      "nav.3": "Resume",
      "hero.titleLine1": "Making complex",
      "hero.titleLine2": "engineering",
      "hero.titleAccent": "visible.",
      "hero.lead": "I build interactive systems for autonomous machines, simulation, and engineering education—turning difficult workflows into experiences people can see, test, understand, and refine through direct interaction.",
      "hero.explore": "Explore selected work",
      "hero.ece": "ECE",
      "hero.school": "ZJU–UIUC",
      "hero.exchange": "Exchange student",
      "hero.exchangeSchool": "UIUC",
      "hero.based": "Based in",
      "hero.city": "Hangzhou",
      "story.hint": "Click to learn more",
      "story.eyebrow": "Beyond engineering",
      "story.title": "Teaching in Meitan, Guizhou Province",
      "story.body": "Together with my classmates, I traveled to a rural community in China to share knowledge with local children. We taught mathematics, Chinese, physical education, and other classes—learning from the students as much as they learned from us.",
      "story.return": "Click to return",
      "story.alt": "Chi Zhang and classmates with students during volunteer teaching in Meitan, Guizhou Province",
      "story.flipLabel": "Flip the photo to read the volunteer teaching story",
      "section.work": "Selected work",
      "section.about": "About",
      "section.news": "News",
      "section.beyond": "Beyond engineering",
      "section.journey": "My Journey",
      "journey.more": "View all journeys",
      "journey.back": "Back to portfolio",
      "journey.kicker": "Places, people, and moments beyond the project list",
      "journey.archiveTitle": "Experiences",
      "journey.meitanTitle": "Teaching in Meitan, Guizhou Province",
      "journey.eceTitle": "ECE 484 — Autonomous Tracking Drone",
      "journey.chicagoTitle": "A Journey Through Chicago",
      "journey.openMeitan": "Open Teaching in Meitan, Guizhou Province gallery",
      "journey.openEce": "Open ECE 484 Autonomous Tracking Drone gallery",
      "journey.openChicago": "Open A Journey Through Chicago gallery",
      "journey.meitanAlt": "Volunteer teaching group with students in Meitan, Guizhou Province",
      "journey.eceAlt": "Drone flight-testing facility for ECE 484",
      "journey.chicagoAlt": "Cloud Gate in Chicago framed by trees",
      "journey.photos": "photos",
      "journey.photoStory": "Photo story",
      "journey.close": "Close gallery",
      "journey.previous": "Previous photo",
      "journey.next": "Next photo",
      "project.drag": "Drag to rotate",
      "project.droneDescription": "DroneDream is a local-first PX4 and Gazebo tuning platform that turns control-parameter search into a visual, repeatable engineering workflow. It connects experiment setup, simulation, comparison, and evidence so users can understand each tuning decision, revisit results, and move from trial and error toward reliable autonomous flight.",
      "project.raceDescription": "RaceCar Lab is an interactive formula-car engineering environment with a code-generated 3D vehicle, component studies, formulas, diagnostics, and bilingual learning paths. Its McLaren-inspired presentation reflects my support for McLaren and Lando Norris, while my girlfriend supports Ferrari and Charles Leclerc—turning our rivalry into a way to explore racing engineering.",
      "project.coreDescription": "CoRe-VQA is a collaborative multi-agent framework for implicit video question answering. It separates clue scouting, relation judging, consensus voting, and confidence-gated memory refinement into specialized roles. Prepared for AAAI submission, it improves hidden-evidence I-VQA accuracy from 55.14% to 63.59% across traffic-video and transfer benchmarks.",
      "project.navaDescription": "NAVA is an AI biological-rhythm app that connects mobile health records, HealthKit data, Supabase services, and rhythm modeling into a daily wellness companion. I lead the app development and work as an algorithm-team contributor, helping refine the rhythm engine, validate multi-day signals, and turn model outputs into clear product interfaces for users.",
      "project.navaFactor1": "Circadian",
      "project.navaFactor2": "Recovery",
      "project.navaFactor3": "Behavior",
      "project.navaFactor4": "Affect",
      "project.droneViewer": "Interactive 3D DroneDream quadcopter",
      "project.raceViewer": "Interactive 3D formula race car",
      "project.navaViewer": "Animated NAVA biological-rhythm visual",
      "project.droneAlt": "DroneDream quadcopter in a simulation scene",
      "project.raceAlt": "Formula race car in RaceCar Lab",
      "project.coreAlt": "CoRe-VQA framework and implicit video question answering results",
      "project.droneLinks": "DroneDream links",
      "project.raceLinks": "RaceCar Lab links",
      "project.navaLinks": "NAVA links",
      "project.droneSite": "Open the DroneDream website",
      "project.droneGithub": "Open the DroneDream GitHub repository",
      "project.raceSite": "Open the RaceCar Lab website",
      "project.raceGithub": "Open the RaceCar Lab GitHub repository",
      "project.navaGithub": "Open the NAVA GitHub repository",
      "about.introBeforeBruce": "I am a senior undergraduate student in Electrical and Computer Engineering at Zhejiang University. During my junior year, I spent an academic year as an exchange student at the University of Illinois Urbana-Champaign (UIUC). Beyond the classroom, I am currently conducting research in ",
      "about.bruceName": "Bruce Yu",
      "about.introAfterBruce": "'s group on human action recognition from UAV-view video, with a particular interest in understanding human behavior and temporal patterns from aerial observations.",
      "about.bodyBeforeHanzhi": "Previously, I completed a year-long Student Research Training Program in ",
      "about.hanzhiName": "Hanzhi Ma",
      "about.bodyBetweenTeachers": "'s group (National SRTP). My research focused on high-speed signal-channel modeling using machine learning and multi-objective optimization, and the project received an Excellent rating at its final evaluation. During the summer after my sophomore year, I also worked in ",
      "about.jixingName": "Jixing Cao",
      "about.bodyAfterJixing": "'s group on YOLOv11-based detection of tunnel fires and vehicle collisions.",
      "about.navaBefore": "I am also leading the app development of ",
      "about.navaAfter": ", an AI biological-rhythm app, while supporting the algorithm team in refining rhythm-model iterations and connecting them to real product interfaces.",
      "about.topicsLabel": "Research interests",
      "about.topic1": "Multimodal video understanding",
      "about.topic2": "UAV vision and control",
      "about.topic3": "Multi-agent coordination",
      "about.alt": "Portrait of Chi Zhang",
      "news.racecar": "I completed RaceCar Lab, an interactive website that gives Formula racing beginners a structured path through vehicle architecture, core engineering principles, component analysis, and hands-on 3D exploration, making a complex subject easier to understand.",
      "news.fudan": "During my month at Fudan University’s Zhangjiang Institute, guided by Suli Ye, I developed five AI × real-estate systems for land discovery, site planning, home design, rental services, and silver-community living across the property lifecycle and resident care.",
      "news.dronedream": "I formally completed the ECE 498 DroneDream project, consolidating our PX4 and Gazebo work in an interactive platform that makes autonomous-flight tuning visual and repeatable and connects experiment setup, simulation, comparison, and evidence.",
      "news.dean": "I was named to the Fall 2025 Dean’s List at The Grainger College of Engineering, University of Illinois Urbana-Champaign.",
      "news.drone": "I published the Autonomous Tracking Drone project developed for ECE 484, together with a video demonstration of the system.",
      "news.westlake": "Westlake University interviewed me about why I chose its EIE Summer School and what I learned there. I reflected on its international, cross-disciplinary environment, which encouraged me to leave my comfort zone, exchange ideas, and learn across fields.",
      "news.srtp": "Our National SRTP project received an Excellent evaluation in a cohort of 24 participating teams.",
      "news.awards": "Our summer research project received both the Best Summer Research Project award and the Best Summer Research Poster award.",
      "beyond.body": "Outside the lab, I care about engineering education, volunteer teaching, and creating learning experiences that help students build confidence through practice.",
      "common.website": "Website",
      "common.certificate": "Certificate",
      "common.video": "Video",
      "common.article": "Article",
      "common.github": "GitHub",
      "aria.primaryLinks": "Primary links",
      "aria.currentProfile": "Current profile",
      "aria.storyAndSocial": "Volunteer teaching story and social links",
      "aria.socialLinks": "Social links",
      "language.switch": "切换到中文",
      "theme.toggle": "Toggle color theme"
    },
    zh: {
      "page.title": "Chi Zhang",
      "journey.pageTitle": "我的经历 — Chi Zhang",
      "nav.0": "项目",
      "nav.1": "关于",
      "nav.2": "动态",
      "nav.3": "简历",
      "hero.titleLine1": "让复杂工程",
      "hero.titleLine2": "变得",
      "hero.titleAccent": "清晰可见。",
      "hero.lead": "我致力于为自主机器、仿真与工程教育构建交互式系统，把复杂流程转化为人们能够看见、测试和理解的工程体验，并通过交互验证与改进，让复杂系统中的判断清晰，也让后续学习与协作拥有可靠依据。",
      "hero.explore": "浏览代表项目",
      "hero.ece": "电气与计算机工程",
      "hero.school": "浙大–UIUC",
      "hero.exchange": "交换学生",
      "hero.exchangeSchool": "UIUC",
      "hero.based": "现居",
      "hero.city": "杭州",
      "story.hint": "点击照片了解更多",
      "story.eyebrow": "工程之外",
      "story.title": "贵州湄潭支教",
      "story.body": "我和同学们一起前往中国偏远的乡村地区，为当地的孩子们传授知识。我们为他们带来了数学、语文、体育等课程，也在共同学习与相处中收获了珍贵的成长。",
      "story.return": "点击返回照片",
      "story.alt": "Chi Zhang 与同学们在贵州湄潭支教期间和学生们的合影",
      "story.flipLabel": "翻转照片并阅读贵州湄潭支教故事",
      "section.work": "代表项目",
      "section.about": "关于我",
      "section.news": "近期动态",
      "section.beyond": "工程之外",
      "section.journey": "我的经历",
      "journey.more": "查看全部经历",
      "journey.back": "返回个人主页",
      "journey.kicker": "项目列表之外的地方、人物与时刻",
      "journey.archiveTitle": "经历",
      "journey.meitanTitle": "贵州湄潭支教",
      "journey.eceTitle": "ECE 484 自主循迹无人机",
      "journey.chicagoTitle": "芝加哥之旅",
      "journey.openMeitan": "打开贵州湄潭支教相册",
      "journey.openEce": "打开 ECE 484 自主循迹无人机相册",
      "journey.openChicago": "打开芝加哥之旅相册",
      "journey.meitanAlt": "Chi Zhang 与同学们在贵州湄潭支教期间和学生们的合影",
      "journey.eceAlt": "ECE 484 无人机飞行测试场地",
      "journey.chicagoAlt": "树木环绕下的芝加哥云门",
      "journey.photos": "张照片",
      "journey.photoStory": "影像故事",
      "journey.close": "关闭相册",
      "journey.previous": "上一张照片",
      "journey.next": "下一张照片",
      "project.drag": "拖动旋转",
      "project.droneDescription": "DroneDream 是一个本地优先的 PX4 与 Gazebo 调参平台，将控制参数搜索转化为可视、可重复的工程流程。它连接实验设置、仿真运行、结果对比与证据整理，帮助使用者理解每一次调参决策、回看结果，并从反复试错走向更有把握的自主飞行开发。同时，平台会记录完整实验过程，使结果能够复现、比较，并成为后续开发可靠的工程依据。",
      "project.raceDescription": "RaceCar Lab 是一个交互式方程式赛车工程环境，整合代码生成的 3D 赛车、部件研究、公式、诊断工具与双语学习路径。迈凯伦风格的展示源于我对 McLaren 和 Lando Norris 的支持，而我的女朋友支持 Ferrari 和 Charles Leclerc；这份友好的竞争让我们以更具个人色彩的方式探索车辆结构、工程原理与参数变化，并让赛车学习更直观、更有趣。",
      "project.coreDescription": "CoRe-VQA 是一个面向隐式视频问答的协作式多智能体框架，将上下文线索搜索、关系判断、共识投票与置信度门控的记忆优化分别交给不同智能体。目前项目正准备投稿 AAAI，并将隐藏证据 I-VQA 的准确率从 55.14% 提升至 63.59%，同时在交通视频问答与迁移测试中展现出进一步的泛化能力，并提升不同场景下证据推理的稳定性，也让推理过程更便于分析、复查与改进。",
      "project.navaDescription": "NAVA 是一个面向生物节律与日常健康管理的 AI 应用，把移动端健康记录、HealthKit 数据、Supabase 服务和节律建模连接到一起。我主要负责 App 开发，同时作为算法团队成员协助节律模型迭代，参与多日健康信号的验证、解释与产品化呈现，把模型输出转化为用户能够理解和使用的健康洞察。它进一步把作息、恢复、行为和情绪状态放在同一个界面中，帮助用户连续观察自己的节律变化，并把每天的反馈用于后续健康决策与体验优化。",
      "project.navaFactor1": "昼夜节律",
      "project.navaFactor2": "恢复状态",
      "project.navaFactor3": "行为模式",
      "project.navaFactor4": "情绪状态",
      "project.droneViewer": "可交互旋转的 DroneDream 无人机三维模型",
      "project.raceViewer": "可交互旋转的方程式赛车三维模型",
      "project.navaViewer": "NAVA 生物节律动态视觉",
      "project.droneAlt": "仿真场景中的 DroneDream 四旋翼无人机",
      "project.raceAlt": "RaceCar Lab 中的方程式赛车",
      "project.coreAlt": "CoRe-VQA 框架与隐式视频问答实验结果",
      "project.droneLinks": "DroneDream 项目链接",
      "project.raceLinks": "RaceCar Lab 项目链接",
      "project.navaLinks": "NAVA 项目链接",
      "project.droneSite": "打开 DroneDream 网站",
      "project.droneGithub": "打开 DroneDream GitHub 仓库",
      "project.raceSite": "打开 RaceCar Lab 网站",
      "project.raceGithub": "打开 RaceCar Lab GitHub 仓库",
      "project.navaGithub": "打开 NAVA GitHub 仓库",
      "about.introBeforeBruce": "我是浙江大学电气与计算机工程专业的大四本科生。在大三学年期间，我曾作为交换生前往伊利诺伊大学厄巴纳-香槟分校（UIUC）学习一年。在课堂学习之外，目前我正在 ",
      "about.bruceName": "Bruce Yu",
      "about.introAfterBruce": " 老师的课题组开展无人机视角下人体动作识别研究，重点关注如何从空中视频中理解人的行为、动作特征及其时序信息。",
      "about.bodyBeforeHanzhi": "在此之前，我曾在",
      "about.hanzhiName": "马涵之",
      "about.bodyBetweenTeachers": "老师的课题组完成为期一年的学生科研训练计划（国家级 SRTP）。研究围绕基于机器学习与多目标优化的高速信号通道建模展开，并最终以“优秀”评价结题。大二暑期，我还在",
      "about.jixingName": "曹纪兴",
      "about.bodyAfterJixing": "老师的课题组开展了基于 YOLOv11 的隧道火灾与车辆碰撞检测研究。",
      "about.navaBefore": "我也在负责 ",
      "about.navaAfter": " 这一 AI 生物节律应用的 App 开发，并协助算法团队推进节律模型的迭代，把算法能力连接到真实可用的产品界面中。",
      "about.topicsLabel": "研究兴趣",
      "about.topic1": "多模态视频理解",
      "about.topic2": "无人机视觉算法与控制",
      "about.topic3": "多智能体系统协作",
      "about.alt": "Chi Zhang 的个人肖像照",
      "news.racecar": "我正式完成了 RaceCar Lab 网站的开发，为方程式赛车初学者构建了一条循序渐进的学习路径；平台通过车辆结构、核心工程原理、部件分析与可交互的 3D 模型，把原本专业而复杂的赛车知识转化为更容易进入、探索和理解的学习体验，并支持初学者继续学习。",
      "news.fudan": "我在复旦大学张江研究院完成了约一个月的实习，并在叶苏丽老师指导下开发五个“AI+房地产”系统；它们分别面向区域研判、地块规划、家居设计、租赁服务与银发社区生活，从不同角度服务房地产全链路中的开发商、家庭、租客与社区运营者。",
      "news.dronedream": "我正式完成了 ECE 498 DroneDream 项目的结题，将 PX4 与 Gazebo 相关工作整合为一个可交互的平台，使自主飞行调参过程变得可视、可重复且更易研究；完整流程连接实验设置、仿真运行、结果对比与证据整理，为后续工程迭代提供了更清晰的依据。",
      "news.dean": "我入选了伊利诺伊大学厄巴纳-香槟分校 Grainger 工程学院 2025 年秋季院长名单。",
      "news.drone": "我发布了在 ECE 484 课程中完成的自主追踪无人机项目，并公开了该系统的视频演示。",
      "news.westlake": "我在西湖大学 EIE 暑期学校期间接受了校方采访，分享了选择这一国际化项目的原因与一周学习后的体会；来自五大洲的教授和跨学科交流鼓励我主动走出自己的“舒适区”，与不同领域的师生交换想法、互相学习，并继续拓展自己的学术视野与未来学习方向。",
      "news.srtp": "我们的国家级大学生创新训练计划项目在 24 支参评团队中获得了“优秀”评价。",
      "news.awards": "我们的暑期科研项目同时获得了“最佳暑期科研项目”和“最佳暑期科研海报”两项荣誉。",
      "beyond.body": "在实验室之外，我同样关注工程教育与志愿支教，也希望通过真实的学习体验，让学生在实践中建立信心。",
      "common.website": "网站",
      "common.certificate": "证书",
      "common.video": "视频",
      "common.article": "文章",
      "common.github": "GitHub",
      "aria.primaryLinks": "主要链接",
      "aria.currentProfile": "当前身份信息",
      "aria.storyAndSocial": "支教故事与社交链接",
      "aria.socialLinks": "社交链接",
      "language.switch": "Switch to English",
      "theme.toggle": "切换颜色主题"
    }
  };

  const root = document.documentElement;
  const masthead = document.querySelector(".masthead");
  const languageButton = document.querySelector("#language-toggle [role='button']");
  let currentLanguage = "en";

  const readStoredLanguage = () => {
    try {
      const stored = window.localStorage.getItem("portfolio-language");
      if (stored === "en" || stored === "zh") return stored;
    } catch (_error) {
      // Storage can be unavailable in privacy-restricted browsing contexts.
    }
    return window.navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
  };

  const translateAttribute = (selector, dataName, attribute, language) => {
    document.querySelectorAll(selector).forEach((element) => {
      const key = element.dataset[dataName];
      if (key && translations[language][key]) element.setAttribute(attribute, translations[language][key]);
    });
  };

  const applyLanguage = (language, persist) => {
    currentLanguage = language === "zh" ? "zh" : "en";
    const dictionary = translations[currentLanguage];
    root.lang = currentLanguage === "zh" ? "zh-CN" : "en";
    root.dataset.language = currentLanguage;
    const pageKey = document.querySelector("[data-page-key]")?.dataset.pageKey;
    document.title = dictionary[pageKey === "journey" ? "journey.pageTitle" : "page.title"];

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (value) element.textContent = value;
    });
    translateAttribute("[data-i18n-aria-label]", "i18nAriaLabel", "aria-label", currentLanguage);
    translateAttribute("[data-i18n-title]", "i18nTitle", "title", currentLanguage);
    translateAttribute("[data-i18n-alt]", "i18nAlt", "alt", currentLanguage);

    document.querySelectorAll("[data-nav-index]").forEach((link) => {
      const value = dictionary[`nav.${link.dataset.navIndex}`];
      if (value) link.textContent = value;
    });
    const resumeLink = document.querySelector("[data-resume-link]");
    if (resumeLink) {
      resumeLink.href = currentLanguage === "zh" ? resumeLink.dataset.resumeZh : resumeLink.dataset.resumeEn;
    }

    if (languageButton) {
      languageButton.setAttribute("aria-label", dictionary["language.switch"]);
      languageButton.title = dictionary["language.switch"];
    }
    const themeIcon = document.querySelector("#theme-icon");
    if (themeIcon) themeIcon.setAttribute("title", dictionary["theme.toggle"]);

    if (persist) {
      try {
        window.localStorage.setItem("portfolio-language", currentLanguage);
      } catch (_error) {
        // The interface still switches even if persistence is unavailable.
      }
    }

    window.dispatchEvent(new CustomEvent("portfolio:language-change", { detail: { language: currentLanguage } }));
  };

  applyLanguage(readStoredLanguage(), false);
  const toggleLanguage = () => applyLanguage(currentLanguage === "en" ? "zh" : "en", true);
  languageButton?.addEventListener("click", toggleLanguage);
  languageButton?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    toggleLanguage();
  });

  const storyCard = document.querySelector("[data-photo-card]");
  const storyButton = storyCard?.querySelector(".portfolio-story-toggle");
  storyButton?.addEventListener("click", () => {
    const flipped = storyCard.classList.toggle("is-flipped");
    storyButton.setAttribute("aria-pressed", String(flipped));
  });

  const syncMastheadHeight = () => {
    if (!masthead) return;
    root.style.setProperty("--portfolio-nav-height", `${masthead.getBoundingClientRect().height}px`);
  };

  syncMastheadHeight();
  window.addEventListener("resize", syncMastheadHeight, { passive: true });
  if ("ResizeObserver" in window && masthead) new ResizeObserver(syncMastheadHeight).observe(masthead);

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
      { rootMargin: "0px 0px -8%", threshold: 0.12 }
    );
    revealItems.forEach((item) => observer.observe(item));
  }

  const initializeNavaRhythmCard = (container) => {
    const canvas = container.querySelector("canvas");
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context || container.dataset.navaInitialized === "true") return;
    container.dataset.navaInitialized = "true";

    let frame = 0;
    let running = false;
    let width = 0;
    let height = 0;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const factors = [
      { phase: 0.1, color: "rgba(239, 252, 255, 0.82)", amplitude: 0.16 },
      { phase: 1.7, color: "rgba(116, 212, 255, 0.72)", amplitude: 0.12 },
      { phase: 3.1, color: "rgba(79, 145, 215, 0.62)", amplitude: 0.1 },
      { phase: 4.4, color: "rgba(9, 62, 104, 0.5)", amplitude: 0.08 }
    ];

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      const scaledWidth = Math.round(width * pixelRatio);
      const scaledHeight = Math.round(height * pixelRatio);
      if (canvas.width === scaledWidth && canvas.height === scaledHeight) return;
      canvas.width = scaledWidth;
      canvas.height = scaledHeight;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const drawCurve = (time, factor, index) => {
      const yBase = height * (0.37 + index * 0.1);
      const amplitude = height * factor.amplitude;
      context.beginPath();
      for (let step = 0; step <= 128; step += 1) {
        const progress = step / 128;
        const x = progress * width;
        const wave =
          Math.sin(progress * Math.PI * 2.1 + time * 0.001 + factor.phase) * amplitude +
          Math.sin(progress * Math.PI * 4.6 - time * 0.0007 + factor.phase * 0.8) * amplitude * 0.34;
        const y = yBase + wave;
        if (step === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      context.strokeStyle = factor.color;
      context.lineWidth = Math.max(1.2, width * 0.006);
      context.shadowColor = factor.color;
      context.shadowBlur = 18;
      context.stroke();
      context.shadowBlur = 0;
    };

    const draw = (time = 0) => {
      resize();
      context.clearRect(0, 0, width, height);

      const base = context.createLinearGradient(0, 0, width, height);
      base.addColorStop(0, "#e5f7ff");
      base.addColorStop(0.42, "#6fc4eb");
      base.addColorStop(1, "#0a4978");
      context.fillStyle = base;
      context.fillRect(0, 0, width, height);

      for (let i = 0; i < 5; i += 1) {
        const drift = time * (0.00012 + i * 0.000025);
        const x = width * (0.18 + i * 0.18 + Math.sin(drift + i) * 0.08);
        const y = height * (0.18 + ((i * 0.23) % 0.64) + Math.cos(drift * 1.6 + i) * 0.07);
        const radius = width * (0.34 + i * 0.045);
        const mist = context.createRadialGradient(x, y, 0, x, y, radius);
        mist.addColorStop(0, i % 2 ? "rgba(255, 255, 255, 0.58)" : "rgba(173, 230, 255, 0.44)");
        mist.addColorStop(0.55, "rgba(95, 191, 232, 0.18)");
        mist.addColorStop(1, "rgba(10, 73, 120, 0)");
        context.fillStyle = mist;
        context.fillRect(0, 0, width, height);
      }

      context.globalCompositeOperation = "screen";
      factors.forEach((factor, index) => drawCurve(time, factor, index));
      context.globalCompositeOperation = "source-over";

      const centerX = width * 0.5;
      const centerY = height * 0.49;
      const radius = width * 0.245;
      context.lineCap = "round";
      for (let i = 0; i < 4; i += 1) {
        const start = time * 0.00035 + i * Math.PI * 0.5;
        const end = start + Math.PI * (0.52 + i * 0.035);
        context.beginPath();
        context.arc(centerX, centerY, radius + i * 9, start, end);
        context.strokeStyle = factors[i].color;
        context.lineWidth = Math.max(1.4, width * 0.0045);
        context.stroke();
      }

      context.globalAlpha = 0.18;
      context.strokeStyle = "#f6fdff";
      context.lineWidth = 1;
      for (let x = -width; x < width * 1.8; x += width / 8) {
        context.beginPath();
        context.moveTo(x + (time * 0.006) % (width / 8), 0);
        context.lineTo(x + width * 0.36 + (time * 0.006) % (width / 8), height);
        context.stroke();
      }
      context.globalAlpha = 1;

      if (!reducedMotion.matches && running) frame = window.requestAnimationFrame(draw);
    };

    const start = () => {
      if (running) return;
      running = true;
      draw(performance.now());
    };

    const stop = () => {
      running = false;
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      draw(performance.now());
    };

    window.addEventListener("resize", () => draw(performance.now()), { passive: true });
    if (reducedMotion.matches) {
      draw(performance.now());
      return;
    }

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) start();
            else stop();
          });
        },
        { rootMargin: "160px 0px", threshold: 0.01 }
      );
      observer.observe(container);
    } else {
      start();
    }
  };

  document.querySelectorAll("[data-nava-rhythm-card]").forEach(initializeNavaRhythmCard);

  if ("serviceWorker" in navigator && window.isSecureContext) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js", { scope: "/", updateViaCache: "none" }).catch(() => {
        // The portfolio remains fully functional when service workers are unavailable.
      });
    }, { once: true });
  }
})();
