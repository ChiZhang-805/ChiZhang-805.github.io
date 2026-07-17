(function () {
  const translations = {
    en: {
      "page.title": "Chi Zhang — Engineer & Builder",
      "journey.pageTitle": "My Journey — Chi Zhang",
      "nav.0": "Work",
      "nav.1": "About",
      "nav.2": "News",
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
      "journey.intro": "Engineering shapes how I solve problems; these experiences shape how I see people, places, and learning.",
      "journey.archiveTitle": "Experiences",
      "journey.archiveHint": "Select an experience to open its photo story.",
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
      "project.droneViewer": "Interactive 3D DroneDream quadcopter",
      "project.raceViewer": "Interactive 3D formula race car",
      "project.droneAlt": "DroneDream quadcopter in a simulation scene",
      "project.raceAlt": "Formula race car in RaceCar Lab",
      "project.droneLinks": "DroneDream links",
      "project.raceLinks": "RaceCar Lab links",
      "project.droneSite": "Open the DroneDream website",
      "project.droneGithub": "Open the DroneDream GitHub repository",
      "project.raceSite": "Open the RaceCar Lab website",
      "project.raceGithub": "Open the RaceCar Lab GitHub repository",
      "about.intro": "I am an Electrical and Computer Engineering student at Zhejiang University and an exchange student at the University of Illinois Urbana-Champaign during my junior year. I value collaborative practice.",
      "about.body": "My work is shaped by a simple question: how can complex systems become easier for people to operate, evaluate, and learn from? That question connects my projects in autonomous flight, artificial intelligence, simulation, and interactive engineering education, and keeps every tool grounded in engineering practice.",
      "about.alt": "Portrait of Chi Zhang",
      "news.racecar": "I completed RaceCar Lab, an interactive website that gives Formula racing beginners a structured path through vehicle architecture, core engineering principles, component analysis, and hands-on 3D exploration, making a complex subject easier to understand.",
      "news.fudan": "I completed a month-long internship at Fudan University’s Zhangjiang Institute under Suli Ye’s guidance, exploring and developing AI applications for real estate and examining how intelligent methods can support practical industry needs and workflows.",
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
      "aria.primaryLinks": "Primary links",
      "aria.currentProfile": "Current profile",
      "aria.storyAndSocial": "Volunteer teaching story and social links",
      "aria.socialLinks": "Social links",
      "language.switch": "切换到中文",
      "theme.toggle": "Toggle color theme"
    },
    zh: {
      "page.title": "Chi Zhang — 工程与研究",
      "journey.pageTitle": "我的经历 — Chi Zhang",
      "nav.0": "项目",
      "nav.1": "关于",
      "nav.2": "动态",
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
      "journey.intro": "工程塑造了我解决问题的方法，而这些经历塑造了我理解人与地方、学习与成长的方式。",
      "journey.archiveTitle": "经历",
      "journey.archiveHint": "选择一段经历，打开它的影像故事。",
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
      "project.raceDescription": "RaceCar Lab 是一个交互式方程式赛车工程环境，包含代码生成的 3D 赛车、部件研究、公式、诊断工具与双语学习路径。迈凯伦风格的展示来自我对 McLaren 和 Lando Norris 的支持，而我的女朋友支持 Ferrari 和 Charles Leclerc；这份友好的竞争也让赛车工程探索更具个人色彩，并把个人兴趣、车辆结构分析与工程学习过程更自然地连接起来，也使模型观察和参数讨论更加具体、有趣。",
      "project.droneViewer": "可交互旋转的 DroneDream 无人机三维模型",
      "project.raceViewer": "可交互旋转的方程式赛车三维模型",
      "project.droneAlt": "仿真场景中的 DroneDream 四旋翼无人机",
      "project.raceAlt": "RaceCar Lab 中的方程式赛车",
      "project.droneLinks": "DroneDream 项目链接",
      "project.raceLinks": "RaceCar Lab 项目链接",
      "project.droneSite": "打开 DroneDream 网站",
      "project.droneGithub": "打开 DroneDream GitHub 仓库",
      "project.raceSite": "打开 RaceCar Lab 网站",
      "project.raceGithub": "打开 RaceCar Lab GitHub 仓库",
      "about.intro": "我是浙江大学电气与计算机工程专业学生，并在大三学年作为交换生前往伊利诺伊大学厄巴纳-香槟分校（UIUC）学习。我重视协作实践，并接触不同课程、团队方式与更加开放、多元的工程学习环境。",
      "about.body": "我的工作始终围绕一个问题展开：如何让技术复杂的系统更易于操作、评估和学习？这个问题将我在自主飞行、人工智能、仿真和交互式工程教育方面的项目连接起来，并让每一项工具都扎根于真实的工程实践。我也会持续记录设计依据、验证结果与改进路径，让复杂系统的关键逻辑能够被清楚讨论、复用和推进。",
      "about.alt": "Chi Zhang 的个人肖像照",
      "news.racecar": "我正式完成了 RaceCar Lab 网站的开发，为方程式赛车初学者构建了一条循序渐进的学习路径；平台通过车辆结构、核心工程原理、部件分析与可交互的 3D 模型，把原本专业而复杂的赛车知识转化为更容易进入、探索和理解的学习体验，并支持初学者继续学习。",
      "news.fudan": "我在复旦大学张江研究院完成了约一个月的实习，并在叶苏丽老师指导下开展“AI+房地产”方向的项目开发与探索；这段经历让我进一步思考人工智能方法如何连接真实的行业需求、业务流程与具体应用场景，并将技术方案落到更可执行、更有依据的问题之中。",
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

    if (languageButton) {
      languageButton.setAttribute("aria-label", dictionary["language.switch"]);
      languageButton.title = dictionary["language.switch"];
    }
    const themeIcon = document.querySelector("#theme-icon");
    if (themeIcon) themeIcon.title = dictionary["theme.toggle"];

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
})();
