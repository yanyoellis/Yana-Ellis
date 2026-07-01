const translations = {
  en: {
    documentTitle: "Yana Ellis - UX/UI Designer",
    logoAlt: "Yana Ellis logo",
    heroRole: "UX/UI & Web Designer specializing in websites and digital products.",
    heroDescription: "I design minimal, experimental and concept-driven digital experiences.",
    availability: "Open for freelance projects",
    aboutTitle: "ABOUT ME",
    aboutOne: "Designing interfaces is my way of expressing ideas.",
    aboutTwo: "I focus on clarity, emotion and details that create unique digital experiences.",
    aboutThree: "I work with minimalism, bold concepts and thoughtful interactions.",
    toolsTitle: "TOOLS",
    toolHtml: "HTML/CSS for layout implementation",
    toolJs: "JavaScript for interface interactions",
    approachTitle: "APPROACH",
    minimalismTitle: "MINIMALISM",
    minimalismText: "Less, but meaningful.",
    conceptTitle: "CONCEPT FIRST",
    conceptText: "Strong idea drives design.",
    interactionTitle: "INTERACTION",
    interactionText: "Details that make experience smooth.",
    attentionTitle: "ATTENTION",
    attentionText: "Precision in every pixel.",
    contactTitle: "CONTACT",
    emailLabel: "Email",
    projectsTitle: "FEATURED PROJECTS",
    projectType: "Open project",
    projectAria: "Open {name} project site"
  },
  ru: {
    documentTitle: "Yana Ellis - UX/UI дизайнер",
    logoAlt: "Логотип Yana Ellis",
    heroRole: "UX/UI ДИЗАЙНЕР",
    heroDescription: "Я создаю минималистичные, экспериментальные и концептуальные цифровые пространства.",
    availability: "Открыта для freelance-проектов",
    aboutTitle: "ОБО МНЕ",
    aboutOne: "Дизайн интерфейсов для меня: способ выражать идеи.",
    aboutTwo: "Я работаю с ясностью, эмоцией и деталями, которые создают уникальный цифровой опыт.",
    aboutThree: "Мне близки минимализм, смелые концепции и продуманные взаимодействия.",
    toolsTitle: "ИНСТРУМЕНТЫ",
    toolHtml: "HTML/CSS для реализации макетов",
    toolJs: "JavaScript для интерактивности интерфейса",
    approachTitle: "ПОДХОД",
    minimalismTitle: "МИНИМАЛИЗМ",
    minimalismText: "Меньше, но осмысленнее.",
    conceptTitle: "СНАЧАЛА КОНЦЕПТ",
    conceptText: "Сильная идея ведет дизайн.",
    interactionTitle: "ВЗАИМОДЕЙСТВИЕ",
    interactionText: "Детали, которые делают опыт плавным.",
    attentionTitle: "ВНИМАНИЕ",
    attentionText: "Точность в каждом пикселе.",
    contactTitle: "КОНТАКТ",
    emailLabel: "Почта",
    projectsTitle: "ИЗБРАННЫЕ ПРОЕКТЫ",
    projectType: "Открыть сайт",
    projectAria: "Открыть сайт проекта {name}"
  },
  uk: {
    documentTitle: "Yana Ellis - UX/UI дизайнерка",
    logoAlt: "Логотип Yana Ellis",
    heroRole: "UX/UI ДИЗАЙНЕРКА",
    heroDescription: "Я створюю мінімалістичні, експериментальні та концептуальні цифрові досвіди.",
    availability: "Відкрита до freelance-проєктів",
    aboutTitle: "ПРО МЕНЕ",
    aboutOne: "Дизайн інтерфейсів для мене: спосіб висловлювати ідеї.",
    aboutTwo: "Я зосереджуюся на ясності, емоції та деталях, що створюють унікальний цифровий досвід.",
    aboutThree: "Працюю з мінімалізмом, сміливими концепціями та продуманими взаємодіями.",
    toolsTitle: "ІНСТРУМЕНТИ",
    toolHtml: "HTML/CSS для реалізації макетів",
    toolJs: "JavaScript для інтерактивності інтерфейсу",
    approachTitle: "ПІДХІД",
    minimalismTitle: "МІНІМАЛІЗМ",
    minimalismText: "Менше, але змістовніше.",
    conceptTitle: "СПОЧАТКУ КОНЦЕПТ",
    conceptText: "Сильна ідея веде дизайн.",
    interactionTitle: "ВЗАЄМОДІЯ",
    interactionText: "Деталі, що роблять досвід плавним.",
    attentionTitle: "УВАГА",
    attentionText: "Точність у кожному пікселі.",
    contactTitle: "КОНТАКТ",
    emailLabel: "Пошта",
    projectsTitle: "ОБРАНІ ПРОЄКТИ",
    projectType: "Відкрити сайт",
    projectAria: "Відкрити сайт проєкту {name}"
  },
  pl: {
    documentTitle: "Yana Ellis - projektantka UX/UI",
    logoAlt: "Logo Yana Ellis",
    heroRole: "PROJEKTANTKA UX/UI",
    heroDescription: "Projektuję minimalistyczne, eksperymentalne i koncepcyjne doświadczenia cyfrowe.",
    availability: "Otwarta na projekty freelance",
    aboutTitle: "O MNIE",
    aboutOne: "Projektowanie interfejsów to mój sposób wyrażania idei.",
    aboutTwo: "Skupiam się na klarowności, emocji i detalach, które tworzą unikalne doświadczenia cyfrowe.",
    aboutThree: "Pracuję z minimalizmem, mocnymi koncepcjami i przemyślanymi interakcjami.",
    toolsTitle: "NARZĘDZIA",
    toolHtml: "HTML/CSS do implementacji layoutów",
    toolJs: "JavaScript do interakcji interfejsu",
    approachTitle: "PODEJŚCIE",
    minimalismTitle: "MINIMALIZM",
    minimalismText: "Mniej, ale z sensem.",
    conceptTitle: "NAJPIERW KONCEPT",
    conceptText: "Silna idea prowadzi projekt.",
    interactionTitle: "INTERAKCJA",
    interactionText: "Detale, które wygładzają doświadczenie.",
    attentionTitle: "UWAŻNOŚĆ",
    attentionText: "Precyzja w każdym pikselu.",
    contactTitle: "KONTAKT",
    emailLabel: "Email",
    projectsTitle: "WYBRANE PROJEKTY",
    projectType: "Otwórz projekt",
    projectAria: "Otwórz stronę projektu {name}"
  }
};

const languageButtons = document.querySelectorAll(".language-button");
const textNodes = document.querySelectorAll("[data-i18n]");
const altNodes = document.querySelectorAll("[data-i18n-alt]");
const projectCards = document.querySelectorAll(".project-card");
const supportedLanguages = ["en", "uk", "pl"];

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem("yana-ellis-language");

  if (supportedLanguages.includes(savedLanguage)) {
    return savedLanguage;
  }

  return "en";
}

function translateProjectLabels(language) {
  const copy = translations[language];

  projectCards.forEach((card) => {
    const projectName = card.dataset.projectName;
    card.setAttribute("aria-label", copy.projectAria.replace("{name}", projectName));
  });
}

function applyLanguage(language) {
  const copy = translations[language] || translations.en;

  document.documentElement.lang = language;
  document.title = copy.documentTitle;
  localStorage.setItem("yana-ellis-language", language);

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (copy[key]) {
      node.textContent = copy[key];
    }
  });

  altNodes.forEach((node) => {
    const key = node.dataset.i18nAlt;
    if (copy[key]) {
      node.setAttribute("alt", copy[key]);
    }
  });

  translateProjectLabels(language);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

applyLanguage(getInitialLanguage());
