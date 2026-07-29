(() => {
  const WORKFLOW_VERSION = "1.1";
  const FORM_VERSION = "2.0";
  const PRICING_MONTH = "2026-07-29";
  const API_ENDPOINT = "/api/submit-estimate";
  const telegramHandle = "@ohyanyo";
  const startedAt = Date.now();
  const MAX_INSPIRATION_LINKS = 8;
  let lastSuccessfulPayload = null;
  let formDraft = createEmptyFormDraft();

  function createEmptyFormDraft() {
    return {
      inspirationLinks: [""],
      brandMaterials: [],
      deadlineType: "no_fixed_date",
      contactConsent: false,
      privacyConsent: false
    };
  }

  const marketMap = {
    canada: {
      id: "canada",
      code: "CA",
      label: { en: "Canada", uk: "Канада", pl: "Kanada" },
      currencyCode: "CAD",
      displayCurrency: "CAD",
      roundingUnit: 50,
      pricingVersion: "CA-2026-07-29"
    },
    poland: {
      id: "poland",
      code: "PL",
      label: { en: "Poland", uk: "Польща", pl: "Polska" },
      currencyCode: "PLN",
      displayCurrency: "PLN",
      roundingUnit: 100,
      pricingVersion: "PL-2026-07-29"
    },
    ukraine: {
      id: "ukraine",
      code: "UA",
      label: { en: "Ukraine", uk: "Україна", pl: "Ukraina" },
      currencyCode: "UAH",
      displayCurrency: "грн",
      roundingUnit: 500,
      pricingVersion: "UA-2026-07-29"
    }
  };

  const workflowCopy = {
    en: {
      preliminaryProjectEstimate: "Preliminary project estimate",
      estimatedStartingPoint: "Estimated starting point",
      resultCopy:
        "This is an approximate calculator estimate. The final price can change depending on design direction, technical details, content and project nuances.",
      statusPreliminary: "Preliminary estimate",
      statusManual: "Manual review required",
      priceNoticeTitle: "Approximate price",
      priceNotice:
        "The calculator shows an approximate starting point, not a final offer. The exact price can differ depending on visual design, content, integrations, timing and other project details.",
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
      chooseNextStep: "Choose what you want to do next",
      viewOnlyTitle: "View the estimate only",
      viewOnlyCopy:
        "No request will be sent to me. You can use this approximate price for orientation and leave the page whenever you want.",
      viewOnlyButton: "View only, do not send",
      requestOptionTitle: "View and send a request",
      requestOptionCopy:
        "Send the calculator result and project details to me. I will review the request and contact you to clarify the order before confirming the final price.",
      openRequestForm: "Send a request",
      noRequestSent: "Nothing has been sent. You are only viewing the approximate estimate.",
      requestFinalQuote: "Request a final project quote",
      formIntro:
        "Send your project details for review. I will check the selected requirements, contact you to clarify the order if needed and confirm the exact project price before work begins.",
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
        "By sending this request, I agree that Yana Ellis may use the submitted information to review my project and contact me to clarify the order details.",
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
        "I contact you if any order details need clarification.",
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
      interfaceLanguage: "Interface language",
      inspirationTitle: "Do you have any visual references or inspiration?",
      inspirationDescription:
        "You can add links to websites, portfolios, Pinterest boards or other examples that reflect the style, structure or atmosphere you have in mind.",
      inspirationOptions: [
        { value: "has_references", label: "Yes, I have references" },
        { value: "no_references", label: "No, I do not have any yet" },
        { value: "propose_direction", label: "I would prefer you to propose the direction" }
      ],
      inspirationLinksTitle: "Inspiration links",
      addInspirationLink: "Add another link",
      removeLink: "Remove link",
      inspirationPlaceholder: "https://example.com",
      inspirationNotesLabel: "What do you like about these examples?",
      inspirationNotesHelp:
        "For example: colours, typography, page structure, animations, minimalism or overall atmosphere.",
      inspirationLinkError: "Please enter a valid http or https link.",
      brandMaterialsTitle: "Do you already have brand materials?",
      brandMaterialsOptions: [
        { value: "logo", label: "Logo" },
        { value: "brand_colours", label: "Brand colours" },
        { value: "fonts", label: "Fonts" },
        { value: "brand_guidelines", label: "Brand guidelines" },
        { value: "photos", label: "Photos" },
        { value: "illustrations", label: "Illustrations" },
        { value: "written_content", label: "Written content" },
        { value: "none", label: "None of these" },
        { value: "not_sure", label: "Not sure" }
      ],
      fileAvailabilityNote:
        "You do not need to upload all project materials now. I will ask for the necessary files after reviewing your request.",
      contactMethodQuestion: "How would you prefer me to contact you?",
      contactEmailOption: "Email",
      contactTelegramOption: "Telegram",
      contactWhatsAppOption: "WhatsApp",
      contactInstagramOption: "Instagram",
      telegramContact: "Telegram username",
      whatsappContact: "WhatsApp phone number",
      instagramContact: "Instagram username",
      contactDestinationHelp: "Use @username or a full profile link where relevant.",
      bestContactTime: "Best time to contact you - optional",
      bestContactTimePlaceholder: "Weekdays after 5 PM, morning Toronto time or any time by email.",
      requiredContactMethod: "Please choose how you would prefer me to contact you.",
      requiredContactDestination: "Please enter the contact details for the selected method.",
      invalidTelegram: "Please enter a Telegram @username or t.me link.",
      invalidWhatsApp: "Please enter a valid phone number. Include your country code if possible.",
      invalidInstagram: "Please enter an Instagram @username or instagram.com link.",
      contactConsent:
        "I agree that Yana Ellis may contact me by email or through the social media or messenger account I selected in order to discuss this project request.",
      privacyConsentBefore: "I have read the ",
      privacyPolicy: "Privacy Policy",
      privacyConsentAfter:
        " and agree that my submitted information may be processed to review and respond to this project request.",
      requiredContactConsent: "Please confirm that I may contact you about this request.",
      requiredPrivacyConsent: "Please confirm that you agree to the Privacy Policy.",
      contactExpectation:
        "After you submit the request, I will review the details and contact you using the method you selected. Submitting the form does not create a contract or payment obligation.",
      responseTime: "I usually respond within one business day.",
      deadlineTitle: "Is there a specific date by which the website must be ready?",
      deadlineOptions: [
        { value: "no_fixed_date", label: "No fixed date" },
        { value: "approximate_period", label: "Approximate period" },
        { value: "specific_date", label: "Specific date" }
      ],
      deadlineApproxLabel: "Approximate period",
      deadlineSpecificLabel: "Specific launch date",
      deadlineNotice:
        "The requested date is not guaranteed until I review the project scope and confirm availability.",
      budgetTitle: "Is the preliminary estimate within your expected budget?",
      budgetOptions: [
        { value: "yes", label: "Yes" },
        { value: "approximately", label: "Approximately" },
        { value: "reduce_scope", label: "No, I need to reduce the scope" },
        { value: "discuss", label: "I would like to discuss it" }
      ],
      projectStageTitle: "At what stage is your project?",
      projectStageOptions: [
        { value: "ready", label: "I am ready to begin" },
        { value: "comparing", label: "I am comparing options" },
        { value: "planning_later", label: "I am planning for later" },
        { value: "researching_cost", label: "I only want to understand the approximate cost" }
      ],
      referralTitle: "How did you find me?",
      referralOptions: [
        { value: "", label: "Select an option" },
        { value: "google", label: "Google" },
        { value: "kijiji", label: "Kijiji" },
        { value: "instagram", label: "Instagram" },
        { value: "telegram", label: "Telegram" },
        { value: "recommendation", label: "Recommendation" },
        { value: "portfolio_link", label: "Portfolio link" },
        { value: "other", label: "Other" }
      ],
      referralOtherLabel: "Other source",
      finalReviewTitle: "Review before sending",
      finalReviewEstimate: "Preliminary estimate",
      finalReviewMarket: "Market and currency",
      finalReviewWebsiteType: "Selected website type",
      finalReviewFeatures: "Main selected features",
      finalReviewContactMethod: "Preferred contact method",
      finalReviewContactDestination: "Contact destination",
      finalReviewInspirationLinks: "Inspiration links",
      finalReviewContactConsent: "Contact consent",
      finalReviewPrivacyConsent: "Privacy consent",
      editCalculatorAnswers: "Edit calculator answers",
      editContactDetails: "Edit contact details",
      editInspirationLinks: "Edit inspiration links",
      yes: "Yes",
      no: "No",
      notProvided: "Not provided"
    },
    uk: {
      preliminaryProjectEstimate: "Попередній розрахунок вартості",
      estimatedStartingPoint: "Орієнтовна початкова вартість",
      resultCopy:
        "Це приблизний розрахунок у калькуляторі. Фінальна вартість може змінюватися залежно від напряму дизайну, технічних деталей, контенту та нюансів проєкту.",
      statusPreliminary: "Попередній розрахунок",
      statusManual: "Потрібна індивідуальна оцінка",
      priceNoticeTitle: "Приблизна ціна",
      priceNotice:
        "Калькулятор показує приблизний орієнтир, а не фінальну пропозицію. Точна вартість може відрізнятися залежно від візуального дизайну, контенту, інтеграцій, термінів та інших деталей проєкту.",
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
      chooseNextStep: "Оберіть наступний крок",
      viewOnlyTitle: "Лише переглянути розрахунок",
      viewOnlyCopy:
        "Заявка не буде надіслана мені. Ви можете використати цю приблизну ціну як орієнтир і залишити сторінку, коли захочете.",
      viewOnlyButton: "Лише переглянути, не надсилати",
      requestOptionTitle: "Переглянути та надіслати заявку",
      requestOptionCopy:
        "Надішліть мені результат калькулятора та деталі проєкту. Я перегляну заявку та зв'яжуся з вами, щоб уточнити замовлення перед підтвердженням фінальної ціни.",
      openRequestForm: "Надіслати заявку",
      noRequestSent: "Нічого не надіслано. Ви лише переглядаєте приблизний розрахунок.",
      requestFinalQuote: "Отримати точну вартість проєкту",
      formIntro:
        "Надішліть деталі проєкту на перевірку. Я перегляну вибрані вимоги, за потреби зв'яжуся з вами для уточнення замовлення та підтверджу точну вартість до початку роботи.",
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
        "Надсилаючи цю заявку, я погоджуюся, що Yana Ellis може використати надану інформацію для розгляду мого проєкту та зв'язатися зі мною для уточнення деталей замовлення.",
      sendForReview: "Надіслати на перевірку",
      sending: "Надсилаємо заявку...",
      requiredName: "Будь ласка, введіть ваше ім'я.",
      requiredEmail: "Будь ласка, введіть коректну електронну адресу.",
      requiredCompany: "Будь ласка, вкажіть назву компанії або проєкту.",
      requiredDescription: "Коротко опишіть ваш проєкт.",
      requiredConsent: "Підтвердьте, що я можу використати цю інформацію для розгляду заявки та зв'язатися з вами для уточнення деталей замовлення.",
      sendError:
        "Не вдалося надіслати заявку. Відповіді калькулятора збережено. Спробуйте ще раз або зв'яжіться зі мною через email чи Telegram.",
      whatNextTitle: "Що буде далі?",
      nextSteps: [
        "Ви надсилаєте результати калькулятора та опис проєкту.",
        "Я переглядаю вибрані вимоги.",
        "За потреби уточнюю деталі замовлення.",
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
      interfaceLanguage: "Мова інтерфейсу",
      inspirationTitle: "Чи маєте ви візуальні приклади або референси?",
      inspirationDescription:
        "Ви можете додати посилання на сайти, портфоліо, дошки Pinterest або інші приклади, які передають бажаний стиль, структуру чи атмосферу.",
      inspirationOptions: [
        { value: "has_references", label: "Так, у мене є референси" },
        { value: "no_references", label: "Ні, поки що немає" },
        { value: "propose_direction", label: "Я хочу, щоб ви запропонували напрям" }
      ],
      inspirationLinksTitle: "Посилання на референси",
      addInspirationLink: "Додати ще одне посилання",
      removeLink: "Видалити посилання",
      inspirationPlaceholder: "https://example.com",
      inspirationNotesLabel: "Що саме вам подобається в цих прикладах?",
      inspirationNotesHelp:
        "Наприклад: кольори, типографіка, структура сторінки, анімації, мінімалізм або загальна атмосфера.",
      inspirationLinkError: "Будь ласка, введіть коректне http або https посилання.",
      brandMaterialsTitle: "Чи маєте ви готові матеріали бренду?",
      brandMaterialsOptions: [
        { value: "logo", label: "Логотип" },
        { value: "brand_colours", label: "Фірмові кольори" },
        { value: "fonts", label: "Шрифти" },
        { value: "brand_guidelines", label: "Брендбук" },
        { value: "photos", label: "Фотографії" },
        { value: "illustrations", label: "Ілюстрації" },
        { value: "written_content", label: "Готові тексти" },
        { value: "none", label: "Нічого з переліченого" },
        { value: "not_sure", label: "Не впевнена / не впевнений" }
      ],
      fileAvailabilityNote:
        "Вам не потрібно завантажувати всі матеріали проєкту зараз. Я попрошу необхідні файли після перегляду заявки.",
      contactMethodQuestion: "Як вам буде зручніше отримати відповідь?",
      contactEmailOption: "Email",
      contactTelegramOption: "Telegram",
      contactWhatsAppOption: "WhatsApp",
      contactInstagramOption: "Instagram",
      telegramContact: "Ім'я користувача Telegram",
      whatsappContact: "Номер телефону WhatsApp",
      instagramContact: "Ім'я користувача Instagram",
      contactDestinationHelp: "Вкажіть @username або повне посилання на профіль, якщо це доречно.",
      bestContactTime: "Зручний час для зв'язку - необов'язково",
      bestContactTimePlaceholder: "Будні після 17:00, ранок за часом Торонто або будь-коли email.",
      requiredContactMethod: "Будь ласка, оберіть зручний спосіб зв'язку.",
      requiredContactDestination: "Будь ласка, введіть контактні дані для обраного способу зв'язку.",
      invalidTelegram: "Введіть Telegram @username або посилання t.me.",
      invalidWhatsApp: "Введіть коректний номер телефону. За можливості додайте код країни.",
      invalidInstagram: "Введіть Instagram @username або посилання instagram.com.",
      contactConsent:
        "Я погоджуюся, що Яна Елліс може зв'язатися зі мною електронною поштою або через вибрану мною соціальну мережу чи месенджер для обговорення цієї заявки.",
      privacyConsentBefore: "Я ознайомилася / ознайомився з ",
      privacyPolicy: "Політикою конфіденційності",
      privacyConsentAfter:
        " та погоджуюся на обробку наданої інформації для розгляду цієї заявки й надання відповіді.",
      requiredContactConsent: "Підтвердіть, будь ласка, що я можу зв'язатися з вами щодо цієї заявки.",
      requiredPrivacyConsent: "Підтвердіть, будь ласка, згоду з Політикою конфіденційності.",
      contactExpectation:
        "Після надсилання заявки я перегляну деталі та зв'яжуся з вами вибраним способом. Надсилання форми не створює договору чи обов'язку здійснювати оплату.",
      responseTime: "Зазвичай я відповідаю протягом одного робочого дня.",
      deadlineTitle: "Чи є конкретна дата, до якої сайт має бути готовий?",
      deadlineOptions: [
        { value: "no_fixed_date", label: "Немає фіксованої дати" },
        { value: "approximate_period", label: "Приблизний період" },
        { value: "specific_date", label: "Конкретна дата" }
      ],
      deadlineApproxLabel: "Приблизний період",
      deadlineSpecificLabel: "Конкретна дата запуску",
      deadlineNotice:
        "Бажана дата не гарантується, доки я не перегляну обсяг проєкту та не підтверджу доступність.",
      budgetTitle: "Чи відповідає попередній розрахунок вашому бюджету?",
      budgetOptions: [
        { value: "yes", label: "Так" },
        { value: "approximately", label: "Приблизно" },
        { value: "reduce_scope", label: "Ні, потрібно зменшити обсяг" },
        { value: "discuss", label: "Я хочу це обговорити" }
      ],
      projectStageTitle: "На якому етапі зараз ваш проєкт?",
      projectStageOptions: [
        { value: "ready", label: "Я готова / готовий почати" },
        { value: "comparing", label: "Я порівнюю варіанти" },
        { value: "planning_later", label: "Я планую проєкт на майбутнє" },
        { value: "researching_cost", label: "Я лише хочу зрозуміти приблизну вартість" }
      ],
      referralTitle: "Як ви мене знайшли?",
      referralOptions: [
        { value: "", label: "Оберіть варіант" },
        { value: "google", label: "Google" },
        { value: "kijiji", label: "Kijiji" },
        { value: "instagram", label: "Instagram" },
        { value: "telegram", label: "Telegram" },
        { value: "recommendation", label: "Рекомендація" },
        { value: "portfolio_link", label: "Посилання на портфоліо" },
        { value: "other", label: "Інше" }
      ],
      referralOtherLabel: "Інше джерело",
      finalReviewTitle: "Перевірка перед надсиланням",
      finalReviewEstimate: "Попередній розрахунок",
      finalReviewMarket: "Ринок і валюта",
      finalReviewWebsiteType: "Обраний тип сайту",
      finalReviewFeatures: "Основні вибрані функції",
      finalReviewContactMethod: "Бажаний спосіб зв'язку",
      finalReviewContactDestination: "Контакт для відповіді",
      finalReviewInspirationLinks: "Посилання на референси",
      finalReviewContactConsent: "Згода на контакт",
      finalReviewPrivacyConsent: "Згода з політикою конфіденційності",
      editCalculatorAnswers: "Змінити відповіді калькулятора",
      editContactDetails: "Змінити контактні дані",
      editInspirationLinks: "Змінити референси",
      yes: "Так",
      no: "Ні",
      notProvided: "Не вказано"
    },
    pl: {
      preliminaryProjectEstimate: "Wstępna wycena projektu",
      estimatedStartingPoint: "Szacunkowy punkt wyjścia",
      resultCopy:
        "To przybliżona wycena z kalkulatora. Cena końcowa może się zmienić w zależności od kierunku projektu wizualnego, szczegółów technicznych, treści i niuansów projektu.",
      statusPreliminary: "Wstępna wycena",
      statusManual: "Wymagana indywidualna analiza",
      priceNoticeTitle: "Cena przybliżona",
      priceNotice:
        "Kalkulator pokazuje przybliżony punkt wyjścia, a nie ostateczną ofertę. Dokładna cena może się różnić w zależności od projektu wizualnego, treści, integracji, terminu i innych szczegółów.",
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
      chooseNextStep: "Wybierz następny krok",
      viewOnlyTitle: "Tylko zobacz wycenę",
      viewOnlyCopy:
        "Zapytanie nie zostanie do mnie wysłane. Możesz potraktować tę przybliżoną cenę orientacyjnie i opuścić stronę w dowolnym momencie.",
      viewOnlyButton: "Tylko zobacz, nie wysyłaj",
      requestOptionTitle: "Zobacz i wyślij zapytanie",
      requestOptionCopy:
        "Wyślij do mnie wynik kalkulatora i szczegóły projektu. Przeanalizuję zapytanie i skontaktuję się z Tobą, aby doprecyzować zamówienie przed potwierdzeniem ceny końcowej.",
      openRequestForm: "Wyślij zapytanie",
      noRequestSent: "Nic nie zostało wysłane. Oglądasz tylko przybliżoną wycenę.",
      requestFinalQuote: "Poproś o dokładną wycenę projektu",
      formIntro:
        "Wyślij szczegóły projektu do analizy. Sprawdzę wybrane wymagania, w razie potrzeby skontaktuję się z Tobą w celu doprecyzowania zamówienia i potwierdzę dokładną cenę przed rozpoczęciem pracy.",
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
        "Wysyłając to zapytanie, zgadzam się, aby Yana Ellis wykorzystała podane informacje do analizy mojego projektu i skontaktowała się ze mną w celu doprecyzowania zamówienia.",
      sendForReview: "Wyślij do analizy",
      sending: "Wysyłanie zapytania...",
      requiredName: "Wpisz swoje imię.",
      requiredEmail: "Wpisz poprawny adres e-mail.",
      requiredCompany: "Wpisz nazwę firmy lub projektu.",
      requiredDescription: "Krótko opisz swój projekt.",
      requiredConsent: "Potwierdź zgodę na wykorzystanie informacji do analizy zapytania i kontaktu w celu doprecyzowania zamówienia.",
      sendError:
        "Nie udało się wysłać zapytania. Odpowiedzi z kalkulatora zostały zachowane. Spróbuj ponownie lub skontaktuj się ze mną przez e-mail albo Telegram.",
      whatNextTitle: "Co stanie się dalej?",
      nextSteps: [
        "Wysyłasz wynik kalkulatora i opis projektu.",
        "Analizuję wybrane wymagania.",
        "W razie potrzeby kontaktuję się w celu doprecyzowania szczegółów zamówienia.",
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
      interfaceLanguage: "Język interfejsu",
      inspirationTitle: "Czy masz przykłady lub inspiracje wizualne?",
      inspirationDescription:
        "Możesz dodać linki do stron, portfolio, tablic Pinterest lub innych przykładów, które pokazują oczekiwany styl, strukturę albo atmosferę.",
      inspirationOptions: [
        { value: "has_references", label: "Tak, mam przykłady" },
        { value: "no_references", label: "Nie, jeszcze ich nie mam" },
        { value: "propose_direction", label: "Wolę, abyś zaproponowała kierunek" }
      ],
      inspirationLinksTitle: "Linki do inspiracji",
      addInspirationLink: "Dodaj kolejny link",
      removeLink: "Usuń link",
      inspirationPlaceholder: "https://example.com",
      inspirationNotesLabel: "Co podoba Ci się w tych przykładach?",
      inspirationNotesHelp:
        "Na przykład: kolory, typografia, struktura strony, animacje, minimalizm albo ogólna atmosfera.",
      inspirationLinkError: "Wpisz poprawny link http lub https.",
      brandMaterialsTitle: "Czy masz już materiały marki?",
      brandMaterialsOptions: [
        { value: "logo", label: "Logo" },
        { value: "brand_colours", label: "Kolory marki" },
        { value: "fonts", label: "Fonty" },
        { value: "brand_guidelines", label: "Księga identyfikacji" },
        { value: "photos", label: "Zdjęcia" },
        { value: "illustrations", label: "Ilustracje" },
        { value: "written_content", label: "Gotowe teksty" },
        { value: "none", label: "Żaden z powyższych" },
        { value: "not_sure", label: "Nie wiem" }
      ],
      fileAvailabilityNote:
        "Nie musisz teraz przesyłać wszystkich materiałów projektu. Poproszę o potrzebne pliki po przeanalizowaniu zapytania.",
      contactMethodQuestion: "W jaki sposób mam się z Tobą skontaktować?",
      contactEmailOption: "E-mail",
      contactTelegramOption: "Telegram",
      contactWhatsAppOption: "WhatsApp",
      contactInstagramOption: "Instagram",
      telegramContact: "Nazwa użytkownika Telegram",
      whatsappContact: "Numer telefonu WhatsApp",
      instagramContact: "Nazwa użytkownika Instagram",
      contactDestinationHelp: "Podaj @username lub pełny link do profilu, jeśli dotyczy.",
      bestContactTime: "Dogodna pora kontaktu - opcjonalnie",
      bestContactTimePlaceholder: "Dni robocze po 17:00, rano czasu Toronto albo dowolnie przez e-mail.",
      requiredContactMethod: "Wybierz preferowany sposób kontaktu.",
      requiredContactDestination: "Wpisz dane kontaktowe dla wybranej metody.",
      invalidTelegram: "Wpisz Telegram @username lub link t.me.",
      invalidWhatsApp: "Wpisz poprawny numer telefonu. Jeśli możesz, dodaj kod kraju.",
      invalidInstagram: "Wpisz Instagram @username lub link instagram.com.",
      contactConsent:
        "Wyrażam zgodę, aby Yana Ellis skontaktowała się ze mną przez e-mail albo za pośrednictwem wybranego przeze mnie komunikatora lub serwisu społecznościowego w celu omówienia tego zapytania.",
      privacyConsentBefore: "Zapoznałam się / zapoznałem się z ",
      privacyPolicy: "Polityką prywatności",
      privacyConsentAfter:
        " i wyrażam zgodę na przetwarzanie przesłanych informacji w celu analizy zapytania i udzielenia odpowiedzi.",
      requiredContactConsent: "Potwierdź, że mogę skontaktować się z Tobą w sprawie tego zapytania.",
      requiredPrivacyConsent: "Potwierdź zgodę na Politykę prywatności.",
      contactExpectation:
        "Po wysłaniu zapytania przeanalizuję szczegóły i skontaktuję się z Tobą w wybrany sposób. Wysłanie formularza nie oznacza zawarcia umowy ani obowiązku zapłaty.",
      responseTime: "Zazwyczaj odpowiadam w ciągu jednego dnia roboczego.",
      deadlineTitle: "Czy istnieje konkretna data, do której strona musi być gotowa?",
      deadlineOptions: [
        { value: "no_fixed_date", label: "Brak stałej daty" },
        { value: "approximate_period", label: "Przybliżony termin" },
        { value: "specific_date", label: "Konkretna data" }
      ],
      deadlineApproxLabel: "Przybliżony termin",
      deadlineSpecificLabel: "Konkretna data uruchomienia",
      deadlineNotice:
        "Wybrany termin nie jest gwarantowany, dopóki nie przeanalizuję zakresu projektu i nie potwierdzę dostępności.",
      budgetTitle: "Czy wstępna wycena mieści się w Twoim budżecie?",
      budgetOptions: [
        { value: "yes", label: "Tak" },
        { value: "approximately", label: "Mniej więcej" },
        { value: "reduce_scope", label: "Nie, muszę zmniejszyć zakres" },
        { value: "discuss", label: "Chcę to omówić" }
      ],
      projectStageTitle: "Na jakim etapie jest teraz Twój projekt?",
      projectStageOptions: [
        { value: "ready", label: "Jestem gotowa / gotowy rozpocząć" },
        { value: "comparing", label: "Porównuję dostępne opcje" },
        { value: "planning_later", label: "Planuję projekt na później" },
        { value: "researching_cost", label: "Chcę tylko poznać orientacyjny koszt" }
      ],
      referralTitle: "Skąd dowiedziałaś się / dowiedziałeś się o mnie?",
      referralOptions: [
        { value: "", label: "Wybierz opcję" },
        { value: "google", label: "Google" },
        { value: "kijiji", label: "Kijiji" },
        { value: "instagram", label: "Instagram" },
        { value: "telegram", label: "Telegram" },
        { value: "recommendation", label: "Polecenie" },
        { value: "portfolio_link", label: "Link do portfolio" },
        { value: "other", label: "Inne" }
      ],
      referralOtherLabel: "Inne źródło",
      finalReviewTitle: "Sprawdź przed wysłaniem",
      finalReviewEstimate: "Wstępna wycena",
      finalReviewMarket: "Rynek i waluta",
      finalReviewWebsiteType: "Wybrany rodzaj strony",
      finalReviewFeatures: "Główne wybrane funkcje",
      finalReviewContactMethod: "Preferowany kontakt",
      finalReviewContactDestination: "Dane kontaktowe",
      finalReviewInspirationLinks: "Linki do inspiracji",
      finalReviewContactConsent: "Zgoda na kontakt",
      finalReviewPrivacyConsent: "Zgoda na prywatność",
      editCalculatorAnswers: "Edytuj odpowiedzi kalkulatora",
      editContactDetails: "Edytuj dane kontaktowe",
      editInspirationLinks: "Edytuj inspiracje",
      yes: "Tak",
      no: "Nie",
      notProvided: "Nie podano"
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

  function buildPriceNotice() {
    return `
      <section class="price-notice" role="note">
        <h3>${wc("priceNoticeTitle")}</h3>
        <p>${wc("priceNotice")}</p>
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

  function buildSubmissionChoices() {
    return `
      <section class="submission-choice-section" aria-labelledby="submissionChoiceTitle">
        <h3 id="submissionChoiceTitle">${wc("chooseNextStep")}</h3>
        <div class="submission-choice-grid">
          <article class="submission-choice">
            <h4>${wc("viewOnlyTitle")}</h4>
            <p>${wc("viewOnlyCopy")}</p>
            <button class="calculator-button secondary" type="button" data-action="view-estimate-only">${wc("viewOnlyButton")}</button>
          </article>
          <article class="submission-choice is-primary">
            <h4>${wc("requestOptionTitle")}</h4>
            <p>${wc("requestOptionCopy")}</p>
            <button class="calculator-button" type="button" data-action="show-request-form">${wc("openRequestForm")}</button>
          </article>
        </div>
        <p class="choice-status" id="choiceStatus" role="status" aria-live="polite"></p>
      </section>
    `;
  }

  function copyOptions(key) {
    return workflowCopy[currentLanguage]?.[key] || workflowCopy.en[key] || [];
  }

  function optionLabel(key, value) {
    const option = copyOptions(key).find((item) => item.value === value);
    return option?.label || value || wc("notProvided");
  }

  function checkedAttribute(value, selectedValue) {
    return value === selectedValue ? "checked" : "";
  }

  function selectedAttribute(value, selectedValue) {
    return value === selectedValue ? "selected" : "";
  }

  function normalizeUrlInput(value) {
    const trimmed = String(value || "").trim();
    if (!trimmed) {
      return "";
    }

    const candidate = /^[a-z][a-z\d+.-]*:/i.test(trimmed) ? trimmed : `https://${trimmed}`;

    try {
      const url = new URL(candidate);
      if (url.protocol !== "http:" && url.protocol !== "https:") {
        return "";
      }
      return url.href;
    } catch (error) {
      return "";
    }
  }

  function normalizeTelegram(value) {
    const raw = String(value || "").trim();
    const urlMatch = raw.match(/^(?:https?:\/\/)?(?:www\.)?t\.me\/([A-Za-z0-9_]{5,32})\/?$/i);
    const username = (urlMatch ? urlMatch[1] : raw.replace(/^@/, "")).trim();
    return /^[A-Za-z0-9_]{5,32}$/.test(username) ? `@${username}` : "";
  }

  function normalizeInstagram(value) {
    const raw = String(value || "").trim();
    const urlMatch = raw.match(/^(?:https?:\/\/)?(?:www\.)?instagram\.com\/([A-Za-z0-9._]{1,30})\/?$/i);
    const username = (urlMatch ? urlMatch[1] : raw.replace(/^@/, "")).trim();
    return /^[A-Za-z0-9._]{1,30}$/.test(username) ? `@${username}` : "";
  }

  function normalizePhone(value) {
    const raw = String(value || "").trim();
    const hasPlus = raw.startsWith("+");
    const digits = raw.replace(/[^\d]/g, "");
    if (digits.length < 7 || digits.length > 16) {
      return "";
    }
    return `${hasPlus ? "+" : ""}${digits}`;
  }

  function collectInspirationLinks(form) {
    const rawLinks = Array.from(form.querySelectorAll('[name="inspirationLinks[]"]')).map((input) => input.value.trim());
    return rawLinks.length ? rawLinks.slice(0, MAX_INSPIRATION_LINKS) : [""];
  }

  function captureRequestFormDraft(form = resultPanel.querySelector("#requestForm")) {
    if (!form) {
      return;
    }

    const formData = new FormData(form);
    formDraft = {
      name: formValue(formData, "name"),
      email: formValue(formData, "email"),
      projectName: formValue(formData, "projectName"),
      phone: formValue(formData, "phone"),
      website: formValue(formData, "website"),
      description: formValue(formData, "description"),
      notes: formValue(formData, "notes"),
      inspirationPreference: formValue(formData, "inspirationPreference"),
      inspirationLinks: collectInspirationLinks(form),
      inspirationNotes: formValue(formData, "inspirationNotes"),
      brandMaterials: formData.getAll("brandMaterials").map(String),
      preferredContact: formValue(formData, "preferredContact"),
      telegram: formValue(formData, "telegram"),
      whatsapp: formValue(formData, "whatsapp"),
      instagram: formValue(formData, "instagram"),
      bestContactTime: formValue(formData, "bestContactTime"),
      deadlineType: formValue(formData, "deadlineType") || "no_fixed_date",
      deadlineApprox: formValue(formData, "deadlineApprox"),
      deadlineDate: formValue(formData, "deadlineDate"),
      budgetExpectation: formValue(formData, "budgetExpectation"),
      projectStage: formValue(formData, "projectStage"),
      referralSource: formValue(formData, "referralSource"),
      referralSourceOther: formValue(formData, "referralSourceOther"),
      contactConsent: formData.get("contactConsent") === "on",
      privacyConsent: formData.get("privacyConsent") === "on"
    };

    if (!formDraft.inspirationLinks.length) {
      formDraft.inspirationLinks = [""];
    }
  }

  function contactMethodLabel(method) {
    const labels = {
      Email: wc("contactEmailOption"),
      Telegram: wc("contactTelegramOption"),
      WhatsApp: wc("contactWhatsAppOption"),
      Instagram: wc("contactInstagramOption")
    };
    return labels[method] || wc("notProvided");
  }

  function contactDestination(formData) {
    const method = formValue(formData, "preferredContact");
    if (method === "Email") {
      return { raw: formValue(formData, "email"), normalized: formValue(formData, "email"), valid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValue(formData, "email")) };
    }
    if (method === "Telegram") {
      const raw = formValue(formData, "telegram");
      const normalized = normalizeTelegram(raw);
      return { raw, normalized, valid: Boolean(normalized) };
    }
    if (method === "WhatsApp") {
      const raw = formValue(formData, "whatsapp");
      const normalized = normalizePhone(raw);
      return { raw, normalized, valid: Boolean(normalized) };
    }
    if (method === "Instagram") {
      const raw = formValue(formData, "instagram");
      const normalized = normalizeInstagram(raw);
      return { raw, normalized, valid: Boolean(normalized) };
    }
    return { raw: "", normalized: "", valid: false };
  }

  function formList(key, selectedValue, name) {
    return copyOptions(key)
      .map(
        (option) => `
          <label class="choice-control">
            <input type="radio" name="${html(name)}" value="${html(option.value)}" ${checkedAttribute(option.value, selectedValue)} />
            <span>${html(option.label)}</span>
          </label>
        `
      )
      .join("");
  }

  function checkboxList(key, selectedValues, name) {
    return copyOptions(key)
      .map(
        (option) => `
          <label class="choice-control">
            <input type="checkbox" name="${html(name)}" value="${html(option.value)}" ${selectedValues.includes(option.value) ? "checked" : ""} />
            <span>${html(option.label)}</span>
          </label>
        `
      )
      .join("");
  }

  function buildInspirationFields() {
    const links = (formDraft.inspirationLinks?.length ? formDraft.inspirationLinks : [""]).slice(0, MAX_INSPIRATION_LINKS);
    const sectionHidden = formDraft.inspirationPreference === "has_references" ? "" : "hidden";
    const addDisabled = links.length >= MAX_INSPIRATION_LINKS ? "disabled" : "";

    return `
      <fieldset class="field full form-section" id="inspirationSection">
        <legend>${wc("inspirationTitle")}</legend>
        <p class="field-help">${wc("inspirationDescription")}</p>
        <div class="choice-list">
          ${formList("inspirationOptions", formDraft.inspirationPreference || "", "inspirationPreference")}
        </div>
        <div class="conditional-panel" id="inspirationLinksPanel" ${sectionHidden}>
          <h3>${wc("inspirationLinksTitle")}</h3>
          <div class="link-list" id="inspirationLinkList">
            ${links
              .map(
                (value, index) => `
                  <div class="link-row">
                    <input
                      name="inspirationLinks[]"
                      type="url"
                      inputmode="url"
                      placeholder="${wc("inspirationPlaceholder")}"
                      value="${html(value)}"
                      aria-describedby="inspirationLinkError${index}"
                    />
                    <button class="summary-edit" type="button" data-action="remove-inspiration-link" data-link-index="${index}" ${index === 0 ? "disabled" : ""} aria-label="${html(wc("removeLink"))}">
                      ${wc("removeLink")}
                    </button>
                    <span class="field-error" id="inspirationLinkError${index}"></span>
                  </div>
                `
              )
              .join("")}
          </div>
          <button class="calculator-button secondary small-button" type="button" data-action="add-inspiration-link" ${addDisabled}>
            ${wc("addInspirationLink")}
          </button>
          <div class="field">
            <label for="inspirationNotes">${wc("inspirationNotesLabel")}</label>
            <textarea id="inspirationNotes" name="inspirationNotes" aria-describedby="inspirationNotesHelp">${html(formDraft.inspirationNotes || "")}</textarea>
            <span class="field-help" id="inspirationNotesHelp">${wc("inspirationNotesHelp")}</span>
          </div>
        </div>
      </fieldset>
    `;
  }

  function buildExtraProjectFields() {
    return `
      ${buildInspirationFields()}
      <fieldset class="field full form-section" id="brandMaterialsSection">
        <legend>${wc("brandMaterialsTitle")}</legend>
        <div class="choice-list checkbox-grid">
          ${checkboxList("brandMaterialsOptions", formDraft.brandMaterials || [], "brandMaterials")}
        </div>
      </fieldset>
      <p class="form-note full" role="note">${wc("fileAvailabilityNote")}</p>
      <fieldset class="field full form-section" id="deadlineSection">
        <legend>${wc("deadlineTitle")}</legend>
        <div class="choice-list">
          ${formList("deadlineOptions", formDraft.deadlineType || "no_fixed_date", "deadlineType")}
        </div>
        <div class="conditional-panel" id="deadlineApproxPanel" ${formDraft.deadlineType === "approximate_period" ? "" : "hidden"}>
          <label for="deadlineApprox">${wc("deadlineApproxLabel")}</label>
          <input id="deadlineApprox" name="deadlineApprox" value="${html(formDraft.deadlineApprox || "")}" />
        </div>
        <div class="conditional-panel" id="deadlineDatePanel" ${formDraft.deadlineType === "specific_date" ? "" : "hidden"}>
          <label for="deadlineDate">${wc("deadlineSpecificLabel")}</label>
          <input id="deadlineDate" name="deadlineDate" type="date" value="${html(formDraft.deadlineDate || "")}" />
        </div>
        <p class="field-help">${wc("deadlineNotice")}</p>
      </fieldset>
      <fieldset class="field full form-section">
        <legend>${wc("budgetTitle")}</legend>
        <div class="choice-list">
          ${formList("budgetOptions", formDraft.budgetExpectation || "", "budgetExpectation")}
        </div>
      </fieldset>
      <fieldset class="field full form-section">
        <legend>${wc("projectStageTitle")}</legend>
        <div class="choice-list">
          ${formList("projectStageOptions", formDraft.projectStage || "", "projectStage")}
        </div>
      </fieldset>
      <div class="field full form-section">
        <label for="referralSource">${wc("referralTitle")}</label>
        <select id="referralSource" name="referralSource">
          ${copyOptions("referralOptions")
            .map((option) => `<option value="${html(option.value)}" ${selectedAttribute(option.value, formDraft.referralSource || "")}>${html(option.label)}</option>`)
            .join("")}
        </select>
        <div class="conditional-panel" id="referralOtherPanel" ${formDraft.referralSource === "other" ? "" : "hidden"}>
          <label for="referralSourceOther">${wc("referralOtherLabel")}</label>
          <input id="referralSourceOther" name="referralSourceOther" value="${html(formDraft.referralSourceOther || "")}" />
        </div>
      </div>
    `;
  }

  function buildPreferredContactFields() {
    const method = formDraft.preferredContact || "";
    return `
      <div class="field full">
        <label for="preferredContact">${wc("contactMethodQuestion")} *</label>
        <select id="preferredContact" name="preferredContact" required aria-describedby="preferredContactError">
          <option value="">${wc("notProvided")}</option>
          <option value="Email" ${selectedAttribute("Email", method)}>${wc("contactEmailOption")}</option>
          <option value="Telegram" ${selectedAttribute("Telegram", method)}>${wc("contactTelegramOption")}</option>
          <option value="WhatsApp" ${selectedAttribute("WhatsApp", method)}>${wc("contactWhatsAppOption")}</option>
          <option value="Instagram" ${selectedAttribute("Instagram", method)}>${wc("contactInstagramOption")}</option>
        </select>
        <span class="field-error" id="preferredContactError"></span>
      </div>
      <div class="field conditional-contact" data-contact-field="Telegram" ${method === "Telegram" ? "" : "hidden"}>
        <label for="telegramUsername">${wc("telegramContact")} *</label>
        <input id="telegramUsername" name="telegram" autocomplete="off" value="${html(formDraft.telegram || "")}" aria-describedby="telegramUsernameHelp telegramUsernameError" />
        <span class="field-help" id="telegramUsernameHelp">${wc("contactDestinationHelp")}</span>
        <span class="field-error" id="telegramUsernameError"></span>
      </div>
      <div class="field conditional-contact" data-contact-field="WhatsApp" ${method === "WhatsApp" ? "" : "hidden"}>
        <label for="whatsappNumber">${wc("whatsappContact")} *</label>
        <input id="whatsappNumber" name="whatsapp" autocomplete="tel" value="${html(formDraft.whatsapp || "")}" aria-describedby="whatsappNumberError" />
        <span class="field-error" id="whatsappNumberError"></span>
      </div>
      <div class="field conditional-contact" data-contact-field="Instagram" ${method === "Instagram" ? "" : "hidden"}>
        <label for="instagramUsername">${wc("instagramContact")} *</label>
        <input id="instagramUsername" name="instagram" autocomplete="off" value="${html(formDraft.instagram || "")}" aria-describedby="instagramUsernameHelp instagramUsernameError" />
        <span class="field-help" id="instagramUsernameHelp">${wc("contactDestinationHelp")}</span>
        <span class="field-error" id="instagramUsernameError"></span>
      </div>
      <div class="field full">
        <label for="bestContactTime">${wc("bestContactTime")}</label>
        <input id="bestContactTime" name="bestContactTime" value="${html(formDraft.bestContactTime || "")}" placeholder="${html(wc("bestContactTimePlaceholder"))}" />
      </div>
    `;
  }

  function mainFeatureSummary() {
    return selectedAnswerObjects()
      .slice(2, 8)
      .flatMap(({ selected }) => selected.map((option) => getText(option.title)))
      .slice(0, 6);
  }

  function buildFinalReview(calculation) {
    const method = formDraft.preferredContact || "";
    const destination =
      method === "Email"
        ? formDraft.email
        : method === "Telegram"
          ? formDraft.telegram
          : method === "WhatsApp"
            ? formDraft.whatsapp
            : method === "Instagram"
              ? formDraft.instagram
              : "";
    const websiteType = selectedAnswerObjects()[0]?.selected?.[0];
    const features = mainFeatureSummary();
    const inspirationCount = (formDraft.inspirationLinks || []).filter((value) => value.trim()).length;

    const rows = [
      [wc("finalReviewEstimate"), resultAmount(calculation)],
      [wc("finalReviewMarket"), `${localMarketLabel()} / ${marketConfig().currencyCode}`],
      [wc("finalReviewWebsiteType"), websiteType ? getText(websiteType.title) : wc("notProvided")],
      [wc("finalReviewFeatures"), features.length ? features.join(", ") : wc("notProvided")],
      [wc("finalReviewContactMethod"), contactMethodLabel(method)],
      [wc("finalReviewContactDestination"), destination || wc("notProvided")],
      [wc("finalReviewInspirationLinks"), String(inspirationCount)],
      [wc("finalReviewContactConsent"), formDraft.contactConsent ? wc("yes") : wc("no")],
      [wc("finalReviewPrivacyConsent"), formDraft.privacyConsent ? wc("yes") : wc("no")]
    ];

    return `
      <section class="final-review" id="finalReview" aria-labelledby="finalReviewTitle">
        <h3 id="finalReviewTitle">${wc("finalReviewTitle")}</h3>
        <dl>
          ${rows.map(([label, value]) => `<div><dt>${html(label)}</dt><dd>${html(value)}</dd></div>`).join("")}
        </dl>
        <div class="review-actions">
          <button class="summary-edit" type="button" data-action="edit-calculator-answers">${wc("editCalculatorAnswers")}</button>
          <button class="summary-edit" type="button" data-action="scroll-to-contact">${wc("editContactDetails")}</button>
          <button class="summary-edit" type="button" data-action="scroll-to-inspiration">${wc("editInspirationLinks")}</button>
        </div>
      </section>
    `;
  }

  buildContactForm = function buildEnhancedContactForm() {
    const calculation = calculateDetailedEstimate();

    return `
      <form class="request-form" id="requestForm" novalidate data-started-at="${startedAt}" hidden>
        <div>
          <h2 class="form-title">${wc("requestFinalQuote")}</h2>
          <p class="form-help">${wc("formIntro")}</p>
        </div>
        ${buildNextSteps()}
        <div class="form-error-summary" id="formErrorSummary" role="alert" tabindex="-1" hidden></div>
        <div class="form-grid">
          <div class="field hp-field" aria-hidden="true">
            <label for="companyWebsite">Company website</label>
            <input id="companyWebsite" name="companyWebsite" tabindex="-1" autocomplete="off" />
          </div>
          ${buildExtraProjectFields()}
          <div class="field">
            <label for="clientName">${wc("name")} *</label>
            <input id="clientName" name="name" autocomplete="name" required value="${html(formDraft.name || "")}" aria-describedby="clientNameError" />
            <span class="field-error" id="clientNameError"></span>
          </div>
          <div class="field">
            <label for="clientEmail">${wc("email")} *</label>
            <input id="clientEmail" name="email" type="email" autocomplete="email" required value="${html(formDraft.email || "")}" aria-describedby="clientEmailError" />
            <span class="field-error" id="clientEmailError"></span>
          </div>
          <div class="field">
            <label for="projectName">${wc("company")} *</label>
            <input id="projectName" name="projectName" required value="${html(formDraft.projectName || "")}" aria-describedby="projectNameError" />
            <span class="field-error" id="projectNameError"></span>
          </div>
          <div class="field">
            <label for="clientPhone">${wc("phone")}</label>
            <input id="clientPhone" name="phone" autocomplete="tel" value="${html(formDraft.phone || "")}" />
          </div>
          <div class="field">
            <label for="currentWebsite">${wc("website")}</label>
            <input id="currentWebsite" name="website" type="url" inputmode="url" value="${html(formDraft.website || "")}" />
          </div>
          ${buildPreferredContactFields()}
          <div class="field full">
            <label for="projectDescription">${wc("description")} *</label>
            <textarea id="projectDescription" name="description" required aria-describedby="projectDescriptionHelp projectDescriptionError">${html(formDraft.description || "")}</textarea>
            <span class="field-help" id="projectDescriptionHelp">${wc("descriptionHelp")}</span>
            <span class="field-error" id="projectDescriptionError"></span>
          </div>
          <div class="field full">
            <label for="additionalNotes">${wc("notes")}</label>
            <textarea id="additionalNotes" name="notes">${html(formDraft.notes || "")}</textarea>
          </div>
          <div class="field full consent-field">
            <label for="contactConsentCheckbox">
              <input id="contactConsentCheckbox" name="contactConsent" type="checkbox" required ${formDraft.contactConsent ? "checked" : ""} aria-describedby="contactConsentCheckboxError" />
              <span>${wc("contactConsent")}</span>
            </label>
            <span class="field-error" id="contactConsentCheckboxError"></span>
          </div>
          <div class="field full consent-field">
            <label for="privacyConsentCheckbox">
              <input id="privacyConsentCheckbox" name="privacyConsent" type="checkbox" required ${formDraft.privacyConsent ? "checked" : ""} aria-describedby="privacyConsentCheckboxError" />
              <span>${wc("privacyConsentBefore")}<a href="/privacy-policy.html" target="_blank" rel="noopener noreferrer">${wc("privacyPolicy")}</a>${wc("privacyConsentAfter")}</span>
            </label>
            <span class="field-error" id="privacyConsentCheckboxError"></span>
          </div>
        </div>
        <div class="submit-notice" role="note">
          <p>${wc("contactExpectation")}</p>
          <p>${wc("responseTime")}</p>
        </div>
        ${buildFinalReview(calculation)}
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
          ${buildPriceNotice()}
          ${buildProjectSummary(calculation)}
          ${buildMonthlyBlock(calculation)}
          ${buildManualNotice(calculation)}
          ${buildSubmissionChoices()}
          ${buildContactForm()}
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
    captureRequestFormDraft();
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

  function refreshRequestForm(focusSelector = "") {
    const form = resultPanel.querySelector("#requestForm");
    if (!form) {
      return;
    }

    form.outerHTML = buildContactForm();
    const nextForm = resultPanel.querySelector("#requestForm");
    if (!nextForm) {
      return;
    }
    nextForm.hidden = false;
    if (focusSelector) {
      window.setTimeout(() => nextForm.querySelector(focusSelector)?.focus(), 50);
    }
  }

  function updateFinalReview(form) {
    captureRequestFormDraft(form);
    const review = form.querySelector("#finalReview");
    if (review) {
      review.outerHTML = buildFinalReview(calculateDetailedEstimate());
    }
  }

  function updateConditionalSections(form) {
    const formData = new FormData(form);
    const inspirationPanel = form.querySelector("#inspirationLinksPanel");
    if (inspirationPanel) {
      inspirationPanel.hidden = formValue(formData, "inspirationPreference") !== "has_references";
    }

    const preferredContact = formValue(formData, "preferredContact");
    form.querySelectorAll("[data-contact-field]").forEach((field) => {
      field.hidden = field.dataset.contactField !== preferredContact;
    });

    const deadlineType = formValue(formData, "deadlineType") || "no_fixed_date";
    const approxPanel = form.querySelector("#deadlineApproxPanel");
    const datePanel = form.querySelector("#deadlineDatePanel");
    if (approxPanel) {
      approxPanel.hidden = deadlineType !== "approximate_period";
    }
    if (datePanel) {
      datePanel.hidden = deadlineType !== "specific_date";
    }

    const referralPanel = form.querySelector("#referralOtherPanel");
    if (referralPanel) {
      referralPanel.hidden = formValue(formData, "referralSource") !== "other";
    }
  }

  function enforceBrandMaterialRules(changedInput, form) {
    if (changedInput.name !== "brandMaterials" || !changedInput.checked) {
      return;
    }

    const checkboxes = Array.from(form.querySelectorAll('input[name="brandMaterials"]'));
    if (changedInput.value === "none" || changedInput.value === "not_sure") {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = checkbox === changedInput;
      });
      return;
    }

    checkboxes.forEach((checkbox) => {
      if (checkbox.value === "none" || checkbox.value === "not_sure") {
        checkbox.checked = false;
      }
    });
  }

  function inspirationLinksForSubmission(form) {
    return Array.from(form.querySelectorAll('[name="inspirationLinks[]"]')).map((input) => ({
      input,
      raw: input.value.trim(),
      normalized: normalizeUrlInput(input.value)
    }));
  }

  function validateEnhancedForm(form) {
    clearErrors(form);
    const formData = new FormData(form);
    const errors = [];
    const email = formValue(formData, "email");
    const selectedContactMethod = formValue(formData, "preferredContact");
    const contact = contactDestination(formData);

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

    if (!selectedContactMethod) {
      errors.push(wc("requiredContactMethod"));
      setFieldError(form, "preferredContact", "preferredContactError", wc("requiredContactMethod"));
    } else if (!contact.valid) {
      const methodErrors = {
        Telegram: ["telegramUsername", "telegramUsernameError", wc("invalidTelegram")],
        WhatsApp: ["whatsappNumber", "whatsappNumberError", wc("invalidWhatsApp")],
        Instagram: ["instagramUsername", "instagramUsernameError", wc("invalidInstagram")],
        Email: ["clientEmail", "clientEmailError", wc("requiredEmail")]
      };
      const [fieldId, errorId, message] = methodErrors[selectedContactMethod] || ["preferredContact", "preferredContactError", wc("requiredContactDestination")];
      errors.push(message);
      setFieldError(form, fieldId, errorId, message);
    }

    inspirationLinksForSubmission(form).forEach(({ input, raw, normalized }, index) => {
      if (raw && !normalized) {
        errors.push(wc("inspirationLinkError"));
        input.setAttribute("aria-invalid", "true");
        const error = form.querySelector(`#inspirationLinkError${index}`);
        if (error) {
          error.textContent = wc("inspirationLinkError");
        }
      }
    });

    if (formData.get("contactConsent") !== "on") {
      errors.push(wc("requiredContactConsent"));
      setFieldError(form, "contactConsentCheckbox", "contactConsentCheckboxError", wc("requiredContactConsent"));
    }

    if (formData.get("privacyConsent") !== "on") {
      errors.push(wc("requiredPrivacyConsent"));
      setFieldError(form, "privacyConsentCheckbox", "privacyConsentCheckboxError", wc("requiredPrivacyConsent"));
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
    captureRequestFormDraft(form);
    const formData = new FormData(form);
    const calculation = calculateDetailedEstimate();
    const market = marketConfig();
    const now = new Date();
    const contact = contactDestination(formData);
    const inspirationLinks = inspirationLinksForSubmission(form)
      .filter(({ normalized }) => Boolean(normalized))
      .map(({ raw, normalized }) => ({ raw, url: normalized }));
    const inspirationPreference = formValue(formData, "inspirationPreference");
    const brandMaterialValues = formData.getAll("brandMaterials").map(String);
    const deadlineType = formValue(formData, "deadlineType") || "no_fixed_date";
    const budgetExpectation = formValue(formData, "budgetExpectation");
    const projectStage = formValue(formData, "projectStage");
    const referralSource = formValue(formData, "referralSource");

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
        whatsapp: formValue(formData, "whatsapp"),
        instagram: formValue(formData, "instagram"),
        companyName: formValue(formData, "projectName"),
        currentWebsite: formValue(formData, "website"),
        preferredContact: formValue(formData, "preferredContact"),
        preferredContactLabel: contactMethodLabel(formValue(formData, "preferredContact")),
        contactDestination: contact.normalized,
        contactDestinationRaw: contact.raw,
        bestContactTime: formValue(formData, "bestContactTime"),
        preferredStartDate: "",
        projectDescription: formValue(formData, "description"),
        additionalNotes: formValue(formData, "notes"),
        contactConsent: formData.get("contactConsent") === "on",
        privacyConsent: formData.get("privacyConsent") === "on",
        consent: formData.get("contactConsent") === "on" && formData.get("privacyConsent") === "on"
      },
      inspiration: {
        preference: inspirationPreference,
        preferenceLabel: inspirationPreference ? optionLabel("inspirationOptions", inspirationPreference) : wc("notProvided"),
        links: inspirationLinks,
        notes: formValue(formData, "inspirationNotes")
      },
      brandMaterials: {
        selected: brandMaterialValues,
        labels: brandMaterialValues.map((value) => optionLabel("brandMaterialsOptions", value))
      },
      deadline: {
        type: deadlineType,
        typeLabel: optionLabel("deadlineOptions", deadlineType),
        approximatePeriod: formValue(formData, "deadlineApprox"),
        specificDate: formValue(formData, "deadlineDate"),
        availabilityConfirmed: false
      },
      budget: {
        expectation: budgetExpectation,
        expectationLabel: budgetExpectation ? optionLabel("budgetOptions", budgetExpectation) : wc("notProvided"),
        reviewRequested: budgetExpectation === "reduce_scope"
      },
      projectStage: {
        stage: projectStage,
        stageLabel: projectStage ? optionLabel("projectStageOptions", projectStage) : wc("notProvided")
      },
      referral: {
        source: referralSource,
        sourceLabel: referralSource ? optionLabel("referralOptions", referralSource) : wc("notProvided"),
        other: formValue(formData, "referralSourceOther")
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
        customQuote: calculation.customQuote,
        budgetReviewRequested: budgetExpectation === "reduce_scope"
      },
      visibleSummary: {
        answers: answerSummaryLines(calculation),
        breakdown: calculation.breakdownRows
          .map((row) => `${row.category}: ${row.option} - ${row.effect}`)
          .join("\n"),
        contactPreference: `${contactMethodLabel(formValue(formData, "preferredContact"))}: ${contact.normalized || contact.raw || wc("notProvided")}`,
        inspirationLinks: inspirationLinks.map((item) => item.url).join("\n")
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

  function setChoiceStatus(message) {
    const status = resultPanel.querySelector("#choiceStatus");
    if (status) {
      status.textContent = message;
    }
  }

  function hideRequestForm() {
    const form = resultPanel.querySelector("#requestForm");
    if (form) {
      captureRequestFormDraft(form);
      form.hidden = true;
    }
  }

  function showRequestForm() {
    const form = resultPanel.querySelector("#requestForm");
    if (!form) {
      return;
    }

    form.hidden = false;
    updateConditionalSections(form);
    updateFinalReview(form);
    setChoiceStatus("");
    form.scrollIntoView({ block: "start", behavior: "smooth" });
    window.setTimeout(() => form.querySelector("#clientName")?.focus(), 250);
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

  resultPanel.addEventListener("input", (event) => {
    const form = event.target.closest("#requestForm");
    if (!form) {
      return;
    }

    updateFinalReview(form);
  });

  resultPanel.addEventListener("change", (event) => {
    const form = event.target.closest("#requestForm");
    if (!form) {
      return;
    }

    if (event.target.matches('input[name="brandMaterials"]')) {
      enforceBrandMaterialRules(event.target, form);
    }

    updateConditionalSections(form);
    updateFinalReview(form);
  });

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
      const showFormButton = event.target.closest('[data-action="show-request-form"]');
      const viewOnlyButton = event.target.closest('[data-action="view-estimate-only"]');
      const addLinkButton = event.target.closest('[data-action="add-inspiration-link"]');
      const removeLinkButton = event.target.closest('[data-action="remove-inspiration-link"]');
      const editCalculatorButton = event.target.closest('[data-action="edit-calculator-answers"]');
      const scrollContactButton = event.target.closest('[data-action="scroll-to-contact"]');
      const scrollInspirationButton = event.target.closest('[data-action="scroll-to-inspiration"]');
      const restartButton = event.target.closest('[data-action="restart"]');
      const backToLastButton = event.target.closest('[data-action="back-to-last"]');

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

      if (showFormButton) {
        event.preventDefault();
        event.stopImmediatePropagation();
        showRequestForm();
      }

      if (viewOnlyButton) {
        event.preventDefault();
        event.stopImmediatePropagation();
        hideRequestForm();
        setChoiceStatus(wc("noRequestSent"));
      }

      if (restartButton) {
        formDraft = createEmptyFormDraft();
      }

      if (backToLastButton) {
        captureRequestFormDraft();
      }

      if (addLinkButton) {
        event.preventDefault();
        event.stopImmediatePropagation();
        const form = addLinkButton.closest("#requestForm");
        captureRequestFormDraft(form);
        if (formDraft.inspirationLinks.length < MAX_INSPIRATION_LINKS) {
          formDraft.inspirationLinks.push("");
          refreshRequestForm('#inspirationLinkList .link-row:last-child input');
        }
      }

      if (removeLinkButton) {
        event.preventDefault();
        event.stopImmediatePropagation();
        const form = removeLinkButton.closest("#requestForm");
        const index = Number(removeLinkButton.dataset.linkIndex);
        captureRequestFormDraft(form);
        formDraft.inspirationLinks.splice(index, 1);
        if (!formDraft.inspirationLinks.length) {
          formDraft.inspirationLinks = [""];
        }
        refreshRequestForm("#inspirationLinkList input");
      }

      if (editCalculatorButton) {
        event.preventDefault();
        event.stopImmediatePropagation();
        editStep(getQuestions().length - 1);
      }

      if (scrollContactButton) {
        event.preventDefault();
        event.stopImmediatePropagation();
        resultPanel.querySelector("#clientName")?.scrollIntoView({ block: "center", behavior: "smooth" });
      }

      if (scrollInspirationButton) {
        event.preventDefault();
        event.stopImmediatePropagation();
        resultPanel.querySelector("#inspirationSection")?.scrollIntoView({ block: "center", behavior: "smooth" });
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
