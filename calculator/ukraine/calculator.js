const supportedLanguages = ["en", "uk", "pl"];
const currency = "грн";
const storageKey = "yana-ellis-calculator-ukraine";
const languageKey = "yana-ellis-language";
const contactEmail = "oh.yanyoellis@gmail.com";

const ui = {
  en: {
    documentTitle: "Website Estimate Ukraine - Yana Ellis",
    backToPortfolio: "Portfolio",
    marketLabel: "Ukraine / грн",
    calculatorTitle: "Website price calculator",
    calculatorIntro:
      "Answer a few practical questions and receive an initial estimate for your website.",
    currentEstimate: "Current estimate",
    youAreBuilding: "You're building",
    estimatePlaceholder: "Website estimate",
    estimateNote: "Domain registration, hosting plans and third-party subscription costs are not included.",
    stepOf: "Step {current} of {total}",
    chooseOne: "Choose one option.",
    chooseMultiple: "Select everything you need. You can also continue without selecting extras.",
    back: "Back",
    continue: "Continue",
    seeEstimate: "See estimate",
    edit: "Edit",
    restart: "Restart calculator",
    included: "Included",
    startingFrom: "Starting from",
    customQuote: "Custom quote",
    customEstimate: "Custom estimate",
    noneSelected: "None selected",
    estimatedProjectCost: "Estimated project cost",
    estimatedStartingPoint: "Estimated starting point",
    finalCopy:
      "This is an initial estimate based on your selections. The final price will be confirmed after the project requirements are reviewed.",
    manualCopy:
      "Your project includes requirements that need a manual review. I will confirm the final price after checking the details.",
    monthlyService: "Optional monthly service",
    oneTimeSubtotal: "One-time subtotal",
    languageMultiplier: "Language multiplier",
    timelineMultiplier: "Timeline multiplier",
    basePrice: "Base website price",
    fixedAdditions: "Fixed additions",
    contactTitle: "Request this website",
    contactHelp: "Your selected market, answers and estimate will be included in the request.",
    submit: "Send project request",
    name: "Name",
    email: "Email",
    company: "Company or project name",
    phone: "Phone number",
    website: "Current website",
    preferredContact: "Preferred contact method",
    description: "Short project description",
    notes: "Additional notes",
    emailOption: "Email",
    telegramOption: "Telegram",
    phoneOption: "Phone",
    viberOption: "Viber",
    descriptionPlaceholder:
      "Tell me briefly about your business, website goals and the most important ideas or requirements.",
    notesPlaceholder: "Anything else I should know before reviewing your request?",
    requiredMessage: "Please fill in all required fields.",
    requiredNameMessage: "Please enter your name.",
    requiredCompanyMessage: "Please enter your company or project name.",
    requiredDescriptionMessage: "Please briefly describe your project.",
    emailMessage: "Please enter a valid email address.",
    successMessage:
      "Thank you. Your project request has been sent.\n\nI will review the details and contact you within one business day.",
    confirmRestart: "Start the estimate again?\n\nAll selected answers and the current estimate will be deleted.",
    whatIncluded: "What is included?",
    includedTitle: "Included",
    notIncludedTitle: "Not included unless selected or quoted",
    revisionsTitle: "Revision rounds",
    revisionsText:
      "Two revision rounds means two organised stages during which the client provides a consolidated list of changes. New functionality or major changes to an approved structure are quoted separately.",
    paymentTitle: "How payment works",
    paymentText:
      "Projects are normally divided into three payments:\n\n50% before work begins.\n30% after the main design is approved.\n20% before the final website is launched.\n\nThe exact payment schedule will be confirmed before the project begins.",
    languageNote:
      "Please provide final translated text. Professional translation can be quoted separately if required.",
    domainNote: "The domain registration fee is paid separately by the client.",
    hostingNote:
      "Paid hosting subscriptions, domains and paid third-party tools are not included in the project estimate.",
    largeSiteNote: "The exact cost will be confirmed after reviewing the required pages.",
    marketSummary: "Selected market",
    interfaceLanguage: "Interface language",
    finalEstimate: "Final estimate",
    manualReview: "Manual review required",
    selectedYes: "Selected",
    includedItems: [
      "Individual website design",
      "Website development",
      "Desktop layout",
      "Tablet layout",
      "Mobile layout",
      "Standard contact form",
      "Basic animations",
      "Basic technical SEO",
      "Page titles and descriptions",
      "Deployment",
      "Domain connection when the client already owns the domain",
      "Basic analytics connection when access is provided",
      "Basic performance optimisation",
      "Standard browser testing",
      "Two organised revision rounds",
      "Assistance during launch"
    ],
    notIncludedItems: [
      "Domain registration fees",
      "Paid hosting plans",
      "Paid third-party subscriptions",
      "Professional photography",
      "Video production",
      "Professional translation",
      "Complete copywriting",
      "Logo design",
      "Full brand identity",
      "Custom web applications",
      "Complex databases",
      "Legal documents",
      "Advertising services",
      "Permanent maintenance",
      "Paid stock materials",
      "Paid fonts or licences"
    ]
  },
  uk: {
    documentTitle: "Розрахунок сайту Ukraine - Yana Ellis",
    backToPortfolio: "Портфоліо",
    marketLabel: "Україна / грн",
    calculatorTitle: "Калькулятор вартості сайту",
    calculatorIntro:
      "Дайте відповідь на кілька практичних запитань і отримайте попередній розрахунок для вашого сайту.",
    currentEstimate: "Поточний розрахунок",
    youAreBuilding: "Ви створюєте",
    estimatePlaceholder: "Розрахунок сайту",
    estimateNote: "Реєстрація домену, хостинг і сторонні підписки не включені у вартість.",
    stepOf: "Крок {current} з {total}",
    chooseOne: "Оберіть один варіант.",
    chooseMultiple: "Оберіть усе потрібне. Також можна продовжити без додаткових опцій.",
    back: "Назад",
    continue: "Продовжити",
    seeEstimate: "Показати розрахунок",
    edit: "Змінити",
    restart: "Почати заново",
    included: "Включено",
    startingFrom: "Від",
    customQuote: "Індивідуальний розрахунок",
    customEstimate: "Індивідуальна оцінка",
    noneSelected: "Нічого не обрано",
    estimatedProjectCost: "Орієнтовна вартість проєкту",
    estimatedStartingPoint: "Орієнтовна початкова вартість",
    finalCopy:
      "Це попередній розрахунок на основі ваших відповідей. Остаточну вартість буде підтверджено після перевірки вимог до проєкту.",
    manualCopy:
      "Ваш проєкт містить вимоги, які потрібно оцінити індивідуально. Остаточну вартість буде підтверджено після перевірки деталей.",
    monthlyService: "Додаткова щомісячна послуга",
    oneTimeSubtotal: "Разова проміжна сума",
    languageMultiplier: "Множник мов",
    timelineMultiplier: "Множник терміну",
    basePrice: "Базова вартість сайту",
    fixedAdditions: "Фіксовані доплати",
    contactTitle: "Надіслати заявку",
    contactHelp: "Обраний ринок, відповіді та розрахунок будуть включені в заявку.",
    submit: "Надіслати заявку",
    name: "Ім'я",
    email: "Електронна пошта",
    company: "Назва компанії або проєкту",
    phone: "Номер телефону - необов'язково",
    website: "Поточний сайт - необов'язково",
    preferredContact: "Бажаний спосіб зв'язку",
    description: "Опис проєкту",
    notes: "Додаткова інформація - необов'язково",
    emailOption: "Email",
    telegramOption: "Telegram",
    phoneOption: "Телефон",
    viberOption: "Viber",
    descriptionPlaceholder: "Коротко розкажіть про ваш бізнес, мету сайту та основні побажання або вимоги.",
    notesPlaceholder: "Що ще варто знати перед переглядом заявки?",
    requiredMessage: "Будь ласка, заповніть усі обов'язкові поля.",
    requiredNameMessage: "Будь ласка, введіть ваше ім'я.",
    requiredCompanyMessage: "Будь ласка, вкажіть назву компанії або проєкту.",
    requiredDescriptionMessage: "Коротко опишіть ваш проєкт.",
    emailMessage: "Будь ласка, введіть коректну електронну адресу.",
    successMessage:
      "Дякую. Вашу заявку на проєкт надіслано.\n\nЯ перегляну деталі та зв'яжуся з вами протягом одного робочого дня.",
    confirmRestart: "Почати розрахунок спочатку?\n\nУсі вибрані відповіді та поточний розрахунок буде видалено.",
    whatIncluded: "Що включено?",
    includedTitle: "Включено",
    notIncludedTitle: "Не включено, якщо не обрано або не розраховано окремо",
    revisionsTitle: "Раунди правок",
    revisionsText:
      "Два раунди правок означають два окремі етапи, під час яких клієнт надсилає об'єднаний список змін. Нові функції або значна зміна затвердженої структури розраховуються окремо.",
    paymentTitle: "Як відбувається оплата",
    paymentText:
      "Зазвичай оплата проєкту поділяється на три частини:\n\n50% перед початком роботи.\n30% після затвердження основного дизайну.\n20% перед остаточним запуском сайту.\n\nТочний графік оплати буде підтверджено перед початком проєкту.",
    languageNote:
      "Надайте готові перекладені тексти. За потреби професійний переклад розраховується окремо.",
    domainNote: "Вартість реєстрації домену оплачується клієнтом окремо.",
    hostingNote: "Платний хостинг, домени та сторонні платні інструменти не включені у вартість проєкту.",
    largeSiteNote: "Точну вартість буде підтверджено після перегляду потрібних сторінок.",
    marketSummary: "Обраний ринок",
    interfaceLanguage: "Мова інтерфейсу",
    finalEstimate: "Фінальний розрахунок",
    manualReview: "Потрібна індивідуальна перевірка",
    selectedYes: "Обрано",
    includedItems: [
      "Індивідуальний дизайн сайту",
      "Розробка сайту",
      "Desktop-макет",
      "Tablet-макет",
      "Mobile-макет",
      "Стандартна контактна форма",
      "Базові анімації",
      "Базове технічне SEO",
      "Заголовки та описи сторінок",
      "Публікація сайту",
      "Підключення домену, якщо клієнт уже ним володіє",
      "Базове підключення аналітики за наявності доступу",
      "Базова оптимізація швидкості",
      "Стандартне тестування в браузерах",
      "Два організовані раунди правок",
      "Допомога під час запуску"
    ],
    notIncludedItems: [
      "Реєстрація домену",
      "Платні тарифи хостингу",
      "Платні сторонні підписки",
      "Професійна фотозйомка",
      "Відеопродакшн",
      "Професійний переклад",
      "Повний копірайтинг",
      "Дизайн логотипу",
      "Повна айдентика",
      "Індивідуальні вебзастосунки",
      "Складні бази даних",
      "Юридичні документи",
      "Рекламні послуги",
      "Постійна підтримка",
      "Платні стокові матеріали",
      "Платні шрифти або ліцензії"
    ]
  },
  pl: {
    documentTitle: "Wycena strony Ukraine - Yana Ellis",
    backToPortfolio: "Portfolio",
    marketLabel: "Ukraina / грн",
    calculatorTitle: "Kalkulator ceny strony",
    calculatorIntro:
      "Odpowiedz na kilka praktycznych pytań i otrzymaj wstępną wycenę swojej strony.",
    currentEstimate: "Aktualna wycena",
    youAreBuilding: "Tworzysz",
    estimatePlaceholder: "Wycena strony",
    estimateNote: "Rejestracja domeny, hosting i zewnętrzne subskrypcje nie są uwzględnione.",
    stepOf: "Krok {current} z {total}",
    chooseOne: "Wybierz jedną opcję.",
    chooseMultiple: "Wybierz wszystko, czego potrzebujesz. Możesz też kontynuować bez dodatków.",
    back: "Wstecz",
    continue: "Dalej",
    seeEstimate: "Pokaż wycenę",
    edit: "Zmień",
    restart: "Zacznij od nowa",
    included: "Wliczone",
    startingFrom: "Od",
    customQuote: "Wycena indywidualna",
    customEstimate: "Wycena indywidualna",
    noneSelected: "Nic nie wybrano",
    estimatedProjectCost: "Szacowany koszt projektu",
    estimatedStartingPoint: "Szacunkowy punkt wyjścia",
    finalCopy:
      "To wstępna wycena oparta na wybranych odpowiedziach. Ostateczna cena zostanie potwierdzona po analizie wymagań projektu.",
    manualCopy:
      "Twój projekt obejmuje elementy wymagające indywidualnej analizy. Ostateczną cenę potwierdzę po sprawdzeniu szczegółów.",
    monthlyService: "Opcjonalna usługa miesięczna",
    oneTimeSubtotal: "Suma jednorazowa",
    languageMultiplier: "Mnożnik języków",
    timelineMultiplier: "Mnożnik terminu",
    basePrice: "Bazowa cena strony",
    fixedAdditions: "Dodatki stałe",
    contactTitle: "Wyślij zapytanie",
    contactHelp: "Wybrany rynek, odpowiedzi i wycena zostaną dołączone do zapytania.",
    submit: "Wyślij zapytanie",
    name: "Imię",
    email: "Adres e-mail",
    company: "Nazwa firmy lub projektu",
    phone: "Numer telefonu - opcjonalnie",
    website: "Obecna strona internetowa - opcjonalnie",
    preferredContact: "Preferowany sposób kontaktu",
    description: "Opis projektu",
    notes: "Dodatkowe informacje - opcjonalnie",
    emailOption: "Email",
    telegramOption: "Telegram",
    phoneOption: "Telefon",
    viberOption: "Viber",
    descriptionPlaceholder:
      "Opisz krótko swoją firmę, cel strony oraz najważniejsze pomysły lub wymagania.",
    notesPlaceholder: "Co jeszcze warto wiedzieć przed analizą zapytania?",
    requiredMessage: "Uzupełnij wszystkie wymagane pola.",
    requiredNameMessage: "Wpisz swoje imię.",
    requiredCompanyMessage: "Wpisz nazwę firmy lub projektu.",
    requiredDescriptionMessage: "Krótko opisz swój projekt.",
    emailMessage: "Wpisz poprawny adres e-mail.",
    successMessage:
      "Dziękuję. Twoje zapytanie zostało wysłane.\n\nPrzeanalizuję szczegóły i skontaktuję się z Tobą w ciągu jednego dnia roboczego.",
    confirmRestart: "Rozpocząć wycenę od nowa?\n\nWszystkie wybrane odpowiedzi i aktualna wycena zostaną usunięte.",
    whatIncluded: "Co obejmuje cena?",
    includedTitle: "Wliczone",
    notIncludedTitle: "Nie jest wliczone, jeśli nie zostało wybrane lub wycenione osobno",
    revisionsTitle: "Rundy poprawek",
    revisionsText:
      "Dwie rundy poprawek oznaczają dwa uporządkowane etapy, podczas których klient przekazuje zbiorczą listę zmian. Nowe funkcje lub istotne zmiany zatwierdzonej struktury są wyceniane osobno.",
    paymentTitle: "Jak wygląda płatność?",
    paymentText:
      "Płatność za projekt jest zazwyczaj podzielona na trzy części:\n\n50% przed rozpoczęciem pracy.\n30% po zatwierdzeniu głównego projektu.\n20% przed ostatecznym uruchomieniem strony.\n\nDokładny harmonogram płatności zostanie potwierdzony przed rozpoczęciem projektu.",
    languageNote:
      "Prosimy o dostarczenie gotowych tłumaczeń. Profesjonalne tłumaczenie może zostać wycenione osobno.",
    domainNote: "Opłata za rejestrację domeny jest płacona osobno przez klienta.",
    hostingNote:
      "Płatne subskrypcje hostingu, domeny i zewnętrzne narzędzia nie są uwzględnione w wycenie projektu.",
    largeSiteNote: "Dokładny koszt zostanie potwierdzony po sprawdzeniu wymaganych podstron.",
    marketSummary: "Wybrany rynek",
    interfaceLanguage: "Język interfejsu",
    finalEstimate: "Szacowany koszt",
    manualReview: "Wymagana analiza indywidualna",
    selectedYes: "Wybrane",
    includedItems: [
      "Indywidualny projekt strony",
      "Wdrożenie strony",
      "Layout desktop",
      "Layout tablet",
      "Layout mobile",
      "Standardowy formularz kontaktowy",
      "Podstawowe animacje",
      "Podstawowe techniczne SEO",
      "Tytuły i opisy stron",
      "Publikacja strony",
      "Podłączenie domeny, jeśli klient już ją posiada",
      "Podstawowe podłączenie analityki przy dostępie",
      "Podstawowa optymalizacja wydajności",
      "Standardowe testy w przeglądarkach",
      "Dwie uporządkowane rundy poprawek",
      "Pomoc podczas uruchomienia"
    ],
    notIncludedItems: [
      "Opłaty za rejestrację domeny",
      "Płatne plany hostingu",
      "Płatne subskrypcje zewnętrzne",
      "Profesjonalna fotografia",
      "Produkcja wideo",
      "Profesjonalne tłumaczenie",
      "Pełny copywriting",
      "Projekt logo",
      "Pełna identyfikacja marki",
      "Indywidualne aplikacje webowe",
      "Złożone bazy danych",
      "Dokumenty prawne",
      "Usługi reklamowe",
      "Stała obsługa",
      "Płatne materiały stockowe",
      "Płatne fonty lub licencje"
    ]
  }
};

const questions = {
  purpose: {
    id: "purpose",
    type: "single",
    required: true,
    summary: { en: "Website type", uk: "Тип сайту", pl: "Rodzaj strony" },
    title: {
      en: "What do you need the website to do?",
      uk: "Що має робити ваш сайт?",
      pl: "Co ma robić Twoja strona?"
    },
    explanation: {
      en: "Choose the option that best describes the main purpose of your website. You can add additional features later.",
      uk: "Оберіть варіант, який найкраще описує головну мету сайту. Додаткові функції можна буде вибрати пізніше.",
      pl: "Wybierz opcję, która najlepiej opisuje główny cel strony. Dodatkowe funkcje wybierzesz później."
    },
    options: [
      {
        id: "simple_one_page",
        amount: 9000,
        title: {
          en: "Present one service or offer",
          uk: "Представити одну послугу або пропозицію",
          pl: "Zaprezentować jedną usługę lub ofertę"
        },
        description: {
          en: "A focused one-page website for a service, small business, event or promotional offer.",
          uk: "Компактний односторінковий сайт для послуги, невеликого бізнесу, події або рекламної пропозиції.",
          pl: "Skupiona strona typu one-page dla usługi, małej firmy, wydarzenia lub konkretnej oferty."
        }
      },
      {
        id: "extended_one_page",
        amount: 11500,
        title: {
          en: "Present my business in more detail",
          uk: "Детальніше представити мій бізнес",
          pl: "Dokładniej zaprezentować moją firmę"
        },
        description: {
          en: "A longer one-page website with more sections, content and a stronger presentation.",
          uk: "Розширений односторінковий сайт із більшою кількістю секцій, інформації та виразнішою презентацією.",
          pl: "Rozbudowana strona one-page z większą liczbą sekcji, treści i mocniejszą prezentacją."
        }
      },
      {
        id: "business_website",
        amount: 18000,
        title: {
          en: "Present several services or areas of my business",
          uk: "Представити кілька послуг або напрямів бізнесу",
          pl: "Zaprezentować kilka usług lub obszarów działalności"
        },
        description: {
          en: "A multi-page company website with separate pages for services, projects, company information and contact details.",
          uk: "Багатосторінковий сайт з окремими сторінками послуг, проєктів, інформації про компанію та контактів.",
          pl: "Wielostronicowa strona firmowa z osobnymi podstronami usług, realizacji, informacji o firmie i kontaktu."
        }
      },
      {
        id: "portfolio",
        amount: 11000,
        title: {
          en: "Showcase my work or personal brand",
          uk: "Показати мої роботи або особистий бренд",
          pl: "Pokazać moje prace lub markę osobistą"
        },
        description: {
          en: "A portfolio for a designer, photographer, artist, freelancer or other professional.",
          uk: "Портфоліо для дизайнера, фотографа, митця, фрилансера або іншого спеціаліста.",
          pl: "Portfolio dla projektanta, fotografa, artysty, freelancera lub innego specjalisty."
        }
      },
      {
        id: "restaurant",
        amount: 14500,
        title: {
          en: "Present a restaurant, cafe or bar",
          uk: "Представити ресторан, кафе або бар",
          pl: "Zaprezentować restaurację, kawiarnię lub bar"
        },
        description: {
          en: "A hospitality website with a menu, gallery, location and optional reservation features.",
          uk: "Сайт закладу з меню, галереєю, адресою та можливістю додати бронювання.",
          pl: "Strona lokalu z menu, galerią, lokalizacją i opcjonalną rezerwacją."
        }
      },
      {
        id: "interactive_website",
        amount: 21500,
        title: {
          en: "Create an unusual interactive experience",
          uk: "Створити незвичайний інтерактивний сайт",
          pl: "Stworzyć nietypową interaktywną stronę"
        },
        description: {
          en: "A highly visual website with custom interactions, motion, storytelling and more advanced functionality.",
          uk: "Виразний сайт з індивідуальними інтеракціями, анімаціями, історією та складнішими функціями.",
          pl: "Wyrazista strona z indywidualnymi interakcjami, animacjami, narracją i bardziej zaawansowanymi funkcjami."
        }
      },
      {
        id: "custom_project",
        customQuote: true,
        customBase: true,
        title: { en: "Something else", uk: "Інший варіант", pl: "Coś innego" },
        description: {
          en: "My project does not fit the options above.",
          uk: "Мій проєкт не відповідає жодному з варіантів вище.",
          pl: "Mój projekt nie pasuje do powyższych opcji."
        }
      }
    ]
  },
  sizePages: {
    id: "size",
    type: "single",
    required: true,
    summary: { en: "Size", uk: "Розмір", pl: "Rozmiar" },
    title: {
      en: "How much content will your website need?",
      uk: "Скільки контенту буде на вашому сайті?",
      pl: "Ile treści będzie potrzebować Twoja strona?"
    },
    explanation: {
      en: "You do not need to know the exact page count. Choose the closest option.",
      uk: "Не обов'язково знати точну кількість сторінок. Оберіть найближчий варіант.",
      pl: "Nie musisz znać dokładnej liczby podstron. Wybierz najbliższą opcję."
    },
    options: [
      { id: "one_page", amount: 0, title: { en: "1 page", uk: "1 сторінка", pl: "1 podstrona" } },
      { id: "two_three_pages", amount: 1500, title: { en: "2-3 pages", uk: "2-3 сторінки", pl: "2-3 podstrony" } },
      { id: "four_five_pages", amount: 3500, title: { en: "4-5 pages", uk: "4-5 сторінок", pl: "4-5 podstron" } },
      { id: "six_eight_pages", amount: 6000, title: { en: "6-8 pages", uk: "6-8 сторінок", pl: "6-8 podstron" } },
      { id: "nine_twelve_pages", amount: 9500, title: { en: "9-12 pages", uk: "9-12 сторінок", pl: "9-12 podstron" } },
      {
        id: "more_than_12_pages",
        amount: 13500,
        starting: true,
        manual: true,
        noteKey: "largeSiteNote",
        title: { en: "More than 12 pages", uk: "Більше ніж 12 сторінок", pl: "Więcej niż 12 podstron" }
      }
    ]
  },
  sizeSections: {
    id: "size",
    type: "single",
    required: true,
    summary: { en: "Size", uk: "Розмір", pl: "Rozmiar" },
    title: {
      en: "How many content sections will the page need?",
      uk: "Скільки секцій контенту потрібно для сторінки?",
      pl: "Ilu sekcji treści będzie potrzebować strona?"
    },
    explanation: {
      en: "For one-page websites, choose the closest number of content sections instead of pages.",
      uk: "Для односторінкових сайтів оберіть найближчу кількість секцій, а не сторінок.",
      pl: "Dla stron one-page wybierz najbliższą liczbę sekcji zamiast podstron."
    },
    options: [
      { id: "up_to_5_sections", amount: 0, title: { en: "Up to 5 content sections", uk: "До 5 секцій контенту", pl: "Do 5 sekcji treści" } },
      { id: "six_eight_sections", amount: 1500, title: { en: "6-8 content sections", uk: "6-8 секцій контенту", pl: "6-8 sekcji treści" } },
      { id: "nine_twelve_sections", amount: 3500, title: { en: "9-12 content sections", uk: "9-12 секцій контенту", pl: "9-12 sekcji treści" } },
      {
        id: "more_than_12_sections",
        amount: 5500,
        starting: true,
        manual: true,
        title: { en: "More than 12 content sections", uk: "Більше ніж 12 секцій контенту", pl: "Więcej niż 12 sekcji treści" }
      }
    ]
  },
  content: {
    id: "content",
    type: "single",
    required: true,
    summary: { en: "Materials", uk: "Матеріали", pl: "Materiały" },
    title: {
      en: "Do you already have the text and images for your website?",
      uk: "У вас уже є тексти та зображення для сайту?",
      pl: "Czy masz już teksty i zdjęcia do swojej strony?"
    },
    explanation: {
      en: "Choose the option that best describes how prepared your materials are.",
      uk: "Оберіть варіант, який найкраще описує готовність ваших матеріалів.",
      pl: "Wybierz opcję, która najlepiej opisuje przygotowanie Twoich materiałów."
    },
    options: [
      {
        id: "ready",
        amount: 0,
        title: { en: "Yes, everything is ready", uk: "Так, усе готово", pl: "Tak, wszystko jest gotowe" },
        description: {
          en: "You provide final text, logo and suitable images.",
          uk: "Ви надаєте готовий текст, логотип і відповідні зображення.",
          pl: "Dostarczasz gotowy tekst, logo i odpowiednie zdjęcia."
        }
      },
      {
        id: "some_missing",
        amount: 2500,
        title: { en: "Some materials are missing", uk: "Деяких матеріалів не вистачає", pl: "Brakuje części materiałów" },
        description: {
          en: "Light text editing, content organisation, help selecting stock images and preparation of supplied materials.",
          uk: "Легке редагування тексту, організація контенту, допомога з вибором стокових зображень і підготовка матеріалів.",
          pl: "Lekka edycja tekstu, uporządkowanie treści, pomoc w wyborze zdjęć stockowych i przygotowanie materiałów."
        }
      },
      {
        id: "need_help",
        amount: 5500,
        title: {
          en: "I need help preparing most of the content",
          uk: "Мені потрібна допомога з більшістю матеріалів",
          pl: "Potrzebuję pomocy z przygotowaniem większości materiałów"
        },
        description: {
          en: "Content structure, writing assistance, basic copy preparation, stock-image sourcing and content formatting.",
          uk: "Структура контенту, допомога з текстами, базова підготовка копі, пошук стокових зображень і форматування.",
          pl: "Struktura treści, pomoc w pisaniu, podstawowe przygotowanie tekstów, dobór zdjęć stockowych i formatowanie."
        }
      }
    ]
  },
  design: {
    id: "design",
    type: "single",
    required: true,
    summary: { en: "Visual design", uk: "Візуальний дизайн", pl: "Projekt wizualny" },
    title: {
      en: "How distinctive should the visual design feel?",
      uk: "Наскільки виразним має бути дизайн?",
      pl: "Jak wyróżniający ma być projekt wizualny?"
    },
    explanation: {
      en: "Every option includes an individual design for desktop, tablet and mobile. Choose how far the creative concept should go.",
      uk: "Кожен варіант включає індивідуальний дизайн для desktop, tablet і mobile. Оберіть бажаний рівень творчої виразності.",
      pl: "Każda opcja obejmuje indywidualny projekt dla desktopu, tabletu i telefonu. Wybierz poziom kreatywnego wyróżnienia."
    },
    options: [
      {
        id: "clean",
        amount: 0,
        title: { en: "Clean and professional", uk: "Чистий і професійний", pl: "Czysty i profesjonalny" },
        description: {
          en: "A polished custom design focused on clarity, trust and usability.",
          uk: "Продуманий індивідуальний дизайн з фокусом на ясність, довіру та зручність.",
          pl: "Dopracowany indywidualny projekt skupiony na przejrzystości, zaufaniu i wygodzie."
        }
      },
      {
        id: "distinctive",
        amount: 2500,
        title: {
          en: "More distinctive and expressive",
          uk: "Більш виразний та індивідуальний",
          pl: "Bardziej wyrazisty i indywidualny"
        },
        description: {
          en: "A stronger visual concept with more custom details and creative composition.",
          uk: "Сильніша візуальна концепція з більшою кількістю авторських деталей і креативною композицією.",
          pl: "Silniejsza koncepcja wizualna z większą liczbą indywidualnych detali i kreatywną kompozycją."
        }
      },
      {
        id: "signature",
        amount: 6000,
        title: {
          en: "Signature visual concept",
          uk: "Авторська візуальна концепція",
          pl: "Autorska koncepcja wizualna"
        },
        description: {
          en: "A highly individual art-directed design with custom visual elements and a stronger brand identity.",
          uk: "Сильно індивідуальний арт-директед дизайн з авторськими візуальними елементами та виразнішою айдентикою.",
          pl: "Mocno indywidualny projekt art-directed z autorskimi elementami wizualnymi i silniejszą tożsamością marki."
        }
      }
    ]
  },
  animations: {
    id: "animations",
    type: "single",
    required: true,
    summary: { en: "Animations", uk: "Анімації", pl: "Animacje" },
    title: {
      en: "How much motion would you like on the website?",
      uk: "Скільки анімації ви хочете на сайті?",
      pl: "Ile animacji ma mieć Twoja strona?"
    },
    explanation: {
      en: "Every website includes subtle basic motion. Choose whether you need a more advanced experience.",
      uk: "Кожен сайт включає базові ненав'язливі анімації. Оберіть, чи потрібен складніший рівень.",
      pl: "Każda strona zawiera podstawowe, subtelne animacje. Wybierz, czy potrzebujesz bardziej zaawansowanego ruchu."
    },
    options: [
      {
        id: "basic",
        amount: 0,
        title: { en: "Subtle basic animations", uk: "Легкі базові анімації", pl: "Subtelne podstawowe animacje" },
        description: {
          en: "Simple appearance animations, standard hover states and smooth transitions.",
          uk: "Прості появи елементів, стандартні hover-стани та плавні переходи.",
          pl: "Proste animacje pojawiania się, standardowe stany hover i płynne przejścia."
        }
      },
      {
        id: "advanced",
        amount: 3000,
        title: { en: "Advanced animations", uk: "Розширені анімації", pl: "Zaawansowane animacje" },
        description: {
          en: "Expressive transitions, scroll-based effects, custom hover interactions and more detailed motion.",
          uk: "Виразні переходи, ефекти під час прокрутки, авторські hover-взаємодії та детальніший рух.",
          pl: "Wyraziste przejścia, efekty przy przewijaniu, indywidualne interakcje hover i bardziej dopracowany ruch."
        }
      },
      {
        id: "immersive",
        amount: 7000,
        starting: true,
        manual: true,
        title: {
          en: "Immersive interactive experience",
          uk: "Імерсивний інтерактивний досвід",
          pl: "Immersyjne interaktywne doświadczenie"
        },
        description: {
          en: "Custom interactive sequences, advanced scroll behaviour, visual storytelling and unique motion concepts.",
          uk: "Індивідуальні інтерактивні сценарії, складніша прокрутка, візуальна історія та унікальні motion-концепції.",
          pl: "Indywidualne sekwencje interaktywne, zaawansowane zachowanie przy przewijaniu, narracja wizualna i unikalne koncepcje ruchu."
        }
      }
    ]
  },
  contactFeatures: {
    id: "contactFeatures",
    type: "multiple",
    required: false,
    summary: { en: "Contact features", uk: "Функції контакту", pl: "Funkcje kontaktu" },
    title: {
      en: "How should visitors contact your business?",
      uk: "Як відвідувачі мають зв'язуватися з вашим бізнесом?",
      pl: "Jak odwiedzający mają kontaktować się z Twoją firmą?"
    },
    explanation: { en: "Select everything you need.", uk: "Оберіть усі потрібні варіанти.", pl: "Wybierz wszystkie potrzebne opcje." },
    options: [
      {
        id: "standard_form",
        amount: 0,
        title: { en: "Standard contact form", uk: "Стандартна контактна форма", pl: "Standardowy formularz kontaktowy" },
        description: { en: "Name, email, phone and message.", uk: "Ім'я, email, телефон і повідомлення.", pl: "Imię, e-mail, telefon i wiadomość." }
      },
      {
        id: "direct_buttons",
        amount: 0,
        title: {
          en: "Direct contact buttons",
          uk: "Кнопки прямого контакту",
          pl: "Przyciski bezpośredniego kontaktu"
        },
        description: {
          en: "Phone, email, Telegram, WhatsApp, Messenger or another supplied contact link.",
          uk: "Телефон, email, Telegram, WhatsApp, Messenger або інше надане посилання.",
          pl: "Telefon, e-mail, Telegram, WhatsApp, Messenger albo inny dostarczony link."
        }
      },
      {
        id: "detailed_form",
        amount: 1500,
        title: { en: "Detailed request form", uk: "Детальна форма заявки", pl: "Rozbudowany formularz zapytania" },
        description: {
          en: "Additional questions, service selection, project details, preferred date and budget selection.",
          uk: "Додаткові запитання, вибір послуги, деталі проєкту, бажана дата та бюджет.",
          pl: "Dodatkowe pytania, wybór usługi, szczegóły projektu, preferowany termin i wybór budżetu."
        }
      },
      { id: "file_upload", amount: 1500, title: { en: "Allow visitors to upload files", uk: "Дозволити відвідувачам завантажувати файли", pl: "Pozwolić odwiedzającym przesyłać pliki" } },
      {
        id: "newsletter",
        amount: 1500,
        title: { en: "Email newsletter signup", uk: "Підписка на email-розсилку", pl: "Zapis do newslettera" },
        description: {
          en: "External mailing-service subscription costs are not included.",
          uk: "Вартість зовнішнього сервісу розсилки не включена.",
          pl: "Koszty zewnętrznego systemu mailingowego nie są wliczone."
        }
      }
    ]
  },
  businessFeatures: {
    id: "businessFeatures",
    type: "multiple",
    required: false,
    summary: { en: "Selected features", uk: "Обрані функції", pl: "Wybrane funkcje" },
    title: {
      en: "Does your website need any of these features?",
      uk: "Чи потрібні вашому сайту ці функції?",
      pl: "Czy Twoja strona potrzebuje tych funkcji?"
    },
    explanation: {
      en: "Select everything that would be useful. Skip anything you do not need.",
      uk: "Оберіть усе, що буде корисним. Непотрібні функції можна пропустити.",
      pl: "Wybierz wszystkie przydatne funkcje. Pomiń te, których nie potrzebujesz."
    },
    options: [
      {
        id: "price_calculator",
        amount: 4500,
        title: {
          en: "Let visitors calculate an estimated price",
          uk: "Дозволити відвідувачам розрахувати орієнтовну ціну",
          pl: "Pozwolić odwiedzającym obliczyć orientacyjną cenę"
        },
        description: {
          en: "Visitors answer simple questions and receive an estimated price.",
          uk: "Відвідувачі відповідають на прості запитання й отримують орієнтовну ціну.",
          pl: "Odwiedzający odpowiadają na proste pytania i otrzymują orientacyjną cenę."
        }
      },
      {
        id: "booking",
        amount: 3500,
        title: {
          en: "Allow visitors to book an appointment or reservation",
          uk: "Дозволити відвідувачам бронювати зустріч або резервувати місце",
          pl: "Pozwolić odwiedzającym zarezerwować termin lub miejsce"
        },
        description: {
          en: "Integration with an appropriate external booking system.",
          uk: "Інтеграція з відповідною зовнішньою системою бронювання.",
          pl: "Integracja z odpowiednim zewnętrznym systemem rezerwacji."
        }
      },
      { id: "gallery", amount: 1500, title: { en: "Show a project or photo gallery", uk: "Показати галерею проєктів або фотографій", pl: "Pokazać galerię realizacji lub zdjęć" } },
      { id: "filters", amount: 2500, title: { en: "Allow visitors to filter projects, services or products", uk: "Дозволити фільтрувати проєкти, послуги або товари", pl: "Pozwolić filtrować realizacje, usługi lub produkty" } },
      {
        id: "editable_blog",
        amount: 5500,
        starting: true,
        manual: true,
        title: {
          en: "I want to add or edit articles and content myself",
          uk: "Я хочу самостійно додавати або редагувати статті та контент",
          pl: "Chcę samodzielnie dodawać lub edytować artykuły i treści"
        }
      },
      { id: "faq", amount: 1000, title: { en: "Frequently asked questions section", uk: "Розділ поширених запитань", pl: "Sekcja najczęściej zadawanych pytań" } },
      { id: "reviews", amount: 1000, title: { en: "Customer reviews or testimonials", uk: "Відгуки клієнтів", pl: "Opinie klientów" } },
      { id: "map", amount: 1500, title: { en: "Interactive map with the business location", uk: "Інтерактивна карта з адресою бізнесу", pl: "Interaktywna mapa z lokalizacją firmy" } },
      { id: "menu", amount: 2000, title: { en: "Restaurant, cafe or service menu", uk: "Меню ресторану, кафе або послуг", pl: "Menu restauracji, kawiarni lub usług" } },
      { id: "before_after", amount: 2000, title: { en: "Interactive before-and-after images", uk: "Інтерактивне порівняння до та після", pl: "Interaktywne porównanie przed i po" } },
      {
        id: "downloads",
        amount: 1000,
        title: { en: "Downloadable files", uk: "Файли для завантаження", pl: "Pliki do pobrania" },
        description: {
          en: "Menus, catalogues, offers or documents.",
          uk: "Меню, каталоги, пропозиції або документи.",
          pl: "Menu, katalogi, oferty lub dokumenty."
        }
      },
      {
        id: "custom_interactive",
        customQuote: true,
        title: {
          en: "Another custom interactive feature",
          uk: "Інша індивідуальна інтерактивна функція",
          pl: "Inna indywidualna funkcja interaktywna"
        }
      }
    ]
  },
  onlineSales: {
    id: "onlineSales",
    type: "single",
    required: true,
    summary: { en: "Online sales", uk: "Продажі онлайн", pl: "Sprzedaż online" },
    title: {
      en: "Will visitors purchase anything directly on the website?",
      uk: "Чи будуть відвідувачі купувати щось безпосередньо на сайті?",
      pl: "Czy odwiedzający będą kupować coś bezpośrednio na stronie?"
    },
    explanation: {
      en: "Choose the option that best matches how customers will buy or pay.",
      uk: "Оберіть варіант, який найкраще описує купівлю або оплату.",
      pl: "Wybierz opcję, która najlepiej opisuje sposób zakupu lub płatności."
    },
    options: [
      {
        id: "no_sales",
        amount: 0,
        title: {
          en: "No, the website only presents my business",
          uk: "Ні, сайт лише представлятиме мій бізнес",
          pl: "Nie, strona będzie tylko prezentować moją firmę"
        }
      },
      {
        id: "external_payment",
        amount: 2500,
        starting: true,
        title: {
          en: "I only need payment links or an external checkout",
          uk: "Мені потрібні лише платіжні посилання або зовнішня сторінка оплати",
          pl: "Potrzebuję tylko linków płatniczych lub zewnętrznej strony płatności"
        }
      },
      {
        id: "catalogue",
        amount: 6000,
        starting: true,
        manual: true,
        title: {
          en: "I want to show products, but orders will be handled separately",
          uk: "Я хочу показувати товари, але замовлення оброблятимуться окремо",
          pl: "Chcę prezentować produkty, ale zamówienia będą obsługiwane osobno"
        }
      },
      {
        id: "online_store",
        customQuote: true,
        title: {
          en: "I need a complete online store",
          uk: "Мені потрібен повноцінний інтернет-магазин",
          pl: "Potrzebuję pełnego sklepu internetowego"
        }
      }
    ]
  },
  languages: {
    id: "languages",
    type: "single",
    required: true,
    summary: { en: "Website languages", uk: "Мови сайту", pl: "Wersje językowe" },
    title: {
      en: "How many language versions does the finished website need?",
      uk: "Скільки мовних версій потрібно для готового сайту?",
      pl: "Ilu wersji językowych potrzebuje gotowa strona?"
    },
    explanation: {
      en: "Select the total number of languages visitors will be able to use.",
      uk: "Оберіть загальну кількість мов, якими зможуть користуватися відвідувачі.",
      pl: "Wybierz łączną liczbę języków dostępnych dla odwiedzających."
    },
    noteKey: "languageNote",
    options: [
      { id: "one", multiplier: 1, title: { en: "One language", uk: "Одна мова", pl: "Jeden język" } },
      { id: "two", multiplier: 1.2, priceDisplay: "+20%", title: { en: "Two languages", uk: "Дві мови", pl: "Dwa języki" } },
      { id: "three", multiplier: 1.35, priceDisplay: "+35%", title: { en: "Three languages", uk: "Три мови", pl: "Trzy języki" } },
      { id: "more_than_three", customQuote: true, title: { en: "More than three languages", uk: "Більше ніж три мови", pl: "Więcej niż trzy języki" } }
    ]
  },
  domain: {
    id: "domain",
    type: "single",
    required: true,
    summary: { en: "Domain and launch", uk: "Домен і запуск", pl: "Domena i uruchomienie" },
    title: {
      en: "What do you already have for the website launch?",
      uk: "Що у вас уже є для запуску сайту?",
      pl: "Co masz już przygotowane do uruchomienia strony?"
    },
    explanation: {
      en: "Choose the closest launch situation.",
      uk: "Оберіть найближчу ситуацію для запуску.",
      pl: "Wybierz najbliższą sytuację dotyczącą uruchomienia."
    },
    noteKey: "hostingNote",
    options: [
      { id: "have_domain", amount: 0, title: { en: "I already have a domain", uk: "У мене вже є домен", pl: "Mam już domenę" } },
      {
        id: "need_domain_help",
        amount: 1000,
        noteKey: "domainNote",
        title: {
          en: "I need help choosing and connecting a domain",
          uk: "Мені потрібна допомога з вибором і підключенням домену",
          pl: "Potrzebuję pomocy z wyborem i podłączeniem domeny"
        }
      },
      { id: "not_sure", amount: 1000, title: { en: "I am not sure", uk: "Я не впевнений / не впевнена", pl: "Nie wiem" } }
    ]
  },
  timeline: {
    id: "timeline",
    type: "single",
    required: true,
    summary: { en: "Timeline", uk: "Термін", pl: "Termin" },
    title: {
      en: "How quickly do you need the website?",
      uk: "Як швидко вам потрібен сайт?",
      pl: "Jak szybko potrzebujesz strony?"
    },
    explanation: {
      en: "The timeline begins after the required materials and first payment are received.",
      uk: "Термін роботи починається після отримання необхідних матеріалів та першого платежу.",
      pl: "Termin realizacji rozpoczyna się po otrzymaniu wymaganych materiałów i pierwszej płatności."
    },
    options: [
      {
        id: "standard",
        multiplier: 1,
        title: { en: "Standard timeline", uk: "Стандартний термін", pl: "Standardowy termin" },
        description: {
          en: "Approximately 10-14 business days for a typical project.",
          uk: "Приблизно 10-14 робочих днів для типового проєкту.",
          pl: "Około 10-14 dni roboczych dla typowego projektu."
        }
      },
      {
        id: "priority",
        multiplier: 1.25,
        priceDisplay: "+25%",
        title: { en: "Priority timeline", uk: "Пріоритетний термін", pl: "Termin priorytetowy" },
        description: {
          en: "Approximately 5-7 business days, depending on complexity and client response time.",
          uk: "Приблизно 5-7 робочих днів, залежно від складності та швидкості відповідей клієнта.",
          pl: "Około 5-7 dni roboczych, zależnie od złożoności i szybkości odpowiedzi klienta."
        }
      },
      {
        id: "rush",
        multiplier: 1.45,
        priceDisplay: "+45%",
        title: { en: "Rush project", uk: "Терміновий проєкт", pl: "Pilny projekt" },
        description: {
          en: "The earliest realistic delivery date, confirmed individually before work begins.",
          uk: "Найближча реалістична дата запуску, яку буде підтверджено індивідуально до початку роботи.",
          pl: "Najbliższy realistyczny termin, potwierdzany indywidualnie przed rozpoczęciem pracy."
        }
      }
    ]
  },
  support: {
    id: "support",
    type: "single",
    required: true,
    summary: { en: "Optional support", uk: "Додаткова підтримка", pl: "Opcjonalne wsparcie" },
    title: {
      en: "Would you like help after the website launches?",
      uk: "Чи потрібна вам допомога після запуску сайту?",
      pl: "Czy potrzebujesz pomocy po uruchomieniu strony?"
    },
    explanation: {
      en: "Monthly services are shown separately and are not added to the one-time estimate.",
      uk: "Щомісячні послуги показуються окремо і не додаються до разової вартості.",
      pl: "Usługi miesięczne są pokazane osobno i nie są dodawane do jednorazowej wyceny."
    },
    options: [
      {
        id: "none",
        amount: 0,
        title: { en: "No ongoing support", uk: "Без постійної підтримки", pl: "Bez stałego wsparcia" },
        description: {
          en: "Minor corrections related directly to the launch remain covered during the agreed correction period.",
          uk: "Невеликі правки, пов'язані із запуском, залишаються покритими протягом узгодженого періоду.",
          pl: "Drobne poprawki związane bezpośrednio z uruchomieniem są objęte ustalonym okresem korekt."
        }
      },
      { id: "future_update", amount: 1500, title: { en: "One future content update", uk: "Одне майбутнє оновлення контенту", pl: "Jedna przyszła aktualizacja treści" } },
      { id: "monthly_basic", monthly: 1500, title: { en: "Basic monthly support", uk: "Базова щомісячна підтримка", pl: "Podstawowe wsparcie miesięczne" } },
      { id: "monthly_extended", monthly: 3500, title: { en: "Extended monthly support", uk: "Розширена щомісячна підтримка", pl: "Rozszerzone wsparcie miesięczne" } }
    ]
  }
};

let currentLanguage = getInitialLanguage();
let state = loadState();

const languageButtons = document.querySelectorAll(".language-button");
const staticTextNodes = document.querySelectorAll("[data-i18n]");
const questionPanel = document.querySelector("#questionPanel");
const resultPanel = document.querySelector("#resultPanel");
const progressFill = document.querySelector("#progressFill");
const estimatePrice = document.querySelector("#estimatePrice");
const estimateBuilding = document.querySelector("#estimateBuilding");
const mobileEstimatePrice = document.querySelector("#mobileEstimatePrice");
const mobileEstimateBuilding = document.querySelector("#mobileEstimateBuilding");
const estimateAnnouncement = document.querySelector("#estimateAnnouncement");

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem(languageKey);
  return supportedLanguages.includes(savedLanguage) ? savedLanguage : "en";
}

function loadState() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(storageKey));
    if (saved && typeof saved === "object") {
      return {
        step: Number.isInteger(saved.step) ? saved.step : 0,
        showResult: Boolean(saved.showResult),
        answers: saved.answers && typeof saved.answers === "object" ? saved.answers : {}
      };
    }
  } catch (error) {
    sessionStorage.removeItem(storageKey);
  }

  return { step: 0, showResult: false, answers: {} };
}

function saveState() {
  sessionStorage.setItem(storageKey, JSON.stringify(state));
}

function t(key) {
  return ui[currentLanguage][key] || ui.en[key] || key;
}

function getText(value) {
  return value?.[currentLanguage] || value?.en || "";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatAmount(amount) {
  return `${Math.round(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${currency}`;
}

function formatAddition(amount, starting = false) {
  const prefix = starting ? `${t("startingFrom")} ` : "";
  return `${prefix}+${formatAmount(amount)}`;
}

function formatMonthly(amount) {
  const suffix = currentLanguage === "uk" ? "місяць" : currentLanguage === "pl" ? "miesiąc" : "month";
  return `${formatAmount(amount)}/${suffix}`;
}

function roundEstimate(amount) {
  return Math.round(amount / 500) * 500;
}

function getQuestions() {
  const onePage = ["simple_one_page", "extended_one_page"].includes(state.answers.purpose);

  return [
    questions.purpose,
    onePage ? questions.sizeSections : questions.sizePages,
    questions.content,
    questions.design,
    questions.animations,
    questions.contactFeatures,
    questions.businessFeatures,
    questions.onlineSales,
    questions.languages,
    questions.domain,
    questions.timeline,
    questions.support
  ];
}

function getOption(question, optionId) {
  return question.options.find((option) => option.id === optionId);
}

function getSelectedOptionIds(question) {
  const answer = state.answers[question.id];
  return question.type === "multiple" ? (Array.isArray(answer) ? answer : []) : answer ? [answer] : [];
}

function getSelectedOptions(question) {
  return getSelectedOptionIds(question)
    .map((optionId) => getOption(question, optionId))
    .filter(Boolean);
}

function isAnswered(question) {
  return !question.required || getSelectedOptionIds(question).length > 0;
}

function ensureValidAnswers() {
  const validOptionIds = new Map(getQuestions().map((question) => [question.id, question.options.map((option) => option.id)]));

  Object.keys(state.answers).forEach((questionId) => {
    const validIds = validOptionIds.get(questionId);
    if (!validIds) {
      delete state.answers[questionId];
      return;
    }

    if (Array.isArray(state.answers[questionId])) {
      state.answers[questionId] = state.answers[questionId].filter((optionId) => validIds.includes(optionId));
      return;
    }

    if (!validIds.includes(state.answers[questionId])) {
      delete state.answers[questionId];
    }
  });
}

function getOptionPriceLabel(question, option) {
  if (option.customQuote) {
    return t("customQuote");
  }

  if (option.monthly) {
    return formatMonthly(option.monthly);
  }

  if (option.priceDisplay) {
    return option.priceDisplay;
  }

  if (option.multiplier && option.multiplier !== 1) {
    return `× ${option.multiplier.toFixed(2)}`;
  }

  if (!option.amount) {
    return t("included");
  }

  return question.id === "purpose" ? formatAmount(option.amount) : formatAddition(option.amount, option.starting);
}

function calculateEstimate() {
  ensureValidAnswers();

  let base = 0;
  let fixed = 0;
  let languageMultiplier = 1;
  let timelineMultiplier = 1;
  let optionalMonthly = null;
  let customBase = false;
  const manualFlags = [];
  const fixedItems = [];

  getQuestions().forEach((question) => {
    getSelectedOptions(question).forEach((option) => {
      if (option.customBase) {
        customBase = true;
      }

      if (option.customQuote || option.manual) {
        manualFlags.push(getText(option.title));
      }

      if (question.id === "purpose") {
        base += option.amount || 0;
        return;
      }

      if (question.id === "languages") {
        languageMultiplier = option.multiplier || 1;
        return;
      }

      if (question.id === "timeline") {
        timelineMultiplier = option.multiplier || 1;
        return;
      }

      if (option.monthly) {
        optionalMonthly = option.monthly;
        return;
      }

      if (option.amount) {
        fixed += option.amount;
        fixedItems.push(`${getText(option.title)}: ${formatAmount(option.amount)}`);
      }
    });
  });

  const subtotal = base + fixed;
  const languageTotal = subtotal * languageMultiplier;
  const timelineTotal = languageTotal * timelineMultiplier;
  const final = roundEstimate(timelineTotal);

  return {
    base,
    fixed,
    fixedItems,
    subtotal,
    languageMultiplier,
    timelineMultiplier,
    final,
    optionalMonthly,
    manual: manualFlags.length > 0 || customBase,
    customBase,
    manualFlags
  };
}

function getBuildingLabel() {
  const selectedPurpose = getSelectedOptions(questions.purpose)[0];
  return selectedPurpose ? getText(selectedPurpose.title) : t("estimatePlaceholder");
}

function getEstimateDisplay(calculation) {
  return calculation.customBase ? t("customEstimate") : formatAmount(calculation.final);
}

function animatePriceChange(element) {
  if (!element) {
    return;
  }

  element.classList.remove("is-updating");
  void element.offsetWidth;
  element.classList.add("is-updating");
}

function updateEstimatePanels() {
  const calculation = calculateEstimate();
  const display = getEstimateDisplay(calculation);
  const building = getBuildingLabel();

  if (estimatePrice.textContent !== display) {
    animatePriceChange(estimatePrice);
    animatePriceChange(mobileEstimatePrice);
  }

  estimatePrice.textContent = display;
  mobileEstimatePrice.textContent = display;
  estimateBuilding.textContent = building;
  mobileEstimateBuilding.textContent = building;
  estimateAnnouncement.textContent = `${t("currentEstimate")}: ${display}`;
}

function applyLanguage(language) {
  currentLanguage = supportedLanguages.includes(language) ? language : "en";
  document.documentElement.lang = currentLanguage;
  document.title = t("documentTitle");
  localStorage.setItem(languageKey, currentLanguage);

  staticTextNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (ui[currentLanguage][key]) {
      node.textContent = t(key);
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  render();
}

function render() {
  ensureValidAnswers();

  if (state.showResult) {
    renderResult();
  } else {
    renderQuestion();
  }

  updateEstimatePanels();
  saveState();
}

function renderQuestion() {
  const currentQuestions = getQuestions();
  const step = Math.min(Math.max(state.step, 0), currentQuestions.length - 1);
  const question = currentQuestions[step];
  const selectedIds = getSelectedOptionIds(question);

  state.step = step;
  resultPanel.hidden = true;
  questionPanel.hidden = false;
  progressFill.style.width = `${((step + 1) / currentQuestions.length) * 100}%`;

  const selectionHint = question.type === "multiple" ? t("chooseMultiple") : t("chooseOne");
  const note = question.noteKey ? `<p class="question-note">${t(question.noteKey)}</p>` : "";

  questionPanel.innerHTML = `
    <div class="question-header">
      <p class="step-label">${t("stepOf")
        .replace("{current}", String(step + 1))
        .replace("{total}", String(currentQuestions.length))} / ${selectionHint}</p>
      <h2 class="question-title" id="calculatorQuestion">${getText(question.title)}</h2>
      <p class="question-explanation">${getText(question.explanation)}</p>
    </div>
    <div class="option-grid">
      ${question.options
        .map((option) => {
          const isSelected = selectedIds.includes(option.id);
          const description = option.description ? `<span class="option-description">${getText(option.description)}</span>` : "";
          const optionNote = option.noteKey ? `<span class="option-description">${t(option.noteKey)}</span>` : "";
          const selectedText = isSelected ? `<span class="option-price">${t("selectedYes")}</span>` : "";

          return `
            <button
              class="option-card${isSelected ? " is-selected" : ""}"
              type="button"
              data-option-id="${option.id}"
              aria-pressed="${isSelected}"
            >
              <span class="option-title">${getText(option.title)}</span>
              ${description}
              ${optionNote}
              <span class="option-price">${getOptionPriceLabel(question, option)}</span>
              ${selectedText}
            </button>
          `;
        })
        .join("")}
    </div>
    ${note}
    <div class="question-actions">
      <button class="calculator-button secondary" type="button" data-action="back" ${step === 0 ? "disabled" : ""}>${t("back")}</button>
      <button class="calculator-button" type="button" data-action="continue" ${isAnswered(question) ? "" : "disabled"}>
        ${step === currentQuestions.length - 1 ? t("seeEstimate") : t("continue")}
      </button>
      <button class="calculator-button secondary" type="button" data-action="restart">${t("restart")}</button>
    </div>
  `;
}

function renderResult() {
  const currentQuestions = getQuestions();
  const calculation = calculateEstimate();
  const resultLabel = calculation.manual ? t("estimatedStartingPoint") : t("estimatedProjectCost");
  const resultDisplay = getEstimateDisplay(calculation);
  const resultCopy = calculation.manual ? t("manualCopy") : t("finalCopy");

  questionPanel.hidden = true;
  resultPanel.hidden = false;
  progressFill.style.width = "100%";

  resultPanel.innerHTML = `
    <div class="result-header">
      <p class="step-label">${resultLabel}</p>
      <h2 class="result-title">${resultLabel}</h2>
      <p class="result-price">${resultDisplay}</p>
      <p class="result-copy">${resultCopy}</p>
    </div>
    <div class="summary-list">
      ${buildSummaryItems(currentQuestions)}
      ${buildCalculationSummary(calculation)}
    </div>
    ${buildDetails()}
    <div class="result-actions">
      <button class="calculator-button secondary" type="button" data-action="back-to-last">${t("back")}</button>
      <button class="calculator-button secondary" type="button" data-action="restart">${t("restart")}</button>
    </div>
    ${buildContactForm()}
  `;
}

function buildSummaryItems(currentQuestions) {
  return currentQuestions
    .map((question, index) => {
      const selectedOptions = getSelectedOptions(question);
      const value = selectedOptions.length
        ? selectedOptions.map((option) => getText(option.title)).join(", ")
        : t("noneSelected");

      return `
        <div class="summary-item">
          <span class="summary-label">${getText(question.summary)}</span>
          <span class="summary-value">${value}</span>
          <button class="summary-edit" type="button" data-edit-step="${index}">${t("edit")}</button>
        </div>
      `;
    })
    .join("");
}

function buildCalculationSummary(calculation) {
  const monthly = calculation.optionalMonthly
    ? `
      <div class="summary-item">
        <span class="summary-label">${t("monthlyService")}</span>
        <span class="summary-value">${formatMonthly(calculation.optionalMonthly)}</span>
        <span></span>
      </div>
    `
    : "";

  const manual = calculation.manual
    ? `
      <div class="summary-item">
        <span class="summary-label">${t("manualReview")}</span>
        <span class="summary-value">${calculation.manualFlags.join(", ") || t("customEstimate")}</span>
        <span></span>
      </div>
    `
    : "";

  return `
    <div class="summary-item">
      <span class="summary-label">${t("basePrice")}</span>
      <span class="summary-value">${calculation.customBase ? t("customEstimate") : formatAmount(calculation.base)}</span>
      <span></span>
    </div>
    <div class="summary-item">
      <span class="summary-label">${t("fixedAdditions")}</span>
      <span class="summary-value">${calculation.fixedItems.length ? calculation.fixedItems.join(", ") : t("noneSelected")}</span>
      <span></span>
    </div>
    <div class="summary-item">
      <span class="summary-label">${t("oneTimeSubtotal")}</span>
      <span class="summary-value">${calculation.customBase ? t("customEstimate") : formatAmount(calculation.subtotal)}</span>
      <span></span>
    </div>
    <div class="summary-item">
      <span class="summary-label">${t("languageMultiplier")}</span>
      <span class="summary-value">× ${calculation.languageMultiplier.toFixed(2)}</span>
      <span></span>
    </div>
    <div class="summary-item">
      <span class="summary-label">${t("timelineMultiplier")}</span>
      <span class="summary-value">× ${calculation.timelineMultiplier.toFixed(2)}</span>
      <span></span>
    </div>
    <div class="summary-item">
      <span class="summary-label">${t("finalEstimate")}</span>
      <span class="summary-value">${getEstimateDisplay(calculation)}</span>
      <span></span>
    </div>
    ${monthly}
    ${manual}
  `;
}

function buildDetails() {
  return `
    <details class="info-details">
      <summary>${t("whatIncluded")}</summary>
      <div class="details-content">
        <div>
          <h3>${t("includedTitle")}</h3>
          <ul>${ui[currentLanguage].includedItems.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div>
          <h3>${t("notIncludedTitle")}</h3>
          <ul>${ui[currentLanguage].notIncludedItems.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
      </div>
    </details>
    <details class="info-details">
      <summary>${t("paymentTitle")}</summary>
      <p class="payment-copy">${t("paymentText")}</p>
    </details>
    <details class="info-details">
      <summary>${t("revisionsTitle")}</summary>
      <p class="payment-copy">${t("revisionsText")}</p>
    </details>
  `;
}

function buildContactForm() {
  return `
    <form class="request-form" id="requestForm" novalidate>
      <div>
        <h2 class="form-title">${t("contactTitle")}</h2>
        <p class="form-help">${t("contactHelp")}</p>
      </div>
      <div class="form-grid">
        <div class="field">
          <label for="clientName">${t("name")} *</label>
          <input id="clientName" name="name" autocomplete="name" required />
        </div>
        <div class="field">
          <label for="clientEmail">${t("email")} *</label>
          <input id="clientEmail" name="email" type="email" autocomplete="email" required />
        </div>
        <div class="field">
          <label for="projectName">${t("company")} *</label>
          <input id="projectName" name="projectName" required />
        </div>
        <div class="field">
          <label for="clientPhone">${t("phone")}</label>
          <input id="clientPhone" name="phone" autocomplete="tel" />
        </div>
        <div class="field">
          <label for="currentWebsite">${t("website")}</label>
          <input id="currentWebsite" name="website" type="url" inputmode="url" />
        </div>
        <div class="field">
          <label for="preferredContact">${t("preferredContact")}</label>
          <select id="preferredContact" name="preferredContact">
            <option value="Email">${t("emailOption")}</option>
            <option value="Telegram">${t("telegramOption")}</option>
            <option value="Phone">${t("phoneOption")}</option>
            <option value="Viber">${t("viberOption")}</option>
          </select>
        </div>
        <div class="field full">
          <label for="projectDescription">${t("description")} *</label>
          <textarea id="projectDescription" name="description" required placeholder="${escapeHtml(t("descriptionPlaceholder"))}"></textarea>
        </div>
        <div class="field full">
          <label for="additionalNotes">${t("notes")}</label>
          <textarea id="additionalNotes" name="notes" placeholder="${escapeHtml(t("notesPlaceholder"))}"></textarea>
        </div>
      </div>
      <p class="form-status" id="formStatus" role="status"></p>
      <button class="calculator-button" type="submit">${t("submit")}</button>
    </form>
  `;
}

function selectOption(question, optionId) {
  if (question.type === "multiple") {
    const current = getSelectedOptionIds(question);
    state.answers[question.id] = current.includes(optionId)
      ? current.filter((selectedId) => selectedId !== optionId)
      : [...current, optionId];
  } else {
    state.answers[question.id] = optionId;
  }

  if (question.id === "purpose") {
    ensureValidAnswers();
  }

  state.showResult = false;
  render();
}

function goBack() {
  state.step = Math.max(0, state.step - 1);
  state.showResult = false;
  render();
}

function goContinue() {
  const currentQuestions = getQuestions();
  const question = currentQuestions[state.step];
  if (!isAnswered(question)) {
    return;
  }

  if (state.step >= currentQuestions.length - 1) {
    state.showResult = true;
  } else {
    state.step += 1;
  }

  render();
  document.querySelector(".calculator-main")?.scrollIntoView({ block: "start", behavior: "smooth" });
}

function restartCalculator() {
  if (!window.confirm(t("confirmRestart"))) {
    return;
  }

  state = { step: 0, showResult: false, answers: {} };
  sessionStorage.removeItem(storageKey);
  render();
}

function editStep(step) {
  state.step = step;
  state.showResult = false;
  render();
  document.querySelector(".calculator-main")?.scrollIntoView({ block: "start", behavior: "smooth" });
}

function validateForm(form) {
  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const projectName = String(formData.get("projectName") || "").trim();
  const description = String(formData.get("description") || "").trim();

  if (!name) {
    return t("requiredNameMessage");
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return t("emailMessage");
  }

  if (!projectName) {
    return t("requiredCompanyMessage");
  }

  if (!description) {
    return t("requiredDescriptionMessage");
  }

  return "";
}

function buildSubmissionBody(form) {
  const formData = new FormData(form);
  const calculation = calculateEstimate();
  const summaryLines = getQuestions().map((question) => {
    const selected = getSelectedOptions(question);
    const value = selected.length ? selected.map((option) => getText(option.title)).join(", ") : t("noneSelected");
    return `${getText(question.summary)}: ${value}`;
  });

  return [
    `${t("marketSummary")}: Ukraine`,
    `${t("interfaceLanguage")}: ${currentLanguage.toUpperCase()}`,
    "",
    ...summaryLines,
    "",
    `${t("basePrice")}: ${calculation.customBase ? t("customEstimate") : formatAmount(calculation.base)}`,
    `${t("fixedAdditions")}: ${calculation.fixedItems.length ? calculation.fixedItems.join("; ") : t("noneSelected")}`,
    `${t("oneTimeSubtotal")}: ${calculation.customBase ? t("customEstimate") : formatAmount(calculation.subtotal)}`,
    `${t("languageMultiplier")}: ${calculation.languageMultiplier.toFixed(2)}`,
    `${t("timelineMultiplier")}: ${calculation.timelineMultiplier.toFixed(2)}`,
    `${t("finalEstimate")}: ${getEstimateDisplay(calculation)}`,
    `${t("monthlyService")}: ${calculation.optionalMonthly ? formatMonthly(calculation.optionalMonthly) : t("noneSelected")}`,
    `${t("manualReview")}: ${calculation.manual ? calculation.manualFlags.join(", ") || t("customEstimate") : "No"}`,
    "",
    `${t("name")}: ${formData.get("name") || ""}`,
    `${t("email")}: ${formData.get("email") || ""}`,
    `${t("company")}: ${formData.get("projectName") || ""}`,
    `${t("phone")}: ${formData.get("phone") || ""}`,
    `${t("website")}: ${formData.get("website") || ""}`,
    `${t("preferredContact")}: ${formData.get("preferredContact") || ""}`,
    "",
    `${t("description")}:`,
    `${formData.get("description") || ""}`,
    "",
    `${t("notes")}:`,
    `${formData.get("notes") || ""}`
  ].join("\n");
}

function moveOptionFocus(currentButton, direction) {
  const cards = Array.from(questionPanel.querySelectorAll(".option-card"));
  const currentIndex = cards.indexOf(currentButton);
  if (currentIndex === -1) {
    return;
  }

  const nextIndex = (currentIndex + direction + cards.length) % cards.length;
  cards[nextIndex].focus();
}

questionPanel.addEventListener("click", (event) => {
  const optionButton = event.target.closest("[data-option-id]");
  const actionButton = event.target.closest("[data-action]");
  const question = getQuestions()[state.step];

  if (optionButton) {
    selectOption(question, optionButton.dataset.optionId);
    return;
  }

  if (!actionButton) {
    return;
  }

  if (actionButton.dataset.action === "back") {
    goBack();
  }

  if (actionButton.dataset.action === "continue") {
    goContinue();
  }

  if (actionButton.dataset.action === "restart") {
    restartCalculator();
  }
});

questionPanel.addEventListener("keydown", (event) => {
  const optionButton = event.target.closest(".option-card");
  if (!optionButton) {
    return;
  }

  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    event.preventDefault();
    moveOptionFocus(optionButton, 1);
  }

  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    event.preventDefault();
    moveOptionFocus(optionButton, -1);
  }
});

resultPanel.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit-step]");
  const actionButton = event.target.closest("[data-action]");

  if (editButton) {
    editStep(Number(editButton.dataset.editStep));
    return;
  }

  if (!actionButton) {
    return;
  }

  if (actionButton.dataset.action === "back-to-last") {
    editStep(getQuestions().length - 1);
  }

  if (actionButton.dataset.action === "restart") {
    restartCalculator();
  }
});

resultPanel.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.target;
  const status = form.querySelector("#formStatus");
  const validationError = validateForm(form);

  if (validationError) {
    status.textContent = validationError;
    status.classList.add("is-error");
    return;
  }

  const subject = encodeURIComponent("Website project request - Ukraine");
  const body = encodeURIComponent(buildSubmissionBody(form));

  status.textContent = t("successMessage");
  status.classList.remove("is-error");
  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  form.reset();
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

sessionStorage.setItem("yana-ellis-selected-market", "ukraine");
applyLanguage(currentLanguage);
