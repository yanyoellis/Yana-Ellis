(() => {
  const WORKFLOW_VERSION = "1.0";
  const FORM_VERSION = "1.0";
  const PRICING_MONTH = "2026-07";
  const API_ENDPOINT = "/api/submit-estimate";
  const telegramHandle = "@ohyanyo";
  const startedAt = Date.now();
  let lastSuccessfulPayload = null;

  const marketMap = {
    canada: {
      id: "canada",
      code: "CA",
      label: { en: "Canada", uk: "Канада", pl: "Kanada" },
      currencyCode: "CAD",
      displayCurrency: "CAD",
      roundingUnit: 10,
      pricingVersion: "CA-2026-07"
    },
    poland: {
      id: "poland",
      code: "PL",
      label: { en: "Poland", uk: "Польща", pl: "Polska" },
      currencyCode: "PLN",
      displayCurrency: "PLN",
      roundingUnit: 50,
      pricingVersion: "PL-2026-07"
    },
    ukraine: {
      id: "ukraine",
      code: "UA",
      label: { en: "Ukraine", uk: "Україна", pl: "Ukraina" },
      currencyCode: "UAH",
      displayCurrency: "грн",
      roundingUnit: 500,
      pricingVersion: "UA-2026-07"
    }
  };

  const workflowCopy = {
    en: {
      preliminaryProjectEstimate: "Preliminary project estimate",
      estimatedStartingPoint: "Estimated starting point",
      resultCopy:
        "This estimate is based on the options selected in the calculator. I will review the project details and confirm the exact final price before any work begins.",
      statusPreliminary: "Preliminary estimate",
      statusManual: "Manual review required",
      estimateBreakdown: "Estimate breakdown",
      projectSummary: "Your project summary",
      optionalMonthlyServices: "Optional monthly services",
      manualNoticeTitle: "Manual review required",
      manualNotice:
        "This request includes requirements that need individual review. The amount shown is a starting point, not a confirmed final price.",
      baseWebsite: "Base website",
      fixedAdditions: "Fixed additions",
      calculatedSubtotal: "Calculated subtotal",
      languageAdjustment: "Language adjustment",
      timelineAdjustment: "Timeline adjustment",
      amountBeforeRounding: "Amount before rounding",
      roundingUnit: "Rounding unit",
      preliminaryEstimate: "Preliminary estimate",
      priceEffect: "Price effect",
      selectedOption: "Selected option",
      category: "Category",
      included: "Included",
      customQuote: "Custom quote",
      notSelected: "Not selected",
      noMonthly: "No monthly service selected",
      requestFinalQuote: "Request a final project quote",
      formIntro:
        "Send your project details for review. I will check the selected requirements and confirm the exact project price before work begins.",
      name: "Name",
      email: "Email address",
      company: "Company or project name",
      phone: "Phone number - optional",
      website: "Current website - optional",
      preferredContact: "Preferred contact method",
      telegram: "Telegram username - optional",
      preferredStart: "Preferred project start date - optional",
      description: "Project description",
      notes: "Additional notes - optional",
      descriptionHelp:
        "Briefly describe your business, the main goal of the website and anything that may affect the project scope.",
      consent:
        "I agree that the information submitted in this form may be used to review my project request and contact me about it.",
      sendForReview: "Send for review",
      sending: "Sending request...",
      requiredName: "Please enter your name.",
      requiredEmail: "Please enter a valid email address.",
      requiredCompany: "Please enter your company or project name.",
      requiredDescription: "Please briefly describe your project.",
      requiredConsent: "Please confirm that I may use this information to review and contact you about the request.",
      sendError:
        "The request could not be sent. Your calculator answers have been preserved. Please try again or contact me directly by email or Telegram.",
      whatNextTitle: "What happens next?",
      nextSteps: [
        "Send your calculator results and project details.",
        "I review the selected requirements.",
        "I contact you if any details need clarification.",
        "You receive the confirmed project price and scope.",
        "Work begins only after you approve the offer and make the first payment."
      ],
      successTitle: "Your request has been sent",
      successText: "Thank you. I received your calculator answers and project details.",
      requestId: "Request ID",
      nextStep: "Next step",
      successNext:
        "I will review the request and contact you within one business day with the confirmed project price or any necessary questions.",
      downloadSummary: "Download summary",
      returnPortfolio: "Return to portfolio",
      documentTitle: "Website Project Estimate",
      documentDisclaimer:
        "This document contains a preliminary estimate generated from the calculator answers. It is not an invoice, contract or binding commercial offer. The final project price will be confirmed after the requirements are reviewed.",
      editAnswer: "Edit {category}",
      currentEstimate: "Current estimate",
      market: "Website market",
      interfaceLanguage: "Interface language"
    },
    uk: {
      preliminaryProjectEstimate: "Попередній розрахунок вартості",
      estimatedStartingPoint: "Орієнтовна початкова вартість",
      resultCopy:
        "Цей розрахунок сформовано на основі відповідей у калькуляторі. Я перегляну деталі проєкту та підтверджу точну фінальну вартість до початку роботи.",
      statusPreliminary: "Попередній розрахунок",
      statusManual: "Потрібна індивідуальна оцінка",
      estimateBreakdown: "Розрахунок вартості",
      projectSummary: "Підсумок вашого проєкту",
      optionalMonthlyServices: "Додаткова щомісячна підтримка",
      manualNoticeTitle: "Потрібна індивідуальна оцінка",
      manualNotice:
        "У заявці є вимоги, які потрібно переглянути індивідуально. Показана сума є початковим орієнтиром, а не підтвердженою фінальною вартістю.",
      baseWebsite: "Базовий тип сайту",
      fixedAdditions: "Фіксовані доплати",
      calculatedSubtotal: "Проміжна сума",
      languageAdjustment: "Доплата за мовні версії",
      timelineAdjustment: "Доплата за термін",
      amountBeforeRounding: "Сума до округлення",
      roundingUnit: "Крок округлення",
      preliminaryEstimate: "Попередній розрахунок",
      priceEffect: "Вплив на ціну",
      selectedOption: "Вибраний варіант",
      category: "Категорія",
      included: "Включено",
      customQuote: "Індивідуальний розрахунок",
      notSelected: "Не вибрано",
      noMonthly: "Щомісячну підтримку не вибрано",
      requestFinalQuote: "Отримати точну вартість проєкту",
      formIntro:
        "Надішліть деталі проєкту на перевірку. Я перегляну вибрані вимоги та підтверджу точну вартість до початку роботи.",
      name: "Ім'я",
      email: "Електронна пошта",
      company: "Назва компанії або проєкту",
      phone: "Номер телефону - необов'язково",
      website: "Поточний сайт - необов'язково",
      preferredContact: "Бажаний спосіб зв'язку",
      telegram: "Ім'я користувача в Telegram - необов'язково",
      preferredStart: "Бажана дата початку проєкту - необов'язково",
      description: "Опис проєкту",
      notes: "Додаткова інформація - необов'язково",
      descriptionHelp:
        "Коротко опишіть ваш бізнес, головну мету сайту та все, що може вплинути на обсяг роботи.",
      consent:
        "Я погоджуюся, що інформація з цієї форми може бути використана для розгляду моєї заявки та зв'язку зі мною щодо проєкту.",
      sendForReview: "Надіслати на перевірку",
      sending: "Надсилаємо заявку...",
      requiredName: "Будь ласка, введіть ваше ім'я.",
      requiredEmail: "Будь ласка, введіть коректну електронну адресу.",
      requiredCompany: "Будь ласка, вкажіть назву компанії або проєкту.",
      requiredDescription: "Коротко опишіть ваш проєкт.",
      requiredConsent: "Підтвердьте, що я можу використати цю інформацію для розгляду заявки та зв'язку з вами.",
      sendError:
        "Не вдалося надіслати заявку. Відповіді калькулятора збережено. Спробуйте ще раз або зв'яжіться зі мною через email чи Telegram.",
      whatNextTitle: "Що буде далі?",
      nextSteps: [
        "Ви надсилаєте результати калькулятора та опис проєкту.",
        "Я переглядаю вибрані вимоги.",
        "За потреби уточнюю деталі.",
        "Ви отримуєте підтверджену вартість і точний обсяг роботи.",
        "Робота починається лише після погодження пропозиції та першої оплати."
      ],
      successTitle: "Вашу заявку надіслано",
      successText: "Дякую. Я отримала відповіді з калькулятора та деталі проєкту.",
      requestId: "Номер заявки",
      nextStep: "Наступний крок",
      successNext:
        "Я перегляну заявку та зв'яжуся з вами протягом одного робочого дня, щоб підтвердити точну вартість або уточнити необхідні деталі.",
      downloadSummary: "Завантажити підсумок",
      returnPortfolio: "Повернутися до портфоліо",
      documentTitle: "Розрахунок вартості сайту",
      documentDisclaimer:
        "Цей документ містить попередній розрахунок, сформований на основі відповідей у калькуляторі. Він не є рахунком, договором або обов'язковою комерційною пропозицією. Точну вартість буде підтверджено після перевірки вимог.",
      editAnswer: "Змінити {category}",
      currentEstimate: "Поточний розрахунок",
      market: "Ринок сайту",
      interfaceLanguage: "Мова інтерфейсу"
    },
    pl: {
      preliminaryProjectEstimate: "Wstępna wycena projektu",
      estimatedStartingPoint: "Szacunkowy punkt wyjścia",
      resultCopy:
        "Ta wycena została przygotowana na podstawie odpowiedzi w kalkulatorze. Przeanalizuję szczegóły projektu i potwierdzę dokładną cenę przed rozpoczęciem pracy.",
      statusPreliminary: "Wstępna wycena",
      statusManual: "Wymagana indywidualna analiza",
      estimateBreakdown: "Szczegóły wyceny",
      projectSummary: "Podsumowanie projektu",
      optionalMonthlyServices: "Opcjonalne wsparcie miesięczne",
      manualNoticeTitle: "Wymagana indywidualna analiza",
      manualNotice:
        "Zapytanie zawiera elementy wymagające indywidualnej analizy. Pokazana kwota jest punktem wyjścia, a nie potwierdzoną ceną końcową.",
      baseWebsite: "Bazowa strona",
      fixedAdditions: "Dodatki stałe",
      calculatedSubtotal: "Suma pośrednia",
      languageAdjustment: "Dopłata za wersje językowe",
      timelineAdjustment: "Dopłata za termin",
      amountBeforeRounding: "Kwota przed zaokrągleniem",
      roundingUnit: "Krok zaokrąglenia",
      preliminaryEstimate: "Wstępna wycena",
      priceEffect: "Wpływ na cenę",
      selectedOption: "Wybrana opcja",
      category: "Kategoria",
      included: "W cenie",
      customQuote: "Wycena indywidualna",
      notSelected: "Nie wybrano",
      noMonthly: "Nie wybrano wsparcia miesięcznego",
      requestFinalQuote: "Poproś o dokładną wycenę projektu",
      formIntro:
        "Wyślij szczegóły projektu do analizy. Sprawdzę wybrane wymagania i potwierdzę dokładną cenę przed rozpoczęciem pracy.",
      name: "Imię",
      email: "Adres e-mail",
      company: "Nazwa firmy lub projektu",
      phone: "Numer telefonu - opcjonalnie",
      website: "Obecna strona internetowa - opcjonalnie",
      preferredContact: "Preferowany sposób kontaktu",
      telegram: "Nazwa użytkownika Telegram - opcjonalnie",
      preferredStart: "Preferowany termin rozpoczęcia - opcjonalnie",
      description: "Opis projektu",
      notes: "Dodatkowe informacje - opcjonalnie",
      descriptionHelp:
        "Krótko opisz swoją firmę, główny cel strony oraz wszystko, co może wpłynąć na zakres projektu.",
      consent:
        "Wyrażam zgodę na wykorzystanie informacji przesłanych w formularzu w celu analizy mojego zapytania i kontaktu w sprawie projektu.",
      sendForReview: "Wyślij do analizy",
      sending: "Wysyłanie zapytania...",
      requiredName: "Wpisz swoje imię.",
      requiredEmail: "Wpisz poprawny adres e-mail.",
      requiredCompany: "Wpisz nazwę firmy lub projektu.",
      requiredDescription: "Krótko opisz swój projekt.",
      requiredConsent: "Potwierdź zgodę na wykorzystanie informacji do analizy zapytania i kontaktu.",
      sendError:
        "Nie udało się wysłać zapytania. Odpowiedzi z kalkulatora zostały zachowane. Spróbuj ponownie lub skontaktuj się ze mną przez e-mail albo Telegram.",
      whatNextTitle: "Co stanie się dalej?",
      nextSteps: [
        "Wysyłasz wynik kalkulatora i opis projektu.",
        "Analizuję wybrane wymagania.",
        "W razie potrzeby kontaktuję się w celu doprecyzowania szczegółów.",
        "Otrzymujesz potwierdzoną cenę i zakres prac.",
        "Praca rozpoczyna się dopiero po zaakceptowaniu oferty i pierwszej płatności."
      ],
      successTitle: "Twoje zapytanie zostało wysłane",
      successText: "Dziękuję. Otrzymałam odpowiedzi z kalkulatora i szczegóły projektu.",
      requestId: "Numer zapytania",
      nextStep: "Następny krok",
      successNext:
        "Przeanalizuję zapytanie i skontaktuję się z Tobą w ciągu jednego dnia roboczego, aby potwierdzić dokładną cenę lub zadać potrzebne pytania.",
      downloadSummary: "Pobierz podsumowanie",
      returnPortfolio: "Wróć do portfolio",
      documentTitle: "Wycena projektu strony internetowej",
      documentDisclaimer:
        "Ten dokument zawiera wstępną wycenę wygenerowaną na podstawie odpowiedzi w kalkulatorze. Nie jest fakturą, umową ani wiążącą ofertą handlową. Dokładna cena zostanie potwierdzona po analizie wymagań.",
      editAnswer: "Edytuj {category}",
      currentEstimate: "Aktualna wycena",
      market: "Rynek strony",
      interfaceLanguage: "Język interfejsu"
    }
  };

  function wc(key) {
    return workflowCopy[currentLanguage]?.[key] || workflowCopy.en[key] || key;
  }

  function marketConfig() {
    if (storageKey.includes("poland")) {
      return marketMap.poland;
    }
    if (storageKey.includes("ukraine")) {
      return marketMap.ukraine;
    }
    return marketMap.canada;
  }

  function localMarketLabel() {
    const market = marketConfig();
    return market.label[currentLanguage] || market.label.en;
  }

  function languageName(language) {
    const names = {
      en: { en: "English", uk: "Англійська", pl: "Angielski" },
      uk: { en: "Ukrainian", uk: "Українська", pl: "Ukraiński" },
      pl: { en: "Polish", uk: "Польська", pl: "Polski" }
    };
    return names[language]?.[currentLanguage] || language.toUpperCase();
  }

  function html(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function roundByUnit(amount, unit) {
    return Math.round(amount / unit) * unit;
  }

  function signedAmount(amount) {
    return amount > 0 ? `+${formatAmount(amount)}` : formatAmount(amount);
  }

  function multiplierDisplay(multiplier) {
    return multiplier && multiplier !== 1 ? `+${Math.round((multiplier - 1) * 100)}%` : wc("included");
  }

  function optionEffect(question, option) {
    if (option.customQuote) {
      return wc("customQuote");
    }
    if (option.monthly) {
      return formatMonthly(option.monthly);
    }
    if (question.id === "languages" || question.id === "timeline") {
      return option.priceDisplay || multiplierDisplay(option.multiplier || 1);
    }
    if (question.id === "purpose") {
      return option.amount ? formatAmount(option.amount) : wc("customQuote");
    }
    if (option.amount) {
      return signedAmount(option.amount);
    }
    return wc("included");
  }

  function selectedAnswerObjects() {
    return getQuestions().map((question, index) => {
      const selected = getSelectedOptions(question);
      return {
        question,
        index,
        questionId: question.id,
        questionLabel: getText(question.title),
        summaryLabel: getText(question.summary),
        selected
      };
    });
  }

  function calculateDetailedEstimate() {
    ensureValidAnswers();

    const market = marketConfig();
    let basePrice = 0;
    let fixedAdditions = 0;
    let languageMultiplier = 1;
    let timelineMultiplier = 1;
    let monthlySupport = null;
    let customBase = false;
    const manualFlags = [];
    const breakdownRows = [];
    const answerData = [];

    selectedAnswerObjects().forEach(({ question, questionId, questionLabel, summaryLabel, selected }) => {
      selected.forEach((option) => {
        const isBase = questionId === "purpose";
        const isLanguage = questionId === "languages";
        const isTimeline = questionId === "timeline";
        const isMonthly = Boolean(option.monthly);
        const fixedPrice = !isBase && !isLanguage && !isTimeline && !isMonthly ? option.amount || 0 : 0;
        const multiplier = isLanguage || isTimeline ? option.multiplier || 1 : null;
        const priceType = isBase ? "base" : isLanguage || isTimeline ? "multiplier" : isMonthly ? "monthly" : fixedPrice ? "fixed" : option.customQuote ? "custom" : "included";

        if (option.customBase) {
          customBase = true;
        }
        if (option.customQuote || option.manual) {
          manualFlags.push(getText(option.title));
        }
        if (isBase) {
          basePrice += option.amount || 0;
        } else if (isLanguage) {
          languageMultiplier = option.multiplier || 1;
        } else if (isTimeline) {
          timelineMultiplier = option.multiplier || 1;
        } else if (isMonthly) {
          monthlySupport = option.monthly;
        } else {
          fixedAdditions += option.amount || 0;
        }

        const row = {
          category: isBase ? wc("baseWebsite") : summaryLabel,
          option: getText(option.title),
          effect: optionEffect(question, option),
          priceType
        };

        if (!isMonthly) {
          breakdownRows.push(row);
        }

        answerData.push({
          questionId,
          questionLabel,
          optionId: option.id,
          optionLabel: getText(option.title),
          optionDescription: getText(option.description),
          priceType,
          fixedPrice: isBase ? option.amount || 0 : fixedPrice,
          multiplier,
          included: !option.amount && !option.monthly && !option.customQuote && !multiplier,
          manualReview: Boolean(option.manual || option.customQuote || option.customBase),
          priceEffect: optionEffect(question, option)
        });
      });
    });

    const subtotal = basePrice + fixedAdditions;
    const languageAdjustment = subtotal * (languageMultiplier - 1);
    const afterLanguage = subtotal + languageAdjustment;
    const timelineAdjustment = afterLanguage * (timelineMultiplier - 1);
    const amountBeforeRounding = afterLanguage + timelineAdjustment;
    const preliminaryEstimate = roundByUnit(amountBeforeRounding, market.roundingUnit);
    const manualReview = manualFlags.length > 0 || customBase;
    const customQuote = answerData.some((answer) => answer.priceType === "custom") || customBase;

    return {
      market,
      basePrice,
      fixedAdditions,
      subtotal,
      languageMultiplier,
      languageAdjustment,
      timelineMultiplier,
      timelineAdjustment,
      amountBeforeRounding,
      roundingUnit: market.roundingUnit,
      preliminaryEstimate,
      monthlySupport,
      manualReview,
      customQuote,
      customBase,
      manualFlags,
      breakdownRows,
      answerData
    };
  }

  function resultAmount(calculation) {
    return calculation.customBase ? wc("customQuote") : formatAmount(calculation.preliminaryEstimate);
  }

  function buildBreakdown(calculation) {
    const rows = [
      ...calculation.breakdownRows,
      { category: wc("calculatedSubtotal"), option: "", effect: formatAmount(calculation.subtotal), priceType: "subtotal" },
      { category: wc("languageAdjustment"), option: multiplierDisplay(calculation.languageMultiplier), effect: signedAmount(calculation.languageAdjustment), priceType: "adjustment" },
      { category: wc("timelineAdjustment"), option: multiplierDisplay(calculation.timelineMultiplier), effect: signedAmount(calculation.timelineAdjustment), priceType: "adjustment" },
      { category: wc("amountBeforeRounding"), option: "", effect: formatAmount(calculation.amountBeforeRounding), priceType: "subtotal" },
      { category: wc("roundingUnit"), option: "", effect: formatAmount(calculation.roundingUnit), priceType: "subtotal" },
      { category: wc("preliminaryEstimate"), option: "", effect: resultAmount(calculation), priceType: "total" }
    ];

    return `
      <section class="estimate-section" aria-labelledby="estimateBreakdownTitle">
        <h3 id="estimateBreakdownTitle">${wc("estimateBreakdown")}</h3>
        <div class="breakdown-table" role="table" aria-label="${html(wc("estimateBreakdown"))}">
          <div class="breakdown-row breakdown-head" role="row">
            <span role="columnheader">${wc("category")}</span>
            <span role="columnheader">${wc("selectedOption")}</span>
            <span role="columnheader">${wc("priceEffect")}</span>
          </div>
          ${rows
            .map(
              (row) => `
                <div class="breakdown-row ${row.priceType === "total" ? "is-total" : ""}" role="row">
                  <span role="cell" data-label="${html(wc("category"))}">${html(row.category)}</span>
                  <span role="cell" data-label="${html(wc("selectedOption"))}">${html(row.option || "-")}</span>
                  <strong role="cell" data-label="${html(wc("priceEffect"))}">${html(row.effect)}</strong>
                </div>
              `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  function buildProjectSummary(calculation) {
    const rows = selectedAnswerObjects()
      .map(({ index, summaryLabel, selected }) => {
        const value = selected.length
          ? `<ul>${selected.map((option) => `<li>${html(getText(option.title))}</li>`).join("")}</ul>`
          : `<span>${wc("notSelected")}</span>`;
        const editLabel = wc("editAnswer").replace("{category}", summaryLabel);

        return `
          <div class="summary-item enhanced-summary-item">
            <span class="summary-label">${html(summaryLabel)}</span>
            <span class="summary-value">${value}</span>
            <button class="summary-edit" type="button" data-edit-step="${index}" aria-label="${html(editLabel)}">${t("edit")}</button>
          </div>
        `;
      })
      .join("");

    return `
      <section class="estimate-section" aria-labelledby="projectSummaryTitle">
        <h3 id="projectSummaryTitle">${wc("projectSummary")}</h3>
        <div class="summary-list">
          <div class="summary-item enhanced-summary-item">
            <span class="summary-label">${wc("market")}</span>
            <span class="summary-value">${html(localMarketLabel())}</span>
            <span></span>
          </div>
          <div class="summary-item enhanced-summary-item">
            <span class="summary-label">${wc("interfaceLanguage")}</span>
            <span class="summary-value">${html(languageName(currentLanguage))}</span>
            <span></span>
          </div>
          ${rows}
        </div>
      </section>
    `;
  }

  function buildMonthlyBlock(calculation) {
    return `
      <section class="estimate-section compact-section">
        <h3>${wc("optionalMonthlyServices")}</h3>
        <p class="monthly-value">${calculation.monthlySupport ? formatMonthly(calculation.monthlySupport) : wc("noMonthly")}</p>
      </section>
    `;
  }

  function buildManualNotice(calculation) {
    if (!calculation.manualReview) {
      return "";
    }

    const flags = calculation.manualFlags.length ? `<p>${html(calculation.manualFlags.join(", "))}</p>` : "";
    return `
      <section class="manual-review-box" role="note">
        <h3>${wc("manualNoticeTitle")}</h3>
        <p>${wc("manualNotice")}</p>
        ${flags}
      </section>
    `;
  }

  function buildNextSteps() {
    return `
      <section class="next-steps" aria-labelledby="nextStepsTitle">
        <h3 id="nextStepsTitle">${wc("whatNextTitle")}</h3>
        <ol>${wc("nextSteps").map((step) => `<li>${html(step)}</li>`).join("")}</ol>
      </section>
    `;
  }

  buildContactForm = function buildEnhancedContactForm() {
    return `
      <form class="request-form" id="requestForm" novalidate data-started-at="${startedAt}">
        <div>
          <h2 class="form-title">${wc("requestFinalQuote")}</h2>
          <p class="form-help">${wc("formIntro")}</p>
        </div>
        <div class="form-error-summary" id="formErrorSummary" role="alert" tabindex="-1" hidden></div>
        <div class="form-grid">
          <div class="field hp-field" aria-hidden="true">
            <label for="companyWebsite">Company website</label>
            <input id="companyWebsite" name="companyWebsite" tabindex="-1" autocomplete="off" />
          </div>
          <div class="field">
            <label for="clientName">${wc("name")} *</label>
            <input id="clientName" name="name" autocomplete="name" required aria-describedby="clientNameError" />
            <span class="field-error" id="clientNameError"></span>
          </div>
          <div class="field">
            <label for="clientEmail">${wc("email")} *</label>
            <input id="clientEmail" name="email" type="email" autocomplete="email" required aria-describedby="clientEmailError" />
            <span class="field-error" id="clientEmailError"></span>
          </div>
          <div class="field">
            <label for="projectName">${wc("company")} *</label>
            <input id="projectName" name="projectName" required aria-describedby="projectNameError" />
            <span class="field-error" id="projectNameError"></span>
          </div>
          <div class="field">
            <label for="clientPhone">${wc("phone")}</label>
            <input id="clientPhone" name="phone" autocomplete="tel" />
          </div>
          <div class="field">
            <label for="currentWebsite">${wc("website")}</label>
            <input id="currentWebsite" name="website" type="url" inputmode="url" />
          </div>
          <div class="field">
            <label for="preferredContact">${wc("preferredContact")}</label>
            <select id="preferredContact" name="preferredContact">
              <option value="Email">${t("emailOption")}</option>
              <option value="Telegram">${t("telegramOption")}</option>
              <option value="Phone">${t("phoneOption")}</option>
              <option value="Viber">${ui[currentLanguage].viberOption || "Viber"}</option>
            </select>
          </div>
          <div class="field">
            <label for="telegramUsername">${wc("telegram")}</label>
            <input id="telegramUsername" name="telegram" autocomplete="off" />
          </div>
          <div class="field">
            <label for="preferredStartDate">${wc("preferredStart")}</label>
            <input id="preferredStartDate" name="preferredStartDate" />
          </div>
          <div class="field full">
            <label for="projectDescription">${wc("description")} *</label>
            <textarea id="projectDescription" name="description" required aria-describedby="projectDescriptionHelp projectDescriptionError"></textarea>
            <span class="field-help" id="projectDescriptionHelp">${wc("descriptionHelp")}</span>
            <span class="field-error" id="projectDescriptionError"></span>
          </div>
          <div class="field full">
            <label for="additionalNotes">${wc("notes")}</label>
            <textarea id="additionalNotes" name="notes"></textarea>
          </div>
          <div class="field full consent-field">
            <label for="consentCheckbox">
              <input id="consentCheckbox" name="consent" type="checkbox" required aria-describedby="consentCheckboxError" />
              <span>${wc("consent")}</span>
            </label>
            <span class="field-error" id="consentCheckboxError"></span>
          </div>
        </div>
        <p class="form-status" id="formStatus" role="status" aria-live="polite"></p>
        <button class="calculator-button" type="submit">${wc("sendForReview")}</button>
      </form>
    `;
  };

  renderResult = function renderEnhancedResult() {
    const calculation = calculateDetailedEstimate();
    const resultLabel = calculation.manualReview ? wc("estimatedStartingPoint") : wc("preliminaryProjectEstimate");
    const resultDisplay = resultAmount(calculation);
    const statusText = calculation.manualReview ? wc("statusManual") : wc("statusPreliminary");

    questionPanel.hidden = true;
    resultPanel.hidden = false;
    progressFill.style.width = "100%";

    resultPanel.innerHTML = `
      <div class="result-header enhanced-result-header">
        <p class="step-label">${statusText}</p>
        <h2 class="result-title">${resultLabel}</h2>
        <p class="result-price">${resultDisplay}</p>
        <span class="estimate-status-badge">${statusText}</span>
        <p class="result-copy">${wc("resultCopy")}</p>
      </div>
      <div class="result-consultation-grid">
        <div class="result-main-flow">
          ${buildBreakdown(calculation)}
          ${buildProjectSummary(calculation)}
          ${buildMonthlyBlock(calculation)}
          ${buildManualNotice(calculation)}
          ${buildContactForm()}
          ${buildNextSteps()}
          <div class="result-actions">
            <button class="calculator-button secondary" type="button" data-action="back-to-last">${t("back")}</button>
            <button class="calculator-button secondary" type="button" data-action="restart">${t("restart")}</button>
          </div>
        </div>
        <aside class="result-side-panel" aria-label="${html(statusText)}">
          <span class="estimate-status-badge">${statusText}</span>
          <strong>${resultDisplay}</strong>
          <p>${wc("resultCopy")}</p>
        </aside>
      </div>
    `;
  };

  editStep = function editEnhancedStep(step) {
    state.step = step;
    state.showResult = false;
    state.returnToResultAfterStep = step;
    render();
    document.querySelector(".calculator-main")?.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  goContinue = function goEnhancedContinue() {
    const currentQuestions = getQuestions();
    const question = currentQuestions[state.step];

    if (!isAnswered(question)) {
      return;
    }

    if (state.returnToResultAfterStep === state.step || state.step >= currentQuestions.length - 1) {
      delete state.returnToResultAfterStep;
      state.showResult = true;
    } else {
      state.step += 1;
    }

    render();
    document.querySelector(".calculator-main")?.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  function generateRequestId() {
    const market = marketConfig();
    const date = new Date();
    const stamp = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
    const random = Math.random().toString(36).slice(2, 6).toUpperCase();
    return `YE-${market.code}-${stamp}-${random}`;
  }

  function formValue(formData, name) {
    return String(formData.get(name) || "").trim();
  }

  function clearErrors(form) {
    form.querySelectorAll("[aria-invalid]").forEach((field) => field.removeAttribute("aria-invalid"));
    form.querySelectorAll(".field-error").forEach((node) => {
      node.textContent = "";
    });
    const summary = form.querySelector("#formErrorSummary");
    if (summary) {
      summary.hidden = true;
      summary.textContent = "";
    }
  }

  function setFieldError(form, fieldId, errorId, message) {
    const field = form.querySelector(`#${fieldId}`);
    const error = form.querySelector(`#${errorId}`);
    if (field) {
      field.setAttribute("aria-invalid", "true");
    }
    if (error) {
      error.textContent = message;
    }
  }

  function validateEnhancedForm(form) {
    clearErrors(form);
    const formData = new FormData(form);
    const errors = [];
    const email = formValue(formData, "email");

    if (!formValue(formData, "name")) {
      errors.push(wc("requiredName"));
      setFieldError(form, "clientName", "clientNameError", wc("requiredName"));
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push(wc("requiredEmail"));
      setFieldError(form, "clientEmail", "clientEmailError", wc("requiredEmail"));
    }
    if (!formValue(formData, "projectName")) {
      errors.push(wc("requiredCompany"));
      setFieldError(form, "projectName", "projectNameError", wc("requiredCompany"));
    }
    if (!formValue(formData, "description")) {
      errors.push(wc("requiredDescription"));
      setFieldError(form, "projectDescription", "projectDescriptionError", wc("requiredDescription"));
    }
    if (formData.get("consent") !== "on") {
      errors.push(wc("requiredConsent"));
      setFieldError(form, "consentCheckbox", "consentCheckboxError", wc("requiredConsent"));
    }

    const summary = form.querySelector("#formErrorSummary");
    if (errors.length && summary) {
      summary.hidden = false;
      summary.innerHTML = `<strong>${html(errors[0])}</strong>`;
      summary.focus();
    }

    return errors;
  }

  function answerSummaryLines(calculation) {
    return selectedAnswerObjects()
      .map(({ summaryLabel, selected }) => {
        const value = selected.length ? selected.map((option) => getText(option.title)).join("; ") : wc("notSelected");
        return `${summaryLabel}: ${value}`;
      })
      .join("\n");
  }

  function buildPayload(form, requestId) {
    const formData = new FormData(form);
    const calculation = calculateDetailedEstimate();
    const market = marketConfig();
    const now = new Date();

    return {
      requestId,
      submittedAt: now.toISOString(),
      submittedDate: now.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" }),
      submittedTime: now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
      market: {
        id: market.id,
        label: localMarketLabel(),
        labelEn: market.label.en,
        currency: market.currencyCode,
        displayCurrency: market.displayCurrency
      },
      interfaceLanguage: currentLanguage,
      calculatorContext: {
        selectedBusinessMarket: market.id,
        selectedInterfaceLanguage: currentLanguage,
        calculatorVersion: WORKFLOW_VERSION,
        currencyCode: market.currencyCode,
        publicCurrencyLabel: market.displayCurrency,
        pricingConfigurationVersion: market.pricingVersion
      },
      client: {
        name: formValue(formData, "name"),
        email: formValue(formData, "email"),
        phone: formValue(formData, "phone"),
        telegram: formValue(formData, "telegram"),
        companyName: formValue(formData, "projectName"),
        currentWebsite: formValue(formData, "website"),
        preferredContact: formValue(formData, "preferredContact"),
        preferredStartDate: formValue(formData, "preferredStartDate"),
        projectDescription: formValue(formData, "description"),
        additionalNotes: formValue(formData, "notes"),
        consent: formData.get("consent") === "on"
      },
      answers: calculation.answerData,
      pricing: {
        basePrice: calculation.basePrice,
        basePriceDisplay: formatAmount(calculation.basePrice),
        fixedAdditions: calculation.fixedAdditions,
        fixedAdditionsDisplay: formatAmount(calculation.fixedAdditions),
        subtotal: calculation.subtotal,
        subtotalDisplay: formatAmount(calculation.subtotal),
        languageMultiplier: calculation.languageMultiplier,
        languageAdjustment: calculation.languageAdjustment,
        languageAdjustmentDisplay: signedAmount(calculation.languageAdjustment),
        timelineMultiplier: calculation.timelineMultiplier,
        timelineAdjustment: calculation.timelineAdjustment,
        timelineAdjustmentDisplay: signedAmount(calculation.timelineAdjustment),
        amountBeforeRounding: calculation.amountBeforeRounding,
        amountBeforeRoundingDisplay: formatAmount(calculation.amountBeforeRounding),
        roundingUnit: calculation.roundingUnit,
        roundingUnitDisplay: formatAmount(calculation.roundingUnit),
        preliminaryEstimate: calculation.preliminaryEstimate,
        preliminaryEstimateDisplay: resultAmount(calculation),
        monthlySupport: calculation.monthlySupport,
        monthlySupportDisplay: calculation.monthlySupport ? formatMonthly(calculation.monthlySupport) : wc("notSelected")
      },
      flags: {
        manualReview: calculation.manualReview,
        customQuote: calculation.customQuote
      },
      visibleSummary: {
        answers: answerSummaryLines(calculation),
        breakdown: calculation.breakdownRows
          .map((row) => `${row.category}: ${row.option} - ${row.effect}`)
          .join("\n")
      },
      metadata: {
        pageUrl: window.location.href,
        referrer: document.referrer || "",
        deviceType: window.matchMedia("(max-width: 760px)").matches ? "mobile" : "desktop",
        formVersion: FORM_VERSION,
        calculatorVersion: WORKFLOW_VERSION,
        pricingVersion: market.pricingVersion,
        elapsedMs: Date.now() - Number(form.dataset.startedAt || startedAt),
        honeypot: formValue(formData, "companyWebsite")
      }
    };
  }

  function setSubmitting(form, submitting) {
    const button = form.querySelector('button[type="submit"]');
    if (button) {
      button.disabled = submitting;
      button.textContent = submitting ? wc("sending") : wc("sendForReview");
    }
  }

  function showSubmissionError(form, message = wc("sendError")) {
    const status = form.querySelector("#formStatus");
    const summary = form.querySelector("#formErrorSummary");
    const fullMessage = `${message}\n${contactEmail} / Telegram ${telegramHandle}`;
    if (status) {
      status.textContent = fullMessage;
      status.classList.add("is-error");
      status.focus?.();
    }
    if (summary) {
      summary.hidden = false;
      summary.textContent = fullMessage;
      summary.focus();
    }
  }

  async function submitPayload(payload) {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      let message = wc("sendError");
      try {
        const body = await response.json();
        if (body?.message) {
          message = body.message;
        }
      } catch (error) {
        message = wc("sendError");
      }
      throw new Error(message);
    }

    return response.json();
  }

  function showSuccess(form, payload) {
    lastSuccessfulPayload = payload;
    const success = document.createElement("section");
    success.className = "submission-success";
    success.tabIndex = -1;
    success.innerHTML = `
      <h2>${wc("successTitle")}</h2>
      <p>${wc("successText")}</p>
      <dl>
        <div><dt>${wc("requestId")}</dt><dd>${html(payload.requestId)}</dd></div>
        <div><dt>${wc("preliminaryEstimate")}</dt><dd>${html(payload.pricing.preliminaryEstimateDisplay)}</dd></div>
        <div><dt>${wc("nextStep")}</dt><dd>${wc("successNext")}</dd></div>
      </dl>
      <div class="success-actions">
        <button class="calculator-button" type="button" data-action="download-summary">${wc("downloadSummary")}</button>
        <a class="calculator-button secondary" href="../../index.html">${wc("returnPortfolio")}</a>
      </div>
    `;
    form.replaceWith(success);
    success.focus();
  }

  function printableSummary(payload) {
    const answerRows = payload.answers
      .map((answer) => `<tr><th>${html(answer.questionLabel)}</th><td>${html(answer.optionLabel)}</td><td>${html(answer.priceEffect)}</td></tr>`)
      .join("");
    const breakdownRows = [
      [wc("baseWebsite"), "", payload.pricing.basePriceDisplay || formatAmount(payload.pricing.basePrice)],
      [wc("fixedAdditions"), "", payload.pricing.fixedAdditionsDisplay || formatAmount(payload.pricing.fixedAdditions)],
      [wc("calculatedSubtotal"), "", payload.pricing.subtotalDisplay || formatAmount(payload.pricing.subtotal)],
      [wc("languageAdjustment"), multiplierDisplay(payload.pricing.languageMultiplier), payload.pricing.languageAdjustmentDisplay || signedAmount(payload.pricing.languageAdjustment)],
      [wc("timelineAdjustment"), multiplierDisplay(payload.pricing.timelineMultiplier), payload.pricing.timelineAdjustmentDisplay || signedAmount(payload.pricing.timelineAdjustment)],
      [wc("roundingUnit"), "", payload.pricing.roundingUnitDisplay || formatAmount(payload.pricing.roundingUnit)],
      [wc("preliminaryEstimate"), "", payload.pricing.preliminaryEstimateDisplay]
    ]
      .map((row) => `<tr><th>${html(row[0])}</th><td>${html(row[1])}</td><td>${html(row[2])}</td></tr>`)
      .join("");

    return `<!DOCTYPE html>
      <html lang="${html(currentLanguage)}">
        <head>
          <meta charset="UTF-8" />
          <title>${html(wc("documentTitle"))} - ${html(payload.requestId)}</title>
          <style>
            body{font-family:Arial,sans-serif;margin:40px;color:#111;line-height:1.45}
            h1{font-family:Georgia,serif;font-size:36px;margin:0 0 8px}
            h2{margin-top:30px;border-top:1px solid #ddd;padding-top:18px}
            table{width:100%;border-collapse:collapse;margin-top:12px}
            th,td{text-align:left;vertical-align:top;border-bottom:1px solid #e5e5e5;padding:10px}
            th{width:34%}.meta{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:20px}.meta div{border:1px solid #ddd;padding:12px}
            .price{font-size:30px;font-weight:700}.disclaimer{margin-top:28px;color:#555}
            @media print{button{display:none}body{margin:20px}}
          </style>
        </head>
        <body>
          <h1>Yana Ellis</h1>
          <p>${html(wc("documentTitle"))}</p>
          <p class="price">${html(payload.pricing.preliminaryEstimateDisplay)}</p>
          <div class="meta">
            <div><strong>${wc("requestId")}</strong><br>${html(payload.requestId)}</div>
            <div><strong>${wc("market")}</strong><br>${html(payload.market.label)}</div>
            <div><strong>Submitted</strong><br>${html(payload.submittedDate)}, ${html(payload.submittedTime)}</div>
            <div><strong>${wc("interfaceLanguage")}</strong><br>${html(payload.interfaceLanguage.toUpperCase())}</div>
            <div><strong>${wc("name")}</strong><br>${html(payload.client.name)}</div>
            <div><strong>${wc("company")}</strong><br>${html(payload.client.companyName)}</div>
          </div>
          <h2>${wc("projectSummary")}</h2>
          <table>${answerRows}</table>
          <h2>${wc("estimateBreakdown")}</h2>
          <table>${breakdownRows}</table>
          <p><strong>${wc("optionalMonthlyServices")}:</strong> ${html(payload.pricing.monthlySupportDisplay)}</p>
          <p class="disclaimer">${html(wc("documentDisclaimer"))}</p>
          <p>${html(contactEmail)}</p>
          <script>window.addEventListener("load",()=>window.print());<\/script>
        </body>
      </html>`;
  }

  function openPrintableSummary(payload = lastSuccessfulPayload) {
    if (!payload) {
      return;
    }
    const summaryWindow = window.open("", "_blank", "noopener,noreferrer");
    if (!summaryWindow) {
      return;
    }
    summaryWindow.document.open();
    summaryWindow.document.write(printableSummary(payload));
    summaryWindow.document.close();
  }

  resultPanel.addEventListener(
    "submit",
    async (event) => {
      const form = event.target.closest("#requestForm");
      if (!form) {
        return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();

      const validationErrors = validateEnhancedForm(form);
      if (validationErrors.length) {
        return;
      }

      if (form.dataset.submitting === "true") {
        return;
      }

      const requestId = form.dataset.requestId || generateRequestId();
      form.dataset.requestId = requestId;
      const payload = buildPayload(form, requestId);

      setSubmitting(form, true);
      form.dataset.submitting = "true";

      try {
        await submitPayload(payload);
        showSuccess(form, payload);
      } catch (error) {
        showSubmissionError(form, error.message);
      } finally {
        form.dataset.submitting = "false";
        setSubmitting(form, false);
      }
    },
    true
  );

  resultPanel.addEventListener(
    "click",
    (event) => {
      const editButton = event.target.closest("[data-edit-step]");
      const downloadButton = event.target.closest('[data-action="download-summary"]');

      if (editButton) {
        event.preventDefault();
        event.stopImmediatePropagation();
        editStep(Number(editButton.dataset.editStep));
      }

      if (downloadButton) {
        event.preventDefault();
        event.stopImmediatePropagation();
        openPrintableSummary();
      }
    },
    true
  );

  if (ui.en) {
    ui.en.estimatedProjectCost = workflowCopy.en.preliminaryProjectEstimate;
    ui.en.finalCopy = workflowCopy.en.resultCopy;
    ui.en.finalEstimate = workflowCopy.en.preliminaryEstimate;
  }
  if (ui.uk) {
    ui.uk.estimatedProjectCost = workflowCopy.uk.preliminaryProjectEstimate;
    ui.uk.finalCopy = workflowCopy.uk.resultCopy;
    ui.uk.finalEstimate = workflowCopy.uk.preliminaryEstimate;
  }
  if (ui.pl) {
    ui.pl.estimatedProjectCost = workflowCopy.pl.preliminaryProjectEstimate;
    ui.pl.finalCopy = workflowCopy.pl.resultCopy;
    ui.pl.finalEstimate = workflowCopy.pl.preliminaryEstimate;
  }

  render();
})();
