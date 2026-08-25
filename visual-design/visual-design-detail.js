const visualLabels = window.visualDesignLabels || {};
const visualProjects = window.visualDesignProjects || [];
const supportedLanguages = ["en", "uk", "pl"];

const root = document.querySelector("#visualDetailRoot");
const languageButtons = document.querySelectorAll(".language-button");
const textNodes = document.querySelectorAll("[data-visual-i18n]");
const altNodes = document.querySelectorAll("[data-visual-i18n-alt]");
const projectId = window.visualProjectId || document.body.dataset.projectId;
const project = visualProjects.find((item) => item.id === projectId);

let activeLanguage = getInitialLanguage();

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem("yana-ellis-language");
  return supportedLanguages.includes(savedLanguage) ? savedLanguage : "en";
}

function currentLabels() {
  return visualLabels[activeLanguage] || visualLabels.en || {};
}

function localize(value) {
  if (Array.isArray(value)) {
    return value;
  }

  if (value && typeof value === "object") {
    return value[activeLanguage] || value.en || "";
  }

  return value || "";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function listMarkup(items) {
  return (items || []).map((item) => `<li>${escapeHtml(localize(item))}</li>`).join("");
}

function imageClass(image, index) {
  if (index === 0 || index % 7 === 0) {
    return "is-full";
  }

  if (image.orientation === "portrait") {
    return "is-portrait";
  }

  if (image.orientation === "square") {
    return "is-square";
  }

  return index % 3 === 0 ? "is-wide" : "is-landscape";
}

function applyLanguage(language) {
  activeLanguage = supportedLanguages.includes(language) ? language : "en";
  const labels = currentLabels();

  document.documentElement.lang = activeLanguage;
  document.title = project
    ? `${project.title} - ${labels.documentTitle || "Visual Design - Yana Ellis"}`
    : labels.documentTitle || "Visual Design - Yana Ellis";
  localStorage.setItem("yana-ellis-language", activeLanguage);

  textNodes.forEach((node) => {
    const key = node.dataset.visualI18n;
    if (labels[key]) {
      node.textContent = labels[key];
    }
  });

  altNodes.forEach((node) => {
    const key = node.dataset.visualI18nAlt;
    if (labels[key]) {
      node.setAttribute("alt", labels[key]);
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === activeLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderProject();
}

function renderProject() {
  if (!root) {
    return;
  }

  const labels = currentLabels();

  if (!project) {
    root.innerHTML = `<section class="visual-project-missing">
      <p class="section-kicker">${escapeHtml(labels.conceptProject || "Concept project")}</p>
      <h1>Project not found</h1>
      <a class="hero-button secondary" href="../index.html">${escapeHtml(labels.backToArchive || "Back to Visual Design")}</a>
    </section>`;
    return;
  }

  const projectIndex = visualProjects.findIndex((item) => item.id === project.id);
  const previous = visualProjects[(projectIndex - 1 + visualProjects.length) % visualProjects.length];
  const next = visualProjects[(projectIndex + 1) % visualProjects.length];
  const coverAlt = localize(project.cover.alt);

  root.innerHTML = `<article class="visual-project">
    <section class="visual-project-hero" aria-labelledby="visual-project-title">
      <a class="visual-back-link" href="../index.html">${escapeHtml(labels.backToArchive || "Back to Visual Design")}</a>
      <div class="visual-project-hero-grid">
        <div class="visual-project-heading">
          <p class="section-kicker">${escapeHtml(localize(project.category))} / ${escapeHtml(project.year)}</p>
          <h1 id="visual-project-title">${escapeHtml(project.title)}</h1>
          <p>${escapeHtml(localize(project.description))}</p>
        </div>
        <figure class="visual-project-cover">
          <img src="${escapeHtml(project.cover.src)}" alt="${escapeHtml(coverAlt)}" decoding="async" />
        </figure>
      </div>
    </section>

    <section class="visual-project-specs" aria-label="${escapeHtml(labels.capabilities || "Project details")}">
      <div class="visual-spec-cell">
        <span>${escapeHtml(labels.client || "Client")}</span>
        <strong>${escapeHtml(project.client)}</strong>
      </div>
      <div class="visual-spec-cell">
        <span>${escapeHtml(labels.role || "Role")}</span>
        <strong>${escapeHtml(localize(project.role))}</strong>
      </div>
      <div class="visual-spec-cell">
        <span>${escapeHtml(labels.disciplines || "Disciplines")}</span>
        <strong>${escapeHtml(localize(project.disciplines))}</strong>
      </div>
      <div class="visual-spec-cell">
        <span>${escapeHtml(labels.typography || "Typography direction")}</span>
        <strong>${escapeHtml(localize(project.typography))}</strong>
      </div>
      <div class="visual-spec-cell is-list">
        <span>${escapeHtml(labels.deliverables || "Deliverables")}</span>
        <ul>${listMarkup(project.deliverables)}</ul>
      </div>
      <div class="visual-spec-cell is-list">
        <span>${escapeHtml(labels.capabilities || "Capabilities shown")}</span>
        <ul>${listMarkup(project.capabilities)}</ul>
      </div>
      <div class="visual-spec-cell is-list">
        <span>${escapeHtml(labels.tools || "Tools")}</span>
        <ul>${listMarkup(project.tools)}</ul>
      </div>
    </section>

    <section class="visual-project-images" aria-label="${escapeHtml(labels.images || "Project visuals")}">
      ${project.images
        .map((image, index) => {
          const title = image.title || project.title;
          return `<figure class="visual-project-image-card ${imageClass(image, index)}">
            <img src="${escapeHtml(image.src)}" alt="${escapeHtml(localize(image.alt))}" loading="lazy" decoding="async" />
            <figcaption>
              <span>${String(index + 1).padStart(2, "0")}</span>
              <strong>${escapeHtml(title)}</strong>
            </figcaption>
          </figure>`;
        })
        .join("")}
    </section>

    <nav class="visual-project-nav" aria-label="Project navigation">
      <a href="${escapeHtml(previous.url)}">
        <span>${escapeHtml(labels.previousProject || "Previous project")}</span>
        <strong>${escapeHtml(previous.title)}</strong>
      </a>
      <a href="${escapeHtml(next.url)}">
        <span>${escapeHtml(labels.nextProject || "Next project")}</span>
        <strong>${escapeHtml(next.title)}</strong>
      </a>
    </nav>
  </article>`;
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

applyLanguage(activeLanguage);
