const apartments = [
  { id: '2D', floor: '2', rooms: '1', area: '39 m²', price: '£1,320 / month' },
  { id: '4B', floor: '4', rooms: '1', area: '42 m²', price: '£1,450 / month' },
  { id: '5C', floor: '5', rooms: '2', area: '56 m²', price: '£1,720 / month' },
  { id: '7A', floor: '7', rooms: '2', area: '64 m²', price: '£1,950 / month' },
  { id: '8E', floor: '8', rooms: '2', area: '71 m²', price: '£2,180 / month' },
  { id: '10C', floor: '10', rooms: '3', area: '88 m²', price: '£2,700 / month' },
  { id: '11B', floor: '11', rooms: '3', area: '96 m²', price: '£3,050 / month' }
];

const copy = {
  en: {
    htmlLang: 'en',
    pageTitle: 'UX Case Study — LVL HOME',
    metaDescription: 'UX case study for LVL HOME — an interactive apartment finder based on a nighttime building facade.',
    nav: { about: 'About', floors: 'Floors', ux: 'UX Case', contact: 'Contact' },
    hero: {
      label: 'UX CASE STUDY',
      title: ['LVL HOME', 'Interactive Apartment Finder'],
      subtitle: 'A concept website for browsing available apartments inside one specific residential building through an interactive nighttime facade.',
      description: 'LVL HOME is a portfolio concept that reimagines apartment search for a single residential building. Instead of using a standard list of apartment cards, the interface turns the building facade into the main browsing system. Each window represents a possible apartment, and available units respond through warm light, refined labels, filters, and a detailed apartment panel.',
      visualTag: 'Facade as interface',
      meta: [
        ['Role', 'UX/UI Designer'],
        ['Project Type', 'Real estate concept'],
        ['Main Idea', 'Building facade as apartment navigation'],
        ['Focus', 'Spatial browsing, hover feedback, information hierarchy, premium UI'],
        ['Format', 'One-page interactive website with supporting pages'],
        ['Current Dataset', '7 available residences']
      ]
    },
    sections: [
      {
        eyebrow: 'CONCEPT',
        title: 'The building becomes the interface',
        body: [
          'The core idea of LVL HOME is simple: the building itself becomes the navigation system. Because the project focuses on apartments inside one specific residential tower, a traditional city-wide real estate layout would feel unnecessary and generic.',
          'Windows act as apartment entry points. Available apartments are subtly marked and become warm on hover, while unavailable units remain dark and inactive. This creates a direct connection between visual exploration and apartment availability.'
        ],
        statement: 'Instead of searching through cards, the user explores the building.'
      },
      {
        eyebrow: 'UX PROBLEM',
        title: 'A single building does not need a heavy marketplace interface',
        body: [
          'Most real estate websites are built for large databases: search bars, maps, grids, filters, and repetitive cards. For one premium building, that structure can feel too heavy.',
          'The UX challenge was to create a browsing experience that feels specific to one building while still giving the user practical apartment information: floor, rooms, area, price, status, and a path to book a viewing.'
        ],
        statement: 'How can availability feel spatial, intuitive, and premium without relying on a standard card-based layout?'
      },
      {
        eyebrow: 'UX GOALS',
        title: 'What the experience needs to achieve',
        cards: [
          ['Goal 01', 'Make the building the main navigation system', 'The facade replaces the traditional listing grid and gives users a visual structure for browsing apartments by floor.'],
          ['Goal 02', 'Use light as interaction feedback', 'Warm light inside a window confirms that the apartment is available and interactive in a way that feels natural to the concept.'],
          ['Goal 03', 'Keep unavailable apartments quiet', 'Unavailable windows remain dark and inactive, reducing noise and helping active units stand out without aggressive highlighting.'],
          ['Goal 04', 'Support fast decision-making', 'The apartment panel gives essential information quickly: apartment name, floor, rooms, area, price, status, and an interior image.'],
          ['Goal 05', 'Preserve a premium mood', 'The interface avoids loud colors, oversized buttons, and mass-market property patterns. The tone stays calm, dark, and architectural.']
        ]
      },
      {
        eyebrow: 'TARGET USER',
        title: 'Designed for a focused apartment search',
        body: [
          'The concept is designed for users who are interested in renting or viewing an apartment inside a specific premium residential building. They are not browsing hundreds of properties. They are evaluating availability inside one address.'
        ],
        list: [
          'Looking for an apartment in a specific building',
          'Values location, atmosphere, and building identity',
          'Wants quick access to price, area, floor, and room count',
          'Expects a premium and trustworthy presentation',
          'Does not want to scroll through generic property cards'
        ]
      },
      {
        eyebrow: 'USER JOURNEY',
        title: 'Gradual discovery instead of instant overload',
        body: [
          'The journey is built around gradual discovery. The user first sees the building as a whole, then identifies available units, then opens details only when a specific apartment becomes interesting.'
        ],
        steps: [
          'Land on website',
          'Understand that the facade is interactive',
          'Scroll through the building',
          'Notice subtly marked available windows',
          'Hover over a window',
          'See warm light',
          'Click the apartment',
          'Review apartment panel',
          'Book a viewing'
        ]
      },
      {
        eyebrow: 'INTERACTION LOGIC',
        title: 'Every interaction reinforces the metaphor',
        cards: [
          ['Available windows', 'Available apartments are the only interactive elements. This keeps the interface focused and prevents users from wasting attention on unavailable units.'],
          ['Hover light', 'The light works as emotional feedback and functional feedback. It creates atmosphere, but it also confirms that the object is active.'],
          ['No hover popup', 'The latest interaction keeps hover clean: only the window lights up. Detailed information appears after click in the side panel, so the facade stays calm.'],
          ['Apartment panel', 'The side panel gives detailed information without taking the user away from the building. The user keeps spatial context while reviewing the apartment.'],
          ['Filters', 'Filters are secondary. They refine available windows but do not dominate the interface, protecting the facade as the primary experience.']
        ]
      },
      {
        eyebrow: 'INFORMATION HIERARCHY',
        title: 'Information appears only when the user shows intent',
        body: [
          'The interface is intentionally layered. It does not show every apartment detail immediately. Each layer appears at the moment it becomes useful.'
        ],
        hierarchy: [
          'Building facade',
          'Available windows',
          'Hover light and status label',
          'Apartment side panel',
          'Interior image and apartment data',
          'Booking action'
        ],
        statement: 'This hierarchy keeps the experience atmospheric without sacrificing clarity.'
      },
      {
        eyebrow: 'WHY WINDOWS REPLACE CARDS',
        title: 'A more meaningful interface element',
        body: [
          'A card-based layout would be efficient but predictable. Since the project represents apartments in one specific building, windows are more meaningful. They show location, floor, and availability at the same time.',
          'This decision turns browsing into spatial exploration. The user does not compare apartments as abstract products only; they see where each apartment exists inside the building.'
        ],
        list: [
          'Better spatial understanding',
          'Stronger connection to the building',
          'More memorable interaction',
          'Reduced dependence on generic listing patterns',
          'Clear visual metaphor'
        ]
      },
      {
        eyebrow: 'VISUAL UX REASONING',
        title: 'Darkness creates focus; warm light creates meaning',
        body: [
          'The dark nighttime facade creates contrast and focus. Unavailable apartments fade into the background, while available apartments can be activated through warm light.',
          'The golden glow is not only decorative. It works as a signal of availability and interaction, while the navy, graphite, and gold palette supports the premium real estate positioning.'
        ],
        list: [
          'Dark facade keeps attention on active windows',
          'Warm light communicates availability',
          'Gold accents suggest premium real estate',
          'Minimal navigation avoids distraction',
          'Muted filters keep the building dominant',
          'Soft animations make the interface feel refined'
        ]
      },
      {
        eyebrow: 'APARTMENT DATA STRATEGY',
        title: 'Small dataset, clear decisions',
        body: [
          'The project uses a compact apartment dataset to show how the concept can scale. Each available window is connected to apartment data such as name, floor, room count, area, price, rental status, and one distinct interior image.',
          'The data is simple on purpose. The concept focuses on discovery and clarity, not on overwhelming users with every possible property parameter.'
        ],
        factLabels: { apartment: 'Apartment', floor: 'Floor', rooms: 'Rooms', area: 'Area', price: 'Price', status: 'Status', ready: 'Ready to rent' },
        apartments
      },
      {
        eyebrow: 'FILTER UX',
        title: 'Filters refine the facade instead of replacing it',
        body: [
          'Filters are included, but they are intentionally restrained. In many real estate interfaces, filters become the main experience. In LVL HOME, they support the building interface.',
          'When a filter is selected, matching available windows remain active and non-matching available windows become visually muted. Unavailable windows stay dark, so the facade remains readable.'
        ],
        list: [
          'Filters should refine, not dominate',
          'The facade should remain visible',
          'Filtered states must be readable',
          'Unavailable units should not compete visually',
          'Matching apartments should remain easy to identify'
        ]
      },
      {
        eyebrow: 'MICROINTERACTIONS',
        title: 'Motion should feel expensive, not noisy',
        body: [
          'Microinteractions make the interface feel responsive and alive without making it busy. The animations are slow, subtle, and cinematic.'
        ],
        list: [
          'Page load fade-in',
          'Building slides slightly upward on load',
          'Available window glow on hover',
          'Selected window remains lit',
          'Apartment panel slides in from the right',
          'Background slightly dims when the panel opens',
          'Filtered-out windows become muted',
          'Rare ambient facade and street animations'
        ],
        statement: 'Each animation gives feedback, supports orientation, or reinforces the metaphor of light inside a building.'
      },
      {
        eyebrow: 'ACCESSIBILITY CONSIDERATIONS',
        title: 'The visual metaphor still needs usable mechanics',
        body: [
          'Because the interface uses windows and light as central interaction elements, accessibility must be considered carefully. Availability should not depend only on color or glow.'
        ],
        list: [
          'Keyboard navigation for available windows',
          'Visible focus outline',
          'Accessible names for available apartments',
          'High contrast apartment panel',
          'Reduced motion option',
          'Do not rely on color alone for availability',
          'Clear close button in the apartment panel'
        ],
        statement: 'Atmosphere should support clarity, not replace it.'
      },
      {
        eyebrow: 'KEY DESIGN DECISIONS',
        title: 'The decisions that define the concept',
        cards: [
          ['Decision 01', 'Facade as interface', 'The building facade becomes the main navigation system because the project is focused on one specific residential tower.'],
          ['Decision 02', 'Windows as apartment cards', 'Windows replace standard property cards, allowing the user to understand apartment location and availability visually.'],
          ['Decision 03', 'Light as feedback', 'Warm light is used as a natural hover state. It feels atmospheric while clearly communicating interaction.'],
          ['Decision 04', 'Inactive windows stay dark', 'Unavailable apartments do not distract the user. This keeps the visual system calm and helps active apartments stand out.'],
          ['Decision 05', 'Side panel instead of new page', 'The apartment panel keeps users connected to the building while giving practical information and an interior image.'],
          ['Decision 06', 'Filters stay secondary', 'Filters help refine the experience, but they do not become the center of the interface.']
        ]
      },
      {
        eyebrow: 'INTERFACE MOCKUPS',
        title: 'Small artifacts that explain the system',
        body: [
          'The UX page uses minimal mockup placeholders to explain the interface logic without redesigning the original apartment finder.'
        ],
        mockups: [
          ['facade', 'Facade', 'Building grid as navigation'],
          ['windows', 'Window states', 'Unavailable, available, and hover light'],
          ['panel', 'Apartment panel', 'Details stay beside the facade'],
          ['filter', 'Filter state', 'Secondary controls refine the active windows']
        ]
      },
      {
        eyebrow: 'RESULT',
        title: 'A memorable alternative to standard listings',
        body: [
          'The final concept transforms apartment browsing into a spatial and emotional interaction. Instead of scanning a generic list, the user explores a building, discovers available apartments through light, and opens details only when needed.'
        ],
        list: [
          'A one-building apartment search experience',
          'A facade-based navigation system',
          'A light-driven availability signal',
          'A minimal premium interface',
          'A memorable alternative to standard listing cards'
        ]
      },
      {
        eyebrow: 'REFLECTION',
        title: 'Context can become interface',
        body: [
          'This project shows how a familiar real estate task can be redesigned around context. Since all apartments belong to one building, the facade becomes more useful than a generic card grid.',
          'The strongest part of the concept is the connection between form and function: windows are not just decoration, they are the interface. The light interaction creates emotional atmosphere while also solving a usability problem.',
          'If developed further, the project could include apartment comparison, saved apartments, mobile-specific navigation, real floor plans, and accessibility testing for keyboard and screen reader users.'
        ]
      }
    ],
    footer: {
      title: 'LVL HOME',
      subtitle: 'Interactive Apartment Finder',
      credit: 'UX/UI portfolio concept by Yana Ellis.',
      buttons: [
        ['View Live Project', 'index.html'],
      ]
    }
  },
  ru: {
    htmlLang: 'ru',
    pageTitle: 'UX-кейс — LVL HOME',
    metaDescription: 'UX-кейс LVL HOME — интерактивный поиск квартир через ночной фасад жилого дома.',
    nav: { about: 'О проекте', floors: 'Этажи', ux: 'UX-кейс', contact: 'Контакты' },
    hero: {
      label: 'UX-КЕЙС',
      title: ['LVL HOME', 'Interactive Apartment Finder'],
      subtitle: 'Концепт-сайт для просмотра доступных квартир в одном конкретном жилом доме через интерактивный ночной фасад.',
      description: 'LVL HOME — портфолио-концепт, который переосмысляет поиск квартиры в рамках одного здания. Вместо стандартного списка карточек интерфейс превращает фасад дома в основную систему навигации. Каждое окно представляет потенциальную квартиру, а доступные варианты реагируют тёплым светом, аккуратными метками, фильтрами и подробной боковой панелью.',
      visualTag: 'Фасад как интерфейс',
      meta: [
        ['Роль', 'UX/UI Designer'],
        ['Тип проекта', 'Концепт real estate'],
        ['Главная идея', 'Фасад здания как навигация по квартирам'],
        ['Фокус', 'Пространственный просмотр, hover-feedback, иерархия информации, premium UI'],
        ['Формат', 'Интерактивный one-page сайт с дополнительными страницами'],
        ['Текущие данные', '7 доступных резиденций']
      ]
    },
    sections: [
      {
        eyebrow: 'КОНЦЕПТ',
        title: 'Здание становится интерфейсом',
        body: [
          'Главная идея LVL HOME проста: само здание становится системой навигации. Так как проект посвящён квартирам внутри одного жилого дома, классический интерфейс поиска по городу выглядел бы лишним и слишком обобщённым.',
          'Окна работают как точки входа в квартиры. Доступные квартиры отмечены мягко и загораются при наведении, а недоступные остаются тёмными и неактивными. Так визуальное исследование напрямую связывается с доступностью квартир.'
        ],
        statement: 'Вместо поиска по карточкам пользователь исследует дом.'
      },
      {
        eyebrow: 'UX-ПРОБЛЕМА',
        title: 'Одному дому не нужен тяжёлый маркетплейс-интерфейс',
        body: [
          'Большинство сайтов недвижимости рассчитаны на большие базы: поисковые строки, карты, сетки, фильтры и повторяющиеся карточки. Для одного премиального здания такая структура ощущается перегруженной.',
          'UX-задача состояла в том, чтобы создать просмотр, который ощущается специфичным для одного дома, но всё равно даёт практичную информацию: этаж, комнаты, площадь, цену, статус и возможность записаться на просмотр.'
        ],
        statement: 'Как показать доступность квартир пространственно, интуитивно и премиально — без стандартной карточной сетки?'
      },
      {
        eyebrow: 'UX-ЦЕЛИ',
        title: 'Что должен решать этот опыт',
        cards: [
          ['Цель 01', 'Сделать дом главной навигацией', 'Фасад заменяет обычную сетку объявлений и даёт пользователю визуальную структуру для просмотра квартир по этажам.'],
          ['Цель 02', 'Использовать свет как feedback', 'Тёплый свет внутри окна подтверждает, что квартира доступна и интерактивна, причём это ощущается естественно для концепта.'],
          ['Цель 03', 'Оставить недоступные квартиры тихими', 'Недоступные окна остаются тёмными и неактивными, уменьшая визуальный шум и не требуя яркой подсветки активных вариантов.'],
          ['Цель 04', 'Ускорить принятие решения', 'Панель квартиры быстро показывает ключевое: название, этаж, комнаты, площадь, цену, статус и интерьерное фото.'],
          ['Цель 05', 'Сохранить премиальное настроение', 'Интерфейс избегает громких цветов, огромных кнопок и массовых паттернов сайтов недвижимости. Тон остаётся спокойным, тёмным и архитектурным.']
        ]
      },
      {
        eyebrow: 'ЦЕЛЕВОЙ ПОЛЬЗОВАТЕЛЬ',
        title: 'Для сфокусированного поиска квартиры',
        body: [
          'Концепт рассчитан на пользователей, которые хотят арендовать или посмотреть квартиру именно в этом премиальном жилом доме. Они не выбирают из сотен объектов, а оценивают доступность внутри одного адреса.'
        ],
        list: [
          'Ищет квартиру в конкретном здании',
          'Ценит локацию, атмосферу и идентичность дома',
          'Хочет быстро видеть цену, площадь, этаж и комнаты',
          'Ожидает премиальную и доверительную подачу',
          'Не хочет листать однотипные карточки недвижимости'
        ]
      },
      {
        eyebrow: 'USER JOURNEY',
        title: 'Постепенное открытие вместо мгновенной перегрузки',
        body: [
          'Путь пользователя построен вокруг постепенного исследования. Сначала он видит дом целиком, затем замечает доступные квартиры и открывает детали только тогда, когда конкретный вариант становится интересен.'
        ],
        steps: [
          'Попадает на сайт',
          'Понимает, что фасад интерактивный',
          'Скроллит дом по этажам',
          'Замечает доступные окна',
          'Наводит курсор на окно',
          'Видит тёплый свет',
          'Кликает по квартире',
          'Изучает боковую панель',
          'Бронирует просмотр'
        ]
      },
      {
        eyebrow: 'ЛОГИКА ВЗАИМОДЕЙСТВИЯ',
        title: 'Каждое действие поддерживает метафору',
        cards: [
          ['Доступные окна', 'Только доступные квартиры являются интерактивными. Это держит фокус и не заставляет пользователя тратить внимание на недоступные варианты.'],
          ['Свет при наведении', 'Свет работает и как эмоциональный, и как функциональный feedback. Он создаёт атмосферу и подтверждает активность объекта.'],
          ['Без popup при hover', 'В актуальной версии hover остаётся чистым: окно только загорается. Детали появляются после клика в боковой панели, поэтому фасад не перегружается.'],
          ['Панель квартиры', 'Боковая панель показывает детали, не уводя пользователя от здания. Пространственный контекст сохраняется во время изучения квартиры.'],
          ['Фильтры', 'Фильтры вторичны. Они уточняют доступные окна, но не становятся главным интерфейсом, сохраняя фасад как основной опыт.']
        ]
      },
      {
        eyebrow: 'ИЕРАРХИЯ ИНФОРМАЦИИ',
        title: 'Информация появляется только при интересе пользователя',
        body: [
          'Интерфейс намеренно построен слоями. Он не показывает все детали квартир сразу. Каждый слой появляется в тот момент, когда становится полезным.'
        ],
        hierarchy: [
          'Фасад здания',
          'Доступные окна',
          'Свет при hover и статусная метка',
          'Боковая панель квартиры',
          'Интерьерное фото и данные квартиры',
          'Действие бронирования'
        ],
        statement: 'Такая иерархия сохраняет атмосферу и не жертвует понятностью.'
      },
      {
        eyebrow: 'ПОЧЕМУ ОКНА ЗАМЕНЯЮТ КАРТОЧКИ',
        title: 'Более осмысленный элемент интерфейса',
        body: [
          'Карточная сетка была бы эффективной, но предсказуемой. Так как проект представляет квартиры в одном здании, окна становятся более значимым элементом: они одновременно показывают положение, этаж и доступность.',
          'Это решение превращает просмотр в пространственное исследование. Пользователь сравнивает не только абстрактные объекты, но и видит, где квартира находится внутри дома.'
        ],
        list: [
          'Лучшее пространственное понимание',
          'Сильнее связь с самим зданием',
          'Более запоминающееся взаимодействие',
          'Меньше зависимости от типовых listing-паттернов',
          'Понятная визуальная метафора'
        ]
      },
      {
        eyebrow: 'ВИЗУАЛЬНАЯ UX-ЛОГИКА',
        title: 'Темнота создаёт фокус, тёплый свет — смысл',
        body: [
          'Ночной тёмный фасад создаёт контраст и фокус. Недоступные квартиры уходят в фон, а доступные варианты активируются тёплым светом.',
          'Золотое свечение не просто декоративно. Оно сигнализирует о доступности и интерактивности, а палитра navy, graphite и gold поддерживает премиальное позиционирование.'
        ],
        list: [
          'Тёмный фасад удерживает внимание на активных окнах',
          'Тёплый свет сообщает о доступности',
          'Золотые акценты усиливают premium real estate ощущение',
          'Минимальная навигация не отвлекает',
          'Сдержанные фильтры оставляют дом главным элементом',
          'Мягкие анимации делают интерфейс более refined'
        ]
      },
      {
        eyebrow: 'СТРАТЕГИЯ ДАННЫХ КВАРТИР',
        title: 'Небольшой dataset, ясные решения',
        body: [
          'Проект использует компактный набор квартир, чтобы показать, как концепт может масштабироваться. Каждое доступное окно связано с названием, этажом, количеством комнат, площадью, ценой, статусом и отдельной интерьерной фотографией.',
          'Данные намеренно простые. Концепт фокусируется на исследовании и ясности, а не на перегрузке пользователя всеми возможными параметрами недвижимости.'
        ],
        factLabels: { apartment: 'Квартира', floor: 'Этаж', rooms: 'Комнаты', area: 'Площадь', price: 'Цена', status: 'Статус', ready: 'Ready to rent' },
        apartments
      },
      {
        eyebrow: 'UX ФИЛЬТРОВ',
        title: 'Фильтры уточняют фасад, а не заменяют его',
        body: [
          'Фильтры есть, но они намеренно сдержанные. Во многих real estate интерфейсах фильтры становятся главным опытом. В LVL HOME они лишь поддерживают фасад.',
          'Когда фильтр выбран, подходящие доступные окна остаются активными, а неподходящие становятся тусклее. Недоступные окна остаются тёмными, поэтому фасад не превращается в хаос.'
        ],
        list: [
          'Фильтры должны уточнять, а не доминировать',
          'Фасад должен оставаться видимым',
          'Состояния фильтрации должны легко считываться',
          'Недоступные квартиры не должны конкурировать визуально',
          'Подходящие квартиры должны быстро находиться'
        ]
      },
      {
        eyebrow: 'МИКРОВЗАИМОДЕЙСТВИЯ',
        title: 'Motion должен ощущаться дорогим, а не шумным',
        body: [
          'Микровзаимодействия делают интерфейс отзывчивым и живым, но не перегружают его. Анимации медленные, мягкие и немного кинематографичные.'
        ],
        list: [
          'Плавное появление страницы',
          'Дом слегка поднимается при загрузке',
          'Свечение доступного окна при hover',
          'Выбранное окно остаётся подсвеченным',
          'Панель квартиры выезжает справа',
          'Фон слегка затемняется при открытии панели',
          'Отфильтрованные окна становятся тусклее',
          'Редкие атмосферные анимации фасада и улицы'
        ],
        statement: 'Каждая анимация даёт feedback, помогает ориентации или усиливает метафору света внутри здания.'
      },
      {
        eyebrow: 'ACCESSIBILITY',
        title: 'Визуальная метафора всё равно должна быть удобной',
        body: [
          'Так как интерфейс использует окна и свет как ключевые элементы взаимодействия, accessibility нужно учитывать особенно внимательно. Доступность не должна зависеть только от цвета или свечения.'
        ],
        list: [
          'Навигация по доступным окнам с клавиатуры',
          'Видимый focus outline',
          'Accessible names для доступных квартир',
          'Контрастная боковая панель',
          'Опция reduced motion',
          'Не полагаться только на цвет',
          'Понятная кнопка закрытия панели'
        ],
        statement: 'Атмосфера должна поддерживать ясность, а не заменять её.'
      },
      {
        eyebrow: 'КЛЮЧЕВЫЕ ДИЗАЙН-РЕШЕНИЯ',
        title: 'Решения, которые формируют концепт',
        cards: [
          ['Решение 01', 'Фасад как интерфейс', 'Фасад становится главной системой навигации, потому что проект сфокусирован на одной конкретной жилой башне.'],
          ['Решение 02', 'Окна как карточки квартир', 'Окна заменяют стандартные карточки, позволяя визуально понять расположение и доступность квартиры.'],
          ['Решение 03', 'Свет как feedback', 'Тёплый свет используется как естественное состояние hover: атмосферно и функционально одновременно.'],
          ['Решение 04', 'Неактивные окна остаются тёмными', 'Недоступные квартиры не отвлекают, поэтому визуальная система остаётся спокойной.'],
          ['Решение 05', 'Боковая панель вместо новой страницы', 'Панель сохраняет связь с домом и показывает практичную информацию вместе с интерьерным фото.'],
          ['Решение 06', 'Фильтры остаются вторичными', 'Фильтры помогают уточнить опыт, но не становятся центром интерфейса.']
        ]
      },
      {
        eyebrow: 'ИНТЕРФЕЙСНЫЕ МАКЕТЫ',
        title: 'Маленькие артефакты, объясняющие систему',
        body: [
          'UX-страница использует минимальные placeholder-макеты, чтобы объяснить логику интерфейса без редизайна самого apartment finder.'
        ],
        mockups: [
          ['facade', 'Фасад', 'Сетка здания как навигация'],
          ['windows', 'Состояния окон', 'Недоступное, доступное и hover-свет'],
          ['panel', 'Панель квартиры', 'Детали остаются рядом с фасадом'],
          ['filter', 'Состояние фильтра', 'Вторичные controls уточняют активные окна']
        ]
      },
      {
        eyebrow: 'РЕЗУЛЬТАТ',
        title: 'Запоминающаяся альтернатива стандартным listing-сайтам',
        body: [
          'Финальный концепт превращает просмотр квартир в пространственное и эмоциональное взаимодействие. Вместо однотипного списка пользователь исследует дом, находит доступные квартиры через свет и открывает детали только при необходимости.'
        ],
        list: [
          'Поиск квартир внутри одного здания',
          'Навигация через фасад',
          'Свет как сигнал доступности',
          'Минималистичный premium-интерфейс',
          'Запоминающаяся альтернатива обычным карточкам'
        ]
      },
      {
        eyebrow: 'РЕФЛЕКСИЯ',
        title: 'Контекст может стать интерфейсом',
        body: [
          'Этот проект показывает, как знакомую задачу в недвижимости можно переосмыслить через контекст. Если все квартиры находятся в одном доме, фасад становится полезнее типовой сетки карточек.',
          'Самая сильная часть концепта — связь формы и функции: окна здесь не декор, а интерфейс. Свет создаёт эмоциональную атмосферу и одновременно решает UX-задачу.',
          'Если развивать проект дальше, можно добавить сравнение квартир, избранное, мобильную навигацию, реальные планировки и accessibility-тестирование для клавиатуры и screen reader.'
        ]
      }
    ],
    footer: {
      title: 'LVL HOME',
      subtitle: 'Interactive Apartment Finder',
      credit: 'UX/UI portfolio concept by Yana Ellis.',
      buttons: [
        ['Открыть проект', 'index.html'],
      ]
    }
  },
  pl: {
    htmlLang: 'pl',
    pageTitle: 'UX Case Study — LVL HOME',
    metaDescription: 'Studium UX projektu LVL HOME — interaktywna wyszukiwarka mieszkań oparta na nocnej fasadzie budynku.',
    nav: { about: 'O nas', floors: 'Piętra', ux: 'UX case', contact: 'Kontakt' },
    hero: {
      label: 'UX CASE STUDY',
      title: ['LVL HOME', 'Interactive Apartment Finder'],
      subtitle: 'Koncepcyjna strona do przeglądania dostępnych mieszkań w jednym konkretnym budynku przez interaktywną nocną fasadę.',
      description: 'LVL HOME to koncepcja portfolio, która inaczej traktuje szukanie mieszkania w obrębie jednego budynku. Zamiast standardowej listy kart interfejs zamienia fasadę w główny system przeglądania. Każde okno reprezentuje potencjalne mieszkanie, a dostępne lokale reagują ciepłym światłem, subtelnymi etykietami, filtrami i szczegółowym panelem.',
      visualTag: 'Fasada jako interfejs',
      meta: [
        ['Rola', 'UX/UI Designer'],
        ['Typ projektu', 'Koncepcja real estate'],
        ['Główna idea', 'Fasada budynku jako nawigacja po mieszkaniach'],
        ['Fokus', 'Przeglądanie przestrzenne, feedback hover, hierarchia informacji, premium UI'],
        ['Format', 'Interaktywna strona one-page z dodatkowymi podstronami'],
        ['Aktualne dane', '7 dostępnych rezydencji']
      ]
    },
    sections: [
      {
        eyebrow: 'KONCEPCJA',
        title: 'Budynek staje się interfejsem',
        body: [
          'Główna idea LVL HOME jest prosta: sam budynek staje się systemem nawigacji. Ponieważ projekt dotyczy mieszkań w jednym konkretnym budynku, klasyczny układ wyszukiwarki miejskiej byłby zbyt ogólny.',
          'Okna działają jako punkty wejścia do mieszkań. Dostępne lokale są subtelnie oznaczone i zapalają się po najechaniu, a niedostępne pozostają ciemne i nieaktywne.'
        ],
        statement: 'Zamiast przeszukiwać karty, użytkownik eksploruje budynek.'
      },
      {
        eyebrow: 'PROBLEM UX',
        title: 'Jeden budynek nie potrzebuje ciężkiego marketplace’u',
        body: [
          'Większość stron nieruchomości jest projektowana dla dużych baz: wyszukiwarek, map, siatek, filtrów i powtarzalnych kart. Dla jednego premium budynku taka struktura jest zbyt ciężka.',
          'Wyzwanie UX polegało na stworzeniu doświadczenia specyficznego dla jednego adresu, które nadal dostarcza praktyczne informacje: piętro, pokoje, metraż, cenę, status i możliwość umówienia wizyty.'
        ],
        statement: 'Jak pokazać dostępność mieszkań przestrzennie, intuicyjnie i premium bez standardowej siatki kart?'
      },
      {
        eyebrow: 'CELE UX',
        title: 'Co doświadczenie ma osiągnąć',
        cards: [
          ['Cel 01', 'Uczynić budynek główną nawigacją', 'Fasada zastępuje tradycyjną siatkę ofert i daje użytkownikowi wizualną strukturę przeglądania pięter.'],
          ['Cel 02', 'Użyć światła jako feedbacku', 'Ciepłe światło w oknie potwierdza, że mieszkanie jest dostępne i interaktywne.'],
          ['Cel 03', 'Wyciszyć niedostępne mieszkania', 'Niedostępne okna pozostają ciemne i nieaktywne, zmniejszając szum wizualny.'],
          ['Cel 04', 'Wspierać szybkie decyzje', 'Panel mieszkania pokazuje najważniejsze informacje: nazwę, piętro, pokoje, metraż, cenę, status i zdjęcie wnętrza.'],
          ['Cel 05', 'Zachować premium mood', 'Interfejs unika krzykliwych kolorów i masowych wzorców portali nieruchomości. Ton pozostaje spokojny, ciemny i architektoniczny.']
        ]
      },
      {
        eyebrow: 'UŻYTKOWNIK',
        title: 'Dla skupionego wyboru mieszkania',
        body: [
          'Koncepcja jest przeznaczona dla osób, które chcą wynająć lub obejrzeć mieszkanie w konkretnym premium budynku. Nie przeglądają setek ofert — oceniają dostępność w jednym adresie.'
        ],
        list: [
          'Szuka mieszkania w konkretnym budynku',
          'Ceni lokalizację, atmosferę i tożsamość budynku',
          'Chce szybko poznać cenę, metraż, piętro i liczbę pokoi',
          'Oczekuje prezentacji premium i budzącej zaufanie',
          'Nie chce przewijać generycznych kart nieruchomości'
        ]
      },
      {
        eyebrow: 'USER JOURNEY',
        title: 'Stopniowe odkrywanie zamiast przeciążenia',
        body: [
          'Ścieżka użytkownika opiera się na stopniowym odkrywaniu. Najpierw widzi cały budynek, potem zauważa dostępne lokale, a szczegóły otwiera dopiero wtedy, gdy konkretne mieszkanie go zainteresuje.'
        ],
        steps: [
          'Wejście na stronę',
          'Zrozumienie interaktywnej fasady',
          'Przewijanie budynku',
          'Zauważenie dostępnych okien',
          'Najechanie na okno',
          'Ciepłe światło',
          'Kliknięcie mieszkania',
          'Panel z detalami',
          'Rezerwacja wizyty'
        ]
      },
      {
        eyebrow: 'LOGIKA INTERAKCJI',
        title: 'Każda interakcja wzmacnia metaforę',
        cards: [
          ['Dostępne okna', 'Tylko dostępne mieszkania są interaktywne. Dzięki temu interfejs pozostaje skupiony.'],
          ['Światło hover', 'Światło jest feedbackiem emocjonalnym i funkcjonalnym: buduje klimat i potwierdza aktywność elementu.'],
          ['Bez popupu przy hover', 'Aktualna wersja zachowuje czysty hover: okno tylko się zapala. Detale pojawiają się po kliknięciu w panelu bocznym.'],
          ['Panel mieszkania', 'Panel boczny daje szczegóły bez opuszczania widoku budynku, więc kontekst przestrzenny zostaje zachowany.'],
          ['Filtry', 'Filtry są drugorzędne. Zawężają dostępne okna, ale nie przejmują roli fasady.']
        ]
      },
      {
        eyebrow: 'HIERARCHIA INFORMACJI',
        title: 'Informacja pojawia się dopiero przy intencji',
        body: [
          'Interfejs jest warstwowy. Nie pokazuje wszystkich danych od razu. Każda warstwa pojawia się wtedy, gdy staje się użyteczna.'
        ],
        hierarchy: [
          'Fasada budynku',
          'Dostępne okna',
          'Światło hover i etykieta statusu',
          'Panel boczny mieszkania',
          'Zdjęcie wnętrza i dane mieszkania',
          'Akcja rezerwacji'
        ],
        statement: 'Taka hierarchia utrzymuje atmosferę bez utraty czytelności.'
      },
      {
        eyebrow: 'DLACZEGO OKNA ZASTĘPUJĄ KARTY',
        title: 'Bardziej znaczący element interfejsu',
        body: [
          'Układ kart byłby efektywny, ale przewidywalny. Ponieważ projekt dotyczy jednego budynku, okna są bardziej znaczące: pokazują lokalizację, piętro i dostępność jednocześnie.',
          'Ta decyzja zamienia przeglądanie w eksplorację przestrzenną. Użytkownik widzi, gdzie mieszkanie znajduje się w budynku.'
        ],
        list: [
          'Lepsze rozumienie przestrzeni',
          'Silniejsze połączenie z budynkiem',
          'Bardziej zapamiętywalna interakcja',
          'Mniejsza zależność od typowych listingów',
          'Czytelna metafora wizualna'
        ]
      },
      {
        eyebrow: 'WIZUALNE UZASADNIENIE UX',
        title: 'Ciemność daje fokus, ciepłe światło daje znaczenie',
        body: [
          'Nocna fasada tworzy kontrast i skupienie. Niedostępne mieszkania schodzą na drugi plan, a dostępne aktywują się ciepłym światłem.',
          'Złoty blask nie jest tylko dekoracją. Sygnalizuje dostępność i interakcję, a paleta navy, graphite i gold wspiera pozycjonowanie premium.'
        ],
        list: [
          'Ciemna fasada skupia uwagę na aktywnych oknach',
          'Ciepłe światło komunikuje dostępność',
          'Złote akcenty sugerują premium real estate',
          'Minimalna nawigacja nie rozprasza',
          'Stonowane filtry zostawiają budynek na pierwszym planie',
          'Miękkie animacje dodają elegancji'
        ]
      },
      {
        eyebrow: 'STRATEGIA DANYCH MIESZKAŃ',
        title: 'Mały dataset, jasne decyzje',
        body: [
          'Projekt używa kompaktowego zestawu mieszkań, aby pokazać skalowalność konceptu. Każde dostępne okno jest połączone z nazwą, piętrem, pokojami, metrażem, ceną, statusem i osobnym zdjęciem wnętrza.',
          'Dane są celowo proste. Koncept skupia się na odkrywaniu i klarowności, a nie na przeciążaniu użytkownika parametrami.'
        ],
        factLabels: { apartment: 'Apartament', floor: 'Piętro', rooms: 'Pokoje', area: 'Metraż', price: 'Cena', status: 'Status', ready: 'Ready to rent' },
        apartments
      },
      {
        eyebrow: 'UX FILTRÓW',
        title: 'Filtry doprecyzowują fasadę zamiast ją zastępować',
        body: [
          'Filtry są obecne, ale celowo powściągliwe. W wielu serwisach nieruchomości to one stają się głównym doświadczeniem. W LVL HOME wspierają fasadę.',
          'Po wyborze filtra pasujące dostępne okna pozostają aktywne, a niepasujące są przygaszone. Niedostępne okna pozostają ciemne.'
        ],
        list: [
          'Filtry powinny doprecyzowywać, nie dominować',
          'Fasada powinna pozostać widoczna',
          'Stany filtrowania muszą być czytelne',
          'Niedostępne lokale nie powinny konkurować wizualnie',
          'Pasujące mieszkania powinny być łatwe do znalezienia'
        ]
      },
      {
        eyebrow: 'MIKROINTERAKCJE',
        title: 'Ruch powinien być elegancki, nie hałaśliwy',
        body: [
          'Mikrointerakcje sprawiają, że interfejs jest responsywny i żywy, ale nie krzykliwy. Animacje są wolne, subtelne i kinowe.'
        ],
        list: [
          'Płynne pojawienie się strony',
          'Budynek lekko unosi się przy ładowaniu',
          'Świecenie dostępnego okna po hover',
          'Wybrane okno pozostaje podświetlone',
          'Panel mieszkania wsuwa się z prawej',
          'Tło lekko ciemnieje po otwarciu panelu',
          'Odfiltrowane okna stają się przygaszone',
          'Rzadkie animacje fasady i ulicy'
        ],
        statement: 'Każda animacja daje feedback, wspiera orientację albo wzmacnia metaforę światła w budynku.'
      },
      {
        eyebrow: 'DOSTĘPNOŚĆ',
        title: 'Metafora wizualna nadal musi być użyteczna',
        body: [
          'Ponieważ interfejs używa okien i światła jako centralnych elementów, dostępność trzeba traktować uważnie. Dostępność nie może zależeć tylko od koloru lub blasku.'
        ],
        list: [
          'Nawigacja klawiaturą po dostępnych oknach',
          'Widoczny focus outline',
          'Nazwy dostępne dla dostępnych mieszkań',
          'Kontrastowy panel mieszkania',
          'Opcja reduced motion',
          'Nie polegać wyłącznie na kolorze',
          'Czytelny przycisk zamknięcia panelu'
        ],
        statement: 'Atmosfera powinna wspierać klarowność, a nie ją zastępować.'
      },
      {
        eyebrow: 'KLUCZOWE DECYZJE PROJEKTOWE',
        title: 'Decyzje, które definiują koncept',
        cards: [
          ['Decyzja 01', 'Fasada jako interfejs', 'Fasada staje się główną nawigacją, bo projekt skupia się na jednym konkretnym budynku.'],
          ['Decyzja 02', 'Okna jako karty mieszkań', 'Okna zastępują standardowe karty i pokazują lokalizację oraz dostępność mieszkania.'],
          ['Decyzja 03', 'Światło jako feedback', 'Ciepłe światło jest naturalnym stanem hover: atmosferycznym i funkcjonalnym.'],
          ['Decyzja 04', 'Nieaktywne okna zostają ciemne', 'Niedostępne mieszkania nie rozpraszają, więc system pozostaje spokojny.'],
          ['Decyzja 05', 'Panel boczny zamiast nowej strony', 'Panel zachowuje kontekst budynku i pokazuje praktyczne dane oraz zdjęcie wnętrza.'],
          ['Decyzja 06', 'Filtry są drugorzędne', 'Filtry pomagają doprecyzować doświadczenie, ale nie stają się centrum interfejsu.']
        ]
      },
      {
        eyebrow: 'MAKIETY INTERFEJSU',
        title: 'Małe artefakty wyjaśniające system',
        body: [
          'Strona UX używa minimalnych placeholderów, aby wyjaśnić logikę interfejsu bez projektowania apartment finder od nowa.'
        ],
        mockups: [
          ['facade', 'Fasada', 'Siatka budynku jako nawigacja'],
          ['windows', 'Stany okien', 'Niedostępne, dostępne i światło hover'],
          ['panel', 'Panel mieszkania', 'Detale zostają obok fasady'],
          ['filter', 'Stan filtra', 'Drugorzędne controls zawężają aktywne okna']
        ]
      },
      {
        eyebrow: 'REZULTAT',
        title: 'Zapamiętywalna alternatywa dla standardowych listingów',
        body: [
          'Finalny koncept zmienia przeglądanie mieszkań w przestrzenną i emocjonalną interakcję. Użytkownik eksploruje budynek, odkrywa dostępne mieszkania przez światło i otwiera detale tylko wtedy, gdy są potrzebne.'
        ],
        list: [
          'Wyszukiwanie mieszkań w jednym budynku',
          'Nawigacja oparta na fasadzie',
          'Światło jako sygnał dostępności',
          'Minimalny interfejs premium',
          'Alternatywa dla standardowych kart ofert'
        ]
      },
      {
        eyebrow: 'REFLEKSJA',
        title: 'Kontekst może stać się interfejsem',
        body: [
          'Projekt pokazuje, jak znajome zadanie z obszaru nieruchomości można przeprojektować wokół kontekstu. Skoro wszystkie mieszkania należą do jednego budynku, fasada jest bardziej użyteczna niż generyczna siatka kart.',
          'Najmocniejszy element konceptu to połączenie formy i funkcji: okna nie są dekoracją, lecz interfejsem. Światło buduje atmosferę i jednocześnie rozwiązuje problem użyteczności.',
          'W dalszym rozwoju projekt mógłby zawierać porównywanie mieszkań, zapisane lokale, mobilną nawigację, realne rzuty mieszkań i testy dostępności.'
        ]
      }
    ],
    footer: {
      title: 'LVL HOME',
      subtitle: 'Interactive Apartment Finder',
      credit: 'Koncepcja portfolio UX/UI by Yana Ellis.',
      buttons: [
        ['Zobacz projekt', 'index.html'],
      ]
    }
  },
  uk: {
    htmlLang: 'uk',
    pageTitle: 'UX-кейс — LVL HOME',
    metaDescription: 'UX-кейс LVL HOME — інтерактивний пошук квартир через нічний фасад житлового будинку.',
    nav: { about: 'Про нас', floors: 'Поверхи', ux: 'UX-кейс', contact: 'Контакти' },
    hero: {
      label: 'UX-КЕЙС',
      title: ['LVL HOME', 'Interactive Apartment Finder'],
      subtitle: 'Концепт-сайт для перегляду доступних квартир в одному конкретному житловому будинку через інтерактивний нічний фасад.',
      description: 'LVL HOME — портфоліо-концепт, який переосмислює пошук квартири в межах одного будинку. Замість стандартного списку карток інтерфейс перетворює фасад на головну систему навігації. Кожне вікно представляє потенційну квартиру, а доступні варіанти реагують теплим світлом, делікатними мітками, фільтрами та детальною боковою панеллю.',
      visualTag: 'Фасад як інтерфейс',
      meta: [
        ['Роль', 'UX/UI Designer'],
        ['Тип проєкту', 'Концепт real estate'],
        ['Головна ідея', 'Фасад будинку як навігація по квартирах'],
        ['Фокус', 'Просторовий перегляд, hover-feedback, ієрархія інформації, premium UI'],
        ['Формат', 'Інтерактивний one-page сайт з додатковими сторінками'],
        ['Поточні дані', '7 доступних резиденцій']
      ]
    },
    sections: [
      {
        eyebrow: 'КОНЦЕПТ',
        title: 'Будинок стає інтерфейсом',
        body: [
          'Головна ідея LVL HOME проста: сам будинок стає системою навігації. Оскільки проєкт присвячений квартирам в одному житловому будинку, класичний пошук по місту був би зайвим і надто загальним.',
          'Вікна працюють як точки входу в квартири. Доступні квартири позначені м’яко й загоряються при наведенні, а недоступні залишаються темними та неактивними.'
        ],
        statement: 'Замість пошуку по картках користувач досліджує будинок.'
      },
      {
        eyebrow: 'UX-ПРОБЛЕМА',
        title: 'Одному будинку не потрібен важкий marketplace-інтерфейс',
        body: [
          'Більшість сайтів нерухомості створені для великих баз: пошуку, карт, сіток, фільтрів і повторюваних карток. Для одного преміального будинку така структура відчувається перевантаженою.',
          'UX-завдання полягало в тому, щоб створити досвід, специфічний для одного будинку, але з практичною інформацією: поверх, кімнати, площа, ціна, статус і можливість записатися на перегляд.'
        ],
        statement: 'Як показати доступність квартир просторово, інтуїтивно й преміально без стандартної сітки карток?'
      },
      {
        eyebrow: 'UX-ЦІЛІ',
        title: 'Що має вирішувати цей досвід',
        cards: [
          ['Ціль 01', 'Зробити будинок головною навігацією', 'Фасад замінює традиційну сітку оголошень і дає користувачу візуальну структуру перегляду поверхів.'],
          ['Ціль 02', 'Використати світло як feedback', 'Тепле світло у вікні підтверджує, що квартира доступна й інтерактивна.'],
          ['Ціль 03', 'Залишити недоступні квартири тихими', 'Недоступні вікна залишаються темними і неактивними, зменшуючи візуальний шум.'],
          ['Ціль 04', 'Підтримати швидке рішення', 'Панель квартири показує ключове: назву, поверх, кімнати, площу, ціну, статус і фото інтер’єру.'],
          ['Ціль 05', 'Зберегти преміальний настрій', 'Інтерфейс уникає гучних кольорів, великих кнопок і масових патернів сайтів нерухомості.']
        ]
      },
      {
        eyebrow: 'ЦІЛЬОВИЙ КОРИСТУВАЧ',
        title: 'Для сфокусованого пошуку квартири',
        body: [
          'Концепт створений для користувачів, які хочуть орендувати або переглянути квартиру саме в цьому преміальному будинку. Вони не переглядають сотні об’єктів, а оцінюють доступність в одному адресі.'
        ],
        list: [
          'Шукає квартиру в конкретному будинку',
          'Цінує локацію, атмосферу й ідентичність будинку',
          'Хоче швидко бачити ціну, площу, поверх і кількість кімнат',
          'Очікує преміальну й надійну презентацію',
          'Не хоче гортати типові картки нерухомості'
        ]
      },
      {
        eyebrow: 'USER JOURNEY',
        title: 'Поступове відкриття замість перевантаження',
        body: [
          'Шлях користувача побудований навколо поступового дослідження. Спочатку він бачить будинок цілком, потім помічає доступні квартири й відкриває деталі лише тоді, коли конкретний варіант стає цікавим.'
        ],
        steps: [
          'Потрапляє на сайт',
          'Розуміє, що фасад інтерактивний',
          'Скролить будинок',
          'Помічає доступні вікна',
          'Наводить курсор',
          'Бачить тепле світло',
          'Клікає квартиру',
          'Переглядає панель',
          'Бронює перегляд'
        ]
      },
      {
        eyebrow: 'ЛОГІКА ВЗАЄМОДІЇ',
        title: 'Кожна взаємодія підтримує метафору',
        cards: [
          ['Доступні вікна', 'Тільки доступні квартири є інтерактивними. Це тримає фокус і не витрачає увагу на недоступні варіанти.'],
          ['Світло при hover', 'Світло працює як емоційний і функціональний feedback: створює атмосферу й підтверджує активність об’єкта.'],
          ['Без popup при hover', 'В актуальній версії hover чистий: вікно лише загоряється. Деталі з’являються після кліку в боковій панелі.'],
          ['Панель квартири', 'Бокова панель показує деталі, не відводячи користувача від будинку. Просторовий контекст зберігається.'],
          ['Фільтри', 'Фільтри другорядні. Вони уточнюють доступні вікна, але не стають головним інтерфейсом.']
        ]
      },
      {
        eyebrow: 'ІЄРАРХІЯ ІНФОРМАЦІЇ',
        title: 'Інформація з’являється лише за наміру користувача',
        body: [
          'Інтерфейс навмисно побудований шарами. Він не показує всі деталі квартир одразу. Кожен шар з’являється тоді, коли стає корисним.'
        ],
        hierarchy: [
          'Фасад будинку',
          'Доступні вікна',
          'Світло hover і статусна мітка',
          'Бокова панель квартири',
          'Фото інтер’єру й дані квартири',
          'Дія бронювання'
        ],
        statement: 'Така ієрархія зберігає атмосферу без втрати ясності.'
      },
      {
        eyebrow: 'ЧОМУ ВІКНА ЗАМІНЮЮТЬ КАРТКИ',
        title: 'Більш осмислений елемент інтерфейсу',
        body: [
          'Карткова сітка була б ефективною, але передбачуваною. Оскільки проєкт представляє квартири в одному будинку, вікна стають змістовнішими: вони показують локацію, поверх і доступність одночасно.',
          'Це рішення перетворює перегляд на просторове дослідження. Користувач бачить, де квартира розташована в будинку.'
        ],
        list: [
          'Краще просторове розуміння',
          'Сильніший зв’язок з будинком',
          'Більш запам’ятовувана взаємодія',
          'Менша залежність від типових listing-патернів',
          'Зрозуміла візуальна метафора'
        ]
      },
      {
        eyebrow: 'ВІЗУАЛЬНА UX-ЛОГІКА',
        title: 'Темрява створює фокус, тепле світло — сенс',
        body: [
          'Темний нічний фасад створює контраст і фокус. Недоступні квартири відходять у фон, а доступні активуються теплим світлом.',
          'Золоте світіння не лише декоративне. Воно сигналізує про доступність та інтерактивність, а палітра navy, graphite і gold підтримує преміальне позиціонування.'
        ],
        list: [
          'Темний фасад тримає увагу на активних вікнах',
          'Тепле світло повідомляє про доступність',
          'Золоті акценти створюють premium real estate відчуття',
          'Мінімальна навігація не відволікає',
          'Стримані фільтри залишають будинок головним',
          'М’які анімації роблять інтерфейс вишуканим'
        ]
      },
      {
        eyebrow: 'СТРАТЕГІЯ ДАНИХ КВАРТИР',
        title: 'Невеликий dataset, зрозумілі рішення',
        body: [
          'Проєкт використовує компактний набір квартир, щоб показати масштабованість концепту. Кожне доступне вікно пов’язане з назвою, поверхом, кімнатами, площею, ціною, статусом і окремим фото інтер’єру.',
          'Дані навмисно прості. Концепт фокусується на відкритті та ясності, а не на перевантаженні користувача параметрами.'
        ],
        factLabels: { apartment: 'Квартира', floor: 'Поверх', rooms: 'Кімнати', area: 'Площа', price: 'Ціна', status: 'Статус', ready: 'Ready to rent' },
        apartments
      },
      {
        eyebrow: 'UX ФІЛЬТРІВ',
        title: 'Фільтри уточнюють фасад, а не замінюють його',
        body: [
          'Фільтри є, але вони навмисно стримані. У багатьох real estate інтерфейсах фільтри стають головним досвідом. У LVL HOME вони підтримують фасад.',
          'Коли фільтр обрано, відповідні доступні вікна залишаються активними, а невідповідні приглушуються. Недоступні вікна залишаються темними.'
        ],
        list: [
          'Фільтри мають уточнювати, а не домінувати',
          'Фасад повинен залишатися видимим',
          'Стани фільтрації мають легко читатися',
          'Недоступні квартири не повинні конкурувати візуально',
          'Відповідні квартири мають швидко знаходитися'
        ]
      },
      {
        eyebrow: 'МІКРОВЗАЄМОДІЇ',
        title: 'Motion має відчуватися дорогим, а не шумним',
        body: [
          'Мікровзаємодії роблять інтерфейс чуйним і живим, але не перевантажують його. Анімації повільні, м’які й кінематографічні.'
        ],
        list: [
          'Плавна поява сторінки',
          'Будинок трохи підіймається при завантаженні',
          'Світіння доступного вікна при hover',
          'Обране вікно залишається підсвіченим',
          'Панель квартири виїжджає справа',
          'Фон трохи затемнюється при відкритті панелі',
          'Відфільтровані вікна приглушуються',
          'Рідкі атмосферні анімації фасаду й вулиці'
        ],
        statement: 'Кожна анімація дає feedback, підтримує орієнтацію або підсилює метафору світла в будинку.'
      },
      {
        eyebrow: 'ACCESSIBILITY',
        title: 'Візуальна метафора все одно має бути зручною',
        body: [
          'Оскільки інтерфейс використовує вікна й світло як центральні елементи, accessibility потрібно враховувати уважно. Доступність не має залежати лише від кольору чи світіння.'
        ],
        list: [
          'Клавіатурна навігація по доступних вікнах',
          'Видимий focus outline',
          'Accessible names для доступних квартир',
          'Контрастна бокова панель',
          'Опція reduced motion',
          'Не покладатися лише на колір',
          'Зрозуміла кнопка закриття панелі'
        ],
        statement: 'Атмосфера має підтримувати ясність, а не замінювати її.'
      },
      {
        eyebrow: 'КЛЮЧОВІ ДИЗАЙН-РІШЕННЯ',
        title: 'Рішення, які формують концепт',
        cards: [
          ['Рішення 01', 'Фасад як інтерфейс', 'Фасад стає головною навігаційною системою, бо проєкт сфокусований на одній конкретній житловій вежі.'],
          ['Рішення 02', 'Вікна як картки квартир', 'Вікна замінюють стандартні картки й дають змогу візуально зрозуміти розташування та доступність.'],
          ['Рішення 03', 'Світло як feedback', 'Тепле світло використовується як природний hover-стан: атмосферний і функціональний.'],
          ['Рішення 04', 'Неактивні вікна залишаються темними', 'Недоступні квартири не відволікають, тому система залишається спокійною.'],
          ['Рішення 05', 'Бокова панель замість нової сторінки', 'Панель зберігає зв’язок з будинком і показує практичні дані разом із фото інтер’єру.'],
          ['Рішення 06', 'Фільтри залишаються другорядними', 'Фільтри допомагають уточнити досвід, але не стають центром інтерфейсу.']
        ]
      },
      {
        eyebrow: 'МАКЕТИ ІНТЕРФЕЙСУ',
        title: 'Малі артефакти, що пояснюють систему',
        body: [
          'UX-сторінка використовує мінімальні placeholder-макети, щоб пояснити логіку інтерфейсу без редизайну apartment finder.'
        ],
        mockups: [
          ['facade', 'Фасад', 'Сітка будинку як навігація'],
          ['windows', 'Стани вікон', 'Недоступне, доступне і hover-світло'],
          ['panel', 'Панель квартири', 'Деталі залишаються поруч із фасадом'],
          ['filter', 'Стан фільтра', 'Другорядні controls уточнюють активні вікна']
        ]
      },
      {
        eyebrow: 'РЕЗУЛЬТАТ',
        title: 'Запам’ятовувана альтернатива стандартним listing-сайтам',
        body: [
          'Фінальний концепт перетворює перегляд квартир на просторову й емоційну взаємодію. Замість типового списку користувач досліджує будинок, знаходить доступні квартири через світло й відкриває деталі лише за потреби.'
        ],
        list: [
          'Пошук квартир в одному будинку',
          'Навігація через фасад',
          'Світло як сигнал доступності',
          'Мінімалістичний premium-інтерфейс',
          'Запам’ятовувана альтернатива стандартним карткам'
        ]
      },
      {
        eyebrow: 'РЕФЛЕКСІЯ',
        title: 'Контекст може стати інтерфейсом',
        body: [
          'Цей проєкт показує, як знайоме завдання в нерухомості можна переосмислити через контекст. Якщо всі квартири належать одному будинку, фасад стає кориснішим за типову сітку карток.',
          'Найсильніша частина концепту — зв’язок форми й функції: вікна тут не декор, а інтерфейс. Світло створює емоційну атмосферу й одночасно вирішує UX-завдання.',
          'Якщо розвивати проєкт далі, можна додати порівняння квартир, збережені варіанти, мобільну навігацію, реальні планування та accessibility-тестування.'
        ]
      }
    ],
    footer: {
      title: 'LVL HOME',
      subtitle: 'Interactive Apartment Finder',
      credit: 'UX/UI portfolio concept by Yana Ellis.',
      buttons: [
        ['Відкрити проєкт', 'index.html'],
      ]
    }
  }
};

const root = document.querySelector('#case-root');
const footer = document.querySelector('#case-footer');
const languageButtons = [...document.querySelectorAll('[data-lang]')];
const navLinks = [...document.querySelectorAll('[data-nav]')];
const storageKey = 'lvl-home-case-language';

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
};

const appendParagraphs = (container, paragraphs = []) => {
  paragraphs.forEach((text) => container.append(createElement('p', '', text)));
};

const renderHero = (content) => {
  const section = createElement('section', 'case-hero');
  const copyBlock = createElement('div', 'case-hero__copy');
  copyBlock.append(createElement('p', 'case-eyebrow', content.hero.label));

  const title = createElement('h1');
  content.hero.title.forEach((line, index) => {
    if (index) title.append(document.createElement('br'));
    title.append(document.createTextNode(line));
  });
  copyBlock.append(title);
  copyBlock.append(createElement('p', 'case-hero__subtitle', content.hero.subtitle));
  copyBlock.append(createElement('p', 'case-hero__description', content.hero.description));

  const meta = createElement('dl', 'case-meta');
  content.hero.meta.forEach(([label, value]) => {
    const item = createElement('div');
    item.append(createElement('dt', '', label));
    item.append(createElement('dd', '', value));
    meta.append(item);
  });
  copyBlock.append(meta);

  const visual = createElement('aside', 'case-hero__visual');
  visual.setAttribute('aria-hidden', 'true');
  const facade = createElement('div', 'facade-preview');
  const grid = createElement('div', 'facade-preview__grid');
  for (let i = 0; i < 50; i += 1) grid.append(document.createElement('i'));
  facade.append(grid);
  facade.append(createElement('span', 'facade-preview__tag', content.hero.visualTag));
  visual.append(facade);

  section.append(copyBlock, visual);
  return section;
};

const renderCards = (cards = []) => {
  const grid = createElement('div', 'case-card-grid');
  cards.forEach(([index, title, text]) => {
    const card = createElement('article', 'case-card');
    card.append(createElement('span', 'case-card__index', index));
    card.append(createElement('h3', '', title));
    card.append(createElement('p', '', text));
    grid.append(card);
  });
  return grid;
};

const renderList = (items = []) => {
  const list = createElement('ul', 'case-list');
  items.forEach((item) => list.append(createElement('li', '', item)));
  return list;
};

const renderJourney = (steps = []) => {
  const list = createElement('ol', 'journey');
  steps.forEach((step, index) => {
    const item = createElement('li');
    item.append(createElement('span', '', String(index + 1).padStart(2, '0')));
    item.append(document.createTextNode(step));
    list.append(item);
  });
  return list;
};

const renderHierarchy = (items = []) => {
  const list = createElement('ol', 'hierarchy');
  items.forEach((item) => list.append(createElement('li', '', item)));
  return list;
};

const renderApartments = (items = [], labels) => {
  const grid = createElement('div', 'apartment-data');
  items.forEach((apartment) => {
    const card = createElement('article', 'apartment-card');
    card.append(createElement('span', 'apartment-card__label', `${labels.apartment} ${apartment.id}`));

    const facts = createElement('dl');
    [
      [labels.floor, apartment.floor],
      [labels.rooms, apartment.rooms],
      [labels.area, apartment.area],
      [labels.price, apartment.price],
      [labels.status, labels.ready]
    ].forEach(([label, value]) => {
      const row = createElement('div');
      row.append(createElement('dt', '', label));
      row.append(createElement('dd', '', value));
      facts.append(row);
    });

    card.append(facts);
    grid.append(card);
  });
  return grid;
};

const buildMockStage = (type) => {
  const stage = createElement('div', 'mockup-stage');

  if (type === 'facade') {
    const building = createElement('div', 'mock-building');
    for (let i = 0; i < 20; i += 1) building.append(document.createElement('i'));
    stage.append(building);
  }

  if (type === 'windows') {
    const windows = createElement('div', 'mock-windows');
    windows.append(createElement('i', 'mock-window'));
    windows.append(createElement('i', 'mock-window mock-window--available'));
    windows.append(createElement('i', 'mock-window mock-window--hover'));
    stage.append(windows);
  }

  if (type === 'panel') {
    const panel = createElement('div', 'mock-panel');
    panel.append(createElement('span'));
    panel.append(createElement('i'));
    panel.append(createElement('b'));
    panel.append(createElement('b'));
    panel.append(createElement('b'));
    stage.append(panel);
  }

  if (type === 'filter') {
    const filter = createElement('div', 'mock-filter');
    filter.append(createElement('span'));
    filter.append(createElement('i'));
    filter.append(createElement('i'));
    filter.append(createElement('i'));
    stage.append(filter);
  }

  return stage;
};

const renderMockups = (mockups = []) => {
  const grid = createElement('div', 'mockup-grid');
  mockups.forEach(([type, title, text]) => {
    const card = createElement('article', 'mockup-card');
    card.append(buildMockStage(type));
    card.append(createElement('span', 'mockup-card__label', title));
    card.append(createElement('p', '', text));
    grid.append(card);
  });
  return grid;
};

const renderSection = (sectionData, index) => {
  const section = createElement('section', 'case-section');
  section.dataset.index = String(index + 1).padStart(2, '0');

  const aside = createElement('aside', 'case-section__aside');
  aside.append(createElement('p', '', sectionData.eyebrow));

  const content = createElement('div', 'case-section__content');
  content.append(createElement('h2', '', sectionData.title));
  appendParagraphs(content, sectionData.body);

  if (sectionData.cards) content.append(renderCards(sectionData.cards));
  if (sectionData.list) content.append(renderList(sectionData.list));
  if (sectionData.steps) content.append(renderJourney(sectionData.steps));
  if (sectionData.hierarchy) content.append(renderHierarchy(sectionData.hierarchy));
  if (sectionData.apartments) content.append(renderApartments(sectionData.apartments, sectionData.factLabels));
  if (sectionData.mockups) content.append(renderMockups(sectionData.mockups));
  if (sectionData.statement) content.append(createElement('div', 'case-statement', sectionData.statement));

  section.append(aside, content);
  return section;
};

const renderFooter = (content) => {
  footer.replaceChildren();

  const inner = createElement('div', 'case-footer__inner');
  const text = createElement('div');
  text.append(createElement('h2', '', content.footer.title));
  text.append(createElement('p', '', `${content.footer.subtitle}. ${content.footer.credit}`));

  const links = createElement('div', 'case-footer__links');
  content.footer.buttons.forEach(([label, href]) => {
    const link = createElement('a', 'case-button', label);
    link.href = href;
    if (href.startsWith('http')) {
      link.target = '_blank';
      link.rel = 'noreferrer';
    }
    links.append(link);
  });

  inner.append(text, links);
  footer.append(inner);
};

const render = (language) => {
  const content = copy[language] || copy.en;

  document.documentElement.lang = content.htmlLang;
  document.title = content.pageTitle;
  document.querySelector('meta[name="description"]').setAttribute('content', content.metaDescription);

  navLinks.forEach((link) => {
    link.textContent = content.nav[link.dataset.nav];
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.setAttribute('aria-pressed', String(isActive));
  });

  root.replaceChildren(renderHero(content), ...content.sections.map(renderSection));
  renderFooter(content);
  localStorage.setItem(storageKey, language);
};

languageButtons.forEach((button) => {
  button.addEventListener('click', () => render(button.dataset.lang));
});

const browserLanguage = (navigator.language || 'en').slice(0, 2);
const savedLanguage = localStorage.getItem(storageKey);
const initialLanguage = savedLanguage && savedLanguage !== 'ru'
  ? savedLanguage
  : (browserLanguage !== 'ru' && copy[browserLanguage] ? browserLanguage : 'en');

render(initialLanguage);
