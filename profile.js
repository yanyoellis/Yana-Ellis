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
      "Yana Ellis ist eine multidisziplinäre UX/UI- und Webdesignerin, die seit 2022 professionell arbeitet und digitales Design, Produktdenken, Markenentwicklung, Marketing, Business Operations und reale Kundenerfahrung verbindet.",
    heroIntroTwo:
      "Ihre Arbeit geht über Interface Design hinaus: Sie verbindet Websites, Customer Journeys, operative Anforderungen, Brand Systems und praktische Umsetzung zu digitalen Erlebnissen, die Unternehmen klarer und leichter nutzbar machen.",
    metricOne: "Seit 2022",
    metricOneText: "Professionelle UX/UI-, Web- und Digitalprojektarbeit",
    metricTwo: "3 Märkte",
    metricTwoText: "Kommerzielle Arbeit mit Bezug zu Ukraine, Kanada und dem Vereinigten Königreich",
    metricThree: "Multidisciplinary",
    metricThreeText: "Design, Produkt, Brand, SMM, Operations und Customer Experience",
    profileKicker: "Professional profile",
    profileTitle: "Design, das mit dem Business dahinter verbunden ist.",
    profileOne:
      "Yana arbeitet an der Schnittstelle von Design, digitalen Produkten, Branding, Customer Experience und Business Operations. Projekte beginnen oft, bevor es ein perfektes Briefing gibt: Sie recherchiert das Unternehmen, erkennt, was wirklich gebraucht wird, und verwandelt verstreute Informationen in ein strukturiertes Produkt.",
    profileTwo:
      "Das ist besonders wertvoll, wenn ein Unternehmen mehr braucht als einen visuellen Refresh: klarere Informationsarchitektur, bessere Buchungs- oder Anfragewege, konsistente digitale Präsenz, kundenseitige Inhalte und praktische Systeme, die außerhalb eines Portfolio-Screenshots funktionieren.",
    capabilitiesKicker: "Core capabilities",
    capabilitiesTitle: "Breite Kompetenz, organisiert um echte Projektverantwortung.",
    capUxTitle: "UX/UI & Product",
    capUxText: "Informationsarchitektur, User Flows, responsive Interfaces, Booking- und Enquiry-Flows, Admin-Planung und Übersetzung von Business-Logik in nutzbare Screens.",
    capWebTitle: "Web Design",
    capWebText: "Corporate, Service, Hospitality, ecommerce-nahe und Portfolio-Websites vom Konzept und der Struktur bis zum finalen responsive Erlebnis.",
    capBrandTitle: "Brand & Visual",
    capBrandText: "Digital Identity, Typografie, Layoutsysteme, Social Media Visuals, Visitenkarten, physische Brand Applications und produktionsreife Konzepte.",
    capMarketingTitle: "Marketing & SMM",
    capMarketingText: "Content Architecture, Instagram Positioning, Highlight-Strukturen und die Übersetzung komplexer Business-Information in klare öffentliche Kommunikation.",
    capOpsTitle: "Operations & CX",
    capOpsText: "Reservation Management, Gästekommunikation, Buchungskoordination, Check-in-Prozesse, Zahlungsstatus und Analyse von Kundenanforderungen.",
    capVendorTitle: "Procurement",
    capVendorText: "Supplier Research, Angebotsvergleich, Spezifikationen, Preisvergleich und Kommunikation mit Herstellern für physische Markenmaterialien.",
    commercialKicker: "Selected commercial work",
    commercialTitle: "Echte Unternehmen, echte Constraints, fertige oder laufende Digitalarbeit.",
    arcedConstruction: "Kommerzielle Website für ein kanadisches Bauunternehmen, von Grund auf erstellt mit Fokus auf klare Leistungen, Glaubwürdigkeit und direkte Anfragewege.",
    arcedTile: "Separate digitale Präsenz für ARCED Tile Services, mit Markenbezug und zugleich eigenständiger, verständlicher Service-Struktur.",
    ecoHair: "Laufendes kommerzielles Projekt mit Services, Terminbuchung, Ecommerce, Kursen, Brand Direction und digitaler Customer Experience.",
    mariaCommercial: "Multidisziplinäres Business- und Digitalprojekt mit UX/UI, Web Design, Operations, Customer Experience, SMM, Brand Design, Procurement und Project Management.",
    mariaKicker: "Maria Apartments",
    mariaTitle: "Ein digitales Produkt, geformt durch direktes operatives Wissen.",
    mariaOne:
      "Im Unterschied zu einem Designprozess aus einem distanzierten Briefing entstand die Maria Apartments Digital Experience während Yana aktiv an operativen und kundenseitigen Prozessen beteiligt war. Dadurch kannte sie wiederkehrende Gästefragen, Booking Friction, Preis-Komplexität, Verfügbarkeit und Check-in-Anforderungen aus erster Hand.",
    mariaTwo:
      "Ihre Rolle umfasst Buchungskoordination, Gästekommunikation, Check-ins, Dokumentation, Website-Struktur, UX/UI, Social Media Architecture, Brand Materials, Supplier Research und Produktionsplanung für physische Brand Objects.",
    conceptKicker: "Independent concept work",
    conceptTitle: "Branchenbreite, ohne Konzeptprojekte als Kundenarbeit auszugeben.",
    conceptText:
      "Independent Projects dienen dazu, Interaction Design, Visual Systems, UX Concepts, Creative Direction und Digital Experiences in verschiedenen Branchen zu erforschen. Commercial Work und Concept Work werden getrennt gezeigt, weil sie unterschiedliche Stärken beweisen.",
    styleKicker: "Working style",
    styleTitle: "Selbstständig, systemorientiert und umsetzungsnah.",
    styleIndependentTitle: "Independent",
    styleIndependentText: "Kann mit einem Problem statt einer Checkliste arbeiten, recherchieren, strukturieren und eine praktikable Lösung vorschlagen.",
    styleBusinessTitle: "Business-aware",
    styleBusinessText: "Berücksichtigt Business Model, Wartung, Kosten, Kundenverwirrung, interne Workflows und was nach dem Klick passiert.",
    styleExecutionTitle: "Execution-focused",
    styleExecutionText: "Interessiert an Arbeit, die vom Konzept zu nutzbarer Website, Brand Material, Supplier Brief, Content Structure oder Customer Flow werden kann.",
    timelineKicker: "Timeline",
    timelineTitle: "Professionelle Arbeit in UX/UI, Web Design und Digitalprojekten seit 2022.",
    timeline2022: "Beginn professioneller Arbeit in UX/UI, Web Design und Digitalprojekten.",
    timeline2024: "Ausbau vollständiger Website-Arbeit, Informationsarchitektur, Responsive Design und multi-industry Concept Work.",
    timeline2026: "Kommerzielle Arbeit umfasst Unternehmen in Kanada, Schottland / Vereinigtes Königreich und Ukraine, mit Fokus auf complete digital experiences.",
    languagesKicker: "Languages & identity",
    languagesTitle: "Internationale Kommunikation, ohne Sprache zum Hauptthema zu machen.",
    languagesText:
      "Yana kommuniziert auf Ukrainisch, Russisch, Englisch, Polnisch und Spanisch, mit grundlegenden Japanischkenntnissen. Beruflich arbeitet sie unter dem Namen Yana Ellis; der Name Yanyo Ellis wird auch auf ausgewählten persönlichen und digitalen Plattformen genutzt."
  }
};

profileCopy.uk = {
  ...profileCopy.en,
  title: "Професійний профіль | Yana Ellis",
  portfolio: "Портфоліо",
  projectGuide: "Гайд проєкту",
  heroKicker: "Професійне досьє",
  heroRole: "UX/UI і вебдизайнерка · Digital Product Designer · Multidisciplinary Digital Professional",
  heroIntroOne:
    "Yana Ellis - multidisciplinary UX/UI і вебдизайнерка, яка професійно працює з 2022 року. Її робота поєднує digital design, product thinking, розвиток бренду, маркетинг, бізнес-процеси та реальний досвід взаємодії з клієнтами.",
  heroIntroTwo:
    "Її робота виходить за межі дизайну інтерфейсів: вона поєднує сайти, customer journeys, операційні вимоги, бренд-системи й практичну реалізацію в цифрові досвіди, які роблять бізнес зрозумілішим і зручнішим.",
  metricOne: "З 2022",
  metricOneText: "Професійна робота в UX/UI, web і digital projects",
  metricTwo: "3 ринки",
  metricTwoText: "Комерційна робота, пов'язана з Україною, Канадою та Великою Британією",
  metricThreeText: "Design, product, brand, SMM, operations і customer experience",
  profileKicker: "Професійний профіль",
  profileTitle: "Дизайн, пов'язаний із бізнесом за інтерфейсом.",
  profileOne:
    "Yana працює на перетині дизайну, цифрових продуктів, брендингу, customer experience і бізнес-процесів. Її проєкти часто починаються ще до ідеального брифу: вона досліджує бізнес, визначає, що насправді потрібно створити, і перетворює розрізнену інформацію на структурований продукт.",
  profileTwo:
    "Це особливо цінно там, де компанії потрібен не просто візуальний редизайн, а ясніша інформаційна архітектура, кращий шлях бронювання або заявки, послідовна digital presence, зрозумілий клієнтський контент і практичні системи, що працюють поза красивим скриншотом.",
  capabilitiesKicker: "Ключові компетенції",
  capabilitiesTitle: "Широкий діапазон, зібраний навколо реальної відповідальності за проєкт.",
  capUxText: "Інформаційна архітектура, user flows, адаптивні інтерфейси, booking і enquiry flows, планування admin-інтерфейсів та переклад бізнес-логіки в зручні екрани.",
  capWebText: "Корпоративні, сервісні, hospitality, ecommerce-related і portfolio websites: від концепції та структури до фінального адаптивного досвіду.",
  capBrandText: "Digital identity, типографіка, layout systems, social media visuals, візитки, фізичні носії бренду та production-ready concepts.",
  capMarketingText: "Content architecture, Instagram positioning, структура Highlights і переклад складної бізнес-інформації у зрозумілу публічну комунікацію.",
  capOpsText: "Reservation management, комунікація з гостями, координація бронювань, check-in processes, tracking оплат і аналіз вимог клієнтів.",
  capVendorText: "Пошук постачальників, збір пропозицій, підготовка специфікацій, порівняння цін і комунікація з виробниками для фізичних бренд-матеріалів.",
  commercialKicker: "Комерційні роботи",
  commercialTitle: "Реальні бізнеси, реальні обмеження, завершена або поточна digital-робота.",
  arcedConstruction: "Комерційний сайт, створений з нуля для канадської будівельної компанії, з фокусом на ясні послуги, довіру та прямі шляхи заявки.",
  arcedTile: "Окреме digital presence для tile-напряму ARCED: зі збереженням зв'язку з брендом, але самостійною і зрозумілою структурою послуг.",
  ecoHair: "Поточний комерційний проєкт, що поєднує послуги, запис, ecommerce, курси, brand direction і digital customer experience.",
  mariaCommercial: "Multidisciplinary бізнес- і digital-проєкт, що поєднує UX/UI, web design, operations, customer experience, SMM, brand design, procurement і project management.",
  mariaTitle: "Digital product, сформований реальним операційним досвідом.",
  mariaOne:
    "На відміну від дизайнера, який працює лише за зовнішнім брифом, Yana проєктувала digital experience Maria Apartments, одночасно беручи участь в операційних і клієнтських процесах бізнесу. Це дало пряме розуміння повторюваних питань гостей, friction у бронюванні, складності цін, доступності квартир і вимог check-in.",
  mariaTwo:
    "Її роль включає координацію бронювань, комунікацію з гостями, check-ins, документацію, структуру сайту, UX/UI, social media architecture, branded materials, supplier research і production planning фізичних бренд-об'єктів.",
  conceptTitle: "Діапазон індустрій без видавання концептів за клієнтські проєкти.",
  conceptText:
    "Independent-проєкти використовуються для дослідження interaction design, visual systems, UX concepts, creative direction і digital experiences у різних індустріях. Комерційні та концептуальні роботи розділені, бо показують різні сильні сторони.",
  styleKicker: "Робочий стиль",
  styleTitle: "Самостійний, системний і орієнтований на реалізацію.",
  styleIndependentTitle: "Самостійність",
  styleIndependentText: "Комфортно працює з проблемою, а не лише з чеклистом: досліджує, структурує і пропонує практичне рішення.",
  styleBusinessText: "Враховує бізнес-модель, підтримку, вартість, клієнтську плутанину, внутрішній workflow і те, що відбувається після кліку.",
  styleExecutionText: "Цікавиться роботою, яка переходить із концепту в сайт, бренд-матеріал, brief для постачальника, структуру контенту або робочий customer flow.",
  timelineKicker: "Timeline",
  timelineTitle: "Професійна робота в UX/UI, web design і digital projects з 2022 року.",
  timeline2022: "Початок професійної роботи в UX/UI, web design і digital projects.",
  timeline2024: "Розширення роботи над повноцінними сайтами, інформаційною архітектурою, responsive design і концептами в різних індустріях.",
  timeline2026: "Комерційні проєкти включають бізнеси в Канаді, Шотландії / Великій Британії та Україні; поточний фокус - complete digital experiences.",
  languagesKicker: "Мови та ідентичність",
  languagesTitle: "Міжнародна комунікація без перетворення мов на головний сюжет.",
  languagesText:
    "Yana спілкується українською, російською, англійською, польською та іспанською, а також має базову японську. Професійно вона працює під іменем Yana Ellis; ім'я Yanyo Ellis також використовується на окремих особистих і digital-платформах."
};

profileCopy.pl = {
  ...profileCopy.en,
  title: "Profil zawodowy | Yana Ellis",
  projectGuide: "Przewodnik",
  heroKicker: "Profil zawodowy",
  heroRole: "Projektantka UX/UI i web · Digital Product Designer · Multidisciplinary Digital Professional",
  heroIntroOne:
    "Yana Ellis to multidisciplinary projektantka UX/UI i web, pracująca zawodowo od 2022 roku. Jej praca łączy digital design, product thinking, rozwój marki, marketing, procesy biznesowe i realne doświadczenie kontaktu z klientami.",
  heroIntroTwo:
    "Jej praca wykracza poza projektowanie interfejsów: łączy strony internetowe, customer journeys, wymagania operacyjne, systemy marki i praktyczną realizację w doświadczenia cyfrowe, które czynią biznes jaśniejszym i łatwiejszym w użyciu.",
  metricOne: "Od 2022",
  metricOneText: "Profesjonalna praca w UX/UI, web i digital projects",
  metricTwo: "3 rynki",
  metricTwoText: "Praca komercyjna związana z Ukrainą, Kanadą i Wielką Brytanią",
  profileKicker: "Profil zawodowy",
  profileTitle: "Design połączony z biznesem za interfejsem.",
  profileOne:
    "Yana pracuje na styku designu, produktów cyfrowych, brandingu, customer experience i procesów biznesowych. Jej projekty często zaczynają się zanim istnieje idealny brief: bada biznes, określa, co naprawdę trzeba zbudować, i zamienia rozproszone informacje w uporządkowany produkt.",
  profileTwo:
    "To szczególnie wartościowe tam, gdzie firma potrzebuje więcej niż wizualnego odświeżenia: czytelniejszej architektury informacji, lepszej ścieżki rezerwacji lub zapytania, spójnej obecności cyfrowej, zrozumiałych treści dla klienta i praktycznych systemów działających poza ładnym screenshotem.",
  capabilitiesKicker: "Kluczowe kompetencje",
  capabilitiesTitle: "Szeroki zakres zorganizowany wokół realnej odpowiedzialności za projekt.",
  capUxText: "Architektura informacji, user flows, responsywne interfejsy, booking i enquiry flows, planowanie paneli admin oraz przekładanie logiki biznesowej na użyteczne ekrany.",
  capWebText: "Strony firmowe, usługowe, hospitality, ecommerce-related i portfolio websites: od koncepcji i struktury po finalne responsywne doświadczenie.",
  capBrandText: "Digital identity, typografia, layout systems, social media visuals, wizytówki, fizyczne nośniki marki i production-ready concepts.",
  capMarketingText: "Content architecture, Instagram positioning, struktura Highlights i przekładanie złożonych informacji biznesowych na jasną komunikację publiczną.",
  capOpsText: "Reservation management, komunikacja z gośćmi, koordynacja rezerwacji, check-in processes, tracking płatności i analiza wymagań klientów.",
  capVendorText: "Wyszukiwanie dostawców, zbieranie ofert, przygotowanie specyfikacji, porównywanie cen i komunikacja z producentami fizycznych materiałów marki.",
  commercialKicker: "Prace komercyjne",
  commercialTitle: "Prawdziwe biznesy, realne ograniczenia, ukończona lub trwająca praca digital.",
  arcedConstruction: "Komercyjna strona stworzona od podstaw dla kanadyjskiej firmy budowlanej, z naciskiem na jasne usługi, wiarygodność i bezpośrednią ścieżkę kontaktu.",
  arcedTile: "Osobna obecność cyfrowa dla kierunku tile usług ARCED: spójna z marką, ale samodzielna i zrozumiała jako osobna kategoria usług.",
  ecoHair: "Trwający projekt komercyjny łączący usługi, rezerwacje, ecommerce, kursy, brand direction i digital customer experience.",
  mariaCommercial: "Multidisciplinary projekt biznesowy i digital łączący UX/UI, web design, operations, customer experience, SMM, brand design, procurement i project management.",
  mariaTitle: "Digital product ukształtowany przez realne doświadczenie operacyjne.",
  mariaOne:
    "W odróżnieniu od projektanta pracującego wyłącznie z zewnętrznym briefem, Yana projektowała digital experience Maria Apartments, jednocześnie uczestnicząc w operacyjnych i klienckich procesach biznesu. Dało jej to bezpośredni wgląd w powtarzające się pytania gości, friction w rezerwacji, złożoność cen, dostępność apartamentów i wymagania check-in.",
  mariaTwo:
    "Jej rola obejmuje koordynację rezerwacji, komunikację z gośćmi, check-ins, dokumentację, strukturę strony, UX/UI, social media architecture, branded materials, supplier research i production planning fizycznych obiektów marki.",
  conceptTitle: "Zakres branż bez udawania, że projekty koncepcyjne są pracą kliencką.",
  conceptText:
    "Independent projects służą do eksplorowania interaction design, visual systems, UX concepts, creative direction i digital experiences w różnych branżach. Prace komercyjne i koncepcyjne są rozdzielone, ponieważ pokazują różne mocne strony.",
  styleKicker: "Styl pracy",
  styleTitle: "Samodzielny, systemowy i nastawiony na realizację.",
  styleIndependentTitle: "Samodzielność",
  styleIndependentText: "Potrafi pracować z problemem, nie tylko z checklistą: bada, porządkuje i proponuje praktyczne rozwiązanie.",
  styleBusinessText: "Uwzględnia model biznesowy, utrzymanie, koszt, niejasności po stronie klienta, wewnętrzny workflow i to, co dzieje się po kliknięciu.",
  styleExecutionText: "Interesuje ją praca, która przechodzi z koncepcji w stronę, materiał marki, brief dla dostawcy, strukturę treści albo działający customer flow.",
  timelineTitle: "Profesjonalna praca w UX/UI, web design i digital projects od 2022 roku.",
  timeline2022: "Początek profesjonalnej pracy w UX/UI, web design i digital projects.",
  timeline2024: "Rozwój pełnych projektów stron, architektury informacji, responsive design i koncepcji w różnych branżach.",
  timeline2026: "Prace komercyjne obejmują biznesy w Kanadzie, Szkocji / Wielkiej Brytanii i Ukrainie; obecny fokus to complete digital experiences.",
  languagesKicker: "Języki i tożsamość",
  languagesTitle: "Komunikacja międzynarodowa bez robienia z języków głównego tematu.",
  languagesText:
    "Yana komunikuje się po ukraińsku, rosyjsku, angielsku, polsku i hiszpańsku, ma też podstawową znajomość japońskiego. Zawodowo działa pod nazwiskiem Yana Ellis; nazwa Yanyo Ellis jest również używana na wybranych osobistych i digital-platformach."
};

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
