const profileLanguages = ["en", "uk", "pl", "ru", "de"];
const languageKey = "yana-ellis-language";

const profileCopy = {
  en: {
    title: "Professional Profile | Yana Ellis",
    portfolio: "Portfolio",
    projectGuide: "Project Guide",
    heroKicker: "Professional dossier",
    heroTitle: "Yana Ellis",
    heroRole: "UX/UI & Web Designer · Digital Product Designer · Multidisciplinary Digital Professional",
    heroIntroOne:
      "Yana Ellis is a multidisciplinary UX/UI and web designer working professionally since 2022, combining digital design, product thinking, brand development, marketing, business operations and real-world customer experience.",
    heroIntroTwo:
      "Her work extends beyond interface design: she connects websites, customer journeys, operational requirements, brand systems and practical execution into digital experiences that make businesses clearer and easier to use.",
    metricOne: "Since 2022",
    metricOneText: "Professional UX/UI, web and digital project work",
    metricTwo: "3 markets",
    metricTwoText: "Commercial work involving Ukraine, Canada and the United Kingdom",
    metricThree: "Multidisciplinary",
    metricThreeText: "Design, product, brand, SMM, operations and customer experience",
    profileKicker: "Professional profile",
    profileTitle: "Design connected to the business behind it.",
    profileOne:
      "Yana works at the intersection of design, digital products, branding, customer experience and business operations. Her projects often begin before there is a perfect brief, which means she researches the business, identifies what actually needs to exist and turns scattered information into a structured product.",
    profileTwo:
      "This makes her useful in situations where a company needs more than a visual refresh: clearer information architecture, a better booking or enquiry journey, consistent digital presence, customer-facing content and practical systems that can survive outside a portfolio screenshot.",
    capabilitiesKicker: "Core capabilities",
    capabilitiesTitle: "A broad range, organised around real project responsibility.",
    capUxTitle: "UX/UI & Product",
    capUxText: "Information architecture, user flows, responsive interfaces, booking and enquiry flows, admin planning and translating business logic into usable screens.",
    capWebTitle: "Web Design",
    capWebText: "Corporate, service, hospitality, ecommerce-related and portfolio websites designed from concept and structure to the final responsive experience.",
    capBrandTitle: "Brand & Visual",
    capBrandText: "Digital identity, typography, layout systems, social media visuals, business cards, physical brand applications and production-ready concepts.",
    capMarketingTitle: "Marketing & SMM",
    capMarketingText: "Content architecture, Instagram positioning, highlight structures and translating complex business information into clear public-facing communication.",
    capOpsTitle: "Operations & CX",
    capOpsText: "Reservation management, guest communication, booking coordination, check-in processes, payment status tracking and customer requirement analysis.",
    capVendorTitle: "Procurement",
    capVendorText: "Supplier research, quote collection, specification preparation, price comparison and communication with manufacturers for branded physical materials.",
    commercialKicker: "Selected commercial work",
    commercialTitle: "Real businesses, real constraints, finished or ongoing digital work.",
    arcedConstruction: "Commercial website created from the ground up for a Canadian construction business, focused on clear services, credibility and direct enquiry paths.",
    arcedTile: "A separate digital presence for ARCED's tile services, preserving brand consistency while making the service category independent and understandable.",
    ecoHair: "Ongoing commercial project combining services, appointment booking, ecommerce, courses, brand direction and digital customer experience.",
    mariaCommercial: "A multidisciplinary business and digital project combining UX/UI, web design, operations, customer experience, SMM, brand design, procurement and project management.",
    mariaKicker: "Maria Apartments",
    mariaTitle: "A digital product shaped by direct operational knowledge.",
    mariaOne:
      "Unlike a designer working from a detached brief, Yana designed the Maria Apartments digital experience while actively participating in the business's operational and customer-facing processes. This gave her direct insight into recurring guest questions, booking friction, pricing complexity, apartment availability and check-in requirements.",
    mariaTwo:
      "Her role includes reservation coordination, guest communication, check-ins, documentation, website structure, UX/UI, social media architecture, branded materials, supplier research and production planning for physical brand objects.",
    conceptKicker: "Independent concept work",
    conceptTitle: "Industry range without pretending concept projects are clients.",
    conceptText:
      "Independent projects are used to explore interaction design, visual systems, UX concepts, creative direction and digital experiences across different industries. Commercial work and concept work are presented separately because they demonstrate different strengths.",
    styleKicker: "Working style",
    styleTitle: "Independent, systems-oriented and execution-focused.",
    styleIndependentTitle: "Independent",
    styleIndependentText: "Comfortable being given a problem rather than a checklist, then researching, structuring and proposing a practical solution.",
    styleBusinessTitle: "Business-aware",
    styleBusinessText: "Considers business model, maintenance, cost, customer confusion, internal workflow and what happens after someone clicks the button.",
    styleExecutionTitle: "Execution-focused",
    styleExecutionText: "Interested in work that can move from concept to usable website, brand material, supplier brief, content structure or functioning customer flow.",
    timelineKicker: "Timeline",
    timelineTitle: "Professional work in UX/UI, web design and digital projects since 2022.",
    timeline2022: "Began professional work in UX/UI, web design and digital projects.",
    timeline2024: "Expanded complete website work, information architecture, responsive design and multi-industry independent concepts.",
    timeline2026: "Commercial work includes businesses in Canada, Scotland / United Kingdom and Ukraine, with current focus on complete digital experiences.",
    languagesKicker: "Languages & identity",
    languagesTitle: "International communication without making language the whole story.",
    languagesText:
      "Yana communicates in Ukrainian, Russian, English, Polish and Spanish, with basic Japanese ability. Professionally she works under the name Yana Ellis; the name Yanyo Ellis is also used across selected personal and digital platforms."
  },
  ru: {
    title: "Профессиональный профиль | Yana Ellis",
    portfolio: "Портфолио",
    projectGuide: "Гайд проекта",
    heroKicker: "Профессиональное досье",
    heroTitle: "Yana Ellis",
    heroRole: "UX/UI и веб-дизайнер · Digital Product Designer · Multidisciplinary Digital Professional",
    heroIntroOne:
      "Yana Ellis - multidisciplinary UX/UI и веб-дизайнер, профессионально работающая с 2022 года. Ее работа объединяет digital design, product thinking, brand development, marketing, business operations и реальный опыт взаимодействия с клиентами.",
    heroIntroTwo:
      "Ее работа выходит за рамки интерфейсов: она связывает сайты, customer journeys, операционные требования, бренд-системы и практическую реализацию в цифровой опыт, который делает бизнес понятнее и удобнее.",
    metricOne: "С 2022",
    metricOneText: "Профессиональная работа в UX/UI, web и digital projects",
    metricTwo: "3 рынка",
    metricTwoText: "Коммерческие проекты, связанные с Украиной, Канадой и Великобританией",
    metricThree: "Multidisciplinary",
    metricThreeText: "Design, product, brand, SMM, operations и customer experience",
    profileKicker: "Профессиональный профиль",
    profileTitle: "Дизайн, связанный с бизнесом за интерфейсом.",
    profileOne:
      "Yana работает на пересечении дизайна, цифровых продуктов, брендинга, customer experience и бизнес-процессов. Ее проекты часто начинаются до появления идеального брифа: она исследует бизнес, определяет, что действительно нужно создать, и превращает разрозненную информацию в структурированный продукт.",
    profileTwo:
      "Это особенно ценно там, где компании нужен не просто визуальный редизайн, а более ясная информационная архитектура, лучший путь бронирования или заявки, последовательное digital presence, понятный клиентский контент и практичные системы, которые работают вне красивого скриншота.",
    capabilitiesKicker: "Ключевые компетенции",
    capabilitiesTitle: "Широкий диапазон, собранный вокруг реальной ответственности за проект.",
    capUxTitle: "UX/UI & Product",
    capUxText: "Информационная архитектура, user flows, адаптивные интерфейсы, booking и enquiry flows, планирование admin-интерфейсов и перевод бизнес-логики в удобные экраны.",
    capWebTitle: "Web Design",
    capWebText: "Корпоративные, сервисные, hospitality, ecommerce-related и portfolio websites: от концепции и структуры до финального адаптивного опыта.",
    capBrandTitle: "Brand & Visual",
    capBrandText: "Digital identity, типографика, layout systems, social media visuals, визитки, физические носители бренда и production-ready concepts.",
    capMarketingTitle: "Marketing & SMM",
    capMarketingText: "Content architecture, Instagram positioning, структура Highlights и перевод сложной бизнес-информации в понятную публичную коммуникацию.",
    capOpsTitle: "Operations & CX",
    capOpsText: "Reservation management, коммуникация с гостями, координация бронирований, check-in processes, tracking оплат и анализ требований клиентов.",
    capVendorTitle: "Procurement",
    capVendorText: "Поиск поставщиков, сбор предложений, подготовка спецификаций, сравнение цен и коммуникация с производителями для физических бренд-материалов.",
    commercialKicker: "Коммерческие работы",
    commercialTitle: "Реальные бизнесы, реальные ограничения, завершенная или текущая digital-работа.",
    arcedConstruction: "Коммерческий сайт, созданный с нуля для канадской строительной компании, с фокусом на ясные услуги, доверие и прямые пути заявки.",
    arcedTile: "Отдельное digital presence для tile-направления ARCED: с сохранением связи с брендом, но самостоятельной и понятной структурой услуг.",
    ecoHair: "Текущий коммерческий проект, объединяющий услуги, запись, ecommerce, курсы, brand direction и digital customer experience.",
    mariaCommercial: "Multidisciplinary бизнес- и digital-проект, объединяющий UX/UI, web design, operations, customer experience, SMM, brand design, procurement и project management.",
    mariaKicker: "Maria Apartments",
    mariaTitle: "Digital product, сформированный реальным операционным опытом.",
    mariaOne:
      "В отличие от дизайнера, работающего только по внешнему брифу, Yana проектировала digital experience Maria Apartments, одновременно участвуя в операционных и клиентских процессах бизнеса. Это дало прямое понимание повторяющихся вопросов гостей, friction в бронировании, сложности цен, доступности квартир и требований check-in.",
    mariaTwo:
      "Ее роль включает координацию бронирований, коммуникацию с гостями, check-ins, документацию, структуру сайта, UX/UI, social media architecture, branded materials, supplier research и production planning физических бренд-объектов.",
    conceptKicker: "Independent concept work",
    conceptTitle: "Диапазон индустрий без выдачи концептов за клиентские проекты.",
    conceptText:
      "Independent-проекты используются для исследования interaction design, visual systems, UX concepts, creative direction и digital experiences в разных индустриях. Коммерческие и концептуальные работы разделены, потому что показывают разные сильные стороны.",
    styleKicker: "Рабочий стиль",
    styleTitle: "Самостоятельный, системный и ориентированный на реализацию.",
    styleIndependentTitle: "Самостоятельность",
    styleIndependentText: "Комфортно работает с проблемой, а не только с чеклистом: исследует, структурирует и предлагает практичное решение.",
    styleBusinessTitle: "Business-aware",
    styleBusinessText: "Учитывает бизнес-модель, поддержку, стоимость, клиентскую путаницу, внутренний workflow и то, что происходит после клика.",
    styleExecutionTitle: "Execution-focused",
    styleExecutionText: "Интересуется работой, которая переходит из концепта в сайт, бренд-материал, brief для поставщика, структуру контента или работающий customer flow.",
    timelineKicker: "Timeline",
    timelineTitle: "Профессиональная работа в UX/UI, web design и digital projects с 2022 года.",
    timeline2022: "Начало профессиональной работы в UX/UI, web design и digital projects.",
    timeline2024: "Расширение работы над полноценными сайтами, информационной архитектурой, responsive design и концептами в разных индустриях.",
    timeline2026: "Коммерческие проекты включают бизнесы в Канаде, Шотландии / Великобритании и Украине; текущий фокус - complete digital experiences.",
    languagesKicker: "Языки и идентичность",
    languagesTitle: "Международная коммуникация без превращения языков в главный сюжет.",
    languagesText:
      "Yana общается на украинском, русском, английском, польском и испанском, а также имеет базовый японский. Профессионально она работает под именем Yana Ellis; имя Yanyo Ellis также используется на отдельных личных и digital-платформах."
  },
  de: {
    title: "Professional Profile | Yana Ellis",
    portfolio: "Portfolio",
    projectGuide: "Projektguide",
    heroKicker: "Professional dossier",
    heroTitle: "Yana Ellis",
    heroRole: "UX/UI & Web Designerin · Digital Product Designer · Multidisciplinary Digital Professional",
    heroIntroOne:
      "Yana Ellis ist eine multidisziplinare UX/UI- und Webdesignerin, die seit 2022 professionell arbeitet und digitales Design, Produktdenken, Markenentwicklung, Marketing, Business Operations und reale Kundenerfahrung verbindet.",
    heroIntroTwo:
      "Ihre Arbeit geht ueber Interface Design hinaus: Sie verbindet Websites, Customer Journeys, operative Anforderungen, Brand Systems und praktische Umsetzung zu digitalen Erlebnissen, die Unternehmen klarer und leichter nutzbar machen.",
    metricOne: "Seit 2022",
    metricOneText: "Professionelle UX/UI-, Web- und Digitalprojektarbeit",
    metricTwo: "3 Maerkte",
    metricTwoText: "Kommerzielle Arbeit mit Bezug zu Ukraine, Kanada und dem Vereinigten Koenigreich",
    metricThree: "Multidisciplinary",
    metricThreeText: "Design, Produkt, Brand, SMM, Operations und Customer Experience",
    profileKicker: "Professional profile",
    profileTitle: "Design, das mit dem Business dahinter verbunden ist.",
    profileOne:
      "Yana arbeitet an der Schnittstelle von Design, digitalen Produkten, Branding, Customer Experience und Business Operations. Projekte beginnen oft, bevor es ein perfektes Briefing gibt: Sie recherchiert das Unternehmen, erkennt, was wirklich gebraucht wird, und verwandelt verstreute Informationen in ein strukturiertes Produkt.",
    profileTwo:
      "Das ist besonders wertvoll, wenn ein Unternehmen mehr braucht als einen visuellen Refresh: klarere Informationsarchitektur, bessere Buchungs- oder Anfragewege, konsistente digitale Praesenz, kundenseitige Inhalte und praktische Systeme, die ausserhalb eines Portfolio-Screenshots funktionieren.",
    capabilitiesKicker: "Core capabilities",
    capabilitiesTitle: "Breite Kompetenz, organisiert um echte Projektverantwortung.",
    capUxTitle: "UX/UI & Product",
    capUxText: "Informationsarchitektur, User Flows, responsive Interfaces, Booking- und Enquiry-Flows, Admin-Planung und Uebersetzung von Business-Logik in nutzbare Screens.",
    capWebTitle: "Web Design",
    capWebText: "Corporate, Service, Hospitality, ecommerce-nahe und Portfolio-Websites vom Konzept und der Struktur bis zum finalen responsive Erlebnis.",
    capBrandTitle: "Brand & Visual",
    capBrandText: "Digital Identity, Typografie, Layoutsysteme, Social Media Visuals, Visitenkarten, physische Brand Applications und produktionsreife Konzepte.",
    capMarketingTitle: "Marketing & SMM",
    capMarketingText: "Content Architecture, Instagram Positioning, Highlight-Strukturen und die Uebersetzung komplexer Business-Information in klare oeffentliche Kommunikation.",
    capOpsTitle: "Operations & CX",
    capOpsText: "Reservation Management, Gaestekommunikation, Buchungskoordination, Check-in-Prozesse, Zahlungsstatus und Analyse von Kundenanforderungen.",
    capVendorTitle: "Procurement",
    capVendorText: "Supplier Research, Angebotsvergleich, Spezifikationen, Preisvergleich und Kommunikation mit Herstellern fuer physische Markenmaterialien.",
    commercialKicker: "Selected commercial work",
    commercialTitle: "Echte Unternehmen, echte Constraints, fertige oder laufende Digitalarbeit.",
    arcedConstruction: "Kommerzielle Website fuer ein kanadisches Bauunternehmen, von Grund auf erstellt mit Fokus auf klare Leistungen, Glaubwuerdigkeit und direkte Anfragewege.",
    arcedTile: "Separate digitale Praesenz fuer ARCED Tile Services, mit Markenbezug und zugleich eigenstaendiger, verstaendlicher Service-Struktur.",
    ecoHair: "Laufendes kommerzielles Projekt mit Services, Terminbuchung, Ecommerce, Kursen, Brand Direction und digitaler Customer Experience.",
    mariaCommercial: "Multidisziplinaeres Business- und Digitalprojekt mit UX/UI, Web Design, Operations, Customer Experience, SMM, Brand Design, Procurement und Project Management.",
    mariaKicker: "Maria Apartments",
    mariaTitle: "Ein digitales Produkt, geformt durch direktes operatives Wissen.",
    mariaOne:
      "Im Unterschied zu einem Designprozess aus einem distanzierten Briefing entstand die Maria Apartments Digital Experience waehrend Yana aktiv an operativen und kundenseitigen Prozessen beteiligt war. Dadurch kannte sie wiederkehrende Gaestefragen, Booking Friction, Preis-Komplexitaet, Verfuegbarkeit und Check-in-Anforderungen aus erster Hand.",
    mariaTwo:
      "Ihre Rolle umfasst Buchungskoordination, Gaestekommunikation, Check-ins, Dokumentation, Website-Struktur, UX/UI, Social Media Architecture, Brand Materials, Supplier Research und Produktionsplanung fuer physische Brand Objects.",
    conceptKicker: "Independent concept work",
    conceptTitle: "Branchenbreite, ohne Konzeptprojekte als Kundenarbeit auszugeben.",
    conceptText:
      "Independent Projects dienen dazu, Interaction Design, Visual Systems, UX Concepts, Creative Direction und Digital Experiences in verschiedenen Branchen zu erforschen. Commercial Work und Concept Work werden getrennt gezeigt, weil sie unterschiedliche Staerken beweisen.",
    styleKicker: "Working style",
    styleTitle: "Selbststaendig, systemorientiert und umsetzungsnah.",
    styleIndependentTitle: "Independent",
    styleIndependentText: "Kann mit einem Problem statt einer Checkliste arbeiten, recherchieren, strukturieren und eine praktikable Loesung vorschlagen.",
    styleBusinessTitle: "Business-aware",
    styleBusinessText: "Beruecksichtigt Business Model, Wartung, Kosten, Kundenverwirrung, interne Workflows und was nach dem Klick passiert.",
    styleExecutionTitle: "Execution-focused",
    styleExecutionText: "Interessiert an Arbeit, die vom Konzept zu nutzbarer Website, Brand Material, Supplier Brief, Content Structure oder Customer Flow werden kann.",
    timelineKicker: "Timeline",
    timelineTitle: "Professionelle Arbeit in UX/UI, Web Design und Digitalprojekten seit 2022.",
    timeline2022: "Beginn professioneller Arbeit in UX/UI, Web Design und Digitalprojekten.",
    timeline2024: "Ausbau vollstaendiger Website-Arbeit, Informationsarchitektur, Responsive Design und multi-industry Concept Work.",
    timeline2026: "Kommerzielle Arbeit umfasst Unternehmen in Kanada, Schottland / Vereinigtes Koenigreich und Ukraine, mit Fokus auf complete digital experiences.",
    languagesKicker: "Languages & identity",
    languagesTitle: "Internationale Kommunikation, ohne Sprache zum Hauptthema zu machen.",
    languagesText:
      "Yana kommuniziert auf Ukrainisch, Russisch, Englisch, Polnisch und Spanisch, mit grundlegenden Japanischkenntnissen. Beruflich arbeitet sie unter dem Namen Yana Ellis; der Name Yanyo Ellis wird auch auf ausgewaehlten persoenlichen und digitalen Plattformen genutzt."
  }
};

profileCopy.uk = { ...profileCopy.en };
profileCopy.pl = { ...profileCopy.en };

function initialLanguage() {
  const saved = localStorage.getItem(languageKey);
  return profileLanguages.includes(saved) ? saved : "en";
}

function applyProfileLanguage(language) {
  const copy = profileCopy[language] || profileCopy.en;
  document.documentElement.lang = language;
  document.title = copy.title;
  localStorage.setItem(languageKey, language);

  document.querySelectorAll("[data-profile]").forEach((node) => {
    const key = node.dataset.profile;
    if (copy[key]) {
      node.textContent = copy[key];
    }
  });

  document.querySelectorAll(".language-button").forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => applyProfileLanguage(button.dataset.lang));
});

applyProfileLanguage(initialLanguage());
