const caseMediaUi = {
  en: { liveView: "Live website view", moodboard: "Project moodboard", productScreen: "Product interface screen", gallery: "Venue gallery photograph" },
  uk: { liveView: "Перегляд опублікованого сайту", moodboard: "Мудборд проєкту", productScreen: "Екран цифрового продукту", gallery: "Фотографія галереї закладу" },
  pl: { liveView: "Widok opublikowanej strony", moodboard: "Moodboard projektu", productScreen: "Ekran produktu cyfrowego", gallery: "Fotografia galerii lokalu" },
  ru: { liveView: "Вид опубликованного сайта", moodboard: "Мудборд проекта", productScreen: "Экран цифрового продукта", gallery: "Фотография галереи заведения" },
  de: { liveView: "Ansicht der veröffentlichten Website", moodboard: "Projekt-Moodboard", productScreen: "Bildschirm des digitalen Produkts", gallery: "Fotografie aus der Galerie des Ortes" }
};

const caseHeroImages = {
  vanta: ["assets/commercial-cases/vanta/monday-cover.png"],
  vetra: ["assets/commercial-cases/vetra/willow-cover.png"]
};

const caseMedia = {
  maria: [
    { section: 1, kind: "live", src: "assets/commercial-cases/maria/maria-home.png", label: { en: "Accommodation landing page", uk: "Головна сторінка проживання", pl: "Strona główna zakwaterowania", ru: "Главная страница размещения", de: "Startseite der Unterkunft" } },
    { section: 2, kind: "moodboard", src: "assets/commercial-cases/maria/maria-operations-moodboard.png", label: { en: "Operations and guest handover", uk: "Операційні процеси та заселення гостей", pl: "Operacje i przekazanie pobytu gościom", ru: "Операционные процессы и заселение гостей", de: "Abläufe und Gästeübergabe" } },
    { section: 4, kind: "moodboard", src: "assets/commercial-cases/maria/maria-brand-moodboard.png", label: { en: "Hospitality brand direction", uk: "Напрям бренду гостинності", pl: "Kierunek marki hotelarskiej", ru: "Визуальное направление бренда гостеприимства", de: "Markenrichtung für Gastlichkeit" } },
    { section: 7, kind: "live", src: "assets/commercial-cases/maria/maria-apartments.png", label: { en: "Apartment catalogue", uk: "Каталог апартаментів", pl: "Katalog apartamentów", ru: "Каталог апартаментов", de: "Apartmentkatalog" } },
    { section: 8, kind: "live", src: "assets/commercial-cases/maria/maria-contact.png", label: { en: "Contact and enquiry flow", uk: "Контакти та шлях запиту", pl: "Kontakt i ścieżka zapytania", ru: "Контакты и путь заявки", de: "Kontakt- und Anfrageweg" } }
  ],
  arced: [
    { section: 1, kind: "live", src: "assets/commercial-cases/arced/arced-construction-home.png", label: { en: "ARCED Construction website", uk: "Сайт ARCED Construction", pl: "Strona ARCED Construction", ru: "Сайт ARCED Construction", de: "ARCED-Construction-Website" } },
    { section: 2, kind: "moodboard", src: "assets/commercial-cases/arced/arced-concrete-moodboard.png", label: { en: "Concrete materials and service context", uk: "Бетонні матеріали та контекст послуг", pl: "Materiały betonowe i kontekst usług", ru: "Бетонные материалы и контекст услуг", de: "Betonmaterialien und Servicekontext" } },
    { section: 5, kind: "moodboard", src: "assets/commercial-cases/arced/arced-finishes-moodboard.png", label: { en: "Tile finishes and interior materials", uk: "Плитка та матеріали для інтер’єру", pl: "Wykończenia z płytek i materiały wnętrzarskie", ru: "Плитка и материалы для интерьера", de: "Fliesenoberflächen und Innenraummaterialien" } },
    { section: 7, kind: "live", src: "assets/commercial-cases/arced/arced-tile-home.png", label: { en: "ARCED Tile website", uk: "Сайт ARCED Tile", pl: "Strona ARCED Tile", ru: "Сайт ARCED Tile", de: "ARCED-Tile-Website" } }
  ],
  vrohy: [
    { section: 2, kind: "gallery", src: "assets/commercial-cases/vrohy/vrohy-gallery-bottle-wall.jpg", label: { en: "Numbered bottle collection at the venue", uk: "Колекція пронумерованих пляшок у закладі", pl: "Kolekcja ponumerowanych butelek w lokalu", ru: "Коллекция пронумерованных бутылок в заведении", de: "Nummerierte Flaschensammlung im Lokal" } },
    { section: 7, kind: "gallery", src: "assets/commercial-cases/vrohy/vrohy-gallery-bar-interior.jpg", label: { en: "Bar interior and atmosphere", uk: "Інтер’єр та атмосфера бару", pl: "Wnętrze i atmosfera baru", ru: "Интерьер и атмосфера бара", de: "Innenraum und Atmosphäre der Bar" } }
  ],
  vanta: [
    { section: 5, kind: "product", src: "assets/commercial-cases/vanta/monday-budget.png", label: { en: "Budget planning interface", uk: "Інтерфейс планування бюджету", pl: "Interfejs planowania budżetu", ru: "Интерфейс планирования бюджета", de: "Oberfläche für die Budgetplanung" } },
    { section: 7, kind: "product", src: "assets/commercial-cases/vanta/monday-insights.png", label: { en: "Financial insights interface", uk: "Інтерфейс фінансової аналітики", pl: "Interfejs analityki finansowej", ru: "Интерфейс финансовой аналитики", de: "Oberfläche für Finanzanalysen" } }
  ],
  vetra: [
    { section: 8, kind: "product", src: "assets/commercial-cases/vetra/willow-patient-record.png", label: { en: "Patient record interface", uk: "Інтерфейс картки пацієнта", pl: "Interfejs karty pacjenta", ru: "Интерфейс карты пациента", de: "Oberfläche der Patientenakte" } },
    { section: 9, kind: "product", src: "assets/commercial-cases/vetra/willow-workflow.png", label: { en: "Scheduling and consultation workflow", uk: "Сценарій запису та консультації", pl: "Proces planowania i konsultacji", ru: "Сценарий записи и консультации", de: "Termin- und Beratungsablauf" } }
  ]
};
