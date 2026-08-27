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

function joinList(items) {
  return (items || []).map((item) => localize(item)).filter(Boolean).join(" / ");
}

function imageClass(image, index) {
  if (index === 0) {
    return "is-full";
  }

  if (index === 3) {
    return "is-wide";
  }

  if (image.orientation === "portrait") {
    return "is-portrait";
  }

  if (image.orientation === "square") {
    return "is-square";
  }

  return "is-landscape";
}

function navigationProjects() {
  const ordered = [...visualProjects].sort((first, second) => (first.archiveOrder ?? 999) - (second.archiveOrder ?? 999));

  if (project?.primaryArchive === false) {
    return ordered;
  }

  return ordered.filter((item) => item.primaryArchive !== false);
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

  const navProjects = navigationProjects();
  const projectIndex = navProjects.findIndex((item) => item.id === project.id);
  const previous = navProjects[(projectIndex - 1 + navProjects.length) % navProjects.length];
  const next = navProjects[(projectIndex + 1) % navProjects.length];
  const coverAlt = localize(project.cover.alt);
  const displayImages = (project.images || []).filter((image) => image.id !== "board" && !image.internal);

  root.innerHTML = `<article class="visual-project">
    <section class="visual-project-hero" aria-labelledby="visual-project-title">
      <a class="visual-back-link" href="../index.html">${escapeHtml(labels.backToArchive || "Back to Visual Design")}</a>
      <div class="visual-project-hero-grid">
        <div class="visual-project-heading">
          <p class="section-kicker">${escapeHtml(localize(project.category))} / ${escapeHtml(project.year)}</p>
          <h1 id="visual-project-title">${escapeHtml(project.title)}</h1>
        </div>
        <div class="visual-project-intro">
          <p>${escapeHtml(localize(project.description))}</p>
        </div>
      </div>
      <figure class="visual-project-cover">
        <img src="${escapeHtml(project.cover.src)}" alt="${escapeHtml(coverAlt)}" decoding="async" />
      </figure>
    </section>

    <section class="visual-project-info" aria-label="${escapeHtml(labels.projectInfo || "Project information")}">
      <div>
        <span>${escapeHtml(labels.role || "Role")}</span>
        <strong>${escapeHtml(localize(project.role))}</strong>
      </div>
      <div>
        <span>${escapeHtml(labels.disciplines || "Disciplines")}</span>
        <strong>${escapeHtml(localize(project.disciplines))}</strong>
      </div>
      <div>
        <span>${escapeHtml(labels.tools || "Tools")}</span>
        <strong>${escapeHtml(joinList(project.tools))}</strong>
      </div>
      <div>
        <span>${escapeHtml(labels.deliverables || "Deliverables")}</span>
        <strong>${escapeHtml(joinList(project.deliverables))}</strong>
      </div>
    </section>

    <section class="visual-project-images" aria-label="${escapeHtml(labels.images || "Project visuals")}">
      ${displayImages
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
