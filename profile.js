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
    metricTwo: "5 commercial case studies",
    metricTwoText: "Commercial case studies across Ukraine, Canada, the United States and the Netherlands",
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
    timelineKicker: "Timeline",
    timelineTitle: "Professional work in UX/UI, web design and digital projects since 2022.",
    timeline2022: "Began professional work in UX/UI, web design and digital projects.",
    timeline2024: "Expanded complete website work, information architecture, responsive design and multi-industry independent concepts.",
    timeline2026: "The commercial portfolio includes five case studies across hospitality, construction, bar and beverage, finance and veterinary healthcare.",
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
    metricTwo: "5 коммерческих кейсов",
    metricTwoText: "Коммерческие кейсы в Украине, Канаде, США и Нидерландах",
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
    timelineKicker: "Timeline",
    timelineTitle: "Профессиональная работа в UX/UI, web design и digital projects с 2022 года.",
    timeline2022: "Начало профессиональной работы в UX/UI, web design и digital projects.",
    timeline2024: "Расширение работы над полноценными сайтами, информационной архитектурой, responsive design и концептами в разных индустриях.",
    timeline2026: "Коммерческое портфолио включает пять кейсов в сферах гостеприимства, строительства, баров и напитков, финансов и ветеринарной медицины.",
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
    metricTwo: "5 kommerzielle Fallstudien",
    metricTwoText: "Kommerzielle Fallstudien in der Ukraine, Kanada, den USA und den Niederlanden",
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
    timelineKicker: "Timeline",
    timelineTitle: "Professionelle Arbeit in UX/UI, Web Design und Digitalprojekten seit 2022.",
    timeline2022: "Beginn professioneller Arbeit in UX/UI, Web Design und Digitalprojekten.",
    timeline2024: "Ausbau vollständiger Website-Arbeit, Informationsarchitektur, Responsive Design und multi-industry Concept Work.",
    timeline2026: "Das kommerzielle Portfolio umfasst fünf Fallstudien aus Hospitality, Bauwesen, Bars und Getränken, Finanzen und Veterinärmedizin.",
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
  metricTwo: "5 комерційних кейсів",
  metricTwoText: "Комерційні кейси в Україні, Канаді, США та Нідерландах",
  metricThreeText: "Design, product, brand, SMM, operations і customer experience",
  profileKicker: "Професійний профіль",
  profileTitle: "Дизайн, пов'язаний із бізнесом за інтерфейсом.",
  profileOne:
    "Yana працює на перетині дизайну, цифрових продуктів, брендингу, customer experience і бізнес-процесів. Її проєкти часто починаються ще до ідеального брифу: вона досліджує бізнес, визначає, що насправді потрібно створити, і перетворює розрізнену інформацію на структурований продукт.",
  profileTwo:
    "Це особливо цінно там, де компанії потрібен не просто візуальний редизайн, а ясніша інформаційна архітектура, кращий шлях бронювання або заявки, послідовна digital presence, зрозумілий клієнтський контент і практичні системи, що працюють поза красивим скриншотом.",
  capabilitiesKicker: "Ключові компетенції",
  capabilitiesTitle: "Широкий діапазон, зібраний навколо реальної відповідальності за проєкт.",
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
  timelineKicker: "Timeline",
  timelineTitle: "Професійна робота в UX/UI, web design і digital projects з 2022 року.",
  timeline2022: "Початок професійної роботи в UX/UI, web design і digital projects.",
  timeline2024: "Розширення роботи над повноцінними сайтами, інформаційною архітектурою, responsive design і концептами в різних індустріях.",
  timeline2026: "Комерційне портфоліо включає п’ять кейсів у сферах гостинності, будівництва, барів і напоїв, фінансів та ветеринарної медицини.",
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
  metricTwo: "5 projektów komercyjnych",
  metricTwoText: "Projekty komercyjne na Ukrainie, w Kanadzie, USA i Niderlandach",
  profileKicker: "Profil zawodowy",
  profileTitle: "Design połączony z biznesem za interfejsem.",
  profileOne:
    "Yana pracuje na styku designu, produktów cyfrowych, brandingu, customer experience i procesów biznesowych. Jej projekty często zaczynają się zanim istnieje idealny brief: bada biznes, określa, co naprawdę trzeba zbudować, i zamienia rozproszone informacje w uporządkowany produkt.",
  profileTwo:
    "To szczególnie wartościowe tam, gdzie firma potrzebuje więcej niż wizualnego odświeżenia: czytelniejszej architektury informacji, lepszej ścieżki rezerwacji lub zapytania, spójnej obecności cyfrowej, zrozumiałych treści dla klienta i praktycznych systemów działających poza ładnym screenshotem.",
  capabilitiesKicker: "Kluczowe kompetencje",
  capabilitiesTitle: "Szeroki zakres zorganizowany wokół realnej odpowiedzialności za projekt.",
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
  timelineTitle: "Profesjonalna praca w UX/UI, web design i digital projects od 2022 roku.",
  timeline2022: "Początek profesjonalnej pracy w UX/UI, web design i digital projects.",
  timeline2024: "Rozwój pełnych projektów stron, architektury informacji, responsive design i koncepcji w różnych branżach.",
  timeline2026: "Portfolio komercyjne obejmuje pięć case studies z obszarów hotelarstwa, budownictwa, barów i napojów, finansów oraz weterynarii.",
  languagesKicker: "Języki i tożsamość",
  languagesTitle: "Komunikacja międzynarodowa bez robienia z języków głównego tematu.",
  languagesText:
    "Yana komunikuje się po ukraińsku, rosyjsku, angielsku, polsku i hiszpańsku, ma też podstawową znajomość japońskiego. Zawodowo działa pod nazwiskiem Yana Ellis; nazwa Yanyo Ellis jest również używana na wybranych osobistych i digital-platformach."
};

Object.assign(profileCopy.en, {
  projectArchiveKicker: "Selected project experience",
  projectArchiveTitle: "Commercial and independent case studies.",
  projectArchiveIntro:
    "Commercial and independent case studies across construction, hospitality, beauty, retail, healthcare and professional services. Explore individual projects for business context, challenges, approach and delivered work.",
  filterAll: "All",
  filterCommercial: "Commercial",
  filterIndependent: "Independent",
  filterWeb: "Web",
  filterEcommerce: "Ecommerce",
  filterHospitality: "Hospitality",
  filterHealthcare: "Healthcare",
  modalClose: "Close x"
});

Object.assign(profileCopy.ru, {
  heroRole: "UX/UI и веб-дизайнер · дизайнер цифровых продуктов · мультидисциплинарный digital-специалист",
  heroIntroOne:
    "Yana Ellis - мультидисциплинарный UX/UI и веб-дизайнер, профессионально работающая с 2022 года. Ее работа объединяет цифровой дизайн, продуктовое мышление, развитие бренда, маркетинг, бизнес-процессы и реальный опыт взаимодействия с клиентами.",
  heroIntroTwo:
    "Ее работа выходит за рамки интерфейсов: она связывает сайты, клиентские пути, операционные требования, бренд-системы и практическую реализацию в цифровой опыт, который делает бизнес понятнее и удобнее.",
  metricOneText: "Профессиональная работа в UX/UI, веб-дизайне и цифровых проектах",
  metricThree: "Мультидисциплинарность",
  metricThreeText: "Дизайн, продукт, бренд, SMM, операционные процессы и клиентский опыт",
  profileOne:
    "Yana работает на стыке дизайна, цифровых продуктов, брендинга, клиентского опыта и бизнес-процессов. Ее проекты часто начинаются еще до идеального брифа: она исследует бизнес, определяет, что действительно нужно создать, и превращает разрозненную информацию в структурированный продукт.",
  profileTwo:
    "Это особенно ценно там, где компании нужен не просто визуальный редизайн, а более ясная информационная архитектура, удобный путь бронирования или заявки, последовательное цифровое присутствие, понятный клиентский контент и практичные системы, которые работают за пределами красивого скриншота.",
  capabilitiesTitle: "Широкий диапазон, собранный вокруг реальной ответственности за проект.",
  mariaTitle: "Цифровой продукт, сформированный реальным операционным опытом.",
  mariaOne:
    "В отличие от дизайнера, работающего только по внешнему брифу, Yana проектировала цифровой опыт Maria Apartments, одновременно участвуя в операционных и клиентских процессах бизнеса. Это дало прямое понимание повторяющихся вопросов гостей, трения в бронировании, сложности цен, доступности квартир и требований к заселению.",
  mariaTwo:
    "Ее роль включает координацию бронирований, коммуникацию с гостями, заселения, документацию, структуру сайта, UX/UI, архитектуру соцсетей, бренд-материалы, поиск поставщиков и планирование производства физических бренд-объектов.",
  timelineKicker: "Хронология",
  timelineTitle: "Профессиональная работа в UX/UI, веб-дизайне и цифровых проектах с 2022 года.",
  timeline2022: "Начало профессиональной работы в UX/UI, веб-дизайне и цифровых проектах.",
  timeline2024: "Расширение работы над полноценными сайтами, информационной архитектурой, адаптивным дизайном и концептами в разных индустриях.",
  timeline2026: "Коммерческое портфолио включает пять кейсов в сферах гостеприимства, строительства, баров и напитков, финансов и ветеринарной медицины.",
  projectArchiveKicker: "Опыт избранных проектов",
  projectArchiveTitle: "Коммерческие и независимые кейсы.",
  projectArchiveIntro:
    "Коммерческие и независимые кейсы в строительстве, hospitality, beauty, ритейле, healthcare и профессиональных услугах. Откройте проект, чтобы увидеть контекст бизнеса, задачи, подход и выполненную работу.",
  filterAll: "Все",
  filterCommercial: "Коммерческие",
  filterIndependent: "Независимые",
  filterWeb: "Веб",
  filterEcommerce: "Ecommerce",
  filterHospitality: "Hospitality",
  filterHealthcare: "Healthcare",
  modalClose: "Закрыть x"
});

Object.assign(profileCopy.uk, {
  heroRole: "UX/UI і вебдизайнерка · дизайнерка цифрових продуктів · мультидисциплінарна digital-спеціалістка",
  heroIntroOne:
    "Yana Ellis - мультидисциплінарна UX/UI і вебдизайнерка, яка професійно працює з 2022 року. Її робота поєднує цифровий дизайн, продуктове мислення, розвиток бренду, маркетинг, бізнес-процеси та реальний досвід взаємодії з клієнтами.",
  heroIntroTwo:
    "Її робота виходить за межі дизайну інтерфейсів: вона поєднує сайти, клієнтські шляхи, операційні вимоги, бренд-системи й практичну реалізацію в цифрові досвіди, які роблять бізнес зрозумілішим і зручнішим.",
  metricOneText: "Професійна робота в UX/UI, вебдизайні та цифрових проєктах",
  metricThree: "Мультидисциплінарність",
  metricThreeText: "Дизайн, продукт, бренд, SMM, операційні процеси та клієнтський досвід",
  mariaCommercial: "Мультидисциплінарний бізнес- і цифровий проєкт, що поєднує UX/UI, вебдизайн, операційні процеси, клієнтський досвід, SMM, бренд-дизайн, роботу з постачальниками та управління проєктом.",
  mariaTitle: "Цифровий продукт, сформований реальним операційним досвідом.",
  mariaOne:
    "На відміну від дизайнера, який працює лише за зовнішнім брифом, Yana проєктувала цифровий досвід Maria Apartments, одночасно беручи участь в операційних і клієнтських процесах бізнесу. Це дало пряме розуміння повторюваних питань гостей, тертя в бронюванні, складності цін, доступності квартир і вимог до заселення.",
  mariaTwo:
    "Її роль включає координацію бронювань, комунікацію з гостями, заселення, документацію, структуру сайту, UX/UI, архітектуру соцмереж, бренд-матеріали, пошук постачальників і планування виробництва фізичних бренд-об'єктів.",
  timelineKicker: "Хронологія",
  timelineTitle: "Професійна робота в UX/UI, вебдизайні та цифрових проєктах з 2022 року.",
  timeline2022: "Початок професійної роботи в UX/UI, вебдизайні та цифрових проєктах.",
  timeline2024: "Розширення роботи над повноцінними сайтами, інформаційною архітектурою, адаптивним дизайном і концептами в різних індустріях.",
  timeline2026: "Комерційне портфоліо включає п’ять кейсів у сферах гостинності, будівництва, барів і напоїв, фінансів та ветеринарної медицини.",
  projectArchiveKicker: "Досвід вибраних проєктів",
  projectArchiveTitle: "Комерційні та незалежні кейси.",
  projectArchiveIntro:
    "Комерційні та незалежні кейси у будівництві, hospitality, beauty, ритейлі, healthcare і професійних послугах. Відкрийте проєкт, щоб побачити контекст бізнесу, задачі, підхід і виконану роботу.",
  filterAll: "Усі",
  filterCommercial: "Комерційні",
  filterIndependent: "Незалежні",
  filterWeb: "Веб",
  filterEcommerce: "Ecommerce",
  filterHospitality: "Hospitality",
  filterHealthcare: "Healthcare",
  modalClose: "Закрити x"
});

Object.assign(profileCopy.pl, {
  heroRole: "Projektantka UX/UI i web · projektantka produktów cyfrowych · multidyscyplinarna specjalistka digital",
  metricOneText: "Profesjonalna praca w UX/UI, web designie i projektach cyfrowych",
  metricThree: "Multidyscyplinarność",
  metricThreeText: "Design, produkt, marka, SMM, procesy operacyjne i doświadczenie klienta",
  timelineTitle: "Profesjonalna praca w UX/UI, web designie i projektach cyfrowych od 2022 roku.",
  timeline2022: "Początek profesjonalnej pracy w UX/UI, web designie i projektach cyfrowych.",
  timeline2026: "Portfolio komercyjne obejmuje pięć case studies z obszarów hotelarstwa, budownictwa, barów i napojów, finansów oraz weterynarii.",
  projectArchiveKicker: "Wybrane doświadczenie projektowe",
  projectArchiveTitle: "Komercyjne i niezależne case studies.",
  projectArchiveIntro:
    "Komercyjne i niezależne case studies z obszaru budownictwa, hospitality, beauty, retailu, healthcare i usług profesjonalnych. Otwórz projekt, aby zobaczyć kontekst biznesowy, wyzwania, podejście i wykonaną pracę.",
  filterAll: "Wszystkie",
  filterCommercial: "Komercyjne",
  filterIndependent: "Niezależne",
  filterWeb: "Web",
  filterEcommerce: "Ecommerce",
  filterHospitality: "Hospitality",
  filterHealthcare: "Healthcare",
  modalClose: "Zamknij x"
});

Object.assign(profileCopy.de, {
  title: "Berufsprofil | Yana Ellis",
  heroKicker: "Berufsprofil",
  heroRole: "UX/UI- und Webdesignerin · Designerin digitaler Produkte · multidisziplinare Digital-Spezialistin",
  metricThree: "Multidisziplinar",
  metricThreeText: "Design, Produkt, Marke, SMM, operative Prozesse und Customer Experience",
  profileKicker: "Berufsprofil",
  capabilitiesKicker: "Kernkompetenzen",
  commercialKicker: "Ausgewahlte kommerzielle Arbeit",
  conceptKicker: "Unabhangige Konzeptarbeit",
  styleKicker: "Arbeitsstil",
  timelineKicker: "Zeitlinie",
  timeline2026: "Das kommerzielle Portfolio umfasst fünf Fallstudien aus Hospitality, Bauwesen, Bars und Getränken, Finanzen und Veterinärmedizin.",
  languagesKicker: "Sprachen und Identitat",
  projectArchiveKicker: "Ausgewahlte Projekterfahrung",
  projectArchiveTitle: "Kommerzielle und unabhangige Fallstudien.",
  projectArchiveIntro:
    "Kommerzielle und unabhangige Fallstudien aus Bau, Hospitality, Beauty, Retail, Healthcare und professionellen Dienstleistungen. Offnen Sie einzelne Projekte fur Business-Kontext, Herausforderungen, Ansatz und ausgefuhrte Arbeit.",
  filterAll: "Alle",
  filterCommercial: "Kommerziell",
  filterIndependent: "Unabhangig",
  filterWeb: "Web",
  filterEcommerce: "Ecommerce",
  filterHospitality: "Hospitality",
  filterHealthcare: "Healthcare",
  modalClose: "Schliessen x"
});

Object.assign(profileCopy.en, {
  capabilitiesKicker: "Expertise & Technology",
  capabilitiesTitle: "From the first idea to a functioning digital product.",
  capabilitiesDescription:
    "My work brings together design, development, visual communication, and an understanding of how businesses operate. I approach projects as connected systems, where the interface, functionality, brand, and customer experience should work together.",
  capability01Title: "Design & Product",
  capability01UxTitle: "UX/UI & Digital Product Design",
  capability01UxText1:
    "I design intuitive digital experiences for websites, mobile applications, and complex web-based platforms. My work includes information architecture, user journeys, wireframes, interactive interfaces, design systems, and visual hierarchy.",
  capability01UxText2:
    "I focus on making complicated functionality understandable, whether that means simplifying a booking process, organising financial information, or designing a dashboard with multiple user roles.",
  capability01ExperienceTitle: "User Experience & Interaction",
  capability01ExperienceText1:
    "Every interface should have a purpose beyond looking attractive. I consider how people navigate a product, what information they need, where confusion might occur, and how each interaction contributes to a smoother experience.",
  capability01ExperienceText2:
    "This includes responsive layouts, interaction states, forms, onboarding flows, accessibility considerations, and consistent interface behaviour.",
  capability02Title: "Development & Systems",
  capability02WebTitle: "Web Development",
  capability02WebText1:
    "I develop websites and interactive web applications, connecting visual design with functional implementation. Depending on the project, my work involves HTML, CSS, JavaScript, TypeScript, React, and Next.js.",
  capability02WebText2:
    "I work across the structure, presentation, and functionality of digital products, from custom interfaces and reusable components to dynamic content and interactive features.",
  capability02BackendTitle: "Backend, Databases & Integrations",
  capability02BackendText1:
    "A website often needs more than an attractive front end. I work with databases, APIs, server-side functionality, and third-party services to connect customer-facing interfaces with the systems behind them.",
  capability02BackendText2:
    "My experience includes PostgreSQL, SQL, Python, booking and payment integrations, administrative dashboards, and automated communication workflows.",
  capability02AutomationTitle: "Automation & Business Tools",
  capability02AutomationText1:
    "I develop digital solutions intended to reduce repetitive manual work and improve the flow of information between customers, staff, and business systems.",
  capability02AutomationText2:
    "These may include reservation management, availability calendars, administrative controls, notifications, and integrations with external platforms.",
  capability03Title: "Brand & Business",
  capability03IdentityTitle: "Brand Identity & Creative Direction",
  capability03IdentityText1:
    "I create visual identities that give businesses a consistent and recognisable presence. This includes logos, typography, colour systems, brand applications, digital assets, and printed materials.",
  capability03IdentityText2:
    "My approach connects visual decisions with a brand's audience, positioning, personality, and practical needs.",
  capability03StrategyTitle: "Digital Strategy & Communication",
  capability03StrategyText1:
    "I work with digital content, social media presentation, and communication structures to help businesses explain what they offer more clearly.",
  capability03StrategyText2:
    "This includes content planning, social media identity, visual direction, information hierarchy, and the consistency of communication across different platforms.",
  capability03ExperienceTitle: "Customer Experience & Operations",
  capability03ExperienceText1:
    "My experience extends beyond the interface itself. I consider how digital tools support actual business processes, including enquiries, reservations, payments, customer communication, and administrative workflows.",
  capability03ExperienceText2:
    "Understanding these operations helps me design solutions that work for both the customer using a product and the people managing it.",
  capability04Title: "Creative & Development Tools",
  capability04DesignTitle: "Design & Visual Production",
  capability04DesignTools: "Figma · Adobe Photoshop · Adobe Illustrator",
  capability04DesignText:
    "I use design and visual production tools to explore concepts, develop interface systems, create brand assets, prepare graphics, and communicate design decisions.",
  capability04WorkflowTitle: "Development & Workflow",
  capability04WorkflowTools: "Git · GitHub · Vercel · AI-Assisted Development",
  capability04WorkflowText1:
    "My development workflow combines design thinking, technical implementation, version control, AI-assisted coding, testing, and deployment.",
  capability04WorkflowText2:
    "I use the tools that best fit a project's requirements rather than forcing every idea into the same technology or process.",
  styleKicker: "Working style",
  styleTitle: "HOW I WORK",
  styleSubtitle: "Thoughtful decisions. Independent execution. Practical results.",
  styleIntroOne:
    "I approach every project as more than a collection of screens or individual design tasks. My goal is to understand what needs to be created, why it matters, and how it should function in practice.",
  styleIntroTwo:
    "I work independently across creative and technical disciplines, connecting business requirements, design decisions, and implementation into one coherent process.",
  style01Title: "Independent Ownership",
  style01Subtitle: "One project. A connected process. Clear responsibility.",
  style01Text1:
    "I prefer taking responsibility for the complete direction of a project rather than working on isolated tasks without understanding the bigger picture.",
  style01Text2:
    "My work begins with identifying objectives, clarifying requirements, and understanding the problem that needs to be solved. From there, I organise the process into manageable stages, establish priorities, and make decisions with the final result in mind.",
  style01Text3:
    "Working independently allows me to maintain consistency between the original concept, the visual direction, and technical implementation.",
  style01Text4:
    "It does not mean working without communication. I believe clear expectations, meaningful feedback, and transparent decisions are essential to keeping a project aligned with its objectives.",
  style01Focus: "My focus: ownership, organisation, consistency, and accountability.",
  style02Title: "Systems Thinking",
  style02Subtitle: "Understanding the connections behind the interface.",
  style02Text1:
    "A digital product rarely exists in isolation. A website may be connected to bookings, payments, customer communication, internal administration, marketing, or other business processes.",
  style02Text2: "Before designing individual screens, I try to understand how these elements interact.",
  style02Text3:
    "I consider the people who will use the product, the tasks they need to complete, the information moving between different systems, and the operational requirements behind the interface.",
  style02Text4:
    "This perspective helps me identify unnecessary complexity, disconnected processes, and opportunities to make the experience more intuitive.",
  style02Text5:
    "Instead of treating every feature as a separate element, I aim to create solutions in which different parts of the product support one another.",
  style02Focus: "My focus: business logic, user journeys, information flow, and connected experiences.",
  style03Title: "Design & Execution",
  style03Subtitle: "From visual direction to something that actually works.",
  style03Text1: "I see design and development as connected parts of the same process.",
  style03Text2:
    "A strong concept should be visually convincing, but it should also be technically achievable, intuitive to navigate, and appropriate for the people who will use it.",
  style03Text3:
    "I begin by defining the structure and visual direction, exploring how information, typography, layout, and interactions can communicate the intended experience.",
  style03Text4:
    "As the project develops, I consider how these decisions translate into functional interfaces, reusable elements, technical integrations, and real user interactions.",
  style03Text5:
    "I work iteratively, refining the experience as design and implementation reveal new requirements or opportunities for improvement.",
  style03Text6:
    "My goal is not simply to present an attractive concept, but to bring it as close as possible to a complete, usable digital product.",
  style03Focus: "My focus: visual consistency, technical feasibility, functional implementation, and refinement.",
  style04Title: "Built for Reality",
  style04Subtitle: "Designed for people. Built for actual business conditions.",
  style04Text1: "A project should work beyond a polished presentation or an ideal demonstration.",
  style04Text2:
    "I consider how a product will behave when real customers use it, when information changes, when administrators need to update content, and when the business grows or its requirements evolve.",
  style04Text3:
    "This means paying attention to usability, reliability, maintainability, performance, and the practical details that are easy to overlook during the design stage.",
  style04Text4:
    "I also consider what happens after delivery: whether the solution can be understood, managed, and supported without unnecessary complexity.",
  style04Text5: "I value thoughtful execution over impressive features that serve no meaningful purpose.",
  style04Text6:
    "A successful digital product should not only look professional. It should make something easier, clearer, or more effective for the people who depend on it.",
  style04Focus: "My focus: usability, reliability, maintainability, and practical business value."
});

Object.assign(profileCopy.uk, {
  capabilitiesKicker: "Компетенції та технології",
  capabilitiesTitle: "Від першої ідеї до функціонального цифрового продукту.",
  capabilitiesDescription:
    "Моя робота поєднує дизайн, розробку, візуальну комунікацію та розуміння того, як працює бізнес. Я розглядаю проєкти як пов’язані системи, у яких інтерфейс, функціональність, бренд і клієнтський досвід мають працювати разом.",
  capability01Title: "Дизайн і продукт",
  capability01UxTitle: "UX/UI і дизайн цифрових продуктів",
  capability01UxText1:
    "Я проєктую зрозумілі цифрові досвіди для сайтів, мобільних застосунків і складних вебплатформ. Моя робота охоплює інформаційну архітектуру, користувацькі шляхи, вайрфрейми, інтерактивні інтерфейси, дизайн-системи та візуальну ієрархію.",
  capability01UxText2:
    "Я прагну зробити складну функціональність зрозумілою: спростити процес бронювання, упорядкувати фінансову інформацію або спроєктувати панель із кількома ролями користувачів.",
  capability01ExperienceTitle: "Користувацький досвід і взаємодія",
  capability01ExperienceText1:
    "Кожен інтерфейс має виконувати певну функцію, а не лише привабливо виглядати. Я враховую, як люди переміщуються продуктом, яка інформація їм потрібна, де може виникнути плутанина і як кожна взаємодія робить досвід зручнішим.",
  capability01ExperienceText2:
    "Це охоплює адаптивні макети, стани взаємодії, форми, онбординг, доступність і послідовну поведінку інтерфейсу.",
  capability02Title: "Розробка і системи",
  capability02WebTitle: "Веброзробка",
  capability02WebText1:
    "Я розробляю сайти та інтерактивні вебзастосунки, поєднуючи візуальний дизайн із функціональною реалізацією. Залежно від проєкту працюю з HTML, CSS, JavaScript, TypeScript, React і Next.js.",
  capability02WebText2:
    "Я працюю зі структурою, подачею та функціональністю цифрових продуктів: від кастомних інтерфейсів і повторно використовуваних компонентів до динамічного контенту та інтерактивних функцій.",
  capability02BackendTitle: "Бекенд, бази даних та інтеграції",
  capability02BackendText1:
    "Сайту часто потрібно більше, ніж привабливий фронтенд. Я працюю з базами даних, API, серверною функціональністю та сторонніми сервісами, щоб поєднувати клієнтські інтерфейси із системами, що працюють за ними.",
  capability02BackendText2:
    "Мій досвід охоплює PostgreSQL, SQL, Python, інтеграції бронювання й оплат, адміністративні панелі та автоматизовані комунікаційні процеси.",
  capability02AutomationTitle: "Автоматизація і бізнес-інструменти",
  capability02AutomationText1:
    "Я створюю цифрові рішення, покликані зменшити повторювану ручну роботу та покращити обмін інформацією між клієнтами, командою і бізнес-системами.",
  capability02AutomationText2:
    "Це можуть бути керування бронюваннями, календарі доступності, адміністративні елементи керування, сповіщення та інтеграції із зовнішніми платформами.",
  capability03Title: "Бренд і бізнес",
  capability03IdentityTitle: "Айдентика бренду і креативне керівництво",
  capability03IdentityText1:
    "Я створюю візуальні айдентики, які надають бізнесу послідовну та впізнавану присутність. Це охоплює логотипи, типографіку, колірні системи, брендовані носії, цифрові матеріали й друковану продукцію.",
  capability03IdentityText2:
    "Мій підхід поєднує візуальні рішення з аудиторією бренду, його позиціонуванням, характером і практичними потребами.",
  capability03StrategyTitle: "Цифрова стратегія і комунікація",
  capability03StrategyText1:
    "Я працюю з цифровим контентом, подачею в соціальних мережах і комунікаційними структурами, щоб допомогти бізнесу зрозуміліше пояснювати свою пропозицію.",
  capability03StrategyText2:
    "Це охоплює планування контенту, айдентику соціальних мереж, візуальний напрям, інформаційну ієрархію та послідовність комунікації на різних платформах.",
  capability03ExperienceTitle: "Клієнтський досвід і операційні процеси",
  capability03ExperienceText1:
    "Мій досвід виходить за межі самого інтерфейсу. Я враховую, як цифрові інструменти підтримують реальні бізнес-процеси: запити, бронювання, оплати, комунікацію з клієнтами та адміністративну роботу.",
  capability03ExperienceText2:
    "Розуміння цих процесів допомагає мені проєктувати рішення, зручні і для клієнта, і для людей, які ними керують.",
  capability04Title: "Креативні та розробницькі інструменти",
  capability04DesignTitle: "Дизайн і візуальне виробництво",
  capability04DesignTools: "Figma · Adobe Photoshop · Adobe Illustrator",
  capability04DesignText:
    "Я використовую інструменти дизайну та візуального виробництва, щоб досліджувати концепції, розробляти інтерфейсні системи, створювати бренд-матеріали, готувати графіку й пояснювати дизайнерські рішення.",
  capability04WorkflowTitle: "Розробка і робочий процес",
  capability04WorkflowTools: "Git · GitHub · Vercel · розробка за допомогою AI",
  capability04WorkflowText1:
    "Мій процес поєднує дизайн-мислення, технічну реалізацію, контроль версій, розробку за допомогою AI, тестування та деплой.",
  capability04WorkflowText2:
    "Я обираю інструменти відповідно до вимог проєкту, а не намагаюся пристосувати кожну ідею до тієї самої технології чи процесу.",
  styleKicker: "Як я працюю",
  styleTitle: "ЯК Я ПРАЦЮЮ",
  styleSubtitle: "Продумані рішення. Самостійна реалізація. Практичний результат.",
  styleIntroOne:
    "Я розглядаю кожен проєкт як щось більше, ніж набір екранів або окремих дизайнерських завдань. Моя мета — зрозуміти, що потрібно створити, чому це важливо і як воно має працювати на практиці.",
  styleIntroTwo:
    "Я самостійно працюю на перетині креативних і технічних дисциплін, поєднуючи бізнес-вимоги, дизайнерські рішення та реалізацію в один послідовний процес.",
  style01Title: "Самостійна відповідальність",
  style01Subtitle: "Один проєкт. Пов’язаний процес. Чітка відповідальність.",
  style01Text1:
    "Я віддаю перевагу відповідальності за весь напрям проєкту, а не роботі над ізольованими завданнями без розуміння ширшої картини.",
  style01Text2:
    "Моя робота починається з визначення цілей, уточнення вимог і розуміння проблеми, яку потрібно розв’язати. Далі я розподіляю процес на зрозумілі етапи, визначаю пріоритети та ухвалюю рішення, пам’ятаючи про кінцевий результат.",
  style01Text3:
    "Самостійна робота допомагає мені зберігати послідовність між початковою концепцією, візуальним напрямом і технічною реалізацією.",
  style01Text4:
    "Це не означає працювати без комунікації. Я вважаю чіткі очікування, змістовний зворотний зв’язок і прозорі рішення необхідними для відповідності проєкту його цілям.",
  style01Focus: "Мій фокус: відповідальність, організація, послідовність і підзвітність.",
  style02Title: "Системне мислення",
  style02Subtitle: "Розуміння зв’язків за інтерфейсом.",
  style02Text1:
    "Цифровий продукт рідко існує ізольовано. Сайт може бути пов’язаний із бронюваннями, оплатами, комунікацією з клієнтами, внутрішнім адмініструванням, маркетингом та іншими бізнес-процесами.",
  style02Text2: "Перш ніж проєктувати окремі екрани, я намагаюся зрозуміти, як ці елементи взаємодіють.",
  style02Text3:
    "Я враховую людей, які користуватимуться продуктом, завдання, які вони мають виконати, рух інформації між різними системами та операційні вимоги за інтерфейсом.",
  style02Text4:
    "Такий погляд допомагає помічати зайву складність, роз’єднані процеси й можливості зробити досвід інтуїтивнішим.",
  style02Text5:
    "Замість того щоб сприймати кожну функцію як окремий елемент, я прагну створювати рішення, у яких різні частини продукту підтримують одна одну.",
  style02Focus: "Мій фокус: бізнес-логіка, користувацькі шляхи, рух інформації та пов’язані досвіди.",
  style03Title: "Дизайн і реалізація",
  style03Subtitle: "Від візуального напряму до того, що справді працює.",
  style03Text1: "Я сприймаю дизайн і розробку як пов’язані частини одного процесу.",
  style03Text2:
    "Сильна концепція має бути візуально переконливою, але також технічно здійсненною, інтуїтивною в навігації та доречною для людей, які нею користуватимуться.",
  style03Text3:
    "Я починаю зі структури та візуального напряму, досліджуючи, як інформація, типографіка, макет і взаємодії можуть передати задуманий досвід.",
  style03Text4:
    "У міру розвитку проєкту я перевіряю, як ці рішення перетворюються на функціональні інтерфейси, повторно використовувані елементи, технічні інтеграції та реальні взаємодії користувача.",
  style03Text5:
    "Я працюю ітеративно, уточнюючи досвід у міру того, як дизайн і реалізація відкривають нові вимоги або можливості для покращення.",
  style03Text6:
    "Моя мета — не просто представити привабливу концепцію, а максимально наблизити її до повного, придатного для використання цифрового продукту.",
  style03Focus: "Мій фокус: візуальна послідовність, технічна здійсненність, функціональна реалізація та вдосконалення.",
  style04Title: "Створено для реальності",
  style04Subtitle: "Спроєктовано для людей. Створено для реальних умов бізнесу.",
  style04Text1: "Проєкт має працювати за межами відшліфованої презентації чи ідеальної демонстрації.",
  style04Text2:
    "Я враховую, як продукт поводитиметься, коли ним користуються реальні клієнти, коли інформація змінюється, коли адміністраторам потрібно оновлювати контент і коли бізнес зростає або змінює вимоги.",
  style04Text3:
    "Це означає увагу до зручності, надійності, підтримуваності, продуктивності та практичних деталей, які легко не помітити на етапі дизайну.",
  style04Text4:
    "Я також думаю про період після передачі: чи можна зрозуміти, керувати та підтримувати рішення без зайвої складності.",
  style04Text5: "Я ціную продуману реалізацію більше, ніж вражаючі функції без змістовної користі.",
  style04Text6:
    "Успішний цифровий продукт має не лише професійно виглядати. Він має робити щось простішим, зрозумілішим або ефективнішим для людей, які від нього залежать.",
  style04Focus: "Мій фокус: зручність, надійність, підтримуваність і практична цінність для бізнесу."
});

Object.assign(profileCopy.pl, {
  capabilitiesKicker: "Kompetencje i technologie",
  capabilitiesTitle: "Od pierwszego pomysłu do działającego produktu cyfrowego.",
  capabilitiesDescription:
    "Moja praca łączy design, development, komunikację wizualną i rozumienie sposobu działania firm. Traktuję projekty jako połączone systemy, w których interfejs, funkcjonalność, marka i doświadczenie klienta powinny współpracować.",
  capability01Title: "Design i produkt",
  capability01UxTitle: "UX/UI i projektowanie produktów cyfrowych",
  capability01UxText1:
    "Projektuję intuicyjne doświadczenia cyfrowe dla stron internetowych, aplikacji mobilnych i złożonych platform webowych. Moja praca obejmuje architekturę informacji, ścieżki użytkowników, wireframe'y, interaktywne interfejsy, systemy projektowe i hierarchię wizualną.",
  capability01UxText2:
    "Skupiam się na tym, aby złożona funkcjonalność była zrozumiała: może to oznaczać uproszczenie procesu rezerwacji, uporządkowanie informacji finansowych albo zaprojektowanie panelu z wieloma rolami użytkowników.",
  capability01ExperienceTitle: "User Experience i interakcja",
  capability01ExperienceText1:
    "Każdy interfejs powinien mieć cel wykraczający poza atrakcyjny wygląd. Analizuję, jak ludzie poruszają się po produkcie, jakich informacji potrzebują, gdzie może pojawić się niejasność i jak każda interakcja wpływa na płynniejsze doświadczenie.",
  capability01ExperienceText2:
    "Obejmuje to responsywne layouty, stany interakcji, formularze, onboarding, kwestie dostępności i spójne zachowanie interfejsu.",
  capability02Title: "Development i systemy",
  capability02WebTitle: "Web development",
  capability02WebText1:
    "Tworzę strony internetowe i interaktywne aplikacje webowe, łącząc kierunek wizualny z funkcjonalną implementacją. Zależnie od projektu pracuję z HTML, CSS, JavaScript, TypeScript, React i Next.js.",
  capability02WebText2:
    "Pracuję nad strukturą, prezentacją i funkcjonalnością produktów cyfrowych: od niestandardowych interfejsów i wielokrotnego użytku komponentów po dynamiczne treści i funkcje interaktywne.",
  capability02BackendTitle: "Backend, bazy danych i integracje",
  capability02BackendText1:
    "Strona internetowa często potrzebuje czegoś więcej niż atrakcyjnego front-endu. Pracuję z bazami danych, API, funkcjonalnością po stronie serwera i usługami zewnętrznymi, aby łączyć interfejsy dla klientów z systemami działającymi w tle.",
  capability02BackendText2:
    "Moje doświadczenie obejmuje PostgreSQL, SQL, Python, integracje rezerwacji i płatności, panele administracyjne oraz zautomatyzowane przepływy komunikacji.",
  capability02AutomationTitle: "Automatyzacja i narzędzia biznesowe",
  capability02AutomationText1:
    "Tworzę rozwiązania cyfrowe, które ograniczają powtarzalną pracę ręczną i usprawniają przepływ informacji między klientami, personelem i systemami biznesowymi.",
  capability02AutomationText2:
    "Mogą obejmować zarządzanie rezerwacjami, kalendarze dostępności, kontrolę administracyjną, powiadomienia i integracje z zewnętrznymi platformami.",
  capability03Title: "Marka i biznes",
  capability03IdentityTitle: "Identyfikacja marki i creative direction",
  capability03IdentityText1:
    "Tworzę identyfikacje wizualne, które dają firmom spójną i rozpoznawalną obecność. Obejmuje to logotypy, typografię, systemy kolorów, zastosowania marki, zasoby cyfrowe i materiały drukowane.",
  capability03IdentityText2:
    "Łączę decyzje wizualne z odbiorcami marki, jej pozycjonowaniem, osobowością i praktycznymi potrzebami.",
  capability03StrategyTitle: "Strategia cyfrowa i komunikacja",
  capability03StrategyText1:
    "Pracuję z treściami cyfrowymi, prezentacją w mediach społecznościowych i strukturami komunikacji, aby pomóc firmom jaśniej wyjaśniać swoją ofertę.",
  capability03StrategyText2:
    "Obejmuje to planowanie treści, identyfikację w mediach społecznościowych, kierunek wizualny, hierarchię informacji i spójność komunikacji na różnych platformach.",
  capability03ExperienceTitle: "Customer experience i operacje",
  capability03ExperienceText1:
    "Moje doświadczenie wykracza poza sam interfejs. Uwzględniam, jak narzędzia cyfrowe wspierają rzeczywiste procesy biznesowe: zapytania, rezerwacje, płatności, komunikację z klientami i pracę administracyjną.",
  capability03ExperienceText2:
    "Rozumienie tych procesów pomaga mi projektować rozwiązania wygodne zarówno dla klienta korzystającego z produktu, jak i dla osób, które nim zarządzają.",
  capability04Title: "Narzędzia kreatywne i deweloperskie",
  capability04DesignTitle: "Design i produkcja wizualna",
  capability04DesignTools: "Figma · Adobe Photoshop · Adobe Illustrator",
  capability04DesignText:
    "Korzystam z narzędzi do projektowania i produkcji wizualnej, aby badać koncepcje, rozwijać systemy interfejsów, tworzyć zasoby marki, przygotowywać grafiki i komunikować decyzje projektowe.",
  capability04WorkflowTitle: "Development i workflow",
  capability04WorkflowTools: "Git · GitHub · Vercel · AI-Assisted Development",
  capability04WorkflowText1:
    "Mój workflow łączy myślenie projektowe, implementację techniczną, kontrolę wersji, kodowanie wspierane przez AI, testowanie i wdrażanie.",
  capability04WorkflowText2:
    "Dobieram narzędzia do wymagań projektu, zamiast zmuszać każdy pomysł do korzystania z tej samej technologii lub procesu.",
  styleKicker: "Jak pracuję",
  styleTitle: "JAK PRACUJĘ",
  styleSubtitle: "Przemyślane decyzje. Samodzielna realizacja. Praktyczne rezultaty.",
  styleIntroOne:
    "Traktuję każdy projekt jako coś więcej niż zbiór ekranów lub pojedynczych zadań projektowych. Chcę zrozumieć, co trzeba stworzyć, dlaczego jest to ważne i jak powinno działać w praktyce.",
  styleIntroTwo:
    "Pracuję samodzielnie na styku kreatywnych i technicznych dziedzin, łącząc wymagania biznesowe, decyzje projektowe i implementację w jeden spójny proces.",
  style01Title: "Samodzielna odpowiedzialność",
  style01Subtitle: "Jeden projekt. Spójny proces. Jasna odpowiedzialność.",
  style01Text1:
    "Wolę odpowiadać za cały kierunek projektu niż pracować nad odizolowanymi zadaniami bez zrozumienia szerszego kontekstu.",
  style01Text2:
    "Zaczynam od określenia celów, doprecyzowania wymagań i zrozumienia problemu, który trzeba rozwiązać. Następnie dzielę proces na możliwe do zarządzania etapy, ustalam priorytety i podejmuję decyzje z myślą o końcowym rezultacie.",
  style01Text3:
    "Samodzielna praca pozwala mi zachować spójność między pierwotną koncepcją, kierunkiem wizualnym i implementacją techniczną.",
  style01Text4:
    "Nie oznacza to pracy bez komunikacji. Uważam, że jasne oczekiwania, wartościowy feedback i przejrzyste decyzje są niezbędne, aby projekt pozostawał zgodny z celami.",
  style01Focus: "Mój fokus: odpowiedzialność, organizacja, spójność i rozliczalność.",
  style02Title: "Myślenie systemowe",
  style02Subtitle: "Rozumienie połączeń kryjących się za interfejsem.",
  style02Text1:
    "Produkt cyfrowy rzadko istnieje w izolacji. Strona może być połączona z rezerwacjami, płatnościami, komunikacją z klientami, administracją wewnętrzną, marketingiem i innymi procesami biznesowymi.",
  style02Text2: "Przed zaprojektowaniem pojedynczych ekranów staram się zrozumieć, jak te elementy ze sobą współdziałają.",
  style02Text3:
    "Uwzględniam osoby korzystające z produktu, zadania, które muszą wykonać, informacje przepływające między systemami oraz wymagania operacyjne stojące za interfejsem.",
  style02Text4:
    "Ta perspektywa pomaga mi dostrzec niepotrzebną złożoność, rozłączone procesy i możliwości uczynienia doświadczenia bardziej intuicyjnym.",
  style02Text5:
    "Zamiast traktować każdą funkcję jako osobny element, staram się tworzyć rozwiązania, w których różne części produktu wspierają się nawzajem.",
  style02Focus: "Mój fokus: logika biznesowa, ścieżki użytkowników, przepływ informacji i połączone doświadczenia.",
  style03Title: "Design i realizacja",
  style03Subtitle: "Od kierunku wizualnego do czegoś, co naprawdę działa.",
  style03Text1: "Postrzegam design i development jako połączone części tego samego procesu.",
  style03Text2:
    "Silna koncepcja powinna przekonywać wizualnie, ale także być wykonalna technicznie, intuicyjna w nawigacji i odpowiednia dla osób, które będą z niej korzystać.",
  style03Text3:
    "Zaczynam od określenia struktury i kierunku wizualnego, sprawdzając, jak informacje, typografia, layout i interakcje mogą komunikować zamierzone doświadczenie.",
  style03Text4:
    "W miarę rozwoju projektu analizuję, jak te decyzje przekładają się na funkcjonalne interfejsy, wielokrotnego użytku elementy, integracje techniczne i rzeczywiste interakcje użytkownika.",
  style03Text5:
    "Pracuję iteracyjnie, dopracowując doświadczenie, gdy design i implementacja ujawniają nowe wymagania lub możliwości poprawy.",
  style03Text6:
    "Moim celem nie jest jedynie przedstawienie atrakcyjnej koncepcji, ale możliwie pełne przełożenie jej na kompletny, użyteczny produkt cyfrowy.",
  style03Focus: "Mój fokus: spójność wizualna, wykonalność techniczna, funkcjonalna implementacja i dopracowanie.",
  style04Title: "Zaprojektowane dla rzeczywistości",
  style04Subtitle: "Projektowane dla ludzi. Budowane dla realnych warunków biznesowych.",
  style04Text1: "Projekt powinien działać poza dopracowaną prezentacją lub idealnym pokazem.",
  style04Text2:
    "Uwzględniam, jak produkt zachowa się, gdy korzystają z niego prawdziwi klienci, gdy zmieniają się informacje, gdy administratorzy muszą aktualizować treści i gdy firma rośnie lub zmienia wymagania.",
  style04Text3:
    "Oznacza to uwagę poświęconą użyteczności, niezawodności, łatwości utrzymania, wydajności i praktycznym szczegółom, które łatwo przeoczyć na etapie designu.",
  style04Text4:
    "Myślę także o tym, co dzieje się po przekazaniu: czy rozwiązanie można zrozumieć, prowadzić i wspierać bez zbędnej złożoności.",
  style04Text5: "Cenię przemyślaną realizację bardziej niż efektowne funkcje pozbawione znaczącego celu.",
  style04Text6:
    "Dobry produkt cyfrowy powinien nie tylko wyglądać profesjonalnie. Powinien ułatwiać, porządkować lub usprawniać coś dla osób, które na nim polegają.",
  style04Focus: "Mój fokus: użyteczność, niezawodność, łatwość utrzymania i praktyczna wartość biznesowa."
});

Object.assign(profileCopy.ru, {
  capabilitiesKicker: "Экспертиза и технологии",
  capabilitiesTitle: "От первой идеи до работающего цифрового продукта.",
  capabilitiesDescription:
    "Моя работа объединяет дизайн, разработку, визуальную коммуникацию и понимание того, как устроен бизнес. Я рассматриваю проекты как связанные системы, в которых интерфейс, функциональность, бренд и клиентский опыт должны работать вместе.",
  capability01Title: "Дизайн и продукт",
  capability01UxTitle: "UX/UI и дизайн цифровых продуктов",
  capability01UxText1:
    "Я проектирую понятный цифровой опыт для сайтов, мобильных приложений и сложных веб-платформ. Моя работа включает информационную архитектуру, пользовательские сценарии, вайрфреймы, интерактивные интерфейсы, дизайн-системы и визуальную иерархию.",
  capability01UxText2:
    "Я стремлюсь сделать сложную функциональность понятной: упростить процесс бронирования, организовать финансовую информацию или спроектировать дашборд с несколькими ролями пользователей.",
  capability01ExperienceTitle: "Пользовательский опыт и взаимодействие",
  capability01ExperienceText1:
    "У каждого интерфейса должна быть цель, выходящая за рамки привлекательного внешнего вида. Я учитываю, как люди перемещаются по продукту, какая информация им нужна, где может возникнуть путаница и как каждое взаимодействие делает опыт удобнее.",
  capability01ExperienceText2:
    "Это включает адаптивные макеты, состояния взаимодействия, формы, онбординг, вопросы доступности и последовательное поведение интерфейса.",
  capability02Title: "Разработка и системы",
  capability02WebTitle: "Веб-разработка",
  capability02WebText1:
    "Я разрабатываю сайты и интерактивные веб-приложения, соединяя визуальный дизайн с функциональной реализацией. В зависимости от проекта я работаю с HTML, CSS, JavaScript, TypeScript, React и Next.js.",
  capability02WebText2:
    "Я работаю со структурой, подачей и функциональностью цифровых продуктов: от кастомных интерфейсов и переиспользуемых компонентов до динамического контента и интерактивных функций.",
  capability02BackendTitle: "Бэкенд, базы данных и интеграции",
  capability02BackendText1:
    "Сайту часто нужно больше, чем привлекательный фронтенд. Я работаю с базами данных, API, серверной функциональностью и сторонними сервисами, чтобы соединять клиентские интерфейсы с системами, которые стоят за ними.",
  capability02BackendText2:
    "Мой опыт включает PostgreSQL, SQL, Python, интеграции бронирования и оплаты, административные панели и автоматизированные коммуникационные процессы.",
  capability02AutomationTitle: "Автоматизация и бизнес-инструменты",
  capability02AutomationText1:
    "Я создаю цифровые решения, призванные уменьшить повторяющуюся ручную работу и улучшить поток информации между клиентами, сотрудниками и бизнес-системами.",
  capability02AutomationText2:
    "Это могут быть управление бронированиями, календари доступности, административные элементы управления, уведомления и интеграции с внешними платформами.",
  capability03Title: "Бренд и бизнес",
  capability03IdentityTitle: "Айдентика бренда и креативное руководство",
  capability03IdentityText1:
    "Я создаю визуальные айдентики, которые дают бизнесу последовательное и узнаваемое присутствие. Это включает логотипы, типографику, цветовые системы, брендированные носители, цифровые материалы и печатную продукцию.",
  capability03IdentityText2:
    "Мой подход связывает визуальные решения с аудиторией бренда, его позиционированием, характером и практическими потребностями.",
  capability03StrategyTitle: "Цифровая стратегия и коммуникация",
  capability03StrategyText1:
    "Я работаю с цифровым контентом, подачей в социальных сетях и коммуникационными структурами, чтобы помогать бизнесу яснее объяснять свое предложение.",
  capability03StrategyText2:
    "Это включает планирование контента, айдентику социальных сетей, визуальное направление, информационную иерархию и последовательность коммуникации на разных платформах.",
  capability03ExperienceTitle: "Клиентский опыт и операции",
  capability03ExperienceText1:
    "Мой опыт выходит за рамки самого интерфейса. Я учитываю, как цифровые инструменты поддерживают реальные бизнес-процессы: заявки, бронирования, платежи, коммуникацию с клиентами и административные процессы.",
  capability03ExperienceText2:
    "Понимание этих процессов помогает мне проектировать решения, удобные и для клиента, который пользуется продуктом, и для людей, которые им управляют.",
  capability04Title: "Креативные и технические инструменты",
  capability04DesignTitle: "Дизайн и визуальное производство",
  capability04DesignTools: "Figma · Adobe Photoshop · Adobe Illustrator",
  capability04DesignText:
    "Я использую инструменты дизайна и визуального производства, чтобы исследовать концепции, разрабатывать интерфейсные системы, создавать бренд-материалы, готовить графику и объяснять дизайнерские решения.",
  capability04WorkflowTitle: "Разработка и рабочий процесс",
  capability04WorkflowTools: "Git · GitHub · Vercel · разработка с помощью AI",
  capability04WorkflowText1:
    "Мой процесс разработки объединяет дизайн-мышление, техническую реализацию, контроль версий, кодинг с помощью AI, тестирование и деплой.",
  capability04WorkflowText2:
    "Я выбираю инструменты, которые лучше соответствуют требованиям проекта, а не пытаюсь подогнать каждую идею под одну и ту же технологию или процесс.",
  styleKicker: "Как я работаю",
  styleTitle: "КАК Я РАБОТАЮ",
  styleSubtitle: "Продуманные решения. Самостоятельная реализация. Практический результат.",
  styleIntroOne:
    "Я рассматриваю каждый проект как нечто большее, чем набор экранов или отдельных дизайнерских задач. Моя цель — понять, что нужно создать, почему это важно и как это должно работать на практике.",
  styleIntroTwo:
    "Я самостоятельно работаю на стыке творческих и технических дисциплин, соединяя бизнес-требования, дизайнерские решения и реализацию в один цельный процесс.",
  style01Title: "Самостоятельная ответственность",
  style01Subtitle: "Один проект. Связный процесс. Ясная ответственность.",
  style01Text1:
    "Я предпочитаю отвечать за полное направление проекта, а не работать над изолированными задачами без понимания общей картины.",
  style01Text2:
    "Моя работа начинается с определения целей, уточнения требований и понимания проблемы, которую нужно решить. Затем я организую процесс на управляемые этапы, расставляю приоритеты и принимаю решения, помня о конечном результате.",
  style01Text3:
    "Самостоятельная работа позволяет мне сохранять последовательность между исходной концепцией, визуальным направлением и технической реализацией.",
  style01Text4:
    "Это не означает работать без коммуникации. Я считаю ясные ожидания, содержательную обратную связь и прозрачные решения необходимыми для того, чтобы проект оставался связанным с его целями.",
  style01Focus: "Мой фокус: ответственность, организация, последовательность и подотчетность.",
  style02Title: "Системное мышление",
  style02Subtitle: "Понимание связей за интерфейсом.",
  style02Text1:
    "Цифровой продукт редко существует изолированно. Сайт может быть связан с бронированиями, платежами, коммуникацией с клиентами, внутренним администрированием, маркетингом и другими бизнес-процессами.",
  style02Text2: "До проектирования отдельных экранов я стараюсь понять, как эти элементы взаимодействуют.",
  style02Text3:
    "Я учитываю людей, которые будут пользоваться продуктом, задачи, которые им нужно выполнить, движение информации между разными системами и операционные требования, стоящие за интерфейсом.",
  style02Text4:
    "Такой взгляд помогает замечать ненужную сложность, разрозненные процессы и возможности сделать опыт более интуитивным.",
  style02Text5:
    "Вместо того чтобы воспринимать каждую функцию как отдельный элемент, я стремлюсь создавать решения, в которых разные части продукта поддерживают друг друга.",
  style02Focus: "Мой фокус: бизнес-логика, пользовательские сценарии, движение информации и связанные цифровые опыты.",
  style03Title: "Дизайн и реализация",
  style03Subtitle: "От визуального направления к тому, что действительно работает.",
  style03Text1: "Я рассматриваю дизайн и разработку как связанные части одного процесса.",
  style03Text2:
    "Сильная концепция должна быть визуально убедительной, но также технически реализуемой, понятной в навигации и подходящей людям, которые будут ею пользоваться.",
  style03Text3:
    "Я начинаю со структуры и визуального направления, исследуя, как информация, типографика, макет и взаимодействия могут передать задуманный опыт.",
  style03Text4:
    "По мере развития проекта я проверяю, как эти решения превращаются в функциональные интерфейсы, переиспользуемые элементы, технические интеграции и реальные пользовательские взаимодействия.",
  style03Text5:
    "Я работаю итеративно, уточняя опыт по мере того, как дизайн и реализация открывают новые требования или возможности для улучшения.",
  style03Text6:
    "Моя цель — не просто представить привлекательную концепцию, а максимально приблизить ее к полноценному, удобному цифровому продукту.",
  style03Focus: "Мой фокус: визуальная последовательность, техническая реализуемость, функциональная реализация и доработка.",
  style04Title: "Создано для реальности",
  style04Subtitle: "Спроектировано для людей. Создано для реальных условий бизнеса.",
  style04Text1: "Проект должен работать за пределами отшлифованной презентации или идеальной демонстрации.",
  style04Text2:
    "Я учитываю, как продукт будет вести себя, когда им пользуются реальные клиенты, когда информация меняется, когда администраторам нужно обновлять контент и когда бизнес растет или меняет требования.",
  style04Text3:
    "Это означает внимание к удобству, надежности, поддерживаемости, производительности и практическим деталям, которые легко упустить на этапе дизайна.",
  style04Text4:
    "Я также думаю о том, что происходит после передачи: можно ли понять, управлять и поддерживать решение без лишней сложности.",
  style04Text5: "Я ценю продуманную реализацию больше, чем впечатляющие функции без содержательной цели.",
  style04Text6:
    "Успешный цифровой продукт должен не только профессионально выглядеть. Он должен делать что-то проще, понятнее или эффективнее для людей, которые от него зависят.",
  style04Focus: "Мой фокус: удобство, надежность, поддерживаемость и практическая ценность для бизнеса."
});

Object.assign(profileCopy.de, {
  capabilitiesKicker: "Expertise & Technologie",
  capabilitiesTitle: "Von der ersten Idee bis zum funktionierenden digitalen Produkt.",
  capabilitiesDescription:
    "Meine Arbeit verbindet Design, Entwicklung, visuelle Kommunikation und ein Verständnis dafür, wie Unternehmen arbeiten. Ich betrachte Projekte als verbundene Systeme, in denen Interface, Funktionalität, Marke und Customer Experience zusammenspielen sollen.",
  capability01Title: "Design & Produkt",
  capability01UxTitle: "UX/UI & Digital Product Design",
  capability01UxText1:
    "Ich gestalte intuitive digitale Erlebnisse für Websites, mobile Anwendungen und komplexe webbasierte Plattformen. Meine Arbeit umfasst Informationsarchitektur, User Journeys, Wireframes, interaktive Interfaces, Designsysteme und visuelle Hierarchie.",
  capability01UxText2:
    "Ich konzentriere mich darauf, komplexe Funktionen verständlich zu machen: etwa einen Buchungsprozess zu vereinfachen, Finanzinformationen zu strukturieren oder ein Dashboard mit mehreren Nutzerrollen zu gestalten.",
  capability01ExperienceTitle: "User Experience & Interaktion",
  capability01ExperienceText1:
    "Jedes Interface sollte einen Zweck haben, der über ein attraktives Aussehen hinausgeht. Ich berücksichtige, wie Menschen durch ein Produkt navigieren, welche Informationen sie benötigen, wo Verwirrung entstehen kann und wie jede Interaktion zu einem reibungsloseren Erlebnis beiträgt.",
  capability01ExperienceText2:
    "Dazu gehören responsive Layouts, Interaktionszustände, Formulare, Onboarding-Flows, Accessibility-Aspekte und ein konsistentes Verhalten des Interfaces.",
  capability02Title: "Entwicklung & Systeme",
  capability02WebTitle: "Webentwicklung",
  capability02WebText1:
    "Ich entwickle Websites und interaktive Webanwendungen und verbinde visuelles Design mit funktionaler Umsetzung. Je nach Projekt arbeite ich mit HTML, CSS, JavaScript, TypeScript, React und Next.js.",
  capability02WebText2:
    "Ich arbeite an Struktur, Darstellung und Funktionalität digitaler Produkte: von individuellen Interfaces und wiederverwendbaren Komponenten bis zu dynamischen Inhalten und interaktiven Funktionen.",
  capability02BackendTitle: "Backend, Datenbanken & Integrationen",
  capability02BackendText1:
    "Eine Website braucht oft mehr als ein attraktives Frontend. Ich arbeite mit Datenbanken, APIs, serverseitiger Funktionalität und Drittanbieterdiensten, um kundenorientierte Interfaces mit den dahinterliegenden Systemen zu verbinden.",
  capability02BackendText2:
    "Meine Erfahrung umfasst PostgreSQL, SQL, Python, Buchungs- und Zahlungsintegrationen, administrative Dashboards und automatisierte Kommunikationsabläufe.",
  capability02AutomationTitle: "Automatisierung & Business Tools",
  capability02AutomationText1:
    "Ich entwickle digitale Lösungen, die wiederholte manuelle Arbeit reduzieren und den Informationsfluss zwischen Kunden, Mitarbeitenden und Business-Systemen verbessern sollen.",
  capability02AutomationText2:
    "Dazu können Reservierungsmanagement, Verfügbarkeitskalender, administrative Steuerung, Benachrichtigungen und Integrationen mit externen Plattformen gehören.",
  capability03Title: "Marke & Business",
  capability03IdentityTitle: "Brand Identity & Creative Direction",
  capability03IdentityText1:
    "Ich entwickle visuelle Identitäten, die Unternehmen eine konsistente und wiedererkennbare Präsenz geben. Dazu gehören Logos, Typografie, Farbsysteme, Markenanwendungen, digitale Assets und Printmaterialien.",
  capability03IdentityText2:
    "Mein Ansatz verbindet visuelle Entscheidungen mit Zielgruppe, Positionierung, Persönlichkeit und praktischen Anforderungen einer Marke.",
  capability03StrategyTitle: "Digitale Strategie & Kommunikation",
  capability03StrategyText1:
    "Ich arbeite mit digitalen Inhalten, Social-Media-Präsentation und Kommunikationsstrukturen, damit Unternehmen ihr Angebot klarer erklären können.",
  capability03StrategyText2:
    "Dazu gehören Content-Planung, Social-Media-Identität, visuelle Richtung, Informationshierarchie und konsistente Kommunikation über verschiedene Plattformen hinweg.",
  capability03ExperienceTitle: "Customer Experience & Operations",
  capability03ExperienceText1:
    "Meine Erfahrung geht über das Interface selbst hinaus. Ich berücksichtige, wie digitale Tools reale Geschäftsprozesse unterstützen, darunter Anfragen, Reservierungen, Zahlungen, Kundenkommunikation und administrative Abläufe.",
  capability03ExperienceText2:
    "Das Verständnis dieser Abläufe hilft mir, Lösungen zu gestalten, die sowohl für die nutzende Person als auch für die verwaltenden Personen funktionieren.",
  capability04Title: "Kreative & technische Tools",
  capability04DesignTitle: "Design & visuelle Produktion",
  capability04DesignTools: "Figma · Adobe Photoshop · Adobe Illustrator",
  capability04DesignText:
    "Ich nutze Design- und Visual-Production-Tools, um Konzepte zu erforschen, Interface-Systeme zu entwickeln, Marken-Assets zu erstellen, Grafiken vorzubereiten und Designentscheidungen zu vermitteln.",
  capability04WorkflowTitle: "Entwicklung & Workflow",
  capability04WorkflowTools: "Git · GitHub · Vercel · AI-Assisted Development",
  capability04WorkflowText1:
    "Mein Entwicklungsworkflow verbindet Design Thinking, technische Umsetzung, Versionskontrolle, AI-gestütztes Coding, Testing und Deployment.",
  capability04WorkflowText2:
    "Ich wähle die Tools, die zu den Anforderungen eines Projekts passen, statt jede Idee in dieselbe Technologie oder denselben Prozess zu zwingen.",
  styleKicker: "Wie ich arbeite",
  styleTitle: "WIE ICH ARBEITE",
  styleSubtitle: "Durchdachte Entscheidungen. Selbstständige Umsetzung. Praktische Ergebnisse.",
  styleIntroOne:
    "Ich betrachte jedes Projekt als mehr als eine Sammlung von Screens oder einzelnen Designaufgaben. Mein Ziel ist zu verstehen, was geschaffen werden muss, warum es wichtig ist und wie es in der Praxis funktionieren soll.",
  styleIntroTwo:
    "Ich arbeite selbstständig über kreative und technische Disziplinen hinweg und verbinde Business-Anforderungen, Designentscheidungen und Umsetzung zu einem kohärenten Prozess.",
  style01Title: "Eigenverantwortung",
  style01Subtitle: "Ein Projekt. Ein verbundener Prozess. Klare Verantwortung.",
  style01Text1:
    "Ich übernehme lieber Verantwortung für die vollständige Richtung eines Projekts, als isolierte Aufgaben zu bearbeiten, ohne das größere Bild zu verstehen.",
  style01Text2:
    "Meine Arbeit beginnt mit der Klärung von Zielen und Anforderungen sowie mit dem Verständnis des zu lösenden Problems. Danach strukturiere ich den Prozess in überschaubare Phasen, setze Prioritäten und treffe Entscheidungen mit dem Endergebnis im Blick.",
  style01Text3:
    "Selbstständiges Arbeiten ermöglicht mir, die Konsistenz zwischen ursprünglichem Konzept, visueller Richtung und technischer Umsetzung zu bewahren.",
  style01Text4:
    "Das bedeutet nicht, ohne Kommunikation zu arbeiten. Klare Erwartungen, relevantes Feedback und transparente Entscheidungen sind für mich entscheidend, damit ein Projekt an seinen Zielen ausgerichtet bleibt.",
  style01Focus: "Mein Fokus: Verantwortung, Organisation, Konsistenz und Verbindlichkeit.",
  style02Title: "Systemisches Denken",
  style02Subtitle: "Die Verbindungen hinter dem Interface verstehen.",
  style02Text1:
    "Ein digitales Produkt existiert selten isoliert. Eine Website kann mit Buchungen, Zahlungen, Kundenkommunikation, interner Verwaltung, Marketing oder anderen Geschäftsprozessen verbunden sein.",
  style02Text2: "Bevor ich einzelne Screens gestalte, versuche ich zu verstehen, wie diese Elemente zusammenspielen.",
  style02Text3:
    "Ich betrachte die Menschen, die das Produkt nutzen, ihre Aufgaben, die zwischen Systemen fließenden Informationen und die operativen Anforderungen hinter dem Interface.",
  style02Text4:
    "Diese Perspektive hilft mir, unnötige Komplexität, getrennte Abläufe und Möglichkeiten für ein intuitiveres Erlebnis zu erkennen.",
  style02Text5:
    "Statt jede Funktion als separates Element zu behandeln, möchte ich Lösungen schaffen, in denen sich die verschiedenen Teile des Produkts gegenseitig unterstützen.",
  style02Focus: "Mein Fokus: Business-Logik, User Journeys, Informationsfluss und verbundene Erlebnisse.",
  style03Title: "Design & Umsetzung",
  style03Subtitle: "Von der visuellen Richtung zu etwas, das wirklich funktioniert.",
  style03Text1: "Ich sehe Design und Entwicklung als verbundene Teile desselben Prozesses.",
  style03Text2:
    "Ein starkes Konzept sollte visuell überzeugen, aber auch technisch umsetzbar, intuitiv navigierbar und für die späteren Nutzer passend sein.",
  style03Text3:
    "Ich beginne mit Struktur und visueller Richtung und prüfe, wie Informationen, Typografie, Layout und Interaktionen das beabsichtigte Erlebnis vermitteln können.",
  style03Text4:
    "Im weiteren Projektverlauf überlege ich, wie diese Entscheidungen in funktionale Interfaces, wiederverwendbare Elemente, technische Integrationen und echte Nutzerinteraktionen übersetzt werden.",
  style03Text5:
    "Ich arbeite iterativ und verfeinere das Erlebnis, wenn Design und Umsetzung neue Anforderungen oder Verbesserungsmöglichkeiten sichtbar machen.",
  style03Text6:
    "Mein Ziel ist nicht nur, ein attraktives Konzept zu zeigen, sondern es so weit wie möglich zu einem vollständigen, nutzbaren digitalen Produkt zu entwickeln.",
  style03Focus: "Mein Fokus: visuelle Konsistenz, technische Machbarkeit, funktionale Umsetzung und Verfeinerung.",
  style04Title: "Für die Realität entwickelt",
  style04Subtitle: "Für Menschen gestaltet. Für reale Geschäftsbedingungen gebaut.",
  style04Text1: "Ein Projekt sollte über eine ausgefeilte Präsentation oder ideale Demo hinaus funktionieren.",
  style04Text2:
    "Ich berücksichtige, wie sich ein Produkt verhält, wenn reale Kunden es nutzen, Informationen sich ändern, Administratoren Inhalte aktualisieren müssen und ein Unternehmen wächst oder seine Anforderungen verändert.",
  style04Text3:
    "Das bedeutet Aufmerksamkeit für Usability, Zuverlässigkeit, Wartbarkeit, Performance und praktische Details, die in der Designphase leicht übersehen werden.",
  style04Text4:
    "Ich denke auch an die Zeit nach der Übergabe: Kann die Lösung verstanden, verwaltet und ohne unnötige Komplexität unterstützt werden?",
  style04Text5: "Ich schätze durchdachte Umsetzung mehr als eindrucksvolle Funktionen ohne sinnvollen Zweck.",
  style04Text6:
    "Ein erfolgreiches digitales Produkt sollte nicht nur professionell aussehen. Es sollte etwas für die Menschen, die darauf angewiesen sind, einfacher, klarer oder wirksamer machen.",
  style04Focus: "Mein Fokus: Usability, Zuverlässigkeit, Wartbarkeit und praktischer Business-Nutzen."
});

let profileAnchorRun = 0;
let profileAnchorInterrupted = false;

function getProfileHashTarget() {
  const id = window.location.hash.slice(1);

  if (!id) {
    return null;
  }

  try {
    return document.getElementById(decodeURIComponent(id));
  } catch {
    return null;
  }
}

function cancelProfileAnchorAlignment() {
  profileAnchorInterrupted = true;
  profileAnchorRun += 1;
}

function scheduleProfileAnchorAlignment() {
  const target = getProfileHashTarget();

  if (!target || profileAnchorInterrupted) {
    return;
  }

  const run = ++profileAnchorRun;
  let attempts = 0;
  const align = () => {
    if (run !== profileAnchorRun || profileAnchorInterrupted || attempts >= 3) {
      return;
    }

    attempts += 1;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (run !== profileAnchorRun || profileAnchorInterrupted) {
          return;
        }

        const headerHeight = document.querySelector(".site-header")?.getBoundingClientRect().height || 0;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 24;
        window.scrollTo({ top: Math.max(0, targetTop), behavior: "auto" });
      });
    });
  };

  align();
  window.addEventListener("load", align, { once: true });
  document.fonts?.ready.then(align, align);
}

["wheel", "touchmove", "keydown"].forEach((eventName) => {
  window.addEventListener(eventName, (event) => {
    if (eventName === "keydown" && !["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) {
      return;
    }

    cancelProfileAnchorAlignment();
  }, { passive: eventName !== "keydown" });
});

window.addEventListener("hashchange", () => {
  profileAnchorInterrupted = false;
  scheduleProfileAnchorAlignment();
});

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

  scheduleProfileAnchorAlignment();
}

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => applyProfileLanguage(button.dataset.lang));
});

applyProfileLanguage(initialLanguage());
