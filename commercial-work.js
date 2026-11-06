const commercialProjects = [
  { id: "maria", name: "MARIA APARTMENTS", industry: "Hospitality / Property Management", location: "Ternopil, Ukraine", type: "Website · Booking Platform · Business Automation", role: "UX/UI · Web Design · Brand Identity · Operations", link: "https://www.bymariaapartments.com", cover: "assets/commercial-covers/maria-apartments.png", tone: "warm", overview: "A complete digital transformation for a 19-apartment rental business, connecting brand identity, booking, online payments, guest communication and operational workflows.", details: ["Business context: a multi-property accommodation business needed one clear system for guests and day-to-day operations.", "My role: UX/UI, web design, brand identity, booking flows, automation planning, SMM and guest experience.", "Deliverables: website, booking experience, payment flow, administrative processes, Telegram communication and branded materials."] },
  { id: "arced", name: "ARCED", industry: "Construction / Home Improvement", location: "Winnipeg, Canada", type: "Two commercial websites · Digital presence", role: "UX/UI · Web Design · Development · Brand Identity", cover: "assets/commercial-covers/arced-construction.png", coverSecond: "assets/commercial-covers/arced-tile.png", links: [{ label: "ARCED Construction", href: "https://arcedconstruction.ca" }, { label: "ARCED Tile", href: "https://arcedtile.ca" }], tone: "stone", overview: "One commercial case covering two connected but independent websites for construction and specialist interior finishing services.", details: ["Challenge: two related businesses needed a coherent family resemblance without becoming duplicate websites.", "Approach: separate service architectures, clearer enquiry paths and a shared digital language adapted to each audience.", "Deliverables: information architecture, responsive UX/UI, visual direction, service presentation and implementation."] },
  { id: "vrohy", name: "V ROHY BAR", industry: "Hospitality / Bar & Beverage", location: "Ternopil, Ukraine", type: "Interactive bar website · Cocktail discovery · Booking", role: "UX/UI · Web Design · Development · Brand Identity", link: "https://vrohybar.vercel.app", cover: "assets/commercial-cases/vrohy/vrohy-hero.png", tone: "orange", overview: "An interactive bar concept that turns the cocktail menu, atmosphere and booking journey into one memorable digital experience.", details: ["Challenge: a bar needs to communicate its character quickly while helping guests choose a drink and understand how to visit.", "Approach: combine a tactile bottle shelf, a date-based cocktail finder, atmosphere-led photography and direct booking actions.", "Deliverables: responsive website, interactive cocktail menu, finder experience, gallery and contact-led reservation flow."] },
  { id: "vanta", name: "Monday Balance", industry: "FinTech", location: "New York, USA", type: "iOS / Android · Personal finance", role: "UX/UI Designer · Product Designer", tone: "violet", overview: "A mobile finance product for budgeting, expense tracking, saving goals and financial analytics.", details: ["Focus: mobile UX, information architecture and interaction design.", "Key solution: make complex financial data understandable through calm navigation and clear visual hierarchy.", "Deliverables: product flows, mobile interface system and data visualisation direction."] },
  { id: "vetra", name: "Willow Practice", industry: "Veterinary Healthcare / SaaS", location: "Utrecht, Netherlands", type: "Responsive web application · B2B SaaS", role: "UX/UI Designer · Product Designer", tone: "green", overview: "A clinic management system for appointments, animal records, treatment history, staff schedules and administration.", details: ["Focus: complex dashboards, role-based interfaces and healthcare UX.", "Key solution: organise high-density information around the real tasks of clinicians and administrators.", "Deliverables: responsive product flows, dashboard structure and interface patterns."] },
];

const commercialCopy = {
  en: { kicker: "SELECTED COMMERCIAL WORK", title: "Real projects, designed for real business contexts.", intro: "Commercial websites, digital products and operational systems created for hospitality, bars and beverage, construction, finance and healthcare.", open: "View case", close: "Close", role: "My role", links: "Visit websites", previous: "Previous commercial projects", next: "Next commercial projects" },
  uk: { kicker: "ОБРАНІ КОМЕРЦІЙНІ ПРОЄКТИ", title: "Реальні проєкти для реальних бізнес-контекстів.", intro: "Комерційні сайти, цифрові продукти й операційні системи для сфер гостинності, барів і напоїв, будівництва, фінансів та охорони здоров’я.", open: "Відкрити кейс", close: "Закрити", role: "Моя роль", links: "Відвідати сайти", previous: "Попередні комерційні проєкти", next: "Наступні комерційні проєкти" },
  pl: { kicker: "WYBRANE PROJEKTY KOMERCYJNE", title: "Realne projekty zaprojektowane dla realnego biznesu.", intro: "Komercyjne strony, produkty cyfrowe i systemy operacyjne dla hotelarstwa, barów i napojów, budownictwa, finansów oraz ochrony zdrowia.", open: "Zobacz case", close: "Zamknij", role: "Moja rola", links: "Odwiedź strony", previous: "Poprzednie projekty komercyjne", next: "Następne projekty komercyjne" },
  ru: { kicker: "ИЗБРАННЫЕ КОММЕРЧЕСКИЕ ПРОЕКТЫ", title: "Реальные проекты для реальных бизнес-задач.", intro: "Коммерческие сайты, цифровые продукты и операционные системы для сфер гостеприимства, баров и напитков, строительства, финансов и здравоохранения.", open: "Открыть кейс", close: "Закрыть", role: "Моя роль", links: "Открыть сайты", previous: "Предыдущие коммерческие проекты", next: "Следующие коммерческие проекты" },
  de: { kicker: "AUSGEWÄHLTE KOMMERZIELLE PROJEKTE", title: "Reale Projekte für reale geschäftliche Anforderungen.", intro: "Kommerzielle Websites, digitale Produkte und operative Systeme für Hotellerie, Bars und Getränke, Bauwesen, Finanzen und Gesundheitswesen.", open: "Case öffnen", close: "Schließen", role: "Meine Rolle", links: "Websites öffnen", previous: "Vorherige kommerzielle Projekte", next: "Nächste kommerzielle Projekte" }
};

function renderCommercialWork(language = document.documentElement.lang || "en") {
  const copy = commercialCopy[language] || commercialCopy.en;
  document.querySelectorAll("[data-commercial-i18n]").forEach((node) => { const key = node.dataset.commercialI18n; if (copy[key]) node.textContent = copy[key]; });
  document.querySelectorAll("[data-commercial-aria]").forEach((node) => { const key = node.dataset.commercialAria; if (copy[key]) node.setAttribute("aria-label", copy[key]); });
  const grid = document.getElementById("commercialGrid");
  if (!grid) return;
  grid.innerHTML = commercialProjects.map((project, index) => `<article class="commercial-card tone-${project.tone}">
    <a class="commercial-card-visual" href="commercial-case.html?id=${project.id}" aria-label="${copy.open}: ${project.name}">${project.cover ? `<img class="commercial-cover-image" src="${project.cover}" alt="${project.name} website preview" loading="lazy" decoding="async" onerror="this.hidden=true">${project.coverSecond ? `<img class="commercial-cover-image commercial-cover-secondary" src="${project.coverSecond}" alt="${project.name} second website preview" loading="lazy" decoding="async" onerror="this.hidden=true">` : ""}` : ""}<span class="commercial-number">0${index + 1}</span><span class="commercial-mark">${project.name}</span><span class="commercial-industry">${project.industry}</span></a>
    <div class="commercial-card-body"><p class="commercial-location">${project.location}</p><h3>${project.name}</h3><p class="commercial-type">${project.type}</p><p class="commercial-role"><span>${copy.role}</span>${project.role}</p><a class="commercial-open" href="commercial-case.html?id=${project.id}">${copy.open} <span aria-hidden="true">↗</span></a></div>
  </article>`).join("");
}
function setupCommercialCarousel() {
  const viewport = document.querySelector("#commercialViewport");
  const grid = document.querySelector("#commercialGrid");
  const previous = document.querySelector("#commercialPrevious");
  const next = document.querySelector("#commercialNext");
  if (!viewport || !grid || !previous || !next) return;
  const getStep = () => {
    const card = grid.querySelector(".commercial-card");
    if (!card) return 0;
    const gap = Number.parseFloat(getComputedStyle(grid).columnGap) || 0;
    return card.getBoundingClientRect().width + gap;
  };
  const update = () => {
    const maximum = viewport.scrollWidth - viewport.clientWidth;
    previous.disabled = viewport.scrollLeft <= 2;
    next.disabled = viewport.scrollLeft >= maximum - 2;
  };
  const move = (direction) => viewport.scrollBy({ left: getStep() * direction, behavior: "smooth" });
  previous.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));
  viewport.addEventListener("scroll", update, { passive: true });
  viewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      move(event.key === "ArrowLeft" ? -1 : 1);
    }
  });
  window.addEventListener("resize", update);
  update();
}

document.addEventListener("DOMContentLoaded", () => { renderCommercialWork(); setupCommercialCarousel(); document.querySelectorAll(".language-button").forEach((button) => button.addEventListener("click", () => setTimeout(() => renderCommercialWork(button.dataset.lang), 0))); });
