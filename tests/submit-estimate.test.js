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
      consent: true
    },
    market: { label: "Canada", labelEn: "Canada" },
    pricing: { preliminaryEstimateDisplay: "1,600 CAD" },
    answers: [],
    inspiration: { links: [] },
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
