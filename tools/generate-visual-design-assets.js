const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const assetRoot = path.join(root, "assets", "visual-design");
const pageRoot = path.join(root, "visual-design");
const dataFile = path.join(pageRoot, "visual-design-data.js");
const capabilityFile = path.join(pageRoot, "capability-matrix.json");

const categories = {
  all: { en: "All", uk: "Усі", pl: "Wszystkie" },
  branding: { en: "Branding", uk: "Брендинг", pl: "Branding" },
  packaging: { en: "Packaging", uk: "Паковання", pl: "Opakowania" },
  campaigns: { en: "Campaigns", uk: "Кампанії", pl: "Kampanie" },
  editorial: { en: "Editorial", uk: "Редакційний дизайн", pl: "Editorial" },
  corporate: { en: "Corporate", uk: "Корпоративний", pl: "Corporate" },
  digital: { en: "Digital", uk: "Диджитал", pl: "Digital" }
};

const labels = {
  en: {
    documentTitle: "Visual Design - Yana Ellis",
    logoAlt: "Yana Ellis logo",
    navHome: "Web portfolio",
    navVisual: "Visual Design",
    navProcess: "Process",
    heroKicker: "Visual Design",
    heroTitle: "Commercial graphics. Brand systems. Campaign assets.",
    heroText:
      "A multidisciplinary archive of concept projects across packaging, identity, advertising, editorial, corporate communication and digital marketing.",
    archiveKicker: "Archive",
    archiveTitle: "Graphic design work built around real deliverables.",
    archiveText:
      "Each concept project is self-initiated and fictional, but structured like a commercial brief with practical applications, mockups and campaign materials.",
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
    typography: "Typography direction",
    capabilities: "Capabilities shown",
    images: "Project visuals",
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
    heroTitle: "Комерційна графіка. Бренд-системи. Кампанії.",
    heroText:
      "Мультидисциплінарний архів концептів: паковання, айдентика, реклама, editorial, корпоративна комунікація та digital-маркетинг.",
    archiveKicker: "Архів",
    archiveTitle: "Графічний дизайн, побудований навколо реальних матеріалів.",
    archiveText:
      "Кожен концепт-проєкт самостійний і вигаданий, але зібраний як комерційний brief із практичними носіями, mockups і кампанійними матеріалами.",
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
    typography: "Типографічний напрям",
    capabilities: "Показані навички",
    images: "Візуали проєкту",
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
    heroTitle: "Grafika komercyjna. Systemy marek. Kampanie.",
    heroText:
      "Multidyscyplinarne archiwum konceptów: opakowania, identyfikacje, reklama, editorial, komunikacja korporacyjna i digital marketing.",
    archiveKicker: "Archiwum",
    archiveTitle: "Graphic design oparty na realnych materiałach.",
    archiveText:
      "Każdy projekt jest fikcyjny i self-initiated, ale zbudowany jak komercyjny brief z praktycznymi aplikacjami, mockupami i materiałami kampanii.",
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
    typography: "Kierunek typografii",
    capabilities: "Pokazane umiejętności",
    images: "Wizualizacje projektu",
    previousProject: "Poprzedni projekt",
    nextProject: "Następny projekt",
    backToArchive: "Wróć do Visual Design",
    footerText:
      "Archiwum koncepcyjne brandingu, opakowań, kampanii, druku i grafiki digital.",
    contact: "Kontakt"
  }
};

const tools = ["Figma", "Adobe Illustrator", "Adobe Photoshop"];

function asset(id, title, scene, orientation = "landscape", options = {}) {
  return { id, title, scene, orientation, ...options };
}

const projects = [
  {
    id: "lumiere-no7",
    title: "LUMIÈRE NO. 7",
    client: "Lumière No. 7",
    year: "2026",
    filters: ["packaging", "branding", "campaigns"],
    category: "Packaging & Labels / Branding",
    role: "Brand Designer / Packaging Designer",
    disciplines: "Fragrance packaging, label hierarchy, campaign art direction, premium print collateral",
    description:
      "A niche fragrance concept built as a tactile packaging system rather than a single poster. The work balances ivory paper, deep burgundy, black glass and muted metallic accents across bottle labels, boxes, print advertising and launch social assets.",
    palette: ["#221012", "#f3eadc", "#7a1f2b", "#b9965a", "#090706"],
    typography: "Editorial serif / small caps sans",
    coverSize: "feature",
    capabilities: ["Brand identity", "Logo design", "Packaging", "Labels", "Poster design", "Social media", "Print advertising", "FMCG"],
    assets: [
      asset("cover", "Bottle and outer box system", "fragranceHero"),
      asset("wordmark", "Primary wordmark", "logoSystem"),
      asset("bottle-label", "Bottle label hierarchy", "labelSheet"),
      asset("bottle-front", "Bottle front mockup", "bottleFront", "portrait"),
      asset("bottle-close-up", "Bottle close-up", "closeUp"),
      asset("outer-box", "Outer box", "boxMockup"),
      asset("box-type-detail", "Box typography detail", "detailCrop"),
      asset("campaign-poster", "Fragrance campaign poster", "premiumPoster", "portrait"),
      asset("magazine-ad", "Magazine advertisement", "magazineAd"),
      asset("launch-social", "Launch social media post", "socialPost", "square", { cta: "Discover No. 7" })
    ]
  },
  {
    id: "sola",
    title: "SOLA",
    client: "SOLA Sparkling",
    year: "2026",
    filters: ["packaging", "campaigns", "digital"],
    category: "FMCG Campaign / Packaging",
    role: "Marketing Designer / Packaging Designer",
    disciplines: "Beverage campaign, flavor system, retail graphics, paid social assets",
    description:
      "A bright FMCG campaign for a fictional non-alcoholic sparkling drink. The system prioritizes shelf recognition, flavor clarity, promotional messaging and high-energy assets for outdoor, retail, paid social and summer banners.",
    palette: ["#fff45b", "#ff4f6d", "#00a7e1", "#2dd36f", "#1721a8"],
    typography: "Rounded geometric sans / bold display",
    coverSize: "large",
    capabilities: ["Packaging", "Labels", "FMCG", "Paid ads", "Meta advertising", "Social media", "Retail graphics", "Digital banners"],
    assets: [
      asset("cover", "Hero campaign visual", "beverageHero"),
      asset("variants", "Three can and bottle variants", "beverageVariants"),
      asset("flavor-system", "Flavor system", "flavorSystem"),
      asset("billboard", "Outdoor billboard", "billboard", "landscape", { headline: "Taste the sun", cta: "Zero alcohol" }),
      asset("meta-ad", "Meta ad", "adCard", "square", { headline: "Summer in a can", cta: "Shop now" }),
      asset("story", "Instagram story", "phoneStory", "portrait", { headline: "3 flavors. 0 alcohol.", cta: "Try SOLA" }),
      asset("retail-shelf", "Retail refrigerator shelf graphic", "retailShelf"),
      asset("pos-poster", "POS promotional poster", "posPoster", "portrait", { headline: "2 for 1 weekend" }),
      asset("summer-banner", "Summer campaign banner", "webBanner", "landscape", { headline: "Sparkling summer launch" })
    ]
  },
  {
    id: "northline",
    title: "NORTHLINE",
    client: "Northline Systems",
    year: "2025",
    filters: ["branding", "corporate", "digital"],
    category: "B2B Technology / Corporate Communication",
    role: "Corporate Designer / Presentation Designer",
    disciplines: "B2B identity, corporate stationery, pitch decks, data visualization, conference collateral",
    description:
      "A serious B2B technology identity focused on clarity, modularity and professional communication. The project demonstrates stationery, presentation slides, annual reports, LinkedIn assets, badges and infographics without decorative art-direction excess.",
    palette: ["#eef4f8", "#15283a", "#3576a8", "#7d8b96", "#ffffff"],
    typography: "Technical grotesk / monospaced data labels",
    coverSize: "large",
    capabilities: ["B2B technology", "Corporate design", "Presentation design", "Pitch decks", "Data visualization", "Brand identity", "LinkedIn graphics", "Corporate communication"],
    assets: [
      asset("cover", "Corporate system overview", "corporateOverview"),
      asset("logo-system", "Logo system", "logoSystem"),
      asset("stationery", "Corporate stationery", "stationery"),
      asset("presentation-title", "Presentation title slide", "presentationSlide", "landscape", { headline: "Infrastructure intelligence" }),
      asset("strategy-slide", "Strategy slide", "strategySlide"),
      asset("data-slide", "Data visualization slide", "dataSlide"),
      asset("linkedin-cover", "LinkedIn cover", "linkedinCover"),
      asset("annual-report-cover", "Annual report cover", "reportCover", "portrait"),
      asset("annual-report-spread", "Annual report internal spread", "reportSpread"),
      asset("conference-badge", "Conference badge", "badge", "portrait"),
      asset("infographic", "Corporate infographic", "infographic", "portrait")
    ]
  },
  {
    id: "after-midnight",
    title: "AFTER MIDNIGHT",
    client: "After Midnight",
    year: "2026",
    filters: ["campaigns", "editorial", "digital"],
    category: "Music Event Campaign",
    role: "Campaign Designer / Art Director",
    disciplines: "Event identity, typographic posters, venue graphics, social campaign, ticketing",
    description:
      "A complete underground electronic music campaign with expressive typography, distorted hierarchy and practical event assets. This is the intentionally experimental part of the archive, contained within a real campaign system.",
    palette: ["#050509", "#f1f1eb", "#ff235a", "#732cff", "#b8ff00"],
    typography: "Condensed display / distorted sans",
    coverSize: "portrait",
    capabilities: ["Event identity", "Poster design", "Social media", "Signage", "Print production", "Campaign systems", "Digital screens"],
    assets: [
      asset("cover", "Hero poster", "clubPoster", "portrait"),
      asset("alternate-poster", "Alternate poster", "clubPosterAlt", "portrait"),
      asset("lineup-poster", "Lineup poster", "lineupPoster", "portrait"),
      asset("instagram-post", "Instagram post", "socialPost", "square", { headline: "03 Nov / Berlin" }),
      asset("instagram-story", "Instagram story", "phoneStory", "portrait", { headline: "After Midnight", cta: "Tickets live" }),
      asset("ticket", "Ticket", "ticket"),
      asset("wristband", "Wristband", "wristband"),
      asset("digital-screen", "Outdoor digital screen", "billboard", "landscape", { headline: "AFTER MIDNIGHT", cta: "Warehouse 17" }),
      asset("venue-signage", "Venue signage", "signage", "landscape", { headline: "Room A / Main Floor" })
    ]
  },
  {
    id: "casa-fiora",
    title: "CASA FIORA",
    client: "Casa Fiora Hotel",
    year: "2025",
    filters: ["branding", "editorial"],
    category: "Boutique Hospitality / Print",
    role: "Brand Designer / Hospitality Designer",
    disciplines: "Hotel identity, guest collateral, printed menus, signage, local guide design",
    description:
      "A tactile Mediterranean hotel system built around guest touchpoints: room keys, menus, stationery, signage, postcards, tote graphics and a local guide booklet. The style is warm and romantic, but restrained enough for a premium hospitality brand.",
    palette: ["#f7e0bf", "#6c3f27", "#c98358", "#fbf4e8", "#435845"],
    typography: "Warm serif / humanist sans",
    coverSize: "standard",
    capabilities: ["Hospitality collateral", "Brand identity", "Logo design", "Editorial layout", "Signage", "Print design"],
    assets: [
      asset("cover", "Hotel collateral system", "hospitalityOverview"),
      asset("logo", "Hotel logo", "logoSystem"),
      asset("room-key", "Room key", "keyCard"),
      asset("welcome-card", "Welcome card", "welcomeCard", "portrait"),
      asset("stationery", "Stationery", "stationery"),
      asset("breakfast-menu", "Breakfast menu", "menu", "portrait"),
      asset("door-hanger", "Door hanger", "doorHanger", "portrait"),
      asset("postcard", "Postcard", "postcard"),
      asset("tote-bag", "Tote bag", "toteBag", "portrait"),
      asset("local-guide", "Local guide booklet", "magazineSpread"),
      asset("hotel-signage", "Hotel signage", "signage", "landscape", { headline: "Garden rooms / Reception" })
    ]
  },
  {
    id: "kinetic",
    title: "KINETIC",
    client: "Kinetic Training",
    year: "2026",
    filters: ["campaigns", "digital"],
    category: "Performance Marketing / Digital Graphics",
    role: "Marketing Designer / Digital Graphic Designer",
    disciplines: "Paid media, conversion creatives, promotional hierarchy, mobile-first campaign assets",
    description:
      "A performance marketing system for a fictional fitness app, built to show hierarchy, offers, CTA placement and format adaptation. The project is intentionally practical: Meta ads, carousel frames, stories, email, retargeting and comparison variants.",
    palette: ["#0d0d10", "#ffffff", "#ff5a00", "#00d36f", "#204cff"],
    typography: "Extra-bold grotesk / compact utility sans",
    coverSize: "wide",
    capabilities: ["Paid ads", "Meta advertising", "Social media", "Digital banners", "Marketing design", "Presentation of offers"],
    assets: [
      asset("cover", "Performance campaign system", "marketingOverview"),
      asset("meta-static", "Meta static ad", "adCard", "square", { headline: "Train smarter", cta: "Start 7-day trial" }),
      asset("meta-carousel", "Meta carousel", "carousel"),
      asset("instagram-story", "Instagram story", "phoneStory", "portrait", { headline: "Build your streak", cta: "Start now" }),
      asset("tiktok-cover", "TikTok cover", "phoneStory", "portrait", { headline: "20 min strength", cta: "Save workout" }),
      asset("offer-ad", "Promotional offer ad", "adCard", "square", { headline: "50% off annual", cta: "Claim offer" }),
      asset("app-store", "App Store promotional graphic", "webBanner", "landscape", { headline: "Personal plans that move with you" }),
      asset("email-hero", "Email hero", "emailHeader", "landscape", { headline: "Your next session is ready" }),
      asset("retargeting", "Retargeting creative", "adCard", "square", { headline: "Come back stronger", cta: "Resume plan" }),
      asset("comparison", "Campaign comparison variants", "comparison")
    ]
  },
  {
    id: "form-26",
    title: "FORM / 26",
    client: "FORM / 26 Magazine",
    year: "2025",
    filters: ["editorial"],
    category: "Architecture Magazine / Editorial",
    role: "Editorial Designer",
    disciplines: "Magazine systems, readable editorial hierarchy, covers, spreads, captions and folios",
    description:
      "A monochrome editorial system for an independent architecture magazine. The project focuses on actual magazine logic: covers, contents, opening spreads, long-form copy, folios, captions, interviews and image-led pacing.",
    palette: ["#f5f3ec", "#111111", "#868680", "#d7d4c8", "#53687a"],
    typography: "Swiss grotesk / editorial serif",
    coverSize: "standard",
    capabilities: ["Editorial layout", "Magazine design", "Print design", "Typography systems", "Readable long-form layout"],
    assets: [
      asset("cover", "Magazine cover", "magazineCover", "portrait"),
      asset("contents", "Contents page", "contentsPage", "portrait"),
      asset("opening-spread", "Article opening spread", "magazineSpread"),
      asset("long-form", "Long-form text spread", "textSpread"),
      asset("image-led", "Image-led spread", "imageSpread"),
      asset("pull-quote", "Pull quote spread", "quoteSpread"),
      asset("interview", "Interview spread", "interviewSpread"),
      asset("captions-folios", "Captions and folios", "detailCrop"),
      asset("back-cover", "Back cover", "backCover", "portrait")
    ]
  },
  {
    id: "pawpaw",
    title: "PAWPAW",
    client: "PawPaw Pantry",
    year: "2026",
    filters: ["packaging", "branding", "campaigns"],
    category: "Consumer Packaging / Pet Food",
    role: "Packaging Designer / Brand Designer",
    disciplines: "Illustration-led packaging, product variants, retail display, launch graphics",
    description:
      "A cheerful consumer packaging system for a fictional pet food brand. It uses expressive illustration, clear product variants and retail-ready pack hierarchy without becoming childish or luxury-coded.",
    palette: ["#fff3c8", "#ff6f4f", "#157a57", "#ffd330", "#4a2f68"],
    typography: "Friendly geometric sans / chunky display",
    coverSize: "large",
    capabilities: ["Packaging", "Consumer branding", "Illustration integration", "Retail graphics", "Social media", "Product variants"],
    assets: [
      asset("cover", "Pet food package family", "petPackaging"),
      asset("dog-package", "Dog food package", "pouchPackage", "portrait", { variant: "Dog / Chicken" }),
      asset("cat-package", "Cat food package", "pouchPackage", "portrait", { variant: "Cat / Salmon" }),
      asset("treat-pouch", "Treat pouch", "pouchPackage", "portrait", { variant: "Treats / Crunch" }),
      asset("variants", "Product variants", "variantLineup"),
      asset("icons", "Illustration and icon system", "iconSystem"),
      asset("retail-display", "Retail shelf display", "retailShelf"),
      asset("shipping-box", "Shipping box", "boxMockup"),
      asset("launch-social", "Launch social post", "socialPost", "square", { headline: "Food with character" }),
      asset("campaign", "Campaign graphic", "adCard", "square", { headline: "Real food. Real personality.", cta: "Meet PawPaw" })
    ]
  },
  {
    id: "maison-elan",
    title: "MAISON ÉLAN",
    client: "Maison Élan",
    year: "2026",
    filters: ["campaigns", "editorial", "digital"],
    category: "Fashion Editorial Campaign",
    role: "Art Director / Graphic Designer",
    disciplines: "Fashion campaign, lookbook, invitation design, social and print assets",
    description:
      "A fashion-driven campaign system for a fictional independent label. The project uses image pacing, asymmetrical typography and tactile print moments across lookbook spreads, social assets, invitations and printed campaign material.",
    palette: ["#17110f", "#f2e5dc", "#8e3341", "#c79a69", "#f7f2ed"],
    typography: "Fashion serif / narrow sans",
    coverSize: "portrait",
    capabilities: ["Fashion", "Campaign systems", "Editorial layout", "Social media", "Digital banners", "Poster design"],
    assets: [
      asset("cover", "Seasonal campaign key visual", "fashionKeyVisual", "portrait"),
      asset("lookbook-cover", "Lookbook cover", "lookbookCover", "portrait"),
      asset("lookbook-spread", "Lookbook spread", "magazineSpread"),
      asset("product-editorial", "Product editorial page", "editorialPage", "portrait"),
      asset("invitation", "Invitation", "invitation"),
      asset("social-campaign", "Social campaign", "socialPost", "square", { headline: "Autumn Study" }),
      asset("story", "Story", "phoneStory", "portrait", { headline: "New silhouettes", cta: "Preview collection" }),
      asset("digital-banner", "Digital banner", "webBanner", "landscape", { headline: "Maison Élan / Autumn Study" }),
      asset("printed-poster", "Printed campaign poster", "premiumPoster", "portrait")
    ]
  },
  {
    id: "verde",
    title: "VERDE",
    client: "Verde Grove",
    year: "2025",
    filters: ["packaging", "branding"],
    category: "Olive Oil Packaging / Retail",
    role: "Packaging Designer",
    disciplines: "Label systems, product family, gift packaging, retail and recipe collateral",
    description:
      "A Mediterranean olive oil system that translates agricultural heritage into a practical retail package family. The deliverables show front and back labels, product family logic, gift packaging, shelf presence and shipping collateral.",
    palette: ["#f1dfbd", "#2f4d2f", "#9b6734", "#d0a65f", "#fff8ea"],
    typography: "Heritage serif / condensed sans",
    coverSize: "standard",
    capabilities: ["Packaging", "Labels", "Retail graphics", "Food & beverage", "Print design", "Product variants"],
    assets: [
      asset("cover", "Bottle and gift box", "oliveHero"),
      asset("front-label", "Bottle label", "labelSheet"),
      asset("back-label", "Back label", "backLabel", "portrait"),
      asset("bottle-mockup", "Bottle mockup", "bottleFront", "portrait"),
      asset("product-family", "Product family", "variantLineup"),
      asset("gift-box", "Gift box", "boxMockup"),
      asset("recipe-card", "Recipe card", "recipeCard", "portrait"),
      asset("retail-shelf", "Retail shelf visual", "retailShelf"),
      asset("campaign-ad", "Campaign advertisement", "magazineAd"),
      asset("shipping", "Shipping packaging", "shippingBox")
    ]
  },
  {
    id: "future-forum",
    title: "FUTURE FORUM",
    client: "Future Forum",
    year: "2026",
    filters: ["branding", "campaigns", "corporate", "digital"],
    category: "Business Conference Identity",
    role: "Event Identity Designer",
    disciplines: "Conference branding, modular key visual, signage, badges, social templates and stage graphics",
    description:
      "A modular identity for a fictional international technology and business conference. The system is designed to scale across posters, speaker graphics, agendas, badges, lanyards, presentation slides, signage and stage screens.",
    palette: ["#101114", "#f7f7f2", "#345cff", "#f5c542", "#ff4f86"],
    typography: "Modular grotesk / numeric display",
    coverSize: "wide",
    capabilities: ["Event identity", "Signage", "Presentation design", "Social media", "Corporate communication", "Poster design"],
    assets: [
      asset("cover", "Conference key visual", "conferenceOverview"),
      asset("logo", "Logo", "logoSystem"),
      asset("key-visual", "Key visual", "conferenceKeyVisual"),
      asset("main-poster", "Main poster", "conferencePoster", "portrait"),
      asset("speaker", "Speaker announcement", "socialPost", "square", { headline: "Mira Vale / Systems Lead" }),
      asset("agenda", "Agenda graphic", "agenda", "portrait"),
      asset("badge", "Badge", "badge", "portrait"),
      asset("lanyard", "Lanyard", "lanyard"),
      asset("presentation-slide", "Presentation slide", "presentationSlide", "landscape", { headline: "Tomorrow's operating systems" }),
      asset("stage-screen", "Stage screen", "stageScreen"),
      asset("directional-signage", "Directional signage", "signage", "landscape", { headline: "Stage B / Workshops" }),
      asset("social-template", "Social template", "socialPost", "square", { headline: "Future Forum 2026" })
    ]
  },
  {
    id: "kora",
    title: "KORA",
    client: "Kora Skincare",
    year: "2025",
    filters: ["branding", "packaging", "campaigns"],
    category: "Natural Skincare / Brand Identity",
    role: "Brand Designer / Packaging Designer",
    disciplines: "Approachable skincare identity, product packaging, shipping system, social launch",
    description:
      "A warm and natural skincare identity that shows a complete consumer brand system: logo, bottles, jars, outer packaging, shipping, tissue, sticker language, product cards and launch graphics.",
    palette: ["#ead7c3", "#516b4d", "#d98b76", "#fff8ef", "#9d705d"],
    typography: "Humanist sans / soft organic display",
    coverSize: "standard",
    capabilities: ["Beauty campaign design", "Packaging", "Labels", "Brand identity", "Social media", "Consumer branding"],
    assets: [
      asset("cover", "Skincare package family", "skincareHero"),
      asset("logo", "Logo", "logoSystem"),
      asset("bottle", "Skincare bottle", "bottleFront", "portrait"),
      asset("jar", "Jar", "jarMockup", "square"),
      asset("outer-packaging", "Outer packaging", "boxMockup"),
      asset("shipping-box", "Shipping box", "shippingBox"),
      asset("tissue-paper", "Tissue paper", "patternSheet"),
      asset("stickers", "Sticker system", "stickerSheet"),
      asset("product-card", "Product card", "productCard", "portrait"),
      asset("instagram", "Instagram launch post", "socialPost", "square", { headline: "Barrier care, softened" }),
      asset("story", "Story", "phoneStory", "portrait", { headline: "New ritual", cta: "Meet KORA" })
    ]
  },
  {
    id: "no-signal",
    title: "NO SIGNAL",
    client: "Self-initiated poster series",
    year: "2026",
    filters: ["editorial", "digital"],
    category: "Experimental Poster Series",
    role: "Graphic Designer",
    disciplines: "Experimental typography, image treatment, poster composition",
    description:
      "A self-initiated poster series about communication overload and digital absence. This project is intentionally conceptual, but each poster explores the theme through a different typographic structure rather than repeating one layout.",
    palette: ["#f3f1e8", "#0d0d0d", "#ff3d1f", "#6b6b66", "#d5d1c8"],
    typography: "Brutalist sans / mono fragments",
    coverSize: "portrait",
    capabilities: ["Poster design", "Typography systems", "Experimental design", "Image treatment", "Print design"],
    assets: [
      asset("cover", "Poster 01", "experimentalPoster", "portrait", { headline: "NO SIGNAL / 01" }),
      asset("poster-02", "Poster 02", "experimentalPosterTwo", "portrait", { headline: "BUFFERED SILENCE" }),
      asset("poster-03", "Poster 03", "experimentalPosterThree", "portrait", { headline: "THREAD CLOSED" }),
      asset("poster-04", "Poster 04", "experimentalPoster", "portrait", { headline: "STATIC / OPEN" }),
      asset("poster-05", "Poster 05", "experimentalPosterTwo", "portrait", { headline: "MESSAGE LOST" }),
      asset("series-overview", "Poster series overview", "posterWall")
    ]
  },
  {
    id: "orbit",
    title: "ORBIT",
    client: "Orbit Financial",
    year: "2025",
    filters: ["corporate", "digital", "branding"],
    category: "Fintech Corporate Communication",
    role: "Communication Designer / Presentation Designer",
    disciplines: "Fintech reports, investor deck assets, KPI graphics, webinar and corporate event communication",
    description:
      "A fintech communication design system focused on trust, clarity and business information. The project demonstrates investor decks, KPI slides, financial data visualization, reports, LinkedIn posts, webinars, email headers and conference screens.",
    palette: ["#071514", "#f5f1e8", "#157d77", "#d6b25e", "#91a7a6"],
    typography: "Financial grotesk / tabular numerals",
    coverSize: "large",
    capabilities: ["Fintech communication", "Corporate design", "Data visualization", "Pitch decks", "Presentation design", "LinkedIn graphics", "Email header"],
    assets: [
      asset("cover", "Brand extension system", "fintechOverview"),
      asset("brand-extension", "Brand extension system", "logoSystem"),
      asset("investor-cover", "Investor deck cover", "presentationSlide", "landscape", { headline: "Investor update Q3" }),
      asset("kpi-slide", "Financial KPI slide", "kpiSlide"),
      asset("data-visualization", "Data visualization", "dataSlide"),
      asset("report-cover", "Report cover", "reportCover", "portrait"),
      asset("report-spread", "Report spread", "reportSpread"),
      asset("webinar-banner", "Webinar banner", "webBanner", "landscape", { headline: "Cashflow visibility for modern teams" }),
      asset("linkedin-post", "LinkedIn post", "socialPost", "square", { headline: "Q3 product signal" }),
      asset("email-header", "Email header", "emailHeader", "landscape", { headline: "Monthly finance brief" }),
      asset("conference-screen", "Conference screen", "stageScreen")
    ]
  },
  {
    id: "miso-club",
    title: "MISO CLUB",
    client: "Miso Club",
    year: "2026",
    filters: ["branding", "campaigns", "editorial"],
    category: "Restaurant Identity / Print & Campaign",
    role: "Brand Designer / Graphic Designer",
    disciplines: "Restaurant branding, menu systems, takeaway packaging, loyalty and delivery promotion graphics",
    description:
      "A youthful restaurant identity that avoids generic visual clichés. It uses bold color, flexible marks, loud menu hierarchy and delivery-ready packaging to feel like a contemporary urban dining brand.",
    palette: ["#fff1dc", "#ff4b2f", "#1128c7", "#111111", "#ffd500"],
    typography: "Irreverent display sans / menu grotesk",
    coverSize: "wide",
    capabilities: ["Restaurant branding", "Menu design", "Packaging", "Social media", "Campaign systems", "Retail graphics"],
    assets: [
      asset("cover", "Restaurant identity system", "restaurantOverview"),
      asset("logo", "Restaurant logo", "logoSystem"),
      asset("menu", "Menu", "menu", "portrait"),
      asset("takeaway-box", "Takeaway box", "boxMockup"),
      asset("chopstick-sleeve", "Chopstick sleeve", "sleeve"),
      asset("delivery-bag", "Delivery bag", "deliveryBag", "portrait"),
      asset("loyalty-card", "Loyalty card", "loyaltyCard"),
      asset("poster", "Poster", "poster", "portrait"),
      asset("social-post", "Social post", "socialPost", "square", { headline: "Hot bowls, cold city" }),
      asset("delivery-promo", "Delivery promotion creative", "adCard", "square", { headline: "Free delivery tonight", cta: "Order now" })
    ]
  },
  {
    id: "nest",
    title: "NEST",
    client: "Nest Residences",
    year: "2025",
    filters: ["branding", "corporate", "editorial", "digital"],
    category: "Residential Development / Sales Communication",
    role: "Brand Designer / Communication Designer",
    disciplines: "Real estate branding, brochure design, floor plan presentation, outdoor and sales collateral",
    description:
      "A residential development communication system for print, outdoor and sales material. The work focuses on spacious hierarchy, property information, brochure pacing and commercial real estate clarity without becoming another website concept.",
    palette: ["#ebe5d8", "#20251f", "#8f9a83", "#c0a77a", "#ffffff"],
    typography: "Architectural serif / quiet sans",
    coverSize: "standard",
    capabilities: ["Real estate graphics", "Corporate design", "Editorial layout", "Outdoor advertising", "Presentation design", "Sales collateral"],
    assets: [
      asset("cover", "Residential identity overview", "realEstateOverview"),
      asset("identity", "Residential identity", "logoSystem"),
      asset("brochure-cover", "Sales brochure cover", "reportCover", "portrait"),
      asset("brochure-spread", "Brochure spread", "reportSpread"),
      asset("property-card", "Property card", "productCard", "portrait"),
      asset("floor-plan", "Floor plan presentation", "floorPlan"),
      asset("billboard", "Billboard", "billboard", "landscape", { headline: "Quiet city living" }),
      asset("construction-fence", "Construction fence", "signage", "landscape", { headline: "Opening Spring 2027" }),
      asset("social-ad", "Social ad", "adCard", "square", { headline: "2-bed homes from 72 sqm", cta: "Book a viewing" }),
      asset("sales-presentation", "Sales presentation", "presentationSlide", "landscape", { headline: "Nest Residences sales deck" })
    ]
  },
  {
    id: "echo-commerce",
    title: "ECHO COMMERCE",
    client: "Echo Commerce",
    year: "2026",
    filters: ["digital", "campaigns", "corporate"],
    category: "E-commerce Marketing Design",
    role: "Marketing Designer / Digital Graphic Designer",
    disciplines: "Retail banners, display advertising, email graphics, product comparison and seasonal campaign assets",
    description:
      "A clean conversion-focused e-commerce graphics project. The work proves practical online retail capabilities: promo banners, launch banners, sale graphics, email headers, stories, Google Display sizes and product comparison modules.",
    palette: ["#f7f9fb", "#18202a", "#1b7cff", "#ffb000", "#e73f5f"],
    typography: "Clean commerce sans / utility UI labels",
    coverSize: "large",
    capabilities: ["E-commerce graphics", "Google display advertising", "Paid ads", "Digital banners", "Email header", "Product comparison", "Retail graphics"],
    assets: [
      asset("cover", "E-commerce campaign system", "commerceOverview"),
      asset("home-banner", "Homepage promotional banner", "webBanner", "landscape", { headline: "Upgrade your daily setup" }),
      asset("launch-banner", "Product launch banner", "webBanner", "landscape", { headline: "New desk essentials" }),
      asset("sale-graphic", "Sale campaign graphic", "adCard", "square", { headline: "Summer sale -30%", cta: "Shop sale" }),
      asset("email-hero", "Email campaign hero", "emailHeader", "landscape", { headline: "Fresh picks for focused work" }),
      asset("instagram-post", "Instagram post", "socialPost", "square", { headline: "Workspace refresh" }),
      asset("story", "Story", "phoneStory", "portrait", { headline: "48h flash drop", cta: "Tap to shop" }),
      asset("display-set", "Google Display banner set", "displaySet"),
      asset("comparison", "Product comparison graphic", "comparison"),
      asset("seasonal-promo", "Seasonal promo creative", "adCard", "square", { headline: "Back to office bundle", cta: "Build yours" })
    ]
  },
  {
    id: "aura-beauty",
    title: "AURA BEAUTY",
    client: "Aura Beauty",
    year: "2026",
    filters: ["campaigns", "digital", "packaging"],
    category: "Beauty Campaign / Digital & Retail",
    role: "Campaign Designer / Beauty Marketing Designer",
    disciplines: "Beauty campaign art direction, social ads, retail posters, launch banners and email graphics",
    description:
      "A feminine but not generic beauty campaign using soft mineral colors, clean hierarchy and product-led commercial messaging. The project adds beauty marketing examples across paid ads, social, email, retail and launch graphics.",
    palette: ["#f6e9ea", "#5b3d56", "#d96f88", "#7d9b8e", "#fffaf6"],
    typography: "Soft display serif / modern beauty sans",
    coverSize: "large",
    capabilities: ["Beauty campaign design", "Social media", "Paid ads", "Digital banners", "Retail poster", "Email header", "Marketing design"],
    assets: [
      asset("cover", "Campaign key visual", "beautyHero"),
      asset("social-post", "Social post", "socialPost", "square", { headline: "Glow, balanced" }),
      asset("story", "Story", "phoneStory", "portrait", { headline: "New mineral tint", cta: "See shades" }),
      asset("paid-ad", "Paid advertisement", "adCard", "square", { headline: "Skin-first color", cta: "Shop Aura" }),
      asset("launch-banner", "Product launch banner", "webBanner", "landscape", { headline: "Aura Mineral Veil is here" }),
      asset("retail-poster", "Retail poster", "posPoster", "portrait", { headline: "Soft focus. Real skin." }),
      asset("email-header", "Promotional email header", "emailHeader", "landscape", { headline: "Your shade edit" }),
      asset("feature-graphic", "Product feature graphic", "productFeature")
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

function dims(orientation) {
  if (orientation === "portrait") return { w: 1080, h: 1440 };
  if (orientation === "square") return { w: 1200, h: 1200 };
  return { w: 1600, h: 1100 };
}

function rect(x, y, width, height, fill, options = {}) {
  const attrs = [`x="${x}"`, `y="${y}"`, `width="${width}"`, `height="${height}"`, `fill="${fill}"`];
  if (options.rx !== undefined) attrs.push(`rx="${options.rx}"`);
  if (options.stroke) attrs.push(`stroke="${options.stroke}"`);
  if (options.strokeWidth) attrs.push(`stroke-width="${options.strokeWidth}"`);
  if (options.opacity !== undefined) attrs.push(`opacity="${options.opacity}"`);
  if (options.transform) attrs.push(`transform="${options.transform}"`);
  return `<rect ${attrs.join(" ")}/>`;
}

function circle(cx, cy, r, fill, options = {}) {
  const attrs = [`cx="${cx}"`, `cy="${cy}"`, `r="${r}"`, `fill="${fill}"`];
  if (options.stroke) attrs.push(`stroke="${options.stroke}"`);
  if (options.strokeWidth) attrs.push(`stroke-width="${options.strokeWidth}"`);
  if (options.opacity !== undefined) attrs.push(`opacity="${options.opacity}"`);
  return `<circle ${attrs.join(" ")}/>`;
}

function line(x1, y1, x2, y2, color, width = 1, opacity = 1) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" opacity="${opacity}"/>`;
}

function text(content, x, y, size, fill, options = {}) {
  const family = options.serif
    ? "Cormorant Garamond, Georgia, serif"
    : options.mono
      ? "Consolas, Monaco, monospace"
      : "Inter, Arial, sans-serif";
  const attrs = [
    `x="${x}"`,
    `y="${y}"`,
    `font-size="${size}"`,
    `fill="${fill}"`,
    `font-family="${family}"`,
    `font-weight="${options.weight || 600}"`
  ];
  if (options.anchor) attrs.push(`text-anchor="${options.anchor}"`);
  if (options.opacity !== undefined) attrs.push(`opacity="${options.opacity}"`);
  if (options.spacing !== undefined) attrs.push(`letter-spacing="${options.spacing}"`);
  if (options.transform) attrs.push(`transform="${options.transform}"`);
  return `<text ${attrs.join(" ")}>${esc(content)}</text>`;
}

function wrap(project, assetDef, body) {
  const { w, h } = dims(assetDef.orientation);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(project.title)} ${esc(assetDef.title)}">
  <title>${esc(project.title)} - ${esc(assetDef.title)}</title>
  <desc>Original commercial portfolio visual for ${esc(project.title)}.</desc>
  ${body}
</svg>
`;
}

function bg(project, w, h, light = false) {
  const [a, b, c, d, e] = project.palette;
  const base = light ? b : a;
  const ink = light ? a : b;
  let out = rect(0, 0, w, h, base);
  out += rect(44, 44, w - 88, h - 88, "none", { stroke: ink, strokeWidth: 1, opacity: 0.16 });
  out += circle(w * 0.88, h * 0.14, Math.min(w, h) * 0.16, c, { opacity: 0.12 });
  out += circle(w * 0.12, h * 0.88, Math.min(w, h) * 0.18, d || c, { opacity: 0.12 });
  out += line(w * 0.5, 44, w * 0.5, h - 44, ink, 1, 0.08);
  out += line(44, h * 0.5, w - 44, h * 0.5, ink, 1, 0.08);
  if (e) out += rect(72, 72, w * 0.14, 8, e, { opacity: 0.78 });
  return out;
}

function label(project, assetDef, x, y, width, height, variant = "") {
  const [a, b, c, d] = project.palette;
  let out = rect(x, y, width, height, b, { stroke: c, strokeWidth: 2 });
  out += text(project.title, x + width / 2, y + height * 0.32, Math.min(width * 0.16, 56), a, {
    anchor: "middle",
    serif: project.typography.toLowerCase().includes("serif"),
    spacing: 2,
    weight: 700
  });
  out += text(variant || assetDef.title, x + width / 2, y + height * 0.5, Math.min(width * 0.055, 22), a, {
    anchor: "middle",
    spacing: 2,
    weight: 800
  });
  out += line(x + width * 0.18, y + height * 0.62, x + width * 0.82, y + height * 0.62, c, 2, 0.7);
  out += text("NET WT / 250 ML", x + width / 2, y + height * 0.75, Math.min(width * 0.046, 18), d || a, {
    anchor: "middle",
    spacing: 1,
    weight: 700
  });
  return out;
}

function bottle(project, assetDef, x, y, width, height, variant = "") {
  const [a, b, c, d] = project.palette;
  let out = rect(x + width * 0.35, y, width * 0.3, height * 0.12, c, { rx: 10 });
  out += rect(x + width * 0.2, y + height * 0.1, width * 0.6, height * 0.82, a, {
    rx: width * 0.08,
    stroke: b,
    strokeWidth: 3
  });
  out += label(project, assetDef, x + width * 0.29, y + height * 0.38, width * 0.42, height * 0.25, variant);
  out += rect(x + width * 0.16, y + height * 0.92, width * 0.68, height * 0.025, d || c, { rx: 20, opacity: 0.28 });
  return out;
}

function can(project, x, y, width, height, variant, fill) {
  const [, b, c] = project.palette;
  let out = rect(x, y, width, height, fill, { rx: width * 0.16, stroke: c, strokeWidth: 3 });
  out += circle(x + width / 2, y + height * 0.14, width * 0.3, b, { opacity: 0.28 });
  out += text(project.title, x + width / 2, y + height * 0.44, width * 0.17, c, {
    anchor: "middle",
    weight: 900,
    spacing: 2
  });
  out += text(variant, x + width / 2, y + height * 0.57, width * 0.055, c, {
    anchor: "middle",
    weight: 800,
    spacing: 1
  });
  out += text("330 ML", x + width / 2, y + height * 0.76, width * 0.045, c, {
    anchor: "middle",
    weight: 800,
    spacing: 1
  });
  return out;
}

function box(project, assetDef, x, y, width, height, labelText = "") {
  const [a, b, c, d] = project.palette;
  let out = rect(x, y + height * 0.08, width, height * 0.8, b, { stroke: c, strokeWidth: 3 });
  out += rect(x + width * 0.08, y, width, height * 0.8, d || a, { stroke: c, strokeWidth: 3, opacity: 0.92 });
  out += text(project.title, x + width * 0.58, y + height * 0.33, width * 0.09, a, {
    anchor: "middle",
    serif: true,
    spacing: 2
  });
  out += text(labelText || assetDef.title, x + width * 0.58, y + height * 0.47, width * 0.035, a, {
    anchor: "middle",
    weight: 800,
    spacing: 1
  });
  out += line(x + width * 0.32, y + height * 0.56, x + width * 0.84, y + height * 0.56, c, 2, 0.6);
  return out;
}

function phoneFrame(project, x, y, width, height, fill) {
  const [a, , c] = project.palette;
  let out = rect(x, y, width, height, "#111", { rx: width * 0.08 });
  out += rect(x + width * 0.045, y + height * 0.04, width * 0.91, height * 0.92, fill, { rx: width * 0.055 });
  out += rect(x + width * 0.38, y + height * 0.065, width * 0.24, height * 0.025, "#111", { rx: 12 });
  out += text("9:41", x + width * 0.1, y + height * 0.105, width * 0.04, a, { weight: 700 });
  out += circle(x + width * 0.82, y + height * 0.095, width * 0.018, c);
  return out;
}

function drawScene(project, assetDef, w, h) {
  const [a, b, c, d, e] = project.palette;
  const scene = assetDef.scene;
  const headline = assetDef.headline || project.title;
  const cta = assetDef.cta || "Learn more";

  if (scene === "fragranceHero") {
    return (
      bg(project, w, h) +
      bottle(project, assetDef, w * 0.18, h * 0.18, w * 0.22, h * 0.62, "No. 7 / 50 ML") +
      box(project, assetDef, w * 0.53, h * 0.2, w * 0.25, h * 0.56, "AMBER IRIS") +
      text("IVORY PAPER / BURGUNDY GLASS / METALLIC FOIL", w * 0.1, h * 0.86, w * 0.025, b, { weight: 800, spacing: 2 })
    );
  }

  if (scene === "logoSystem") {
    let out = bg(project, w, h, true);
    out += text(project.title, w * 0.09, h * 0.25, Math.min(w * 0.08, 86), a, {
      serif: project.typography.toLowerCase().includes("serif"),
      weight: 800,
      spacing: 3
    });
    out += rect(w * 0.1, h * 0.42, w * 0.26, h * 0.18, "none", { stroke: a, strokeWidth: 2 });
    out += circle(w * 0.23, h * 0.51, h * 0.055, c, { opacity: 0.8 });
    out += text(project.title.slice(0, 2).replace(/\s/g, ""), w * 0.23, h * 0.535, h * 0.055, a, { anchor: "middle", serif: true });
    out += rect(w * 0.48, h * 0.38, w * 0.35, h * 0.05, c);
    out += rect(w * 0.48, h * 0.48, w * 0.25, h * 0.05, d || c);
    out += rect(w * 0.48, h * 0.58, w * 0.18, h * 0.05, e || a);
    out += text("WORDMARK / SYMBOL / TYPE SCALE / COLOR SYSTEM", w * 0.1, h * 0.78, w * 0.025, a, { weight: 800, spacing: 2 });
    return out;
  }

  if (["labelSheet", "backLabel"].includes(scene)) {
    let out = bg(project, w, h, true);
    out += label(project, assetDef, w * 0.12, h * 0.2, w * 0.3, h * 0.42, assetDef.variant || "FRONT LABEL");
    out += label(project, assetDef, w * 0.52, h * 0.2, w * 0.3, h * 0.42, scene === "backLabel" ? "INGREDIENTS / ORIGIN" : "VARIANT LABEL");
    out += text("Hierarchy", w * 0.12, h * 0.75, w * 0.04, a, { serif: true });
    out += text("Product name / descriptor / size / origin / batch information", w * 0.12, h * 0.81, w * 0.023, a, { weight: 600 });
    return out;
  }

  if (["bottleFront", "skincareHero", "oliveHero", "beautyHero"].includes(scene)) {
    let out = bg(project, w, h);
    out += bottle(project, assetDef, w * 0.22, h * 0.18, w * 0.22, h * 0.62, assetDef.variant || "PRIMARY PRODUCT");
    out += bottle(project, assetDef, w * 0.48, h * 0.24, w * 0.18, h * 0.5, "SECONDARY");
    out += text(headline, w * 0.12, h * 0.14, Math.min(w * 0.07, 80), b, { serif: true, weight: 700 });
    out += text(assetDef.title, w * 0.12, h * 0.84, w * 0.028, b, { weight: 800, spacing: 2 });
    return out;
  }

  if (scene === "closeUp" || scene === "detailCrop") {
    let out = bg(project, w, h, true);
    out += rect(w * 0.12, h * 0.2, w * 0.76, h * 0.48, b, { stroke: c, strokeWidth: 4 });
    out += text(project.title, w * 0.5, h * 0.42, Math.min(w * 0.09, 110), a, { anchor: "middle", serif: true, spacing: 3 });
    out += line(w * 0.24, h * 0.5, w * 0.76, h * 0.5, c, 4, 0.8);
    out += text("TYPE DETAIL / MATERIAL / FOIL / SCALE", w * 0.5, h * 0.58, w * 0.026, a, { anchor: "middle", weight: 800, spacing: 3 });
    return out;
  }

  if (["boxMockup", "shippingBox"].includes(scene)) {
    let out = bg(project, w, h, true);
    out += box(project, assetDef, w * 0.2, h * 0.25, w * 0.28, h * 0.42, "OUTER PACK");
    out += box(project, assetDef, w * 0.52, h * 0.34, w * 0.28, h * 0.32, scene === "shippingBox" ? "SHIPPER" : "DETAIL");
    out += text(assetDef.title, w * 0.12, h * 0.82, w * 0.034, a, { serif: true });
    return out;
  }

  if (["premiumPoster", "poster", "posPoster", "conferencePoster"].includes(scene)) {
    let out = bg(project, w, h);
    out += rect(w * 0.12, h * 0.12, w * 0.76, h * 0.62, scene === "posPoster" ? c : "none", {
      stroke: b,
      strokeWidth: scene === "posPoster" ? 0 : 2,
      opacity: scene === "posPoster" ? 0.95 : 1
    });
    out += text(headline, w * 0.16, h * 0.32, Math.min(w * 0.105, 118), scene === "posPoster" ? a : b, {
      serif: project.typography.toLowerCase().includes("serif"),
      weight: 900,
      spacing: scene === "premiumPoster" ? 4 : 0
    });
    out += text(assetDef.title, w * 0.16, h * 0.54, w * 0.033, scene === "posPoster" ? a : c, { weight: 800, spacing: 2 });
    out += text("2026 / CONCEPT CAMPAIGN / COMMERCIAL GRAPHIC", w * 0.16, h * 0.66, w * 0.022, scene === "posPoster" ? a : b, { weight: 700, spacing: 2 });
    return out;
  }

  if (scene === "magazineAd") {
    let out = bg(project, w, h, true);
    out += rect(w * 0.08, h * 0.12, w * 0.38, h * 0.68, b);
    out += text(project.title, w * 0.52, h * 0.28, w * 0.064, a, { serif: true, weight: 700 });
    out += text("A quiet launch for a tactile product system.", w * 0.52, h * 0.38, w * 0.026, a, { weight: 600 });
    out += text("Available in selected stores / concept campaign", w * 0.52, h * 0.56, w * 0.021, c, { weight: 700 });
    out += bottle(project, assetDef, w * 0.18, h * 0.22, w * 0.16, h * 0.42, "AD PRODUCT");
    return out;
  }

  if (["socialPost", "adCard"].includes(scene)) {
    let out = rect(0, 0, w, h, scene === "adCard" ? b : a);
    out += rect(w * 0.08, h * 0.08, w * 0.84, h * 0.84, scene === "adCard" ? a : b);
    out += text(project.title, w * 0.14, h * 0.2, w * 0.045, scene === "adCard" ? b : a, { weight: 900, spacing: 2 });
    out += text(headline, w * 0.14, h * 0.42, w * 0.072, scene === "adCard" ? b : a, { weight: 900 });
    out += rect(w * 0.14, h * 0.68, w * 0.34, h * 0.09, c, { rx: h * 0.045 });
    out += text(cta, w * 0.31, h * 0.735, w * 0.025, scene === "adCard" ? a : b, { anchor: "middle", weight: 900, spacing: 1 });
    out += circle(w * 0.78, h * 0.24, w * 0.1, c, { opacity: 0.8 });
    return out;
  }

  if (scene === "phoneStory") {
    let out = bg(project, w, h, true);
    out += phoneFrame(project, w * 0.24, h * 0.08, w * 0.52, h * 0.84, b);
    out += text(project.title, w * 0.33, h * 0.26, w * 0.05, a, { weight: 900, spacing: 2 });
    out += text(headline, w * 0.33, h * 0.44, w * 0.07, a, { weight: 900 });
    out += rect(w * 0.33, h * 0.7, w * 0.32, h * 0.055, c, { rx: h * 0.03 });
    out += text(cta, w * 0.49, h * 0.737, w * 0.022, a, { anchor: "middle", weight: 900 });
    return out;
  }

  if (scene === "beverageHero" || scene === "beverageVariants" || scene === "flavorSystem") {
    let out = rect(0, 0, w, h, b);
    ["LEMON", "BERRY", "YUZU"].forEach((variant, i) => {
      const colors = [c, d, e || a];
      out += can(project, w * (0.18 + i * 0.21), h * 0.27, w * 0.13, h * 0.42, variant, colors[i]);
    });
    out += text(scene === "flavorSystem" ? "FLAVOR SYSTEM" : "SPARKLING SUMMER", w * 0.08, h * 0.17, w * 0.062, a, { weight: 900 });
    out += text("LEMON / BERRY / YUZU / ZERO ALCOHOL", w * 0.08, h * 0.82, w * 0.027, a, { weight: 800, spacing: 2 });
    return out;
  }

  if (scene === "billboard") {
    let out = rect(0, 0, w, h, "#d8d4ca");
    out += rect(w * 0.08, h * 0.15, w * 0.84, h * 0.48, a, { stroke: "#222", strokeWidth: 8 });
    out += text(headline, w * 0.14, h * 0.36, w * 0.07, b, { weight: 900 });
    out += text(cta, w * 0.14, h * 0.5, w * 0.03, c, { weight: 800, spacing: 2 });
    out += rect(w * 0.22, h * 0.63, w * 0.04, h * 0.22, "#555");
    out += rect(w * 0.74, h * 0.63, w * 0.04, h * 0.22, "#555");
    out += line(0, h * 0.86, w, h * 0.86, "#999", 3, 1);
    return out;
  }

  if (scene === "retailShelf") {
    let out = rect(0, 0, w, h, "#f3f1ea");
    for (let shelf = 0; shelf < 3; shelf += 1) {
      out += rect(w * 0.08, h * (0.22 + shelf * 0.2), w * 0.84, h * 0.035, "#b9b4aa");
      for (let i = 0; i < 7; i += 1) {
        const x = w * (0.12 + i * 0.11);
        out += rect(x, h * (0.08 + shelf * 0.2), w * 0.06, h * 0.14, [a, b, c, d, e][i % 5], { rx: 12, stroke: "#333", strokeWidth: 1 });
        out += text(project.title.slice(0, 5), x + w * 0.03, h * (0.16 + shelf * 0.2), w * 0.012, "#111", { anchor: "middle", weight: 900 });
      }
    }
    out += text(assetDef.title, w * 0.08, h * 0.86, w * 0.034, "#222", { weight: 900 });
    return out;
  }

  if (["webBanner", "emailHeader", "linkedinCover"].includes(scene)) {
    let out = rect(0, 0, w, h, b);
    out += rect(w * 0.04, h * 0.12, w * 0.92, h * 0.76, a);
    out += text(project.title, w * 0.09, h * 0.27, w * 0.036, b, { weight: 900, spacing: 2 });
    out += text(headline, w * 0.09, h * 0.48, w * 0.06, b, { weight: 900 });
    out += rect(w * 0.09, h * 0.66, w * 0.22, h * 0.08, c, { rx: 24 });
    out += text(cta, w * 0.2, h * 0.715, w * 0.022, a, { anchor: "middle", weight: 900 });
    out += circle(w * 0.8, h * 0.43, h * 0.2, d || c, { opacity: 0.75 });
    return out;
  }

  if (["presentationSlide", "strategySlide", "dataSlide", "kpiSlide"].includes(scene)) {
    let out = rect(0, 0, w, h, "#f8fafc");
    out += rect(w * 0.05, h * 0.08, w * 0.9, h * 0.84, "#fff", { stroke: "#d6dde3", strokeWidth: 2 });
    out += text(project.title, w * 0.1, h * 0.18, w * 0.033, a, { weight: 900, spacing: 2 });
    out += text(headline, w * 0.1, h * 0.3, w * 0.052, a, { weight: 800 });
    const bars = [0.28, 0.48, 0.36, 0.62, 0.74];
    bars.forEach((bar, i) => {
      out += rect(w * 0.12, h * (0.42 + i * 0.075), w * bar, h * 0.035, i % 2 ? c : d || c);
      out += text(`${["ARR", "Retention", "Pipeline", "Margin", "Activation"][i]}  ${Math.round(bar * 100)}%`, w * 0.12, h * (0.405 + i * 0.075), w * 0.019, a, { weight: 700 });
    });
    out += rect(w * 0.66, h * 0.42, w * 0.18, h * 0.18, c, { opacity: 0.75 });
    out += text("+18%", w * 0.75, h * 0.53, w * 0.055, "#fff", { anchor: "middle", weight: 900 });
    return out;
  }

  if (["reportCover", "magazineCover", "lookbookCover", "backCover"].includes(scene)) {
    let out = bg(project, w, h, true);
    out += rect(w * 0.12, h * 0.16, w * 0.76, h * 0.56, scene === "magazineCover" ? d || c : c, { opacity: 0.32 });
    out += text(project.title, w * 0.14, h * 0.18, w * 0.07, a, { serif: scene !== "reportCover", weight: 800, spacing: 2 });
    out += text(assetDef.title, w * 0.14, h * 0.78, w * 0.035, a, { weight: 800, spacing: 1 });
    out += text("Issue 26 / Q3 / Concept Project", w * 0.14, h * 0.84, w * 0.022, a, { weight: 600 });
    return out;
  }

  if (["reportSpread", "magazineSpread", "textSpread", "imageSpread", "quoteSpread", "interviewSpread"].includes(scene)) {
    let out = rect(0, 0, w, h, "#f7f5ef");
    out += rect(w * 0.06, h * 0.1, w * 0.4, h * 0.78, "#fff", { stroke: "#bbb", strokeWidth: 1 });
    out += rect(w * 0.54, h * 0.1, w * 0.4, h * 0.78, "#fff", { stroke: "#bbb", strokeWidth: 1 });
    out += text(assetDef.title, w * 0.1, h * 0.2, w * 0.04, "#111", { serif: true, weight: 700 });
    for (let i = 0; i < 9; i += 1) {
      out += rect(w * 0.1, h * (0.31 + i * 0.045), w * (0.26 + (i % 3) * 0.04), 5, "#333", { opacity: 0.55 });
      out += rect(w * 0.58, h * (0.25 + i * 0.05), w * (0.25 + (i % 4) * 0.03), 5, "#333", { opacity: 0.5 });
    }
    out += rect(w * 0.58, h * 0.56, w * 0.27, h * 0.17, c, { opacity: 0.35 });
    out += text("024", w * 0.1, h * 0.83, w * 0.02, "#111", { weight: 700 });
    out += text("025", w * 0.87, h * 0.83, w * 0.02, "#111", { weight: 700 });
    return out;
  }

  if (["badge", "lanyard", "ticket", "wristband", "keyCard", "loyaltyCard", "invitation", "postcard"].includes(scene)) {
    let out = bg(project, w, h, true);
    out += rect(w * 0.18, h * 0.25, w * 0.64, h * 0.42, b, { rx: scene === "badge" ? 22 : 0, stroke: c, strokeWidth: 3 });
    out += text(project.title, w * 0.25, h * 0.4, w * 0.048, a, { weight: 900, spacing: 2 });
    out += text(assetDef.title, w * 0.25, h * 0.51, w * 0.03, a, { weight: 800 });
    out += text("Name / Date / Access / Format", w * 0.25, h * 0.59, w * 0.022, d || a, { weight: 700 });
    return out;
  }

  if (["signage", "stageScreen", "conferenceKeyVisual", "conferenceOverview"].includes(scene)) {
    let out = rect(0, 0, w, h, a);
    out += rect(w * 0.08, h * 0.15, w * 0.84, h * 0.6, b);
    out += text(headline, w * 0.14, h * 0.38, w * 0.07, a, { weight: 900 });
    out += text(project.title, w * 0.14, h * 0.55, w * 0.03, c, { weight: 900, spacing: 3 });
    out += rect(w * 0.72, h * 0.2, w * 0.12, h * 0.42, c);
    out += rect(w * 0.58, h * 0.31, w * 0.12, h * 0.31, d || c);
    return out;
  }

  if (scene === "agenda" || scene === "infographic") {
    let out = bg(project, w, h, true);
    out += text(assetDef.title, w * 0.12, h * 0.16, w * 0.045, a, { weight: 900 });
    for (let i = 0; i < 6; i += 1) {
      out += circle(w * 0.16, h * (0.28 + i * 0.1), 12, c);
      out += text(`${String(9 + i).padStart(2, "0")}:00`, w * 0.2, h * (0.29 + i * 0.1), w * 0.022, a, { mono: true, weight: 800 });
      out += rect(w * 0.34, h * (0.265 + i * 0.1), w * (0.24 + i * 0.035), h * 0.026, i % 2 ? d || c : c);
    }
    return out;
  }

  if (scene === "menu") {
    let out = bg(project, w, h, true);
    out += text(project.title, w * 0.14, h * 0.15, w * 0.06, a, { weight: 900, spacing: 2 });
    ["Starters", "Mains", "Dessert", "Drinks"].forEach((section, i) => {
      const y = h * (0.28 + i * 0.14);
      out += text(section, w * 0.14, y, w * 0.028, c, { weight: 900, spacing: 2 });
      out += text("Seasonal bowl / grilled plate / house sauce", w * 0.14, y + h * 0.045, w * 0.021, a, { weight: 600 });
      out += text(`$${12 + i * 4}`, w * 0.78, y + h * 0.045, w * 0.021, a, { weight: 800 });
    });
    return out;
  }

  if (["stationery", "welcomeCard", "doorHanger", "toteBag", "deliveryBag", "sleeve"].includes(scene)) {
    let out = bg(project, w, h, true);
    out += rect(w * 0.12, h * 0.2, w * 0.28, h * 0.42, b, { stroke: c, strokeWidth: 2, transform: `rotate(-4 ${w * 0.26} ${h * 0.41})` });
    out += rect(w * 0.48, h * 0.18, w * 0.28, h * 0.48, d || c, { stroke: a, strokeWidth: 2, transform: `rotate(3 ${w * 0.62} ${h * 0.42})` });
    out += text(project.title, w * 0.18, h * 0.38, w * 0.036, a, { weight: 900, spacing: 2 });
    out += text(assetDef.title, w * 0.53, h * 0.43, w * 0.033, a, { weight: 800 });
    return out;
  }

  if (["pouchPackage", "petPackaging", "variantLineup"].includes(scene)) {
    let out = bg(project, w, h, true);
    ["DOG", "CAT", "TREATS"].forEach((variant, i) => {
      const x = w * (0.18 + i * 0.22);
      out += rect(x, h * 0.25, w * 0.16, h * 0.44, [c, d, e || c][i], { rx: 28, stroke: a, strokeWidth: 3 });
      out += circle(x + w * 0.08, h * 0.38, w * 0.045, b, { stroke: a, strokeWidth: 2 });
      out += text(project.title, x + w * 0.08, h * 0.52, w * 0.026, a, { anchor: "middle", weight: 900 });
      out += text(i === 0 ? assetDef.variant || variant : variant, x + w * 0.08, h * 0.59, w * 0.018, a, { anchor: "middle", weight: 800 });
    });
    return out;
  }

  if (["iconSystem", "patternSheet", "stickerSheet"].includes(scene)) {
    let out = bg(project, w, h, true);
    for (let i = 0; i < 15; i += 1) {
      const x = w * (0.12 + (i % 5) * 0.16);
      const y = h * (0.25 + Math.floor(i / 5) * 0.18);
      out += circle(x, y, w * 0.045, [c, d, e || c][i % 3], { stroke: a, strokeWidth: 2 });
      out += text(String.fromCharCode(65 + i), x, y + 8, w * 0.026, a, { anchor: "middle", weight: 900 });
    }
    out += text(assetDef.title, w * 0.12, h * 0.82, w * 0.034, a, { weight: 900 });
    return out;
  }

  if (["carousel", "comparison", "displaySet"].includes(scene)) {
    let out = bg(project, w, h, true);
    for (let i = 0; i < 4; i += 1) {
      const x = w * (0.08 + i * 0.22);
      out += rect(x, h * 0.22, w * 0.18, h * 0.42, i % 2 ? b : c, { stroke: a, strokeWidth: 2 });
      out += text(i === 0 ? "A" : i === 1 ? "B" : i === 2 ? "C" : "D", x + w * 0.09, h * 0.38, w * 0.07, i % 2 ? a : b, { anchor: "middle", weight: 900 });
      out += text(i % 2 ? "Offer" : "Benefit", x + w * 0.09, h * 0.51, w * 0.021, i % 2 ? a : b, { anchor: "middle", weight: 800 });
    }
    out += text(assetDef.title, w * 0.08, h * 0.78, w * 0.035, a, { weight: 900 });
    return out;
  }

  if (["commerceOverview", "marketingOverview", "corporateOverview", "fintechOverview", "realEstateOverview", "restaurantOverview", "hospitalityOverview"].includes(scene)) {
    let out = bg(project, w, h, true);
    out += rect(w * 0.08, h * 0.18, w * 0.38, h * 0.24, b);
    out += rect(w * 0.52, h * 0.18, w * 0.34, h * 0.24, c);
    out += rect(w * 0.08, h * 0.5, w * 0.22, h * 0.26, d || c);
    out += rect(w * 0.36, h * 0.5, w * 0.22, h * 0.26, e || b);
    out += rect(w * 0.64, h * 0.5, w * 0.22, h * 0.26, a);
    out += text(project.title, w * 0.11, h * 0.33, w * 0.052, a, { weight: 900, spacing: 2 });
    out += text("SYSTEM OVERVIEW", w * 0.11, h * 0.82, w * 0.026, a, { weight: 900, spacing: 2 });
    return out;
  }

  if (scene === "floorPlan") {
    let out = bg(project, w, h, true);
    out += rect(w * 0.18, h * 0.18, w * 0.55, h * 0.52, "none", { stroke: a, strokeWidth: 5 });
    out += line(w * 0.38, h * 0.18, w * 0.38, h * 0.7, a, 4, 1);
    out += line(w * 0.18, h * 0.42, w * 0.73, h * 0.42, a, 4, 1);
    out += line(w * 0.55, h * 0.42, w * 0.55, h * 0.7, a, 4, 1);
    out += text("72 SQM / 2 BED", w * 0.18, h * 0.82, w * 0.034, a, { weight: 900, spacing: 2 });
    return out;
  }

  if (scene === "recipeCard" || scene === "productCard" || scene === "productFeature") {
    let out = bg(project, w, h, true);
    out += rect(w * 0.12, h * 0.14, w * 0.76, h * 0.62, b, { stroke: c, strokeWidth: 2 });
    out += text(project.title, w * 0.18, h * 0.28, w * 0.05, a, { weight: 900 });
    out += text(assetDef.title, w * 0.18, h * 0.4, w * 0.035, a, { weight: 800 });
    ["Ingredient story", "Key benefit", "Usage notes", "Size / volume"].forEach((item, i) => {
      out += text(item, w * 0.18, h * (0.5 + i * 0.07), w * 0.023, a, { weight: 700 });
    });
    return out;
  }

  if (["clubPoster", "clubPosterAlt", "lineupPoster", "experimentalPoster", "experimentalPosterTwo", "experimentalPosterThree"].includes(scene)) {
    let out = rect(0, 0, w, h, a);
    for (let i = 0; i < 14; i += 1) {
      out += rect((i * 89) % w, (i * 137) % h, w * 0.26, h * 0.03, i % 2 ? c : d || b, { opacity: 0.86, transform: `rotate(${i % 2 ? -7 : 9} ${w / 2} ${h / 2})` });
    }
    out += text(headline, w * 0.1, h * 0.38, w * 0.12, b, { weight: 900, spacing: -2 });
    out += text("DATE / LOCATION / LINEUP / ACCESS", w * 0.1, h * 0.68, w * 0.026, c, { weight: 900, spacing: 3 });
    return out;
  }

  if (scene === "posterWall") {
    let out = rect(0, 0, w, h, "#d8d4c9");
    for (let i = 0; i < 5; i += 1) {
      out += rect(w * (0.06 + i * 0.18), h * 0.15, w * 0.14, h * 0.55, i % 2 ? a : b, { stroke: "#333", strokeWidth: 2 });
      out += text(i % 2 ? "STATIC" : "NO SIGNAL", w * (0.08 + i * 0.18), h * 0.38, w * 0.026, i % 2 ? b : a, { weight: 900 });
    }
    return out;
  }

  if (scene === "jarMockup") {
    let out = bg(project, w, h, true);
    out += rect(w * 0.25, h * 0.38, w * 0.5, h * 0.28, b, { rx: 42, stroke: c, strokeWidth: 3 });
    out += rect(w * 0.3, h * 0.29, w * 0.4, h * 0.12, c, { rx: 28 });
    out += text(project.title, w * 0.5, h * 0.52, w * 0.065, a, { anchor: "middle", weight: 900 });
    return out;
  }

  if (scene === "fashionKeyVisual" || scene === "lookbookCover" || scene === "editorialPage") {
    let out = bg(project, w, h);
    out += rect(w * 0.12, h * 0.16, w * 0.34, h * 0.58, b, { opacity: 0.95 });
    out += rect(w * 0.18, h * 0.22, w * 0.22, h * 0.4, c, { opacity: 0.72 });
    out += text(project.title, w * 0.53, h * 0.33, w * 0.075, b, { serif: true, weight: 600 });
    out += text(assetDef.title, w * 0.54, h * 0.55, w * 0.028, d, { weight: 800, spacing: 2 });
    return out;
  }

  return bg(project, w, h, true) + text(project.title, w * 0.1, h * 0.5, w * 0.06, a, { weight: 900 });
}

function imageAlt(project, assetDef) {
  return {
    en: `${project.title} ${assetDef.title.toLowerCase()} visual.`,
    uk: `${project.title}: візуал ${assetDef.title.toLowerCase()}.`,
    pl: `${project.title}: wizualizacja ${assetDef.title.toLowerCase()}.`
  };
}

function detailPage(project) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${esc(project.title)} visual design concept project by Yana Ellis." />
    <title>${esc(project.title)} - Visual Design - Yana Ellis</title>
    <link rel="icon" type="image/png" href="../../favicon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="../../styles.css" />
    <link rel="stylesheet" href="../visual-design.css" />
  </head>
  <body class="visual-page visual-detail-page" data-project-id="${project.id}">
    <div class="site-shell">
      <header class="site-header visual-site-header" aria-label="Yana Ellis">
        <a class="brand-link" href="../../index.html" aria-label="Yana Ellis">
          <img class="brand-logo" src="../../assets/yana-ellis-logo-transparent.png" alt="Yana Ellis logo" data-visual-i18n-alt="logoAlt" />
        </a>
        <div class="header-actions">
          <a class="estimate-button guide-button" href="../../index.html" data-visual-i18n="navHome">Web portfolio</a>
          <a class="estimate-button visual-nav-active" href="../index.html" data-visual-i18n="navVisual">Visual Design</a>
          <a class="estimate-button guide-button" href="../../project-guide.html" data-visual-i18n="navProcess">Process</a>
          <div class="language-switcher" aria-label="Language">
            <button class="language-button is-active" type="button" data-lang="en" aria-pressed="true">EN</button>
            <button class="language-button" type="button" data-lang="uk" aria-pressed="false">UK</button>
            <button class="language-button" type="button" data-lang="pl" aria-pressed="false">PL</button>
          </div>
        </div>
      </header>
      <main id="visualDetailRoot"></main>
      <footer class="site-footer" aria-label="Footer">
        <p class="footer-text" data-visual-i18n="footerText">Visual design concept archive for branding, packaging, campaigns, print and digital graphics.</p>
        <nav class="footer-links" aria-label="Footer navigation">
          <a href="../index.html" data-visual-i18n="backToArchive">Back to Visual Design</a>
          <a href="mailto:oh.yanyoellis@gmail.com" data-visual-i18n="contact">Contact</a>
        </nav>
      </footer>
    </div>
    <script>window.visualProjectId = "${project.id}";</script>
    <script src="../visual-design-data.js"></script>
    <script src="../visual-design-detail.js"></script>
  </body>
</html>
`;
}

function buildData() {
  fs.rmSync(assetRoot, { recursive: true, force: true });
  ensureDir(assetRoot);

  for (const project of projects) {
    fs.rmSync(path.join(pageRoot, project.id), { recursive: true, force: true });
  }

  return projects.map((project, index) => {
    const dir = path.join(assetRoot, project.id);
    ensureDir(dir);
    ensureDir(path.join(pageRoot, project.id));

    const images = project.assets.map((item) => {
      const { w, h } = dims(item.orientation);
      const file = `${item.id}.svg`;
      const svg = wrap(project, item, drawScene(project, item, w, h));
      fs.writeFileSync(path.join(dir, file), svg, "utf8");

      return {
        id: item.id,
        title: item.title,
        src: `/assets/visual-design/${project.id}/${file}`,
        alt: imageAlt(project, item),
        orientation: item.orientation,
        scene: item.scene
      };
    });

    fs.writeFileSync(path.join(pageRoot, project.id, "index.html"), detailPage(project), "utf8");

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
      url: `/visual-design/${project.id}/`,
      filters: project.filters,
      category: project.category,
      role: project.role,
      disciplines: project.disciplines,
      description: project.description,
      deliverables: project.assets.map((item) => item.title),
      tools,
      typography: project.typography,
      capabilities: project.capabilities,
      featured: index < 10,
      coverSize: project.coverSize,
      cover: images[0],
      images
    };
  });
}

function capabilityMatrix(data) {
  const matrix = {};
  data.forEach((project) => {
    project.capabilities.forEach((capability) => {
      if (!matrix[capability]) matrix[capability] = [];
      matrix[capability].push(project.title);
    });
  });
  return matrix;
}

ensureDir(pageRoot);

const visualProjects = buildData();
const matrix = capabilityMatrix(visualProjects);

fs.writeFileSync(
  dataFile,
  `window.visualDesignLabels = ${JSON.stringify(labels, null, 2)};

window.visualDesignCategories = ${JSON.stringify(categories, null, 2)};

window.visualDesignProjects = ${JSON.stringify(visualProjects, null, 2)};

window.visualDesignCapabilityMatrix = ${JSON.stringify(matrix, null, 2)};
`,
  "utf8"
);

fs.writeFileSync(capabilityFile, `${JSON.stringify(matrix, null, 2)}\n`, "utf8");

const count = visualProjects.reduce((sum, project) => sum + project.images.length, 0);
console.log(`Generated ${visualProjects.length} visual design projects and ${count} assets.`);
