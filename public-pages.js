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
      en: "How website projects work with Yana Ellis: calculator, review, payment, revisions, launch, support and promotional discount conditions.",
      uk: "Як проходить створення сайту з Yana Ellis: калькулятор, перегляд заявки, оплата, правки, запуск, підтримка та умови знижки.",
      pl: "Jak wygląda projekt strony z Yaną Ellis: kalkulator, analiza, płatności, poprawki, start, wsparcie i warunki rabatu promocyjnego."
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
      en: ["Process", "Communication", "Payment", "Revisions", "Promotion", "FAQ", "Privacy", "Terms"],
      uk: ["Процес", "Комунікація", "Оплата", "Правки", "Знижка", "FAQ", "Privacy", "Terms"],
      pl: ["Proces", "Komunikacja", "Płatność", "Poprawki", "Promocja", "FAQ", "Prywatność", "Regulamin"]
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
        ["Personal review within 1-2 business days", "I normally review new requests within 1-2 business days. I check selected requirements, complexity, timeline, available materials, promotional discount conditions and possible conflicts in scope."],
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
        ["Структура і дизайн-напрям", "Я готую структуру інформації та візуальний напрям. Залежно від проєкту це може бути sitemap, wireframes, ключові екрани або дизайн-концепт."],
        ["Дизайн і раунди правок", "У пропозиції вказано кількість раундів. Один раунд - це один організований список розумних змін до поточного етапу."],
        ["Розробка", "Після затвердження дизайну сайт адаптивно реалізується для погоджених екранів. У розробку можуть входити форми, CMS, калькулятори, бронювання, фільтри, галереї та інтеграції, якщо вони в обсязі."],
        ["Тестування", "Сайт перевіряється на адаптивність, навігацію, форми, посилання, сумісність з основними браузерами й погоджену функціональність."],
        ["Фінальне затвердження та залишок оплати", "Залишок і погоджені додаткові роботи сплачуються до публічного запуску, передачі production-файлів або повного доступу адміністратора."],
        ["Запуск і передача", "Після фінального затвердження й оплати сайт підключається до домену та хостингу. Якщо це включено, ви отримуєте базові інструкції й потрібні доступи."],
        ["Підтримка після запуску", "Короткий період виправлення помилок може бути включений у пропозицію. Він покриває помилки в реалізованій функціональності, а не новий контент, нові функції чи зміну затвердженого дизайну."]
      ],
      pl: [
        ["Zobacz portfolio", "Przejrzyj wybrane projekty, aby zrozumieć kierunek wizualny, jakość interakcji, responsywność i sposób pełnej realizacji stron. Portfolio pokazuje styl oraz proces, ale nie jest kopiowane jako szablon."],
        ["Wypełnij kalkulator", "Odpowiedz na pytania o cel strony, liczbę podstron, treści, design, animacje, języki, termin i wsparcie. Kalkulator tworzy wstępną wycenę oraz uporządkowane podsumowanie projektu."],
        ["Sprawdź wstępną wycenę", "Kwota jest orientacyjna. Finalna cena może się zmienić po analizie złożoności designu, ilości treści, integracji, szczegółów technicznych i innych niuansów projektu."],
        ["Wyślij zapytanie", "Możesz tylko zobaczyć wycenę albo wysłać wynik kalkulatora z danymi kontaktowymi. Wysłanie zapytania oznacza, że mogę skontaktować się z Tobą, aby doprecyzować zamówienie."],
        ["Analiza w ciągu 1-2 dni roboczych", "Zazwyczaj analizuję nowe zapytania w ciągu 1-2 dni roboczych. Sprawdzam wymagania, złożoność, termin, materiały, warunki rabatu i możliwe konflikty zakresu."],
        ["Pytania doprecyzowujące", "Kontaktuję się wybranym kanałem. Rozmowy nie są obowiązkowe, jeśli projekt można wyjaśnić pisemnie. Większość projektów da się omówić przez email lub Telegram."],
        ["Finalna oferta i zakres", "Po doprecyzowaniu otrzymujesz pisemną ofertę z potwierdzonym zakresem, ceną, harmonogramem, planem płatności, poprawkami, materiałami, kosztami zewnętrznymi i warunkami specjalnymi."],
        ["Płatność i rezerwacja projektu", "Praca zaczyna się po zaakceptowaniu oferty i zaksięgowaniu pierwszej płatności. Płatność może odbyć się przez Payoneer, Wise albo przelew bankowy, zależnie od dostępności."],
        ["Zebranie treści i dostępów", "Dostarczasz logo, kolory, teksty, zdjęcia, tłumaczenia, dane prawne firmy, dostęp do hostingu lub usług zewnętrznych. Nie trzeba wysyłać wszystkich plików przez kalkulator."],
        ["Struktura i kierunek designu", "Przygotowuję strukturę informacji oraz kierunek wizualny. W zależności od projektu może to być sitemap, wireframes, kluczowe ekrany albo koncept designu."],
        ["Design i rundy poprawek", "Oferta określa liczbę rund. Jedna runda oznacza jedną uporządkowaną listę rozsądnych zmian do bieżącego etapu."],
        ["Development", "Po akceptacji designu strona jest wdrażana responsywnie dla ustalonych ekranów. Zakres może obejmować formularze, CMS, kalkulatory, rezerwacje, filtry, galerie i integracje."],
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
      en: "Answers about website pricing, process, payments, revisions, support, ownership, privacy and promotional discount conditions.",
      uk: "Відповіді про ціни, процес, оплату, правки, підтримку, права, конфіденційність та умови знижки.",
      pl: "Odpowiedzi o cenach, procesie, płatnościach, poprawkach, wsparciu, prawach, prywatności i rabacie promocyjnym."
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
      ["faq", anchors[5]],
      ["privacy", anchors[6]],
      ["terms", anchors[7]]
    ])}
    <div class="content-grid">
      ${section("process", "01", tx(page.processTitle, language), `<div class="step-list">${steps}</div>`)}
      ${section("communication", "02", guideCopy.communicationTitle, `<div class="card-grid">${guideCopy.communication.map(infoCard).join("")}</div>`)}
      ${section("payment", "03", guideCopy.paymentTitle, `<div class="card-grid">${guideCopy.payment.map(infoCard).join("")}</div>`)}
      ${section("revisions", "04", guideCopy.revisionsTitle, `<div class="card-grid">${guideCopy.revisions.map(infoCard).join("")}</div>`)}
      ${section("promotion", "05", guideCopy.promotionTitle, `<p>${guideCopy.promotionIntro}</p><div class="card-grid">${guideCopy.promotion.map(infoCard).join("")}</div>`)}
      ${section("faq", "06", labels.faq, `<p>${guideCopy.faqIntro}</p><a class="nav-link" href="faq.html">${labels.faq}</a>`)}
      ${section("privacy", "07", labels.privacy, `<p>${guideCopy.privacyIntro}</p><a class="nav-link" href="privacy-policy.html">${labels.privacy}</a>`)}
      ${section("terms", "08", labels.terms, `<p>${guideCopy.termsIntro}</p><a class="nav-link" href="terms-of-service.html">${labels.terms}</a>`)}
    </div>
    ${cta(language)}
  `;
}

function infoCard(item) {
  return `<article class="info-card"><h3>${item[0]}</h3><p class="condition-copy">${item[1]}</p></article>`;
}

function guideSections(language) {
  const paymentMethods = siteConfig.business.paymentMethods.join(", ");
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
      promotionTitle: "Promotional Partnership Discount",
      promotionIntro: "The standard no-credit price is always available. Promotional discounts are optional and apply only when the written conditions are accepted.",
      promotion: [
        ["Standard price", "No public credit is required and no promotional discount is applied."],
        ["Footer credit", `${siteConfig.promotion.footerCreditDiscount}% discount if a small linked designer credit remains visible in the website footer for at least ${siteConfig.promotion.displayPeriodMonths} months.`],
        ["Social post", `${siteConfig.promotion.socialPostDiscount}% discount if a qualifying public social media post credits and tags Yana Ellis within ${siteConfig.promotion.postingDeadlineDays} days after launch.`],
        ["Combined", `${siteConfig.promotion.combinedDiscount}% discount when both the footer credit and qualifying post conditions are met.`],
        ["Early removal", "If the credit is removed early or the post is not published or is deleted early, the original discount amount becomes payable."]
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
      promotionTitle: "Рекламна партнерська знижка",
      promotionIntro: "Стандартна ціна без публічного кредиту завжди доступна. Рекламні знижки є опційними й діють лише після письмового погодження умов.",
      promotion: [
        ["Стандартна ціна", "Публічний кредит не потрібен, знижка не застосовується."],
        ["Кредит у футері", `${siteConfig.promotion.footerCreditDiscount}% знижки, якщо невеликий активний кредит дизайнера залишається у футері сайту щонайменше ${siteConfig.promotion.displayPeriodMonths} місяців.`],
        ["Публікація в соцмережах", `${siteConfig.promotion.socialPostDiscount}% знижки, якщо відповідний публічний пост згадує й тегує Yana Ellis протягом ${siteConfig.promotion.postingDeadlineDays} днів після запуску.`],
        ["Комбінований варіант", `${siteConfig.promotion.combinedDiscount}% знижки, якщо виконані умови кредиту у футері та публікації.`],
        ["Дострокове видалення", "Якщо кредит прибрано раніше або пост не опубліковано чи видалено раніше, сума початкової знижки підлягає оплаті."]
      ],
      faqIntro: "FAQ відповідає на питання про ціни, оплату, права, підтримку, контент, терміни та знижки.",
      privacyIntro: "Privacy Policy пояснює, які дані збираються через калькулятор і форму, які сервіси їх обробляють та як попросити виправлення чи видалення.",
      termsIntro: "Terms of Service пояснює обмеження калькулятора, прийняття проєкту, оплату, обсяг, права, сторонні сервіси та формальні повідомлення."
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
        ["Opóźnienia i pauzy", "Jeśli feedback, dostępy lub materiały są opóźnione, termin może się przesunąć. Dłuższa bezczynność może wstrzymać projekt i wymagać nowego harmonogramu."]
      ],
      promotionTitle: "Rabat promocyjny",
      promotionIntro: "Standardowa cena bez publicznego kredytu zawsze jest dostępna. Rabaty promocyjne są opcjonalne i działają tylko po pisemnej akceptacji warunków.",
      promotion: [
        ["Cena standardowa", "Publiczny kredyt nie jest wymagany i rabat nie jest naliczany."],
        ["Kredyt w stopce", `${siteConfig.promotion.footerCreditDiscount}% rabatu, jeśli mały aktywny kredyt projektantki pozostaje w stopce strony przez co najmniej ${siteConfig.promotion.displayPeriodMonths} miesięcy.`],
        ["Publikacja w social media", `${siteConfig.promotion.socialPostDiscount}% rabatu, jeśli kwalifikujący się publiczny post oznacza Yanę Ellis w ciągu ${siteConfig.promotion.postingDeadlineDays} dni od startu.`],
        ["Opcja łączona", `${siteConfig.promotion.combinedDiscount}% rabatu, jeśli spełnione są warunki kredytu w stopce i publikacji.`],
        ["Wcześniejsze usunięcie", "Jeśli kredyt zostanie usunięty wcześniej albo post nie zostanie opublikowany lub zostanie usunięty wcześniej, pierwotna kwota rabatu staje się należna."]
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
      ["How do payments work?", `Payment can be arranged through ${siteConfig.business.paymentMethods.join(", ")}. Most projects use ${siteConfig.business.defaultDeposit} before work begins and the remaining amount before launch or transfer.`],
      ["Who pays for domain and hosting?", "The client normally pays domain, hosting and recurring third-party services directly unless the final proposal states otherwise."],
      ["How many revisions are included?", `The default is ${tx(siteConfig.business.revisionDefault, "en")}. Extra rounds, new pages, new functionality or major direction changes are additional work.`],
      ["What if I do not have text or photos?", "Content preparation, image sourcing or professional services can be added to scope. Stock licences and external services are charged separately."],
      ["Who owns the finished website?", "After full payment, the client receives the rights and access described in the final proposal. Third-party tools, fonts and libraries remain subject to their own licences."],
      ["Can the project be shown in the portfolio?", "Unless confidentiality is agreed in writing before work begins, the completed public project may be shown in the Yana Ellis portfolio and promotional materials."],
      ["What is the promotional discount?", "It is optional. You can choose the standard price, footer credit discount, social media publication discount, combined option or ask to discuss eligibility."],
      ["Can I remove the footer credit later?", "Yes, but if it is removed before the agreed public display period ends, the original discount amount becomes payable before removal."],
      ["Is post-launch support included?", `${tx(siteConfig.business.bugFixPeriod, "en")} may be included. Future updates, new content and new features are separate services.`],
      ["What data is collected?", "The form may collect contact details, calculator answers, project notes, inspiration links, budget expectations, deadlines, consent statuses and technical submission data."],
      ["How can I request deletion?", `Send a formal privacy request to ${siteConfig.contact.email}. Identity verification may be required before data is changed or deleted.`]
    ],
    uk: [
      ["Чи обов'язковий дзвінок?", "Ні. Більшість проєктів можна обговорити через email, Telegram або інший погоджений письмовий канал. Дзвінок пропонується лише тоді, коли письмового уточнення недостатньо."],
      ["Чи є ціна з калькулятора фінальною?", "Ні. Це попередня оцінка. Фінальна ціна підтверджується тільки після перегляду заявки, дизайну, контенту, технічних деталей та інтеграцій."],
      ["Чи можна подивитися ціну без відправки заявки?", "Так. Наприкінці калькулятора можна лише переглянути приблизну оцінку. Нічого не надсилається, доки ви не оберете надсилання заявки."],
      ["Що буде після відправки заявки?", `Зазвичай я переглядаю її протягом ${tx(siteConfig.business.responseTime, "uk")}, а потім пишу через вибраний канал із питаннями або фінальною письмовою пропозицією.`],
      ["Як працює оплата?", `Оплата можлива через ${siteConfig.business.paymentMethods.join(", ")}. У більшості проєктів ${siteConfig.business.defaultDeposit} сплачується до початку роботи, а залишок - перед запуском або передачею.`],
      ["Хто платить за домен і хостинг?", "Зазвичай клієнт оплачує домен, хостинг і регулярні сторонні сервіси напряму, якщо фінальна пропозиція не передбачає інше."],
      ["Скільки правок включено?", `Стандартно включено ${tx(siteConfig.business.revisionDefault, "uk")}. Додаткові раунди, сторінки, функції або велика зміна напряму оплачуються окремо.`],
      ["Що якщо в мене немає текстів або фото?", "Підготовку контенту, пошук зображень або професійні послуги можна додати в обсяг. Стокові ліцензії та зовнішні сервіси оплачуються окремо."],
      ["Кому належить готовий сайт?", "Після повної оплати клієнт отримує права й доступи, описані у фінальній пропозиції. Сторонні інструменти, шрифти й бібліотеки мають власні ліцензії."],
      ["Чи можна показувати проєкт у портфоліо?", "Якщо конфіденційність не погоджена письмово до початку роботи, публічний завершений проєкт може бути показаний у портфоліо Yana Ellis."],
      ["Що таке рекламна знижка?", "Це опційна програма. Можна обрати стандартну ціну, знижку за кредит у футері, знижку за пост, комбінований варіант або обговорити доступні опції."],
      ["Чи можна прибрати кредит у футері пізніше?", "Так, але якщо він прибирається до завершення погодженого періоду, початкова сума знижки стає payable перед видаленням."],
      ["Чи включена підтримка після запуску?", `Може бути включено ${tx(siteConfig.business.bugFixPeriod, "uk")}. Майбутні оновлення, новий контент і нові функції є окремими послугами.`],
      ["Які дані збираються?", "Форма може збирати контакти, відповіді калькулятора, нотатки про проєкт, референси, бюджет, терміни, статуси згоди й технічні дані відправки."],
      ["Як попросити видалення?", `Надішліть формальний privacy request на ${siteConfig.contact.email}. Перед зміною або видаленням даних може знадобитися перевірка особи.`]
    ],
    pl: [
      ["Czy muszę umawiać rozmowę?", "Nie. Większość projektów można omówić przez email, Telegram albo inny uzgodniony kanał pisemny. Rozmowa jest proponowana tylko wtedy, gdy pisemne wyjaśnienia byłyby niewystarczające."],
      ["Czy cena z kalkulatora jest finalna?", "Nie. To wycena wstępna. Finalna cena jest potwierdzana dopiero po analizie zapytania, kierunku designu, ilości treści, szczegółów technicznych i integracji."],
      ["Czy mogę zobaczyć cenę bez wysyłania zapytania?", "Tak. Na końcu kalkulatora możesz tylko zobaczyć orientacyjną wycenę. Nic nie jest wysyłane, dopóki nie wybierzesz wysłania zapytania."],
      ["Co dzieje się po wysłaniu zapytania?", `Zwykle analizuję je w ciągu ${tx(siteConfig.business.responseTime, "pl")}, a następnie kontaktuję się wybranym kanałem z pytaniami albo finalną pisemną ofertą.`],
      ["Jak działa płatność?", `Płatność może odbyć się przez ${siteConfig.business.paymentMethods.join(", ")}. Większość projektów używa ${siteConfig.business.defaultDeposit} przed startem pracy, a reszty przed uruchomieniem lub przekazaniem.`],
      ["Kto płaci za domenę i hosting?", "Klient zwykle opłaca domenę, hosting i cykliczne usługi zewnętrzne bezpośrednio, chyba że finalna oferta stanowi inaczej."],
      ["Ile poprawek jest wliczone?", `Standardowo obowiązują ${tx(siteConfig.business.revisionDefault, "pl")}. Dodatkowe rundy, podstrony, funkcje lub duża zmiana kierunku są wyceniane oddzielnie.`],
      ["Co jeśli nie mam tekstów lub zdjęć?", "Przygotowanie treści, dobór zdjęć albo usługi profesjonalne można dodać do zakresu. Licencje stockowe i usługi zewnętrzne są płatne oddzielnie."],
      ["Kto jest właścicielem gotowej strony?", "Po pełnej płatności klient otrzymuje prawa i dostępy opisane w finalnej ofercie. Narzędzia zewnętrzne, fonty i biblioteki podlegają własnym licencjom."],
      ["Czy projekt może być pokazany w portfolio?", "Jeśli poufność nie została uzgodniona pisemnie przed startem pracy, ukończony publiczny projekt może zostać pokazany w portfolio Yana Ellis."],
      ["Czym jest rabat promocyjny?", "To opcjonalny program. Możesz wybrać cenę standardową, rabat za kredyt w stopce, rabat za post, opcję łączoną albo poprosić o omówienie dostępnych opcji."],
      ["Czy mogę później usunąć kredyt ze stopki?", "Tak, ale jeśli zostanie usunięty przed końcem uzgodnionego okresu, pierwotna kwota rabatu staje się należna przed usunięciem."],
      ["Czy wsparcie po starcie jest wliczone?", `Może być wliczony ${tx(siteConfig.business.bugFixPeriod, "pl")}. Przyszłe aktualizacje, nowe treści i nowe funkcje są oddzielnymi usługami.`],
      ["Jakie dane są zbierane?", "Formularz może zbierać dane kontaktowe, odpowiedzi z kalkulatora, notatki o projekcie, linki inspiracji, budżet, terminy, statusy zgód i techniczne dane wysyłki."],
      ["Jak poprosić o usunięcie danych?", `Wyślij formalną prośbę privacy na ${siteConfig.contact.email}. Przed zmianą lub usunięciem danych może być wymagana weryfikacja tożsamości.`]
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
  const effectiveDate = siteConfig.legal.effectiveDate;
  const contact = siteConfig.contact.email;
  const data = {
    privacy: {
      en: [
        ["Introduction", `Effective date: ${effectiveDate}. This Privacy Policy applies to the Yana Ellis portfolio, website calculators and project request forms.`],
        ["Information collected", "The forms may collect name, email, phone, company or project name, messenger usernames, current website, calculator answers, project requirements, budget expectations, deadlines, brand materials information, inspiration links, consent statuses, submission time and technical data."],
        ["How information is collected", "Information is provided directly by the user through calculators and request forms. Technical information may be processed automatically by hosting, security, delivery or email services when a request is submitted."],
        ["Purposes of processing", "Information is used to display a preliminary estimate, receive and review project requests, contact the user through the selected channel, prepare a final proposal, prevent spam or abuse and maintain business records."],
        ["Legal bases", "Depending on the user's location, processing may be based on pre-contract steps, contract performance, consent, legitimate interests in operating the service or legal obligations."],
        ["Service providers and sharing", `Requests may be processed by ${siteConfig.providers.hosting}, ${siteConfig.providers.requestProcessing}, ${siteConfig.providers.emailDelivery} and ${siteConfig.providers.telegramDelivery}. Information is not sold or shared for advertising.`],
        ["International transfers", "Providers may process data in different countries. Only information reasonably necessary to deliver and review the request is processed."],
        ["Retention", "Unsuccessful project requests may normally be retained for up to twelve months unless deletion is requested and no legal reason requires retention. Client project and financial records may be kept longer where required."],
        ["User rights", `Depending on applicable law, users may request access, correction, deletion, restriction, objection, portability or withdrawal of consent by emailing ${contact}.`],
        ["Security", "Reasonable organisational and technical measures are used to protect information, but no internet transmission or storage method is completely secure."],
        ["Children", "The services are intended for adults and business representatives. The website is not intended to knowingly collect personal information from children."],
        ["Third-party links", "The website links to portfolio projects, social networks, payment providers and other third-party services. Their own policies apply."],
        ["Changes to this policy", "This policy may be updated when services, providers or legal requirements change. The effective date will be revised for material updates."],
        ["Contact", `Privacy questions and formal requests should be sent to ${contact}. General project questions may also be sent to Telegram ${siteConfig.contact.telegram}.`]
      ],
      uk: [
        ["Вступ", `Дата набрання чинності: ${effectiveDate}. Ця Privacy Policy застосовується до портфоліо Yana Ellis, калькуляторів і форм заявки.`],
        ["Яка інформація збирається", "Форми можуть збирати ім'я, email, телефон, назву компанії або проєкту, username у месенджерах, поточний сайт, відповіді калькулятора, вимоги, бюджет, терміни, інформацію про бренд-матеріали, референси, статуси згоди, час відправки та технічні дані."],
        ["Як збирається інформація", "Дані надаються користувачем через калькулятори та форми. Технічна інформація може автоматично оброблятися хостингом, безпековими, delivery або email-сервісами під час відправки заявки."],
        ["Навіщо використовуються дані", "Дані потрібні для попереднього розрахунку, отримання й перегляду заявки, контакту через вибраний канал, підготовки фінальної пропозиції, захисту від спаму та ведення бізнес-записів."],
        ["Правові підстави", "Залежно від локації користувача, обробка може базуватися на переддоговірних діях, виконанні договору, згоді, законному інтересі або юридичних обов'язках."],
        ["Сервіси та передача", `Заявки можуть обробляти ${siteConfig.providers.hosting}, ${siteConfig.providers.requestProcessing}, ${siteConfig.providers.emailDelivery} і ${siteConfig.providers.telegramDelivery}. Дані не продаються й не передаються для реклами.`],
        ["Міжнародна обробка", "Провайдери можуть обробляти дані в різних країнах. Обробляється лише інформація, розумно необхідна для доставки й перегляду заявки."],
        ["Зберігання", "Нереалізовані заявки зазвичай можуть зберігатися до дванадцяти місяців, якщо не запитано видалення й немає юридичної причини зберігати їх довше. Проєктні та фінансові записи можуть зберігатися довше."],
        ["Права користувача", `Залежно від закону, користувач може попросити доступ, виправлення, видалення, обмеження, заперечення, переносимість або відкликання згоди через email ${contact}.`],
        ["Безпека", "Використовуються розумні організаційні та технічні заходи, але жоден спосіб передачі або зберігання в інтернеті не є абсолютно безпечним."],
        ["Діти", "Послуги призначені для дорослих і представників бізнесу. Сайт не призначений для свідомого збору персональних даних дітей."],
        ["Сторонні посилання", "Сайт може посилатися на портфоліо, соцмережі, платіжні сервіси й інші сторонні ресурси. До них застосовуються їхні власні політики."],
        ["Зміни політики", "Політика може оновлюватися при зміні сервісів, провайдерів або правових вимог. Дата оновлюється при суттєвих змінах."],
        ["Контакт", `Формальні privacy-запити надсилайте на ${contact}. Загальні питання про проєкт можна також писати в Telegram ${siteConfig.contact.telegram}.`]
      ],
      pl: [
        ["Wprowadzenie", `Data wejścia w życie: ${effectiveDate}. Ta Polityka prywatności dotyczy portfolio Yana Ellis, kalkulatorów i formularzy zapytań.`],
        ["Zbierane informacje", "Formularze mogą zbierać imię, email, telefon, nazwę firmy lub projektu, nazwy w komunikatorach, obecną stronę, odpowiedzi z kalkulatora, wymagania, budżet, terminy, informacje o materiałach marki, linki inspiracji, statusy zgód, czas wysłania i dane techniczne."],
        ["Jak dane są zbierane", "Dane są podawane bezpośrednio przez użytkownika w kalkulatorach i formularzach. Dane techniczne mogą być przetwarzane automatycznie przez hosting, bezpieczeństwo, delivery lub usługi email podczas wysyłki."],
        ["Cele przetwarzania", "Dane służą do pokazania wstępnej wyceny, otrzymania i analizy zapytania, kontaktu wybranym kanałem, przygotowania finalnej oferty, ochrony przed spamem i prowadzenia dokumentacji biznesowej."],
        ["Podstawy prawne", "W zależności od lokalizacji użytkownika przetwarzanie może opierać się na działaniach przedumownych, wykonaniu umowy, zgodzie, uzasadnionym interesie albo obowiązku prawnym."],
        ["Usługodawcy i udostępnianie", `Zapytania mogą być przetwarzane przez ${siteConfig.providers.hosting}, ${siteConfig.providers.requestProcessing}, ${siteConfig.providers.emailDelivery} i ${siteConfig.providers.telegramDelivery}. Dane nie są sprzedawane ani udostępniane do reklamy.`],
        ["Transfery międzynarodowe", "Dostawcy mogą przetwarzać dane w różnych krajach. Przetwarzane są tylko informacje rozsądnie potrzebne do dostarczenia i analizy zapytania."],
        ["Przechowywanie", "Niezrealizowane zapytania mogą być zwykle przechowywane do dwunastu miesięcy, chyba że poprosisz o usunięcie i nie ma prawnego powodu dłuższego przechowania. Dokumentacja projektowa i finansowa może być przechowywana dłużej."],
        ["Prawa użytkownika", `W zależności od prawa użytkownik może poprosić o dostęp, korektę, usunięcie, ograniczenie, sprzeciw, przeniesienie danych lub wycofanie zgody przez email ${contact}.`],
        ["Bezpieczeństwo", "Stosowane są rozsądne środki organizacyjne i techniczne, ale żadna transmisja ani metoda przechowywania online nie jest całkowicie bezpieczna."],
        ["Dzieci", "Usługi są przeznaczone dla dorosłych i przedstawicieli biznesu. Strona nie jest przeznaczona do świadomego zbierania danych dzieci."],
        ["Linki zewnętrzne", "Strona może linkować do portfolio, social media, płatności i innych usług zewnętrznych. Obowiązują ich własne polityki."],
        ["Zmiany polityki", "Polityka może być aktualizowana przy zmianie usług, dostawców lub wymogów prawnych. Data zostanie zmieniona przy istotnych aktualizacjach."],
        ["Kontakt", `Formalne prośby prywatności wyślij na ${contact}. Ogólne pytania projektowe można też pisać na Telegram ${siteConfig.contact.telegram}.`]
      ]
    },
    terms: {
      en: [
        ["Scope", "These Terms govern use of the Yana Ellis portfolio website, calculators, project request forms and pre-contract information. A specific project is governed by the final written proposal, invoice and any separate agreement."],
        ["Calculator estimates", "Calculator results are preliminary estimates for orientation only. They are not binding quotations, contracts, guarantees of availability or promises to accept a project."],
        ["Project acceptance", "Submitting a request does not obligate either party to proceed. A project begins only after scope, price, schedule and payment terms are agreed in writing and the required first payment has cleared."],
        ["Client responsibilities", "The client must provide accurate information, timely feedback, lawful content and necessary access. The client confirms they own or have permission to use supplied materials."],
        ["Services and scope changes", "Only items expressly included in the approved proposal are part of the project. Additional requests may require a revised price and schedule."],
        ["Payments", `Payments may be arranged through ${siteConfig.business.paymentMethods.join(", ")}. Work may pause for overdue payments. Final deliverables, launch or credentials may be withheld until due amounts are paid.`],
        ["Intellectual property", "Upon full payment, the client receives the rights expressly stated in the proposal for final approved deliverables. Preliminary concepts, rejected designs, internal tools, reusable components and general know-how remain with Yana Ellis."],
        ["Portfolio use", "Unless confidentiality is agreed in writing before work begins, Yana Ellis may display the completed public project, screenshots and a factual description of the work in portfolio and promotional materials."],
        ["Designer credit discounts", "Any discounted price connected to a footer credit or public promotion is conditional on the written promotional terms. Early removal or non-performance makes the original discount amount payable."],
        ["Third-party services", "Domains, hosting, plugins, payment processors, booking services, fonts, stock assets and external APIs may have separate fees, terms and outages."],
        ["Warranties and limitations", "Services are performed with reasonable care and skill. No guarantee is made regarding uninterrupted operation, future browser changes, search rankings, sales, revenue or third-party availability."],
        ["Prohibited projects and conduct", "Requests may be refused or terminated for unlawful content, infringement, deception, malware, harassment, exploitation, non-payment or abusive conduct."],
        ["Suspension and termination", "Work may be suspended for non-payment, missing materials, unresolved approvals or breach. Cancellation and refund treatment follows the final proposal and project stage."],
        ["Governing law and disputes", tx(siteConfig.legal.governingLawNote, "en")],
        ["Changes", "Website Terms may be updated. Changes do not retroactively replace a signed project agreement unless both parties agree in writing."],
        ["Contact", `General questions: ${siteConfig.contact.telegram} or ${siteConfig.contact.email}. Formal notices concerning payments, cancellation, legal rights or privacy should be sent by email.`]
      ],
      uk: [
        ["Сфера дії", "Ці Умови регулюють використання портфоліо Yana Ellis, калькуляторів, форм заявки та переддоговірної інформації. Конкретний проєкт регулюється фінальною письмовою пропозицією, рахунком і окремою угодою, якщо вона є."],
        ["Оцінки калькулятора", "Результати калькулятора є лише попередньою орієнтовною оцінкою. Вони не є обов'язковою пропозицією, договором, гарантією доступності або обіцянкою прийняти проєкт."],
        ["Прийняття проєкту", "Надсилання заявки не зобов'язує жодну сторону продовжувати. Проєкт починається лише після письмового погодження обсягу, ціни, графіка, оплати та надходження першого платежу."],
        ["Обов'язки клієнта", "Клієнт має надати точну інформацію, своєчасний фідбек, законний контент і потрібні доступи. Клієнт підтверджує, що має права на надані матеріали."],
        ["Послуги та зміни обсягу", "До проєкту входять лише позиції, прямо зазначені у затвердженій пропозиції. Додаткові запити можуть потребувати нової ціни й графіка."],
        ["Оплата", `Оплату можна погодити через ${siteConfig.business.paymentMethods.join(", ")}. Робота може зупинятися через прострочення. Фінальні матеріали, запуск або доступи можуть утримуватися до повної оплати належних сум.`],
        ["Інтелектуальна власність", "Після повної оплати клієнт отримує права, прямо зазначені у пропозиції. Чернетки, відхилені концепти, внутрішні інструменти, reusable components і know-how залишаються у Yana Ellis."],
        ["Використання в портфоліо", "Якщо конфіденційність не погоджена письмово до початку роботи, Yana Ellis може показувати публічний завершений проєкт, скриншоти й опис роботи у портфоліо та промоматеріалах."],
        ["Знижки за дизайнерський кредит", "Будь-яка знижка за footer credit або публічну промоцію діє лише за письмовими умовами. Дострокове видалення або невиконання робить суму початкової знижки payable."],
        ["Сторонні сервіси", "Домени, хостинг, плагіни, платіжні системи, бронювання, шрифти, стокові матеріали та API можуть мати окремі платежі, умови й перебої."],
        ["Гарантії та обмеження", "Послуги виконуються з розумною турботою та навичками. Не гарантуються безперервна робота, майбутні зміни браузерів, позиції в пошуку, продажі, дохід або доступність сторонніх сервісів."],
        ["Заборонені проєкти та поведінка", "Запити можуть бути відхилені або припинені через незаконний контент, порушення прав, обман, malware, harassment, exploitation, несплату або образливу поведінку."],
        ["Призупинення та припинення", "Робота може бути призупинена через несплату, відсутність матеріалів, невирішені затвердження або порушення. Скасування й повернення коштів залежать від фінальної пропозиції та етапу проєкту."],
        ["Право і спори", tx(siteConfig.legal.governingLawNote, "uk")],
        ["Зміни", "Умови сайту можуть оновлюватися. Зміни не замінюють підписану угоду заднім числом, якщо сторони письмово не погодили інше."],
        ["Контакт", `Загальні питання: ${siteConfig.contact.telegram} або ${siteConfig.contact.email}. Формальні повідомлення щодо оплати, скасування, прав або приватності потрібно надсилати email.`]
      ],
      pl: [
        ["Zakres", "Te Warunki regulują korzystanie z portfolio Yana Ellis, kalkulatorów, formularzy zapytań i informacji przedumownych. Konkretny projekt podlega finalnej pisemnej ofercie, fakturze i ewentualnej oddzielnej umowie."],
        ["Wyceny z kalkulatora", "Wyniki kalkulatora są wycenami wstępnymi wyłącznie orientacyjnie. Nie są wiążącą ofertą, umową, gwarancją dostępności ani obietnicą przyjęcia projektu."],
        ["Akceptacja projektu", "Wysłanie zapytania nie zobowiązuje żadnej strony do rozpoczęcia. Projekt zaczyna się dopiero po pisemnym uzgodnieniu zakresu, ceny, harmonogramu, płatności i zaksięgowaniu pierwszej płatności."],
        ["Obowiązki klienta", "Klient musi podać dokładne informacje, terminowy feedback, legalne treści i potrzebne dostępy. Klient potwierdza, że ma prawa do dostarczonych materiałów."],
        ["Usługi i zmiany zakresu", "Zakres obejmuje tylko elementy wyraźnie wskazane w zaakceptowanej ofercie. Dodatkowe prośby mogą wymagać nowej ceny i harmonogramu."],
        ["Płatności", `Płatność może odbyć się przez ${siteConfig.business.paymentMethods.join(", ")}. Praca może zostać wstrzymana przy zaległościach. Finalne materiały, start lub dostępy mogą być wstrzymane do opłacenia należnych kwot.`],
        ["Własność intelektualna", "Po pełnej płatności klient otrzymuje prawa wyraźnie opisane w ofercie. Koncepcje wstępne, odrzucone projekty, narzędzia wewnętrzne, reusable components i know-how pozostają przy Yana Ellis."],
        ["Użycie w portfolio", "Jeśli poufność nie została uzgodniona pisemnie przed startem, Yana Ellis może pokazać ukończony publiczny projekt, zrzuty ekranu i opis pracy w portfolio oraz materiałach promocyjnych."],
        ["Rabaty za kredyt projektantki", "Każdy rabat związany z kredytem w stopce lub promocją publiczną zależy od pisemnych warunków. Wcześniejsze usunięcie lub niewykonanie powoduje obowiązek zapłaty pierwotnej kwoty rabatu."],
        ["Usługi zewnętrzne", "Domeny, hosting, wtyczki, procesory płatności, rezerwacje, fonty, materiały stockowe i API mogą mieć oddzielne opłaty, warunki i przerwy w działaniu."],
        ["Gwarancje i ograniczenia", "Usługi są wykonywane z rozsądną starannością i umiejętnością. Nie gwarantuje się nieprzerwanego działania, przyszłych zmian przeglądarek, pozycji w wyszukiwarce, sprzedaży, przychodów ani dostępności usług zewnętrznych."],
        ["Zakazane projekty i zachowanie", "Zapytania mogą zostać odrzucone lub zakończone z powodu treści nielegalnych, naruszeń praw, oszustwa, malware, harassment, exploitation, braku płatności lub obraźliwego zachowania."],
        ["Wstrzymanie i zakończenie", "Praca może zostać wstrzymana przez brak płatności, materiałów, akceptacji lub naruszenie. Anulowanie i zwroty zależą od finalnej oferty i etapu projektu."],
        ["Prawo właściwe i spory", tx(siteConfig.legal.governingLawNote, "pl")],
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
    .map(([title, copy], index) => `<article class="policy-card"><h3>${index + 1}. ${title}</h3><p class="policy-note">${copy}</p></article>`)
    .join("");

  return `
    ${renderHero(page, language)}
    <div class="content-grid">
      ${section(type, "01", tx(page.heading, language), `<div class="policy-list">${sections}</div>`)}
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
}

renderPage();
