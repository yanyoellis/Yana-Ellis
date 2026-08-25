const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const assetRoot = path.join(root, "assets", "visual-design");
const dataFile = path.join(root, "visual-design", "visual-design-data.js");

const categories = {
  all: {
    en: "All",
    uk: "Усі",
    pl: "Wszystkie"
  },
  branding: {
    en: "Branding",
    uk: "Брендинг",
    pl: "Branding"
  },
  packaging: {
    en: "Packaging",
    uk: "Паковання",
    pl: "Opakowania"
  },
  campaigns: {
    en: "Campaigns",
    uk: "Кампанії",
    pl: "Kampanie"
  },
  editorial: {
    en: "Editorial",
    uk: "Редакційний дизайн",
    pl: "Editorial"
  },
  digital: {
    en: "Digital",
    uk: "Диджитал",
    pl: "Digital"
  }
};

const labels = {
  en: {
    documentTitle: "Visual Design - Yana Ellis",
    logoAlt: "Yana Ellis logo",
    navHome: "Web portfolio",
    navVisual: "Visual Design",
    navProcess: "Process",
    heroKicker: "Visual Design",
    heroTitle: "Visual identities. Packaging. Campaigns. Editorial.",
    heroText:
      "A selection of concept visual work across branding, packaging, editorial, campaigns and digital graphics.",
    archiveKicker: "Archive",
    archiveTitle: "Concept projects across different industries and visual systems.",
    archiveText:
      "Every project is self-initiated and fictional, created to show range in graphic design, art direction and commercial communication.",
    filterLabel: "Filter visual design projects",
    openProject: "Open project",
    conceptProject: "Concept project",
    year: "Year",
    client: "Client",
    category: "Category",
    disciplines: "Disciplines",
    role: "Role",
    deliverables: "Deliverables",
    tools: "Tools",
    images: "Project visuals",
    close: "Close",
    closeProject: "Close project",
    previousProject: "Previous project",
    nextProject: "Next project",
    backToArchive: "Back to Visual Design",
    footerText:
      "Visual design concept archive for branding, packaging, campaigns, print and digital graphics.",
    contact: "Contact"
  },
  uk: {
    documentTitle: "Візуальний дизайн - Yana Ellis",
    logoAlt: "Логотип Yana Ellis",
    navHome: "Вебпортфоліо",
    navVisual: "Візуальний дизайн",
    navProcess: "Процес",
    heroKicker: "Візуальний дизайн",
    heroTitle: "Айдентика. Паковання. Кампанії. Editorial.",
    heroText:
      "Добірка концептуальних візуальних робіт у брендингу, пакованні, редакційному дизайні, кампаніях і digital-графіці.",
    archiveKicker: "Архів",
    archiveTitle: "Концепт-проєкти для різних індустрій і візуальних систем.",
    archiveText:
      "Кожен проєкт є самостійним і вигаданим, створеним, щоб показати широту графічного дизайну, артдирекшену та комерційної комунікації.",
    filterLabel: "Фільтр проєктів візуального дизайну",
    openProject: "Відкрити проєкт",
    conceptProject: "Концепт-проєкт",
    year: "Рік",
    client: "Клієнт",
    category: "Категорія",
    disciplines: "Дисципліни",
    role: "Роль",
    deliverables: "Матеріали",
    tools: "Інструменти",
    images: "Візуали проєкту",
    close: "Закрити",
    closeProject: "Закрити проєкт",
    previousProject: "Попередній проєкт",
    nextProject: "Наступний проєкт",
    backToArchive: "Назад до Visual Design",
    footerText:
      "Архів концептів з айдентики, паковання, кампаній, друку та digital-графіки.",
    contact: "Контакт"
  },
  pl: {
    documentTitle: "Visual Design - Yana Ellis",
    logoAlt: "Logo Yana Ellis",
    navHome: "Portfolio web",
    navVisual: "Visual Design",
    navProcess: "Proces",
    heroKicker: "Visual Design",
    heroTitle: "Identyfikacje. Opakowania. Kampanie. Editorial.",
    heroText:
      "Wybrane koncepcyjne prace wizualne z zakresu brandingu, opakowań, editorialu, kampanii i grafiki digital.",
    archiveKicker: "Archiwum",
    archiveTitle: "Projekty koncepcyjne dla różnych branż i systemów wizualnych.",
    archiveText:
      "Każdy projekt jest fikcyjny i self-initiated, stworzony po to, aby pokazać zakres grafiki, art direction i komunikacji komercyjnej.",
    filterLabel: "Filtr projektów visual design",
    openProject: "Otwórz projekt",
    conceptProject: "Projekt koncepcyjny",
    year: "Rok",
    client: "Klient",
    category: "Kategoria",
    disciplines: "Dyscypliny",
    role: "Rola",
    deliverables: "Materiały",
    tools: "Narzędzia",
    images: "Wizualizacje projektu",
    close: "Zamknij",
    closeProject: "Zamknij projekt",
    previousProject: "Poprzedni projekt",
    nextProject: "Następny projekt",
    backToArchive: "Wróć do Visual Design",
    footerText:
      "Archiwum koncepcyjne brandingu, opakowań, kampanii, druku i grafiki digital.",
    contact: "Kontakt"
  }
};

function t(en, uk, pl) {
  return { en, uk, pl };
}

function asset(id, title, kind, orientation = "landscape") {
  return { id, title, kind, orientation };
}

const sharedTools = ["Figma", "Adobe Illustrator", "Adobe Photoshop"];

const projects = [
  {
    id: "lumiere-no7",
    title: "LUMIÈRE NO. 7",
    client: "Lumière No. 7",
    year: "2026",
    filters: ["packaging", "branding", "campaigns"],
    category: t("Packaging & Labels / Branding", "Паковання та етикетки / Брендинг", "Opakowania i etykiety / Branding"),
    role: t("Brand Designer / Visual Designer", "Бренд-дизайнерка / Візуальна дизайнерка", "Brand Designer / Visual Designer"),
    disciplines: t(
      "Fragrance packaging, wordmark, label hierarchy, campaign art direction",
      "Паковання аромату, вордмарк, ієрархія етикетки, артдирекшен кампанії",
      "Opakowania perfum, wordmark, hierarchia etykiety, art direction kampanii"
    ),
    description: t(
      "Developed a sensual packaging and campaign system for a fictional niche fragrance house. The identity uses a sharp serif wordmark, quiet metallic details and a restrained label hierarchy that can move from bottle to box, poster and launch social asset without losing its intimate editorial mood.",
      "Розроблена чуттєва система паковання та кампанії для вигаданого нішевого парфумерного бренду. Айдентика поєднує гострий serif-вордмарк, стримані металеві деталі й чітку ієрархію етикетки, яка працює на флаконі, коробці, постері та launch-асеті.",
      "System opakowań i kampanii dla fikcyjnej niszowej marki perfum. Identyfikacja łączy wyrazisty serifowy wordmark, subtelne metaliczne detale i spokojną hierarchię etykiety, która działa na flakonie, pudełku, plakacie i social launch asset."
    ),
    deliverables: t(
      ["Wordmark", "Perfume bottle label", "Outer box", "Campaign poster", "Launch social asset", "Packaging typography system"],
      ["Вордмарк", "Етикетка флакону", "Зовнішня коробка", "Постер кампанії", "Launch social asset", "Типографічна система паковання"],
      ["Wordmark", "Etykieta flakonu", "Pudełko zewnętrzne", "Plakat kampanii", "Social launch asset", "System typografii opakowań"]
    ),
    tools: sharedTools,
    palette: ["#070605", "#efe9dc", "#b89a62", "#2d2722", "#d8c5a0"],
    style: "luxury",
    span: "tall",
    assets: [
      asset("cover", "Bottle and box cover", "packaging", "portrait"),
      asset("label-system", "Fragrance label hierarchy", "packaging", "landscape"),
      asset("wordmark", "Wordmark and secondary type", "identity", "landscape"),
      asset("campaign-poster", "Fragrance campaign poster", "poster", "portrait"),
      asset("launch-social", "Social launch asset", "social", "square"),
      asset("packaging-set", "Packaging system mockup", "packaging", "landscape")
    ]
  },
  {
    id: "sola",
    title: "SOLA",
    client: "SOLA Sparkling",
    year: "2026",
    filters: ["campaigns", "packaging"],
    category: t("Social & Campaigns / Packaging", "Соціальні кампанії / Паковання", "Social & kampanie / Opakowania"),
    role: t("Graphic Designer / Campaign Designer", "Графічна дизайнерка / Дизайнерка кампанії", "Graphic Designer / Campaign Designer"),
    disciplines: t(
      "Beverage packaging, campaign key visual, paid social assets",
      "Паковання напоїв, key visual кампанії, paid social assets",
      "Opakowania napojów, key visual kampanii, płatne kreacje social"
    ),
    description: t(
      "Created a bright summer campaign for a fictional non-alcoholic sparkling drink. The system is intentionally commercial, colorful and optimistic, with flavor variants, high-impact can graphics and short copy built for outdoor, social and point-of-sale use.",
      "Створена яскрава літня кампанія для вигаданого безалкогольного газованого напою. Система навмисно комерційна, кольорова й оптимістична: смакові варіанти, помітна графіка банок і короткий копірайт для outdoor, social та POS.",
      "Jasna letnia kampania dla fikcyjnego bezalkoholowego napoju musującego. System jest komercyjny, kolorowy i optymistyczny, z wariantami smaków, mocną grafiką puszek i krótkim copy dla outdooru, social i POS."
    ),
    deliverables: t(
      ["Can design", "Three flavor variants", "Outdoor advertisement", "Social post", "Story", "Point-of-sale poster"],
      ["Дизайн банки", "Три смаки", "Outdoor-реклама", "Social post", "Story", "POS-постер"],
      ["Projekt puszki", "Trzy warianty smakowe", "Reklama outdoor", "Post social", "Story", "Plakat POS"]
    ),
    tools: sharedTools,
    palette: ["#fff2a8", "#ff6b5f", "#00a6a6", "#2947ff", "#ffffff"],
    style: "beverage",
    span: "wide",
    assets: [
      asset("cover", "Campaign key visual", "beverage", "landscape"),
      asset("can-variants", "Three flavor can variants", "beverage", "landscape"),
      asset("outdoor", "Outdoor advertisement", "poster", "landscape"),
      asset("social-feed", "Social feed creative", "social", "square"),
      asset("story", "Story advertisement", "social", "portrait"),
      asset("pos-poster", "Point-of-sale poster", "poster", "portrait")
    ]
  },
  {
    id: "northline",
    title: "NORTHLINE",
    client: "Northline Systems",
    year: "2025",
    filters: ["branding", "digital"],
    category: t("Branding & Identity / Digital Graphics", "Брендинг та айдентика / Digital-графіка", "Branding i identyfikacja / Grafika digital"),
    role: t("Brand Designer / Communication Designer", "Бренд-дизайнерка / Дизайнерка комунікацій", "Brand Designer / Communication Designer"),
    disciplines: t(
      "B2B identity, presentation system, data graphics, corporate collateral",
      "B2B-айдентика, система презентацій, data graphics, корпоративні матеріали",
      "Identyfikacja B2B, system prezentacji, grafiki danych, materiały korporacyjne"
    ),
    description: t(
      "Designed a precise corporate identity for a fictional infrastructure technology company. The visual language is grid-driven, calm and technical, with a modular mark, report covers, conference collateral and data graphics that support clear professional communication.",
      "Розроблена точна корпоративна айдентика для вигаданої інфраструктурної tech-компанії. Візуальна мова базується на сітці, стриманій палітрі та модульному знаку, що працює в звітах, конференційних матеріалах і data graphics.",
      "Precyzyjna identyfikacja korporacyjna dla fikcyjnej firmy technologii infrastrukturalnych. Język wizualny jest siatkowy, spokojny i techniczny, z modułowym znakiem, okładkami raportów, materiałami konferencyjnymi i grafikami danych."
    ),
    deliverables: t(
      ["Corporate identity", "Business card", "Pitch deck slides", "LinkedIn banner", "Report cover", "Conference badge"],
      ["Корпоративна айдентика", "Візитка", "Слайди pitch deck", "LinkedIn banner", "Обкладинка звіту", "Бейдж конференції"],
      ["Identyfikacja korporacyjna", "Wizytówka", "Slajdy pitch deck", "Banner LinkedIn", "Okładka raportu", "Badge konferencyjny"]
    ),
    tools: sharedTools,
    palette: ["#0c1014", "#d8e2e8", "#71808f", "#2d5d76", "#b8c8d2"],
    style: "corporate",
    span: "standard",
    assets: [
      asset("cover", "Corporate identity cover", "corporate", "landscape"),
      asset("logo-system", "Logo and grid system", "identity", "landscape"),
      asset("business-card", "Business card set", "identity", "landscape"),
      asset("pitch-deck", "Pitch deck slides", "presentation", "landscape"),
      asset("linkedin-banner", "LinkedIn banner", "digital", "landscape"),
      asset("data-report", "Data report cover", "report", "portrait")
    ]
  },
  {
    id: "after-midnight",
    title: "AFTER MIDNIGHT",
    client: "After Midnight",
    year: "2026",
    filters: ["campaigns", "editorial"],
    category: t("Social & Campaigns / Print & Editorial", "Соціальні кампанії / Друк та editorial", "Social & kampanie / Print & editorial"),
    role: t("Campaign Designer / Art Director", "Дизайнерка кампанії / Артдиректорка", "Campaign Designer / Art Director"),
    disciplines: t(
      "Event poster system, social campaign, ticket and wristband graphics",
      "Система event-постерів, social campaign, квиток і wristband graphics",
      "System plakatów eventowych, kampania social, bilet i opaska"
    ),
    description: t(
      "Built an aggressive typographic campaign for a fictional electronic music night. The identity uses high contrast, distorted type and compressed spacing to communicate underground energy across posters, artist announcements, tickets and digital billboards.",
      "Створена агресивна типографічна кампанія для вигаданої електронної події. Айдентика використовує високий контраст, деформовану типографіку й стиснутий простір для постерів, lineup graphics, квитків і digital billboards.",
      "Agresywna kampania typograficzna dla fikcyjnej nocy muzyki elektronicznej. Identyfikacja wykorzystuje wysoki kontrast, zdeformowaną typografię i skompresowaną przestrzeń w plakatach, lineup graphics, biletach i billboardach digital."
    ),
    deliverables: t(
      ["Main poster", "Alternate poster", "Lineup graphic", "Ticket", "Digital billboard", "Wristband"],
      ["Головний постер", "Альтернативний постер", "Lineup graphic", "Квиток", "Digital billboard", "Wristband"],
      ["Plakat główny", "Plakat alternatywny", "Lineup graphic", "Bilet", "Digital billboard", "Opaska"]
    ),
    tools: sharedTools,
    palette: ["#030303", "#f5f0e8", "#ff2d55", "#4f46e5", "#9bff00"],
    style: "event",
    span: "tall",
    assets: [
      asset("cover", "Main event poster", "poster", "portrait"),
      asset("alternate-poster", "Alternate poster", "poster", "portrait"),
      asset("feed-announcement", "Feed announcement", "social", "square"),
      asset("lineup", "Artist lineup graphic", "social", "portrait"),
      asset("ticket", "Event ticket", "ticket", "landscape"),
      asset("billboard", "Digital billboard", "digital", "landscape")
    ]
  },
  {
    id: "casa-fiora",
    title: "CASA FIORA",
    client: "Casa Fiora Hotel",
    year: "2025",
    filters: ["branding", "editorial"],
    category: t("Branding & Identity / Print", "Брендинг та айдентика / Друк", "Branding i identyfikacja / Print"),
    role: t("Brand Designer / Hospitality Designer", "Бренд-дизайнерка / Hospitality designer", "Brand Designer / Hospitality Designer"),
    disciplines: t(
      "Boutique hotel identity, stationery, guest collateral, local guide",
      "Айдентика boutique hotel, stationery, матеріали для гостей, локальний гід",
      "Identyfikacja boutique hotelu, stationery, materiały gościnne, lokalny przewodnik"
    ),
    description: t(
      "Created a tactile hospitality identity for a fictional Mediterranean boutique hotel. The system balances romance and restraint through warm typography, soft paper tones and calm collateral that supports the guest journey from room key to breakfast menu and local guide.",
      "Створена тактильна hospitality-айдентика для вигаданого середземноморського boutique hotel. Система балансує романтичність і стриманість через теплу типографіку, м’які паперові тони й матеріали для всього guest journey.",
      "Dotykowa identyfikacja hospitality dla fikcyjnego śródziemnomorskiego boutique hotelu. System łączy romantyczność i powściągliwość przez ciepłą typografię, miękkie odcienie papieru i materiały wspierające cały guest journey."
    ),
    deliverables: t(
      ["Hotel identity", "Room key card", "Welcome card", "Door hanger", "Breakfast menu", "Local guide"],
      ["Айдентика готелю", "Ключ-карта", "Welcome card", "Door hanger", "Меню сніданку", "Локальний гід"],
      ["Identyfikacja hotelu", "Karta do pokoju", "Welcome card", "Zawieszka na drzwi", "Menu śniadaniowe", "Lokalny przewodnik"]
    ),
    tools: sharedTools,
    palette: ["#f3dfc4", "#7b4b31", "#d59c6c", "#fff8ee", "#455145"],
    style: "hotel",
    span: "standard",
    assets: [
      asset("cover", "Hospitality collateral cover", "hospitality", "landscape"),
      asset("key-cards", "Room key cards", "identity", "landscape"),
      asset("welcome-card", "Welcome card", "print", "portrait"),
      asset("breakfast-menu", "Breakfast menu", "editorial", "portrait"),
      asset("postcard", "Hotel postcard", "print", "landscape"),
      asset("local-guide", "Local guide spread", "editorial", "landscape")
    ]
  },
  {
    id: "kinetic",
    title: "KINETIC",
    client: "Kinetic Training",
    year: "2026",
    filters: ["campaigns", "digital"],
    category: t("Social & Campaigns / Digital Graphics", "Соціальні кампанії / Digital-графіка", "Social & kampanie / Grafika digital"),
    role: t("Campaign Designer / Digital Graphic Designer", "Дизайнерка кампанії / Digital graphic designer", "Campaign Designer / Digital Graphic Designer"),
    disciplines: t(
      "Performance campaign graphics, mobile ads, email hero, promotional artwork",
      "Performance campaign graphics, мобільні ads, email hero, promotional artwork",
      "Grafiki performance campaign, mobile ads, email hero, promotional artwork"
    ),
    description: t(
      "Designed conversion-focused marketing creatives for a fictional fitness app. The system avoids product UI and focuses on energetic paid media: bold headlines, dynamic crops, high contrast color and adaptable formats for mobile stories, app store promotion and email.",
      "Розроблені conversion-focused рекламні креативи для вигаданого fitness app. Система не показує UI продукту, а фокусується на енергійних paid media: bold headlines, динамічні кадри, високий контраст і формати для stories, app store та email.",
      "Kreacje marketingowe nastawione na konwersję dla fikcyjnej aplikacji fitness. System nie jest UI case study, tylko energetycznym paid media: mocne headline’y, dynamiczne kadry, wysoki kontrast i formaty dla stories, app store oraz email."
    ),
    deliverables: t(
      ["Meta ad", "Instagram story ad", "TikTok cover", "App Store artwork", "Email hero", "Retargeting creative"],
      ["Meta ad", "Instagram story ad", "TikTok cover", "App Store artwork", "Email hero", "Retargeting creative"],
      ["Meta ad", "Instagram story ad", "TikTok cover", "App Store artwork", "Email hero", "Retargeting creative"]
    ),
    tools: sharedTools,
    palette: ["#0b0b0c", "#f6f6f2", "#ff6a00", "#00e676", "#2632ff"],
    style: "fitness",
    span: "wide",
    assets: [
      asset("cover", "Performance campaign cover", "fitness", "landscape"),
      asset("meta-ad", "Meta advertisement", "social", "square"),
      asset("story-ad", "Instagram story ad", "social", "portrait"),
      asset("tiktok-cover", "TikTok cover", "social", "portrait"),
      asset("app-store", "App Store promo artwork", "digital", "landscape"),
      asset("email-hero", "Email hero graphic", "digital", "landscape")
    ]
  },
  {
    id: "form-26",
    title: "FORM / 26",
    client: "FORM / 26 Magazine",
    year: "2025",
    filters: ["editorial"],
    category: t("Print & Editorial", "Друк та editorial", "Print & editorial"),
    role: t("Editorial Designer", "Редакційна дизайнерка", "Editorial Designer"),
    disciplines: t(
      "Magazine cover, editorial spread, long-form layout, typographic hierarchy",
      "Magazine cover, editorial spread, long-form layout, типографічна ієрархія",
      "Okładka magazynu, editorial spread, long-form layout, hierarchia typograficzna"
    ),
    description: t(
      "Created an independent architecture magazine concept with a Swiss editorial structure. The layouts demonstrate issue hierarchy, page numbers, captions, running headers and controlled whitespace across covers, contents and long-form spreads.",
      "Створена концепція незалежного архітектурного журналу зі швейцарською editorial-структурою. Макети показують ієрархію випуску, номери сторінок, підписи, running headers і контрольований whitespace у cover, contents та spreads.",
      "Koncepcja niezależnego magazynu architektonicznego ze szwajcarską strukturą editorial. Layouty pokazują hierarchię numeru, paginację, podpisy, running headers i kontrolowaną przestrzeń w okładkach, contents i długich spreadach."
    ),
    deliverables: t(
      ["Magazine cover", "Alternative cover", "Contents page", "Editorial spread", "Article spread", "Quote page"],
      ["Обкладинка журналу", "Альтернативна обкладинка", "Contents page", "Editorial spread", "Article spread", "Quote page"],
      ["Okładka magazynu", "Okładka alternatywna", "Contents page", "Editorial spread", "Article spread", "Quote page"]
    ),
    tools: sharedTools,
    palette: ["#f5f3ec", "#111111", "#9a9a93", "#d3d0c4", "#53687a"],
    style: "editorial",
    span: "standard",
    assets: [
      asset("cover", "Magazine cover", "editorial", "portrait"),
      asset("alt-cover", "Alternative cover", "editorial", "portrait"),
      asset("contents", "Contents page", "editorial", "portrait"),
      asset("feature-spread", "Feature article spread", "editorial", "landscape"),
      asset("image-spread", "Image-led spread", "editorial", "landscape"),
      asset("quote-page", "Quote page", "editorial", "portrait")
    ]
  },
  {
    id: "pawpaw",
    title: "PAWPAW",
    client: "PawPaw Pantry",
    year: "2026",
    filters: ["packaging", "branding", "campaigns"],
    category: t("Packaging & Labels / Branding", "Паковання та етикетки / Брендинг", "Opakowania i etykiety / Branding"),
    role: t("Packaging Designer / Brand Designer", "Дизайнерка паковання / Бренд-дизайнерка", "Packaging Designer / Brand Designer"),
    disciplines: t(
      "Consumer packaging, illustration system, product variants, retail display",
      "Consumer packaging, ілюстративна система, продуктові варіанти, retail display",
      "Consumer packaging, system ilustracji, warianty produktowe, ekspozycja retail"
    ),
    description: t(
      "Designed a cheerful but mature pet food brand with expressive packaging and a flexible icon system. The visual language uses confident color blocking, friendly illustration and clear variant hierarchy for dog food, cat food, treats, shipping and retail displays.",
      "Розроблений дружній, але не дитячий pet food brand з виразним пакованням і гнучкою icon system. Візуальна мова використовує впевнені color blocks, friendly illustration і зрозумілу ієрархію для dog food, cat food, treats, shipping та retail.",
      "Przyjazna, ale nie dziecięca marka karmy dla zwierząt z wyrazistym packagingiem i elastycznym systemem ikon. Język wizualny używa mocnych bloków koloru, ilustracji i czytelnej hierarchii wariantów dla dog food, cat food, treats, shipping i retail."
    ),
    deliverables: t(
      ["Dog food package", "Cat food package", "Treat pouch", "Icon system", "Shipping box", "Retail display"],
      ["Паковання dog food", "Паковання cat food", "Treat pouch", "Icon system", "Shipping box", "Retail display"],
      ["Opakowanie dog food", "Opakowanie cat food", "Treat pouch", "Icon system", "Shipping box", "Retail display"]
    ),
    tools: sharedTools,
    palette: ["#fff6df", "#ff7a59", "#1c7c54", "#ffd447", "#493548"],
    style: "pet",
    span: "wide",
    assets: [
      asset("cover", "Pet packaging cover", "pet", "landscape"),
      asset("dog-package", "Dog food package", "packaging", "portrait"),
      asset("cat-package", "Cat food package", "packaging", "portrait"),
      asset("treat-pouch", "Treat pouch", "packaging", "portrait"),
      asset("icon-system", "Pet icon system", "identity", "landscape"),
      asset("retail-display", "Retail display", "packaging", "landscape")
    ]
  },
  {
    id: "maison-elan",
    title: "MAISON ÉLAN",
    client: "Maison Élan",
    year: "2026",
    filters: ["campaigns", "editorial"],
    category: t("Social & Campaigns / Print & Editorial", "Соціальні кампанії / Друк та editorial", "Social & kampanie / Print & editorial"),
    role: t("Art Director / Graphic Designer", "Артдиректорка / Графічна дизайнерка", "Art Director / Graphic Designer"),
    disciplines: t(
      "Fashion campaign, lookbook, invitation, digital banner",
      "Fashion campaign, lookbook, invitation, digital banner",
      "Fashion campaign, lookbook, invitation, digital banner"
    ),
    description: t(
      "Created an expressive fashion editorial campaign for a fictional independent label. The system uses asymmetrical type, photographic placeholders, restrained color and elegant pacing across campaign poster, lookbook, invitation and social formats.",
      "Створена виразна fashion editorial campaign для вигаданого незалежного fashion label. Система використовує асиметричну типографіку, photographic placeholders, стриманий колір і елегантний ритм у poster, lookbook, invitation та social.",
      "Ekspresyjna fashion editorial campaign dla fikcyjnej niezależnej marki. System używa asymetrycznej typografii, photographic placeholders, powściągliwego koloru i eleganckiego rytmu w posterze, lookbooku, invitation i social."
    ),
    deliverables: t(
      ["Campaign poster", "Lookbook cover", "Lookbook spread", "Invitation", "Social campaign", "Digital banner"],
      ["Campaign poster", "Lookbook cover", "Lookbook spread", "Invitation", "Social campaign", "Digital banner"],
      ["Campaign poster", "Lookbook cover", "Lookbook spread", "Invitation", "Social campaign", "Digital banner"]
    ),
    tools: sharedTools,
    palette: ["#12100f", "#e5ded4", "#8f4f4f", "#c4a27a", "#f6f1e8"],
    style: "fashion",
    span: "tall",
    assets: [
      asset("cover", "Seasonal campaign cover", "fashion", "portrait"),
      asset("poster", "Campaign poster", "poster", "portrait"),
      asset("lookbook-cover", "Lookbook cover", "editorial", "portrait"),
      asset("lookbook-spread", "Lookbook spread", "editorial", "landscape"),
      asset("invitation", "Invitation card", "print", "landscape"),
      asset("digital-banner", "Digital banner", "digital", "landscape")
    ]
  },
  {
    id: "verde",
    title: "VERDE",
    client: "Verde Grove",
    year: "2025",
    filters: ["packaging", "branding"],
    category: t("Packaging & Labels", "Паковання та етикетки", "Opakowania i etykiety"),
    role: t("Packaging Designer", "Дизайнерка паковання", "Packaging Designer"),
    disciplines: t(
      "Olive oil labels, gift packaging, retail communication, recipe card",
      "Етикетки оливкової олії, gift packaging, retail communication, recipe card",
      "Etykiety oliwy, gift packaging, komunikacja retail, recipe card"
    ),
    description: t(
      "Developed a Mediterranean olive oil packaging concept that balances agricultural heritage with contemporary retail positioning. The label system uses tactile color, narrow type and a clear product hierarchy across bottle, gift box, shipping and recipe collateral.",
      "Розроблена концепція паковання середземноморської оливкової олії, що поєднує agricultural heritage і contemporary retail positioning. Label system використовує тактильний колір, вузьку типографіку й чітку ієрархію для bottle, gift box, shipping та recipe collateral.",
      "Koncepcja opakowań oliwy śródziemnomorskiej, łącząca agricultural heritage z contemporary retail positioning. System etykiet używa dotykowego koloru, wąskiej typografii i jasnej hierarchii dla bottle, gift box, shipping i recipe collateral."
    ),
    deliverables: t(
      ["Bottle label", "Secondary label", "Bottle mockup", "Gift packaging", "Shipping box", "Recipe card"],
      ["Етикетка пляшки", "Secondary label", "Bottle mockup", "Gift packaging", "Shipping box", "Recipe card"],
      ["Etykieta butelki", "Secondary label", "Bottle mockup", "Gift packaging", "Shipping box", "Recipe card"]
    ),
    tools: sharedTools,
    palette: ["#f2e2c6", "#39452b", "#9a6a3a", "#d0a562", "#fff8ec"],
    style: "olive",
    span: "standard",
    assets: [
      asset("cover", "Olive oil packaging cover", "olive", "landscape"),
      asset("bottle-label", "Bottle label hierarchy", "packaging", "portrait"),
      asset("variant-label", "Variant label system", "packaging", "landscape"),
      asset("gift-box", "Gift packaging", "packaging", "landscape"),
      asset("recipe-card", "Recipe card", "print", "portrait"),
      asset("retail-ad", "Retail campaign advertisement", "poster", "landscape")
    ]
  },
  {
    id: "future-forum",
    title: "FUTURE FORUM",
    client: "Future Forum",
    year: "2026",
    filters: ["branding", "campaigns", "editorial"],
    category: t("Branding & Identity / Social & Campaigns / Print", "Брендинг / Соціальні кампанії / Друк", "Branding / Social & kampanie / Print"),
    role: t("Event Identity Designer", "Дизайнерка event-айдентики", "Event Identity Designer"),
    disciplines: t(
      "Conference identity, modular key visual, signage, social templates, stage graphics",
      "Conference identity, modular key visual, signage, social templates, stage graphics",
      "Conference identity, modular key visual, signage, social templates, stage graphics"
    ),
    description: t(
      "Created a modular visual system for a fictional international business and technology conference. The identity uses bold blocks, structured motion-like compositions and a flexible typographic system that adapts from speaker announcements to badges, signage and stage screens.",
      "Створена модульна візуальна система для вигаданої міжнародної business та technology conference. Айдентика використовує bold blocks, structured motion-like compositions і гнучку typography system для speaker announcements, badges, signage та stage screens.",
      "Modularny system wizualny dla fikcyjnej międzynarodowej konferencji biznesowo-technologicznej. Identyfikacja używa bold blocks, structured motion-like compositions i elastycznego systemu typografii dla speaker announcements, badges, signage i stage screens."
    ),
    deliverables: t(
      ["Conference identity", "Key visual", "Event poster", "Speaker announcement", "Badge", "Stage screen"],
      ["Conference identity", "Key visual", "Event poster", "Speaker announcement", "Badge", "Stage screen"],
      ["Conference identity", "Key visual", "Event poster", "Speaker announcement", "Badge", "Stage screen"]
    ),
    tools: sharedTools,
    palette: ["#101214", "#f7f7f2", "#4c6fff", "#f7c948", "#ff4f7b"],
    style: "conference",
    span: "wide",
    assets: [
      asset("cover", "Conference key visual", "conference", "landscape"),
      asset("event-poster", "Event poster", "poster", "portrait"),
      asset("speaker", "Speaker announcement", "social", "square"),
      asset("agenda", "Agenda graphic", "digital", "portrait"),
      asset("badge", "Attendee badge and lanyard", "identity", "portrait"),
      asset("stage-screen", "Stage screen", "digital", "landscape")
    ]
  },
  {
    id: "kora",
    title: "KORA",
    client: "Kora Skincare",
    year: "2025",
    filters: ["branding", "packaging", "campaigns"],
    category: t("Branding & Identity / Packaging", "Брендинг та айдентика / Паковання", "Branding i identyfikacja / Opakowania"),
    role: t("Brand Designer / Packaging Designer", "Бренд-дизайнерка / Дизайнерка паковання", "Brand Designer / Packaging Designer"),
    disciplines: t(
      "Natural skincare identity, packaging, shipping system, social launch",
      "Айдентика natural skincare, packaging, shipping system, social launch",
      "Identyfikacja natural skincare, packaging, shipping system, social launch"
    ),
    description: t(
      "Created an approachable skincare identity with soft organic forms, warm neutrals and one recognizable accent. The system covers logo, symbol, bottles, jars, shipping materials and launch graphics without becoming generic spa minimalism.",
      "Створена approachable skincare-айдентика з м’якими органічними формами, теплими нейтралами й одним впізнаваним акцентом. Система охоплює logo, symbol, bottles, jars, shipping materials та launch graphics без generic spa minimalism.",
      "Przystępna identyfikacja skincare z miękkimi organicznymi formami, ciepłymi neutralami i jednym rozpoznawalnym akcentem. System obejmuje logo, symbol, bottles, jars, shipping materials i launch graphics bez generic spa minimalism."
    ),
    deliverables: t(
      ["Logo", "Symbol", "Bottle labels", "Cream jar", "Shipping box", "Instagram launch"],
      ["Логотип", "Символ", "Етикетки пляшок", "Cream jar", "Shipping box", "Instagram launch"],
      ["Logo", "Symbol", "Etykiety butelek", "Cream jar", "Shipping box", "Instagram launch"]
    ),
    tools: sharedTools,
    palette: ["#f0dfcf", "#5b6a4f", "#d68f73", "#fff8f0", "#aa775f"],
    style: "skincare",
    span: "standard",
    assets: [
      asset("cover", "Skincare identity cover", "skincare", "landscape"),
      asset("logo-symbol", "Logo and symbol", "identity", "landscape"),
      asset("bottle-labels", "Bottle labels", "packaging", "landscape"),
      asset("cream-jar", "Cream jar packaging", "packaging", "square"),
      asset("shipping", "Shipping box and tissue", "packaging", "landscape"),
      asset("instagram", "Instagram launch post", "social", "square")
    ]
  },
  {
    id: "no-signal",
    title: "NO SIGNAL",
    client: "Self-initiated poster series",
    year: "2026",
    filters: ["editorial", "digital"],
    category: t("Print & Editorial", "Друк та editorial", "Print & editorial"),
    role: t("Graphic Designer", "Графічна дизайнерка", "Graphic Designer"),
    disciplines: t(
      "Experimental poster series, typographic composition, image treatment",
      "Experimental poster series, typographic composition, image treatment",
      "Experimental poster series, typographic composition, image treatment"
    ),
    description: t(
      "Created a self-initiated poster series about communication overload, digital noise and absence of meaningful connection. The series uses brutalist type, fragmented blocks and controlled visual chaos to give the archive a more conceptual and experimental dimension.",
      "Створена self-initiated poster series про communication overload, digital noise та відсутність змістовного зв’язку. Серія використовує brutalist type, fragmented blocks і контрольований visual chaos, додаючи портфоліо концептуальний вимір.",
      "Self-initiated poster series o communication overload, digital noise i braku znaczącego połączenia. Seria używa brutalist type, fragmented blocks i kontrolowanego visual chaos, dodając archiwum bardziej koncepcyjny wymiar."
    ),
    deliverables: t(
      ["Poster 01", "Poster 02", "Poster 03", "Poster 04", "Poster 05", "Series overview"],
      ["Poster 01", "Poster 02", "Poster 03", "Poster 04", "Poster 05", "Series overview"],
      ["Poster 01", "Poster 02", "Poster 03", "Poster 04", "Poster 05", "Series overview"]
    ),
    tools: sharedTools,
    palette: ["#f1efea", "#111111", "#e84a27", "#2b2b2b", "#b8b8b0"],
    style: "experimental",
    span: "tall",
    assets: [
      asset("cover", "Poster series cover", "experimental", "portrait"),
      asset("poster-01", "No Signal poster 01", "poster", "portrait"),
      asset("poster-02", "No Signal poster 02", "poster", "portrait"),
      asset("poster-03", "No Signal poster 03", "poster", "portrait"),
      asset("poster-04", "No Signal poster 04", "poster", "portrait"),
      asset("series-overview", "Poster series overview", "poster", "landscape")
    ]
  },
  {
    id: "orbit",
    title: "ORBIT",
    client: "Orbit Financial",
    year: "2025",
    filters: ["digital", "branding"],
    category: t("Digital Graphics / Branding", "Digital-графіка / Брендинг", "Grafika digital / Branding"),
    role: t("Communication Designer", "Дизайнерка комунікацій", "Communication Designer"),
    disciplines: t(
      "Fintech communication, investor presentation, report graphics, data visualization",
      "Fintech communication, investor presentation, report graphics, data visualization",
      "Fintech communication, investor presentation, report graphics, data visualization"
    ),
    description: t(
      "Built a communication design system for a fictional fintech platform. The work focuses on investor and corporate graphics rather than product UI, using stable typography, data-led compositions and clear report structures without relying on neon finance clichés.",
      "Створена communication design system для вигаданої fintech platform. Робота фокусується на investor та corporate graphics, а не product UI, використовуючи стабільну типографіку, data-led compositions і зрозумілі report structures без neon finance clichés.",
      "Communication design system dla fikcyjnej platformy fintech. Praca skupia się na investor i corporate graphics, nie product UI, używając stabilnej typografii, data-led compositions i jasnych struktur raportowych bez neon finance clichés."
    ),
    deliverables: t(
      ["Investor presentation", "Report cover", "Report spread", "Data visualization", "LinkedIn announcement", "Webinar banner"],
      ["Investor presentation", "Report cover", "Report spread", "Data visualization", "LinkedIn announcement", "Webinar banner"],
      ["Investor presentation", "Report cover", "Report spread", "Data visualization", "LinkedIn announcement", "Webinar banner"]
    ),
    tools: sharedTools,
    palette: ["#071514", "#f6f2e8", "#1c7c7a", "#d6bc74", "#91a7a6"],
    style: "fintech",
    span: "standard",
    assets: [
      asset("cover", "Fintech communication cover", "fintech", "landscape"),
      asset("investor-deck", "Investor presentation", "presentation", "landscape"),
      asset("report-cover", "Financial report cover", "report", "portrait"),
      asset("report-spread", "Report spread", "report", "landscape"),
      asset("data-visual", "Data visualization", "digital", "landscape"),
      asset("webinar", "Webinar banner", "digital", "landscape")
    ]
  },
  {
    id: "miso-club",
    title: "MISO CLUB",
    client: "Miso Club",
    year: "2026",
    filters: ["branding", "editorial", "campaigns"],
    category: t("Branding & Identity / Print", "Брендинг та айдентика / Друк", "Branding i identyfikacja / Print"),
    role: t("Brand Designer / Graphic Designer", "Бренд-дизайнерка / Графічна дизайнерка", "Brand Designer / Graphic Designer"),
    disciplines: t(
      "Restaurant identity, menu design, takeaway packaging, social graphics",
      "Restaurant identity, menu design, takeaway packaging, social graphics",
      "Restaurant identity, menu design, takeaway packaging, social graphics"
    ),
    description: t(
      "Created a playful restaurant identity for a fictional contemporary Asian dining concept. The system avoids obvious clichés and instead uses bold color, irreverent typography and graphic illustration across menus, takeaway packaging, loyalty card and delivery graphics.",
      "Створена playful restaurant identity для вигаданого contemporary Asian dining concept. Система уникає очевидних кліше й використовує bold color, irreverent typography та graphic illustration у menus, takeaway packaging, loyalty card і delivery graphics.",
      "Playful restaurant identity dla fikcyjnego contemporary Asian dining concept. System unika oczywistych klisz, używając bold color, irreverent typography i graphic illustration w menus, takeaway packaging, loyalty card i delivery graphics."
    ),
    deliverables: t(
      ["Logo", "Secondary mark", "Menu", "Takeaway packaging", "Chopstick sleeve", "Restaurant poster"],
      ["Logo", "Secondary mark", "Menu", "Takeaway packaging", "Chopstick sleeve", "Restaurant poster"],
      ["Logo", "Secondary mark", "Menu", "Takeaway packaging", "Chopstick sleeve", "Restaurant poster"]
    ),
    tools: sharedTools,
    palette: ["#fff2e0", "#ff5533", "#102bc4", "#111111", "#ffd600"],
    style: "restaurant",
    span: "wide",
    assets: [
      asset("cover", "Restaurant identity cover", "restaurant", "landscape"),
      asset("logo-marks", "Logo and secondary mark", "identity", "landscape"),
      asset("menu", "Restaurant menu", "editorial", "portrait"),
      asset("takeaway", "Takeaway packaging", "packaging", "landscape"),
      asset("poster", "Restaurant poster", "poster", "portrait"),
      asset("delivery-bag", "Delivery bag graphic", "packaging", "portrait")
    ]
  },
  {
    id: "nest",
    title: "NEST",
    client: "Nest Residences",
    year: "2025",
    filters: ["branding", "digital", "editorial"],
    category: t("Branding & Identity / Digital Graphics / Print", "Брендинг / Digital-графіка / Друк", "Branding / Grafika digital / Print"),
    role: t("Brand Designer / Communication Designer", "Бренд-дизайнерка / Дизайнерка комунікацій", "Brand Designer / Communication Designer"),
    disciplines: t(
      "Residential development branding, sales brochure, floor plan treatment, outdoor graphics",
      "Residential development branding, sales brochure, floor plan treatment, outdoor graphics",
      "Residential development branding, sales brochure, floor plan treatment, outdoor graphics"
    ),
    description: t(
      "Designed branding and sales communication for a fictional residential development. The system is spacious, architectural and commercially credible, with a restrained identity that supports brochures, property cards, outdoor media and sales presentation materials.",
      "Розроблені branding та sales communication для вигаданого residential development. Система spacious, architectural і commercially credible, зі стриманою айдентикою для brochures, property cards, outdoor media та sales presentation materials.",
      "Branding i sales communication dla fikcyjnego residential development. System jest przestrzenny, architektoniczny i commercially credible, z powściągliwą identyfikacją dla brochures, property cards, outdoor media i sales presentation materials."
    ),
    deliverables: t(
      ["Development identity", "Brochure cover", "Brochure spread", "Floor plan treatment", "Billboard", "Property card"],
      ["Development identity", "Brochure cover", "Brochure spread", "Floor plan treatment", "Billboard", "Property card"],
      ["Development identity", "Brochure cover", "Brochure spread", "Floor plan treatment", "Billboard", "Property card"]
    ),
    tools: sharedTools,
    palette: ["#ede8dc", "#222520", "#9f9b86", "#c9b28a", "#ffffff"],
    style: "realestate",
    span: "standard",
    assets: [
      asset("cover", "Residential campaign cover", "realestate", "landscape"),
      asset("identity", "Development identity", "identity", "landscape"),
      asset("brochure-cover", "Brochure cover", "editorial", "portrait"),
      asset("brochure-spread", "Brochure spread", "editorial", "landscape"),
      asset("floor-plan", "Floor plan presentation", "digital", "landscape"),
      asset("billboard", "Outdoor billboard", "poster", "landscape")
    ]
  }
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function dimensions(orientation) {
  if (orientation === "portrait") {
    return { w: 1080, h: 1440 };
  }
  if (orientation === "square") {
    return { w: 1200, h: 1200 };
  }
  return { w: 1440, h: 1080 };
}

function line(x1, y1, x2, y2, color, opacity = 1, width = 1) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" opacity="${opacity}"/>`;
}

function rect(x, y, width, height, fill, options = {}) {
  const attrs = [
    `x="${x}"`,
    `y="${y}"`,
    `width="${width}"`,
    `height="${height}"`,
    `fill="${fill}"`
  ];

  if (options.stroke) {
    attrs.push(`stroke="${options.stroke}"`);
  }
  if (options.strokeWidth) {
    attrs.push(`stroke-width="${options.strokeWidth}"`);
  }
  if (options.opacity !== undefined) {
    attrs.push(`opacity="${options.opacity}"`);
  }
  if (options.rx !== undefined) {
    attrs.push(`rx="${options.rx}"`);
  }
  if (options.transform) {
    attrs.push(`transform="${options.transform}"`);
  }

  return `<rect ${attrs.join(" ")}/>`;
}

function circle(cx, cy, r, fill, options = {}) {
  const attrs = [`cx="${cx}"`, `cy="${cy}"`, `r="${r}"`, `fill="${fill}"`];
  if (options.stroke) {
    attrs.push(`stroke="${options.stroke}"`);
  }
  if (options.strokeWidth) {
    attrs.push(`stroke-width="${options.strokeWidth}"`);
  }
  if (options.opacity !== undefined) {
    attrs.push(`opacity="${options.opacity}"`);
  }
  return `<circle ${attrs.join(" ")}/>`;
}

function text(content, x, y, size, fill, options = {}) {
  const attrs = [
    `x="${x}"`,
    `y="${y}"`,
    `font-size="${size}"`,
    `fill="${fill}"`,
    `font-family="${options.serif ? "Cormorant Garamond, Georgia, serif" : "Inter, Arial, sans-serif"}"`,
    `font-weight="${options.weight || 500}"`
  ];

  if (options.anchor) {
    attrs.push(`text-anchor="${options.anchor}"`);
  }
  if (options.spacing !== undefined) {
    attrs.push(`letter-spacing="${options.spacing}"`);
  }
  if (options.transform) {
    attrs.push(`transform="${options.transform}"`);
  }
  if (options.opacity !== undefined) {
    attrs.push(`opacity="${options.opacity}"`);
  }
  if (options.uppercase) {
    content = String(content).toUpperCase();
  }

  return `<text ${attrs.join(" ")}>${esc(content)}</text>`;
}

function splitTitle(title) {
  return title.replace(/\s\/\s/g, " / ").split(/\s+/).filter(Boolean);
}

function background(project, w, h) {
  const [bg, fg, accent, deep, soft] = project.palette;
  let out = rect(0, 0, w, h, bg);
  out += rect(36, 36, w - 72, h - 72, "none", { stroke: fg, opacity: 0.18, strokeWidth: 1 });
  out += line(w * 0.12, 0, w * 0.12, h, fg, 0.08);
  out += line(w * 0.5, 0, w * 0.5, h, fg, 0.06);
  out += line(w * 0.88, 0, w * 0.88, h, fg, 0.08);
  out += line(0, h * 0.18, w, h * 0.18, fg, 0.08);
  out += line(0, h * 0.82, w, h * 0.82, fg, 0.08);
  out += circle(w * 0.85, h * 0.18, Math.min(w, h) * 0.22, accent, { opacity: 0.08 });
  out += circle(w * 0.16, h * 0.84, Math.min(w, h) * 0.18, soft || accent, { opacity: 0.08 });
  out += rect(w * 0.05, h * 0.05, w * 0.16, 4, accent, { opacity: 0.75 });
  return out;
}

function caption(project, assetDef, w, h, fill) {
  const label = assetDef.title;
  let out = text("CONCEPT PROJECT", 72, h - 92, 22, fill, { weight: 700, spacing: 3, opacity: 0.7 });
  out += text(label, 72, h - 54, 30, fill, { weight: 500, opacity: 0.86 });
  return out;
}

function drawBottle(x, y, w, h, project, label) {
  const [bg, fg, accent, deep, soft] = project.palette;
  let out = rect(x + w * 0.32, y, w * 0.36, h * 0.16, accent, { opacity: 0.8, rx: 6 });
  out += rect(x + w * 0.2, y + h * 0.12, w * 0.6, h * 0.82, deep || bg, {
    stroke: fg,
    strokeWidth: 2,
    opacity: 0.98,
    rx: 24
  });
  out += rect(x + w * 0.28, y + h * 0.42, w * 0.44, h * 0.26, fg, { opacity: 0.95 });
  out += text(label, x + w * 0.5, y + h * 0.53, Math.max(22, w * 0.06), bg, {
    serif: true,
    weight: 600,
    anchor: "middle",
    spacing: 2
  });
  out += text("EAU DE PARFUM", x + w * 0.5, y + h * 0.6, Math.max(12, w * 0.024), bg, {
    anchor: "middle",
    spacing: 3,
    weight: 700
  });
  out += text("50 ML", x + w * 0.5, y + h * 0.65, Math.max(12, w * 0.024), bg, {
    anchor: "middle",
    spacing: 2,
    weight: 700
  });
  out += rect(x + w * 0.18, y + h * 0.94, w * 0.64, 12, accent, { opacity: 0.35, rx: 12 });
  return out;
}

function templateLuxury(project, assetDef, w, h) {
  const [bg, fg, accent, deep] = project.palette;
  let out = background(project, w, h);
  out += drawBottle(w * 0.18, h * 0.22, w * 0.28, h * 0.55, project, "Nº 7");
  out += rect(w * 0.52, h * 0.23, w * 0.27, h * 0.52, deep, { stroke: accent, strokeWidth: 2 });
  out += text("LUMIÈRE", w * 0.655, h * 0.39, w * 0.045, fg, { serif: true, anchor: "middle", weight: 600, spacing: 4 });
  out += text("NO. 7", w * 0.655, h * 0.47, w * 0.035, accent, { serif: true, anchor: "middle", weight: 600, spacing: 4 });
  out += line(w * 0.57, h * 0.53, w * 0.74, h * 0.53, accent, 0.8);
  out += text("AMBER / SMOKE / IRIS", w * 0.655, h * 0.59, w * 0.018, fg, { anchor: "middle", spacing: 2, weight: 700 });
  out += text("LUMIÈRE NO. 7", 72, 150, Math.min(w * 0.08, 92), fg, { serif: true, weight: 500, spacing: 5 });
  out += caption(project, assetDef, w, h, fg);
  return out;
}

function templateSkincare(project, assetDef, w, h) {
  const [bg, fg, accent, light, clay] = project.palette;
  let out = background(project, w, h);
  out += circle(w * 0.3, h * 0.45, w * 0.16, accent, { opacity: 0.38 });
  out += circle(w * 0.62, h * 0.32, w * 0.11, fg, { opacity: 0.2 });
  out += rect(w * 0.18, h * 0.35, w * 0.16, h * 0.34, light, { stroke: clay, strokeWidth: 2, rx: 24 });
  out += rect(w * 0.21, h * 0.3, w * 0.1, h * 0.08, clay, { rx: 8, opacity: 0.85 });
  out += rect(w * 0.4, h * 0.31, w * 0.18, h * 0.39, light, { stroke: clay, strokeWidth: 2, rx: 26 });
  out += rect(w * 0.44, h * 0.25, w * 0.1, h * 0.08, fg, { rx: 10, opacity: 0.72 });
  out += circle(w * 0.73, h * 0.6, w * 0.12, light, { stroke: clay, strokeWidth: 2 });
  out += text("KORA", w * 0.49, h * 0.49, w * 0.065, fg, { anchor: "middle", weight: 700, spacing: 4 });
  out += text("BOTANICAL CARE", w * 0.49, h * 0.56, w * 0.018, fg, { anchor: "middle", weight: 700, spacing: 3 });
  out += text("CALM SERUM", w * 0.26, h * 0.58, w * 0.018, fg, { anchor: "middle", weight: 700, spacing: 2 });
  out += text("NOURISH CREAM", w * 0.73, h * 0.63, w * 0.017, fg, { anchor: "middle", weight: 700, spacing: 1 });
  out += text("KORA", 72, 142, Math.min(w * 0.08, 92), fg, { weight: 700, spacing: 8 });
  out += caption(project, assetDef, w, h, fg);
  return out;
}

function templateRestaurant(project, assetDef, w, h) {
  const [bg, red, blue, black, yellow] = project.palette;
  let out = rect(0, 0, w, h, bg);
  out += rect(w * 0.06, h * 0.08, w * 0.42, h * 0.76, red, { transform: `rotate(-3 ${w * 0.27} ${h * 0.46})` });
  out += rect(w * 0.45, h * 0.18, w * 0.42, h * 0.62, blue, { transform: `rotate(4 ${w * 0.66} ${h * 0.49})` });
  out += circle(w * 0.32, h * 0.44, w * 0.13, yellow, { stroke: black, strokeWidth: 4 });
  out += circle(w * 0.32, h * 0.44, w * 0.08, bg, { stroke: black, strokeWidth: 3 });
  out += text("MISO", w * 0.17, h * 0.27, w * 0.09, black, { weight: 800, spacing: 2 });
  out += text("CLUB", w * 0.53, h * 0.6, w * 0.11, bg, { weight: 800, spacing: 2, transform: `rotate(90 ${w * 0.53} ${h * 0.6})` });
  out += text("NO RULES MENU", w * 0.63, h * 0.34, w * 0.028, bg, { weight: 800, spacing: 2 });
  out += text("NOODLES / BROTH / FIRE", w * 0.63, h * 0.39, w * 0.02, bg, { weight: 700, spacing: 2 });
  out += caption(project, assetDef, w, h, black);
  return out;
}

function templateCorporate(project, assetDef, w, h) {
  const [bg, fg, muted, blue, soft] = project.palette;
  let out = background(project, w, h);
  for (let i = 0; i < 8; i += 1) {
    out += line(w * 0.18, h * (0.22 + i * 0.07), w * 0.82, h * (0.22 + i * 0.07), fg, 0.09);
  }
  out += rect(w * 0.13, h * 0.19, w * 0.28, h * 0.48, "#111820", { stroke: muted, strokeWidth: 1, opacity: 0.96 });
  out += rect(w * 0.48, h * 0.24, w * 0.35, h * 0.13, blue, { opacity: 0.65 });
  out += rect(w * 0.48, h * 0.42, w * 0.35, h * 0.1, muted, { opacity: 0.45 });
  out += rect(w * 0.48, h * 0.57, w * 0.22, h * 0.1, soft, { opacity: 0.55 });
  out += text("NORTHLINE", w * 0.17, h * 0.32, w * 0.048, fg, { weight: 700, spacing: 5 });
  out += text("INFRASTRUCTURE SYSTEMS", w * 0.17, h * 0.39, w * 0.017, muted, { weight: 700, spacing: 2 });
  out += text("Q4 SIGNAL REPORT", w * 0.5, h * 0.33, w * 0.025, fg, { weight: 700, spacing: 2 });
  out += text("PRECISION / GRID / DATA", w * 0.5, h * 0.62, w * 0.022, fg, { weight: 700, spacing: 2 });
  out += caption(project, assetDef, w, h, fg);
  return out;
}

function templateEvent(project, assetDef, w, h) {
  const [bg, fg, hot, blue, acid] = project.palette;
  let out = rect(0, 0, w, h, bg);
  for (let i = 0; i < 12; i += 1) {
    out += rect(w * (0.05 + i * 0.075), h * 0.1, 10, h * 0.78, i % 2 ? blue : hot, { opacity: 0.45 });
  }
  out += text("AFTER", w * 0.09, h * 0.32, w * 0.13, fg, { weight: 900, spacing: -2 });
  out += text("MIDNIGHT", w * 0.08, h * 0.48, w * 0.1, fg, { weight: 900, spacing: -2 });
  out += text("03 / 11 / 26", w * 0.1, h * 0.59, w * 0.035, acid, { weight: 800, spacing: 4 });
  out += text("WAREHOUSE 17, BERLIN", w * 0.1, h * 0.66, w * 0.024, fg, { weight: 800, spacing: 3 });
  out += text("NOCTRA  /  VELA  /  SAINT INDEX", w * 0.1, h * 0.73, w * 0.021, hot, { weight: 800, spacing: 2 });
  out += rect(w * 0.58, h * 0.28, w * 0.28, h * 0.28, "none", { stroke: acid, strokeWidth: 8, transform: `rotate(11 ${w * 0.72} ${h * 0.42})` });
  out += caption(project, assetDef, w, h, fg);
  return out;
}

function templateOlive(project, assetDef, w, h) {
  const [bg, green, brown, gold, cream] = project.palette;
  let out = background(project, w, h);
  out += drawBottle(w * 0.2, h * 0.18, w * 0.24, h * 0.62, { palette: [bg, green, gold, green, cream] }, "VERDE");
  out += rect(w * 0.51, h * 0.28, w * 0.28, h * 0.36, cream, { stroke: brown, strokeWidth: 3 });
  out += text("VERDE", w * 0.65, h * 0.42, w * 0.055, green, { serif: true, anchor: "middle", weight: 600, spacing: 4 });
  out += text("EXTRA VIRGIN OLIVE OIL", w * 0.65, h * 0.5, w * 0.018, brown, { anchor: "middle", weight: 800, spacing: 2 });
  out += text("HARVEST 2026 / 500 ML", w * 0.65, h * 0.56, w * 0.016, brown, { anchor: "middle", weight: 700, spacing: 2 });
  out += circle(w * 0.74, h * 0.31, w * 0.055, gold, { opacity: 0.78 });
  out += caption(project, assetDef, w, h, green);
  return out;
}

function templateFitness(project, assetDef, w, h) {
  const [bg, fg, orange, green, blue] = project.palette;
  let out = rect(0, 0, w, h, bg);
  out += rect(w * 0.08, h * 0.12, w * 0.36, h * 0.72, fg, { rx: 42 });
  out += rect(w * 0.11, h * 0.18, w * 0.3, h * 0.6, bg, { rx: 28 });
  out += rect(w * 0.53, h * 0.18, w * 0.36, h * 0.18, orange, { transform: `skewX(-12)` });
  out += rect(w * 0.48, h * 0.43, w * 0.41, h * 0.16, green, { transform: `skewX(-12)` });
  out += rect(w * 0.58, h * 0.66, w * 0.28, h * 0.12, blue, { transform: `skewX(-12)` });
  out += text("MOVE", w * 0.15, h * 0.34, w * 0.072, fg, { weight: 900, spacing: 2 });
  out += text("FASTER", w * 0.15, h * 0.44, w * 0.058, orange, { weight: 900, spacing: 2 });
  out += text("KINETIC", w * 0.55, h * 0.31, w * 0.06, bg, { weight: 900, spacing: 3 });
  out += text("7 DAYS OF TRAINING", w * 0.55, h * 0.53, w * 0.026, bg, { weight: 800, spacing: 2 });
  out += text("START TODAY", w * 0.61, h * 0.74, w * 0.023, fg, { weight: 800, spacing: 2 });
  out += caption(project, assetDef, w, h, fg);
  return out;
}

function templateEditorial(project, assetDef, w, h) {
  const [paper, ink, grey, light, blue] = project.palette;
  let out = rect(0, 0, w, h, paper);
  out += rect(w * 0.08, h * 0.1, w * 0.38, h * 0.72, "#fffdf7", { stroke: ink, strokeWidth: 1 });
  out += rect(w * 0.54, h * 0.1, w * 0.38, h * 0.72, "#fffdf7", { stroke: ink, strokeWidth: 1 });
  out += rect(w * 0.12, h * 0.18, w * 0.22, h * 0.28, blue, { opacity: 0.38 });
  out += rect(w * 0.58, h * 0.16, w * 0.29, h * 0.2, grey, { opacity: 0.36 });
  out += text("FORM / 26", w * 0.12, h * 0.16, w * 0.037, ink, { weight: 700, spacing: 3 });
  out += text("Architecture as Climate", w * 0.12, h * 0.55, w * 0.033, ink, { serif: true, weight: 600 });
  out += text("Essay by Mira Solen", w * 0.12, h * 0.61, w * 0.018, grey, { weight: 700, spacing: 1 });
  out += text("02", w * 0.84, h * 0.76, w * 0.028, ink, { weight: 700 });
  out += text("Material Memory", w * 0.58, h * 0.43, w * 0.031, ink, { serif: true, weight: 600 });
  out += text("Light, concrete and domestic scale in northern studios.", w * 0.58, h * 0.49, w * 0.018, grey, { weight: 500 });
  out += caption(project, assetDef, w, h, ink);
  return out;
}

function templateBeverage(project, assetDef, w, h) {
  const [yellow, coral, teal, blue, white] = project.palette;
  let out = rect(0, 0, w, h, yellow);
  out += circle(w * 0.17, h * 0.2, w * 0.13, coral, { opacity: 0.8 });
  out += circle(w * 0.88, h * 0.78, w * 0.19, teal, { opacity: 0.75 });
  ["LEMON", "YUZU", "BERRY"].forEach((flavor, index) => {
    const x = w * (0.23 + index * 0.19);
    out += rect(x, h * 0.31, w * 0.12, h * 0.42, [white, teal, coral][index], { stroke: blue, strokeWidth: 3, rx: 28 });
    out += text("SOLA", x + w * 0.06, h * 0.48, w * 0.034, blue, { anchor: "middle", weight: 900, spacing: 3 });
    out += text(flavor, x + w * 0.06, h * 0.56, w * 0.017, blue, { anchor: "middle", weight: 800, spacing: 2 });
  });
  out += text("SPARKLING DAYS", w * 0.1, h * 0.18, w * 0.064, blue, { weight: 900, spacing: 1 });
  out += text("ZERO ALCOHOL / REAL SUN", w * 0.1, h * 0.25, w * 0.022, blue, { weight: 800, spacing: 3 });
  out += caption(project, assetDef, w, h, blue);
  return out;
}

function templateFashion(project, assetDef, w, h) {
  const [bg, fg, wine, gold, paper] = project.palette;
  let out = rect(0, 0, w, h, bg);
  out += rect(w * 0.12, h * 0.14, w * 0.34, h * 0.62, paper, { opacity: 0.96 });
  out += rect(w * 0.17, h * 0.21, w * 0.24, h * 0.44, wine, { opacity: 0.75 });
  out += circle(w * 0.29, h * 0.32, w * 0.08, gold, { opacity: 0.35 });
  out += rect(w * 0.55, h * 0.2, w * 0.28, h * 0.5, "none", { stroke: fg, strokeWidth: 1, opacity: 0.5 });
  out += text("MAISON", w * 0.53, h * 0.32, w * 0.065, fg, { serif: true, weight: 500, spacing: 3 });
  out += text("ÉLAN", w * 0.6, h * 0.44, w * 0.1, fg, { serif: true, weight: 500, spacing: 5 });
  out += text("AUTUMN STUDY", w * 0.58, h * 0.55, w * 0.02, gold, { weight: 800, spacing: 3 });
  out += text("LOOKBOOK / INVITATION / CAMPAIGN", w * 0.58, h * 0.61, w * 0.018, fg, { weight: 700, spacing: 2 });
  out += caption(project, assetDef, w, h, fg);
  return out;
}

function templateFintech(project, assetDef, w, h) {
  const [bg, fg, teal, gold, muted] = project.palette;
  let out = background(project, w, h);
  out += rect(w * 0.12, h * 0.18, w * 0.32, h * 0.48, fg, { opacity: 0.96 });
  out += text("ORBIT", w * 0.17, h * 0.29, w * 0.056, bg, { weight: 800, spacing: 4 });
  out += text("CAPITAL FLOW REVIEW", w * 0.17, h * 0.36, w * 0.018, bg, { weight: 800, spacing: 2 });
  const points = [
    [0.52, 0.62],
    [0.58, 0.5],
    [0.65, 0.56],
    [0.72, 0.34],
    [0.8, 0.42]
  ];
  for (let i = 0; i < points.length - 1; i += 1) {
    out += line(w * points[i][0], h * points[i][1], w * points[i + 1][0], h * points[i + 1][1], gold, 1, 5);
  }
  points.forEach(([x, y]) => {
    out += circle(w * x, h * y, 12, teal);
  });
  out += rect(w * 0.51, h * 0.2, w * 0.33, h * 0.5, "none", { stroke: muted, strokeWidth: 1, opacity: 0.7 });
  out += text("DATA / TRUST / SIGNAL", w * 0.52, h * 0.76, w * 0.022, fg, { weight: 800, spacing: 3 });
  out += caption(project, assetDef, w, h, fg);
  return out;
}

function templateHotel(project, assetDef, w, h) {
  const [bg, brown, clay, paper, green] = project.palette;
  let out = rect(0, 0, w, h, bg);
  out += rect(w * 0.1, h * 0.2, w * 0.28, h * 0.42, paper, { stroke: brown, strokeWidth: 2 });
  out += rect(w * 0.44, h * 0.17, w * 0.18, h * 0.32, green, { opacity: 0.92 });
  out += rect(w * 0.67, h * 0.28, w * 0.2, h * 0.38, paper, { stroke: clay, strokeWidth: 2, transform: `rotate(5 ${w * 0.77} ${h * 0.47})` });
  out += text("Casa", w * 0.16, h * 0.36, w * 0.052, brown, { serif: true, weight: 600 });
  out += text("Fiora", w * 0.16, h * 0.45, w * 0.06, brown, { serif: true, weight: 600 });
  out += text("ROOM 07", w * 0.49, h * 0.34, w * 0.023, paper, { weight: 800, spacing: 3 });
  out += text("LOCAL GUIDE", w * 0.7, h * 0.44, w * 0.023, brown, { weight: 800, spacing: 2 });
  out += text("MORNING MENU", w * 0.7, h * 0.51, w * 0.017, brown, { weight: 700, spacing: 2 });
  out += caption(project, assetDef, w, h, brown);
  return out;
}

function templateExperimental(project, assetDef, w, h) {
  const [paper, ink, orange, dark, grey] = project.palette;
  let out = rect(0, 0, w, h, paper);
  for (let i = 0; i < 18; i += 1) {
    const x = (i * 83) % w;
    const y = (i * 137) % h;
    out += rect(x, y, 110 + (i % 4) * 40, 16 + (i % 3) * 22, i % 2 ? ink : orange, { opacity: i % 2 ? 0.78 : 0.9 });
  }
  out += text("NO", w * 0.08, h * 0.32, w * 0.19, ink, { weight: 900, spacing: -4 });
  out += text("SIGNAL", w * 0.07, h * 0.52, w * 0.14, ink, { weight: 900, spacing: -4 });
  out += text("MESSAGE LOST / THREAD CLOSED / STATIC OPEN", w * 0.09, h * 0.66, w * 0.022, dark, { weight: 800, spacing: 3 });
  out += rect(w * 0.1, h * 0.73, w * 0.7, 18, orange);
  out += rect(w * 0.1, h * 0.78, w * 0.52, 18, ink);
  out += caption(project, assetDef, w, h, ink);
  return out;
}

function templateRealestate(project, assetDef, w, h) {
  const [bg, ink, grey, gold, white] = project.palette;
  let out = rect(0, 0, w, h, bg);
  out += rect(w * 0.08, h * 0.14, w * 0.35, h * 0.56, white, { stroke: grey, strokeWidth: 1 });
  out += rect(w * 0.5, h * 0.21, w * 0.34, h * 0.38, "none", { stroke: ink, strokeWidth: 3 });
  out += line(w * 0.56, h * 0.21, w * 0.56, h * 0.59, ink, 0.9, 2);
  out += line(w * 0.5, h * 0.39, w * 0.84, h * 0.39, ink, 0.9, 2);
  out += rect(w * 0.12, h * 0.23, w * 0.22, h * 0.17, grey, { opacity: 0.46 });
  out += text("NEST", w * 0.12, h * 0.5, w * 0.074, ink, { serif: true, weight: 600, spacing: 5 });
  out += text("RESIDENCES", w * 0.13, h * 0.57, w * 0.019, ink, { weight: 800, spacing: 4 });
  out += text("PLAN A.04", w * 0.53, h * 0.67, w * 0.024, ink, { weight: 800, spacing: 3 });
  out += text("QUIET CITY LIVING", w * 0.54, h * 0.73, w * 0.021, gold, { weight: 800, spacing: 2 });
  out += caption(project, assetDef, w, h, ink);
  return out;
}

function templatePet(project, assetDef, w, h) {
  const [bg, coral, green, yellow, purple] = project.palette;
  let out = rect(0, 0, w, h, bg);
  const bags = [
    [0.15, 0.28, coral, "DOG"],
    [0.39, 0.22, green, "CAT"],
    [0.63, 0.32, yellow, "TREATS"]
  ];
  bags.forEach(([x, y, color, label]) => {
    out += rect(w * x, h * y, w * 0.18, h * 0.42, color, { stroke: purple, strokeWidth: 3, rx: 26 });
    out += circle(w * (x + 0.09), h * (y + 0.12), w * 0.045, bg, { stroke: purple, strokeWidth: 3 });
    out += text("PAWPAW", w * (x + 0.09), h * (y + 0.24), w * 0.026, purple, { anchor: "middle", weight: 900, spacing: 2 });
    out += text(label, w * (x + 0.09), h * (y + 0.31), w * 0.02, purple, { anchor: "middle", weight: 900, spacing: 2 });
  });
  out += text("FOOD WITH CHARACTER", w * 0.12, h * 0.17, w * 0.052, purple, { weight: 900, spacing: 1 });
  out += caption(project, assetDef, w, h, purple);
  return out;
}

function templateConference(project, assetDef, w, h) {
  const [bg, fg, blue, yellow, pink] = project.palette;
  let out = rect(0, 0, w, h, bg);
  out += rect(w * 0.08, h * 0.12, w * 0.25, h * 0.22, blue);
  out += rect(w * 0.33, h * 0.12, w * 0.18, h * 0.22, yellow);
  out += rect(w * 0.51, h * 0.12, w * 0.34, h * 0.22, pink);
  out += rect(w * 0.08, h * 0.42, w * 0.42, h * 0.28, fg);
  out += rect(w * 0.56, h * 0.42, w * 0.29, h * 0.28, blue);
  out += text("FUTURE", w * 0.1, h * 0.54, w * 0.072, bg, { weight: 900, spacing: 2 });
  out += text("FORUM", w * 0.1, h * 0.64, w * 0.072, bg, { weight: 900, spacing: 2 });
  out += text("14-16 MAY 2026", w * 0.57, h * 0.52, w * 0.026, fg, { weight: 800, spacing: 3 });
  out += text("AMSTERDAM", w * 0.57, h * 0.59, w * 0.026, fg, { weight: 800, spacing: 3 });
  out += text("TECH / BUSINESS / SYSTEMS", w * 0.57, h * 0.66, w * 0.018, fg, { weight: 800, spacing: 2 });
  out += caption(project, assetDef, w, h, fg);
  return out;
}

const templateMap = {
  luxury: templateLuxury,
  skincare: templateSkincare,
  restaurant: templateRestaurant,
  corporate: templateCorporate,
  event: templateEvent,
  olive: templateOlive,
  fitness: templateFitness,
  editorial: templateEditorial,
  beverage: templateBeverage,
  fashion: templateFashion,
  fintech: templateFintech,
  hotel: templateHotel,
  experimental: templateExperimental,
  realestate: templateRealestate,
  pet: templatePet,
  conference: templateConference
};

function svg(project, assetDef) {
  const { w, h } = dimensions(assetDef.orientation);
  const draw = templateMap[project.style] || templateCorporate;
  const content = draw(project, assetDef, w, h);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(project.title)} ${esc(assetDef.title)}">
  <title>${esc(project.title)} - ${esc(assetDef.title)}</title>
  <desc>Original portfolio concept visual for ${esc(project.title)}.</desc>
  ${content}
</svg>
`;
}

function imageAlt(project, assetDef) {
  return {
    en: `${project.title} ${assetDef.title.toLowerCase()} concept visual.`,
    uk: `${project.title}: концепт-візуал ${assetDef.title.toLowerCase()}.`,
    pl: `${project.title}: koncepcyjna wizualizacja ${assetDef.title.toLowerCase()}.`
  };
}

function buildData() {
  return projects.map((project, index) => {
    const projectDir = path.join(assetRoot, project.id);
    ensureDir(projectDir);

    const images = project.assets.map((assetDef) => {
      const filename = `${assetDef.id}.svg`;
      const file = path.join(projectDir, filename);
      fs.writeFileSync(file, svg(project, assetDef), "utf8");

      return {
        id: assetDef.id,
        title: assetDef.title,
        src: `../assets/visual-design/${project.id}/${filename}`,
        alt: imageAlt(project, assetDef),
        orientation: assetDef.orientation
      };
    });

    const cover = images.find((image) => image.id === "cover") || images[0];

    return {
      id: project.id,
      title: project.title,
      client: project.client,
      year: project.year,
      conceptLabel: {
        en: "Concept project",
        uk: "Концепт-проєкт",
        pl: "Projekt koncepcyjny"
      },
      filters: project.filters,
      category: project.category,
      role: project.role,
      disciplines: project.disciplines,
      description: project.description,
      deliverables: project.deliverables,
      tools: project.tools,
      featured: index < 8,
      span: project.span,
      cover,
      images
    };
  });
}

ensureDir(assetRoot);
ensureDir(path.dirname(dataFile));

const visualProjects = buildData();
const output = `window.visualDesignLabels = ${JSON.stringify(labels, null, 2)};

window.visualDesignCategories = ${JSON.stringify(categories, null, 2)};

window.visualDesignProjects = ${JSON.stringify(visualProjects, null, 2)};
`;

fs.writeFileSync(dataFile, output, "utf8");

const count = visualProjects.reduce((sum, project) => sum + project.images.length, 0);
console.log(`Generated ${visualProjects.length} visual design projects and ${count} assets.`);
