const vrohyEnglish = {
  name: "V ROHY BAR",
  industry: "Hospitality / Bar & Beverage",
  platform: "Responsive website · Interactive menu · Cocktail finder",
  location: "Ternopil, Ukraine",
  role: "Independent UX/UI Designer & Web Developer",
  scope: "Brand direction · UX strategy · UI design · Front-end development · Interaction design",
  strapline: "A bar website where the menu behaves like part of the night out.",
  links: [{ label: "V Rohy Bar", href: "https://vrohybar.vercel.app" }],
  images: [
    "assets/commercial-cases/vrohy/vrohy-hero.png",
    "assets/commercial-cases/vrohy/vrohy-finder.png"
  ],
  sections: [
    ["Project Overview", `<p>V Rohy is an interactive website concept for a cocktail bar in Ternopil. The experience is built around the bar's own visual language: numbered bottles, a dark room, warm amber accents and Ukrainian editorial copy.</p><p>The site is not only a menu page. It connects discovery, atmosphere and the next practical action: choose a drink, explore the space, find a cocktail and reserve a table.</p>`],
    ["The Problem", `<p>A bar has to communicate its character within a few seconds, but a standard hospitality template usually separates the menu, the atmosphere and the reservation path into unrelated blocks.</p><p>For V Rohy, the challenge was to make the digital experience feel as distinctive as the physical visit while keeping the information easy to understand and the route to contact short.</p>`],
    ["Design Strategy", `<p>I treated the bar shelf as the main interaction model. The numbered bottles become a recognizable navigation system rather than a decorative background, and the same visual idea continues through the cocktail finder and drink details.</p><p>This creates a clear connection between the brand story and the product behavior: the user does not just read about the bar, they explore it.</p>`],
    ["Information Architecture", `<p>The public journey is organized into four clear moments: the hero introduces the place, the bottle menu supports drink discovery, the gallery builds atmosphere, and the booking section gives the visitor a direct way to continue.</p><p>The separate cocktail finder route adds a focused task flow for visitors who want help choosing rather than browsing the complete shelf.</p>`],
    ["Interactive Cocktail Menu", `<p>The menu presents 81 numbered cocktails as a searchable bottle shelf. Visitors can search by number or name, filter by flavor direction and open a bottle to see its drink card.</p><p>The selected drink card keeps the next action visible with a direct link to reserve a table. The interaction is playful, but the underlying structure stays predictable and keyboard-friendly.</p>`],
    ["Cocktail Finder", `<p>The finder turns drink selection into a lightweight discovery moment. A visitor chooses a date, asks the site to show a cocktail and receives a result from the same numbered bottle world used by the main menu.</p><p>It is deliberately presented as a game for easy choice, not as astrology or a claim about a person's identity. The value is reducing choice overload while keeping the bar's tone of voice.</p>`],
    ["Visual Direction", `<p>The visual system combines near-black surfaces, warm amber controls, deep red accents and an electric blue atmospheric glow. Large outlined typography gives the experience a strong identity, while real bar photography keeps the concept grounded in a place people could visit.</p><p>Ukrainian copy, bottle numbers and small editorial labels make the interface feel authored rather than generic.</p>`],
    ["Responsive Product Behavior", `<p>On large screens, the shelf can act as an immersive cabinet with multiple rows of bottles. On smaller screens, the layout becomes more linear and keeps the same discovery logic without relying on a crowded desktop composition.</p><p>Touch targets, sticky search controls, direct booking actions and visible focus states support the same core journey across devices.</p>`],
    ["Deliverables & Reflection", `<p>The delivered concept includes a responsive homepage, interactive bottle menu, drink modal, cocktail finder, gallery, reservation contact section and supporting visual direction.</p><p>The central design decision was to make the menu itself the memorable part of the product. That gives V Rohy a digital experience that can explain how the bar feels before a visitor arrives, without sacrificing the practical route to a table.</p>`]
  ]
};

productCases.vrohy = vrohyEnglish;

productCaseLocales.vrohy = {
  uk: {
    ...vrohyEnglish,
    name: "V ROHY BAR",
    industry: "Гостинність / бар і напої",
    platform: "Адаптивний сайт · Інтерактивне меню · Підбір коктейлю",
    location: "Тернопіль, Україна",
    role: "Незалежна UX/UI дизайнерка та веброзробниця",
    scope: "Бренд-напрям · UX-стратегія · UI-дизайн · Front-end розробка · Дизайн взаємодій",
    strapline: "Сайт бару, де меню стає частиною вечірнього досвіду.",
    sections: [
      ["Огляд проєкту", `<p>V Rohy — концепт інтерактивного сайту коктейльного бару в Тернополі. Досвід побудований навколо власної візуальної мови бару: пронумерованих пляшок, темного простору, теплих бурштинових акцентів і редакційних текстів українською.</p><p>Це не просто сторінка меню. Вона поєднує відкриття, атмосферу та наступну практичну дію: обрати напій, дослідити простір, знайти коктейль і забронювати столик.</p>`],
      ["Проблема", `<p>Бар має передати свій характер за кілька секунд, але типовий шаблон для закладу зазвичай розділяє меню, атмосферу та бронювання на непов’язані блоки.</p><p>Завданням для V Rohy було зробити цифровий досвід таким самим виразним, як фізичний візит, і водночас залишити інформацію зрозумілою та скоротити шлях до контакту.</p>`],
      ["Дизайн-стратегія", `<p>Я взяла барну полицю за головну модель взаємодії. Пронумеровані пляшки стали впізнаваною навігаційною системою, а не декоративним фоном; ця сама ідея продовжується в підборі коктейлю та картках напоїв.</p><p>Так брендова історія і поведінка продукту залишаються пов’язаними: користувач не просто читає про бар, а досліджує його.</p>`],
      ["Інформаційна архітектура", `<p>Користувацький шлях складається з чотирьох зрозумілих моментів: герой знайомить із місцем, меню пляшок допомагає знайти напій, галерея створює атмосферу, а блок бронювання дає прямий наступний крок.</p><p>Окремий маршрут підбору коктейлю підтримує цілеспрямований сценарій для тих, хто хоче отримати рекомендацію, а не переглядати всю полицю.</p>`],
      ["Інтерактивне меню коктейлів", `<p>Меню показує 81 пронумерований коктейль як пляшкову полицю з пошуком. Користувач може шукати за номером або назвою, фільтрувати за смаковим напрямом і відкрити пляшку, щоб переглянути картку напою.</p><p>У картці вибраного коктейлю наступна дія залишається видимою: пряме посилання на бронювання столика. Взаємодія грайлива, але структура передбачувана й придатна для клавіатурної навігації.</p>`],
      ["Підбір коктейлю", `<p>Окремий підбір перетворює вибір напою на короткий момент відкриття. Користувач обирає дату, просить показати коктейль і отримує результат із тієї самої системи пронумерованих пляшок, що й у головному меню.</p><p>Це подано як легка гра, а не як астрологія чи твердження про особистість. Цінність сценарію — зменшити надлишок вибору й зберегти тон бару.</p>`],
      ["Візуальний напрям", `<p>Візуальна система поєднує майже чорні поверхні, теплі бурштинові елементи, глибокі червоні акценти й електричне синє світіння. Велика контурна типографіка створює характер, а реальні фотографії бару заземлюють концепт у місці, яке можна відвідати.</p><p>Українські тексти, номери пляшок і невеликі редакційні підписи роблять інтерфейс авторським, а не шаблонним.</p>`],
      ["Адаптивна поведінка продукту", `<p>На великих екранах полиця працює як занурювальна шафа з кількома рядами пляшок. На менших екранах композиція стає лінійнішою, але зберігає ту саму логіку відкриття без перевантаженої desktop-сцени.</p><p>Зручні зони дотику, закріплений пошук, прямі дії бронювання та видимі focus-стани підтримують основний шлях на різних пристроях.</p>`],
      ["Результат і рефлексія", `<p>Концепт включає адаптивну головну сторінку, інтерактивне меню пляшок, модальне вікно напою, підбір коктейлю, галерею, блок контактів для бронювання та візуальний напрям.</p><p>Головним рішенням стало зробити саме меню запам’ятовуваною частиною продукту. Завдяки цьому V Rohy може передати цифровий досвід бару ще до візиту, не втрачаючи практичного шляху до столика.</p>`]
    ]
  },
  pl: {
    ...vrohyEnglish,
    name: "V ROHY BAR",
    industry: "Hotelarstwo / Bar i napoje",
    platform: "Responsywna strona · Interaktywne menu · Wyszukiwarka koktajli",
    location: "Tarnopol, Ukraina",
    role: "Niezależna projektantka UX/UI i web developerka",
    scope: "Kierunek marki · Strategia UX · Projekt UI · Front-end · Projekt interakcji",
    strapline: "Strona baru, na której menu staje się częścią wieczornego doświadczenia.",
    sections: [
      ["Opis projektu", `<p>V Rohy to koncepcja interaktywnej strony koktajlowego baru w Tarnopolu. Doświadczenie opiera się na własnym języku wizualnym baru: ponumerowanych butelkach, ciemnej przestrzeni, ciepłych bursztynowych akcentach i ukraińskich tekstach redakcyjnych.</p><p>To nie jest tylko strona menu. Łączy odkrywanie, atmosferę i kolejny praktyczny krok: wybór drinka, poznanie miejsca, znalezienie koktajlu i rezerwację stolika.</p>`],
      ["Problem", `<p>Bar musi szybko przekazać swój charakter, ale typowy szablon dla lokalu zwykle rozdziela menu, atmosferę i rezerwację na niezależne bloki.</p><p>Wyzwaniem było stworzenie cyfrowego doświadczenia tak charakterystycznego jak wizyta na miejscu, przy zachowaniu czytelnej informacji i krótkiej ścieżki kontaktu.</p>`],
      ["Strategia projektowa", `<p>Za główny model interakcji przyjęłam barową półkę. Ponumerowane butelki stały się rozpoznawalnym systemem nawigacji, a ta sama idea jest kontynuowana w wyszukiwarce koktajli i kartach drinków.</p><p>Dzięki temu historia marki i zachowanie produktu pozostają połączone: użytkownik nie tylko czyta o barze, ale go odkrywa.</p>`],
      ["Architektura informacji", `<p>Ścieżka użytkownika składa się z czterech momentów: hero przedstawia miejsce, menu butelek pomaga znaleźć drinka, galeria buduje atmosferę, a sekcja rezerwacji daje bezpośredni następny krok.</p><p>Osobna ścieżka wyszukiwania koktajlu wspiera osoby, które potrzebują rekomendacji zamiast przeglądać całą półkę.</p>`],
      ["Interaktywne menu koktajli", `<p>Menu pokazuje 81 ponumerowanych koktajli jako wyszukiwalną półkę z butelkami. Można szukać po numerze lub nazwie, filtrować po profilu smakowym i otworzyć butelkę, aby zobaczyć kartę drinka.</p><p>Karta wybranego drinka zachowuje widoczne działanie końcowe: bezpośredni link do rezerwacji. Interakcja jest zabawowa, ale struktura pozostaje przewidywalna i dostępna z klawiatury.</p>`],
      ["Wyszukiwarka koktajli", `<p>Wyszukiwarka zamienia wybór drinka w krótki moment odkrywania. Użytkownik wybiera datę, prosi o pokazanie koktajlu i otrzymuje wynik z tego samego świata ponumerowanych butelek co w menu głównym.</p><p>To lekka gra, a nie astrologia ani twierdzenie o osobowości. Jej wartością jest zmniejszenie nadmiaru wyboru przy zachowaniu tonu baru.</p>`],
      ["Kierunek wizualny", `<p>System wizualny łączy niemal czarne powierzchnie, ciepłe bursztynowe elementy, głębokie czerwone akcenty i elektryczną niebieską poświatę. Duża konturowa typografia buduje charakter, a prawdziwe zdjęcia baru osadzają koncept w realnym miejscu.</p><p>Ukraińskie teksty, numery butelek i małe etykiety redakcyjne sprawiają, że interfejs jest autorski, a nie generyczny.</p>`],
      ["Responsywne zachowanie produktu", `<p>Na dużych ekranach półka działa jak immersyjna szafa z kilkoma rzędami butelek. Na mniejszych układ staje się bardziej liniowy i zachowuje tę samą logikę odkrywania bez przeciążonej kompozycji desktopowej.</p><p>Duże obszary dotyku, przyklejone wyszukiwanie, bezpośrednie działania rezerwacji i widoczne stany focus wspierają główną ścieżkę na różnych urządzeniach.</p>`],
      ["Rezultat i refleksja", `<p>Koncept obejmuje responsywną stronę główną, interaktywne menu butelek, modal drinka, wyszukiwarkę koktajli, galerię, sekcję kontaktową rezerwacji i kierunek wizualny.</p><p>Najważniejszą decyzją było uczynienie menu zapamiętywalną częścią produktu. V Rohy może dzięki temu przekazać cyfrową atmosferę baru jeszcze przed wizytą, zachowując praktyczną drogę do rezerwacji.</p>`]
    ]
  },
  ru: {
    ...vrohyEnglish,
    name: "V ROHY BAR",
    industry: "Гостеприимство / бар и напитки",
    platform: "Адаптивный сайт · Интерактивное меню · Подбор коктейля",
    location: "Тернополь, Украина",
    role: "Независимый UX/UI-дизайнер и веб-разработчик",
    scope: "Бренд-направление · UX-стратегия · UI-дизайн · Front-end разработка · Дизайн взаимодействий",
    strapline: "Сайт бара, где меню становится частью вечернего опыта.",
    sections: [
      ["Обзор проекта", `<p>V Rohy — концепт интерактивного сайта коктейльного бара в Тернополе. Опыт строится на собственной визуальной системе бара: пронумерованных бутылках, тёмном пространстве, тёплых янтарных акцентах и редакционных текстах на украинском языке.</p><p>Это не просто страница меню. Она соединяет знакомство, атмосферу и следующий практический шаг: выбрать напиток, изучить пространство, найти коктейль и забронировать столик.</p>`],
      ["Проблема", `<p>Бар должен передать свой характер за несколько секунд, но обычный шаблон для заведения обычно разделяет меню, атмосферу и бронирование на несвязанные блоки.</p><p>Задачей было сделать цифровой опыт таким же выразительным, как визит в бар, сохранив понятную информацию и короткий путь к контакту.</p>`],
      ["Дизайн-стратегия", `<p>Я взяла барную полку за основную модель взаимодействия. Пронумерованные бутылки стали узнаваемой системой навигации, а та же идея продолжается в подборе коктейля и карточках напитков.</p><p>Так история бренда и поведение продукта остаются связанными: пользователь не просто читает о баре, а исследует его.</p>`],
      ["Информационная архитектура", `<p>Путь пользователя состоит из четырёх моментов: первый экран знакомит с местом, меню бутылок помогает найти напиток, галерея создаёт атмосферу, а блок бронирования даёт прямой следующий шаг.</p><p>Отдельный маршрут подбора коктейля поддерживает сценарий для тех, кому нужна рекомендация, а не просмотр всей полки.</p>`],
      ["Интерактивное меню коктейлей", `<p>Меню показывает 81 пронумерованный коктейль как полку бутылок с поиском. Можно искать по номеру или названию, фильтровать по вкусовому направлению и открыть бутылку, чтобы увидеть карточку напитка.</p><p>В карточке выбранного коктейля сразу виден следующий шаг: прямая ссылка на бронирование столика. Взаимодействие игровое, но структура остаётся предсказуемой и доступной с клавиатуры.</p>`],
      ["Подбор коктейля", `<p>Подбор превращает выбор напитка в короткий момент открытия. Посетитель выбирает дату, просит показать коктейль и получает результат из той же системы пронумерованных бутылок, что используется в основном меню.</p><p>Это лёгкая игра, а не астрология и не утверждение о личности. Ценность сценария в том, что он снижает перегрузку выбором и сохраняет тон бара.</p>`],
      ["Визуальное направление", `<p>Визуальная система объединяет почти чёрные поверхности, тёплые янтарные элементы, глубокие красные акценты и электрическое синее свечение. Крупная контурная типографика создаёт характер, а реальные фотографии бара привязывают концепт к месту, которое можно посетить.</p><p>Украинские тексты, номера бутылок и небольшие редакционные подписи делают интерфейс авторским, а не шаблонным.</p>`],
      ["Адаптивное поведение продукта", `<p>На больших экранах полка работает как иммерсивный шкаф с несколькими рядами бутылок. На маленьких экранах композиция становится линейнее, сохраняя ту же логику открытия без перегруженной desktop-сцены.</p><p>Удобные зоны касания, закреплённый поиск, прямые действия бронирования и видимые focus-состояния поддерживают основной путь на разных устройствах.</p>`],
      ["Результат и рефлексия", `<p>Концепт включает адаптивную главную страницу, интерактивное меню бутылок, модальное окно напитка, подбор коктейля, галерею, блок контактов для бронирования и визуальное направление.</p><p>Главным решением стало сделать меню запоминающейся частью продукта. Благодаря этому V Rohy передаёт цифровой опыт бара ещё до визита и сохраняет практичный путь к столику.</p>`]
    ]
  },
  de: {
    ...vrohyEnglish,
    name: "V ROHY BAR",
    industry: "Gastronomie / Bar und Getränke",
    platform: "Responsive Website · Interaktives Menü · Cocktail-Finder",
    location: "Ternopil, Ukraine",
    role: "Unabhängige UX/UI-Designerin und Webentwicklerin",
    scope: "Markenrichtung · UX-Strategie · UI-Design · Frontend-Entwicklung · Interaktionsdesign",
    strapline: "Eine Bar-Website, auf der das Menü Teil des Abends wird.",
    sections: [
      ["Projektüberblick", `<p>V Rohy ist ein interaktives Website-Konzept für eine Cocktailbar in Ternopil. Das Erlebnis basiert auf der eigenen visuellen Sprache der Bar: nummerierten Flaschen, einem dunklen Raum, warmen Amber-Akzenten und ukrainischen redaktionellen Texten.</p><p>Die Seite ist nicht nur ein Menü. Sie verbindet Entdeckung, Atmosphäre und den nächsten praktischen Schritt: einen Drink wählen, den Ort erkunden, einen Cocktail finden und einen Tisch reservieren.</p>`],
      ["Problem", `<p>Eine Bar muss ihren Charakter in wenigen Sekunden vermitteln. Ein gewöhnliches Hospitality-Template trennt Menü, Atmosphäre und Reservierung jedoch oft in voneinander losgelöste Blöcke.</p><p>Die Herausforderung war, das digitale Erlebnis so eigenständig wie den Besuch vor Ort zu machen und zugleich Informationen verständlich sowie den Kontaktweg kurz zu halten.</p>`],
      ["Designstrategie", `<p>Ich habe das Barregal als zentrales Interaktionsmodell verwendet. Nummerierte Flaschen wurden zu einem wiedererkennbaren Navigationssystem und nicht nur zu einem dekorativen Hintergrund. Die Idee setzt sich im Cocktail-Finder und in den Drink-Karten fort.</p><p>So bleiben Markengeschichte und Produktverhalten verbunden: Nutzer lesen nicht nur über die Bar, sondern erkunden sie.</p>`],
      ["Informationsarchitektur", `<p>Der Nutzerweg besteht aus vier klaren Momenten: Der Hero stellt den Ort vor, das Flaschenmenü unterstützt die Drink-Auswahl, die Galerie baut Atmosphäre auf und der Reservierungsbereich bietet den direkten nächsten Schritt.</p><p>Der separate Cocktail-Finder unterstützt Besucher, die eine Empfehlung möchten, statt das gesamte Regal zu durchsuchen.</p>`],
      ["Interaktives Cocktailmenü", `<p>Das Menü zeigt 81 nummerierte Cocktails als durchsuchbares Flaschenregal. Besucher können nach Nummer oder Name suchen, nach Geschmacksrichtung filtern und eine Flasche öffnen, um die Drink-Karte zu sehen.</p><p>Die Karte des ausgewählten Drinks hält die nächste Handlung sichtbar: einen direkten Link zur Tischreservierung. Die Interaktion ist spielerisch, die Struktur bleibt jedoch vorhersehbar und per Tastatur zugänglich.</p>`],
      ["Cocktail-Finder", `<p>Der Finder macht die Drink-Auswahl zu einem kurzen Entdeckungsmoment. Besucher wählen ein Datum, lassen sich einen Cocktail zeigen und erhalten ein Ergebnis aus derselben nummerierten Flaschenwelt wie im Hauptmenü.</p><p>Das ist bewusst ein leichtes Spiel, keine Astrologie und keine Aussage über die Persönlichkeit. Der Nutzen liegt darin, die Auswahl zu vereinfachen und den Ton der Bar zu bewahren.</p>`],
      ["Visuelle Richtung", `<p>Das visuelle System verbindet fast schwarze Flächen, warme Amber-Elemente, tiefe rote Akzente und ein elektrisches blaues Leuchten. Große Outline-Typografie schafft Charakter, während echte Barfotografie das Konzept in einem besuchbaren Ort verankert.</p><p>Ukrainische Texte, Flaschennummern und kleine redaktionelle Labels machen die Oberfläche eigenständig statt generisch.</p>`],
      ["Responsives Produktverhalten", `<p>Auf großen Bildschirmen funktioniert das Regal wie ein immersiver Schrank mit mehreren Flaschenreihen. Auf kleineren Bildschirmen wird das Layout linearer und bewahrt dieselbe Entdeckungslogik ohne eine überladene Desktop-Szene.</p><p>Große Touch-Ziele, eine sticky Suche, direkte Reservierungsaktionen und sichtbare Focus-Zustände unterstützen den Kernweg auf verschiedenen Geräten.</p>`],
      ["Ergebnis und Reflexion", `<p>Das Konzept umfasst eine responsive Startseite, ein interaktives Flaschenmenü, ein Drink-Modal, einen Cocktail-Finder, eine Galerie, einen kontaktorientierten Reservierungsbereich und eine visuelle Richtung.</p><p>Die wichtigste Entscheidung war, das Menü zum erinnerbaren Teil des Produkts zu machen. Dadurch kann V Rohy die digitale Atmosphäre der Bar schon vor dem Besuch vermitteln und den praktischen Weg zum Tisch erhalten.</p>`]
    ]
  }
};
