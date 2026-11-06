const caseUi = {
  en: { back: "Back to portfolio", overview: "Project overview", industry: "Industry", platform: "Platform", location: "Location", role: "My role", scope: "Scope", languageNote: "This case study is presented in English.", anonymizationNote: "Selected project names and locations have been anonymized for portfolio presentation." },
  uk: { back: "Назад до портфоліо", overview: "Огляд проєкту", industry: "Сфера", platform: "Платформа", location: "Локація", role: "Моя роль", scope: "Обсяг роботи", languageNote: "", anonymizationNote: "Назви вибраних проєктів і локації анонімізовано для презентації в портфоліо." },
  pl: { back: "Wróć do portfolio", overview: "Opis projektu", industry: "Branża", platform: "Platforma", location: "Lokalizacja", role: "Moja rola", scope: "Zakres", languageNote: "", anonymizationNote: "Nazwy wybranych projektów i lokalizacje zostały zanonimizowane na potrzeby prezentacji w portfolio." },
  ru: { back: "Назад в портфолио", overview: "Обзор проекта", industry: "Отрасль", platform: "Платформа", location: "Локация", role: "Моя роль", scope: "Объём работы", languageNote: "", anonymizationNote: "Названия выбранных проектов и локации обезличены для презентации в портфолио." },
  de: { back: "Zurück zum Portfolio", overview: "Projektüberblick", industry: "Branche", platform: "Plattform", location: "Ort", role: "Meine Rolle", scope: "Umfang", languageNote: "", anonymizationNote: "Ausgewählte Projektnamen und Standorte wurden für die Portfolio-Präsentation anonymisiert." }
};

const notFoundUi = {
  en: { kicker: "PROJECT NOT FOUND", title: "Project not found", body: "The requested case study does not exist." },
  uk: { kicker: "ПРОЄКТ НЕ ЗНАЙДЕНО", title: "Проєкт не знайдено", body: "Запитаний кейс не існує." },
  pl: { kicker: "NIE ZNALEZIONO PROJEKTU", title: "Nie znaleziono projektu", body: "Żądany case study nie istnieje." },
  ru: { kicker: "ПРОЕКТ НЕ НАЙДЕН", title: "Проект не найден", body: "Запрошенный кейс не существует." },
  de: { kicker: "PROJEKT NICHT GEFUNDEN", title: "Projekt nicht gefunden", body: "Der angeforderte Case existiert nicht." }
};

function renderSectionBody(section) {
  const body = section.slice(1);
  return body.length === 1 && typeof body[0] === "string" && body[0].trim().startsWith("<")
    ? body[0]
    : body.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

function renderCaseImages(images, project, lang) {
  if (!images?.length) return "";
  const label = lang === "uk" ? "скриншот сайту" : lang === "pl" ? "zrzut strony" : lang === "ru" ? "скриншот сайта" : lang === "de" ? "Website-Screenshot" : "website screenshot";
  return `<div class="case-images">${images.map((src, index) => `<figure><img src="${src}" alt="${project.name} ${label} ${index + 1}" loading="lazy"><figcaption>${project.name} · ${label} ${index + 1}</figcaption></figure>`).join("")}</div>`;
}

function renderSectionMedia(id, index, lang, project) {
  const media = caseMedia?.[id];
  if (!media?.length) return "";
  const item = media[index % media.length];
  const label = item.label?.[lang] || item.label?.en || "Website view";
  const ui = caseMediaUi[lang] || caseMediaUi.en;
  return `<figure class="case-section-media"><img src="${item.src}" alt="${project.name} — ${label}" loading="lazy" decoding="async"><figcaption>${ui.liveView} · ${label}</figcaption></figure>`;
}

function renderCase() {
  const id = new URLSearchParams(location.search).get("id");
  const base = productCases[id];
  const lang = localStorage.getItem("yana-ellis-language") || "en";
  const ui = caseUi[lang] || caseUi.en;
  if (!base) {
    const missing = notFoundUi[lang] || notFoundUi.en;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-case-ui]").forEach((node) => { node.textContent = ui[node.dataset.caseUi] || caseUi.en[node.dataset.caseUi]; });
    document.querySelectorAll("[data-case-lang]").forEach((node) => node.classList.toggle("is-active", node.dataset.caseLang === lang));
    document.title = `${missing.title} | UX Case Study`;
    document.getElementById("caseRoot").innerHTML = `<section class="case-not-found"><p class="section-kicker">${missing.kicker}</p><h1>${missing.title}</h1><p>${missing.body}</p><a class="case-back case-not-found-link" href="index.html#commercial-work">← ${ui.back}</a></section>`;
    return;
  }

  const fallbackTranslation = lang !== "en" && !productCaseLocales?.[id]?.[lang];
  const project = lang === "en" ? base : (productCaseLocales?.[id]?.[lang] || base);
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-case-ui]").forEach((node) => { node.textContent = ui[node.dataset.caseUi] || caseUi.en[node.dataset.caseUi]; });
  document.querySelectorAll("[data-case-lang]").forEach((node) => node.classList.toggle("is-active", node.dataset.caseLang === lang));
  document.title = `${project.name} | UX Case Study`;

  const externalLabel = lang === "uk" ? "Сайти проєкту" : lang === "pl" ? "Strony projektu" : lang === "ru" ? "Сайты проекта" : lang === "de" ? "Projekt-Websites" : "Project websites";
  document.getElementById("caseRoot").innerHTML = `<header class="case-hero"><p class="section-kicker">${project.industry} · ${project.location}</p><h1>${project.name}</h1><p class="case-strapline">${project.strapline}</p><div class="case-meta"><span><b>${ui.industry}</b>${project.industry}</span><span><b>${ui.platform}</b>${project.platform}</span><span><b>${ui.location}</b>${project.location}</span><span><b>${ui.role}</b>${project.role}</span><span><b>${ui.scope}</b>${project.scope}</span></div>${project.links ? `<nav class="case-external-links" aria-label="${externalLabel}">${project.links.map((link) => `<a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label} ↗</a>`).join("")}</nav>` : ""}${renderCaseImages(base.images || project.images, project, lang)}</header><div class="case-layout"><aside class="case-index"><p class="section-kicker">${ui.overview}</p>${project.sections.map((section, index) => `<a href="#section-${index + 1}">${String(index + 1).padStart(2, "0")} ${section[0]}</a>`).join("")}</aside><article class="case-content">${project.sections.map((section, index) => `<section id="section-${index + 1}"><p class="case-section-number">${String(index + 1).padStart(2, "0")}</p><h2>${section[0]}</h2>${renderSectionBody(section)}${renderSectionMedia(id, index, lang, project)}</section>`).join("")}${["vanta", "vetra"].includes(id) ? `<p class="case-language-note">${ui.anonymizationNote}</p>` : ""}${fallbackTranslation ? `<p class="case-language-note">${caseUi.en.languageNote}</p>` : ""}</article></div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderCase();
  document.querySelectorAll("[data-case-lang]").forEach((button) => button.addEventListener("click", () => {
    localStorage.setItem("yana-ellis-language", button.dataset.caseLang);
    renderCase();
  }));
});
