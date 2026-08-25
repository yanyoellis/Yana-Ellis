const visualLabels = window.visualDesignLabels || {};
const visualCategories = window.visualDesignCategories || {};
const visualProjects = window.visualDesignProjects || [];
const supportedLanguages = ["en", "uk", "pl"];

const languageButtons = document.querySelectorAll(".language-button");
const textNodes = document.querySelectorAll("[data-visual-i18n]");
const altNodes = document.querySelectorAll("[data-visual-i18n-alt]");
const filterContainer = document.querySelector(".visual-filters");
const gallery = document.querySelector(".visual-gallery");
const modal = document.querySelector("#visualProjectModal");
const modalDialog = modal?.querySelector(".visual-modal-dialog");
const modalContent = modal?.querySelector(".visual-modal-content");
const closeButtons = modal?.querySelectorAll("[data-modal-close]") || [];

let activeLanguage = getInitialLanguage();
let activeFilter = "all";
let activeProjectId = null;
let lastFocusedElement = null;

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem("yana-ellis-language");
  return supportedLanguages.includes(savedLanguage) ? savedLanguage : "en";
}

function currentLabels() {
  return visualLabels[activeLanguage] || visualLabels.en;
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
  document.title = labels.documentTitle;
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

  if (activeProjectId) {
    renderModal(activeProjectId);
  }
}

function renderFilters() {
  if (!filterContainer) {
    return;
  }

  const labels = currentLabels();
  filterContainer.setAttribute("aria-label", labels.filterLabel);

  filterContainer.innerHTML = Object.entries(visualCategories)
    .map(([key, names]) => {
      const isActive = key === activeFilter;
      return `<button class="visual-filter${isActive ? " is-active" : ""}" type="button" data-filter="${key}" aria-pressed="${isActive}">
        ${localize(names)}
      </button>`;
    })
    .join("");

  filterContainer.querySelectorAll(".visual-filter").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      activeProjectId = null;
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
    .map((project) => {
      const coverAlt = localize(project.cover.alt);
      const meta = `${localize(project.category)} / ${project.year}`;
      return `<button class="visual-card is-${project.span}" type="button" data-project-id="${project.id}" aria-label="${labels.openProject}: ${project.title}">
        <img src="${project.cover.src}" alt="${coverAlt}" loading="lazy" decoding="async" />
        <span class="visual-card-meta">
          <span>${project.title}</span>
          <span>${meta}</span>
        </span>
      </button>`;
    })
    .join("");

  gallery.querySelectorAll(".visual-card").forEach((card) => {
    card.addEventListener("click", () => openProject(card.dataset.projectId));
  });
}

function formatList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function renderModal(projectId) {
  const project = visualProjects.find((item) => item.id === projectId);
  const labels = currentLabels();

  if (!project || !modalContent) {
    return;
  }

  const projects = currentProjects();
  const index = projects.findIndex((item) => item.id === project.id);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const coverAlt = localize(project.cover.alt);

  modalContent.innerHTML = `<article class="visual-detail">
    <div class="visual-detail-hero">
      <img class="visual-detail-cover" src="${project.cover.src}" alt="${coverAlt}" decoding="async" />
      <div class="visual-detail-heading">
        <p class="visual-detail-label">${localize(project.conceptLabel)} / ${project.year}</p>
        <h2 id="visualModalTitle">${project.title}</h2>
        <p class="visual-detail-description">${localize(project.description)}</p>
        <div class="visual-detail-actions">
          <button type="button" data-modal-close>${labels.backToArchive}</button>
          <button type="button" data-project-nav="${previous.id}" aria-label="${labels.previousProject}: ${previous.title}">← ${labels.previousProject}</button>
          <button type="button" data-project-nav="${next.id}" aria-label="${labels.nextProject}: ${next.title}">${labels.nextProject} →</button>
        </div>
      </div>
    </div>

    <dl class="visual-detail-grid">
      <div class="visual-detail-cell">
        <dt>${labels.client}</dt>
        <dd>${project.client}</dd>
      </div>
      <div class="visual-detail-cell">
        <dt>${labels.category}</dt>
        <dd>${localize(project.category)}</dd>
      </div>
      <div class="visual-detail-cell">
        <dt>${labels.role}</dt>
        <dd>${localize(project.role)}</dd>
      </div>
      <div class="visual-detail-cell">
        <dt>${labels.disciplines}</dt>
        <dd>${localize(project.disciplines)}</dd>
      </div>
      <div class="visual-detail-cell">
        <h3>${labels.deliverables}</h3>
        <ul>${formatList(localize(project.deliverables))}</ul>
      </div>
      <div class="visual-detail-cell">
        <h3>${labels.tools}</h3>
        <ul>${formatList(project.tools)}</ul>
      </div>
      <div class="visual-detail-cell">
        <dt>${labels.year}</dt>
        <dd>${project.year}</dd>
      </div>
      <div class="visual-detail-cell">
        <dt>${labels.images}</dt>
        <dd>${project.images.length} ${labels.images.toLowerCase()}</dd>
      </div>
    </dl>

    <div class="visual-detail-images" aria-label="${labels.images}">
      ${project.images
        .map(
          (image) => `<img class="visual-detail-image is-${image.orientation}" src="${image.src}" alt="${localize(image.alt)}" loading="lazy" decoding="async" />`
        )
        .join("")}
    </div>
  </article>`;

  modalContent.querySelectorAll("[data-modal-close]").forEach((button) => {
    button.addEventListener("click", closeProject);
  });

  modalContent.querySelectorAll("[data-project-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      activeProjectId = button.dataset.projectNav;
      renderModal(activeProjectId);
      modalDialog?.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function openProject(projectId) {
  if (!modal) {
    return;
  }

  activeProjectId = projectId;
  lastFocusedElement = document.activeElement;
  renderModal(projectId);
  modal.hidden = false;
  document.body.classList.add("visual-modal-open");

  requestAnimationFrame(() => {
    modal.classList.add("is-visible");
    modalDialog?.focus();
  });
}

function closeProject() {
  if (!modal || modal.hidden) {
    return;
  }

  modal.classList.remove("is-visible");
  document.body.classList.remove("visual-modal-open");
  activeProjectId = null;

  window.setTimeout(() => {
    modal.hidden = true;
    lastFocusedElement?.focus();
  }, 220);
}

function navigateOpenProject(direction) {
  if (!activeProjectId) {
    return;
  }

  const projects = currentProjects();
  const index = projects.findIndex((project) => project.id === activeProjectId);
  const nextIndex = (index + direction + projects.length) % projects.length;
  activeProjectId = projects[nextIndex].id;
  renderModal(activeProjectId);
  modalDialog?.scrollTo({ top: 0, behavior: "smooth" });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

closeButtons.forEach((button) => {
  button.addEventListener("click", closeProject);
});

document.addEventListener("keydown", (event) => {
  if (!modal || modal.hidden) {
    return;
  }

  if (event.key === "Escape") {
    closeProject();
  }

  if (event.key === "ArrowLeft") {
    navigateOpenProject(-1);
  }

  if (event.key === "ArrowRight") {
    navigateOpenProject(1);
  }
});

applyLanguage(activeLanguage);
