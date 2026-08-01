const siteConfig = window.YANA_SITE_CONFIG;
const supportedLanguages = ["en", "uk", "pl"];
const languageKey = "yana-ellis-language";

const sharedLabels = {
  en: {
    portfolio: "Portfolio",
    calculator: "Calculator",
    projectGuide: "Project Guide",
    faq: "FAQ",
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact",
    telegram: "Telegram",
    email: "Email",
    readMore: "Read more",
    footerText:
      "Website project information for clients who want a clear written process before requesting a final quote.",
    ctaTitle: "Ready to estimate your website?",
    ctaText:
      "Use the calculator to view an approximate price, then choose whether to send the request for review.",
    ctaPrimary: "Open calculator",
    ctaSecondary: "Contact Yana"
  },
  uk: {
    portfolio: "Портфоліо",
    calculator: "Калькулятор",
    projectGuide: "Гайд проєкту",
    faq: "FAQ",
    privacy: "Конфіденційність",
    terms: "Умови",
    contact: "Контакт",
    telegram: "Telegram",
    email: "Email",
    readMore: "Читати більше",
    footerText:
      "Інформація про процес створення сайту для клієнтів, які хочуть зрозумілий письмовий порядок роботи перед фінальною пропозицією.",
    ctaTitle: "Готові оцінити сайт?",
    ctaText:
      "Скористайтеся калькулятором, щоб побачити приблизну вартість, а потім оберіть, чи надсилати заявку на перегляд.",
    ctaPrimary: "Відкрити калькулятор",
    ctaSecondary: "Написати Yana"
  },
  pl: {
    portfolio: "Portfolio",
    calculator: "Kalkulator",
    projectGuide: "Przewodnik",
    faq: "FAQ",
    privacy: "Prywatność",
    terms: "Regulamin",
    contact: "Kontakt",
    telegram: "Telegram",
    email: "Email",
    readMore: "Czytaj więcej",
    footerText:
      "Informacje o procesie projektu strony dla klientów, którzy chcą jasnych zasad przed finalną ofertą.",
    ctaTitle: "Chcesz oszacować stronę?",
    ctaText:
      "Skorzystaj z kalkulatora, aby zobaczyć orientacyjną cenę, a potem zdecyduj, czy wysłać zapytanie do analizy.",
    ctaPrimary: "Otwórz kalkulator",
    ctaSecondary: "Napisz do Yany"
  }
};

const pages = {
  projectGuide: {
    title: {
      en: "Website Project Guide | Yana Ellis",
      uk: "Гайд по проєкту сайту | Yana Ellis",
      pl: "Przewodnik po projekcie strony | Yana Ellis"
    },
    description: {
      en: "How website projects work with Yana Ellis: calculator, review, payment, revisions, launch, support, pauses and designer credit discount conditions.",
      uk: "Як проходить створення сайту з Yana Ellis: калькулятор, перегляд заявки, оплата, правки, запуск, підтримка та умови знижки.",
      pl: "Jak wygląda projekt strony z Yaną Ellis: kalkulator, analiza, płatności, poprawki, start, wsparcie, pauzy i warunki rabatu za kredyt projektantki."
    },
    kicker: {
      en: "Project Guide",
      uk: "Гайд проєкту",
      pl: "Przewodnik"
    },
    heading: {
      en: "How the Project Works",
      uk: "Як проходить проєкт",
      pl: "Jak wygląda projekt"
    },
    intro: {
      en:
        "From the first calculator answer to final launch and payment. The process is built around written information first, so you can understand the approximate price, send a structured request and receive a final proposal without a mandatory call.",
      uk:
        "Від першої відповіді в калькуляторі до запуску сайту й оплати. Процес побудований навколо письмової інформації, щоб ви могли зрозуміти приблизну вартість, надіслати структуровану заявку й отримати фінальну пропозицію без обов'язкового дзвінка.",
      pl:
        "Od pierwszej odpowiedzi w kalkulatorze po finalny start i płatność. Proces opiera się najpierw na informacjach pisemnych, aby można było poznać orientacyjną cenę, wysłać uporządkowane zapytanie i otrzymać finalną ofertę bez obowiązkowej rozmowy."
    },
    anchors: {
      en: ["Process", "Communication", "Payment", "Revisions", "Designer Credit", "If Things Pause", "FAQ", "Privacy", "Terms"],
      uk: ["Процес", "Комунікація", "Оплата", "Правки", "Дизайнерський кредит", "Якщо є пауза", "FAQ", "Приватність", "Умови"],
      pl: ["Proces", "Komunikacja", "Płatność", "Poprawki", "Kredyt projektantki", "Gdy projekt staje", "FAQ", "Prywatność", "Regulamin"]
    },
    processTitle: {
      en: "Process",
      uk: "Процес",
      pl: "Proces"
    },
    processSteps: {
      en: [
        ["Explore the portfolio", "Review selected projects to understand the visual direction, interaction quality, responsive layouts and full website delivery approach. Portfolio work is used as evidence of style and process, not as a template copied into your project."],
        ["Complete the website calculator", "Answer practical questions about purpose, page count, content, visual design, animations, languages, timeline and support. The calculator creates a preliminary estimate and a structured project summary."],
        ["Review the preliminary estimate", "The amount is approximate. The final price may change after I review design complexity, content volume, integrations, technical details and other project nuances."],
        ["Send the project request", "You can view the estimate only, or send the calculator results with contact details. Sending the request means I may contact you to clarify the order before preparing a final proposal."],
        ["Personal review within 1-2 business days", "I normally review new requests within 1-2 business days. I check selected requirements, complexity, timeline, available materials, designer credit conditions and possible conflicts in scope."],
        ["Clarifying questions", "I contact you through your selected channel. Calls are optional unless the project cannot reasonably be clarified in writing. Most projects can be discussed by email or Telegram."],
        ["Final proposal and scope", "After clarification, you receive a written proposal with confirmed scope, final price, schedule, payment plan, included revisions, required materials, third-party costs and special conditions."],
        ["Payment and project reservation", "Work begins only after you approve the proposal and the first payment has cleared. Payment can be arranged through Payoneer, Wise or bank transfer, depending on availability."],
        ["Content and access collection", "You provide the required logo files, brand colours, text, photos, translations, legal business details, hosting access or third-party service access. You do not need to upload all files inside the calculator."],
        ["Structure and design direction", "I prepare the information structure and visual direction. Depending on the project, this can include a sitemap, wireframes, key screens or a design concept."],
        ["Design and revision rounds", "The proposal states how many revision rounds are included. A revision round means one organised list of reasonable changes to the current stage."],
        ["Development", "After design approval, the website is built responsively for the agreed screen sizes. Development can include forms, CMS, calculators, booking tools, filters, galleries and integrations if included in scope."],
        ["Testing", "The website is tested for responsive behaviour, navigation, forms, links, browser compatibility and agreed functionality."],
        ["Final approval and remaining payment", "The remaining balance and approved additional work must be paid before public launch, production transfer or unrestricted administrator access."],
        ["Launch and transfer", "After final approval and payment, the website is connected to the agreed domain and hosting environment. Where included, you receive basic editing instructions and relevant credentials."],
        ["Post-launch support", "A short bug-fix period may be included in the proposal. It covers errors in delivered functionality, not new content, new features or changed design decisions."]
      ],
      uk: [
        ["Перегляньте портфоліо", "Оцініть вибрані проєкти, щоб зрозуміти візуальний напрям, якість взаємодій, адаптивність і підхід до повної реалізації сайту. Портфоліо показує стиль і процес, але не копіюється як шаблон."],
        ["Заповніть калькулятор", "Дайте відповіді про мету сайту, кількість сторінок, контент, дизайн, анімації, мови, терміни й підтримку. Калькулятор формує попередню оцінку та структурований опис проєкту."],
        ["Перегляньте попередню вартість", "Сума є приблизною. Фінальна ціна може змінитися після перегляду складності дизайну, обсягу контенту, інтеграцій, технічних деталей та інших нюансів."],
        ["Надішліть заявку", "Можна лише подивитися оцінку або надіслати результати калькулятора з контактами. Надсилання заявки означає, що я можу написати вам для уточнення замовлення."],
        ["Особистий перегляд за 1-2 робочі дні", "Зазвичай я переглядаю нові заявки протягом 1-2 робочих днів: перевіряю вимоги, складність, терміни, матеріали, умови знижки та можливі конфлікти в обсязі."],
        ["Уточнювальні питання", "Я пишу через вибраний канал. Дзвінки не обов'язкові, якщо проєкт можна уточнити письмово. Більшість проєктів можна обговорити email або Telegram."],
        ["Фінальна пропозиція та обсяг", "Після уточнення ви отримуєте письмову пропозицію з підтвердженим обсягом, ціною, графіком, оплатою, правками, матеріалами, сторонніми витратами й особливими умовами."],
        ["Оплата і резервування проєкту", "Робота починається після вашого підтвердження пропозиції та надходження першого платежу. Оплата можлива через Payoneer, Wise або банківський переказ залежно від доступності."],
        ["Збір контенту та доступів", "Ви надаєте логотип, кольори, тексти, фото, переклади, юридичні дані бізнесу, доступ до хостингу або сторонніх сервісів. У калькулятор не потрібно завантажувати всі файли."],
        ["Структура і дизайн-напрям", "Я готую структуру інформації та візуальний напрям. Залежно від проєкту це може бути карта сайту, каркаси екранів, ключові екрани або дизайн-концепт."],
        ["Дизайн і раунди правок", "У пропозиції вказано кількість раундів. Один раунд - це один організований список розумних змін до поточного етапу."],
        ["Розробка", "Після затвердження дизайну сайт адаптивно реалізується для погоджених екранів. У розробку можуть входити форми, CMS, калькулятори, бронювання, фільтри, галереї та інтеграції, якщо вони в обсязі."],
        ["Тестування", "Сайт перевіряється на адаптивність, навігацію, форми, посилання, сумісність з основними браузерами й погоджену функціональність."],
        ["Фінальне затвердження та залишок оплати", "Залишок і погоджені додаткові роботи сплачуються до публічного запуску, передачі фінальних файлів або повного доступу адміністратора."],
        ["Запуск і передача", "Після фінального затвердження й оплати сайт підключається до домену та хостингу. Якщо це включено, ви отримуєте базові інструкції й потрібні доступи."],
        ["Підтримка після запуску", "Короткий період виправлення помилок може бути включений у пропозицію. Він покриває помилки в реалізованій функціональності, а не новий контент, нові функції чи зміну затвердженого дизайну."]
      ],
      pl: [
        ["Zobacz portfolio", "Przejrzyj wybrane projekty, aby zrozumieć kierunek wizualny, jakość interakcji, responsywność i sposób pełnej realizacji stron. Portfolio pokazuje styl oraz proces, ale nie jest kopiowane jako szablon."],
        ["Wypełnij kalkulator", "Odpowiedz na pytania o cel strony, liczbę podstron, treści, projekt wizualny, animacje, języki, termin i wsparcie. Kalkulator tworzy wstępną wycenę oraz uporządkowane podsumowanie projektu."],
        ["Sprawdź wstępną wycenę", "Kwota jest orientacyjna. Finalna cena może się zmienić po analizie złożoności projektu wizualnego, ilości treści, integracji, szczegółów technicznych i innych niuansów projektu."],
        ["Wyślij zapytanie", "Możesz tylko zobaczyć wycenę albo wysłać wynik kalkulatora z danymi kontaktowymi. Wysłanie zapytania oznacza, że mogę skontaktować się z Tobą, aby doprecyzować zamówienie."],
        ["Analiza w ciągu 1-2 dni roboczych", "Zazwyczaj analizuję nowe zapytania w ciągu 1-2 dni roboczych. Sprawdzam wymagania, złożoność, termin, materiały, warunki rabatu i możliwe konflikty zakresu."],
        ["Pytania doprecyzowujące", "Kontaktuję się wybranym kanałem. Rozmowy nie są obowiązkowe, jeśli projekt można wyjaśnić pisemnie. Większość projektów da się omówić przez email lub Telegram."],
        ["Finalna oferta i zakres", "Po doprecyzowaniu otrzymujesz pisemną ofertę z potwierdzonym zakresem, ceną, harmonogramem, planem płatności, poprawkami, materiałami, kosztami zewnętrznymi i warunkami specjalnymi."],
        ["Płatność i rezerwacja projektu", "Praca zaczyna się po zaakceptowaniu oferty i zaksięgowaniu pierwszej płatności. Płatność może odbyć się przez Payoneer, Wise albo przelew bankowy, zależnie od dostępności."],
        ["Zebranie treści i dostępów", "Dostarczasz logo, kolory, teksty, zdjęcia, tłumaczenia, dane prawne firmy, dostęp do hostingu lub usług zewnętrznych. Nie trzeba wysyłać wszystkich plików przez kalkulator."],
        ["Struktura i kierunek wizualny", "Przygotowuję strukturę informacji oraz kierunek wizualny. W zależności od projektu może to być mapa strony, szkice ekranów, kluczowe ekrany albo koncepcja wizualna."],
        ["Projekt wizualny i rundy poprawek", "Oferta określa liczbę rund. Jedna runda oznacza jedną uporządkowaną listę rozsądnych zmian do bieżącego etapu."],
        ["Wdrożenie", "Po akceptacji projektu wizualnego strona jest wdrażana responsywnie dla ustalonych ekranów. Zakres może obejmować formularze, CMS, kalkulatory, rezerwacje, filtry, galerie i integracje."],
        ["Testowanie", "Strona jest sprawdzana pod kątem responsywności, nawigacji, formularzy, linków, zgodności z głównymi przeglądarkami i uzgodnionej funkcjonalności."],
        ["Finalna akceptacja i pozostała płatność", "Pozostała kwota oraz zaakceptowane prace dodatkowe muszą być opłacone przed publicznym startem, przekazaniem plików produkcyjnych albo pełnym dostępem administratora."],
        ["Start i przekazanie", "Po finalnej akceptacji i płatności strona jest podłączana do ustalonej domeny i hostingu. Jeśli obejmuje to zakres, otrzymujesz podstawowe instrukcje i potrzebne dostępy."],
        ["Wsparcie po starcie", "Krótki okres naprawy błędów może być zawarty w ofercie. Obejmuje błędy w dostarczonej funkcjonalności, a nie nowe treści, nowe funkcje lub zmianę zaakceptowanego designu."]
      ]
    }
  },
  faq: {
    title: {
      en: "Website Design FAQ | Yana Ellis",
      uk: "FAQ про дизайн сайтів | Yana Ellis",
      pl: "FAQ projektowania stron | Yana Ellis"
    },
    description: {
      en: "Answers about website pricing, process, payments, revisions, support, ownership, privacy, pauses and designer credit conditions.",
      uk: "Відповіді про ціни, процес, оплату, правки, підтримку, права, конфіденційність та умови знижки.",
      pl: "Odpowiedzi o cenach, procesie, płatnościach, poprawkach, wsparciu, prawach, prywatności, pauzach i kredycie projektantki."
    },
    kicker: { en: "FAQ", uk: "FAQ", pl: "FAQ" },
    heading: { en: "Website Design FAQ", uk: "Поширені питання", pl: "Najczęstsze pytania" },
    intro: {
      en: "Short answers to the questions clients usually ask before sending a website project request.",
      uk: "Короткі відповіді на питання, які клієнти зазвичай ставлять перед заявкою на сайт.",
      pl: "Krótkie odpowiedzi na pytania, które klienci zwykle zadają przed wysłaniem zapytania o stronę."
    }
  },
  privacy: {
    title: {
      en: "Privacy Policy | Yana Ellis",
      uk: "Політика конфіденційності | Yana Ellis",
      pl: "Polityka prywatności | Yana Ellis"
    },
    description: {
      en: "Privacy Policy for the Yana Ellis portfolio website, calculators and project request forms.",
      uk: "Політика конфіденційності для портфоліо Yana Ellis, калькуляторів і форм заявки.",
      pl: "Polityka prywatności portfolio Yana Ellis, kalkulatorów i formularzy zapytań."
    },
    kicker: { en: "Privacy Policy", uk: "Конфіденційність", pl: "Polityka prywatności" },
    heading: { en: "Privacy Policy", uk: "Політика конфіденційності", pl: "Polityka prywatności" },
    intro: {
      en: "This policy explains what information may be collected when you use the portfolio, calculators or project request forms, why it is used and how to contact me about privacy requests.",
      uk: "Ця політика пояснює, які дані можуть збиратися під час використання портфоліо, калькуляторів або форм заявки, навіщо вони потрібні та як звернутися щодо приватності.",
      pl: "Ta polityka wyjaśnia, jakie dane mogą być zbierane podczas korzystania z portfolio, kalkulatorów lub formularzy zapytań, po co są używane i jak skontaktować się w sprawach prywatności."
    }
  },
  terms: {
    title: {
      en: "Terms of Service | Yana Ellis",
      uk: "Умови використання | Yana Ellis",
      pl: "Regulamin usług | Yana Ellis"
    },
    description: {
      en: "Terms for using the Yana Ellis portfolio, calculators, project request forms and pre-contract website information.",
      uk: "Умови використання портфоліо Yana Ellis, калькуляторів, форм заявки та переддоговірної інформації.",
      pl: "Warunki korzystania z portfolio Yana Ellis, kalkulatorów, formularzy zapytań i informacji przed zawarciem umowy."
    },
    kicker: { en: "Terms of Service", uk: "Умови", pl: "Regulamin" },
    heading: { en: "Terms of Service", uk: "Умови використання", pl: "Regulamin usług" },
    intro: {
      en: "These terms explain how the website calculator, project requests, payments, scope, revisions, portfolio use and third-party services are handled before a final written proposal is approved.",
      uk: "Ці умови пояснюють, як працюють калькулятор, заявки, оплата, обсяг, правки, використання проєкту в портфоліо та сторонні сервіси до затвердження фінальної письмової пропозиції.",
      pl: "Te warunki wyjaśniają, jak działają kalkulator, zapytania, płatności, zakres, poprawki, wykorzystanie projektu w portfolio i usługi zewnętrzne przed akceptacją finalnej pisemnej oferty."
    }
  }
};

function tx(value, language) {
  if (Array.isArray(value)) return value;
  return value?.[language] || value?.en || "";
}

function localizedPaymentMethods(language) {
  const labels = {
    "bank transfer": {
      en: "bank transfer",
      uk: "банківський переказ",
      pl: "przelew bankowy"
    }
  };

  return siteConfig.business.paymentMethods
    .map((method) => labels[method]?.[language] || method)
    .join(", ");
}

function localizedEffectiveDate(language) {
  return tx(siteConfig.legal.TERMS_EFFECTIVE_DATE, language) || siteConfig.legal.effectiveDate;
}

function localizedPrivacyDate(language) {
  return tx(siteConfig.legal.PRIVACY_EFFECTIVE_DATE, language) || localizedEffectiveDate(language);
}

function designerCreditDiscountPercent() {
  return Number(siteConfig.promotion.DESIGNER_CREDIT_DISCOUNT_PERCENT) || 10;
}

function designerCreditCureDays() {
  return Number(siteConfig.promotion.DESIGNER_CREDIT_CURE_DAYS) || 7;
}

function currentLanguage() {
  const saved = localStorage.getItem(languageKey);
  return supportedLanguages.includes(saved) ? saved : "en";
}

function setMeta(page, language) {
  document.documentElement.lang = language;
  document.title = tx(page.title, language);
  document.querySelector('meta[name="description"]')?.setAttribute("content", tx(page.description, language));
}

function baseLinks(labels) {
  return `
    <a class="nav-link" href="index.html">${labels.portfolio}</a>
    <a class="nav-link" href="project-guide.html">${labels.projectGuide}</a>
    <a class="nav-link" href="faq.html">${labels.faq}</a>
    <a class="nav-link" href="privacy-policy.html">${labels.privacy}</a>
    <a class="nav-link" href="terms-of-service.html">${labels.terms}</a>
  `;
}

function renderShell(page, language) {
  const labels = sharedLabels[language] || sharedLabels.en;
  document.querySelector("#pageHeader").innerHTML = `
    <a class="brand-link" href="index.html" aria-label="Yana Ellis">
      <img class="brand-logo" src="assets/yana-ellis-logo-transparent.png" alt="Yana Ellis logo" />
    </a>
    <div class="header-actions">
      ${baseLinks(labels)}
      <div class="language-switcher" aria-label="Language">
        ${supportedLanguages
          .map((lang) => `<button class="language-button${lang === language ? " is-active" : ""}" type="button" data-lang="${lang}" aria-pressed="${lang === language}">${lang.toUpperCase()}</button>`)
          .join("")}
      </div>
    </div>
  `;

  document.querySelector("#pageFooter").innerHTML = `
    <p class="footer-text">${labels.footerText}</p>
    <nav class="footer-links" aria-label="Footer">
      ${baseLinks(labels)}
      <a href="calculator/canada/index.html">${labels.calculator}</a>
      <a href="mailto:${siteConfig.contact.email}">${labels.contact}</a>
      <a href="${siteConfig.contact.telegramUrl}" target="_blank" rel="noreferrer">${labels.telegram}</a>
      <a href="mailto:${siteConfig.contact.email}">${labels.email}</a>
    </nav>
  `;
}

function renderHero(page, language) {
  return `
    <section class="page-hero">
      <p class="section-kicker">${tx(page.kicker, language)}</p>
      <h1 class="page-title">${tx(page.heading, language)}</h1>
      <p class="page-intro">${tx(page.intro, language)}</p>
    </section>
  `;
}

function cta(language) {
  const labels = sharedLabels[language] || sharedLabels.en;
  return `
    <section class="cta-band">
      <p class="section-kicker">${labels.ctaTitle}</p>
      <p class="page-intro">${labels.ctaText}</p>
      <div class="cta-actions">
        <a class="nav-link" href="calculator/canada/index.html">${labels.ctaPrimary}</a>
        <a class="nav-link" href="${siteConfig.contact.telegramUrl}" target="_blank" rel="noreferrer">${labels.ctaSecondary}</a>
      </div>
    </section>
  `;
}

function anchorNav(items) {
  return `<nav class="anchor-nav" aria-label="Page sections">${items.map(([id, label]) => `<a href="#${id}">${label}</a>`).join("")}</nav>`;
}

function termsAnchorItems(language) {
  const labelMap = {
    en: ["Payments", "Inactivity", "Cancellation", "Termination", "Designer Credit", "Hosting And Transfer", "Security", "Disputes"],
    uk: ["Оплата", "Неактивність", "Скасування", "Припинення", "Дизайнерський кредит", "Хостинг і передача", "Безпека", "Спори"],
    pl: ["Płatności", "Bezczynność", "Anulowanie", "Zakończenie", "Kredyt projektantki", "Hosting i transfer", "Bezpieczeństwo", "Spory"]
  };
  const labels = labelMap[language] || labelMap.en;
  return [
    ["payments", labels[0]],
    ["inactivity", labels[1]],
    ["cancellation", labels[2]],
    ["termination", labels[3]],
    ["designer-credit", labels[4]],
    ["hosting-transfer", labels[5]],
    ["security", labels[6]],
    ["disputes", labels[7]]
  ];
}

function printLabel(language) {
  return (
    {
      en: "Download or print the terms that applied when you submitted this request.",
      uk: "Завантажити або роздрукувати умови, які діяли під час відправки заявки.",
      pl: "Pobierz albo wydrukuj warunki obowiązujące przy wysłaniu zapytania."
    }[language] || "Download or print the terms that applied when you submitted this request."
  );
}

function section(id, number, title, body) {
  return `
    <section class="content-section" id="${id}">
      <p class="section-kicker">${number}</p>
      <div class="section-body">
        <h2>${title}</h2>
        ${body}
      </div>
    </section>
  `;
}

function renderProjectGuide(language) {
  const page = pages.projectGuide;
  const labels = sharedLabels[language] || sharedLabels.en;
  const anchors = tx(page.anchors, language);
  const steps = tx(page.processSteps, language)
    .map(
      ([title, copy], index) => `
        <article class="step-card">
          <span class="step-number">${String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>${title}</h3>
            <p class="step-copy">${copy}</p>
          </div>
        </article>
      `
    )
    .join("");

  const guideCopy = guideSections(language);
  return `
    ${renderHero(page, language)}
    ${anchorNav([
      ["process", anchors[0]],
      ["communication", anchors[1]],
      ["payment", anchors[2]],
      ["revisions", anchors[3]],
      ["promotion", anchors[4]],
      ["project-pauses", anchors[5]],
      ["faq", anchors[6]],
      ["privacy", anchors[7]],
      ["terms", anchors[8]]
    ])}
    <div class="content-grid">
      ${section("process", "01", tx(page.processTitle, language), `<div class="step-list">${steps}</div>`)}
      ${section("communication", "02", guideCopy.communicationTitle, `<div class="card-grid">${guideCopy.communication.map(infoCard).join("")}</div>`)}
      ${section("payment", "03", guideCopy.paymentTitle, `<div class="card-grid">${guideCopy.payment.map(infoCard).join("")}</div>`)}
      ${section("revisions", "04", guideCopy.revisionsTitle, `<div class="card-grid">${guideCopy.revisions.map(infoCard).join("")}</div>`)}
      ${section("promotion", "05", guideCopy.promotionTitle, `<p>${guideCopy.promotionIntro}</p><div class="card-grid">${guideCopy.promotion.map(infoCard).join("")}</div>`)}
      ${section("project-pauses", "06", guideCopy.problemTitle, `<div class="card-grid">${guideCopy.problem.map(infoCard).join("")}</div>`)}
      ${section("faq", "07", labels.faq, `<p>${guideCopy.faqIntro}</p><a class="nav-link" href="faq.html">${labels.faq}</a>`)}
      ${section("privacy", "08", labels.privacy, `<p>${guideCopy.privacyIntro}</p><a class="nav-link" href="privacy-policy.html">${labels.privacy}</a>`)}
      ${section("terms", "09", labels.terms, `<p>${guideCopy.termsIntro}</p><a class="nav-link" href="terms-of-service.html">${labels.terms}</a>`)}
    </div>
    ${cta(language)}
  `;
}

function infoCard(item) {
  return `<article class="info-card"><h3>${item[0]}</h3><p class="condition-copy">${item[1]}</p></article>`;
}

function guideSections(language) {
  const paymentMethods = localizedPaymentMethods(language);
  const responseTime = tx(siteConfig.business.responseTime, language);
  const revisionDefault = tx(siteConfig.business.revisionDefault, language);
  const bugFixPeriod = tx(siteConfig.business.bugFixPeriod, language);

  const data = {
    en: {
      communicationTitle: "Communication",
      communication: [
        ["Where to write", `For questions, write to Telegram ${siteConfig.contact.telegram} or email ${siteConfig.contact.email}. Important approvals, scope changes and payment decisions should stay in writing.`],
        ["Response time", `After a request is sent, I usually review it and reply within ${responseTime}. Response time can be longer during weekends, holidays, illness or technical investigation.`],
        ["Calls", "Calls are not mandatory. A call can be suggested only when written clarification would be inefficient or the project contains complex custom logic."]
      ],
      paymentTitle: "Payment",
      payment: [
        ["Available services", `Payments can be arranged through ${paymentMethods}. The exact method is confirmed in the final proposal or invoice before any payment is made.`],
        ["Standard schedule", `Most projects use ${siteConfig.business.defaultDeposit} before work begins and the remaining balance before launch or transfer. Larger projects may use ${siteConfig.business.largeProjectSchedule}.`],
        ["Third-party costs", "Domains, hosting, paid plugins, stock assets, email services, booking tools, payment processors and subscriptions are normally paid separately by the client."]
      ],
      revisionsTitle: "Revisions, Delays And Pauses",
      revisions: [
        ["Revision rounds", `The default is ${revisionDefault}. One round is one consolidated list of reasonable changes to the current approved stage.`],
        ["Additional work", "New pages, new functionality, additional languages, expanded content, complete direction changes or requests outside the approved scope are quoted separately."],
        ["Delays and pauses", "If feedback, access or materials are delayed, the delivery date can move. Long inactivity may place the project on hold and require rescheduling."]
      ],
      promotionTitle: "Optional Designer Credit Discount",
      promotionIntro: "The standard no-credit price is always available. The only optional discount is a designer credit discount for keeping a small linked credit in the website footer.",
      promotion: [
        ["Standard price", "No designer credit is required and no discount is applied."],
        ["Designer credit", `${designerCreditDiscountPercent()}% discount if a small linked “Designed and developed by Yana Ellis” credit remains visible and functional in the website footer.`],
        ["Client choice", "The client may always choose the standard project price without the credit."],
        ["Removal process", `If the credit is removed, hidden, disabled or materially changed without written approval, written notice is sent first. If it is not restored within ${designerCreditCureDays()} calendar days, the original discount amount may become payable.`],
        ["No automatic shutdown", "Removing the credit does not automatically disable a fully paid website."]
      ],
      problemTitle: "When A Project Does Not Go As Planned",
      problem: [
        ["Client inactivity", "If messages, approvals, materials or access are missing, the schedule may move. Extended silence can place the project on hold and require a new start date."],
        ["Agreed pauses", "A pause can be agreed in writing when the client needs more time. Restart timing depends on availability and the state of the project."],
        ["Cancellation", "If a project is cancelled, paid amounts are reviewed proportionally against completed work, discovery, planning, reserved production time and agreed non-refundable costs."],
        ["Late payments", "Work can pause while an overdue stage payment is unresolved. Launch, transfer or unrestricted administrator access may wait until due amounts are paid."],
        ["Scope changes", "New pages, features, design direction changes, extra languages or integrations outside the approved proposal are quoted and scheduled separately."],
        ["Designer termination", "Work may be refused or ended with notice for unlawful projects, abusive conduct, unsafe requests, infringement, malware, non-payment or serious breach."],
        ["Hosting and access", "GitHub, Vercel, domains and third-party services are handled as agreed in the proposal. Ownership and transfer are confirmed before launch or handover."],
        ["Security and third parties", "Reasonable care is used, but third-party outages, future browser changes, client edits, hacked accounts or unpaid subscriptions can require separate support."],
        ["Complaints", `Formal complaints, cancellation notices and privacy requests should be sent by email to ${siteConfig.contact.email}; project questions can also go to Telegram ${siteConfig.contact.telegram}.`]
      ],
      faqIntro: "The FAQ answers common questions about pricing, payments, ownership, support, content, timelines and discounts.",
      privacyIntro: "The Privacy Policy explains what data is collected through the calculator and request form, which services process it and how to request correction or deletion.",
      termsIntro: "The Terms of Service explain calculator limits, project acceptance, payments, scope, intellectual property, third-party services and formal notices."
    },
    uk: {
      communicationTitle: "Комунікація",
      communication: [
        ["Куди писати", `З усіх питань пишіть у Telegram ${siteConfig.contact.telegram} або на email ${siteConfig.contact.email}. Важливі затвердження, зміни обсягу та рішення щодо оплати мають залишатися письмовими.`],
        ["Час відповіді", `Після надсилання заявки я зазвичай переглядаю її та відповідаю протягом ${responseTime}. Відповідь може зайняти більше часу у вихідні, свята, під час хвороби або технічної перевірки.`],
        ["Дзвінки", "Дзвінки не є обов'язковими. Їх можна запропонувати лише тоді, коли письмового уточнення недостатньо або проєкт має складну індивідуальну логіку."]
      ],
      paymentTitle: "Оплата",
      payment: [
        ["Доступні сервіси", `Оплату можна узгодити через ${paymentMethods}. Точний спосіб підтверджується у фінальній пропозиції або рахунку до будь-якого платежу.`],
        ["Стандартний графік", `У більшості проєктів використовується ${siteConfig.business.defaultDeposit} до початку роботи та залишок перед запуском або передачею. Великі проєкти можуть мати графік ${siteConfig.business.largeProjectSchedule}.`],
        ["Сторонні витрати", "Домени, хостинг, платні плагіни, стокові матеріали, email-сервіси, бронювання, платіжні системи та підписки зазвичай оплачуються клієнтом окремо."]
      ],
      revisionsTitle: "Правки, затримки та паузи",
      revisions: [
        ["Раунди правок", `Стандартно включено ${revisionDefault}. Один раунд - це один зведений список розумних змін до поточного затвердженого етапу.`],
        ["Додаткова робота", "Нові сторінки, функції, мови, розширення контенту, повна зміна напряму або запити поза погодженим обсягом оцінюються окремо."],
        ["Затримки та паузи", "Якщо фідбек, доступи або матеріали затримуються, дата здачі може зміститися. Тривала неактивність може поставити проєкт на паузу та потребувати нового графіка."]
      ],
      promotionTitle: "Опційна знижка за дизайнерський кредит",
      promotionIntro: "Стандартна ціна без кредиту завжди доступна. Єдина опційна знижка - це знижка за невеликий активний кредит дизайнера у футері сайту.",
      promotion: [
        ["Стандартна ціна", "Дизайнерський кредит не потрібен, знижка не застосовується."],
        ["Дизайнерський кредит", `${designerCreditDiscountPercent()}% знижки, якщо невеликий активний кредит “Designed and developed by Yana Ellis” залишається видимим і функціональним у футері сайту.`],
        ["Вибір клієнта", "Клієнт завжди може обрати стандартну ціну без кредиту."],
        ["Процес видалення", `Якщо кредит видалено, приховано, вимкнено або суттєво змінено без письмової згоди, спочатку надсилається письмове повідомлення. Якщо кредит не відновлено протягом ${designerCreditCureDays()} календарних днів, початкова сума знижки може стати до оплати.`],
        ["Без автоматичного вимкнення", "Видалення кредиту саме по собі не вимикає автоматично повністю оплачений сайт."]
      ],
      problemTitle: "Коли проєкт іде не за планом",
      problem: [
        ["Неактивність клієнта", "Якщо немає відповідей, затверджень, матеріалів або доступів, графік може зміститися. Тривала тиша може поставити проєкт на паузу й потребувати нової дати старту."],
        ["Погоджені паузи", "Паузу можна погодити письмово, якщо клієнту потрібен додатковий час. Повернення залежить від доступності та стану проєкту."],
        ["Скасування", "Якщо проєкт скасовано, сплачені суми переглядаються пропорційно до виконаної роботи, discovery, планування, зарезервованого часу та погоджених невідшкодовуваних витрат."],
        ["Прострочені платежі", "Робота може зупинитися, поки прострочений етап оплати не вирішено. Запуск, передача або повний доступ адміністратора можуть чекати до оплати належних сум."],
        ["Зміни обсягу", "Нові сторінки, функції, зміна напряму дизайну, додаткові мови або інтеграції поза пропозицією оцінюються й плануються окремо."],
        ["Припинення з боку дизайнера", "Роботу можна відхилити або завершити з повідомленням через незаконний проєкт, образливу поведінку, небезпечні запити, порушення прав, malware, несплату або серйозне порушення умов."],
        ["Хостинг і доступ", "GitHub, Vercel, домени та сторонні сервіси ведуться так, як погоджено в пропозиції. Власність і передача підтверджуються до запуску або handover."],
        ["Безпека і сторонні сервіси", "Використовується розумна обережність, але збої провайдерів, майбутні зміни браузерів, правки клієнта, зламані акаунти або неоплачені підписки можуть потребувати окремої підтримки."],
        ["Скарги", `Формальні скарги, повідомлення про скасування та privacy-запити надсилайте на email ${siteConfig.contact.email}; загальні питання можна також писати в Telegram ${siteConfig.contact.telegram}.`]
      ],
      faqIntro: "FAQ відповідає на питання про ціни, оплату, права, підтримку, контент, терміни та знижки.",
      privacyIntro: "Політика конфіденційності пояснює, які дані збираються через калькулятор і форму, які сервіси їх обробляють та як попросити виправлення чи видалення.",
      termsIntro: "Умови використання пояснюють обмеження калькулятора, прийняття проєкту, оплату, обсяг, права, сторонні сервіси та формальні повідомлення."
    },
    pl: {
      communicationTitle: "Komunikacja",
      communication: [
        ["Gdzie pisać", `W sprawach projektu pisz na Telegram ${siteConfig.contact.telegram} albo email ${siteConfig.contact.email}. Ważne akceptacje, zmiany zakresu i decyzje płatnicze powinny pozostać w formie pisemnej.`],
        ["Czas odpowiedzi", `Po wysłaniu zapytania zwykle analizuję je i odpowiadam w ciągu ${responseTime}. Odpowiedź może potrwać dłużej w weekendy, święta, podczas choroby lub analizy technicznej.`],
        ["Rozmowy", "Rozmowy nie są obowiązkowe. Mogę je zaproponować tylko wtedy, gdy pisemne doprecyzowanie byłoby niewystarczające albo projekt ma złożoną logikę indywidualną."]
      ],
      paymentTitle: "Płatność",
      payment: [
        ["Dostępne metody", `Płatność może odbyć się przez ${paymentMethods}. Dokładna metoda jest potwierdzana w finalnej ofercie lub fakturze przed jakąkolwiek płatnością.`],
        ["Standardowy harmonogram", `Większość projektów używa ${siteConfig.business.defaultDeposit} przed startem pracy i pozostałej kwoty przed uruchomieniem lub przekazaniem. Większe projekty mogą mieć harmonogram ${siteConfig.business.largeProjectSchedule}.`],
        ["Koszty zewnętrzne", "Domeny, hosting, płatne wtyczki, materiały stockowe, usługi email, rezerwacje, procesory płatności i subskrypcje zwykle są opłacane oddzielnie przez klienta."]
      ],
      revisionsTitle: "Poprawki, opóźnienia i pauzy",
      revisions: [
        ["Rundy poprawek", `Standardowo obowiązują ${revisionDefault}. Jedna runda to jedna zebrana lista rozsądnych zmian do aktualnie zaakceptowanego etapu.`],
        ["Prace dodatkowe", "Nowe podstrony, funkcje, języki, większa ilość treści, pełna zmiana kierunku lub prośby poza zaakceptowanym zakresem są wyceniane oddzielnie."],
        ["Opóźnienia i pauzy", "Jeśli informacje zwrotne, dostępy lub materiały są opóźnione, termin może się przesunąć. Dłuższa bezczynność może wstrzymać projekt i wymagać nowego harmonogramu."]
      ],
      promotionTitle: "Opcjonalny rabat za kredyt projektantki",
      promotionIntro: "Standardowa cena bez kredytu zawsze jest dostępna. Jedyny opcjonalny rabat dotyczy małego aktywnego kredytu projektantki w stopce strony.",
      promotion: [
        ["Cena standardowa", "Kredyt projektantki nie jest wymagany i rabat nie jest naliczany."],
        ["Kredyt projektantki", `${designerCreditDiscountPercent()}% rabatu, jeśli mały aktywny kredyt “Designed and developed by Yana Ellis” pozostaje widoczny i funkcjonalny w stopce strony.`],
        ["Wybór klienta", "Klient zawsze może wybrać standardową cenę bez kredytu."],
        ["Proces usunięcia", `Jeśli kredyt zostanie usunięty, ukryty, wyłączony albo istotnie zmieniony bez pisemnej zgody, najpierw zostaje wysłane pisemne powiadomienie. Jeśli kredyt nie zostanie przywrócony w ciągu ${designerCreditCureDays()} dni kalendarzowych, pierwotna kwota rabatu może stać się należna.`],
        ["Bez automatycznego wyłączenia", "Samo usunięcie kredytu nie wyłącza automatycznie w pełni opłaconej strony."]
      ],
      problemTitle: "Gdy projekt nie idzie zgodnie z planem",
      problem: [
        ["Brak aktywności klienta", "Jeśli brakuje odpowiedzi, akceptacji, materiałów lub dostępów, harmonogram może się przesunąć. Dłuższa cisza może wstrzymać projekt i wymagać nowej daty startu."],
        ["Uzgodnione pauzy", "Pauzę można ustalić pisemnie, gdy klient potrzebuje więcej czasu. Powrót zależy od dostępności i stanu projektu."],
        ["Anulowanie", "Jeśli projekt zostanie anulowany, opłacone kwoty są oceniane proporcjonalnie do wykonanej pracy, discovery, planowania, zarezerwowanego czasu produkcyjnego i uzgodnionych kosztów bezzwrotnych."],
        ["Opóźnione płatności", "Praca może zostać wstrzymana, dopóki zaległa płatność etapowa nie zostanie rozwiązana. Start, przekazanie lub pełny dostęp administratora mogą poczekać do zapłaty należnych kwot."],
        ["Zmiany zakresu", "Nowe podstrony, funkcje, zmiany kierunku designu, dodatkowe języki lub integracje poza ofertą są wyceniane i planowane oddzielnie."],
        ["Zakończenie przez projektantkę", "Praca może zostać odmówiona lub zakończona z powiadomieniem przy projekcie nielegalnym, obraźliwym zachowaniu, niebezpiecznych prośbach, naruszeniu praw, malware, braku płatności lub poważnym naruszeniu warunków."],
        ["Hosting i dostęp", "GitHub, Vercel, domeny i usługi zewnętrzne są obsługiwane zgodnie z ofertą. Własność i przekazanie są potwierdzane przed startem lub handover."],
        ["Bezpieczeństwo i strony trzecie", "Stosowana jest rozsądna ostrożność, ale awarie dostawców, przyszłe zmiany przeglądarek, edycje klienta, przejęte konta albo nieopłacone subskrypcje mogą wymagać osobnego wsparcia."],
        ["Skargi", `Formalne skargi, powiadomienia o anulowaniu i prośby privacy należy wysłać na email ${siteConfig.contact.email}; pytania projektowe można też wysłać na Telegram ${siteConfig.contact.telegram}.`]
      ],
      faqIntro: "FAQ odpowiada na pytania o ceny, płatności, prawa, wsparcie, treści, terminy i rabaty.",
      privacyIntro: "Polityka prywatności wyjaśnia, jakie dane zbiera kalkulator i formularz, jakie usługi je przetwarzają oraz jak poprosić o korektę lub usunięcie.",
      termsIntro: "Regulamin wyjaśnia ograniczenia kalkulatora, akceptację projektu, płatności, zakres, prawa, usługi zewnętrzne i formalne zawiadomienia."
    }
  };

  return data[language] || data.en;
}

function faqData(language) {
  const data = {
    en: [
      ["Do I have to schedule a call?", "No. Most projects can be discussed through email, Telegram or another agreed written channel. A call is suggested only when written clarification would be inefficient."],
      ["Is the calculator price final?", "No. It is a preliminary estimate. The final price is confirmed only after I review the request, design direction, content volume, technical details and integrations."],
      ["Can I view the price without sending a request?", "Yes. At the end of the calculator you can view the approximate estimate only. Nothing is sent unless you choose to send the request."],
      ["What happens after I send the request?", `I normally review it within ${tx(siteConfig.business.responseTime, "en")}, then contact you through the selected channel with questions or a final written proposal.`],
      ["How do payments work?", `Payment can be arranged through ${localizedPaymentMethods("en")}. Most projects use ${siteConfig.business.defaultDeposit} before work begins and the remaining amount before launch or transfer.`],
      ["Who pays for domain and hosting?", "The client normally pays domain, hosting and recurring third-party services directly unless the final proposal states otherwise."],
      ["How many revisions are included?", `The default is ${tx(siteConfig.business.revisionDefault, "en")}. Extra rounds, new pages, new functionality or major direction changes are additional work.`],
      ["What if I do not have text or photos?", "Content preparation, image sourcing or professional services can be added to scope. Stock licences and external services are charged separately."],
      ["Who owns the finished website?", "After full payment, the client receives the rights and access described in the final proposal. Third-party tools, fonts and libraries remain subject to their own licences."],
      ["Can the project be shown in the portfolio?", "Unless confidentiality is agreed in writing before work begins, the completed public project may be shown in the Yana Ellis portfolio and promotional materials."],
      ["What is the designer credit discount?", `It is optional. You can choose the standard price with no designer credit, or receive a ${designerCreditDiscountPercent()}% discount by keeping a small linked “Designed and developed by Yana Ellis” credit in the website footer.`],
      ["What happens if I remove the designer credit?", `The website is not automatically disabled solely because the credit is removed. I will first send written notice and allow ${designerCreditCureDays()} calendar days to restore it. If the credit is not restored, the original discount amount may become payable.`],
      ["What happens if I stop replying?", "The project can pause if feedback, approvals, materials or access are missing. I may send follow-ups first; a long silence can require rescheduling before work continues."],
      ["When will my project be paused?", "A project may be paused when essential materials, feedback, access, approvals or stage payments are missing and the next planned task cannot reasonably continue."],
      ["Can I return after the project is archived?", "Usually yes, but immediate reactivation is not guaranteed. I will review the project status, availability, old files, changed requirements and any reactivation work needed."],
      ["Is immediate reactivation guaranteed?", "No. Returning after a long pause may need a new schedule, technical review, updated scope or a reactivation fee if extra setup time is required."],
      ["Can the project be terminated after prolonged inactivity?", "It can be closed after repeated unanswered follow-ups and reasonable written notice. Paid deliverables already earned or completed are handled according to the final proposal and project stage."],
      ["Is the initial payment always refundable?", "No. Paid amounts can cover completed work, discovery, planning, reserved production time and agreed non-refundable expenses. Any remaining balance is reviewed proportionally."],
      ["How is a cancellation balance calculated?", "The balance is calculated against the approved scope, completed work, stage reached, reserved time, third-party costs and any cancellation terms stated in the final proposal."],
      ["When can you stop working on a project?", "Work may be refused, paused or ended with notice for unlawful content, infringement, malware, unsafe requests, abusive conduct, non-payment or serious breach of agreed terms."],
      ["What happens if a payment is late?", "Work can pause while payment is overdue. Launch, transfer, final files or unrestricted administrator access may wait until due amounts are paid."],
      ["Can you disable my website?", "A fully paid transferred website is not disabled because of an ordinary dispute or credit issue. Access to unpaid work, unpaid hosting/support or pre-transfer environments can be limited according to the proposal."],
      ["Who owns the GitHub repository?", "Repository ownership depends on the final proposal. It can stay under my workspace during production and be transferred or exported after final payment when that is included."],
      ["Who owns the Vercel project?", "The Vercel project is handled as agreed in writing. It can stay in my account during production, then be transferred or recreated under the client's account if included and technically available."],
      ["Can the project be transferred to my accounts?", "Yes, when transfer is included and all due amounts are paid. Domain, GitHub, Vercel and third-party account ownership are confirmed before handover."],
      ["Who owns the domain?", "The domain should normally be owned by the client. If I assist with setup, the final proposal should state who buys it, who pays renewal fees and who controls DNS."],
      ["What happens if a third-party service stops working?", "Third-party outages, API changes, subscription issues or provider policy changes are outside direct control. Investigation and fixes can be part of support or quoted separately."],
      ["What happens if I edit the code myself?", "Client edits, third-party edits or plugin changes can affect warranty/support. I can investigate, but restoring or adapting modified code may be separate work."],
      ["What happens after the bug-fix period?", "After the included bug-fix period, new fixes, updates, content edits, browser-change adjustments and new features are handled as paid support unless the proposal states otherwise."],
      ["How do I submit a formal complaint?", `Send a clear written complaint to ${siteConfig.contact.email} with the request ID, project name, issue, screenshots or links, and the outcome you are asking for.`],
      ["Which terms apply to my project?", `The website Terms version accepted when you submit the request is recorded, but the final written proposal can override general website terms for your specific project.`],
      ["Is post-launch support included?", `${tx(siteConfig.business.bugFixPeriod, "en")} may be included. Future updates, new content and new features are separate services.`],
      ["What data is collected?", "The form may collect contact details, calculator answers, project notes, inspiration links, budget expectations, deadlines, consent statuses and technical submission data."],
      ["How can I request deletion?", `Send a formal privacy request to ${siteConfig.contact.email}. Identity verification may be required before data is changed or deleted.`]
    ],
    uk: [
      ["Чи обов'язковий дзвінок?", "Ні. Більшість проєктів можна обговорити через email, Telegram або інший погоджений письмовий канал. Дзвінок пропонується лише тоді, коли письмового уточнення недостатньо."],
      ["Чи є ціна з калькулятора фінальною?", "Ні. Це попередня оцінка. Фінальна ціна підтверджується тільки після перегляду заявки, дизайну, контенту, технічних деталей та інтеграцій."],
      ["Чи можна подивитися ціну без відправки заявки?", "Так. Наприкінці калькулятора можна лише переглянути приблизну оцінку. Нічого не надсилається, доки ви не оберете надсилання заявки."],
      ["Що буде після відправки заявки?", `Зазвичай я переглядаю її протягом ${tx(siteConfig.business.responseTime, "uk")}, а потім пишу через вибраний канал із питаннями або фінальною письмовою пропозицією.`],
      ["Як працює оплата?", `Оплата можлива через ${localizedPaymentMethods("uk")}. У більшості проєктів ${siteConfig.business.defaultDeposit} сплачується до початку роботи, а залишок - перед запуском або передачею.`],
      ["Хто платить за домен і хостинг?", "Зазвичай клієнт оплачує домен, хостинг і регулярні сторонні сервіси напряму, якщо фінальна пропозиція не передбачає інше."],
      ["Скільки правок включено?", `Стандартно включено ${tx(siteConfig.business.revisionDefault, "uk")}. Додаткові раунди, сторінки, функції або велика зміна напряму оплачуються окремо.`],
      ["Що якщо в мене немає текстів або фото?", "Підготовку контенту, пошук зображень або професійні послуги можна додати в обсяг. Стокові ліцензії та зовнішні сервіси оплачуються окремо."],
      ["Кому належить готовий сайт?", "Після повної оплати клієнт отримує права й доступи, описані у фінальній пропозиції. Сторонні інструменти, шрифти й бібліотеки мають власні ліцензії."],
      ["Чи можна показувати проєкт у портфоліо?", "Якщо конфіденційність не погоджена письмово до початку роботи, публічний завершений проєкт може бути показаний у портфоліо Yana Ellis."],
      ["Що таке знижка за дизайнерський кредит?", `Це опційний варіант. Можна обрати стандартну ціну без дизайнерського кредиту або отримати ${designerCreditDiscountPercent()}% знижки, якщо у футері сайту залишається невеликий активний кредит “Designed and developed by Yana Ellis”.`],
      ["Що буде, якщо я видалю дизайнерський кредит?", `Сайт не вимикається автоматично лише через видалення кредиту. Спочатку я надсилаю письмове повідомлення й даю ${designerCreditCureDays()} календарних днів на відновлення. Якщо кредит не відновлено, початкова сума знижки може стати до оплати.`],
      ["Що буде, якщо я перестану відповідати?", "Проєкт може бути поставлений на паузу, якщо немає фідбеку, затверджень, матеріалів або доступів. Спочатку можуть бути follow-up повідомлення; тривала тиша може потребувати нового графіка."],
      ["Коли проєкт ставиться на паузу?", "Проєкт може бути поставлений на паузу, коли без матеріалів, відповідей, доступів, затверджень або етапної оплати неможливо розумно продовжувати наступну задачу."],
      ["Чи можна повернутися після архівації проєкту?", "Зазвичай так, але миттєве повернення не гарантується. Я переглядаю стан проєкту, доступність, старі файли, нові вимоги та потрібну роботу для повторного старту."],
      ["Чи гарантоване миттєве відновлення?", "Ні. Повернення після довгої паузи може потребувати нового графіка, технічного перегляду, оновленого обсягу або reactivation fee, якщо потрібен додатковий setup."],
      ["Чи може проєкт бути припинений після довгої неактивності?", "Так, після повторних follow-up повідомлень і розумного письмового попередження. Оплачені результати, які вже виконані або зароблені, обробляються згідно з фінальною пропозицією й етапом проєкту."],
      ["Чи завжди повертається перший платіж?", "Ні. Сплачені суми можуть покривати виконану роботу, discovery, planning, зарезервований виробничий час і погоджені невідшкодовувані витрати. Залишок розраховується пропорційно."],
      ["Як розраховується баланс при скасуванні?", "Баланс рахується за погодженим обсягом, виконаною роботою, етапом, зарезервованим часом, сторонніми витратами та умовами скасування у фінальній пропозиції."],
      ["Коли ти можеш припинити роботу над проєктом?", "Роботу можна відхилити, поставити на паузу або завершити з повідомленням через незаконний контент, порушення прав, malware, небезпечні запити, образливу поведінку, несплату або серйозне порушення умов."],
      ["Що буде, якщо платіж прострочено?", "Робота може зупинитися, поки платіж прострочений. Запуск, передача, фінальні файли або повний доступ адміністратора можуть чекати до оплати належних сум."],
      ["Чи можеш ти вимкнути мій сайт?", "Повністю оплачений і переданий сайт не вимикається через звичайний спір або питання кредиту. Доступ до неоплаченої роботи, неоплаченого хостингу/підтримки або pre-transfer середовищ може бути обмежений згідно з пропозицією."],
      ["Кому належить GitHub репозиторій?", "Власність репозиторію залежить від фінальної пропозиції. Під час роботи він може бути в моєму workspace, а після фінальної оплати може бути переданий або експортований, якщо це включено."],
      ["Кому належить Vercel проєкт?", "Vercel проєкт ведеться так, як погоджено письмово. Він може бути в моєму акаунті під час роботи, а потім переданий або створений заново в акаунті клієнта, якщо це включено й технічно доступно."],
      ["Чи можна перенести проєкт у мої акаунти?", "Так, якщо transfer включено й усі належні суми оплачені. Власність домену, GitHub, Vercel і сторонніх акаунтів підтверджується перед handover."],
      ["Кому належить домен?", "Домен зазвичай має належати клієнту. Якщо я допомагаю з налаштуванням, фінальна пропозиція має визначати, хто купує домен, хто платить renewal fees і хто контролює DNS."],
      ["Що буде, якщо сторонній сервіс перестане працювати?", "Збої сторонніх сервісів, зміни API, проблеми з підписками або правилами провайдерів не залежать напряму від мене. Перевірка й виправлення можуть входити в підтримку або оцінюватися окремо."],
      ["Що буде, якщо я сама/сам зміню код?", "Правки клієнта, сторонні зміни або оновлення плагінів можуть вплинути на warranty/support. Я можу перевірити проблему, але відновлення або адаптація зміненого коду може бути окремою роботою."],
      ["Що після bug-fix періоду?", "Після включеного періоду виправлення помилок нові fixes, оновлення, зміни контенту, адаптації під майбутні браузерні зміни та нові функції є paid support, якщо пропозиція не передбачає інше."],
      ["Як подати формальну скаргу?", `Надішліть чітку письмову скаргу на ${siteConfig.contact.email}: номер заявки, назву проєкту, проблему, скриншоти або посилання та результат, якого ви очікуєте.`],
      ["Які умови застосовуються до мого проєкту?", "Версія умов, прийнята під час відправки заявки, зберігається, але фінальна письмова пропозиція може змінювати або уточнювати загальні умови для конкретного проєкту."],
      ["Чи включена підтримка після запуску?", `Може бути включено ${tx(siteConfig.business.bugFixPeriod, "uk")}. Майбутні оновлення, новий контент і нові функції є окремими послугами.`],
      ["Які дані збираються?", "Форма може збирати контакти, відповіді калькулятора, нотатки про проєкт, референси, бюджет, терміни, статуси згоди й технічні дані відправки."],
      ["Як попросити видалення?", `Надішліть формальний запит щодо приватності на ${siteConfig.contact.email}. Перед зміною або видаленням даних може знадобитися перевірка особи.`]
    ],
    pl: [
      ["Czy muszę umawiać rozmowę?", "Nie. Większość projektów można omówić przez email, Telegram albo inny uzgodniony kanał pisemny. Rozmowa jest proponowana tylko wtedy, gdy pisemne wyjaśnienia byłyby niewystarczające."],
      ["Czy cena z kalkulatora jest finalna?", "Nie. To wycena wstępna. Finalna cena jest potwierdzana dopiero po analizie zapytania, kierunku wizualnego, ilości treści, szczegółów technicznych i integracji."],
      ["Czy mogę zobaczyć cenę bez wysyłania zapytania?", "Tak. Na końcu kalkulatora możesz tylko zobaczyć orientacyjną wycenę. Nic nie jest wysyłane, dopóki nie wybierzesz wysłania zapytania."],
      ["Co dzieje się po wysłaniu zapytania?", `Zwykle analizuję je w ciągu ${tx(siteConfig.business.responseTime, "pl")}, a następnie kontaktuję się wybranym kanałem z pytaniami albo finalną pisemną ofertą.`],
      ["Jak działa płatność?", `Płatność może odbyć się przez ${localizedPaymentMethods("pl")}. Większość projektów używa ${siteConfig.business.defaultDeposit} przed startem pracy, a reszty przed uruchomieniem lub przekazaniem.`],
      ["Kto płaci za domenę i hosting?", "Klient zwykle opłaca domenę, hosting i cykliczne usługi zewnętrzne bezpośrednio, chyba że finalna oferta stanowi inaczej."],
      ["Ile poprawek jest wliczone?", `Standardowo obowiązują ${tx(siteConfig.business.revisionDefault, "pl")}. Dodatkowe rundy, podstrony, funkcje lub duża zmiana kierunku są wyceniane oddzielnie.`],
      ["Co jeśli nie mam tekstów lub zdjęć?", "Przygotowanie treści, dobór zdjęć albo usługi profesjonalne można dodać do zakresu. Licencje stockowe i usługi zewnętrzne są płatne oddzielnie."],
      ["Kto jest właścicielem gotowej strony?", "Po pełnej płatności klient otrzymuje prawa i dostępy opisane w finalnej ofercie. Narzędzia zewnętrzne, fonty i biblioteki podlegają własnym licencjom."],
      ["Czy projekt może być pokazany w portfolio?", "Jeśli poufność nie została uzgodniona pisemnie przed startem pracy, ukończony publiczny projekt może zostać pokazany w portfolio Yana Ellis."],
      ["Czym jest rabat za kredyt projektantki?", `To opcjonalna możliwość. Możesz wybrać standardową cenę bez kredytu projektantki albo otrzymać ${designerCreditDiscountPercent()}% rabatu, jeśli w stopce strony pozostanie mały aktywny kredyt “Designed and developed by Yana Ellis”.`],
      ["Co się stanie, jeśli usunę kredyt projektantki?", `Strona nie zostaje automatycznie wyłączona wyłącznie z powodu usunięcia kredytu. Najpierw wysyłam pisemne powiadomienie i daję ${designerCreditCureDays()} dni kalendarzowych na przywrócenie. Jeśli kredyt nie zostanie przywrócony, pierwotna kwota rabatu może stać się należna.`],
      ["Co jeśli przestanę odpowiadać?", "Projekt może zostać wstrzymany, jeśli brakuje feedbacku, akceptacji, materiałów lub dostępów. Najpierw mogą pojawić się przypomnienia; dłuższa cisza może wymagać nowego harmonogramu."],
      ["Kiedy projekt zostanie wstrzymany?", "Projekt może zostać wstrzymany, gdy bez materiałów, odpowiedzi, dostępów, akceptacji lub płatności etapowej nie da się rozsądnie kontynuować następnego zadania."],
      ["Czy mogę wrócić po archiwizacji projektu?", "Zwykle tak, ale natychmiastowy powrót nie jest gwarantowany. Sprawdzam stan projektu, dostępność, stare pliki, zmienione wymagania i pracę potrzebną do ponownego startu."],
      ["Czy natychmiastowa reaktywacja jest gwarantowana?", "Nie. Powrót po długiej przerwie może wymagać nowego harmonogramu, przeglądu technicznego, aktualizacji zakresu lub opłaty reaktywacyjnej, jeśli potrzebny jest dodatkowy setup."],
      ["Czy projekt może zostać zakończony po długiej bezczynności?", "Tak, po powtarzanych przypomnieniach i rozsądnym pisemnym powiadomieniu. Opłacone rezultaty już wykonane lub wypracowane są rozliczane zgodnie z finalną ofertą i etapem projektu."],
      ["Czy pierwsza płatność zawsze podlega zwrotowi?", "Nie. Opłacone kwoty mogą pokrywać wykonaną pracę, discovery, planning, zarezerwowany czas produkcyjny i uzgodnione koszty bezzwrotne. Pozostały balans jest oceniany proporcjonalnie."],
      ["Jak liczony jest balans przy anulowaniu?", "Balans jest liczony względem zaakceptowanego zakresu, wykonanej pracy, osiągniętego etapu, zarezerwowanego czasu, kosztów zewnętrznych i warunków anulowania z finalnej oferty."],
      ["Kiedy możesz przestać pracować nad projektem?", "Praca może zostać odmówiona, wstrzymana lub zakończona z powiadomieniem przy treściach nielegalnych, naruszeniu praw, malware, niebezpiecznych prośbach, obraźliwym zachowaniu, braku płatności lub poważnym naruszeniu warunków."],
      ["Co jeśli płatność jest opóźniona?", "Praca może zostać wstrzymana, gdy płatność jest zaległa. Start, przekazanie, finalne pliki lub pełny dostęp administratora mogą poczekać do zapłaty należnych kwot."],
      ["Czy możesz wyłączyć moją stronę?", "W pełni opłacona i przekazana strona nie jest wyłączana z powodu zwykłego sporu lub kwestii kredytu. Dostęp do nieopłaconej pracy, nieopłaconego hostingu/wsparcia albo środowisk przed transferem może być ograniczony zgodnie z ofertą."],
      ["Kto jest właścicielem repozytorium GitHub?", "Własność repozytorium zależy od finalnej oferty. Podczas produkcji może pozostać w moim workspace, a po finalnej płatności może zostać przeniesione lub wyeksportowane, jeśli jest to w zakresie."],
      ["Kto jest właścicielem projektu Vercel?", "Projekt Vercel jest obsługiwany zgodnie z pisemnymi ustaleniami. Może pozostać w moim koncie podczas produkcji, a potem zostać przeniesiony lub odtworzony w koncie klienta, jeśli jest to w zakresie i technicznie dostępne."],
      ["Czy projekt można przenieść na moje konta?", "Tak, jeśli transfer jest w zakresie i wszystkie należne kwoty są opłacone. Własność domeny, GitHub, Vercel i kont zewnętrznych jest potwierdzana przed handover."],
      ["Kto jest właścicielem domeny?", "Domena zwykle powinna należeć do klienta. Jeśli pomagam w konfiguracji, finalna oferta powinna określać, kto ją kupuje, kto płaci renewal fees i kto kontroluje DNS."],
      ["Co jeśli usługa zewnętrzna przestanie działać?", "Awarie usług zewnętrznych, zmiany API, problemy z subskrypcją lub polityką dostawcy są poza bezpośrednią kontrolą. Analiza i naprawa mogą być częścią wsparcia albo osobną wyceną."],
      ["Co jeśli sama/sam edytuję kod?", "Edycje klienta, zmiany stron trzecich albo aktualizacje pluginów mogą wpłynąć na warranty/support. Mogę to sprawdzić, ale odtworzenie lub adaptacja zmienionego kodu może być osobną pracą."],
      ["Co dzieje się po okresie bug-fix?", "Po wliczonym okresie naprawy błędów nowe fixes, aktualizacje, zmiany treści, dostosowania do przyszłych zmian przeglądarek i nowe funkcje są płatnym wsparciem, chyba że oferta stanowi inaczej."],
      ["Jak złożyć formalną skargę?", `Wyślij jasną pisemną skargę na ${siteConfig.contact.email}: numer zapytania, nazwę projektu, problem, zrzuty ekranu lub linki oraz oczekiwany rezultat.`],
      ["Które warunki dotyczą mojego projektu?", "Wersja warunków zaakceptowana przy wysłaniu zapytania jest zapisywana, ale finalna pisemna oferta może zmienić lub doprecyzować ogólne warunki dla konkretnego projektu."],
      ["Czy wsparcie po starcie jest wliczone?", `Może być wliczony ${tx(siteConfig.business.bugFixPeriod, "pl")}. Przyszłe aktualizacje, nowe treści i nowe funkcje są oddzielnymi usługami.`],
      ["Jakie dane są zbierane?", "Formularz może zbierać dane kontaktowe, odpowiedzi z kalkulatora, notatki o projekcie, linki inspiracji, budżet, terminy, statusy zgód i techniczne dane wysyłki."],
      ["Jak poprosić o usunięcie danych?", `Wyślij formalną prośbę dotyczącą prywatności na ${siteConfig.contact.email}. Przed zmianą lub usunięciem danych może być wymagana weryfikacja tożsamości.`]
    ]
  };
  return data[language] || data.en;
}

function renderFaq(language) {
  const page = pages.faq;
  const items = faqData(language)
    .map(
      ([q, a], index) => `
        <article class="faq-item">
          <button class="faq-question" type="button" aria-expanded="${index === 0}" aria-controls="faq${index}">
            <span>${q}</span><span aria-hidden="true">+</span>
          </button>
          <div class="faq-answer" id="faq${index}" ${index === 0 ? "" : "hidden"}>${a}</div>
        </article>
      `
    )
    .join("");

  injectFaqSchema(language);

  return `
    ${renderHero(page, language)}
    <div class="content-grid">
      ${section("faq", "01", tx(page.heading, language), `<div class="faq-list">${items}</div>`)}
    </div>
    ${cta(language)}
  `;
}

function legalSections(type, language) {
  const effectiveDate = type === "privacy" ? localizedPrivacyDate(language) : localizedEffectiveDate(language);
  const contact = siteConfig.contact.email;
  const data = {
    privacy: {
      en: [
        ["Introduction", `Effective date: ${effectiveDate}. Policy version: ${siteConfig.legal.PRIVACY_VERSION}. This Privacy Policy applies to the Yana Ellis portfolio, website calculators and project request forms.`],
        ["Information collected", "The forms may collect name, email, phone, company or project name, messenger usernames, current website, calculator answers, project requirements, budget expectations, deadlines, brand materials information, inspiration links, consent statuses, accepted Terms/Privacy/designer-credit versions, acceptance timestamps, submission ID, submission time and technical data."],
        ["How information is collected", "Information is provided directly by the user through calculators and request forms. Technical information may be processed automatically by hosting, security, delivery or email services when a request is submitted."],
        ["Purposes of processing", "Information is used to display a preliminary estimate, receive and review project requests, contact the user through the selected channel, prepare a final proposal, prevent spam or abuse, keep request records and document accepted terms."],
        ["Legal bases", "Depending on the user's location, processing may be based on pre-contract steps, contract performance, consent, legitimate interests in operating the service or legal obligations."],
        ["Service providers and sharing", `Requests may be processed by ${siteConfig.providers.hosting}, ${siteConfig.providers.requestProcessing}, ${siteConfig.providers.emailDelivery} and ${siteConfig.providers.telegramDelivery}. Information is not sold or shared for advertising.`],
        ["International transfers", "Providers may process data in different countries. Only information reasonably necessary to deliver and review the request is processed."],
        ["Retention", "Unsuccessful project requests may normally be retained for up to twelve months unless deletion is requested and no legal reason requires retention. Project correspondence, payment records, inactivity/cancellation notes, dispute records, support history and financial records may be kept longer where required or reasonably needed."],
        ["User rights", `Depending on applicable law, users may request access, correction, deletion, restriction, objection, portability or withdrawal of consent by emailing ${contact}.`],
        ["Security", "Reasonable organisational and technical measures are used to protect information, but no internet transmission or storage method is completely secure."],
        ["Children", "The services are intended for adults and business representatives. The website is not intended to knowingly collect personal information from children."],
        ["Third-party links", "The website links to portfolio projects, social networks, payment providers and other third-party services. Their own policies apply."],
        ["Changes to this policy", "This policy may be updated when services, providers or legal requirements change. The effective date will be revised for material updates."],
        ["Contact", `Privacy questions and formal requests should be sent to ${contact}. General project questions may also be sent to Telegram ${siteConfig.contact.telegram}.`]
      ],
      uk: [
        ["Вступ", `Дата набрання чинності: ${effectiveDate}. Версія політики: ${siteConfig.legal.PRIVACY_VERSION}. Ця Політика конфіденційності застосовується до портфоліо Yana Ellis, калькуляторів і форм заявки.`],
        ["Яка інформація збирається", "Форми можуть збирати ім'я, email, телефон, назву компанії або проєкту, username у месенджерах, поточний сайт, відповіді калькулятора, вимоги, бюджет, терміни, інформацію про бренд-матеріали, референси, статуси згоди, версії прийнятих Terms/Privacy/designer-credit умов, timestamps прийняття, submission ID, час відправки та технічні дані."],
        ["Як збирається інформація", "Дані надаються користувачем через калькулятори та форми. Технічна інформація може автоматично оброблятися хостингом, безпековими сервісами, сервісами доставки повідомлень або email-сервісами під час відправки заявки."],
        ["Навіщо використовуються дані", "Дані потрібні для попереднього розрахунку, отримання й перегляду заявки, контакту через вибраний канал, підготовки фінальної пропозиції, захисту від спаму, ведення записів заявки та документування прийнятих умов."],
        ["Правові підстави", "Залежно від локації користувача, обробка може базуватися на переддоговірних діях, виконанні договору, згоді, законному інтересі або юридичних обов'язках."],
        ["Сервіси та передача", `Заявки можуть обробляти ${siteConfig.providers.hosting}, ${siteConfig.providers.requestProcessing}, ${siteConfig.providers.emailDelivery} і ${siteConfig.providers.telegramDelivery}. Дані не продаються й не передаються для реклами.`],
        ["Міжнародна обробка", "Провайдери можуть обробляти дані в різних країнах. Обробляється лише інформація, розумно необхідна для доставки й перегляду заявки."],
        ["Зберігання", "Нереалізовані заявки зазвичай можуть зберігатися до дванадцяти місяців, якщо не запитано видалення й немає юридичної причини зберігати їх довше. Проєктне листування, платіжні записи, нотатки про неактивність/скасування, dispute records, історія підтримки та фінансові записи можуть зберігатися довше, якщо це потрібно або розумно необхідно."],
        ["Права користувача", `Залежно від закону, користувач може попросити доступ, виправлення, видалення, обмеження, заперечення, переносимість або відкликання згоди через email ${contact}.`],
        ["Безпека", "Використовуються розумні організаційні та технічні заходи, але жоден спосіб передачі або зберігання в інтернеті не є абсолютно безпечним."],
        ["Діти", "Послуги призначені для дорослих і представників бізнесу. Сайт не призначений для свідомого збору персональних даних дітей."],
        ["Сторонні посилання", "Сайт може посилатися на портфоліо, соцмережі, платіжні сервіси й інші сторонні ресурси. До них застосовуються їхні власні політики."],
        ["Зміни політики", "Політика може оновлюватися при зміні сервісів, провайдерів або правових вимог. Дата оновлюється при суттєвих змінах."],
        ["Контакт", `Формальні запити щодо приватності надсилайте на ${contact}. Загальні питання про проєкт можна також писати в Telegram ${siteConfig.contact.telegram}.`]
      ],
      pl: [
        ["Wprowadzenie", `Data wejścia w życie: ${effectiveDate}. Wersja polityki: ${siteConfig.legal.PRIVACY_VERSION}. Ta Polityka prywatności dotyczy portfolio Yana Ellis, kalkulatorów i formularzy zapytań.`],
        ["Zbierane informacje", "Formularze mogą zbierać imię, email, telefon, nazwę firmy lub projektu, nazwy w komunikatorach, obecną stronę, odpowiedzi z kalkulatora, wymagania, budżet, terminy, informacje o materiałach marki, linki inspiracji, statusy zgód, zaakceptowane wersje Terms/Privacy/designer-credit, acceptance timestamps, submission ID, czas wysłania i dane techniczne."],
        ["Jak dane są zbierane", "Dane są podawane bezpośrednio przez użytkownika w kalkulatorach i formularzach. Dane techniczne mogą być przetwarzane automatycznie przez hosting, zabezpieczenia, usługi dostarczania wiadomości lub pocztę email podczas wysyłki."],
        ["Cele przetwarzania", "Dane służą do pokazania wstępnej wyceny, otrzymania i analizy zapytania, kontaktu wybranym kanałem, przygotowania finalnej oferty, ochrony przed spamem, prowadzenia zapisów zapytania i dokumentowania zaakceptowanych warunków."],
        ["Podstawy prawne", "W zależności od lokalizacji użytkownika przetwarzanie może opierać się na działaniach przedumownych, wykonaniu umowy, zgodzie, uzasadnionym interesie albo obowiązku prawnym."],
        ["Usługodawcy i udostępnianie", `Zapytania mogą być przetwarzane przez ${siteConfig.providers.hosting}, ${siteConfig.providers.requestProcessing}, ${siteConfig.providers.emailDelivery} i ${siteConfig.providers.telegramDelivery}. Dane nie są sprzedawane ani udostępniane do reklamy.`],
        ["Transfery międzynarodowe", "Dostawcy mogą przetwarzać dane w różnych krajach. Przetwarzane są tylko informacje rozsądnie potrzebne do dostarczenia i analizy zapytania."],
        ["Przechowywanie", "Niezrealizowane zapytania mogą być zwykle przechowywane do dwunastu miesięcy, chyba że poprosisz o usunięcie i nie ma prawnego powodu dłuższego przechowania. Korespondencja projektowa, zapisy płatności, notatki o bezczynności/anulowaniu, dispute records, historia wsparcia i dokumentacja finansowa mogą być przechowywane dłużej, gdy jest to wymagane lub rozsądnie potrzebne."],
        ["Prawa użytkownika", `W zależności od prawa użytkownik może poprosić o dostęp, korektę, usunięcie, ograniczenie, sprzeciw, przeniesienie danych lub wycofanie zgody przez email ${contact}.`],
        ["Bezpieczeństwo", "Stosowane są rozsądne środki organizacyjne i techniczne, ale żadna transmisja ani metoda przechowywania online nie jest całkowicie bezpieczna."],
        ["Dzieci", "Usługi są przeznaczone dla dorosłych i przedstawicieli biznesu. Strona nie jest przeznaczona do świadomego zbierania danych dzieci."],
        ["Linki zewnętrzne", "Strona może linkować do portfolio, mediów społecznościowych, płatności i innych usług zewnętrznych. Obowiązują ich własne polityki."],
        ["Zmiany polityki", "Polityka może być aktualizowana przy zmianie usług, dostawców lub wymogów prawnych. Data zostanie zmieniona przy istotnych aktualizacjach."],
        ["Kontakt", `Formalne prośby prywatności wyślij na ${contact}. Ogólne pytania projektowe można też pisać na Telegram ${siteConfig.contact.telegram}.`]
      ]
    },
    terms: {
      en: [
        ["Scope", `Effective date: ${effectiveDate}. Terms version: ${siteConfig.legal.TERMS_VERSION}. These Terms govern use of the Yana Ellis portfolio website, calculators, project request forms and pre-contract information. A specific project is governed by the final written proposal, invoice and any separate agreement.`],
        ["Calculator estimates", "Calculator results are preliminary estimates for orientation only. They are not binding quotations, contracts, guarantees of availability or promises to accept a project."],
        ["Project acceptance", "Submitting a request does not obligate either party to proceed. A project begins only after scope, price, schedule and payment terms are agreed in writing and the required first payment has cleared."],
        ["Client responsibilities", "The client must provide accurate information, timely feedback, lawful content and necessary access. The client confirms they own or have permission to use supplied materials."],
        ["Services and scope changes", "Only items expressly included in the approved proposal are part of the project. Additional requests may require a revised price and schedule."],
        ["Payments", `Payments may be arranged through ${localizedPaymentMethods("en")}. Work may pause for overdue payments. Final deliverables, launch or credentials may be withheld until due amounts are paid. Payment timing, deposit size, stage payments and any large-project schedule are confirmed in the final proposal.`, "payments"],
        ["Client inactivity and delays", "If the client does not provide feedback, approvals, materials, access or content needed for the next stage, the delivery schedule may move. I may send reasonable follow-ups first. Extended inactivity can place the project on hold, archive the production slot or require a new schedule before work resumes.", "inactivity"],
        ["Agreed project pauses", "A project pause can be agreed in writing when the client needs more time. A paused project is not automatically abandoned, but restart timing depends on availability, project state, third-party changes and any extra review needed."],
        ["Cancellation and refunds", "If either side cancels before completion, paid amounts are reviewed proportionally. They may cover completed work, discovery, planning, reserved production time, agreed non-refundable expenses, third-party licences and any lawful cancellation fee stated in the final proposal. Any remaining balance is calculated individually.", "cancellation"],
        ["Intellectual property", "Upon full payment, the client receives the rights expressly stated in the proposal for final approved deliverables. Preliminary concepts, rejected designs, internal tools, reusable components and general know-how remain with Yana Ellis."],
        ["Portfolio use", "Unless confidentiality is agreed in writing before work begins, Yana Ellis may display the completed public project, screenshots and a factual description of the work in portfolio and promotional materials."],
        ["Designer credit discounts", `The optional designer credit discount applies only while the agreed linked credit remains visible and functional in the website footer. If it is removed, hidden, disabled or materially altered without written approval, I first send written notice and allow ${designerCreditCureDays()} calendar days to restore it. If it is not restored, the original discount amount may become payable. The website is not automatically disabled solely because the credit is removed.`, "designer-credit"],
        ["Hosting, repositories and transfer", "GitHub repositories, Vercel projects, domains, DNS records and third-party accounts are handled as agreed in the final proposal. During production, code or deployments may remain in my workspace. Transfer, export or recreation under the client's accounts happens after final payment when it is included and technically available.", "hosting-transfer"],
        ["Third-party services", "Domains, hosting, plugins, payment processors, booking services, fonts, stock assets, email delivery, external APIs and subscriptions may have separate fees, terms, outages, usage limits and policy changes."],
        ["Security, backups and data loss", "Reasonable care is used when working with credentials, files and deployments, but no online system is completely secure. The client is responsible for keeping control of their own accounts, renewal payments and backups after handover unless ongoing support says otherwise.", "security"],
        ["Warranties and limitations", "Services are performed with reasonable care and skill. No guarantee is made regarding uninterrupted operation, future browser changes, search rankings, sales, revenue or third-party availability."],
        ["Prohibited projects and conduct", "Requests may be refused or terminated for unlawful content, infringement, deception, malware, harassment, exploitation, non-payment or abusive conduct."],
        ["Suspension and termination", "Work may be suspended for non-payment, missing materials, unresolved approvals or breach. A project may be terminated with notice for prolonged inactivity, unlawful requests, abusive conduct, unsafe behaviour, infringement, malware, non-payment or serious breach. Cancellation and refund treatment follows the final proposal and project stage.", "termination"],
        ["Complaints and disputes", `Formal complaints should be sent to ${siteConfig.contact.email} with the request ID, project name, issue, evidence and requested outcome. I will review the issue in writing. ${tx(siteConfig.legal.governingLawNote, "en")}`, "disputes"],
        ["Changes", "Website Terms may be updated. Changes do not retroactively replace a signed project agreement unless both parties agree in writing."],
        ["Contact", `General questions: ${siteConfig.contact.telegram} or ${siteConfig.contact.email}. Formal notices concerning payments, cancellation, legal rights or privacy should be sent by email.`]
      ],
      uk: [
        ["Сфера дії", `Дата набрання чинності: ${effectiveDate}. Версія умов: ${siteConfig.legal.TERMS_VERSION}. Ці Умови регулюють використання портфоліо Yana Ellis, калькуляторів, форм заявки та переддоговірної інформації. Конкретний проєкт регулюється фінальною письмовою пропозицією, рахунком і окремою угодою, якщо вона є.`],
        ["Оцінки калькулятора", "Результати калькулятора є лише попередньою орієнтовною оцінкою. Вони не є обов'язковою пропозицією, договором, гарантією доступності або обіцянкою прийняти проєкт."],
        ["Прийняття проєкту", "Надсилання заявки не зобов'язує жодну сторону продовжувати. Проєкт починається лише після письмового погодження обсягу, ціни, графіка, оплати та надходження першого платежу."],
        ["Обов'язки клієнта", "Клієнт має надати точну інформацію, своєчасний відгук, законний контент і потрібні доступи. Клієнт підтверджує, що має права на надані матеріали."],
        ["Послуги та зміни обсягу", "До проєкту входять лише позиції, прямо зазначені у затвердженій пропозиції. Додаткові запити можуть потребувати нової ціни й графіка."],
        ["Оплата", `Оплату можна погодити через ${localizedPaymentMethods("uk")}. Робота може зупинятися через прострочення. Фінальні матеріали, запуск або доступи можуть утримуватися до повної оплати належних сум. Точний графік, розмір першого платежу, етапні платежі та умови великого проєкту підтверджуються у фінальній пропозиції.`, "payments"],
        ["Неактивність клієнта і затримки", "Якщо клієнт не надає фідбек, затвердження, матеріали, доступи або контент, потрібні для наступного етапу, графік може зміститися. Спочатку можуть бути розумні follow-up повідомлення. Тривала неактивність може поставити проєкт на паузу, архівувати виробничий слот або потребувати нового графіка перед продовженням.", "inactivity"],
        ["Погоджені паузи", "Паузу можна погодити письмово, якщо клієнту потрібен додатковий час. Пауза не означає автоматичну відмову від проєкту, але повернення залежить від доступності, стану проєкту, змін сторонніх сервісів і додаткового перегляду."],
        ["Скасування і повернення коштів", "Якщо одна зі сторін скасовує проєкт до завершення, сплачені суми переглядаються пропорційно. Вони можуть покривати виконану роботу, discovery, planning, зарезервований виробничий час, погоджені невідшкодовувані витрати, сторонні ліцензії та законний cancellation fee, якщо він зазначений у фінальній пропозиції. Залишок розраховується індивідуально.", "cancellation"],
        ["Інтелектуальна власність", "Після повної оплати клієнт отримує права, прямо зазначені у пропозиції. Чернетки, відхилені концепти, внутрішні інструменти, повторно використовувані компоненти й загальні напрацювання залишаються у Yana Ellis."],
        ["Використання в портфоліо", "Якщо конфіденційність не погоджена письмово до початку роботи, Yana Ellis може показувати публічний завершений проєкт, скриншоти й опис роботи у портфоліо та промоматеріалах."],
        ["Знижки за дизайнерський кредит", `Опційна знижка за дизайнерський кредит діє лише поки погоджений активний кредит залишається видимим і функціональним у футері сайту. Якщо його видалено, приховано, вимкнено або суттєво змінено без письмової згоди, я спочатку надсилаю письмове повідомлення й даю ${designerCreditCureDays()} календарних днів на відновлення. Якщо кредит не відновлено, початкова сума знижки може стати до оплати. Сайт не вимикається автоматично лише через видалення кредиту.`, "designer-credit"],
        ["Хостинг, репозиторії та передача", "GitHub-репозиторії, Vercel-проєкти, домени, DNS-записи та сторонні акаунти ведуться згідно з фінальною пропозицією. Під час роботи код або деплої можуть залишатися у моєму workspace. Передача, експорт або повторне створення в акаунтах клієнта відбувається після фінальної оплати, якщо це включено й технічно доступно.", "hosting-transfer"],
        ["Сторонні сервіси", "Домени, хостинг, плагіни, платіжні системи, бронювання, шрифти, стокові матеріали, email delivery, зовнішні API та підписки можуть мати окремі платежі, умови, перебої, ліміти використання й зміни правил."],
        ["Безпека, резервні копії та втрата даних", "Під час роботи з доступами, файлами й деплоями використовується розумна обережність, але жодна онлайн-система не є повністю безпечною. Після handover клієнт відповідає за контроль власних акаунтів, renewal payments і backups, якщо ongoing support не передбачає інше.", "security"],
        ["Гарантії та обмеження", "Послуги виконуються з розумною турботою та навичками. Не гарантуються безперервна робота, майбутні зміни браузерів, позиції в пошуку, продажі, дохід або доступність сторонніх сервісів."],
        ["Заборонені проєкти та поведінка", "Запити можуть бути відхилені або припинені через незаконний контент, порушення прав, обман, зловмисне програмне забезпечення, переслідування, експлуатацію, несплату або образливу поведінку."],
        ["Призупинення та припинення", "Робота може бути призупинена через несплату, відсутність матеріалів, невирішені затвердження або порушення. Проєкт може бути припинений з повідомленням через тривалу неактивність, незаконні запити, образливу поведінку, небезпечні дії, порушення прав, malware, несплату або серйозне порушення умов. Скасування й повернення коштів залежать від фінальної пропозиції та етапу проєкту.", "termination"],
        ["Скарги та спори", `Формальні скарги потрібно надсилати на ${siteConfig.contact.email} із номером заявки, назвою проєкту, описом проблеми, доказами та бажаним результатом. Я розгляну питання письмово. ${tx(siteConfig.legal.governingLawNote, "uk")}`, "disputes"],
        ["Зміни", "Умови сайту можуть оновлюватися. Зміни не замінюють підписану угоду заднім числом, якщо сторони письмово не погодили інше."],
        ["Контакт", `Загальні питання: ${siteConfig.contact.telegram} або ${siteConfig.contact.email}. Формальні повідомлення щодо оплати, скасування, прав або приватності потрібно надсилати електронною поштою.`]
      ],
      pl: [
        ["Zakres", `Data wejścia w życie: ${effectiveDate}. Wersja regulaminu: ${siteConfig.legal.TERMS_VERSION}. Te Warunki regulują korzystanie z portfolio Yana Ellis, kalkulatorów, formularzy zapytań i informacji przedumownych. Konkretny projekt podlega finalnej pisemnej ofercie, fakturze i ewentualnej oddzielnej umowie.`],
        ["Wyceny z kalkulatora", "Wyniki kalkulatora są wycenami wstępnymi wyłącznie orientacyjnie. Nie są wiążącą ofertą, umową, gwarancją dostępności ani obietnicą przyjęcia projektu."],
        ["Akceptacja projektu", "Wysłanie zapytania nie zobowiązuje żadnej strony do rozpoczęcia. Projekt zaczyna się dopiero po pisemnym uzgodnieniu zakresu, ceny, harmonogramu, płatności i zaksięgowaniu pierwszej płatności."],
        ["Obowiązki klienta", "Klient musi podać dokładne informacje, terminowe informacje zwrotne, legalne treści i potrzebne dostępy. Klient potwierdza, że ma prawa do dostarczonych materiałów."],
        ["Usługi i zmiany zakresu", "Zakres obejmuje tylko elementy wyraźnie wskazane w zaakceptowanej ofercie. Dodatkowe prośby mogą wymagać nowej ceny i harmonogramu."],
        ["Płatności", `Płatność może odbyć się przez ${localizedPaymentMethods("pl")}. Praca może zostać wstrzymana przy zaległościach. Finalne materiały, start lub dostępy mogą być wstrzymane do opłacenia należnych kwot. Dokładny harmonogram, wysokość pierwszej płatności, płatności etapowe i zasady dużego projektu są potwierdzane w finalnej ofercie.`, "payments"],
        ["Bezczynność klienta i opóźnienia", "Jeśli klient nie dostarczy feedbacku, akceptacji, materiałów, dostępów lub treści potrzebnych do następnego etapu, harmonogram może się przesunąć. Najpierw mogą zostać wysłane rozsądne przypomnienia. Dłuższa bezczynność może wstrzymać projekt, zarchiwizować slot produkcyjny lub wymagać nowego harmonogramu przed wznowieniem.", "inactivity"],
        ["Uzgodnione pauzy", "Pauza może zostać uzgodniona pisemnie, gdy klient potrzebuje więcej czasu. Pauza nie oznacza automatycznego porzucenia projektu, ale powrót zależy od dostępności, stanu projektu, zmian usług zewnętrznych i ewentualnej dodatkowej analizy."],
        ["Anulowanie i zwroty", "Jeśli którakolwiek strona anuluje projekt przed zakończeniem, opłacone kwoty są analizowane proporcjonalnie. Mogą pokrywać wykonaną pracę, discovery, planning, zarezerwowany czas produkcyjny, uzgodnione koszty bezzwrotne, licencje zewnętrzne oraz legalną opłatę cancellation fee, jeśli została wskazana w finalnej ofercie. Pozostały balans jest liczony indywidualnie.", "cancellation"],
        ["Własność intelektualna", "Po pełnej płatności klient otrzymuje prawa wyraźnie opisane w ofercie. Koncepcje wstępne, odrzucone projekty, narzędzia wewnętrzne, komponenty wielokrotnego użytku i ogólna wiedza techniczna pozostają przy Yana Ellis."],
        ["Użycie w portfolio", "Jeśli poufność nie została uzgodniona pisemnie przed startem, Yana Ellis może pokazać ukończony publiczny projekt, zrzuty ekranu i opis pracy w portfolio oraz materiałach promocyjnych."],
        ["Rabaty za kredyt projektantki", `Opcjonalny rabat za kredyt projektantki obowiązuje tylko wtedy, gdy uzgodniony aktywny kredyt pozostaje widoczny i funkcjonalny w stopce strony. Jeśli zostanie usunięty, ukryty, wyłączony albo istotnie zmieniony bez pisemnej zgody, najpierw wysyłam pisemne powiadomienie i daję ${designerCreditCureDays()} dni kalendarzowych na przywrócenie. Jeśli kredyt nie zostanie przywrócony, pierwotna kwota rabatu może stać się należna. Strona nie jest automatycznie wyłączana wyłącznie z powodu usunięcia kredytu.`, "designer-credit"],
        ["Hosting, repozytoria i transfer", "Repozytoria GitHub, projekty Vercel, domeny, rekordy DNS i konta usług zewnętrznych są obsługiwane zgodnie z finalną ofertą. Podczas produkcji kod lub wdrożenia mogą pozostać w moim workspace. Transfer, eksport albo odtworzenie w kontach klienta następuje po finalnej płatności, jeśli jest w zakresie i technicznie dostępne.", "hosting-transfer"],
        ["Usługi zewnętrzne", "Domeny, hosting, wtyczki, procesory płatności, rezerwacje, fonty, materiały stockowe, email delivery, zewnętrzne API i subskrypcje mogą mieć oddzielne opłaty, warunki, awarie, limity użycia i zmiany zasad."],
        ["Bezpieczeństwo, backupy i utrata danych", "Przy pracy z dostępami, plikami i wdrożeniami stosowana jest rozsądna ostrożność, ale żadna usługa online nie jest w pełni bezpieczna. Po handover klient odpowiada za kontrolę własnych kont, renewal payments i backupy, chyba że ongoing support stanowi inaczej.", "security"],
        ["Gwarancje i ograniczenia", "Usługi są wykonywane z rozsądną starannością i umiejętnością. Nie gwarantuje się nieprzerwanego działania, przyszłych zmian przeglądarek, pozycji w wyszukiwarce, sprzedaży, przychodów ani dostępności usług zewnętrznych."],
        ["Zakazane projekty i zachowanie", "Zapytania mogą zostać odrzucone lub zakończone z powodu treści nielegalnych, naruszeń praw, oszustwa, złośliwego oprogramowania, nękania, wykorzystywania, braku płatności lub obraźliwego zachowania."],
        ["Wstrzymanie i zakończenie", "Praca może zostać wstrzymana przez brak płatności, materiałów, akceptacji lub naruszenie. Projekt może zostać zakończony z powiadomieniem przy długiej bezczynności, nielegalnych prośbach, obraźliwym zachowaniu, niebezpiecznych działaniach, naruszeniu praw, malware, braku płatności lub poważnym naruszeniu warunków. Anulowanie i zwroty zależą od finalnej oferty i etapu projektu.", "termination"],
        ["Skargi i spory", `Formalne skargi należy wysyłać na ${siteConfig.contact.email} z numerem zapytania, nazwą projektu, opisem problemu, dowodami i oczekiwanym rezultatem. Sprawę analizuję pisemnie. ${tx(siteConfig.legal.governingLawNote, "pl")}`, "disputes"],
        ["Zmiany", "Warunki strony mogą być aktualizowane. Zmiany nie zastępują podpisanej umowy wstecznie, chyba że obie strony uzgodnią to pisemnie."],
        ["Kontakt", `Pytania ogólne: ${siteConfig.contact.telegram} lub ${siteConfig.contact.email}. Formalne zawiadomienia o płatnościach, anulowaniu, prawach lub prywatności należy wysyłać emailem.`]
      ]
    }
  };

  return data[type][language] || data[type].en;
}

function renderLegal(type, language) {
  const page = pages[type];
  const sections = legalSections(type, language)
    .map(([title, copy, id], index) => `<article class="policy-card" id="${id || `${type}-section-${index + 1}`}"><h3>${index + 1}. ${title}</h3><p class="policy-note">${copy}</p></article>`)
    .join("");
  const legalNav = type === "terms" ? anchorNav(termsAnchorItems(language)) : "";
  const printAction =
    type === "terms"
      ? `<p class="policy-links print-policy"><button class="nav-link print-button" type="button" data-print-page>${printLabel(language)}</button></p>`
      : "";

  return `
    ${renderHero(page, language)}
    ${legalNav}
    <div class="content-grid">
      ${section(type, "01", tx(page.heading, language), `${printAction}<div class="policy-list">${sections}</div>`)}
    </div>
    ${cta(language)}
  `;
}

function injectFaqSchema(language) {
  document.querySelector("#faqSchema")?.remove();
  if (language !== "en") return;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData("en").map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer }
    }))
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = "faqSchema";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

function renderPage(language = currentLanguage()) {
  const pageKey = document.body.dataset.page;
  const page = pages[pageKey];
  if (!page) return;

  localStorage.setItem(languageKey, language);
  setMeta(page, language);
  renderShell(page, language);

  const root = document.querySelector("#pageRoot");
  if (pageKey === "projectGuide") {
    root.innerHTML = renderProjectGuide(language);
  }
  if (pageKey === "faq") {
    root.innerHTML = renderFaq(language);
  }
  if (pageKey === "privacy" || pageKey === "terms") {
    root.innerHTML = renderLegal(pageKey, language);
  }

  document.querySelectorAll(".language-button").forEach((button) => {
    button.addEventListener("click", () => renderPage(button.dataset.lang));
  });

  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const answer = document.querySelector(`#${button.getAttribute("aria-controls")}`);
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      if (answer) answer.hidden = expanded;
    });
  });

  document.querySelector("[data-print-page]")?.addEventListener("click", () => window.print());
}

renderPage();
