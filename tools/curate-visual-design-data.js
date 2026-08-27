const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const dataPath = path.join(root, "visual-design", "visual-design-data.js");
const context = { window: {} };

vm.runInNewContext(fs.readFileSync(dataPath, "utf8"), context);

const labels = context.window.visualDesignLabels;
const categories = context.window.visualDesignCategories;
let projects = context.window.visualDesignProjects;
const capabilityMatrix = context.window.visualDesignCapabilityMatrix;
const originalSummary = context.window.visualDesignAssetSummary || [];

Object.assign(labels.en, {
  heroTitle: "Selected commercial design systems.",
  heroText:
    "A curated archive of concept projects across packaging, campaigns, editorial, corporate communication and digital marketing. The focus is on practical deliverables, not single art posters.",
  archiveTitle: "Primary graphic design projects.",
  archiveText:
    "Ten selected projects are shown first. The wider archive remains available, but the primary view is curated around work that demonstrates real commercial tasks.",
  viewAllProjects: "View all projects",
  showCuratedProjects: "Show curated selection",
  conceptProject: "Concept project",
  projectInfo: "Project information",
  selectedArchive: "Selected archive",
});

Object.assign(labels.uk, {
  heroTitle: "Добірка комерційних дизайн-систем.",
  heroText:
    "Курований архів концепт-проєктів: паковання, кампанії, editorial, корпоративна комунікація та digital-маркетинг. Акцент на практичних матеріалах, а не на одиночних арт-постерах.",
  archiveTitle: "Основні проєкти graphic design.",
  archiveText:
    "Спочатку показані десять вибраних проєктів. Ширший архів залишається доступним, але головний вигляд зібраний навколо робіт із реальними комерційними задачами.",
  viewAllProjects: "Показати всі проєкти",
  showCuratedProjects: "Показати добірку",
  conceptProject: "Концепт-проєкт",
  projectInfo: "Інформація про проєкт",
  selectedArchive: "Курована добірка",
});

Object.assign(labels.pl, {
  heroTitle: "Wybrane komercyjne systemy projektowe.",
  heroText:
    "Kuratowane archiwum projektów koncepcyjnych: opakowania, kampanie, editorial, komunikacja korporacyjna i digital marketing. Nacisk jest na praktyczne materiały, nie pojedyncze plakaty artystyczne.",
  archiveTitle: "Główne projekty graphic design.",
  archiveText:
    "Najpierw pokazanych jest dziesięć wybranych projektów. Szersze archiwum nadal jest dostępne, ale główny widok skupia się na pracach pokazujących realne zadania komercyjne.",
  viewAllProjects: "Pokaż wszystkie projekty",
  showCuratedProjects: "Pokaż selekcję",
  conceptProject: "Projekt koncepcyjny",
  projectInfo: "Informacje o projekcie",
  selectedArchive: "Wybrana selekcja",
});

const primaryOrder = [
  "maison-elan",
  "sola",
  "northline",
  "after-midnight",
  "form-26",
  "pawpaw",
  "kinetic",
  "miso-club",
  "orbit",
  "echo-commerce",
];

const archiveLayout = {
  "maison-elan": { size: "standard", aspect: "1 / 1", position: "center" },
  sola: { size: "standard", aspect: "1 / 1", position: "center" },
  northline: { size: "standard", aspect: "1 / 1", position: "center" },
  "after-midnight": { size: "standard", aspect: "1 / 1", position: "center" },
  "form-26": { size: "standard", aspect: "1 / 1", position: "center" },
  pawpaw: { size: "standard", aspect: "1 / 1", position: "center" },
  kinetic: { size: "standard", aspect: "1 / 1", position: "center" },
  "miso-club": { size: "standard", aspect: "1 / 1", position: "center" },
  orbit: { size: "standard", aspect: "1 / 1", position: "center" },
  "echo-commerce": { size: "standard", aspect: "1 / 1", position: "center" },
};

const projectCopy = {
  "maison-elan": {
    category: "Fashion Campaign / Editorial System",
    role: "Art Direction / Campaign Design / Editorial Design",
    disciplines: "Fashion campaign, lookbook layout, invitation design, social campaign, boutique poster system",
    typography: "Elegant editorial serif paired with restrained utility sans-serif for fashion hierarchy",
    description:
      "A seasonal fashion campaign for a fictional independent label. The system centers on Still Forms, an AW / 26 collection with lookbook spreads, private-presentation invitations, boutique posters and social launch assets.",
    deliverables: [
      "Campaign key visual",
      "Collection system board",
      "Lookbook spread",
      "Private presentation invitation",
      "Social campaign set",
      "Boutique poster",
    ],
    capabilities: [
      "Fashion campaign design",
      "Editorial hierarchy",
      "Invitation design",
      "Social campaign adaptation",
      "Boutique poster layout",
      "Art direction",
    ],
  },
  sola: {
    category: "FMCG Packaging / Summer Campaign",
    role: "Packaging Designer / Marketing Designer",
    disciplines: "Flavor architecture, can label system, retail graphics, billboard, social advertising",
    typography: "Bold grocery-shelf sans-serif balanced with relaxed campaign serif typography",
    description:
      "A sparkling water identity built around flavor navigation. Color-coded labels, retail-ready variants, outdoor graphics and social assets make the product easy to recognize at shelf speed.",
    deliverables: [
      "Product hero",
      "Variant label lineup",
      "Summer key visual",
      "Billboard",
      "Instagram story",
      "Retail shelf graphic",
    ],
    capabilities: [
      "FMCG packaging",
      "Label hierarchy",
      "Retail campaign design",
      "Outdoor advertising",
      "Social conversion assets",
      "Color system",
    ],
  },
  northline: {
    category: "B2B Technology / Corporate Communication",
    role: "Brand Designer / Presentation Designer",
    disciplines: "Corporate identity, investor and reliability reports, dashboard visuals, conference screens, LinkedIn campaigns",
    typography: "Enterprise sans-serif clarity with large editorial headlines for executive communication",
    description:
      "A B2B systems identity for infrastructure monitoring. The project turns dense operational data into calm sales collateral, reports, conference screens and LinkedIn communication.",
    deliverables: [
      "Identity overview",
      "Deck on laptop",
      "Reliability report",
      "Conference screen",
      "LinkedIn banner",
      "Badge and lanyard",
    ],
    capabilities: [
      "Corporate design",
      "Presentation design",
      "B2B communication",
      "Data visualization",
      "LinkedIn graphics",
      "Event collateral",
    ],
  },
  "after-midnight": {
    category: "Music Event / Campaign System",
    role: "Poster Designer / Event Identity Designer",
    disciplines: "Poster series, stage screens, ticketing, wristband, social story, venue signage",
    typography: "High-contrast event serif with direct club-information hierarchy",
    description:
      "An event graphics system for an underground night. The visuals keep atmosphere and utility together: the poster carries the mood, while dates, location, lineup and ticket paths stay readable.",
    deliverables: [
      "Main poster",
      "Alternate poster",
      "Stage screen",
      "Ticket and wristband",
      "Instagram story",
      "Venue signage",
    ],
    capabilities: [
      "Event identity",
      "Poster typography",
      "Digital screen adaptation",
      "Ticket collateral",
      "Social promotion",
      "Nightlife campaign system",
    ],
  },
  "form-26": {
    category: "Editorial / Magazine Design",
    role: "Editorial Designer",
    disciplines: "Magazine cover, contents page, long-form reading layout, photo-led spread, interview spread",
    typography: "Magazine-scale serif headlines with clean column structure for long-form readability",
    description:
      "An architecture magazine concept focused on pacing, folios, captions and readable long-form pages. It shows editorial discipline beyond a single cover image.",
    deliverables: [
      "Magazine cover",
      "Contents spread",
      "Architecture spread",
      "Long-form article spread",
      "Photo-led spread",
      "Interview spread",
    ],
    capabilities: [
      "Editorial systems",
      "Magazine pacing",
      "Readable long-form layout",
      "Caption hierarchy",
      "Print composition",
      "Typography systems",
    ],
  },
  pawpaw: {
    category: "Pet FMCG / Packaging System",
    role: "Packaging Designer / Brand Designer",
    disciplines: "Pet food packaging, product variants, retail shelf communication, shipping and social assets",
    typography: "Warm consumer-brand typography with bold variant naming for shelf recognition",
    description:
      "A pet food packaging system where variant color, product naming and friendly shelf cues do most of the work. The assets cover bags, treat variants, retail and delivery touchpoints.",
    deliverables: [
      "Package lineup",
      "Dog food package",
      "Cat food package",
      "Treat variants",
      "Retail shelf",
      "Shipping and social graphic",
    ],
    capabilities: [
      "Consumer packaging",
      "Product architecture",
      "Retail graphics",
      "Variant systems",
      "Social brand assets",
      "Illustration integration",
    ],
  },
  kinetic: {
    category: "Fitness App / Paid Social Campaign",
    role: "Marketing Designer / Digital Designer",
    disciplines: "Paid social ads, app campaign visuals, story creative, retargeting banners, offer graphics",
    typography: "High-contrast digital campaign typography built for quick mobile scanning",
    description:
      "A performance app campaign system with sharp conversion messaging. Each asset has one offer, one promise and a clear action for paid and organic channels.",
    deliverables: [
      "Mobile campaign key visual",
      "Meta ad",
      "Instagram story",
      "Retargeting banner",
      "Offer visual",
      "App store asset",
    ],
    capabilities: [
      "Paid social design",
      "Digital banners",
      "Conversion messaging",
      "App campaign graphics",
      "Retargeting creative",
      "Marketing design",
    ],
  },
  "miso-club": {
    category: "Restaurant Identity / Menu & Packaging",
    role: "Brand Designer / Menu Designer",
    disciplines: "Menu design, takeaway packaging, delivery bag, loyalty sleeve, window poster, social post",
    typography: "Warm restaurant serif with direct menu hierarchy and practical ordering cues",
    description:
      "A ramen bar identity system designed for in-store and delivery moments. The work connects menu readability, takeaway packaging and small social promotions.",
    deliverables: [
      "Menu table",
      "Takeaway box",
      "Delivery bag",
      "Loyalty sleeve",
      "Window poster",
      "Social post",
    ],
    capabilities: [
      "Restaurant branding",
      "Menu hierarchy",
      "Packaging touchpoints",
      "Social content",
      "Window poster design",
      "Retail experience graphics",
    ],
  },
  orbit: {
    category: "Fintech / Investor Communication",
    role: "Presentation Designer / Corporate Designer",
    disciplines: "Investor deck, KPI dashboard, annual report, webinar banner, LinkedIn post, conference screen",
    typography: "Calm fintech sans-serif with clear metric hierarchy and executive presentation pacing",
    description:
      "A fintech communication kit for investor and sales moments. The project shows how dashboards, metrics and webinar graphics can feel premium without losing clarity.",
    deliverables: [
      "Investor deck cover",
      "KPI dashboard",
      "Annual report",
      "Webinar banner",
      "LinkedIn post",
      "Conference screen",
    ],
    capabilities: [
      "Fintech communication",
      "Presentation systems",
      "Dashboard graphics",
      "Metric hierarchy",
      "LinkedIn assets",
      "Corporate campaign design",
    ],
  },
  "echo-commerce": {
    category: "E-commerce / Marketing Creative",
    role: "Marketing Designer / Digital Designer",
    disciplines: "Launch week creative, email hero, social carousel, sale screens, retail display",
    typography: "Retail campaign type system with simple offer structure and clear calls to action",
    description:
      "An e-commerce campaign toolkit built for launch-week communication. The assets cover homepage, email, mobile, social and retail display graphics with consistent offer hierarchy.",
    deliverables: [
      "Homepage hero",
      "Sale tablet",
      "Mobile grid",
      "Email hero",
      "Social carousel",
      "Retail display",
    ],
    capabilities: [
      "E-commerce graphics",
      "Email design",
      "Social carousel design",
      "Digital banners",
      "Retail campaign display",
      "Marketing layout systems",
    ],
  },
};

const imageOverrides = {
  "maison-elan": [
    ["cover", "Campaign Key Visual", "landscape"],
    ["collection-system", "Collection System", "landscape"],
    ["lookbook-spread", "Lookbook Spread", "landscape"],
    ["invitation", "Private Presentation Invitation", "portrait"],
    ["social-campaign", "Social Campaign", "landscape"],
    ["boutique-poster", "Boutique Poster", "portrait"],
  ],
  sola: [
    ["cover", "Product Hero", "landscape"],
    ["variant-lineup", "Variant Label Lineup", "landscape"],
    ["summer-key-visual", "Summer Key Visual", "landscape"],
    ["billboard", "Billboard", "landscape"],
    ["instagram-story", "Instagram Story", "portrait"],
    ["retail-shelf", "Retail Shelf", "square"],
  ],
  northline: [
    ["cover", "Identity Overview", "landscape"],
    ["deck-laptop", "Deck on Laptop", "square"],
    ["annual-report", "Reliability Report", "landscape"],
    ["conference-screen", "Conference Screen", "landscape"],
    ["linkedin-banner", "LinkedIn Banner", "landscape"],
    ["badge-lanyard", "Badge and Lanyard", "square"],
  ],
  "after-midnight": [
    ["cover", "Main Poster", "portrait"],
    ["alternate-poster", "Alternate Poster", "portrait"],
    ["stage-screen", "Stage Screen", "landscape"],
    ["ticket-wristband", "Ticket and Wristband", "landscape"],
    ["instagram-story", "Instagram Story", "portrait"],
    ["venue-signage", "Venue Signage", "square"],
  ],
  kinetic: [
    ["cover", "Mobile Campaign Key Visual", "landscape"],
    ["meta-ad", "Meta Ad", "square"],
    ["instagram-story", "Instagram Story", "portrait"],
    ["retargeting-banner", "Retargeting Banner", "landscape"],
    ["offer-visual", "Offer Visual", "square"],
    ["app-store", "App Store Asset", "square"],
  ],
  "form-26": [
    ["cover", "Magazine Cover", "portrait"],
    ["contents", "Contents Spread", "landscape"],
    ["architecture-spread", "Architecture Spread", "square"],
    ["long-form-spread", "Long-Form Article Spread", "landscape"],
    ["photo-led-spread", "Photo-Led Spread", "landscape"],
    ["interview-spread", "Interview Spread", "square"],
  ],
  pawpaw: [
    ["cover", "Package Lineup", "landscape"],
    ["dog-package", "Dog Food Package", "portrait"],
    ["cat-package", "Cat Food Package", "portrait"],
    ["treat-variants", "Treat Variants", "landscape"],
    ["retail-shelf", "Retail Shelf", "square"],
    ["shipping-social", "Shipping and Social Graphic", "square"],
  ],
  "miso-club": [
    ["cover", "Menu System", "landscape"],
    ["takeaway-box", "Takeaway Box", "square"],
    ["delivery-bag", "Delivery Bag", "square"],
    ["loyalty-sleeve", "Loyalty Sleeve", "square"],
    ["window-poster", "Window Poster", "portrait"],
    ["social-post", "Social Post", "portrait"],
  ],
  orbit: [
    ["cover", "Investor Deck Cover", "landscape"],
    ["kpi-dashboard", "KPI Dashboard", "landscape"],
    ["annual-report", "Annual Report", "square"],
    ["webinar-banner", "Webinar Banner", "landscape"],
    ["linkedin-post", "LinkedIn Post", "square"],
    ["conference-screen", "Conference Screen", "square"],
  ],
  "echo-commerce": [
    ["cover", "Launch Week Creative Kit", "landscape"],
    ["sale-tablet", "Sale Tablet", "square"],
    ["mobile-grid", "Mobile Grid", "square"],
    ["email-hero", "Email Hero", "landscape"],
    ["social-carousel", "Social Carousel", "landscape"],
    ["retail-display", "Retail Display", "landscape"],
  ],
};

function assetPath(projectId, imageId) {
  return `/assets/visual-design-real/${projectId}/${imageId}.webp`;
}

function makeAlt(title, imageTitle) {
  return {
    en: `${title} ${imageTitle.toLowerCase()} portfolio design asset.`,
    uk: `${title}: портфоліо-матеріал ${imageTitle.toLowerCase()}.`,
    pl: `${title}: materiał portfolio ${imageTitle.toLowerCase()}.`,
  };
}

function makeImage(project, [id, title, orientation]) {
  return {
    id,
    title,
    src: assetPath(project.id, id),
    alt: makeAlt(project.title, title),
    orientation,
    format: "webp",
    generated: true,
    composited: true,
  };
}

projects = projects.map((project, originalIndex) => {
  const selectedIndex = primaryOrder.indexOf(project.id);
  const primaryArchive = selectedIndex !== -1;
  const copy = projectCopy[project.id];
  const layout = archiveLayout[project.id] || {};
  const boardImage = (project.images || []).find((image) => image.id === "board");
  const previousImages = (project.images || []).filter((image) => image.id !== "board");
  const images = imageOverrides[project.id]
    ? imageOverrides[project.id].map((item) => makeImage(project, item))
    : previousImages;

  if (copy) {
    Object.assign(project, copy);
  }

  project.primaryArchive = primaryArchive;
  project.archiveOrder = primaryArchive ? selectedIndex : primaryOrder.length + originalIndex;
  project.archiveSize = layout.size || project.coverSize || "standard";
  project.archiveAspect = layout.aspect || "1 / 1";
  project.coverPosition = layout.position || "center";
  project.coverSize = project.archiveSize;
  project.images = images;
  project.imageCount = images.length;
  project.compositedAssets = images.map((image) => image.src);
  project.rasterAssets = [...new Set([...(project.rasterAssets || []), ...images.map((image) => image.src)])];
  project.internalBoard = boardImage
    ? {
        id: boardImage.id,
        title: boardImage.title,
        src: boardImage.src,
      }
    : project.internalBoard || null;
  project.cover = images[0] || project.cover;

  return project;
});

projects.sort((a, b) => (a.archiveOrder ?? 999) - (b.archiveOrder ?? 999));

const summaryById = new Map(originalSummary.map((item) => [item.id, item]));
const assetSummary = projects.map((project) => {
  const previous = summaryById.get(project.id) || {};
  return {
    id: project.id,
    title: project.title,
    category: project.category,
    filters: project.filters,
    capabilities: project.capabilities,
    imageCount: project.images.length,
    assetDirectory: project.assetDirectory || previous.assetDirectory || `/assets/visual-design-real/${project.id}/`,
    rasterAssets:
      project.rasterAssets ||
      previous.rasterAssets || [
        `/assets/visual-design-real/${project.id}/source-board.png`,
        `/assets/visual-design-real/${project.id}/board.webp`,
        `/assets/visual-design-real/${project.id}/cover.png`,
        ...project.images.map((image) => image.src),
      ],
    svgAssets: [],
    compositedAssets: project.images.map((image) => image.src),
    primaryArchive: project.primaryArchive,
  };
});

const output = `window.visualDesignLabels = ${JSON.stringify(labels, null, 2)};

window.visualDesignCategories = ${JSON.stringify(categories, null, 2)};

window.visualDesignProjects = ${JSON.stringify(projects, null, 2)};

window.visualDesignCapabilityMatrix = ${JSON.stringify(capabilityMatrix, null, 2)};

window.visualDesignAssetSummary = ${JSON.stringify(assetSummary, null, 2)};
`;

fs.writeFileSync(dataPath, output, "utf8");
console.log(`Curated ${primaryOrder.length} primary projects and ${projects.length - primaryOrder.length} secondary projects.`);
