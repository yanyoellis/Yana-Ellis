const RESEND_ENDPOINT = "https://api.resend.com/emails";
const TELEGRAM_MESSAGE_LIMIT = 3900;
const MAX_BODY_BYTES = 256 * 1024;
const MIN_COMPLETION_MS = 2500;
const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMax = 5;
const rateLimitStore = new Map();

function sendJson(response, status, body) {
  response.statusCode = status;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.end(JSON.stringify(body));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function text(value, fallback = "-") {
  const valueText = String(value ?? "").trim();
  return valueText || fallback;
}

function truncate(value, max = 4000) {
  const valueText = String(value ?? "");
  return valueText.length > max ? `${valueText.slice(0, max)}...` : valueText;
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (Buffer.byteLength(body) > MAX_BODY_BYTES) {
        reject(new Error("Request body is too large."));
        request.destroy();
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

function parsePayload(rawBody) {
  try {
    return JSON.parse(rawBody || "{}");
  } catch (error) {
    return null;
  }
}

function hasRequiredPayload(payload) {
  return Boolean(
    payload &&
      payload.requestId &&
      payload.client?.name &&
      payload.client?.email &&
      payload.client?.companyName &&
      payload.client?.projectDescription &&
      payload.client?.consent === true &&
      payload.market?.labelEn &&
      payload.pricing?.preliminaryEstimateDisplay &&
      Array.isArray(payload.answers)
  );
}

function checkRateLimit(key) {
  const now = Date.now();
  const existing = rateLimitStore.get(key) || [];
  const recent = existing.filter((timestamp) => now - timestamp < rateLimitWindowMs);

  if (recent.length >= rateLimitMax) {
    rateLimitStore.set(key, recent);
    return false;
  }

  recent.push(now);
  rateLimitStore.set(key, recent);
  return true;
}

function languageLabel(language) {
  return { en: "English", uk: "Ukrainian", pl: "Polish" }[language] || language;
}

function manualStatus(payload) {
  return payload.flags?.manualReview ? "Manual review required" : "Preliminary estimate";
}

function selectedAnswersText(payload) {
  return payload.answers
    .map((answer, index) => {
      const lines = [`${index + 1}. ${text(answer.questionLabel)}`, text(answer.optionLabel)];
      if (answer.priceEffect) {
        lines.push(answer.priceType === "base" ? `Base price: ${answer.priceEffect}` : `Effect: ${answer.priceEffect}`);
      }
      if (answer.manualReview) {
        lines.push("Manual review: Yes");
      }
      return lines.join("\n");
    })
    .join("\n\n");
}

function selectedAnswersHtml(payload) {
  return payload.answers
    .map(
      (answer, index) => `
        <li>
          <strong>${index + 1}. ${escapeHtml(answer.questionLabel)}</strong><br />
          ${escapeHtml(answer.optionLabel)}<br />
          <span>${escapeHtml(answer.priceEffect || "")}</span>
        </li>
      `
    )
    .join("");
}

function priceBreakdownText(payload) {
  const pricing = payload.pricing || {};
  return [
    `Base price:\n${text(pricing.basePriceDisplay || payload.answers?.find((answer) => answer.priceType === "base")?.priceEffect || pricing.basePrice)}`,
    `Fixed additions:\n${text(pricing.fixedAdditionsDisplay || pricing.fixedAdditions)}`,
    `Subtotal:\n${text(pricing.subtotalDisplay || pricing.subtotal)}`,
    `Language multiplier:\n${text(pricing.languageMultiplier)}`,
    `Language adjustment:\n${text(pricing.languageAdjustmentDisplay || pricing.languageAdjustment)}`,
    `Timeline multiplier:\n${text(pricing.timelineMultiplier)}`,
    `Timeline adjustment:\n${text(pricing.timelineAdjustmentDisplay || pricing.timelineAdjustment)}`,
    `Amount before rounding:\n${text(pricing.amountBeforeRoundingDisplay || pricing.amountBeforeRounding)}`,
    `Rounding unit:\n${text(pricing.roundingUnitDisplay || pricing.roundingUnit)}`,
    `Preliminary estimate:\n${text(pricing.preliminaryEstimateDisplay)}`,
    `Monthly support:\n${text(pricing.monthlySupportDisplay)}`,
    `Manual review:\n${payload.flags?.manualReview ? "Yes" : "No"}`,
    `Custom quote:\n${payload.flags?.customQuote ? "Yes" : "No"}`
  ].join("\n\n");
}

function compactAnswersText(payload) {
  return payload.answers
    .slice(0, 14)
    .map((answer) => `- ${text(answer.questionLabel)}: ${text(answer.optionLabel)}${answer.priceEffect ? ` (${answer.priceEffect})` : ""}`)
    .join("\n");
}

function telegramMessage(payload) {
  return `NEW WEBSITE REQUEST

${payload.requestId}

Market:
${payload.market.labelEn}

Estimate:
${payload.pricing.preliminaryEstimateDisplay}

Status:
${manualStatus(payload)}

CLIENT

Name:
${text(payload.client.name)}

Email:
${text(payload.client.email)}

Phone:
${text(payload.client.phone)}

Telegram:
${text(payload.client.telegram)}

Company or project:
${text(payload.client.companyName)}

Preferred contact:
${text(payload.client.preferredContact)}

Current website:
${text(payload.client.currentWebsite)}

PROJECT DESCRIPTION

${truncate(payload.client.projectDescription, 900)}

SELECTED OPTIONS

${truncate(compactAnswersText(payload), 1400)}

MONTHLY SUPPORT
${text(payload.pricing.monthlySupportDisplay)}

Page:
${text(payload.metadata?.pageUrl)}

IMPORTANT
This is a preliminary calculator estimate. Send the client a confirmed final quote manually.`;
}

function splitTelegramMessage(message) {
  const chunks = [];
  let remaining = message;

  while (remaining.length > TELEGRAM_MESSAGE_LIMIT) {
    const slice = remaining.slice(0, TELEGRAM_MESSAGE_LIMIT);
    const splitAt = Math.max(slice.lastIndexOf("\n\n"), slice.lastIndexOf("\n"), 1);
    chunks.push(remaining.slice(0, splitAt).trim());
    remaining = remaining.slice(splitAt).trim();
  }

  if (remaining) {
    chunks.push(remaining);
  }

  return chunks;
}

function internalText(payload) {
  return `NEW WEBSITE REQUEST

Request ID:
${payload.requestId}

Submitted:
${payload.submittedDate}, ${payload.submittedTime}

Market:
${payload.market.labelEn}

Interface language:
${languageLabel(payload.interfaceLanguage)}

Preliminary estimate:
${payload.pricing.preliminaryEstimateDisplay}

Status:
${manualStatus(payload)}

CLIENT INFORMATION

Name:
${text(payload.client.name)}

Email:
${text(payload.client.email)}

Phone:
${text(payload.client.phone)}

Telegram:
${text(payload.client.telegram)}

Company or project:
${text(payload.client.companyName)}

Current website:
${text(payload.client.currentWebsite)}

Preferred contact:
${text(payload.client.preferredContact)}

Preferred start:
${text(payload.client.preferredStartDate)}

PROJECT DESCRIPTION

${truncate(payload.client.projectDescription)}

CALCULATOR ANSWERS

${selectedAnswersText(payload)}

PRICE BREAKDOWN

${priceBreakdownText(payload)}

ADDITIONAL NOTES

${truncate(payload.client.additionalNotes)}

REQUEST METADATA

Calculator version:
${text(payload.calculatorContext?.calculatorVersion)}

Pricing version:
${text(payload.calculatorContext?.pricingConfigurationVersion)}

Page URL:
${text(payload.metadata?.pageUrl)}

Referrer:
${text(payload.metadata?.referrer)}

Device:
${text(payload.metadata?.deviceType)}

TECHNICAL JSON BACKUP

${JSON.stringify(payload, null, 2)}

IMPORTANT

This is a preliminary calculator estimate. Review the request and send the client a confirmed final quote manually.`;
}

function internalHtml(payload) {
  return `
    <h1>New website request</h1>
    <p><strong>Request ID:</strong><br />${escapeHtml(payload.requestId)}</p>
    <p><strong>Submitted:</strong><br />${escapeHtml(payload.submittedDate)}, ${escapeHtml(payload.submittedTime)}</p>
    <p><strong>Market:</strong><br />${escapeHtml(payload.market.labelEn)}</p>
    <p><strong>Interface language:</strong><br />${escapeHtml(languageLabel(payload.interfaceLanguage))}</p>
    <p><strong>Preliminary estimate:</strong><br />${escapeHtml(payload.pricing.preliminaryEstimateDisplay)}</p>
    <p><strong>Status:</strong><br />${escapeHtml(manualStatus(payload))}</p>
    <h2>Client information</h2>
    <p>${escapeHtml(payload.client.name)}<br />${escapeHtml(payload.client.email)}<br />${escapeHtml(payload.client.phone)}<br />${escapeHtml(payload.client.telegram)}</p>
    <p><strong>Company:</strong> ${escapeHtml(payload.client.companyName)}</p>
    <p><strong>Current website:</strong> ${escapeHtml(payload.client.currentWebsite)}</p>
    <p><strong>Preferred contact:</strong> ${escapeHtml(payload.client.preferredContact)}</p>
    <p><strong>Preferred start:</strong> ${escapeHtml(payload.client.preferredStartDate)}</p>
    <h2>Project description</h2>
    <p>${escapeHtml(truncate(payload.client.projectDescription)).replace(/\n/g, "<br />")}</p>
    <h2>Calculator answers</h2>
    <ol>${selectedAnswersHtml(payload)}</ol>
    <h2>Price breakdown</h2>
    <pre>${escapeHtml(priceBreakdownText(payload))}</pre>
    <h2>Additional notes</h2>
    <p>${escapeHtml(truncate(payload.client.additionalNotes)).replace(/\n/g, "<br />")}</p>
    <h2>Important</h2>
    <p>This is a preliminary calculator estimate. Review the request and send the client a confirmed final quote manually.</p>
  `;
}

const clientCopy = {
  en: {
    greeting: "Hello",
    thanks: "Thank you for sending your website project request.",
    requestNumber: "Request number",
    market: "Market",
    estimate: "Preliminary estimate",
    selectedType: "Selected website type",
    review:
      "I will review all project requirements and contact you within one business day.",
    disclaimer:
      "The amount shown is a preliminary estimate based on your calculator answers. The exact price will be confirmed after the requirements are reviewed and before any work begins.",
    selected: "Selected options",
    monthly: "Optional monthly support",
    notSelected: "Not selected",
    signoff: "Regards,\nYana Ellis"
  },
  uk: {
    greeting: "Вітаю",
    thanks: "Дякую за надсилання заявки щодо сайту.",
    requestNumber: "Номер заявки",
    market: "Ринок",
    estimate: "Попередній розрахунок",
    selectedType: "Вибраний тип сайту",
    review:
      "Я перегляну всі вимоги проєкту та зв'яжуся з вами протягом одного робочого дня.",
    disclaimer:
      "Вказана сума є попереднім розрахунком на основі відповідей у калькуляторі. Точну вартість буде підтверджено після перевірки вимог і до початку роботи.",
    selected: "Вибрані параметри",
    monthly: "Додаткова щомісячна підтримка",
    notSelected: "Не вибрано",
    signoff: "З повагою,\nYana Ellis"
  },
  pl: {
    greeting: "Dzień dobry",
    thanks: "Dziękuję za przesłanie zapytania dotyczącego strony internetowej.",
    requestNumber: "Numer zapytania",
    market: "Rynek",
    estimate: "Wstępna wycena",
    selectedType: "Wybrany rodzaj strony",
    review:
      "Przeanalizuję wszystkie wymagania projektu i skontaktuję się z Tobą w ciągu jednego dnia roboczego.",
    disclaimer:
      "Podana kwota jest wstępną wyceną opartą na odpowiedziach w kalkulatorze. Dokładna cena zostanie potwierdzona po analizie wymagań i przed rozpoczęciem pracy.",
    selected: "Wybrane elementy",
    monthly: "Opcjonalne wsparcie miesięczne",
    notSelected: "Nie wybrano",
    signoff: "Pozdrawiam,\nYana Ellis"
  }
};

function clientText(payload) {
  const copy = clientCopy[payload.interfaceLanguage] || clientCopy.en;
  const firstName = text(payload.client.name).split(/\s+/)[0];
  const websiteType = payload.answers?.[0]?.optionLabel || "-";
  const selected = payload.answers
    .map((answer) => `- ${answer.questionLabel}: ${answer.optionLabel}`)
    .join("\n");

  return `${copy.greeting}, ${firstName}!

${copy.thanks}

${copy.requestNumber}:
${payload.requestId}

${copy.market}:
${payload.market.label}

${copy.estimate}:
${payload.pricing.preliminaryEstimateDisplay}

${copy.selectedType}:
${websiteType}

${copy.review}

${copy.disclaimer}

${copy.selected}:

${selected}

${copy.monthly}:
${payload.pricing.monthlySupportDisplay || copy.notSelected}

${copy.signoff}`;
}

function clientHtml(payload) {
  const copy = clientCopy[payload.interfaceLanguage] || clientCopy.en;
  return `
    <p>${escapeHtml(clientText(payload)).replace(/\n/g, "<br />")}</p>
  `;
}

async function sendEmail({ from, to, subject, textBody, htmlBody, replyTo }) {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey || !from) {
    throw new Error("Email service is not configured.");
  }

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      text: textBody,
      html: htmlBody,
      reply_to: replyTo
    })
  });

  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(`Email provider rejected the request: ${responseText}`);
  }

  return response.json();
}

async function sendTelegram(payload) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    throw new Error("Telegram service is not configured.");
  }

  const chunks = splitTelegramMessage(telegramMessage(payload));

  for (const chunk of chunks) {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: chunk,
        disable_web_page_preview: true
      })
    });

    if (!response.ok) {
      const responseText = await response.text();
      throw new Error(`Telegram rejected the request: ${responseText}`);
    }
  }
}

module.exports = async function submitEstimate(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return sendJson(response, 405, { ok: false, message: "Method not allowed." });
  }

  let payload;
  try {
    const rawBody = await readBody(request);
    payload = parsePayload(rawBody);
  } catch (error) {
    return sendJson(response, 413, { ok: false, message: "Request body is too large." });
  }

  if (!hasRequiredPayload(payload)) {
    return sendJson(response, 400, { ok: false, message: "The request is missing required information." });
  }

  if (payload.metadata?.honeypot) {
    return sendJson(response, 400, { ok: false, message: "The request could not be accepted." });
  }

  if (Number(payload.metadata?.elapsedMs || 0) < MIN_COMPLETION_MS) {
    return sendJson(response, 400, { ok: false, message: "Please try submitting the request again." });
  }

  const rateLimitKey = `${payload.client.email}:${request.headers["user-agent"] || "unknown"}`;
  if (!checkRateLimit(rateLimitKey)) {
    return sendJson(response, 429, { ok: false, message: "Please wait before sending another request." });
  }

  const from = process.env.ESTIMATE_FROM_EMAIL;
  const to = process.env.ESTIMATE_TO_EMAIL || "oh.yanyoellis@gmail.com";
  const telegramConfigured = Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID);
  const emailConfigured = process.env.ENABLE_RESEND_DELIVERY === "true" && Boolean(process.env.RESEND_API_KEY && from);

  if (!telegramConfigured && !emailConfigured) {
    return sendJson(response, 503, {
      ok: false,
      message: "Request delivery is not configured yet."
    });
  }

  const subject = `New website request — ${payload.requestId} — ${payload.market.labelEn} — ${payload.pricing.preliminaryEstimateDisplay}`;

  try {
    if (telegramConfigured) {
      await sendTelegram(payload);
    }

    if (!telegramConfigured && emailConfigured) {
      await sendEmail({
        from,
        to,
        subject,
        textBody: internalText(payload),
        htmlBody: internalHtml(payload),
        replyTo: payload.client.email
      });

      await sendEmail({
        from,
        to: payload.client.email,
        subject: `${payload.requestId} - Website project request received`,
        textBody: clientText(payload),
        htmlBody: clientHtml(payload),
        replyTo: to
      });
    }

    return sendJson(response, 200, { ok: true, requestId: payload.requestId });
  } catch (error) {
    return sendJson(response, 502, {
      ok: false,
      message: "The request could not be sent. Please try again or contact me directly."
    });
  }
};
