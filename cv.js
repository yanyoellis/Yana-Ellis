const supportedLanguages = ["en", "uk", "pl", "ru", "de"];
const languageKey = "yana-ellis-language";

const cvCopy = {
  en: {
    title: "Yana Ellis - CV",
    nav: { portfolio: "Portfolio", projectGuide: "Project Guide" },
    eyebrow: "Professional CV",
    name: "Yana Ellis",
    role: "Product Designer · UX/UI Designer · Web Designer · Brand Designer",
    summary:
      "UX/UI, product and web designer with four years of professional design experience across websites, digital products, brand systems and customer-facing business experiences. I take projects from early business context and unclear requirements to finished structure, interface, visual direction, implementation and launch-ready delivery.",
    meta: [
      ["Location", "Ukraine · Remote"],
      ["Availability", "Full-time · Contract · Freelance"],
      ["Portfolio", "yanaellis.vercel.app"],
      ["Contact", "oh.yanyoellis@gmail.com · @ohyanyo"]
    ],
    expertiseTitle: "Core Expertise",
    expertiseIntro:
      "A cross-disciplinary profile covering strategy, UX structure, interface design, brand direction and practical front-end implementation.",
    expertise: [
      "Product Design",
      "UX Strategy",
      "Information Architecture",
      "User Flows",
      "Customer Journeys",
      "Wireframing",
      "Interaction Design",
      "Responsive UX",
      "UI Design",
      "Web Design",
      "Landing Pages",
      "Corporate Websites",
      "E-commerce UX",
      "Booking Experiences",
      "Dashboard Design",
      "Design Systems",
      "Visual Identity",
      "Brand Direction",
      "Social Media Design",
      "Presentation Design",
      "Business Requirements",
      "Conversion-Oriented Design",
      "HTML/CSS",
      "JavaScript"
    ],
    toolsTitle: "Tools & Technologies",
    toolsIntro:
      "I design in professional tools and understand enough implementation to keep decisions beautiful, realistic and maintainable.",
    tools: [
      "Figma",
      "FigJam",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Framer",
      "Webflow",
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "VS Code",
      "Git",
      "GitHub",
      "Vercel",
      "Notion",
      "Jira",
      "Google Workspace"
    ],
    experienceTitle: "Professional Experience",
    experienceIntro:
      "End-to-end project ownership across commercial websites, product interfaces, visual identity, customer experience and operational design.",
    experience: [
      {
        company: "Independent Design Practice",
        role: "Freelance Product, UX/UI, Web & Brand Designer",
        date: "2022 - 2026",
        copy:
          "Delivered complete digital and visual experiences for businesses and independent clients across real estate, hospitality, beauty, construction, retail and service industries.",
        bullets: [
          "Led projects from business requirements and product structure to UX architecture, visual direction, responsive UI, implementation and final delivery.",
          "Translated incomplete client ideas into clear website structures, customer journeys and commercially usable digital systems.",
          "Designed responsive websites, e-commerce flows, booking experiences, property discovery tools, service-selection journeys and administrative interfaces.",
          "Created logos, brand assets, business cards, banners, social visuals and presentation materials when the business needed a broader visual system.",
          "Handled front-end implementation, forms, responsive behaviour, hosting, domains and deployment details when required."
        ]
      },
      {
        company: "Maria Apartments / Maria Residences",
        role: "Product Designer · UX/UI Designer · Web Designer · Brand Designer · Business Operations Manager",
        date: "2026",
        copy:
          "Completed a full digital, brand and operational design system for a Ukrainian apartment-rental business with approximately 19 properties, connecting customer experience with the reality of daily business operations.",
        bullets: [
          "Designed the digital direction around apartment discovery, availability, pricing, guest questions and booking actions.",
          "Created the information architecture, responsive website logic and individual apartment presentation model.",
          "Built a consistent visual identity across website, social media, branded customer touchpoints and physical materials.",
          "Managed apartment listing presentation across rental platforms and improved how customers understand offers, rules, amenities and availability.",
          "Worked directly with guest communication, booking coordination, check-in support and operational feedback, strengthening the UX with real customer behaviour."
        ]
      }
    ],
    commercialTitle: "Selected Commercial Work",
    commercialIntro:
      "Completed commercial projects where the design work supported real business presentation, customer trust, lead generation and digital operations.",
    commercial: [
      {
        name: "ECO HAIR LAB",
        type: "Beauty · E-commerce · Education",
        copy:
          "Designed a premium digital ecosystem for a UK-based beauty business, combining services, appointments, professional products, educational courses and owner-managed content."
      },
      {
        name: "MARGARETKA",
        type: "Retail · Floristry · Website Redesign",
        copy:
          "Redesigned a flower and bouquet website into a more premium, emotional and commercially clear customer-facing experience while preserving product character."
      },
      {
        name: "ARCED Construction",
        type: "Construction · Corporate Website",
        copy:
          "Delivered a complete Canadian construction-company website with service hierarchy, lead-generation paths, responsive layouts and production deployment."
      },
      {
        name: "ARCED Tile",
        type: "Renovation · Service Website",
        copy:
          "Designed and implemented a commercial website for a Canadian tile and renovation business, including information architecture, responsive UI and enquiry flow."
      }
    ],
    portfolioTitle: "Selected Product & Website Projects",
    portfolioIntro:
      "Finished portfolio projects showing range across SaaS, finance, healthcare, hospitality, real estate, luxury services and editorial digital products.",
    portfolio: [
      {
        name: "NovaHQ",
        type: "B2B SaaS Product Design",
        copy:
          "Designed a business-management dashboard for analytics, customers, subscriptions, projects and reporting, with clear navigation for complex data."
      },
      {
        name: "Ellis Bank",
        type: "Fintech Mobile Product",
        copy:
          "Created a luxury private-banking mobile concept focused on trust, balance visibility, transfers, upcoming payments and refined financial interaction."
      },
      {
        name: "Lucent Dentistry",
        type: "Healthcare Website",
        copy:
          "Designed a premium dental-clinic website around patient trust, treatment discovery, specialists, transparent information and appointment conversion."
      },
      {
        name: "LVL HOME",
        type: "Real Estate UX",
        copy:
          "Designed an interactive luxury residential discovery experience with building navigation, filtering, availability states, floor plans and conversion paths."
      },
      {
        name: "Tavola Nostra",
        type: "Hospitality Website",
        copy:
          "Designed a premium Italian restaurant experience combining menu storytelling, atmosphere, editorial composition and reservation-oriented UX."
      },
      {
        name: "Atelier Aureline",
        type: "Luxury Service Website",
        copy:
          "Created a high-end tattoo-industry website positioning tattooing as an artistic luxury service through portfolio storytelling and restrained interaction."
      },
      {
        name: "ELLIS Olfactory Office",
        type: "Scent Brand Website",
        copy:
          "Built a refined fragrance concept website with controlled visual rhythm, curated product presentation and brand-led sensory storytelling."
      },
      {
        name: "Pelagea",
        type: "Editorial UX Case",
        copy:
          "Designed an immersive editorial experience with atmospheric navigation, narrative pacing and a strong ocean-inspired visual system."
      }
    ],
    strengthsTitle: "Professional Strengths",
    strengthsIntro:
      "My strongest value is the combination of strong visual judgment, UX structure, commercial thinking and practical business understanding.",
    strengths: [
      ["End-to-End Ownership", "I can take responsibility from early idea to a functioning, finished digital product."],
      ["Commercial Thinking", "I connect design decisions to positioning, trust, conversion and business objectives."],
      ["Strong Visual Direction", "I create distinct identities rather than relying on generic website conventions."],
      ["UX Structure", "I turn complex or poorly organized information into clear customer journeys."],
      ["Business Communication", "I work directly with founders and translate business language into product decisions."],
      ["Cross-Disciplinary Design", "My work covers UX/UI, websites, branding, social media, print and customer touchpoints."],
      ["Practical Experience", "Operational experience helps me design around real customer behavior, not abstract assumptions."],
      ["Independence", "I can work without constant supervision and take ownership of decisions."]
    ],
    languagesTitle: "Languages",
    languagesIntro: "Ukrainian - native · Russian - native · Polish - proficient · English - intermediate",
    contactTitle: "Contact",
    contactText:
      "Open to remote UX/UI, product design, web design and multidisciplinary digital design roles. I am especially strong in projects that need both visual quality and structured business thinking.",
    contactLabels: { email: "Email", telegram: "Telegram", instagram: "Instagram" }
  },
  uk: {
    title: "Yana Ellis - CV",
    nav: { portfolio: "Портфоліо", projectGuide: "Гайд проєкту" },
    eyebrow: "Професійне CV",
    name: "Yana Ellis",
    role: "Product Designer · UX/UI Designer · Web Designer · Brand Designer",
    summary:
      "UX/UI, product і web designer з чотирма роками професійного досвіду в дизайні сайтів, цифрових продуктів, бренд-систем і клієнтських бізнес-досвідів. Я доводжу проєкти від раннього бізнес-контексту й нечітких вимог до готової структури, інтерфейсу, візуального напряму, реалізації та запуску.",
    meta: [
      ["Локація", "Україна · Remote"],
      ["Формат", "Full-time · Contract · Freelance"],
      ["Портфоліо", "yanaellis.vercel.app"],
      ["Контакт", "oh.yanyoellis@gmail.com · @ohyanyo"]
    ],
    expertiseTitle: "Ключова експертиза",
    expertiseIntro:
      "Міждисциплінарний профіль: стратегія, UX-структура, інтерфейсний дизайн, бренд-напрям і практична фронтенд-реалізація.",
    toolsTitle: "Інструменти й технології",
    toolsIntro:
      "Я працюю у професійних дизайн-інструментах і розумію реалізацію достатньо, щоб рішення були красивими, реалістичними й підтримуваними.",
    experienceTitle: "Професійний досвід",
    experienceIntro:
      "Повна відповідальність за комерційні сайти, продуктові інтерфейси, айдентику, клієнтський досвід і операційний дизайн.",
    commercialTitle: "Вибрані комерційні роботи",
    commercialIntro:
      "Завершені комерційні проєкти, де дизайн підтримував бізнес-презентацію, довіру, заявки та цифрові процеси.",
    portfolioTitle: "Вибрані продуктові й веб-проєкти",
    portfolioIntro:
      "Завершені портфоліо-проєкти в SaaS, фінтеху, медицині, hospitality, нерухомості, luxury-сервісах і editorial digital.",
    strengthsTitle: "Професійні сильні сторони",
    strengthsIntro:
      "Моя головна цінність - поєднання сильного візуального мислення, UX-структури, комерційного підходу й практичного розуміння бізнесу.",
    languagesTitle: "Мови",
    languagesIntro: "Українська - рідна · Російська - рідна · Польська - впевнена · Англійська - intermediate",
    contactTitle: "Контакт",
    contactText:
      "Відкрита до remote ролей у UX/UI, product design, web design і multidisciplinary digital design. Найсильніша у проєктах, де потрібні і візуальна якість, і структурне бізнес-мислення.",
    contactLabels: { email: "Email", telegram: "Telegram", instagram: "Instagram" }
  },
  pl: {
    title: "Yana Ellis - CV",
    nav: { portfolio: "Portfolio", projectGuide: "Przewodnik" },
    eyebrow: "Profesjonalne CV",
    name: "Yana Ellis",
    role: "Product Designer · UX/UI Designer · Web Designer · Brand Designer",
    summary:
      "Projektantka UX/UI, product i web z czteroletnim doświadczeniem w projektowaniu stron, produktów cyfrowych, systemów marki i doświadczeń klienta. Prowadzę projekty od niejasnych wymagań biznesowych do gotowej struktury, interfejsu, kierunku wizualnego, implementacji i dostarczenia gotowego do uruchomienia rozwiązania.",
    meta: [
      ["Lokalizacja", "Ukraina · Remote"],
      ["Forma współpracy", "Full-time · Contract · Freelance"],
      ["Portfolio", "yanaellis.vercel.app"],
      ["Kontakt", "oh.yanyoellis@gmail.com · @ohyanyo"]
    ],
    expertiseTitle: "Kluczowe kompetencje",
    expertiseIntro:
      "Profil multidyscyplinarny: strategia, struktura UX, projektowanie interfejsów, kierunek marki i praktyczna implementacja front-end.",
    toolsTitle: "Narzędzia i technologie",
    toolsIntro:
      "Projektuję w profesjonalnych narzędziach i rozumiem implementację na tyle, aby decyzje były estetyczne, realistyczne i łatwe w utrzymaniu.",
    experienceTitle: "Doświadczenie zawodowe",
    experienceIntro:
      "Pełna odpowiedzialność za strony komercyjne, interfejsy produktowe, identyfikację wizualną, doświadczenie klienta i design procesów biznesowych.",
    commercialTitle: "Wybrane projekty komercyjne",
    commercialIntro:
      "Ukończone projekty komercyjne, w których design wspierał prezentację biznesu, zaufanie, lead generation i procesy cyfrowe.",
    portfolioTitle: "Wybrane projekty produktowe i webowe",
    portfolioIntro:
      "Ukończone projekty portfolio pokazujące zakres w SaaS, fintech, healthcare, hospitality, nieruchomościach, usługach luxury i editorial digital.",
    strengthsTitle: "Mocne strony",
    strengthsIntro:
      "Moją największą wartością jest połączenie mocnego wyczucia wizualnego, struktury UX, myślenia komercyjnego i praktycznego rozumienia biznesu.",
    languagesTitle: "Języki",
    languagesIntro: "Ukraiński - native · Rosyjski - native · Polski - biegły · Angielski - intermediate",
    contactTitle: "Kontakt",
    contactText:
      "Otwarta na role remote w UX/UI, product design, web design i multidisciplinary digital design. Najmocniejsza w projektach, które potrzebują jakości wizualnej oraz uporządkowanego myślenia biznesowego.",
    contactLabels: { email: "Email", telegram: "Telegram", instagram: "Instagram" }
  },
  ru: {
    title: "Yana Ellis - CV",
    nav: { portfolio: "Портфолио", projectGuide: "Гайд проекта" },
    eyebrow: "Профессиональное CV",
    name: "Yana Ellis",
    role: "Product Designer · UX/UI Designer · Web Designer · Brand Designer",
    summary:
      "UX/UI, product и web designer с четырьмя годами профессионального опыта в дизайне сайтов, цифровых продуктов, бренд-систем и клиентских бизнес-опытов. Я довожу проекты от раннего бизнес-контекста и неясных требований до готовой структуры, интерфейса, визуального направления, реализации и запусковой версии.",
    meta: [
      ["Локация", "Украина · Remote"],
      ["Формат", "Full-time · Contract · Freelance"],
      ["Портфолио", "yanaellis.vercel.app"],
      ["Контакт", "oh.yanyoellis@gmail.com · @ohyanyo"]
    ],
    expertiseTitle: "Ключевая экспертиза",
    expertiseIntro:
      "Междисциплинарный профиль: стратегия, UX-структура, интерфейсный дизайн, бренд-направление и практическая frontend-реализация.",
    toolsTitle: "Инструменты и технологии",
    toolsIntro:
      "Я работаю в профессиональных дизайн-инструментах и понимаю реализацию достаточно, чтобы решения были красивыми, реалистичными и поддерживаемыми.",
    experienceTitle: "Профессиональный опыт",
    experienceIntro:
      "Полная ответственность за коммерческие сайты, продуктовые интерфейсы, айдентику, клиентский опыт и операционный дизайн.",
    commercialTitle: "Избранные коммерческие работы",
    commercialIntro:
      "Завершенные коммерческие проекты, где дизайн поддерживал презентацию бизнеса, доверие, заявки и цифровые процессы.",
    portfolioTitle: "Избранные продуктовые и веб-проекты",
    portfolioIntro:
      "Завершенные портфолио-проекты в SaaS, финтехе, медицине, hospitality, недвижимости, luxury-сервисах и editorial digital.",
    strengthsTitle: "Профессиональные сильные стороны",
    strengthsIntro:
      "Моя главная ценность - сочетание сильного визуального мышления, UX-структуры, коммерческого подхода и практического понимания бизнеса.",
    languagesTitle: "Языки",
    languagesIntro: "Украинский - native · Русский - native · Польский - уверенный · Английский - intermediate",
    contactTitle: "Контакт",
    contactText:
      "Открыта к remote ролям в UX/UI, product design, web design и multidisciplinary digital design. Особенно сильна в проектах, где нужны и визуальное качество, и структурное бизнес-мышление.",
    contactLabels: { email: "Email", telegram: "Telegram", instagram: "Instagram" }
  },
  de: {
    title: "Yana Ellis - CV",
    nav: { portfolio: "Portfolio", projectGuide: "Projektguide" },
    eyebrow: "Professioneller Lebenslauf",
    name: "Yana Ellis",
    role: "Product Designer · UX/UI Designer · Web Designer · Brand Designer",
    summary:
      "UX/UI, Product und Web Designerin mit vier Jahren professioneller Designerfahrung in Websites, digitalen Produkten, Markensystemen und kundennahen Business Experiences. Ich führe Projekte von frühem Business-Kontext und unklaren Anforderungen bis zu fertiger Struktur, Interface, visueller Richtung, Umsetzung und launchfähiger Lieferung.",
    meta: [
      ["Standort", "Ukraine · Remote"],
      ["Verfügbarkeit", "Full-time · Contract · Freelance"],
      ["Portfolio", "yanaellis.vercel.app"],
      ["Kontakt", "oh.yanyoellis@gmail.com · @ohyanyo"]
    ],
    expertiseTitle: "Kernkompetenzen",
    expertiseIntro:
      "Ein interdisziplinäres Profil aus Strategie, UX-Struktur, Interface Design, Brand Direction und praktischer Frontend-Umsetzung.",
    toolsTitle: "Tools & Technologien",
    toolsIntro:
      "Ich arbeite mit professionellen Design-Tools und verstehe Umsetzung so weit, dass Entscheidungen ästhetisch, realistisch und wartbar bleiben.",
    experienceTitle: "Berufserfahrung",
    experienceIntro:
      "End-to-end Verantwortung für kommerzielle Websites, Produktinterfaces, visuelle Identität, Customer Experience und operatives Design.",
    commercialTitle: "Ausgewählte kommerzielle Arbeiten",
    commercialIntro:
      "Abgeschlossene kommerzielle Projekte, in denen Design Business-Präsentation, Vertrauen, Leadgenerierung und digitale Abläufe unterstützt hat.",
    portfolioTitle: "Ausgewählte Produkt- und Webprojekte",
    portfolioIntro:
      "Abgeschlossene Portfolio-Projekte mit Bandbreite in SaaS, Fintech, Healthcare, Hospitality, Immobilien, Luxury Services und editorial digital.",
    strengthsTitle: "Professionelle Stärken",
    strengthsIntro:
      "Mein stärkster Wert ist die Verbindung aus starkem visuellem Urteil, UX-Struktur, kommerziellem Denken und praktischem Business-Verständnis.",
    languagesTitle: "Sprachen",
    languagesIntro: "Ukrainisch - Muttersprache · Russisch - Muttersprache · Polnisch - sicher · Englisch - intermediate",
    contactTitle: "Kontakt",
    contactText:
      "Offen für remote Rollen in UX/UI, Product Design, Web Design und multidisziplinärem Digital Design. Besonders stark bin ich in Projekten, die visuelle Qualität und strukturiertes Business-Denken brauchen.",
    contactLabels: { email: "Email", telegram: "Telegram", instagram: "Instagram" }
  }
};

const reusable = {
  expertise: cvCopy.en.expertise,
  tools: cvCopy.en.tools,
  experience: cvCopy.en.experience,
  commercial: cvCopy.en.commercial,
  portfolio: cvCopy.en.portfolio,
  strengths: cvCopy.en.strengths
};

for (const lang of ["uk", "pl", "ru", "de"]) {
  cvCopy[lang].expertise = reusable.expertise;
  cvCopy[lang].tools = reusable.tools;
}

cvCopy.uk.expertise = [
  "Product Design",
  "UX-стратегія",
  "Інформаційна архітектура",
  "User Flows",
  "Customer Journeys",
  "Wireframing",
  "Interaction Design",
  "Responsive UX",
  "UI Design",
  "Web Design",
  "Landing Pages",
  "Корпоративні сайти",
  "E-commerce UX",
  "Booking-досвіди",
  "Dashboard Design",
  "Design Systems",
  "Візуальна айдентика",
  "Brand Direction",
  "Social Media Design",
  "Presentation Design",
  "Бізнес-вимоги",
  "Conversion-Oriented Design",
  "HTML/CSS",
  "JavaScript"
];

cvCopy.pl.expertise = [
  "Product Design",
  "Strategia UX",
  "Architektura informacji",
  "User Flows",
  "Customer Journeys",
  "Wireframing",
  "Interaction Design",
  "Responsive UX",
  "UI Design",
  "Web Design",
  "Landing Pages",
  "Strony korporacyjne",
  "E-commerce UX",
  "Booking Experiences",
  "Dashboard Design",
  "Design Systems",
  "Identyfikacja wizualna",
  "Brand Direction",
  "Social Media Design",
  "Presentation Design",
  "Wymagania biznesowe",
  "Conversion-Oriented Design",
  "HTML/CSS",
  "JavaScript"
];

cvCopy.ru.expertise = [
  "Product Design",
  "UX-стратегия",
  "Информационная архитектура",
  "User Flows",
  "Customer Journeys",
  "Wireframing",
  "Interaction Design",
  "Responsive UX",
  "UI Design",
  "Web Design",
  "Landing Pages",
  "Корпоративные сайты",
  "E-commerce UX",
  "Booking-опыты",
  "Dashboard Design",
  "Design Systems",
  "Визуальная айдентика",
  "Brand Direction",
  "Social Media Design",
  "Presentation Design",
  "Бизнес-требования",
  "Conversion-Oriented Design",
  "HTML/CSS",
  "JavaScript"
];

cvCopy.de.expertise = [
  "Product Design",
  "UX-Strategie",
  "Informationsarchitektur",
  "User Flows",
  "Customer Journeys",
  "Wireframing",
  "Interaction Design",
  "Responsive UX",
  "UI Design",
  "Web Design",
  "Landing Pages",
  "Corporate Websites",
  "E-commerce UX",
  "Booking Experiences",
  "Dashboard Design",
  "Design Systems",
  "Visuelle Identität",
  "Brand Direction",
  "Social Media Design",
  "Presentation Design",
  "Business Requirements",
  "Conversion-Oriented Design",
  "HTML/CSS",
  "JavaScript"
];

cvCopy.uk.experience = [
  {
    company: "Незалежна дизайн-практика",
    role: "Freelance Product, UX/UI, Web & Brand Designer",
    date: "2022 - 2026",
    copy:
      "Реалізувала повні цифрові й візуальні досвіди для бізнесів та незалежних клієнтів у нерухомості, hospitality, beauty, construction, retail і сервісних індустріях.",
    bullets: [
      "Вела проєкти від бізнес-вимог і продуктової структури до UX-архітектури, візуального напряму, адаптивного UI, реалізації та фінальної передачі.",
      "Перетворювала неповні ідеї клієнтів на чіткі структури сайтів, customer journeys і комерційно придатні цифрові системи.",
      "Проєктувала адаптивні сайти, e-commerce flows, booking-досвіди, property discovery, service-selection journeys і адміністративні інтерфейси.",
      "Створювала логотипи, бренд-матеріали, візитки, банери, social visuals і презентації, коли бізнесу була потрібна ширша візуальна система.",
      "Працювала з front-end реалізацією, формами, адаптивною поведінкою, хостингом, доменами та deployment, коли це входило в проєкт."
    ]
  },
  {
    company: "Maria Apartments / Maria Residences",
    role: "Product Designer · UX/UI Designer · Web Designer · Brand Designer · Business Operations Manager",
    date: "2026",
    copy:
      "Завершила повну цифрову, бренд- і операційну дизайн-систему для українського бізнесу коротко- та середньострокової оренди приблизно з 19 апартаментами.",
    bullets: [
      "Спроєктувала цифровий напрям навколо пошуку апартаментів, доступності, цін, типових питань гостей і booking actions.",
      "Створила інформаційну архітектуру, логіку responsive website і модель презентації окремих апартаментів.",
      "Сформувала єдину айдентику для сайту, соціальних мереж, клієнтських touchpoints і фізичних матеріалів.",
      "Керувала презентацією апартаментів на rental platforms і покращила зрозумілість пропозицій, правил, amenities та availability.",
      "Працювала з guest communication, booking coordination, check-in support і операційним фідбеком, посилюючи UX реальними customer behaviours."
    ]
  }
];

cvCopy.uk.commercial = [
  ["ECO HAIR LAB", "Beauty · E-commerce · Education", "Спроєктувала преміальну цифрову екосистему для beauty-бізнесу у Великій Британії: services, appointments, professional products, educational courses і owner-managed content."],
  ["MARGARETKA", "Retail · Floristry · Website Redesign", "Переробила сайт квіткового бізнесу в більш преміальний, емоційний і комерційно зрозумілий customer-facing experience зі збереженням характеру продукту."],
  ["ARCED Construction", "Construction · Corporate Website", "Реалізувала повний сайт канадської будівельної компанії з service hierarchy, lead-generation paths, responsive layouts і production deployment."],
  ["ARCED Tile", "Renovation · Service Website", "Спроєктувала й реалізувала комерційний сайт для канадського tile and renovation бізнесу: IA, responsive UI і enquiry flow."]
].map(([name, type, copy]) => ({ name, type, copy }));

cvCopy.uk.portfolio = [
  ["NovaHQ", "B2B SaaS Product Design", "Спроєктувала dashboard для business management: analytics, customers, subscriptions, projects і reporting з ясною навігацією для складних даних."],
  ["Ellis Bank", "Fintech Mobile Product", "Створила luxury private-banking mobile concept про довіру, баланс, перекази, upcoming payments і refined financial interaction."],
  ["Lucent Dentistry", "Healthcare Website", "Спроєктувала преміальний сайт стоматологічної клініки навколо patient trust, treatment discovery, specialists, прозорої інформації й appointment conversion."],
  ["LVL HOME", "Real Estate UX", "Створила interactive luxury residential discovery experience з building navigation, filters, availability states, floor plans і conversion paths."],
  ["Tavola Nostra", "Hospitality Website", "Спроєктувала преміальний сайт італійського ресторану, що поєднує menu storytelling, atmosphere, editorial composition і reservation-oriented UX."],
  ["Atelier Aureline", "Luxury Service Website", "Створила high-end сайт tattoo-industry, який позиціонує tattooing як artistic luxury service через portfolio storytelling і restrained interaction."],
  ["ELLIS Olfactory Office", "Scent Brand Website", "Побудувала refined fragrance concept website з контрольованим ритмом, curated product presentation і brand-led sensory storytelling."],
  ["Pelagea", "Editorial UX Case", "Створила immersive editorial experience з атмосферною навігацією, narrative pacing і ocean-inspired visual system."]
].map(([name, type, copy]) => ({ name, type, copy }));

cvCopy.uk.strengths = [
  ["End-to-End Ownership", "Можу вести проєкт від першої ідеї до функціонального готового цифрового продукту."],
  ["Commercial Thinking", "Пов'язую дизайн-рішення з positioning, trust, conversion і бізнес-цілями."],
  ["Strong Visual Direction", "Створюю впізнавані візуальні системи замість generic website conventions."],
  ["UX Structure", "Перетворюю складну або хаотичну інформацію на зрозумілі customer journeys."],
  ["Business Communication", "Працюю напряму з founders і перекладаю бізнес-мову в продуктові рішення."],
  ["Cross-Disciplinary Design", "Працюю з UX/UI, websites, branding, social media, print і customer touchpoints."],
  ["Practical Experience", "Операційний досвід допомагає проєктувати навколо реальної поведінки клієнтів."],
  ["Independence", "Можу працювати без постійного нагляду й брати відповідальність за рішення."]
];

cvCopy.pl.experience = [
  {
    company: "Niezależna praktyka projektowa",
    role: "Freelance Product, UX/UI, Web & Brand Designer",
    date: "2022 - 2026",
    copy:
      "Dostarczałam kompletne doświadczenia cyfrowe i wizualne dla firm oraz niezależnych klientów z branż real estate, hospitality, beauty, construction, retail i usług.",
    bullets: [
      "Prowadziłam projekty od wymagań biznesowych i struktury produktu po UX architecture, visual direction, responsive UI, implementację i finalne dostarczenie.",
      "Zamieniałam niepełne pomysły klientów w przejrzyste struktury stron, customer journeys i komercyjnie użyteczne systemy cyfrowe.",
      "Projektowałam responsywne strony, e-commerce flows, booking experiences, property discovery, service-selection journeys i interfejsy administracyjne.",
      "Tworzyłam logo, materiały marki, wizytówki, banery, social visuals i prezentacje, gdy firma potrzebowała szerszego systemu wizualnego.",
      "Pracowałam z front-end implementation, formularzami, responsywnością, hostingiem, domenami i deploymentem, gdy wymagał tego projekt."
    ]
  },
  {
    company: "Maria Apartments / Maria Residences",
    role: "Product Designer · UX/UI Designer · Web Designer · Brand Designer · Business Operations Manager",
    date: "2026",
    copy:
      "Ukończyłam pełny system cyfrowy, brandowy i operacyjny dla ukraińskiego biznesu wynajmu krótkoterminowego i średnioterminowego z około 19 apartamentami.",
    bullets: [
      "Zaprojektowałam kierunek cyfrowy wokół discovery apartamentów, dostępności, cen, pytań gości i booking actions.",
      "Stworzyłam information architecture, logikę responsive website i model prezentacji pojedynczego apartamentu.",
      "Zbudowałam spójną identyfikację dla strony, social media, customer touchpoints i materiałów fizycznych.",
      "Zarządzałam prezentacją ofert na rental platforms i poprawiłam zrozumiałość ofert, zasad, amenities i availability.",
      "Pracowałam z guest communication, booking coordination, check-in support i feedbackiem operacyjnym, wzmacniając UX realnym zachowaniem klientów."
    ]
  }
];

cvCopy.pl.commercial = [
  ["ECO HAIR LAB", "Beauty · E-commerce · Education", "Zaprojektowałam premium digital ecosystem dla brytyjskiego beauty businessu, łącząc usługi, wizyty, profesjonalne produkty, kursy edukacyjne i owner-managed content."],
  ["MARGARETKA", "Retail · Floristry · Website Redesign", "Przeprojektowałam stronę kwiaciarni w bardziej premium, emocjonalne i komercyjnie czytelne customer-facing experience, zachowując charakter produktów."],
  ["ARCED Construction", "Construction · Corporate Website", "Dostarczyłam pełną stronę kanadyjskiej firmy budowlanej z hierarchią usług, ścieżkami lead generation, responsive layouts i production deployment."],
  ["ARCED Tile", "Renovation · Service Website", "Zaprojektowałam i wdrożyłam komercyjną stronę kanadyjskiej firmy tile and renovation: IA, responsive UI i enquiry flow."]
].map(([name, type, copy]) => ({ name, type, copy }));

cvCopy.pl.portfolio = [
  ["NovaHQ", "B2B SaaS Product Design", "Zaprojektowałam dashboard do zarządzania biznesem: analytics, customers, subscriptions, projects i reporting z jasną nawigacją dla złożonych danych."],
  ["Ellis Bank", "Fintech Mobile Product", "Stworzyłam luxury private-banking mobile concept skupiony na zaufaniu, widoczności salda, przelewach, upcoming payments i refined financial interaction."],
  ["Lucent Dentistry", "Healthcare Website", "Zaprojektowałam premium stronę kliniki dentystycznej wokół patient trust, treatment discovery, specialists, przejrzystej informacji i appointment conversion."],
  ["LVL HOME", "Real Estate UX", "Stworzyłam interactive luxury residential discovery experience z building navigation, filters, availability states, floor plans i conversion paths."],
  ["Tavola Nostra", "Hospitality Website", "Zaprojektowałam premium doświadczenie włoskiej restauracji: menu storytelling, atmosphere, editorial composition i reservation-oriented UX."],
  ["Atelier Aureline", "Luxury Service Website", "Stworzyłam high-end stronę dla tattoo-industry, pozycjonując tatuaż jako artistic luxury service przez portfolio storytelling i restrained interaction."],
  ["ELLIS Olfactory Office", "Scent Brand Website", "Zbudowałam refined fragrance concept website z kontrolowanym rytmem, curated product presentation i brand-led sensory storytelling."],
  ["Pelagea", "Editorial UX Case", "Zaprojektowałam immersive editorial experience z atmosferyczną nawigacją, narrative pacing i ocean-inspired visual system."]
].map(([name, type, copy]) => ({ name, type, copy }));

cvCopy.pl.strengths = [
  ["End-to-End Ownership", "Prowadzę projekt od pierwszej idei do działającego, ukończonego produktu cyfrowego."],
  ["Commercial Thinking", "Łączę decyzje projektowe z positioning, trust, conversion i celami biznesowymi."],
  ["Strong Visual Direction", "Tworzę wyraziste systemy wizualne zamiast opierać się na generic website conventions."],
  ["UX Structure", "Zamieniam złożone lub chaotyczne informacje w czytelne customer journeys."],
  ["Business Communication", "Pracuję bezpośrednio z founders i tłumaczę język biznesu na decyzje produktowe."],
  ["Cross-Disciplinary Design", "Łączę UX/UI, websites, branding, social media, print i customer touchpoints."],
  ["Practical Experience", "Doświadczenie operacyjne pomaga mi projektować wokół realnych zachowań klientów."],
  ["Independence", "Potrafię pracować samodzielnie i brać odpowiedzialność za decyzje."]
];

cvCopy.ru.experience = [
  {
    company: "Независимая дизайн-практика",
    role: "Freelance Product, UX/UI, Web & Brand Designer",
    date: "2022 - 2026",
    copy:
      "Реализовала полные цифровые и визуальные решения для бизнесов и независимых клиентов в недвижимости, hospitality, beauty, construction, retail и сервисных индустриях.",
    bullets: [
      "Вела проекты от бизнес-требований и продуктовой структуры до UX-архитектуры, визуального направления, адаптивного UI, реализации и финальной передачи.",
      "Переводила неполные идеи клиентов в четкие структуры сайтов, customer journeys и коммерчески полезные цифровые системы.",
      "Проектировала адаптивные сайты, e-commerce flows, booking experiences, property discovery, service-selection journeys и административные интерфейсы.",
      "Создавала логотипы, бренд-материалы, визитки, баннеры, social visuals и презентации, когда бизнесу была нужна более широкая визуальная система.",
      "Работала с front-end реализацией, формами, адаптивным поведением, хостингом, доменами и deployment, когда это входило в проект."
    ]
  },
  {
    company: "Maria Apartments / Maria Residences",
    role: "Product Designer · UX/UI Designer · Web Designer · Brand Designer · Business Operations Manager",
    date: "2026",
    copy:
      "Завершила полную цифровую, бренд- и операционную дизайн-систему для украинского бизнеса аренды примерно с 19 апартаментами.",
    bullets: [
      "Спроектировала цифровое направление вокруг поиска апартаментов, доступности, цен, вопросов гостей и booking actions.",
      "Создала информационную архитектуру, логику responsive website и модель презентации отдельных апартаментов.",
      "Сформировала единую айдентику для сайта, социальных сетей, клиентских touchpoints и физических материалов.",
      "Управляла презентацией апартаментов на rental platforms и улучшила понятность предложений, правил, amenities и availability.",
      "Работала с guest communication, booking coordination, check-in support и операционным фидбеком, усиливая UX реальным поведением клиентов."
    ]
  }
];

cvCopy.ru.commercial = [
  ["ECO HAIR LAB", "Beauty · E-commerce · Education", "Спроектировала премиальную цифровую экосистему для beauty-бизнеса в Великобритании: services, appointments, professional products, educational courses и owner-managed content."],
  ["MARGARETKA", "Retail · Floristry · Website Redesign", "Переделала сайт цветочного бизнеса в более премиальный, эмоциональный и коммерчески понятный customer-facing experience с сохранением характера продуктов."],
  ["ARCED Construction", "Construction · Corporate Website", "Реализовала полный сайт канадской строительной компании с service hierarchy, lead-generation paths, responsive layouts и production deployment."],
  ["ARCED Tile", "Renovation · Service Website", "Спроектировала и реализовала коммерческий сайт для канадского tile and renovation бизнеса: IA, responsive UI и enquiry flow."]
].map(([name, type, copy]) => ({ name, type, copy }));

cvCopy.ru.portfolio = [
  ["NovaHQ", "B2B SaaS Product Design", "Спроектировала dashboard для business management: analytics, customers, subscriptions, projects и reporting с ясной навигацией для сложных данных."],
  ["Ellis Bank", "Fintech Mobile Product", "Создала luxury private-banking mobile concept про доверие, баланс, переводы, upcoming payments и refined financial interaction."],
  ["Lucent Dentistry", "Healthcare Website", "Спроектировала премиальный сайт стоматологической клиники вокруг patient trust, treatment discovery, specialists, прозрачной информации и appointment conversion."],
  ["LVL HOME", "Real Estate UX", "Создала interactive luxury residential discovery experience с building navigation, filters, availability states, floor plans и conversion paths."],
  ["Tavola Nostra", "Hospitality Website", "Спроектировала премиальный сайт итальянского ресторана, соединяя menu storytelling, atmosphere, editorial composition и reservation-oriented UX."],
  ["Atelier Aureline", "Luxury Service Website", "Создала high-end сайт tattoo-industry, позиционируя tattooing как artistic luxury service через portfolio storytelling и restrained interaction."],
  ["ELLIS Olfactory Office", "Scent Brand Website", "Построила refined fragrance concept website с контролируемым ритмом, curated product presentation и brand-led sensory storytelling."],
  ["Pelagea", "Editorial UX Case", "Создала immersive editorial experience с атмосферной навигацией, narrative pacing и ocean-inspired visual system."]
].map(([name, type, copy]) => ({ name, type, copy }));

cvCopy.ru.strengths = [
  ["End-to-End Ownership", "Могу вести проект от первой идеи до работающего готового цифрового продукта."],
  ["Commercial Thinking", "Связываю дизайн-решения с positioning, trust, conversion и бизнес-целями."],
  ["Strong Visual Direction", "Создаю выразительные визуальные системы вместо generic website conventions."],
  ["UX Structure", "Превращаю сложную или хаотичную информацию в понятные customer journeys."],
  ["Business Communication", "Работаю напрямую с founders и перевожу бизнес-язык в продуктовые решения."],
  ["Cross-Disciplinary Design", "Работаю с UX/UI, websites, branding, social media, print и customer touchpoints."],
  ["Practical Experience", "Операционный опыт помогает проектировать вокруг реального поведения клиентов."],
  ["Independence", "Могу работать самостоятельно и брать ответственность за решения."]
];

cvCopy.de.experience = [
  {
    company: "Unabhängige Designpraxis",
    role: "Freelance Product, UX/UI, Web & Brand Designer",
    date: "2022 - 2026",
    copy:
      "Ich lieferte vollständige digitale und visuelle Experiences für Unternehmen und unabhängige Kunden in Real Estate, Hospitality, Beauty, Construction, Retail und Services.",
    bullets: [
      "Ich führte Projekte von Business Requirements und Produktstruktur bis zu UX-Architektur, visueller Richtung, responsive UI, Umsetzung und finaler Übergabe.",
      "Ich übersetzte unvollständige Kundenideen in klare Website-Strukturen, Customer Journeys und kommerziell nutzbare digitale Systeme.",
      "Ich gestaltete responsive Websites, E-commerce Flows, Booking Experiences, Property Discovery, Service-Selection Journeys und Admin Interfaces.",
      "Ich erstellte Logos, Brand Assets, Visitenkarten, Banner, Social Visuals und Präsentationen, wenn ein Unternehmen ein breiteres visuelles System brauchte.",
      "Ich übernahm Frontend-Umsetzung, Formulare, responsive Verhalten, Hosting, Domains und Deployment, wenn es zum Projekt gehörte."
    ]
  },
  {
    company: "Maria Apartments / Maria Residences",
    role: "Product Designer · UX/UI Designer · Web Designer · Brand Designer · Business Operations Manager",
    date: "2026",
    copy:
      "Ich schloss ein vollständiges digitales, Marken- und Operations-Designsystem für ein ukrainisches Apartment-Vermietungsunternehmen mit etwa 19 Apartments ab.",
    bullets: [
      "Ich gestaltete die digitale Richtung rund um Apartment Discovery, Verfügbarkeit, Preise, Gästefragen und Booking Actions.",
      "Ich entwickelte Informationsarchitektur, responsive Website-Logik und ein Präsentationsmodell für einzelne Apartments.",
      "Ich schuf eine konsistente Identität für Website, Social Media, Customer Touchpoints und physische Materialien.",
      "Ich betreute die Präsentation der Apartments auf Rental Platforms und verbesserte Verständlichkeit von Angeboten, Regeln, Amenities und Availability.",
      "Ich arbeitete mit Guest Communication, Booking Coordination, Check-in Support und operativem Feedback, wodurch UX auf realem Kundenverhalten basierte."
    ]
  }
];

cvCopy.de.commercial = [
  ["ECO HAIR LAB", "Beauty · E-commerce · Education", "Ich gestaltete ein Premium Digital Ecosystem für ein UK Beauty Business mit Services, Terminen, professionellen Produkten, Kursen und owner-managed content."],
  ["MARGARETKA", "Retail · Floristry · Website Redesign", "Ich redesignte eine Floristik-Website zu einer hochwertigeren, emotionaleren und kommerziell klareren Customer-facing Experience, ohne den Produktcharakter zu verlieren."],
  ["ARCED Construction", "Construction · Corporate Website", "Ich lieferte eine vollständige Website für ein kanadisches Bauunternehmen mit Service Hierarchy, Lead-generation Paths, responsive Layouts und Production Deployment."],
  ["ARCED Tile", "Renovation · Service Website", "Ich gestaltete und implementierte eine kommerzielle Website für ein kanadisches Tile-and-Renovation Business mit IA, responsive UI und Enquiry Flow."]
].map(([name, type, copy]) => ({ name, type, copy }));

cvCopy.de.portfolio = [
  ["NovaHQ", "B2B SaaS Product Design", "Ich gestaltete ein Business-Management Dashboard für Analytics, Customers, Subscriptions, Projects und Reporting mit klarer Navigation für komplexe Daten."],
  ["Ellis Bank", "Fintech Mobile Product", "Ich erstellte ein Luxury Private-Banking Mobile Concept mit Fokus auf Vertrauen, Balance Visibility, Transfers, Upcoming Payments und refined financial interaction."],
  ["Lucent Dentistry", "Healthcare Website", "Ich gestaltete eine Premium-Website für eine Zahnklinik rund um Patient Trust, Treatment Discovery, Specialists, klare Informationen und Appointment Conversion."],
  ["LVL HOME", "Real Estate UX", "Ich entwickelte eine Interactive Luxury Residential Discovery Experience mit Building Navigation, Filters, Availability States, Floor Plans und Conversion Paths."],
  ["Tavola Nostra", "Hospitality Website", "Ich gestaltete eine Premium Experience für ein italienisches Restaurant mit Menu Storytelling, Atmosphäre, Editorial Composition und Reservation-oriented UX."],
  ["Atelier Aureline", "Luxury Service Website", "Ich entwickelte eine High-end Website für die Tattoo Industry und positionierte Tattooing als Artistic Luxury Service durch Portfolio Storytelling und restrained interaction."],
  ["ELLIS Olfactory Office", "Scent Brand Website", "Ich baute eine refined fragrance concept website mit kontrolliertem Rhythmus, curated product presentation und brand-led sensory storytelling."],
  ["Pelagea", "Editorial UX Case", "Ich gestaltete eine immersive editorial experience mit atmosphärischer Navigation, narrative pacing und ocean-inspired visual system."]
].map(([name, type, copy]) => ({ name, type, copy }));

cvCopy.de.strengths = [
  ["End-to-End Ownership", "Ich kann ein Projekt von der ersten Idee bis zum funktionierenden fertigen digitalen Produkt führen."],
  ["Commercial Thinking", "Ich verbinde Designentscheidungen mit Positioning, Trust, Conversion und Business-Zielen."],
  ["Strong Visual Direction", "Ich entwickle eigenständige visuelle Systeme statt generischer Website-Konventionen."],
  ["UX Structure", "Ich übersetze komplexe oder unklare Informationen in verständliche Customer Journeys."],
  ["Business Communication", "Ich arbeite direkt mit Founders und übersetze Business-Sprache in Produktentscheidungen."],
  ["Cross-Disciplinary Design", "Meine Arbeit verbindet UX/UI, Websites, Branding, Social Media, Print und Customer Touchpoints."],
  ["Practical Experience", "Operative Erfahrung hilft mir, rund um reales Kundenverhalten zu gestalten."],
  ["Independence", "Ich kann selbstständig arbeiten und Verantwortung für Entscheidungen übernehmen."]
];

const root = document.querySelector("#cvRoot");
const languageButtons = document.querySelectorAll(".language-button");
const navLinks = document.querySelectorAll("[data-nav]");

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem(languageKey);
  return supportedLanguages.includes(savedLanguage) ? savedLanguage : "en";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderMeta(items) {
  return items
    .map(
      ([label, value]) => `
        <div class="cv-meta-item">
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
        </div>
      `
    )
    .join("");
}

function renderPills(items) {
  return `<div class="pill-grid">${items.map((item) => `<span class="pill">${escapeHtml(item)}</span>`).join("")}</div>`;
}

function renderExperience(items) {
  return `
    <div class="experience-list">
      ${items
        .map(
          (item) => `
            <article class="experience-card">
              <div class="experience-top">
                <div>
                  <h3>${escapeHtml(item.company)}</h3>
                  <p class="experience-role">${escapeHtml(item.role)}</p>
                </div>
                <span class="experience-date">${escapeHtml(item.date)}</span>
              </div>
              <p class="experience-copy">${escapeHtml(item.copy)}</p>
              <ul class="bullet-list">
                ${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
              </ul>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderProjectGrid(items) {
  return `
    <div class="project-grid">
      ${items
        .map(
          (item) => `
            <article class="project-card">
              <p class="project-type">${escapeHtml(item.type)}</p>
              <h3>${escapeHtml(item.name)}</h3>
              <p>${escapeHtml(item.copy)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderStrengths(items) {
  return `
    <div class="strength-grid">
      ${items
        .map(
          ([title, text]) => `
            <article class="strength-card">
              <h3>${escapeHtml(title)}</h3>
              <p>${escapeHtml(text)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function section(kicker, title, intro, content) {
  return `
    <section class="cv-section">
      <div class="section-head">
        <p class="section-kicker">${escapeHtml(kicker)}</p>
        <div>
          <h2>${escapeHtml(title)}</h2>
          <p>${escapeHtml(intro)}</p>
        </div>
      </div>
      ${content}
    </section>
  `;
}

function render(language) {
  const copy = cvCopy[language] || cvCopy.en;

  document.documentElement.lang = language;
  document.title = copy.title;
  localStorage.setItem(languageKey, language);

  navLinks.forEach((link) => {
    const key = link.dataset.nav;
    link.textContent = copy.nav[key] || cvCopy.en.nav[key];
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  root.innerHTML = `
    <section class="cv-hero">
      <div>
        <p class="eyebrow">${escapeHtml(copy.eyebrow)}</p>
        <h1 class="cv-title">${escapeHtml(copy.name)}</h1>
        <p class="cv-role">${escapeHtml(copy.role)}</p>
        <p class="cv-summary">${escapeHtml(copy.summary)}</p>
      </div>
      <aside class="cv-meta" aria-label="CV details">
        ${renderMeta(copy.meta)}
      </aside>
    </section>

    ${section("01", copy.expertiseTitle, copy.expertiseIntro, renderPills(copy.expertise))}
    ${section("02", copy.toolsTitle, copy.toolsIntro, renderPills(copy.tools))}
    ${section("03", copy.experienceTitle, copy.experienceIntro, renderExperience(copy.experience))}
    ${section("04", copy.commercialTitle, copy.commercialIntro, renderProjectGrid(copy.commercial))}
    ${section("05", copy.portfolioTitle, copy.portfolioIntro, renderProjectGrid(copy.portfolio))}
    ${section("06", copy.strengthsTitle, copy.strengthsIntro, renderStrengths(copy.strengths))}
    ${section("07", copy.languagesTitle, copy.languagesIntro, renderPills(copy.languagesIntro.split(" · ")))}

    <section class="cv-section">
      <div class="section-head">
        <p class="section-kicker">08</p>
        <div>
          <h2>${escapeHtml(copy.contactTitle)}</h2>
        </div>
      </div>
      <div class="contact-panel">
        <p class="contact-copy">${escapeHtml(copy.contactText)}</p>
        <div class="contact-links">
          <a href="mailto:oh.yanyoellis@gmail.com"><span>${escapeHtml(copy.contactLabels.email)}</span><strong>oh.yanyoellis@gmail.com</strong></a>
          <a href="https://t.me/ohyanyo" target="_blank" rel="noreferrer"><span>${escapeHtml(copy.contactLabels.telegram)}</span><strong>@ohyanyo</strong></a>
          <a href="https://www.instagram.com/oh.yanyo/#" target="_blank" rel="noreferrer"><span>${escapeHtml(copy.contactLabels.instagram)}</span><strong>@oh.yanyo</strong></a>
        </div>
      </div>
    </section>
  `;
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => render(button.dataset.lang));
});

render(getInitialLanguage());
