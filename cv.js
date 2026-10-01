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

const anonymizedContent = {
  en: {
    summary:
      "UX/UI, product and web designer with four years of professional design experience across websites, digital products, brand systems and customer-facing business experiences. I have worked with bars, restaurants, boutiques, online stores, beauty services, rental businesses, construction companies, clinics, small local businesses, service providers and digital products, turning unclear business needs into finished, commercially usable design systems.",
    meta: [
      ["Location", "Ukraine · Remote"],
      ["Availability", "Full-time · Contract · Freelance"],
      ["Focus", "UX/UI · Web Design · Product Design · Brand Systems"],
      ["Contact", "oh.yanyoellis@gmail.com · @ohyanyo"]
    ],
    experience: [
      {
        company: "Independent Digital Design Practice",
        role: "Freelance Product, UX/UI, Web & Brand Designer",
        date: "2022 - 2026",
        copy:
          "Delivered finished digital products, commercial websites, brand systems and customer-facing experiences for small and medium businesses across hospitality, retail, beauty, real estate, construction, healthcare and service industries.",
        bullets: [
          "Created websites and visual systems for bars, restaurants and hospitality businesses where the key problem was weak positioning, unclear menus, poor booking paths and no emotional brand atmosphere online.",
          "Designed online stores, boutique websites and retail experiences where product discovery, category logic, product presentation, trust signals and checkout clarity were the main commercial priorities.",
          "Built digital experiences for small businesses that had scattered ideas, inconsistent branding and no clear customer journey, turning them into structured websites with clear offers, content hierarchy and conversion paths.",
          "Designed booking, enquiry and service-selection journeys for beauty, wellness, rental, renovation and local-service businesses where customers needed to understand options quickly and contact the business without friction.",
          "Created logos, brand directions, social media systems, business cards, banners, presentation materials and supporting print assets so each business could keep one consistent identity across digital and physical touchpoints.",
          "Handled responsive UI, front-end implementation, forms, hosting, domains and deployment details when the project required full delivery rather than design files only."
        ]
      },
      {
        company: "Rental & Guest Experience Business",
        role: "Product Designer · UX/UI Designer · Web Designer · Brand Designer · Business Operations Manager",
        date: "2026",
        copy:
          "Completed a full digital, brand and operational design system for a short-term and medium-term apartment-rental business, connecting customer research, property presentation, booking logic and real operational workflows.",
        bullets: [
          "Solved the problem of a large property portfolio being difficult to compare by creating a clearer apartment-discovery structure with filters, availability logic, pricing context and individual property pages.",
          "Restructured how customers understand rules, amenities, location, guest capacity and booking conditions, reducing repeated questions and making the offer easier to evaluate.",
          "Created a consistent visual identity for website, social media, guest materials, branded key tags and other physical customer touchpoints.",
          "Improved listing presentation across rental platforms so property information stayed accurate, commercially attractive and consistent with the business identity.",
          "Worked with real guest communication, booking coordination, check-in support and operational feedback, which made the UX decisions practical rather than theoretical."
        ]
      }
    ],
    commercial: [
      {
        name: "Premium Beauty & Education Business",
        type: "Beauty · E-commerce · Booking · Courses",
        copy:
          "The business needed to combine services, appointments, professional products and education without making the website feel fragmented. I created a premium eco-oriented structure with separate journeys for booking treatments, buying products and purchasing courses, plus owner-friendly content management logic."
      },
      {
        name: "Flower Boutique & Gift Store",
        type: "Retail · Floristry · Online Store",
        copy:
          "The original digital presentation felt less premium than the products. I redesigned the customer experience around bouquet discovery, emotional product presentation, clearer categories, better visual hierarchy and a more gift-oriented purchase path."
      },
      {
        name: "Bar & Cocktail Concept",
        type: "Gastronomia · Brand Experience · Reservations",
        copy:
          "The venue needed a digital identity that could communicate atmosphere before a guest arrived. I shaped the website around mood, menu discovery, events, table reservation logic and a stronger visual language suitable for nightlife and social sharing."
      },
      {
        name: "Independent Fashion & Lifestyle Store",
        type: "Retail · E-commerce · Brand System",
        copy:
          "The store needed to move from a simple product list to a brand-led shopping experience. I structured category navigation, product cards, campaign visuals, trust elements and mobile-first purchase decisions."
      },
      {
        name: "Construction & Renovation Service",
        type: "Service Website · Lead Generation",
        copy:
          "The company needed credibility and clearer service explanation. I built a service hierarchy, project-oriented content flow, enquiry paths, responsive layouts and a more professional visual system for customers comparing contractors."
      },
      {
        name: "Local Service Businesses",
        type: "Small Business · Websites · Identity",
        copy:
          "For small businesses with limited materials, I created complete digital foundations: offer structure, homepage logic, service descriptions, contact journeys, social visuals and simple brand systems that made the business look established and trustworthy."
      }
    ],
    portfolio: [
      {
        name: "B2B SaaS Management Dashboard",
        type: "Product Design · Analytics · Reporting",
        copy:
          "Designed a business-management dashboard for revenue analytics, customers, subscriptions, projects and reporting, solving the problem of dense operational data through clear navigation, scanable metrics and reusable interface patterns."
      },
      {
        name: "Private-Banking Mobile App",
        type: "Fintech · Mobile Product",
        copy:
          "Created a luxury mobile banking experience focused on trust, balance visibility, transfers, upcoming payments and premium financial interaction, balancing elegance with practical money-management clarity."
      },
      {
        name: "Premium Dental Clinic Website",
        type: "Healthcare · Trust · Appointment UX",
        copy:
          "Designed a clinic website around patient trust, treatment discovery, specialists, pricing clarity and appointment intent, making medical information feel calm, credible and easy to act on."
      },
      {
        name: "Luxury Real Estate Discovery Platform",
        type: "Real Estate · Filtering · Property UX",
        copy:
          "Designed an interactive property-discovery experience with building navigation, filters, availability states, floor plans and conversion paths for users comparing apartments by practical criteria."
      },
      {
        name: "Italian Restaurant Website",
        type: "Gastronomia · Menu · Reservations",
        copy:
          "Designed a restaurant experience combining menu storytelling, atmosphere, editorial composition and reservation-oriented UX so visitors could understand the mood, food and booking path quickly."
      },
      {
        name: "Luxury Tattoo Studio Website",
        type: "Art Service · Portfolio · Booking",
        copy:
          "Created a high-end tattoo service website that positioned the studio as an artistic luxury experience through portfolio storytelling, artist presentation, restrained interaction and clear booking intent."
      },
      {
        name: "Fragrance Brand Website",
        type: "Luxury Product · Editorial Commerce",
        copy:
          "Built a refined fragrance concept website with controlled visual rhythm, curated product presentation and sensory storytelling that translated an intangible scent product into a digital experience."
      },
      {
        name: "Editorial Ocean Experience",
        type: "Editorial UX · Immersive Storytelling",
        copy:
          "Designed an immersive editorial experience with atmospheric navigation, narrative pacing and an ocean-inspired visual system, showing how interface design can support mood and long-form storytelling."
      }
    ]
  },
  uk: {
    summary:
      "UX/UI, product і web designer з чотирма роками професійного досвіду в дизайні сайтів, цифрових продуктів, бренд-систем і клієнтських бізнес-досвідів. Я працювала з барами, ресторанами, бутиками, онлайн-магазинами, beauty-сервісами, орендним бізнесом, будівельними компаніями, клініками, локальними малими бізнесами, сервісними компаніями та цифровими продуктами, перетворюючи нечіткі бізнес-потреби на готові комерційно придатні дизайн-системи.",
    meta: [
      ["Локація", "Україна · Remote"],
      ["Формат", "Full-time · Contract · Freelance"],
      ["Фокус", "UX/UI · Web Design · Product Design · Brand Systems"],
      ["Контакт", "oh.yanyoellis@gmail.com · @ohyanyo"]
    ],
    experience: [
      {
        company: "Незалежна практика digital design",
        role: "Freelance Product, UX/UI, Web & Brand Designer",
        date: "2022 - 2026",
        copy:
          "Реалізувала готові цифрові продукти, комерційні сайти, бренд-системи та customer-facing experiences для малих і середніх бізнесів у hospitality, retail, beauty, real estate, construction, healthcare і service industries.",
        bullets: [
          "Створювала сайти й візуальні системи для барів, ресторанів і hospitality-бізнесів, де проблемою були слабке позиціонування, нечітке меню, незручне бронювання й відсутність атмосфери бренду онлайн.",
          "Проєктувала онлайн-магазини, boutique websites і retail experiences, де важливими були product discovery, category logic, product presentation, trust signals і зрозумілий checkout.",
          "Будувала digital experiences для малих бізнесів з розрізненими ідеями, непослідовним branding і відсутністю customer journey, перетворюючи їх на структуровані сайти з чіткою пропозицією й conversion paths.",
          "Проєктувала booking, enquiry і service-selection journeys для beauty, wellness, rental, renovation і local-service businesses, щоб клієнти швидко розуміли опції й легко зв'язувалися з бізнесом.",
          "Створювала логотипи, brand directions, social media systems, business cards, banners, presentations і print assets, щоб бізнес мав єдину айдентику в digital і physical touchpoints.",
          "Працювала з responsive UI, front-end implementation, forms, hosting, domains і deployment, коли потрібна була повна реалізація, а не лише дизайн-файли."
        ]
      },
      {
        company: "Бізнес оренди та guest experience",
        role: "Product Designer · UX/UI Designer · Web Designer · Brand Designer · Business Operations Manager",
        date: "2026",
        copy:
          "Завершила повну digital, brand і operational design system для бізнесу коротко- та середньострокової оренди апартаментів, поєднавши customer research, property presentation, booking logic і реальні операційні процеси.",
        bullets: [
          "Вирішила проблему складного порівняння великого портфоліо об'єктів через чіткішу структуру apartment discovery з filters, availability logic, pricing context і окремими property pages.",
          "Переструктурувала пояснення rules, amenities, location, guest capacity і booking conditions, щоб зменшити повторні питання й зробити пропозицію легшою для оцінки.",
          "Створила єдину айдентику для сайту, social media, guest materials, branded key tags та інших physical customer touchpoints.",
          "Покращила презентацію listings на rental platforms, щоб інформація залишалася точною, комерційно привабливою й узгодженою з айдентикою бізнесу.",
          "Працювала з real guest communication, booking coordination, check-in support і operational feedback, тому UX-рішення були практичними, а не теоретичними."
        ]
      }
    ]
  },
  pl: {
    summary:
      "Projektantka UX/UI, product i web z czteroletnim doświadczeniem w projektowaniu stron, produktów cyfrowych, systemów marki i doświadczeń klienta. Pracowałam z barami, restauracjami, butikami, sklepami online, usługami beauty, biznesami wynajmu, firmami budowlanymi, klinikami, małymi lokalnymi biznesami, usługodawcami i produktami cyfrowymi, zamieniając niejasne potrzeby biznesowe w gotowe, komercyjnie użyteczne systemy projektowe.",
    meta: [
      ["Lokalizacja", "Ukraina · Remote"],
      ["Forma współpracy", "Full-time · Contract · Freelance"],
      ["Fokus", "UX/UI · Web Design · Product Design · Brand Systems"],
      ["Kontakt", "oh.yanyoellis@gmail.com · @ohyanyo"]
    ],
    experience: [
      {
        company: "Niezależna praktyka digital design",
        role: "Freelance Product, UX/UI, Web & Brand Designer",
        date: "2022 - 2026",
        copy:
          "Dostarczałam ukończone produkty cyfrowe, strony komercyjne, systemy marki i customer-facing experiences dla małych oraz średnich firm z branż hospitality, retail, beauty, real estate, construction, healthcare i services.",
        bullets: [
          "Tworzyłam strony i systemy wizualne dla barów, restauracji i hospitality businesses, gdzie problemem było słabe pozycjonowanie, nieczytelne menu, trudna rezerwacja i brak atmosfery marki online.",
          "Projektowałam sklepy online, boutique websites i retail experiences, gdzie kluczowe były product discovery, category logic, product presentation, trust signals i przejrzysty checkout.",
          "Budowałam digital experiences dla małych biznesów z rozproszonymi pomysłami, niespójnym brandingiem i brakiem customer journey, zamieniając je w uporządkowane strony z jasną ofertą i conversion paths.",
          "Projektowałam booking, enquiry i service-selection journeys dla beauty, wellness, rental, renovation i local-service businesses, aby klienci szybko rozumieli opcje i łatwo kontaktowali się z firmą.",
          "Tworzyłam logo, brand directions, social media systems, business cards, banners, presentations i print assets, aby firma miała spójną identyfikację w digital i physical touchpoints.",
          "Pracowałam z responsive UI, front-end implementation, forms, hosting, domains i deployment, gdy projekt wymagał pełnej realizacji, nie tylko plików projektowych."
        ]
      },
      {
        company: "Biznes wynajmu i guest experience",
        role: "Product Designer · UX/UI Designer · Web Designer · Brand Designer · Business Operations Manager",
        date: "2026",
        copy:
          "Ukończyłam pełny digital, brand i operational design system dla biznesu wynajmu apartamentów, łącząc customer research, property presentation, booking logic i realne procesy operacyjne.",
        bullets: [
          "Rozwiązałam problem trudnego porównywania dużego portfolio lokali przez klarowniejszą strukturę apartment discovery z filters, availability logic, pricing context i osobnymi property pages.",
          "Przebudowałam sposób wyjaśniania rules, amenities, location, guest capacity i booking conditions, aby zmniejszyć liczbę powtarzalnych pytań i ułatwić ocenę oferty.",
          "Stworzyłam spójną identyfikację dla strony, social media, guest materials, branded key tags i innych physical customer touchpoints.",
          "Poprawiłam prezentację listings na rental platforms, aby informacje były dokładne, komercyjnie atrakcyjne i zgodne z identyfikacją biznesu.",
          "Pracowałam z real guest communication, booking coordination, check-in support i operational feedback, dzięki czemu decyzje UX były praktyczne, a nie teoretyczne."
        ]
      }
    ]
  },
  ru: {
    summary:
      "UX/UI, product и web designer с четырьмя годами профессионального опыта в дизайне сайтов, цифровых продуктов, бренд-систем и клиентских бизнес-опытов. Я работала с барами, ресторанами, бутиками, онлайн-магазинами, beauty-сервисами, бизнесами аренды, строительными компаниями, клиниками, маленькими локальными бизнесами, сервисными компаниями и цифровыми продуктами, превращая неясные бизнес-задачи в готовые коммерчески применимые дизайн-системы.",
    meta: [
      ["Локация", "Украина · Remote"],
      ["Формат", "Full-time · Contract · Freelance"],
      ["Фокус", "UX/UI · Web Design · Product Design · Brand Systems"],
      ["Контакт", "oh.yanyoellis@gmail.com · @ohyanyo"]
    ],
    experience: [
      {
        company: "Независимая практика digital design",
        role: "Freelance Product, UX/UI, Web & Brand Designer",
        date: "2022 - 2026",
        copy:
          "Реализовала готовые цифровые продукты, коммерческие сайты, бренд-системы и клиентские цифровые сценарии для малых и средних бизнесов в сфере гостеприимства, розницы, beauty, недвижимости, строительства, медицины и услуг.",
        bullets: [
          "Создавала сайты и визуальные системы для баров, ресторанов и бизнесов в сфере гостеприимства, где главными проблемами были слабое позиционирование, неясное меню, неудобное бронирование и отсутствие атмосферы бренда онлайн.",
          "Проектировала онлайн-магазины, сайты бутиков и розничные цифровые витрины, где были важны поиск товара, логика категорий, презентация продукта, сигналы доверия и понятное оформление заказа.",
          "Строила цифровой опыт для маленьких бизнесов с разрозненными идеями, непоследовательным брендингом и отсутствием клиентского пути, превращая их в структурированные сайты с понятным предложением и путями к заявке.",
          "Проектировала сценарии записи, заявки и выбора услуги для beauty, wellness, rental, renovation и локальных сервисных бизнесов, чтобы клиенты быстро понимали варианты и легко связывались с бизнесом.",
          "Создавала логотипы, визуальные направления, системы для социальных сетей, визитки, баннеры, презентации и печатные материалы, чтобы у бизнеса была единая айдентика в цифровых и физических точках контакта.",
          "Работала с адаптивным UI, front-end реализацией, формами, хостингом, доменами и деплоем, когда проекту нужна была полная реализация, а не только дизайн-файлы."
        ]
      },
      {
        company: "Бизнес аренды и guest experience",
        role: "Product Designer · UX/UI Designer · Web Designer · Brand Designer · Business Operations Manager",
        date: "2026",
        copy:
          "Завершила полную цифровую, бренд- и операционную дизайн-систему для бизнеса аренды апартаментов, соединив исследование клиентов, презентацию объектов, логику бронирования и реальные операционные процессы.",
        bullets: [
          "Решила проблему сложного сравнения большого портфолио объектов через более понятную структуру поиска апартаментов с фильтрами, логикой доступности, ценовым контекстом и отдельными страницами объектов.",
          "Перестроила объяснение правил, удобств, локации, вместимости и условий бронирования, чтобы уменьшить повторяющиеся вопросы и сделать предложение проще для оценки.",
          "Создала единую айдентику для сайта, социальных сетей, гостевых материалов, брендированных ключевых тегов и других физических точек контакта с клиентом.",
          "Улучшила презентацию объявлений на платформах аренды, чтобы информация оставалась точной, коммерчески привлекательной и согласованной с айдентикой бизнеса.",
          "Работала с реальной коммуникацией с гостями, координацией бронирований, поддержкой заселения и операционным фидбеком, поэтому UX-решения были практическими, а не теоретическими."
        ]
      }
    ]
  },
  de: {
    summary:
      "UX/UI, Product und Web Designerin mit vier Jahren professioneller Designerfahrung in Websites, digitalen Produkten, Markensystemen und kundennahen Business Experiences. Ich habe mit Bars, Restaurants, Boutiquen, Online-Shops, Beauty Services, Vermietungsunternehmen, Bauunternehmen, Kliniken, kleinen lokalen Unternehmen, Service Businesses und digitalen Produkten gearbeitet und unklare Business Needs in fertige, kommerziell nutzbare Designsysteme übersetzt.",
    meta: [
      ["Standort", "Ukraine · Remote"],
      ["Verfügbarkeit", "Full-time · Contract · Freelance"],
      ["Fokus", "UX/UI · Web Design · Product Design · Brand Systems"],
      ["Kontakt", "oh.yanyoellis@gmail.com · @ohyanyo"]
    ],
    experience: [
      {
        company: "Unabhängige Digital-Design-Praxis",
        role: "Freelance Product, UX/UI, Web & Brand Designer",
        date: "2022 - 2026",
        copy:
          "Ich lieferte fertige digitale Produkte, kommerzielle Websites, Markensysteme und customer-facing experiences für kleine und mittlere Unternehmen in Hospitality, Retail, Beauty, Real Estate, Construction, Healthcare und Services.",
        bullets: [
          "Ich erstellte Websites und visuelle Systeme für Bars, Restaurants und Hospitality Businesses, bei denen schwaches Positioning, unklare Menüs, schwierige Reservierung und fehlende Online-Atmosphäre die Hauptprobleme waren.",
          "Ich gestaltete Online-Shops, Boutique Websites und Retail Experiences, bei denen Product Discovery, Category Logic, Product Presentation, Trust Signals und klare Checkout-Flows entscheidend waren.",
          "Ich baute digital experiences für kleine Unternehmen mit verstreuten Ideen, inkonsistentem Branding und fehlender Customer Journey und machte daraus strukturierte Websites mit klaren Angeboten und Conversion Paths.",
          "Ich gestaltete Booking, Enquiry und Service-Selection Journeys für Beauty, Wellness, Rental, Renovation und Local-Service Businesses, damit Kunden Optionen schnell verstehen und leicht Kontakt aufnehmen konnten.",
          "Ich entwickelte Logos, Brand Directions, Social Media Systems, Business Cards, Banners, Presentations und Print Assets, damit Unternehmen eine konsistente Identität über digitale und physische Touchpoints haben.",
          "Ich arbeitete mit responsive UI, Frontend Implementation, Forms, Hosting, Domains und Deployment, wenn ein Projekt vollständige Lieferung statt nur Design Files erforderte."
        ]
      },
      {
        company: "Rental & Guest Experience Business",
        role: "Product Designer · UX/UI Designer · Web Designer · Brand Designer · Business Operations Manager",
        date: "2026",
        copy:
          "Ich schloss ein vollständiges digital, brand und operational design system für ein Apartment-Vermietungsunternehmen ab und verband Customer Research, Property Presentation, Booking Logic und echte operative Workflows.",
        bullets: [
          "Ich löste das Problem eines schwer vergleichbaren großen Objektportfolios durch eine klarere Apartment-Discovery-Struktur mit Filters, Availability Logic, Pricing Context und einzelnen Property Pages.",
          "Ich strukturierte Rules, Amenities, Location, Guest Capacity und Booking Conditions neu, um wiederholte Fragen zu reduzieren und Angebote leichter bewertbar zu machen.",
          "Ich entwickelte eine konsistente Identität für Website, Social Media, Guest Materials, Branded Key Tags und andere physical customer touchpoints.",
          "Ich verbesserte Listing Presentation auf Rental Platforms, damit Informationen akkurat, kommerziell attraktiv und konsistent mit der Business Identity blieben.",
          "Ich arbeitete mit realer Guest Communication, Booking Coordination, Check-in Support und Operational Feedback, wodurch UX-Entscheidungen praktisch statt theoretisch wurden."
        ]
      }
    ]
  }
};

const sharedAnonymousCommercial = {
  uk: [
    ["Преміальний beauty та education бізнес", "Beauty · E-commerce · Booking · Courses", "Бізнесу потрібно було поєднати services, appointments, professional products і education без відчуття розрізненого сайту. Я створила premium eco-oriented structure з окремими journeys для booking treatments, product purchase і course purchase, а також логікою owner-friendly content management."],
    ["Квітковий бутик і gift store", "Retail · Floristry · Online Store", "Початкова digital presentation виглядала менш преміально, ніж продукти. Я переробила customer experience навколо bouquet discovery, emotional product presentation, зрозуміліших categories, кращої visual hierarchy і gift-oriented purchase path."],
    ["Бар і cocktail concept", "Gastronomia · Brand Experience · Reservations", "Закладу потрібна була digital identity, яка передає атмосферу до першого візиту. Я побудувала сайт навколо mood, menu discovery, events, table reservation logic і сильнішої visual language для nightlife та social sharing."],
    ["Незалежний fashion і lifestyle store", "Retail · E-commerce · Brand System", "Магазину потрібно було перейти від простого списку товарів до brand-led shopping experience. Я структурувала category navigation, product cards, campaign visuals, trust elements і mobile-first purchase decisions."],
    ["Construction і renovation service", "Service Website · Lead Generation", "Компанії потрібні були credibility і чіткіше пояснення послуг. Я створила service hierarchy, project-oriented content flow, enquiry paths, responsive layouts і професійнішу visual system для клієнтів, які порівнюють підрядників."],
    ["Локальні service businesses", "Small Business · Websites · Identity", "Для малих бізнесів з обмеженими матеріалами я створювала повну digital foundation: offer structure, homepage logic, service descriptions, contact journeys, social visuals і прості brand systems, які робили бізнес надійним і зрілим."]
  ],
  pl: [
    ["Premium beauty i education business", "Beauty · E-commerce · Booking · Courses", "Firma musiała połączyć usługi, wizyty, profesjonalne produkty i edukację bez wrażenia fragmentacji strony. Stworzyłam premium eco-oriented structure z osobnymi journeys dla booking treatments, zakupu produktów i zakupu kursów oraz logiką owner-friendly content management."],
    ["Butik florystyczny i gift store", "Retail · Floristry · Online Store", "Pierwotna digital presentation wyglądała mniej premium niż produkty. Przebudowałam customer experience wokół bouquet discovery, emotional product presentation, czytelniejszych categories, lepszej visual hierarchy i gift-oriented purchase path."],
    ["Bar i cocktail concept", "Gastronomia · Brand Experience · Reservations", "Lokal potrzebował digital identity, która komunikuje atmosferę przed wizytą. Zbudowałam stronę wokół mood, menu discovery, events, table reservation logic i mocniejszego visual language dla nightlife oraz social sharing."],
    ["Niezależny fashion i lifestyle store", "Retail · E-commerce · Brand System", "Sklep potrzebował przejścia od prostej listy produktów do brand-led shopping experience. Uporządkowałam category navigation, product cards, campaign visuals, trust elements i mobile-first purchase decisions."],
    ["Construction i renovation service", "Service Website · Lead Generation", "Firma potrzebowała większej wiarygodności i jaśniejszego opisu usług. Stworzyłam service hierarchy, project-oriented content flow, enquiry paths, responsive layouts i bardziej profesjonalny visual system dla klientów porównujących wykonawców."],
    ["Lokalne service businesses", "Small Business · Websites · Identity", "Dla małych firm z ograniczonymi materiałami tworzyłam pełne digital foundations: offer structure, homepage logic, service descriptions, contact journeys, social visuals i proste brand systems, które sprawiały, że firma wyglądała dojrzale i godnie zaufania."]
  ],
  ru: [
    ["Премиальный beauty- и образовательный бизнес", "Beauty · E-commerce · Запись · Курсы", "Бизнесу нужно было объединить услуги, запись, профессиональные продукты и обучение без ощущения разрозненного сайта. Я создала премиальную eco-oriented структуру с отдельными сценариями для записи на процедуры, покупки продуктов и покупки курсов, а также с понятной логикой управления контентом для владельца."],
    ["Цветочный бутик и магазин подарков", "Розница · Флористика · Онлайн-магазин", "Изначальная цифровая презентация выглядела менее премиально, чем сами продукты. Я перестроила клиентский опыт вокруг выбора букетов, эмоциональной презентации товара, более понятных категорий, сильной визуальной иерархии и покупки в формате подарка."],
    ["Бар и коктейльный концепт", "Гостеприимство · Атмосфера бренда · Бронирование", "Заведению нужна была цифровая айдентика, которая передает атмосферу еще до первого визита. Я построила сайт вокруг настроения, изучения меню, событий, логики бронирования столов и более сильного визуального языка для ночной культуры и социальных сетей."],
    ["Независимый fashion и lifestyle магазин", "Розница · E-commerce · Бренд-система", "Магазину нужно было перейти от простого списка товаров к брендированному покупательскому опыту. Я структурировала навигацию по категориям, карточки товаров, кампейн-визуалы, элементы доверия и мобильный сценарий покупки."],
    ["Строительный и ремонтный сервис", "Сайт услуг · Генерация заявок", "Компании нужны были доверие и более понятное объяснение услуг. Я создала иерархию услуг, контентный поток вокруг проектов, пути к заявке, адаптивные макеты и более профессиональную визуальную систему для клиентов, которые сравнивают подрядчиков."],
    ["Локальные сервисные бизнесы", "Малый бизнес · Сайты · Айдентика", "Для маленьких бизнесов с ограниченными материалами я создавала полноценную цифровую основу: структуру предложения, логику главной страницы, описания услуг, пути контакта, визуалы для социальных сетей и простые бренд-системы, которые делали бизнес надежным и зрелым."]
  ],
  de: [
    ["Premium Beauty & Education Business", "Beauty · E-commerce · Booking · Courses", "Das Unternehmen musste Services, Termine, professionelle Produkte und Education verbinden, ohne dass die Website fragmentiert wirkte. Ich entwickelte eine premium eco-oriented structure mit getrennten Journeys für Booking Treatments, Product Purchase und Course Purchase sowie owner-friendly content management."],
    ["Flower Boutique & Gift Store", "Retail · Floristry · Online Store", "Die ursprüngliche digital presentation wirkte weniger premium als die Produkte. Ich strukturierte die Customer Experience rund um Bouquet Discovery, Emotional Product Presentation, klarere Categories, bessere Visual Hierarchy und einen gift-oriented purchase path neu."],
    ["Bar & Cocktail Concept", "Gastronomia · Brand Experience · Reservations", "Die Location brauchte eine digital identity, die Atmosphäre schon vor dem Besuch vermittelt. Ich gestaltete die Website rund um Mood, Menu Discovery, Events, Table Reservation Logic und eine stärkere Visual Language für Nightlife und Social Sharing."],
    ["Independent Fashion & Lifestyle Store", "Retail · E-commerce · Brand System", "Der Store musste von einer einfachen Produktliste zu einer brand-led shopping experience wechseln. Ich strukturierte Category Navigation, Product Cards, Campaign Visuals, Trust Elements und mobile-first purchase decisions."],
    ["Construction & Renovation Service", "Service Website · Lead Generation", "Das Unternehmen brauchte mehr Credibility und eine klarere Erklärung seiner Leistungen. Ich entwickelte Service Hierarchy, project-oriented content flow, enquiry paths, responsive layouts und ein professionelleres visual system für Kunden, die Anbieter vergleichen."],
    ["Local Service Businesses", "Small Business · Websites · Identity", "Für kleine Unternehmen mit begrenzten Materialien entwickelte ich vollständige digital foundations: offer structure, homepage logic, service descriptions, contact journeys, social visuals und einfache brand systems, die Vertrauen und Reife vermitteln."]
  ]
};

const sharedAnonymousPortfolio = {
  uk: [
    ["B2B SaaS management dashboard", "Product Design · Analytics · Reporting", "Спроєктувала dashboard для business management: revenue analytics, customers, subscriptions, projects і reporting. Рішення зменшило cognitive load через чітку navigation, scanable metrics і reusable interface patterns."],
    ["Private banking mobile app", "Fintech · Mobile Product", "Створила luxury mobile banking experience, сфокусований на trust, balance visibility, transfers, upcoming payments і premium financial interaction, поєднавши елегантність із практичною financial clarity."],
    ["Premium dental clinic website", "Healthcare · Trust · Appointment UX", "Спроєктувала сайт клініки навколо patient trust, treatment discovery, specialists, pricing clarity і appointment intent, щоб медична інформація була спокійною, credible і легкою для дії."],
    ["Luxury real estate discovery platform", "Real Estate · Filtering · Property UX", "Створила interactive property-discovery experience з building navigation, filters, availability states, floor plans і conversion paths для користувачів, які порівнюють apartments за практичними критеріями."],
    ["Italian restaurant website", "Gastronomia · Menu · Reservations", "Спроєктувала restaurant experience з menu storytelling, atmosphere, editorial composition і reservation-oriented UX, щоб visitors швидко розуміли mood, food і booking path."],
    ["Luxury tattoo studio website", "Art Service · Portfolio · Booking", "Створила high-end tattoo service website, який позиціонує studio як artistic luxury experience через portfolio storytelling, artist presentation, restrained interaction і clear booking intent."],
    ["Fragrance brand website", "Luxury Product · Editorial Commerce", "Побудувала refined fragrance concept website з controlled visual rhythm, curated product presentation і sensory storytelling, щоб intangible scent product працював як digital experience."],
    ["Editorial ocean experience", "Editorial UX · Immersive Storytelling", "Створила immersive editorial experience з atmospheric navigation, narrative pacing і ocean-inspired visual system, показуючи, як interface design підтримує mood і long-form storytelling."]
  ],
  pl: [
    ["B2B SaaS management dashboard", "Product Design · Analytics · Reporting", "Zaprojektowałam dashboard do business management: revenue analytics, customers, subscriptions, projects i reporting. Rozwiązanie zmniejszyło cognitive load dzięki clear navigation, scanable metrics i reusable interface patterns."],
    ["Private banking mobile app", "Fintech · Mobile Product", "Stworzyłam luxury mobile banking experience skupiony na trust, balance visibility, transfers, upcoming payments i premium financial interaction, łącząc elegancję z praktyczną financial clarity."],
    ["Premium dental clinic website", "Healthcare · Trust · Appointment UX", "Zaprojektowałam stronę kliniki wokół patient trust, treatment discovery, specialists, pricing clarity i appointment intent, aby informacje medyczne były spokojne, credible i łatwe do działania."],
    ["Luxury real estate discovery platform", "Real Estate · Filtering · Property UX", "Stworzyłam interactive property-discovery experience z building navigation, filters, availability states, floor plans i conversion paths dla użytkowników porównujących apartments według praktycznych kryteriów."],
    ["Italian restaurant website", "Gastronomia · Menu · Reservations", "Zaprojektowałam restaurant experience z menu storytelling, atmosphere, editorial composition i reservation-oriented UX, aby visitors szybko rozumieli mood, food i booking path."],
    ["Luxury tattoo studio website", "Art Service · Portfolio · Booking", "Stworzyłam high-end tattoo service website pozycjonujący studio jako artistic luxury experience przez portfolio storytelling, artist presentation, restrained interaction i clear booking intent."],
    ["Fragrance brand website", "Luxury Product · Editorial Commerce", "Zbudowałam refined fragrance concept website z controlled visual rhythm, curated product presentation i sensory storytelling, aby intangible scent product działał jako digital experience."],
    ["Editorial ocean experience", "Editorial UX · Immersive Storytelling", "Zaprojektowałam immersive editorial experience z atmospheric navigation, narrative pacing i ocean-inspired visual system, pokazując jak interface design wspiera mood i long-form storytelling."]
  ],
  ru: [
    ["B2B SaaS dashboard для управления бизнесом", "Product Design · Аналитика · Отчетность", "Спроектировала dashboard для управления бизнесом: revenue analytics, customers, subscriptions, projects и reporting. Решение уменьшило когнитивную нагрузку через понятную навигацию, легко считываемые метрики и переиспользуемые интерфейсные паттерны."],
    ["Мобильное приложение Private-Banking", "Fintech · Mobile Product", "Создала luxury mobile banking experience с фокусом на доверие, видимость баланса, переводы, предстоящие платежи и премиальное финансовое взаимодействие, сочетая элегантность с практичной финансовой ясностью."],
    ["Сайт премиальной стоматологической клиники", "Healthcare · Доверие · Запись на прием", "Спроектировала сайт клиники вокруг доверия пациента, изучения процедур, специалистов, понятной информации о ценах и намерения записаться, чтобы медицинская информация ощущалась спокойной, убедительной и простой для действия."],
    ["Платформа подбора премиальной недвижимости", "Недвижимость · Фильтры · Property UX", "Создала интерактивный опыт выбора недвижимости с навигацией по зданию, фильтрами, статусами доступности, планировками и путями к заявке для пользователей, которые сравнивают апартаменты по практическим критериям."],
    ["Сайт итальянского ресторана", "Гостеприимство · Меню · Бронирование", "Спроектировала restaurant experience с историей меню, атмосферой, editorial composition и reservation-oriented UX, чтобы посетители быстро понимали настроение места, кухню и путь к бронированию."],
    ["Сайт luxury tattoo studio", "Арт-сервис · Портфолио · Booking", "Создала high-end сайт для tattoo service, который позиционирует студию как artistic luxury experience через portfolio storytelling, презентацию мастеров, сдержанные взаимодействия и ясное намерение записи."],
    ["Сайт fragrance brand", "Luxury Product · Editorial Commerce", "Построила refined fragrance concept website с контролируемым визуальным ритмом, curated product presentation и sensory storytelling, чтобы нематериальный продукт вроде аромата работал как цифровой опыт."],
    ["Editorial ocean experience", "Editorial UX · Immersive Storytelling", "Создала immersive editorial experience с атмосферной навигацией, narrative pacing и ocean-inspired visual system, показывая, как interface design поддерживает настроение и long-form storytelling."]
  ],
  de: [
    ["B2B SaaS Management Dashboard", "Product Design · Analytics · Reporting", "Ich gestaltete ein Dashboard für Business Management: Revenue Analytics, Customers, Subscriptions, Projects und Reporting. Die Lösung reduzierte Cognitive Load durch klare Navigation, scanbare Metrics und reusable interface patterns."],
    ["Private Banking Mobile App", "Fintech · Mobile Product", "Ich entwickelte eine luxury mobile banking experience mit Fokus auf Trust, Balance Visibility, Transfers, Upcoming Payments und premium financial interaction, verbunden mit praktischer Financial Clarity."],
    ["Premium Dental Clinic Website", "Healthcare · Trust · Appointment UX", "Ich gestaltete eine Clinic Website rund um Patient Trust, Treatment Discovery, Specialists, Pricing Clarity und Appointment Intent, damit medizinische Informationen ruhig, credible und handlungsorientiert wirken."],
    ["Luxury Real Estate Discovery Platform", "Real Estate · Filtering · Property UX", "Ich entwickelte eine interactive property-discovery experience mit Building Navigation, Filters, Availability States, Floor Plans und Conversion Paths für Nutzer, die Apartments nach praktischen Kriterien vergleichen."],
    ["Italian Restaurant Website", "Gastronomia · Menu · Reservations", "Ich gestaltete eine restaurant experience mit Menu Storytelling, Atmosphere, Editorial Composition und reservation-oriented UX, damit Visitors Mood, Food und Booking Path schnell verstehen."],
    ["Luxury Tattoo Studio Website", "Art Service · Portfolio · Booking", "Ich entwickelte eine high-end tattoo service website, die das Studio als artistic luxury experience positioniert: portfolio storytelling, artist presentation, restrained interaction und clear booking intent."],
    ["Fragrance Brand Website", "Luxury Product · Editorial Commerce", "Ich baute eine refined fragrance concept website mit controlled visual rhythm, curated product presentation und sensory storytelling, damit ein intangible scent product als digital experience funktioniert."],
    ["Editorial Ocean Experience", "Editorial UX · Immersive Storytelling", "Ich gestaltete eine immersive editorial experience mit atmospheric navigation, narrative pacing und ocean-inspired visual system und zeigte, wie Interface Design Mood und Long-form Storytelling unterstützt."]
  ]
};

for (const language of supportedLanguages) {
  Object.assign(cvCopy[language], anonymizedContent[language]);
}

for (const language of ["uk", "pl", "ru", "de"]) {
  cvCopy[language].commercial = sharedAnonymousCommercial[language].map(([name, type, copy]) => ({ name, type, copy }));
  cvCopy[language].portfolio = sharedAnonymousPortfolio[language].map(([name, type, copy]) => ({ name, type, copy }));
}

const localizedCleanups = {
  uk: {
    role: "Продуктова дизайнерка · UX/UI дизайнерка · Вебдизайнерка · Бренд-дизайнерка",
    summary:
      "UX/UI, продуктова та вебдизайнерка з чотирма роками професійного досвіду в дизайні сайтів, цифрових продуктів, бренд-систем і клієнтських бізнес-сценаріїв. Я працювала з барами, ресторанами, бутиками, онлайн-магазинами, beauty-сервісами, бізнесами оренди, будівельними компаніями, клініками, локальними малими бізнесами, сервісними компаніями та цифровими продуктами, перетворюючи нечіткі бізнес-потреби на готові комерційно придатні дизайн-системи.",
    meta: [
      ["Локація", "Україна · Віддалено"],
      ["Формат", "Повна зайнятість · Контракт · Фриланс"],
      ["Фокус", "UX/UI · Вебдизайн · Продуктовий дизайн · Бренд-системи"],
      ["Контакт", "oh.yanyoellis@gmail.com · @ohyanyo"]
    ],
    expertiseIntro:
      "Міждисциплінарний профіль: стратегія, UX-структура, дизайн інтерфейсів, бренд-напрям і практична front-end реалізація.",
    portfolioIntro:
      "Завершені портфоліо-проєкти в SaaS, фінтеху, медицині, сфері гостинності, нерухомості, преміальних сервісах і редакційних цифрових продуктах.",
    expertise: [
      "Продуктовий дизайн",
      "UX-стратегія",
      "Інформаційна архітектура",
      "Користувацькі сценарії",
      "Клієнтські шляхи",
      "Вайрфрейми",
      "Дизайн взаємодії",
      "Адаптивний UX",
      "UI-дизайн",
      "Вебдизайн",
      "Лендінги",
      "Корпоративні сайти",
      "UX для e-commerce",
      "Сценарії бронювання",
      "Дизайн дашбордів",
      "Дизайн-системи",
      "Візуальна айдентика",
      "Бренд-напрям",
      "Дизайн для соціальних мереж",
      "Дизайн презентацій",
      "Бізнес-вимоги",
      "Дизайн, орієнтований на конверсію",
      "HTML/CSS",
      "JavaScript"
    ],
    experience: [
      {
        company: "Незалежна практика цифрового дизайну",
        role: "Продуктова дизайнерка · UX/UI дизайнерка · Вебдизайнерка · Бренд-дизайнерка",
        date: "2022 - 2026",
        copy:
          "Реалізувала готові цифрові продукти, комерційні сайти, бренд-системи та клієнтські цифрові сценарії для малих і середніх бізнесів у сфері гостинності, роздрібної торгівлі, beauty, нерухомості, будівництва, медицини та послуг.",
        bullets: [
          "Створювала сайти й візуальні системи для барів, ресторанів і бізнесів у сфері гостинності, де головними проблемами були слабке позиціонування, нечітке меню, незручне бронювання й відсутність атмосфери бренду онлайн.",
          "Проєктувала онлайн-магазини, сайти бутиків і роздрібні цифрові вітрини, де важливими були пошук товару, логіка категорій, презентація продукту, сигнали довіри та зрозуміле оформлення замовлення.",
          "Будувала цифровий досвід для малих бізнесів із розрізненими ідеями, непослідовним брендингом і відсутністю клієнтського шляху, перетворюючи їх на структуровані сайти з чіткою пропозицією й шляхами до заявки.",
          "Проєктувала сценарії запису, заявки й вибору послуги для beauty, wellness, rental, renovation і локальних сервісних бізнесів, щоб клієнти швидко розуміли варіанти й легко зв'язувалися з бізнесом.",
          "Створювала логотипи, візуальні напрями, системи для соціальних мереж, візитки, банери, презентації та друковані матеріали, щоб бізнес мав єдину айдентику в цифрових і фізичних точках контакту.",
          "Працювала з адаптивним UI, front-end реалізацією, формами, хостингом, доменами та деплоєм, коли проєкту була потрібна повна реалізація, а не тільки дизайн-файли."
        ]
      },
      {
        company: "Бізнес оренди та клієнтського досвіду",
        role: "Продуктова дизайнерка · UX/UI дизайнерка · Вебдизайнерка · Бренд-дизайнерка · Менеджерка бізнес-операцій",
        date: "2026",
        copy:
          "Завершила повну цифрову, бренд- та операційну дизайн-систему для бізнесу оренди апартаментів, поєднавши дослідження клієнтів, презентацію об'єктів, логіку бронювання та реальні операційні процеси.",
        bullets: [
          "Вирішила проблему складного порівняння великого портфоліо об'єктів через зрозумілішу структуру пошуку апартаментів із фільтрами, логікою доступності, ціновим контекстом і окремими сторінками об'єктів.",
          "Переструктурувала пояснення правил, зручностей, локації, місткості та умов бронювання, щоб зменшити повторні питання й зробити пропозицію легшою для оцінки.",
          "Створила єдину айдентику для сайту, соціальних мереж, гостьових матеріалів, брендованих ключових тегів та інших фізичних точок контакту з клієнтом.",
          "Покращила презентацію оголошень на платформах оренди, щоб інформація залишалася точною, комерційно привабливою й узгодженою з айдентикою бізнесу.",
          "Працювала з реальною комунікацією з гостями, координацією бронювань, підтримкою заселення й операційним фідбеком, тому UX-рішення були практичними, а не теоретичними."
        ]
      }
    ],
    commercial: [
      ["Преміальний beauty- та освітній бізнес", "Beauty · E-commerce · Запис · Курси", "Бізнесу потрібно було поєднати послуги, запис, професійні продукти й навчання без відчуття розрізненого сайту. Я створила преміальну eco-oriented структуру з окремими сценаріями для запису на процедури, купівлі продуктів і купівлі курсів, а також зі зрозумілою логікою керування контентом для власника."],
      ["Квітковий бутик і магазин подарунків", "Роздріб · Флористика · Онлайн-магазин", "Початкова цифрова презентація виглядала менш преміально, ніж самі продукти. Я перебудувала клієнтський досвід навколо вибору букетів, емоційної презентації товару, зрозуміліших категорій, сильнішої візуальної ієрархії та покупки у форматі подарунка."],
      ["Бар і коктейльний концепт", "Гостинність · Атмосфера бренду · Бронювання", "Закладу була потрібна цифрова айдентика, яка передає атмосферу ще до першого візиту. Я побудувала сайт навколо настрою, вивчення меню, подій, логіки бронювання столів і сильнішої візуальної мови для нічної культури та соціальних мереж."],
      ["Незалежний магазин моди та lifestyle", "Роздріб · E-commerce · Бренд-система", "Магазину потрібно було перейти від простого списку товарів до брендованого купівельного досвіду. Я структурувала навігацію за категоріями, картки товарів, кампанійні візуали, елементи довіри та мобільний сценарій покупки."],
      ["Будівельний і ремонтний сервіс", "Сайт послуг · Генерація заявок", "Компанії потрібні були довіра й зрозуміліше пояснення послуг. Я створила ієрархію послуг, контентний потік навколо проєктів, шляхи до заявки, адаптивні макети та професійнішу візуальну систему для клієнтів, які порівнюють підрядників."],
      ["Локальні сервісні бізнеси", "Малий бізнес · Сайти · Айдентика", "Для малих бізнесів з обмеженими матеріалами я створювала повну цифрову основу: структуру пропозиції, логіку головної сторінки, описи послуг, шляхи контакту, візуали для соціальних мереж і прості бренд-системи, які робили бізнес надійним і зрілим."]
    ],
    portfolio: [
      ["B2B SaaS панель управління бізнесом", "Продуктовий дизайн · Аналітика · Звітність", "Спроєктувала панель управління бізнесом для аналітики доходів, клієнтів, підписок, проєктів і звітності. Рішення зменшило когнітивне навантаження через зрозумілу навігацію, легко зчитувані метрики та повторювані інтерфейсні патерни."],
      ["Мобільний застосунок приватного банкінгу", "Фінтех · Мобільний продукт", "Створила преміальний мобільний банківський досвід із фокусом на довіру, видимість балансу, перекази, майбутні платежі та преміальну фінансову взаємодію, поєднавши елегантність із практичною фінансовою ясністю."],
      ["Сайт преміальної стоматологічної клініки", "Медицина · Довіра · Запис на прийом", "Спроєктувала сайт клініки навколо довіри пацієнта, вивчення процедур, спеціалістів, зрозумілої інформації про ціни та наміру записатися, щоб медична інформація була спокійною, переконливою та легкою для дії."],
      ["Платформа підбору преміальної нерухомості", "Нерухомість · Фільтри · Property UX", "Створила інтерактивний досвід вибору нерухомості з навігацією будинком, фільтрами, статусами доступності, плануваннями та шляхами до заявки для користувачів, які порівнюють апартаменти за практичними критеріями."],
      ["Сайт італійського ресторану", "Гостинність · Меню · Бронювання", "Спроєктувала сайт ресторану з історією меню, атмосферою, редакційною композицією та UX, орієнтованим на бронювання, щоб відвідувачі швидко розуміли настрій місця, кухню та шлях до бронювання."],
      ["Сайт преміальної тату-студії", "Арт-сервіс · Портфоліо · Запис", "Створила high-end сайт для тату-сервісу, який позиціонує студію як художній преміальний досвід через портфоліо-сторителлінг, презентацію майстрів, стримані взаємодії та зрозумілий намір запису."],
      ["Сайт парфумерного бренду", "Преміальний продукт · Редакційна подача", "Побудувала витончений концепт-сайт парфумерного бренду з контрольованим візуальним ритмом, вивіреною презентацією продукту та сенсорним сторителлінгом, щоб нематеріальний продукт на кшталт аромату працював як цифровий досвід."],
      ["Редакційний океанічний досвід", "Редакційний UX · Імерсивне оповідання", "Створила імерсивний редакційний досвід з атмосферною навігацією, оповідним ритмом і візуальною системою, натхненною океаном, показуючи, як дизайн інтерфейсу підтримує настрій і довге оповідання."]
    ],
    strengths: [
      ["Повна відповідальність за проєкт", "Можу вести проєкт від першої ідеї до функціонального готового цифрового продукту."],
      ["Комерційне мислення", "Пов'язую дизайн-рішення з позиціонуванням, довірою, конверсією та бізнес-цілями."],
      ["Сильний візуальний напрям", "Створюю впізнавані візуальні системи замість шаблонних сайтів."],
      ["UX-структура", "Перетворюю складну або хаотичну інформацію на зрозумілі клієнтські шляхи."],
      ["Бізнес-комунікація", "Працюю напряму із засновниками й перекладаю бізнес-мову в продуктові рішення."],
      ["Міждисциплінарний дизайн", "Працюю з UX/UI, сайтами, брендингом, соціальними мережами, друком і клієнтськими точками контакту."],
      ["Практичний досвід", "Операційний досвід допомагає проєктувати навколо реальної поведінки клієнтів."],
      ["Самостійність", "Можу працювати автономно й брати відповідальність за рішення."]
    ],
    languagesIntro: "Українська - рідна · Російська - рідна · Польська - впевнена · Англійська - середній рівень",
    contactText:
      "Відкрита до віддалених ролей у UX/UI, продуктовому дизайні, вебдизайні та міждисциплінарному цифровому дизайні. Найсильніша в проєктах, де потрібні і візуальна якість, і структурне бізнес-мислення."
  },
  pl: {
    role: "Projektantka produktu · Projektantka UX/UI · Projektantka stron · Projektantka marki",
    summary:
      "Projektantka UX/UI, produktu i stron internetowych z czteroletnim doświadczeniem w projektowaniu stron, produktów cyfrowych, systemów marki i scenariuszy biznesowych dla klientów. Pracowałam z barami, restauracjami, butikami, sklepami online, usługami beauty, biznesami wynajmu, firmami budowlanymi, klinikami, małymi lokalnymi firmami, usługodawcami i produktami cyfrowymi, zamieniając niejasne potrzeby biznesowe w gotowe, komercyjnie użyteczne systemy projektowe.",
    meta: [
      ["Lokalizacja", "Ukraina · Zdalnie"],
      ["Forma współpracy", "Pełny etat · Kontrakt · Freelance"],
      ["Fokus", "UX/UI · Projektowanie stron · Projektowanie produktu · Systemy marki"],
      ["Kontakt", "oh.yanyoellis@gmail.com · @ohyanyo"]
    ],
    expertiseIntro:
      "Profil multidyscyplinarny: strategia, struktura UX, projektowanie interfejsów, kierunek marki i praktyczna implementacja front-end.",
    portfolioIntro:
      "Ukończone projekty portfolio pokazujące zakres w SaaS, fintech, medycynie, gastronomii, nieruchomościach, usługach premium i redakcyjnych produktach cyfrowych.",
    expertise: [
      "Projektowanie produktu",
      "Strategia UX",
      "Architektura informacji",
      "Scenariusze użytkownika",
      "Ścieżki klienta",
      "Makiety funkcjonalne",
      "Projektowanie interakcji",
      "Responsywny UX",
      "Projektowanie UI",
      "Projektowanie stron",
      "Landing pages",
      "Strony firmowe",
      "UX dla e-commerce",
      "Scenariusze rezerwacji",
      "Projektowanie dashboardów",
      "Systemy projektowe",
      "Identyfikacja wizualna",
      "Kierunek marki",
      "Design social media",
      "Projektowanie prezentacji",
      "Wymagania biznesowe",
      "Design nastawiony na konwersję",
      "HTML/CSS",
      "JavaScript"
    ],
    experience: [
      {
        company: "Niezależna praktyka projektowania cyfrowego",
        role: "Projektantka produktu · Projektantka UX/UI · Projektantka stron · Projektantka marki",
        date: "2022 - 2026",
        copy:
          "Dostarczałam ukończone produkty cyfrowe, strony komercyjne, systemy marki i cyfrowe scenariusze klienta dla małych oraz średnich firm z branży gastronomii, handlu, beauty, nieruchomości, budownictwa, medycyny i usług.",
        bullets: [
          "Tworzyłam strony i systemy wizualne dla barów, restauracji oraz biznesów gastronomicznych, gdzie głównymi problemami były słabe pozycjonowanie, nieczytelne menu, trudna rezerwacja i brak atmosfery marki online.",
          "Projektowałam sklepy online, strony butików i cyfrowe witryny retail, gdzie ważne były wyszukiwanie produktu, logika kategorii, prezentacja produktu, sygnały zaufania i jasne składanie zamówienia.",
          "Budowałam doświadczenia cyfrowe dla małych biznesów z rozproszonymi pomysłami, niespójnym brandingiem i brakiem ścieżki klienta, zamieniając je w uporządkowane strony z jasną ofertą i drogami do zapytania.",
          "Projektowałam scenariusze rezerwacji, zapytania i wyboru usługi dla beauty, wellness, wynajmu, remontów i lokalnych usług, aby klienci szybko rozumieli opcje i łatwo kontaktowali się z firmą.",
          "Tworzyłam logo, kierunki wizualne, systemy social media, wizytówki, banery, prezentacje i materiały drukowane, aby firma miała spójną identyfikację w cyfrowych i fizycznych punktach kontaktu.",
          "Pracowałam z responsywnym UI, implementacją front-end, formularzami, hostingiem, domenami i wdrożeniem, gdy projekt wymagał pełnej realizacji, nie tylko plików projektowych."
        ]
      },
      {
        company: "Biznes wynajmu i doświadczenia klienta",
        role: "Projektantka produktu · Projektantka UX/UI · Projektantka stron · Projektantka marki · Menedżerka operacji biznesowych",
        date: "2026",
        copy:
          "Ukończyłam pełny cyfrowy, markowy i operacyjny system projektowy dla biznesu wynajmu apartamentów, łącząc badanie klientów, prezentację obiektów, logikę rezerwacji i realne procesy operacyjne.",
        bullets: [
          "Rozwiązałam problem trudnego porównywania dużego portfolio obiektów przez klarowniejszą strukturę wyszukiwania apartamentów z filtrami, logiką dostępności, kontekstem ceny i osobnymi stronami obiektów.",
          "Przebudowałam sposób wyjaśniania zasad, udogodnień, lokalizacji, liczby gości i warunków rezerwacji, aby zmniejszyć liczbę powtarzalnych pytań i ułatwić ocenę oferty.",
          "Stworzyłam spójną identyfikację dla strony, social media, materiałów gościnnych, brandowanych breloków i innych fizycznych punktów kontaktu z klientem.",
          "Poprawiłam prezentację ogłoszeń na platformach wynajmu, aby informacje były dokładne, komercyjnie atrakcyjne i zgodne z identyfikacją biznesu.",
          "Pracowałam z realną komunikacją z gośćmi, koordynacją rezerwacji, wsparciem zameldowania i feedbackiem operacyjnym, dzięki czemu decyzje UX były praktyczne, a nie teoretyczne."
        ]
      }
    ],
    commercial: [
      ["Premium biznes beauty i edukacyjny", "Beauty · E-commerce · Rezerwacje · Kursy", "Firma musiała połączyć usługi, wizyty, profesjonalne produkty i edukację bez wrażenia fragmentacji strony. Stworzyłam premium strukturę eco-oriented z osobnymi scenariuszami dla zapisów na zabiegi, zakupu produktów i zakupu kursów oraz czytelną logiką zarządzania treścią dla właściciela."],
      ["Butik florystyczny i sklep z prezentami", "Retail · Florystyka · Sklep online", "Pierwotna prezentacja cyfrowa wyglądała mniej premium niż same produkty. Przebudowałam doświadczenie klienta wokół wyboru bukietów, emocjonalnej prezentacji produktu, czytelniejszych kategorii, silniejszej hierarchii wizualnej i zakupu w formie prezentu."],
      ["Bar i koncept koktajlowy", "Gastronomia · Atmosfera marki · Rezerwacje", "Lokal potrzebował cyfrowej identyfikacji, która przekazuje atmosferę jeszcze przed pierwszą wizytą. Zbudowałam stronę wokół nastroju, odkrywania menu, wydarzeń, logiki rezerwacji stolików i mocniejszego języka wizualnego dla nightlife oraz social media."],
      ["Niezależny sklep modowy i lifestyle", "Retail · E-commerce · System marki", "Sklep potrzebował przejścia od prostej listy produktów do brandowego doświadczenia zakupowego. Uporządkowałam nawigację po kategoriach, karty produktów, wizuale kampanijne, elementy zaufania i mobilny scenariusz zakupu."],
      ["Serwis budowlany i remontowy", "Strona usług · Generowanie zapytań", "Firma potrzebowała większego zaufania i jaśniejszego wyjaśnienia usług. Stworzyłam hierarchię usług, przepływ treści wokół projektów, drogi do zapytania, responsywne układy i bardziej profesjonalny system wizualny dla klientów porównujących wykonawców."],
      ["Lokalne biznesy usługowe", "Mały biznes · Strony · Identyfikacja", "Dla małych firm z ograniczonymi materiałami tworzyłam pełną cyfrową podstawę: strukturę oferty, logikę strony głównej, opisy usług, ścieżki kontaktu, wizuale do social media i proste systemy marki, które budowały zaufanie i dojrzały wizerunek."]
    ],
    portfolio: [
      ["Panel zarządzania biznesem B2B SaaS", "Projektowanie produktu · Analityka · Raportowanie", "Zaprojektowałam panel zarządzania biznesem dla analityki przychodów, klientów, subskrypcji, projektów i raportów. Rozwiązanie zmniejszyło obciążenie poznawcze dzięki jasnej nawigacji, łatwym do skanowania metrykom i powtarzalnym wzorcom interfejsu."],
      ["Aplikacja mobilna bankowości prywatnej", "Fintech · Produkt mobilny", "Stworzyłam premium mobilne doświadczenie bankowe z naciskiem na zaufanie, widoczność salda, przelewy, przyszłe płatności i wysokiej klasy interakcję finansową, łącząc elegancję z praktyczną jasnością finansową."],
      ["Strona premium kliniki stomatologicznej", "Medycyna · Zaufanie · Rezerwacja wizyty", "Zaprojektowałam stronę kliniki wokół zaufania pacjenta, poznawania zabiegów, specjalistów, czytelnych informacji o cenach i intencji umówienia wizyty, aby informacje medyczne były spokojne, wiarygodne i łatwe do działania."],
      ["Platforma wyboru premium nieruchomości", "Nieruchomości · Filtry · Property UX", "Stworzyłam interaktywne doświadczenie wyboru nieruchomości z nawigacją po budynku, filtrami, statusami dostępności, planami mieszkań i ścieżkami do zapytania dla użytkowników porównujących apartamenty według praktycznych kryteriów."],
      ["Strona włoskiej restauracji", "Gastronomia · Menu · Rezerwacje", "Zaprojektowałam stronę restauracji z historią menu, atmosferą, kompozycją editorial i UX-em nastawionym na rezerwację, aby odwiedzający szybko rozumieli nastrój miejsca, kuchnię i drogę do rezerwacji."],
      ["Strona premium studia tatuażu", "Usługa artystyczna · Portfolio · Zapisy", "Stworzyłam high-end stronę dla usługi tatuażu, która pozycjonuje studio jako artystyczne doświadczenie premium przez storytelling portfolio, prezentację artystów, powściągliwe interakcje i jasną intencję zapisu."],
      ["Strona marki zapachowej", "Produkt premium · Editorial commerce", "Zbudowałam wyrafinowaną koncepcyjną stronę marki zapachowej z kontrolowanym rytmem wizualnym, dopracowaną prezentacją produktu i sensorycznym storytellingiem, aby niematerialny produkt, jak zapach, działał jako doświadczenie cyfrowe."],
      ["Redakcyjne doświadczenie oceaniczne", "Redakcyjny UX · Immersyjne opowiadanie", "Zaprojektowałam immersyjne doświadczenie redakcyjne z atmosferyczną nawigacją, rytmem narracji i systemem wizualnym inspirowanym oceanem, pokazując, jak design interfejsu wspiera nastrój i długą opowieść."]
    ],
    strengths: [
      ["Pełna odpowiedzialność za projekt", "Prowadzę projekt od pierwszej idei do działającego, ukończonego produktu cyfrowego."],
      ["Myślenie komercyjne", "Łączę decyzje projektowe z pozycjonowaniem, zaufaniem, konwersją i celami biznesowymi."],
      ["Silny kierunek wizualny", "Tworzę rozpoznawalne systemy wizualne zamiast generycznych stron."],
      ["Struktura UX", "Zamieniam złożone lub chaotyczne informacje w czytelne ścieżki klienta."],
      ["Komunikacja biznesowa", "Pracuję bezpośrednio z założycielami i tłumaczę język biznesu na decyzje produktowe."],
      ["Design multidyscyplinarny", "Łączę UX/UI, strony, branding, social media, druk i punkty kontaktu z klientem."],
      ["Doświadczenie praktyczne", "Doświadczenie operacyjne pomaga mi projektować wokół realnych zachowań klientów."],
      ["Samodzielność", "Potrafię pracować autonomicznie i brać odpowiedzialność za decyzje."]
    ],
    languagesIntro: "Ukraiński - ojczysty · Rosyjski - ojczysty · Polski - biegły · Angielski - średni",
    contactText:
      "Otwarta na role zdalne w UX/UI, projektowaniu produktu, projektowaniu stron i multidyscyplinarnym designie cyfrowym. Najmocniejsza w projektach, które potrzebują jakości wizualnej oraz uporządkowanego myślenia biznesowego."
  },
  ru: {
    role: "Продуктовый дизайнер · UX/UI дизайнер · Веб-дизайнер · Бренд-дизайнер",
    summary:
      "UX/UI, продуктовый и веб-дизайнер с четырьмя годами профессионального опыта в дизайне сайтов, цифровых продуктов, бренд-систем и клиентских бизнес-сценариев. Я работала с барами, ресторанами, бутиками, онлайн-магазинами, beauty-сервисами, бизнесами аренды, строительными компаниями, клиниками, маленькими локальными бизнесами, сервисными компаниями и цифровыми продуктами, превращая неясные бизнес-задачи в готовые коммерчески применимые дизайн-системы.",
    meta: [
      ["Локация", "Украина · Удаленно"],
      ["Формат", "Полная занятость · Контракт · Фриланс"],
      ["Фокус", "UX/UI · Веб-дизайн · Продуктовый дизайн · Бренд-системы"],
      ["Контакт", "oh.yanyoellis@gmail.com · @ohyanyo"]
    ],
    expertiseIntro:
      "Междисциплинарный профиль: стратегия, UX-структура, дизайн интерфейсов, бренд-направление и практическая front-end реализация.",
    portfolioIntro:
      "Завершенные портфолио-проекты в SaaS, финтехе, медицине, сфере гостеприимства, недвижимости, премиальных сервисах и редакционных цифровых продуктах.",
    expertise: [
      "Продуктовый дизайн",
      "UX-стратегия",
      "Информационная архитектура",
      "Пользовательские сценарии",
      "Клиентские пути",
      "Вайрфреймы",
      "Дизайн взаимодействий",
      "Адаптивный UX",
      "UI-дизайн",
      "Веб-дизайн",
      "Лендинги",
      "Корпоративные сайты",
      "UX для e-commerce",
      "Сценарии бронирования",
      "Дизайн дашбордов",
      "Дизайн-системы",
      "Визуальная айдентика",
      "Бренд-направление",
      "Дизайн для социальных сетей",
      "Дизайн презентаций",
      "Бизнес-требования",
      "Дизайн, ориентированный на конверсию",
      "HTML/CSS",
      "JavaScript"
    ],
    experience: [
      {
        company: "Независимая практика цифрового дизайна",
        role: "Продуктовый дизайнер · UX/UI дизайнер · Веб-дизайнер · Бренд-дизайнер",
        date: "2022 - 2026",
        copy:
          "Реализовала готовые цифровые продукты, коммерческие сайты, бренд-системы и клиентские цифровые сценарии для малых и средних бизнесов в сфере гостеприимства, розницы, beauty, недвижимости, строительства, медицины и услуг.",
        bullets: [
          "Создавала сайты и визуальные системы для баров, ресторанов и бизнесов в сфере гостеприимства, где главными проблемами были слабое позиционирование, неясное меню, неудобное бронирование и отсутствие атмосферы бренда онлайн.",
          "Проектировала онлайн-магазины, сайты бутиков и розничные цифровые витрины, где были важны поиск товара, логика категорий, презентация продукта, сигналы доверия и понятное оформление заказа.",
          "Строила цифровой опыт для маленьких бизнесов с разрозненными идеями, непоследовательным брендингом и отсутствием клиентского пути, превращая их в структурированные сайты с понятным предложением и путями к заявке.",
          "Проектировала сценарии записи, заявки и выбора услуги для beauty, wellness, rental, renovation и локальных сервисных бизнесов, чтобы клиенты быстро понимали варианты и легко связывались с бизнесом.",
          "Создавала логотипы, визуальные направления, системы для социальных сетей, визитки, баннеры, презентации и печатные материалы, чтобы у бизнеса была единая айдентика в цифровых и физических точках контакта.",
          "Работала с адаптивным UI, front-end реализацией, формами, хостингом, доменами и деплоем, когда проекту нужна была полная реализация, а не только дизайн-файлы."
        ]
      },
      {
        company: "Бизнес аренды и клиентского опыта",
        role: "Продуктовый дизайнер · UX/UI дизайнер · Веб-дизайнер · Бренд-дизайнер · Менеджер бизнес-операций",
        date: "2026",
        copy:
          "Завершила полную цифровую, бренд- и операционную дизайн-систему для бизнеса аренды апартаментов, соединив исследование клиентов, презентацию объектов, логику бронирования и реальные операционные процессы.",
        bullets: [
          "Решила проблему сложного сравнения большого портфолио объектов через более понятную структуру поиска апартаментов с фильтрами, логикой доступности, ценовым контекстом и отдельными страницами объектов.",
          "Перестроила объяснение правил, удобств, локации, вместимости и условий бронирования, чтобы уменьшить повторяющиеся вопросы и сделать предложение проще для оценки.",
          "Создала единую айдентику для сайта, социальных сетей, гостевых материалов, брендированных ключевых тегов и других физических точек контакта с клиентом.",
          "Улучшила презентацию объявлений на платформах аренды, чтобы информация оставалась точной, коммерчески привлекательной и согласованной с айдентикой бизнеса.",
          "Работала с реальной коммуникацией с гостями, координацией бронирований, поддержкой заселения и операционным фидбеком, поэтому UX-решения были практическими, а не теоретическими."
        ]
      }
    ],
    commercial: [
      ["Премиальный beauty- и образовательный бизнес", "Beauty · E-commerce · Запись · Курсы", "Бизнесу нужно было объединить услуги, запись, профессиональные продукты и обучение без ощущения разрозненного сайта. Я создала премиальную eco-oriented структуру с отдельными сценариями для записи на процедуры, покупки продуктов и покупки курсов, а также с понятной логикой управления контентом для владельца."],
      ["Цветочный бутик и магазин подарков", "Розница · Флористика · Онлайн-магазин", "Изначальная цифровая презентация выглядела менее премиально, чем сами продукты. Я перестроила клиентский опыт вокруг выбора букетов, эмоциональной презентации товара, более понятных категорий, сильной визуальной иерархии и покупки в формате подарка."],
      ["Бар и коктейльный концепт", "Гостеприимство · Атмосфера бренда · Бронирование", "Заведению была нужна цифровая айдентика, которая передает атмосферу еще до первого визита. Я построила сайт вокруг настроения, изучения меню, событий, логики бронирования столов и более сильного визуального языка для ночной культуры и социальных сетей."],
      ["Независимый магазин моды и lifestyle", "Розница · E-commerce · Бренд-система", "Магазину нужно было перейти от простого списка товаров к брендированному покупательскому опыту. Я структурировала навигацию по категориям, карточки товаров, кампейн-визуалы, элементы доверия и мобильный сценарий покупки."],
      ["Строительный и ремонтный сервис", "Сайт услуг · Генерация заявок", "Компании нужны были доверие и более понятное объяснение услуг. Я создала иерархию услуг, контентный поток вокруг проектов, пути к заявке, адаптивные макеты и более профессиональную визуальную систему для клиентов, которые сравнивают подрядчиков."],
      ["Локальные сервисные бизнесы", "Малый бизнес · Сайты · Айдентика", "Для маленьких бизнесов с ограниченными материалами я создавала полноценную цифровую основу: структуру предложения, логику главной страницы, описания услуг, пути контакта, визуалы для социальных сетей и простые бренд-системы, которые делали бизнес надежным и зрелым."]
    ],
    portfolio: [
      ["B2B SaaS панель управления бизнесом", "Продуктовый дизайн · Аналитика · Отчетность", "Спроектировала панель управления бизнесом для аналитики доходов, клиентов, подписок, проектов и отчетности. Решение уменьшило когнитивную нагрузку через понятную навигацию, легко считываемые метрики и переиспользуемые интерфейсные паттерны."],
      ["Мобильное приложение приватного банкинга", "Финтех · Мобильный продукт", "Создала премиальный мобильный банковский опыт с фокусом на доверие, видимость баланса, переводы, предстоящие платежи и премиальное финансовое взаимодействие, сочетая элегантность с практичной финансовой ясностью."],
      ["Сайт премиальной стоматологической клиники", "Медицина · Доверие · Запись на прием", "Спроектировала сайт клиники вокруг доверия пациента, изучения процедур, специалистов, понятной информации о ценах и намерения записаться, чтобы медицинская информация ощущалась спокойной, убедительной и простой для действия."],
      ["Платформа подбора премиальной недвижимости", "Недвижимость · Фильтры · Property UX", "Создала интерактивный опыт выбора недвижимости с навигацией по зданию, фильтрами, статусами доступности, планировками и путями к заявке для пользователей, которые сравнивают апартаменты по практическим критериям."],
      ["Сайт итальянского ресторана", "Гостеприимство · Меню · Бронирование", "Спроектировала сайт ресторана с историей меню, атмосферой, редакционной композицией и UX, ориентированным на бронирование, чтобы посетители быстро понимали настроение места, кухню и путь к бронированию."],
      ["Сайт премиальной тату-студии", "Арт-сервис · Портфолио · Запись", "Создала high-end сайт для тату-сервиса, который позиционирует студию как художественный премиальный опыт через портфолио-сторителлинг, презентацию мастеров, сдержанные взаимодействия и понятное намерение записи."],
      ["Сайт парфюмерного бренда", "Премиальный продукт · Редакционная подача", "Построила утонченный концепт-сайт парфюмерного бренда с контролируемым визуальным ритмом, выверенной презентацией продукта и сенсорным сторителлингом, чтобы нематериальный продукт вроде аромата работал как цифровой опыт."],
      ["Редакционный океанический опыт", "Редакционный UX · Иммерсивное повествование", "Создала иммерсивный редакционный опыт с атмосферной навигацией, повествовательным ритмом и визуальной системой, вдохновленной океаном, показывая, как дизайн интерфейса поддерживает настроение и длинное повествование."]
    ],
    strengths: [
      ["Полная ответственность за проект", "Могу вести проект от первой идеи до работающего готового цифрового продукта."],
      ["Коммерческое мышление", "Связываю дизайн-решения с позиционированием, доверием, конверсией и бизнес-целями."],
      ["Сильное визуальное направление", "Создаю выразительные визуальные системы вместо шаблонных сайтов."],
      ["UX-структура", "Превращаю сложную или хаотичную информацию в понятные клиентские пути."],
      ["Бизнес-коммуникация", "Работаю напрямую с основателями и перевожу бизнес-язык в продуктовые решения."],
      ["Междисциплинарный дизайн", "Работаю с UX/UI, сайтами, брендингом, социальными сетями, печатью и клиентскими точками контакта."],
      ["Практический опыт", "Операционный опыт помогает проектировать вокруг реального поведения клиентов."],
      ["Самостоятельность", "Могу работать автономно и брать ответственность за решения."]
    ],
    languagesIntro: "Украинский - родной · Русский - родной · Польский - уверенный · Английский - средний",
    contactText:
      "Открыта к удаленным ролям в UX/UI, продуктовом дизайне, веб-дизайне и междисциплинарном цифровом дизайне. Особенно сильна в проектах, где нужны и визуальное качество, и структурное бизнес-мышление."
  },
  de: {
    role: "Produktdesignerin · UX/UI Designerin · Webdesignerin · Brand Designerin",
    summary:
      "UX/UI, Produkt- und Webdesignerin mit vier Jahren professioneller Designerfahrung in Websites, digitalen Produkten, Markensystemen und Kundenszenarien. Ich habe mit Bars, Restaurants, Boutiquen, Online-Shops, Beauty-Dienstleistungen, Vermietungsunternehmen, Bauunternehmen, Kliniken, kleinen lokalen Unternehmen, Dienstleistungsunternehmen und digitalen Produkten gearbeitet und unklare Geschäftsanforderungen in fertige, kommerziell nutzbare Designsysteme übersetzt.",
    meta: [
      ["Standort", "Ukraine · Remote"],
      ["Verfügbarkeit", "Vollzeit · Vertrag · Freelance"],
      ["Fokus", "UX/UI · Webdesign · Produktdesign · Markensysteme"],
      ["Kontakt", "oh.yanyoellis@gmail.com · @ohyanyo"]
    ],
    expertiseIntro:
      "Ein interdisziplinäres Profil aus Strategie, UX-Struktur, Interface Design, Markenrichtung und praktischer Frontend-Umsetzung.",
    portfolioIntro:
      "Abgeschlossene Portfolio-Projekte mit Bandbreite in SaaS, Fintech, Medizin, Gastronomie, Immobilien, Premium-Dienstleistungen und redaktionellen digitalen Produkten.",
    expertise: [
      "Produktdesign",
      "UX-Strategie",
      "Informationsarchitektur",
      "Nutzerszenarien",
      "Kundenreisen",
      "Wireframes",
      "Interaktionsdesign",
      "Responsiver UX",
      "UI-Design",
      "Webdesign",
      "Landingpages",
      "Unternehmenswebsites",
      "UX für E-commerce",
      "Buchungsszenarien",
      "Dashboard-Design",
      "Designsysteme",
      "Visuelle Identität",
      "Markenrichtung",
      "Social-Media-Design",
      "Präsentationsdesign",
      "Geschäftsanforderungen",
      "Konversionsorientiertes Design",
      "HTML/CSS",
      "JavaScript"
    ],
    experience: [
      {
        company: "Unabhängige Praxis für digitales Design",
        role: "Produktdesignerin · UX/UI Designerin · Webdesignerin · Brand Designerin",
        date: "2022 - 2026",
        copy:
          "Ich lieferte fertige digitale Produkte, kommerzielle Websites, Markensysteme und digitale Kundenszenarien für kleine und mittlere Unternehmen in Gastronomie, Einzelhandel, Beauty, Immobilien, Bau, Medizin und Dienstleistungen.",
        bullets: [
          "Ich erstellte Websites und visuelle Systeme für Bars, Restaurants und Gastronomiebetriebe, bei denen schwache Positionierung, unklare Menüs, schwierige Reservierung und fehlende Online-Atmosphäre die Hauptprobleme waren.",
          "Ich gestaltete Online-Shops, Boutique-Websites und digitale Verkaufsflächen, bei denen Produktsuche, Kategorielogik, Produktpräsentation, Vertrauenselemente und ein klarer Bestellprozess entscheidend waren.",
          "Ich baute digitale Erfahrungen für kleine Unternehmen mit verstreuten Ideen, inkonsistentem Branding und fehlender Kundenreise und machte daraus strukturierte Websites mit klarem Angebot und Wegen zur Anfrage.",
          "Ich gestaltete Szenarien für Buchung, Anfrage und Serviceauswahl für Beauty, Wellness, Vermietung, Renovierung und lokale Dienstleistungsunternehmen, damit Kunden Optionen schnell verstehen und leicht Kontakt aufnehmen konnten.",
          "Ich entwickelte Logos, visuelle Richtungen, Social-Media-Systeme, Visitenkarten, Banner, Präsentationen und Druckmaterialien, damit Unternehmen eine konsistente Identität an digitalen und physischen Kontaktpunkten haben.",
          "Ich arbeitete mit responsivem UI, Frontend-Umsetzung, Formularen, Hosting, Domains und Deployment, wenn ein Projekt vollständige Lieferung statt nur Design-Dateien erforderte."
        ]
      },
      {
        company: "Vermietungs- und Kundenerlebnis-Unternehmen",
        role: "Produktdesignerin · UX/UI Designerin · Webdesignerin · Brand Designerin · Managerin für Geschäftsprozesse",
        date: "2026",
        copy:
          "Ich schloss ein vollständiges digitales, Marken- und Operations-Designsystem für ein Apartment-Vermietungsunternehmen ab und verband Kundenrecherche, Objektpräsentation, Buchungslogik und echte operative Prozesse.",
        bullets: [
          "Ich löste das Problem eines schwer vergleichbaren großen Objektportfolios durch eine klarere Suchstruktur für Apartments mit Filtern, Verfügbarkeitslogik, Preiskontext und einzelnen Objektseiten.",
          "Ich strukturierte Regeln, Ausstattung, Lage, Gästekapazität und Buchungsbedingungen neu, um wiederholte Fragen zu reduzieren und Angebote leichter bewertbar zu machen.",
          "Ich entwickelte eine konsistente Identität für Website, Social Media, Gästematerialien, gebrandete Schlüsselanhänger und andere physische Kundenkontaktpunkte.",
          "Ich verbesserte die Präsentation von Anzeigen auf Vermietungsplattformen, damit Informationen akkurat, kommerziell attraktiv und konsistent mit der Markenidentität blieben.",
          "Ich arbeitete mit realer Gästekommunikation, Buchungskoordination, Check-in-Unterstützung und operativem Feedback, wodurch UX-Entscheidungen praktisch statt theoretisch wurden."
        ]
      }
    ],
    commercial: [
      ["Premium Beauty- und Bildungsbusiness", "Beauty · E-commerce · Buchung · Kurse", "Das Unternehmen musste Dienstleistungen, Termine, professionelle Produkte und Bildung verbinden, ohne dass die Website fragmentiert wirkte. Ich entwickelte eine hochwertige eco-orientierte Struktur mit getrennten Szenarien für Terminbuchung, Produktkauf und Kurskauf sowie einer klaren Logik zur Inhaltsverwaltung für den Inhaber."],
      ["Blumenboutique und Geschenkshop", "Einzelhandel · Floristik · Online-Shop", "Die ursprüngliche digitale Präsentation wirkte weniger hochwertig als die Produkte selbst. Ich strukturierte die Kundenerfahrung rund um Bouquet-Auswahl, emotionale Produktpräsentation, klarere Kategorien, stärkere visuelle Hierarchie und Geschenk-orientierten Kauf neu."],
      ["Bar und Cocktailkonzept", "Gastronomie · Markenatmosphäre · Reservierungen", "Die Location brauchte eine digitale Identität, die Atmosphäre schon vor dem ersten Besuch vermittelt. Ich gestaltete die Website rund um Stimmung, Menüentdeckung, Events, Tischreservierung und eine stärkere visuelle Sprache für Nachtkultur und soziale Medien."],
      ["Unabhängiger Mode- und Lifestyle-Shop", "Einzelhandel · E-commerce · Markensystem", "Der Shop musste von einer einfachen Produktliste zu einer markengeführten Einkaufserfahrung wechseln. Ich strukturierte Kategorienavigation, Produktkarten, Kampagnenvisuals, Vertrauenselemente und mobile Kaufentscheidungen."],
      ["Bau- und Renovierungsservice", "Dienstleistungswebsite · Anfragegenerierung", "Das Unternehmen brauchte mehr Vertrauen und eine klarere Erklärung seiner Leistungen. Ich entwickelte Servicehierarchie, projektorientierten Contentfluss, Wege zur Anfrage, responsive Layouts und ein professionelleres visuelles System für Kunden, die Anbieter vergleichen."],
      ["Lokale Dienstleistungsunternehmen", "Kleinunternehmen · Websites · Identität", "Für kleine Unternehmen mit begrenzten Materialien entwickelte ich eine vollständige digitale Grundlage: Angebotsstruktur, Logik der Startseite, Leistungsbeschreibungen, Kontaktwege, Social-Media-Visuals und einfache Markensysteme, die Vertrauen und Reife vermitteln."]
    ],
    portfolio: [
      ["B2B SaaS Geschäfts-Dashboard", "Produktdesign · Analytik · Reporting", "Ich gestaltete ein Dashboard für Geschäftssteuerung, Umsatzanalytik, Kunden, Abonnements, Projekte und Reporting. Die Lösung reduzierte kognitive Belastung durch klare Navigation, leicht erfassbare Kennzahlen und wiederverwendbare Interface-Muster."],
      ["Mobile App für private Vermögensverwaltung", "Fintech · Mobiles Produkt", "Ich entwickelte ein hochwertiges mobiles Bankerlebnis mit Fokus auf Vertrauen, Saldoübersicht, Überweisungen, kommende Zahlungen und hochwertige Finanzinteraktion, verbunden mit praktischer finanzieller Klarheit."],
      ["Website einer Premium-Zahnklinik", "Medizin · Vertrauen · Terminbuchung", "Ich gestaltete eine Klinik-Website rund um Patientenvertrauen, Behandlungsentdeckung, Spezialisten, klare Preisinformationen und Terminabsicht, damit medizinische Informationen ruhig, glaubwürdig und handlungsorientiert wirken."],
      ["Plattform zur Auswahl von Premium-Immobilien", "Immobilien · Filter · Property UX", "Ich entwickelte eine interaktive Immobilienauswahl mit Gebäudenavigation, Filtern, Verfügbarkeitsstatus, Grundrissen und Wegen zur Anfrage für Nutzer, die Apartments nach praktischen Kriterien vergleichen."],
      ["Website eines italienischen Restaurants", "Gastronomie · Menü · Reservierungen", "Ich gestaltete eine Restaurant-Website mit Menügeschichte, Atmosphäre, redaktioneller Komposition und auf Reservierung ausgerichtetem UX, damit Besucher Stimmung, Küche und Buchungsweg schnell verstehen."],
      ["Website eines Premium-Tattoo-Studios", "Künstlerische Dienstleistung · Portfolio · Buchung", "Ich entwickelte eine High-end Website für einen Tattoo-Service, die das Studio als künstlerisches Premium-Erlebnis positioniert: Portfolio-Storytelling, Künstlerpräsentation, zurückhaltende Interaktionen und klare Buchungsabsicht."],
      ["Website einer Duftmarke", "Premiumprodukt · Redaktionelle Präsentation", "Ich baute eine verfeinerte Konzept-Website für eine Duftmarke mit kontrolliertem visuellem Rhythmus, kuratierter Produktpräsentation und sensorischem Storytelling, damit ein immaterielles Produkt wie Duft als digitale Erfahrung funktioniert."],
      ["Redaktionelles Ozeanerlebnis", "Redaktioneller UX · Immersives Storytelling", "Ich gestaltete eine immersive redaktionelle Erfahrung mit atmosphärischer Navigation, erzählerischem Rhythmus und einem vom Ozean inspirierten visuellen System und zeigte, wie Interface Design Stimmung und längeres Storytelling unterstützt."]
    ],
    strengths: [
      ["End-to-end Verantwortung", "Ich kann ein Projekt von der ersten Idee bis zum funktionierenden fertigen digitalen Produkt führen."],
      ["Kommerzielles Denken", "Ich verbinde Designentscheidungen mit Positionierung, Vertrauen, Konversion und Geschäftszielen."],
      ["Starke visuelle Richtung", "Ich entwickle eigenständige visuelle Systeme statt generischer Websites."],
      ["UX-Struktur", "Ich übersetze komplexe oder unklare Informationen in verständliche Kundenreisen."],
      ["Business-Kommunikation", "Ich arbeite direkt mit Gründern und übersetze Geschäftssprache in Produktentscheidungen."],
      ["Interdisziplinäres Design", "Meine Arbeit verbindet UX/UI, Websites, Branding, Social Media, Print und Kundenkontaktpunkte."],
      ["Praktische Erfahrung", "Operative Erfahrung hilft mir, rund um reales Kundenverhalten zu gestalten."],
      ["Selbstständigkeit", "Ich kann autonom arbeiten und Verantwortung für Entscheidungen übernehmen."]
    ],
    languagesIntro: "Ukrainisch - Muttersprache · Russisch - Muttersprache · Polnisch - sicher · Englisch - mittel",
    contactText:
      "Offen für Remote-Rollen in UX/UI, Produktdesign, Webdesign und interdisziplinärem Digitaldesign. Besonders stark bin ich in Projekten, die visuelle Qualität und strukturiertes Business-Denken brauchen."
  }
};

for (const [language, copy] of Object.entries(localizedCleanups)) {
  Object.assign(cvCopy[language], copy);
  cvCopy[language].commercial = copy.commercial.map(([name, type, text]) => ({ name, type, copy: text }));
  cvCopy[language].portfolio = copy.portfolio.map(([name, type, text]) => ({ name, type, copy: text }));
}

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
