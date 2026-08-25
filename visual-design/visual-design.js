const visualLabels = window.visualDesignLabels || {};
const visualCategories = window.visualDesignCategories || {};
const visualProjects = window.visualDesignProjects || [];
const supportedLanguages = ["en", "uk", "pl"];

const languageButtons = document.querySelectorAll(".language-button");
const textNodes = document.querySelectorAll("[data-visual-i18n]");
const altNodes = document.querySelectorAll("[data-visual-i18n-alt]");
const filterContainer = document.querySelector(".visual-filters");
const gallery = document.querySelector(".visual-gallery");

let activeLanguage = getInitialLanguage();
let activeFilter = "all";

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

function currentProjects() {
  if (activeFilter === "all") {
    return visualProjects;
  }

  return visualProjects.filter((project) => project.filters.includes(activeFilter));
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

function renderGallery() {
  if (!gallery) {
    return;
  }

  const labels = currentLabels();
  const projects = currentProjects();

  gallery.innerHTML = projects
    .map((project, index) => {
      const category = localize(project.category);
      const coverAlt = localize(project.cover.alt);
      const capability = project.capabilities?.[0] || category;
      const coverSize = project.coverSize || (index % 5 === 0 ? "large" : "standard");
      const count = project.images?.length || 0;

      return `<a class="visual-card is-${escapeHtml(coverSize)}" href="${escapeHtml(project.url)}" aria-label="${escapeHtml(
        `${labels.openProject || "Open project"}: ${project.title}`,
      )}">
        <img src="${escapeHtml(project.cover.src)}" alt="${escapeHtml(coverAlt)}" loading="lazy" decoding="async" />
        <span class="visual-card-shade" aria-hidden="true"></span>
        <span class="visual-card-copy">
          <span class="visual-card-index">${String(index + 1).padStart(2, "0")}</span>
          <span class="visual-card-title">${escapeHtml(project.title)}</span>
          <span class="visual-card-meta">${escapeHtml(category)} / ${escapeHtml(project.year)}</span>
          <span class="visual-card-detail">
            <span>${escapeHtml(capability)}</span>
            <span>${count} ${escapeHtml(labels.images || "visuals")}</span>
          </span>
        </span>
      </a>`;
    })
    .join("");
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

applyLanguage(activeLanguage);
