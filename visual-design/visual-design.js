const visualLabels = window.visualDesignLabels || {};
const visualCategories = window.visualDesignCategories || {};
const visualProjects = window.visualDesignProjects || [];
const supportedLanguages = ["en", "uk", "pl"];

const languageButtons = document.querySelectorAll(".language-button");
const textNodes = document.querySelectorAll("[data-visual-i18n]");
const altNodes = document.querySelectorAll("[data-visual-i18n-alt]");
const filterContainer = document.querySelector(".visual-filters");
const archiveToggle = document.querySelector(".visual-archive-toggle");
const gallery = document.querySelector(".visual-gallery");

let activeLanguage = getInitialLanguage();
let activeFilter = "all";
let showAllProjects = false;

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

function orderedProjects() {
  return [...visualProjects].sort((first, second) => (first.archiveOrder ?? 999) - (second.archiveOrder ?? 999));
}

function currentProjects() {
  const pool = showAllProjects ? orderedProjects() : orderedProjects().filter((project) => project.primaryArchive !== false);

  if (activeFilter === "all") {
    return pool;
  }

  return pool.filter((project) => project.filters.includes(activeFilter));
}

function applyLanguage(language) {
  activeLanguage = supportedLanguages.includes(language) ? language : "en";
  const labels = currentLabels();

  document.documentElement.lang = activeLanguage;
  document.title = labels.documentTitle || "Visual Design - Yana Ellis";
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

  updateArchiveToggle();
  renderFilters();
  renderGallery();
}

function renderFilters() {
  if (!filterContainer) {
    return;
  }

  const labels = currentLabels();
  filterContainer.setAttribute("aria-label", labels.filterLabel || "Filter visual design projects");

  filterContainer.innerHTML = Object.entries(visualCategories)
    .map(([key, names]) => {
      const isActive = key === activeFilter;
      return `<button class="visual-filter${isActive ? " is-active" : ""}" type="button" data-filter="${escapeHtml(
        key,
      )}" aria-pressed="${isActive}">
        ${escapeHtml(localize(names))}
      </button>`;
    })
    .join("");

  filterContainer.querySelectorAll(".visual-filter").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter || "all";
      renderFilters();
      renderGallery();
    });
  });
}

function updateArchiveToggle() {
  if (!archiveToggle) {
    return;
  }

  const labels = currentLabels();
  archiveToggle.textContent = showAllProjects
    ? labels.showCuratedProjects || "Show curated selection"
    : labels.viewAllProjects || "View all projects";
  archiveToggle.setAttribute("aria-pressed", String(showAllProjects));
}

function renderGallery() {
  if (!gallery) {
    return;
  }

  const labels = currentLabels();
  const projects = currentProjects();

  gallery.innerHTML = projects
    .map((project) => {
      const category = localize(project.category);
      const coverAlt = localize(project.cover.alt);
      const conceptLabel = localize(project.conceptLabel) || labels.conceptProject || "Concept project";

      return `<a class="visual-card" href="${escapeHtml(project.url)}" aria-label="${escapeHtml(
        `${labels.openProject || "Open project"}: ${project.title}`,
      )}">
        <span class="visual-card-media">
          <img
            src="${escapeHtml(project.cover.src)}"
            alt="${escapeHtml(coverAlt)}"
            loading="${project.primaryArchive === false ? "lazy" : "eager"}"
            decoding="async"
          />
        </span>
        <span class="visual-card-copy">
          <span class="visual-card-title">${escapeHtml(project.title)}</span>
          <span class="visual-card-meta">${escapeHtml(category)} / ${escapeHtml(project.year)}</span>
          <span class="visual-card-note">${escapeHtml(conceptLabel)}</span>
        </span>
      </a>`;
    })
    .join("");
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

archiveToggle?.addEventListener("click", () => {
  showAllProjects = !showAllProjects;
  updateArchiveToggle();
  renderGallery();
});

applyLanguage(activeLanguage);
