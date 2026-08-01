const { PassThrough } = require("stream");
const handler = require("../api/submit-estimate.js");

function runRequest(payload) {
  return new Promise((resolve) => {
    const request = new PassThrough();
    request.method = "POST";
    request.headers = { "user-agent": `test-${Math.random()}` };

    const response = {
      statusCode: 0,
      headers: {},
      setHeader(name, value) {
        this.headers[name] = value;
      },
      end(body) {
        resolve({ status: this.statusCode, body: JSON.parse(body) });
      }
    };

    handler(request, response);
    request.end(JSON.stringify(payload));
  });
}

function basePayload(overrides = {}) {
  return {
    requestId: "YE-CA-TEST",
    submittedDate: "29 July 2026",
    submittedTime: "12:00",
    interfaceLanguage: "en",
    client: {
      name: "Test Client",
      email: "test@example.com",
      companyName: "Test Project",
      projectDescription: "A short project description.",
      preferredContact: "Telegram",
      preferredContactLabel: "Telegram",
      contactDestinationRaw: "@tester_user",
      contactDestination: "@tester_user",
      contactConsent: true,
      privacyConsent: true,
      termsConsent: true,
      consent: true
    },
    market: { label: "Canada", labelEn: "Canada" },
    pricing: {
      preliminaryEstimateDisplay: "1,600 CAD",
      standardProjectEstimateDisplay: "1,600 CAD",
      designerCreditEstimateDisplay: "1,600 CAD"
    },
    answers: [],
    inspiration: { links: [] },
    promotion: {
      option: "standard",
      optionLabel: "Standard price, no designer credit",
      discountPercent: 0,
      discountAmountDisplay: "-"
    },
    legal: {
      termsAccepted: true,
      termsVersion: "terms-2026-08-01",
      termsAcceptedAt: "2026-08-01T12:00:00.000Z",
      privacyAccepted: true,
      privacyVersion: "privacy-2026-08-01",
      privacyAcceptedAt: "2026-08-01T12:00:00.000Z",
      selectedLanguage: "en",
      market: "canada",
      calculatorSubmissionId: "YE-CA-TEST"
    },
    designerCredit: {
      selected: false,
      accepted: false,
      option: "standard",
      termsVersion: "designer-credit-2026-08-01",
      acceptedAt: "",
      discountPercent: 0,
      discountAmountDisplay: "-",
      status: "none",
      cureDays: 7,
      defaultTerm: "while_site_remains_active",
      previewText: "Website designed and developed by Yana Ellis ↗",
      conditionsSummary: ""
    },
    metadata: { elapsedMs: 3000 },
    ...overrides
  };
}

async function main() {
  const unsafeLink = await runRequest(
    basePayload({
      inspiration: { links: [{ raw: "javascript:alert(1)", url: "javascript:alert(1)" }] }
    })
  );

  if (unsafeLink.status !== 400) {
    throw new Error(`Unsafe link request should be rejected with 400, got ${unsafeLink.status}`);
  }

  const missingContactConsent = await runRequest(
    basePayload({
      client: {
        ...basePayload().client,
        contactConsent: false,
        consent: false
      }
    })
  );

  if (missingContactConsent.status !== 400) {
    throw new Error(`Missing contact consent should be rejected with 400, got ${missingContactConsent.status}`);
  }

  const missingDesignerCreditConsent = await runRequest(
    basePayload({
      promotion: {
        option: "designer_credit",
        optionLabel: "Apply the designer credit discount",
        discountPercent: 10,
        discountAmountDisplay: "-160 CAD",
        estimatedPriceAfterDiscountDisplay: "1,450 CAD"
      },
      designerCredit: {
        ...basePayload().designerCredit,
        selected: true,
        accepted: false,
        option: "designer_credit",
        discountPercent: 10,
        discountAmountDisplay: "-160 CAD",
        status: "active"
      }
    })
  );

  if (missingDesignerCreditConsent.status !== 400) {
    throw new Error(`Designer credit discount without consent should be rejected with 400, got ${missingDesignerCreditConsent.status}`);
  }

  const validButUndeliverable = await runRequest(
    basePayload({
      inspiration: { links: [{ raw: "example.com", url: "example.com" }] }
    })
  );

  if (validButUndeliverable.status !== 503) {
    throw new Error(`Valid payload without delivery env should reach delivery config check, got ${validButUndeliverable.status}`);
  }

  console.log("Submission API tests passed.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
