const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const markets = [
  {
    name: "Canada",
    file: "calculator/canada/calculator.js",
    roundingUnit: 50,
    version: "CA-2026-07-29",
    expected: [
      500, 650, 900, 600, 750, 1050, 0, 100, 150, 250, 450, 0, 100, 150, 250, 0,
      100, 250, 0, 100, 250, 0, 100, 250, 0, 50, 100, 50, 0, 200, 150, 50, 100,
      250, 50, 50, 50, 100, 100, 0, 100, 0, 50, 50, 0, 50, 50, 100
    ],
    hierarchyIndexes: { simple: 0, extended: 1, business: 2, interactive: 5 }
  },
  {
    name: "Poland",
    file: "calculator/poland/calculator.js",
    roundingUnit: 100,
    version: "PL-2026-07-29",
    expected: [
      900, 1100, 1700, 1100, 1400, 2000, 0, 100, 300, 600, 900, 1300, 0, 100,
      300, 600, 0, 200, 500, 0, 200, 500, 0, 300, 600, 0, 0, 100, 100, 100,
      400, 300, 100, 200, 400, 100, 100, 100, 100, 100, 100, 0, 200, 500, 0,
      100, 100, 0, 100, 100, 200
    ],
    hierarchyIndexes: { simple: 0, extended: 1, business: 2, interactive: 5 }
  },
  {
    name: "Ukraine",
    file: "calculator/ukraine/calculator.js",
    roundingUnit: 500,
    version: "UA-2026-07-29",
    expected: [
      9000, 11500, 18000, 11000, 14500, 21500, 0, 1500, 3500, 6000, 9500,
      13500, 0, 1500, 3500, 5500, 0, 2500, 5500, 0, 2500, 6000, 0, 3000, 7000,
      0, 0, 1500, 1500, 1500, 4500, 3500, 1500, 2500, 5500, 1000, 1000, 1500,
      2000, 2000, 1000, 0, 2500, 6000, 0, 1000, 1000, 0, 1500, 1500, 3500
    ],
    hierarchyIndexes: { simple: 0, extended: 1, business: 2, interactive: 5 }
  }
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function priceValues(source) {
  return [...source.matchAll(/\b(?:amount|monthly):\s*(\d+)/g)].map((match) => Number(match[1]));
}

function assertPricingValues(market) {
  const values = priceValues(read(market.file));

  assert(
    values.length === market.expected.length,
    `${market.name}: expected ${market.expected.length} price values, found ${values.length}`
  );

  values.forEach((value, index) => {
    assert(value === market.expected[index], `${market.name}: value ${index} expected ${market.expected[index]}, found ${value}`);
    assert(value === 0 || value % market.roundingUnit === 0, `${market.name}: value ${index} is not rounded to ${market.roundingUnit}`);
  });

  const h = market.hierarchyIndexes;
  assert(values[h.simple] < values[h.extended], `${market.name}: simple project must be cheaper than extended`);
  assert(values[h.extended] < values[h.business], `${market.name}: extended project must be cheaper than business`);
  assert(values[h.business] < values[h.interactive], `${market.name}: business project must be cheaper than interactive`);
}

function assertPricingVersions() {
  const workflow = read("calculator/submission-workflow.js");

  markets.forEach((market) => {
    assert(workflow.includes(`pricingVersion: "${market.version}"`), `${market.name}: missing pricing version ${market.version}`);
    assert(workflow.includes(`roundingUnit: ${market.roundingUnit}`), `${market.name}: workflow rounding unit is not ${market.roundingUnit}`);
  });

  assert(workflow.includes('const WORKFLOW_VERSION = "1.4";'), "Missing updated workflow version.");
  assert(workflow.includes('const FORM_VERSION = "2.3";'), "Missing updated form version.");
}

function assertRequestFormRequirements() {
  const workflow = read("calculator/submission-workflow.js");
  const api = read("api/submit-estimate.js");

  [
    "inspirationLinks[]",
    "contactConsent",
    "privacyConsent",
    "termsConsent",
    "WhatsApp",
    "Instagram",
    "deadlineType",
    "budgetExpectation",
    "brandMaterials",
    "emailCopy",
    "estimateRange",
    "groupedBreakdownRows",
    "not_sure_recommend",
    "translationSource",
    "phasedImplementation",
    "visualDirection",
    "more_than_twenty_pages",
    "referralSource",
    "promotionalOption",
    "promotionalOptions",
    "promotionalEstimate",
    "/privacy-policy.html",
    "/terms-of-service.html",
    "../../project-guide.html",
    "../../faq.html"
  ].forEach((token) => {
    assert(workflow.includes(token), `Workflow missing ${token}`);
  });

  [
    "validateAndSanitizePayload",
    "normalizeUrlInput",
    "normalizeTelegram",
    "normalizeInstagram",
    "contactConsent === true",
    "privacyConsent === true",
    "termsConsent === true",
    "emailCopy",
    "payload.planning",
    "payload.promotion",
    "BUDGET REVIEW REQUESTED",
    "disable_web_page_preview: true"
  ].forEach((token) => {
    assert(api.includes(token), `API missing ${token}`);
  });
}

markets.forEach(assertPricingValues);
assertPricingVersions();
assertRequestFormRequirements();

console.log("Pricing configuration tests passed.");
