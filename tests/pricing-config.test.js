const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const markets = [
  {
    name: "Canada",
    file: "calculator/canada/calculator.js",
    roundingUnit: 25,
    version: "CA-2026-08-COMPETITIVE",
    expected: [
      550, 700, 900, 650, 800, 1200, 0, 0, 150, 300, 500, 0, 75, 150, 250, 0,
      100, 250, 0, 100, 250, 0, 125, 300, 0, 50, 75, 50, 0, 175, 125, 0, 100,
      250, 0, 0, 0, 0, 100, 0, 100, 0, 0, 0, 0, 50, 59, 119
    ],
    hierarchyIndexes: { simple: 0, extended: 1, business: 2, interactive: 5 }
  },
  {
    name: "Poland",
    file: "calculator/poland/calculator.js",
    roundingUnit: 50,
    version: "PL-2026-08-COMPETITIVE",
    expected: [
      900, 1200, 1700, 1100, 1400, 2200, 0, 0, 300, 600, 1000, 1500, 0, 150,
      300, 500, 0, 200, 500, 0, 200, 500, 0, 250, 650, 0, 0, 100, 150, 100,
      350, 250, 0, 200, 450, 0, 0, 0, 0, 100, 0, 0, 200, 600, 0, 0, 0, 0,
      100, 99, 199
    ],
    hierarchyIndexes: { simple: 0, extended: 1, business: 2, interactive: 5 }
  },
  {
    name: "Ukraine",
    file: "calculator/ukraine/calculator.js",
    roundingUnit: 500,
    version: "UA-2026-08-COMPETITIVE",
    expected: [
      8000, 11000, 16000, 10000, 13000, 21000, 0, 0, 3000, 6000, 10000,
      15000, 0, 1500, 3000, 5000, 0, 2000, 5000, 0, 2000, 5000, 0, 2500,
      6000, 0, 0, 1000, 1500, 1000, 4000, 3000, 0, 2000, 5000, 0, 0, 0,
      0, 2000, 0, 0, 2000, 6000, 0, 0, 0, 0, 1000, 1500, 3000
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

function priceEntries(source) {
  return [...source.matchAll(/\b(amount|monthly):\s*(\d+)/g)].map((match) => ({
    type: match[1],
    value: Number(match[2])
  }));
}

function priceValues(source) {
  return priceEntries(source).map((entry) => entry.value);
}

function assertPricingValues(market) {
  const source = read(market.file);
  const values = priceValues(source);
  const entries = priceEntries(source);

  assert(
    values.length === market.expected.length,
    `${market.name}: expected ${market.expected.length} price values, found ${values.length}`
  );

  values.forEach((value, index) => {
    assert(value === market.expected[index], `${market.name}: value ${index} expected ${market.expected[index]}, found ${value}`);
    if (entries[index].type === "amount") {
      assert(value === 0 || value % market.roundingUnit === 0, `${market.name}: value ${index} is not rounded to ${market.roundingUnit}`);
    }
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

  assert(workflow.includes('const WORKFLOW_VERSION = "1.6";'), "Missing updated workflow version.");
  assert(workflow.includes('const FORM_VERSION = "2.4";'), "Missing updated form version.");
}

function assertRequestFormRequirements() {
  const workflow = read("calculator/submission-workflow.js");
  const api = read("api/submit-estimate.js");

  [
    "inspirationLinks[]",
    "contactConsent",
    "privacyConsent",
    "termsConsent",
    "designerCreditConsent",
    "designer_credit",
    "DESIGNER_CREDIT_DISCOUNT_PERCENT",
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
    "more_than_12_pages",
    "live-estimate-card",
    "baseIncludedNote",
    "positioningIntroLead",
    "referralSource",
    "promotionalOption",
    "promotionalOptions",
    "promotionalEstimate",
    "designerCreditEstimate",
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
    "payload.legal",
    "payload.designerCredit",
    "emailCopy",
    "payload.planning",
    "payload.promotion",
    "BUDGET REVIEW REQUESTED",
    "disable_web_page_preview: true"
  ].forEach((token) => {
    assert(api.includes(token), `API missing ${token}`);
  });

  [
    "social_post",
    "combined",
    "socialPostDiscount",
    "combinedDiscount",
    "postingDeadlineDays",
    "minimumInstagramFollowers",
    "Instagram followers",
    "social media post discount"
  ].forEach((token) => {
    assert(!workflow.includes(token), `Workflow still contains removed social discount token ${token}`);
    assert(!api.includes(token), `API still contains removed social discount token ${token}`);
  });
}

markets.forEach(assertPricingValues);
assertPricingVersions();
assertRequestFormRequirements();

console.log("Pricing configuration tests passed.");
