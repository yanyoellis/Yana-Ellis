(() => {
  const BASE = "/projects/atelier-aureline";
  const page = document.body.dataset.page || "home";
  const slug = document.body.dataset.slug || "";
  const root = document.querySelector("#pageRoot");
  const header = document.querySelector("#siteHeader");
  const footer = document.querySelector("#siteFooter");
  const modalRoot = document.querySelector("#modalRoot");
  const toastRegion = document.querySelector("#toastRegion");

  const nav = [
    ["Home", `${BASE}/index.html`, "home"],
    ["Works", `${BASE}/works/index.html`, "works"],
    ["Artists", `${BASE}/artists/index.html`, "artists"],
    ["About", `${BASE}/about/index.html`, "about"],
    ["Process", `${BASE}/process/index.html`, "process"],
    ["FAQ", `${BASE}/faq/index.html`, "faq"],
    ["Contact", `${BASE}/contact/index.html`, "contact"]
  ];

  const works = [
    {
      id: "celestial-shoulder",
      title: "Celestial Shoulder",
      artist: "Maeva Rousseau",
      style: "Ornamental",
      year: "2026",
      visual: "visual-ornamental",
      image: `${BASE}/assets/works/celestial-shoulder.jpg`,
      alt: "Close-up of a refined ornamental fine-line shoulder tattoo",
      concept: "A shoulder composition built like a ceiling medallion: botanical linework, lunar spacing and quiet architectural symmetry."
    },
    {
      id: "marble-saint",
      title: "Marble Saint",
      artist: "Noah Varenne",
      style: "Realism",
      year: "2026",
      visual: "visual-realism",
      image: `${BASE}/assets/works/marble-saint.jpg`,
      alt: "Close-up of a grayscale realism antique sculpture tattoo on the upper arm",
      concept: "Soft grayscale realism inspired by sculptural fragments, designed to follow the upper arm with museum-grade restraint."
    },
    {
      id: "black-chapel",
      title: "Black Chapel",
      artist: "Elias Moreau",
      style: "Blackwork",
      year: "2025",
      visual: "visual-blackwork",
      image: `${BASE}/assets/works/black-chapel.jpg`,
      alt: "Close-up of a bold architectural blackwork tattoo inspired by chapel vaults",
      concept: "A dark architectural piece using vaulted rhythm, negative space and disciplined saturation."
    },
    {
      id: "etched-garden",
      title: "Etched Garden",
      artist: "Clara Desrosiers",
      style: "Engraving",
      year: "2025",
      visual: "visual-engraving",
      image: `${BASE}/assets/works/etched-garden.jpg`,
      alt: "Close-up of an engraving-style botanical tattoo on the forearm",
      concept: "Fine hatchwork florals composed like an old print, with pressure and spacing adapted to skin movement."
    },
    {
      id: "ivory-relic",
      title: "Ivory Relic",
      artist: "Maeva Rousseau",
      style: "Microrealism",
      year: "2026",
      visual: "visual-micro",
      image: `${BASE}/assets/works/ivory-relic.jpg`,
      alt: "Close-up of a small microrealism cameo tattoo with negative space",
      concept: "A small antique object study with controlled contrast, built for close viewing without losing clarity over time."
    },
    {
      id: "velvet-altar",
      title: "Velvet Altar",
      artist: "Elias Moreau",
      style: "Dark Romanticism",
      year: "2025",
      visual: "visual-romantic",
      image: `${BASE}/assets/works/velvet-altar.jpg`,
      alt: "Close-up of a dark romantic ornamental floral tattoo on the upper arm",
      concept: "A burgundy-black composition where portrait shadow, ornamental edges and body placement act as one piece."
    }
  ];

  const artists = [
    {
      id: "maeva-rousseau",
      name: "Maeva Rousseau",
      initials: "MR",
      role: "Lead ornamental artist",
      focus: "Renaissance-inspired composition, fine line, ornamental anatomy",
      years: "12 years",
      image: `${BASE}/assets/artists/maeva-rousseau.jpg`,
      alt: "Portrait of Maeva Rousseau in a dark luxury tattoo atelier",
      availability: "Consultations open",
      influence: "Ceiling frescoes, botanical studies, French interior ornament",
      bio: "Maeva treats every piece as a living panel: placement comes first, then rhythm, contrast and the smallest decorative decision."
    },
    {
      id: "noah-varenne",
      name: "Noah Varenne",
      initials: "NV",
      role: "Realism and microrealism",
      focus: "Sculptural faces, antique objects, soft grayscale detail",
      years: "10 years",
      image: `${BASE}/assets/artists/noah-varenne.jpg`,
      alt: "Portrait of Noah Varenne in a refined tattoo atelier",
      availability: "Limited books",
      influence: "Marble busts, museum lighting, archival portraiture",
      bio: "Noah builds realism with restraint, keeping values clean so the work remains elegant after the first photograph fades."
    },
    {
      id: "elias-moreau",
      name: "Elias Moreau",
      initials: "EM",
      role: "Blackwork specialist",
      focus: "Architectural blackwork, dark romantic motifs, negative space",
      years: "9 years",
      image: `${BASE}/assets/artists/elias-moreau.jpg`,
      alt: "Portrait of Elias Moreau holding a black sketch portfolio",
      availability: "Booking by concept",
      influence: "Vaults, chapel shadows, ceremonial textile borders",
      bio: "Elias uses black as structure rather than decoration, shaping pieces around posture, clothing lines and movement."
    }
  ];

  const styles = [
    ["Fine Line", "Delicate, composed linework for florals, symbols and architectural fragments."],
    ["Blackwork", "Saturated forms, negative space and strong body placement."],
    ["Realism", "Soft portrait and sculpture studies with controlled contrast."],
    ["Ornamental", "Frames, medallions and botanical symmetry inspired by palace interiors."],
    ["Engraving", "Hatched detail with the feeling of a collected print."],
    ["Renaissance-Inspired", "Classical motifs translated into clean contemporary body art."],
    ["Microrealism", "Small precise studies designed for close viewing."],
    ["Dark Romanticism", "Burgundy shadow, intimate symbolism and dramatic restraint."]
  ];

  const processSteps = [
    ["Request", "Send the idea, body area, scale, references and preferred artist."],
    ["Consultation", "We discuss placement, visibility, timing, budget and skin-specific constraints."],
    ["Concept", "The artist refines the idea into composition, contrast and visual language."],
    ["Sketch", "A custom sketch is prepared after the appointment direction is accepted."],
    ["Approval", "Final changes are reviewed before the session date."],
    ["Session", "The work is applied in a private room with sterile setup and paced breaks."],
    ["Aftercare", "You leave with clear healing guidance and follow-up correction notes when needed."]
  ];

  const faqs = [
    ["How should I prepare?", "Sleep well, eat before arriving, avoid alcohol and bring comfortable clothing that exposes the tattoo area."],
    ["How much will it hurt?", "Pain depends on placement, size, density and personal sensitivity. The artist will pace the session and explain breaks before starting."],
    ["How long does a session take?", "Small pieces may take one to two hours. Large or detailed work can require several sessions."],
    ["How is pricing calculated?", "Price depends on artist, complexity, scale, placement, color, detail and session length. A written estimate follows consultation."],
    ["Is a deposit required?", "Yes. A deposit reserves the artist's time and sketch development. It is applied to the final appointment fee."],
    ["Are corrections included?", "Minor touch-ups are reviewed after healing. Corrections caused by aftercare issues or major redesigns may be quoted separately."],
    ["Are there contraindications?", "Pregnancy, some medications, active skin conditions and certain health concerns may require postponement or medical advice."],
    ["What aftercare is needed?", "Keep the area clean, avoid soaking, sun exposure and friction, and follow the artist's written healing instructions."],
    ["Can I cancel?", "Appointments can be moved with notice. Late cancellations may affect the deposit because the artist's time has been reserved."],
    ["Are sketches custom?", "Yes. Atelier Aureline does not copy existing tattoos. References guide direction, but the final artwork is created for one client."]
  ];

  function renderHeader() {
    header.innerHTML = `
      <div class="nav-inner">
        <a class="brand" href="${BASE}/index.html" aria-label="Atelier Aureline home">
          <span class="brand-mark" aria-hidden="true">AA</span>
          <span><span class="brand-name">Atelier Aureline</span><span class="brand-caption">Tattoo atelier</span></span>
        </a>
        <nav class="nav-links" id="navLinks" aria-label="Main navigation">
          ${nav.map(([label, href, key]) => `<a class="${activeClass(key)}" href="${href}">${label}</a>`).join("")}
        </nav>
        <div class="nav-actions">
          <a class="button" href="${BASE}/booking/index.html">Request a sitting</a>
          <button class="menu-toggle" type="button" data-menu-toggle aria-label="Open menu"><span></span></button>
        </div>
      </div>
    `;
  }

  function activeClass(key) {
    if (page === key || (key === "artists" && page === "artist-detail")) return "is-active";
    return "";
  }

  function renderFooter() {
    footer.innerHTML = `
      <div class="footer-grid">
        <div>
          <a class="brand" href="${BASE}/index.html"><span class="brand-mark">AA</span><span><span class="brand-name">Atelier Aureline</span><span class="brand-caption">Tattoo atelier</span></span></a>
          <p>Portfolio concept for a private tattoo atelier where body art is composed with the seriousness of a collected work.</p>
        </div>
        <div><h3>Studio</h3><ul><li>18 Rue Vivienne, Paris</li><li>Tue-Sat 11:00-20:00</li><li>Private sittings by request</li></ul></div>
        <div><h3>Explore</h3><ul>${nav.slice(1, 6).map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join("")}</ul></div>
        <div><h3>Contact</h3><ul><li>hello@atelier-aureline.example</li><li>+33 1 42 18 09 64</li><li><a href="../../index.html">Yana Ellis portfolio</a></li></ul></div>
      </div>
      <div class="footer-bottom"><span>2026 Atelier Aureline. Fictional portfolio concept.</span><span>All forms are frontend demos.</span></div>
    `;
  }

  function renderHome() {
    root.innerHTML = `
      <section class="page hero">
        <div class="hero-copy reveal">
          <p class="kicker">Versailles discipline / modern skin</p>
          <h1>Skin, composed as art.</h1>
          <p>Atelier Aureline is a private tattoo atelier where fresco logic, body anatomy and contemporary ink meet in one deliberate composition.</p>
          <div class="hero-actions">
            <a class="button" href="${BASE}/booking/index.html">Request a sitting</a>
            <a class="button secondary" href="${BASE}/works/index.html">View the gallery</a>
          </div>
        </div>
        <div class="hero-plate reveal" data-parallax>
          <img src="${BASE}/assets/atelier-aureline-hero.png" alt="Editorial tattoo portrait in a dark Versailles-inspired atelier" />
          <div class="floating-note"><strong>Private by design</strong><span>Every piece begins with placement, proportion and the movement of the body.</span></div>
        </div>
      </section>
      <section class="page split">
        <div class="panel reveal"><p class="kicker">The thesis</p><h2 class="panel-title">Not decoration. Composition.</h2></div>
        <div class="panel reveal"><p>Atelier Aureline treats tattooing as a modern form of palace art. The body is not a surface to fill; it is a living architecture. Each design is planned around anatomy, restraint, negative space and the quiet authority of detail.</p></div>
      </section>
      <section class="page reveal">
        <div class="section-head"><div><p class="kicker">Selected works</p><h2>Gallery pieces</h2></div><p>Presented as a collected sequence of studies rather than a grid of flash. Hover or open each work for the concept.</p></div>
        <div class="works-row">${works.map(workCard).join("")}</div>
      </section>
      <section class="page manifesto reveal"><h2 class="manifesto-line">A tattoo should feel inevitable: placed with the patience of architecture and the intimacy of a signature.</h2></section>
      <section class="page reveal">
        <div class="section-head"><div><p class="kicker">Artists</p><h2>Three hands, one standard</h2></div><p>The artists work in different visual languages, but share the same respect for proportion, skin and longevity.</p></div>
        <div class="artist-grid">${artists.map(artistCard).join("")}</div>
      </section>
      <section class="page reveal">
        <div class="section-head"><div><p class="kicker">Studio experience</p><h2>Quiet rooms, exact rituals</h2></div><p>A private environment shaped for consultation, sketch review, sterile work and calm aftercare guidance.</p></div>
        <div class="experience-grid"><div class="image-panel"></div><div class="panel"><h3 class="panel-title">The room is part of the work.</h3><p>Consultations happen beside marble, warm graphite walls and framed studies. The atmosphere is restrained so the decision can be precise: composition, scale, skin, healing and time.</p><div class="stat-grid">${stat("01", "Private consultation")}${stat("02", "Custom sketch")}${stat("03", "Sterile session")}${stat("04", "Aftercare review")}</div></div></div>
      </section>
      ${ctaBlock()}
    `;
  }

  function renderWorks() {
    root.innerHTML = `
      ${pageHero("Works", "A gallery of tattoo pieces shaped by fresco logic, sculpture, engraving and contemporary skin placement.", "Filter by style or artist, then open a work for its concept.")}
      <section class="page">
        <div class="filter-bar" aria-label="Work filters">
          ${["All", "Ornamental", "Realism", "Blackwork", "Engraving", "Microrealism", "Dark Romanticism"].map((item) => `<button class="${item === "All" ? "is-active" : ""}" type="button" data-filter="${item}">${item}</button>`).join("")}
        </div>
        <div class="work-grid" id="workGrid">${works.map(workCard).join("")}</div>
      </section>
    `;
  }

  function renderArtists() {
    root.innerHTML = `
      ${pageHero("Artists", "Each artist is introduced as a visual author, with a vocabulary, method and strict approach to skin.", "Artist availability is represented as frontend demo content.")}
      <section class="page artist-grid">${artists.map(artistCard).join("")}</section>
    `;
  }

  function renderArtistDetail() {
    const artist = artists.find((item) => item.id === slug) || artists[0];
    const artistWorks = works.filter((item) => item.artist === artist.name);
    root.innerHTML = `
      ${pageHero(artist.name, artist.focus, artist.influence)}
      <section class="page split">
        <div class="artist-portrait reveal"><img src="${artist.image}" alt="${artist.alt}" loading="lazy" decoding="async" /></div>
        <div class="detail-panel reveal">
          <p class="kicker">${artist.role}</p>
          <h2 class="panel-title">${artist.years} of skin composition</h2>
          <p>${artist.bio}</p>
          <div class="tag-row"><span class="tag">${artist.availability}</span><span class="tag">${artist.influence}</span></div>
          <a class="button" href="${BASE}/booking/index.html?artist=${encodeURIComponent(artist.name)}">Request this artist</a>
        </div>
      </section>
      <section class="page"><div class="section-head"><div><p class="kicker">Selected work</p><h2>By ${artist.name.split(" ")[0]}</h2></div><p>Portfolio fragments connected to this artist's current direction.</p></div><div class="work-grid">${artistWorks.map(workCard).join("")}</div></section>
    `;
  }

  function renderAbout() {
    root.innerHTML = `
      ${pageHero("About", "Atelier Aureline is a fictional Paris atelier built around the idea that tattooing can carry the discipline of classical art without becoming nostalgic.", "Versailles is treated as a compositional reference, not a costume.")}
      <section class="page split">
        <div class="marble-panel panel reveal"><p class="kicker">Interior language</p><h2 class="panel-title">Stone, shadow, frame.</h2></div>
        <div class="panel reveal"><p>The studio combines dark graphite walls, ivory stone, restrained gilding and archival references. Every visual detail supports trust: private rooms, clean surfaces, careful lighting, a calm consultation table and a clear path from idea to healed work.</p><p>The result is deliberately modern. Ornament appears as a precise accent, never as noise.</p></div>
      </section>
      <section class="page stat-grid reveal">${stat("Anatomy", "Placement follows the natural architecture of the body.")}${stat("Longevity", "Contrast and line weight are planned for healed clarity.")}${stat("Ritual", "The process is calm, written and paced.")}${stat("Original", "No copied tattoos, no recycled flash.")}</section>
    `;
  }

  function renderProcess() {
    root.innerHTML = `
      ${pageHero("Process", "A clear path from the first request to aftercare, so a highly personal artwork never feels improvised.", "Seven stages, one quiet standard.")}
      <section class="page process-grid">${processSteps.map(([title, text], index) => `<article class="process-step reveal"><span class="tag">${String(index + 1).padStart(2, "0")}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</section>
      ${ctaBlock()}
    `;
  }

  function renderBooking() {
    root.innerHTML = `
      ${pageHero("Booking", "Send a detailed consultation request. The form is a frontend demo, designed to feel complete and client-ready.", "No database is connected in this portfolio project.")}
      <section class="page form-panel reveal">${bookingForm("bookingForm")}</section>
    `;
  }

  function renderFaq() {
    root.innerHTML = `
      ${pageHero("FAQ", "Practical answers about preparation, pain, timing, pricing, deposits, aftercare and custom sketches.", "Clear information keeps the experience calm before the appointment.")}
      <section class="page faq-grid">${faqs.map(faqItem).join("")}</section>
    `;
  }

  function renderContact() {
    root.innerHTML = `
      ${pageHero("Contact", "A fictional private atelier in Paris, open by consultation and appointment.", "Use the contact form for general questions or book directly for a tattoo request.")}
      <section class="page split">
        <div class="detail-panel reveal"><p class="kicker">Atelier</p><h2 class="panel-title">18 Rue Vivienne, Paris</h2><p>Tue-Sat 11:00-20:00<br />hello@atelier-aureline.example<br />+33 1 42 18 09 64</p><div class="tag-row"><span class="tag">Instagram</span><span class="tag">Behance</span><span class="tag">Private consultation</span></div></div>
        <div class="form-panel reveal">${contactForm("contactForm")}</div>
      </section>
    `;
  }

  function renderNotFound() {
    root.innerHTML = `
      <section class="page page-hero"><div><p class="kicker">404</p><h1 class="page-title">This frame is empty.</h1><p class="lead">The page you requested is not part of the atelier collection.</p><div class="hero-actions"><a class="button" href="${BASE}/index.html">Return home</a><a class="button secondary" href="${BASE}/works/index.html">View works</a></div></div></section>
    `;
  }

  function pageHero(title, text, aside) {
    return `<section class="page page-hero reveal"><div><p class="kicker">Atelier Aureline</p><h1 class="page-title">${title}</h1><p class="lead">${text}</p></div><div class="panel"><p>${aside}</p></div></section>`;
  }

  function stat(value, label) {
    return `<div class="stat"><strong>${value}</strong><span>${label}</span></div>`;
  }

  function workCard(work) {
    return `
      <button class="work-card ${work.visual}" type="button" data-work-id="${work.id}" aria-label="Open ${work.title}">
        <span class="work-photo"><img src="${work.image}" alt="${work.alt}" loading="lazy" decoding="async" /></span>
        <span class="work-meta">
          <span class="tag-row"><span class="tag">${work.style}</span><span class="tag">${work.year}</span></span>
          <h3>${work.title}</h3>
          <p>${work.artist}</p>
        </span>
      </button>
    `;
  }

  function artistCard(artist) {
    const href = artist.id === "maeva-rousseau" ? `${BASE}/artists/maeva-rousseau/index.html` : `${BASE}/artists/index.html#${artist.id}`;
    return `
      <article class="artist-card reveal" id="${artist.id}">
        <div class="artist-portrait"><img src="${artist.image}" alt="${artist.alt}" loading="lazy" decoding="async" /></div>
        <p class="kicker">${artist.role}</p>
        <h3>${artist.name}</h3>
        <p>${artist.bio}</p>
        <div class="tag-row"><span class="tag">${artist.years}</span><span class="tag">${artist.availability}</span></div>
        <a class="button secondary" href="${href}">View profile</a>
      </article>
    `;
  }

  function faqItem([question, answer]) {
    return `<article class="faq-item reveal"><button class="faq-question" type="button"><span>${question}</span><span aria-hidden="true">+</span></button><div class="faq-answer"><p>${answer}</p></div></article>`;
  }

  function ctaBlock() {
    return `<section class="page reveal"><div class="panel marble-panel"><p class="kicker">Booking</p><h2 class="panel-title">Begin with placement, not a trend.</h2><p>Tell us the body area, scale, references and the feeling you want the piece to hold. The artist will answer with a consultation direction.</p><div class="hero-actions"><a class="button" href="${BASE}/booking/index.html">Request a sitting</a><a class="button secondary" href="${BASE}/contact/index.html">Ask a question</a></div></div></section>`;
  }

  function bookingForm(id) {
    return `
      <form class="form-grid" id="${id}" data-form="booking" novalidate>
        <div class="field span-3"><label for="${id}Name">Name</label><input id="${id}Name" name="name" required /><span class="error-text"></span></div>
        <div class="field span-3"><label for="${id}Email">Email</label><input id="${id}Email" name="email" type="email" required /><span class="error-text"></span></div>
        <div class="field span-3"><label for="${id}Phone">Phone</label><input id="${id}Phone" name="phone" required /><span class="error-text"></span></div>
        <div class="field span-3"><label for="${id}Contact">Preferred contact</label><select id="${id}Contact" name="contact" required><option value="">Select</option><option>Email</option><option>Phone</option><option>Instagram</option></select><span class="error-text"></span></div>
        <div class="field span-3"><label for="${id}Artist">Artist</label><select id="${id}Artist" name="artist" required><option value="">Select</option>${artists.map((artist) => `<option>${artist.name}</option>`).join("")}<option>Any suitable artist</option></select><span class="error-text"></span></div>
        <div class="field span-3"><label for="${id}Style">Style</label><select id="${id}Style" name="style" required><option value="">Select</option>${styles.map(([name]) => `<option>${name}</option>`).join("")}</select><span class="error-text"></span></div>
        <div class="field span-2"><label for="${id}Area">Body area</label><input id="${id}Area" name="area" required /><span class="error-text"></span></div>
        <div class="field span-2"><label for="${id}Size">Approx. size</label><input id="${id}Size" name="size" required placeholder="10 cm, half sleeve..." /><span class="error-text"></span></div>
        <div class="field span-2"><label for="${id}Ink">Ink</label><select id="${id}Ink" name="ink" required><option value="">Select</option><option>Black and grey</option><option>Color</option><option>Not sure yet</option></select><span class="error-text"></span></div>
        <div class="field span-3"><label for="${id}Date">Desired date</label><input id="${id}Date" name="date" type="date" required /><span class="error-text"></span></div>
        <div class="field span-3"><label for="${id}Budget">Budget range</label><select id="${id}Budget" name="budget" required><option value="">Select</option><option>EUR 300-600</option><option>EUR 600-1200</option><option>EUR 1200-2500</option><option>Project-based quote</option></select><span class="error-text"></span></div>
        <div class="field span-6"><label for="${id}Idea">Describe the idea</label><textarea id="${id}Idea" name="idea" required></textarea><span class="error-text"></span></div>
        <div class="field span-6"><label for="${id}Refs">Reference images</label><input id="${id}Refs" name="refs" type="file" multiple /></div>
        <label class="field checkbox span-6"><input name="terms" type="checkbox" required /><span>I understand this is a consultation request and final price depends on artist, placement, size and complexity.</span></label>
        <div class="field span-6"><button class="button" type="submit">Send request</button></div>
      </form>
    `;
  }

  function contactForm(id) {
    return `
      <form class="form-grid" id="${id}" data-form="contact" novalidate>
        <div class="field span-3"><label for="${id}Name">Name</label><input id="${id}Name" name="name" required /><span class="error-text"></span></div>
        <div class="field span-3"><label for="${id}Email">Email</label><input id="${id}Email" name="email" type="email" required /><span class="error-text"></span></div>
        <div class="field span-6"><label for="${id}Message">Message</label><textarea id="${id}Message" name="message" required></textarea><span class="error-text"></span></div>
        <div class="field span-6"><button class="button" type="submit">Send message</button></div>
      </form>
    `;
  }

  function bindInteractions() {
    document.querySelector("[data-menu-toggle]")?.addEventListener("click", () => document.querySelector("#navLinks")?.classList.toggle("is-open"));
    document.querySelectorAll("[data-work-id]").forEach((button) => button.addEventListener("click", () => openWork(button.dataset.workId)));
    document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => filterWorks(button)));
    document.querySelectorAll(".faq-question").forEach((button) => button.addEventListener("click", () => button.closest(".faq-item").classList.toggle("is-open")));
    document.querySelectorAll("[data-form]").forEach((form) => form.addEventListener("submit", handleForm));
  }

  function filterWorks(button) {
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
    const filter = button.dataset.filter;
    const grid = document.querySelector("#workGrid");
    if (!grid) return;
    grid.innerHTML = works.filter((work) => filter === "All" || work.style === filter).map(workCard).join("");
    bindInteractions();
  }

  function openWork(id) {
    const work = works.find((item) => item.id === id);
    if (!work) return;
    modalRoot.innerHTML = `
      <div class="modal-backdrop" data-modal-backdrop>
        <div class="modal-card" role="dialog" aria-modal="true" aria-label="${work.title}" tabindex="-1">
          <button class="modal-close" type="button" data-modal-close aria-label="Close">x</button>
          <div class="modal-body">
            ${workCard(work)}
            <div class="modal-content">
              <p class="kicker">${work.style} / ${work.year}</p>
              <h2 class="panel-title">${work.title}</h2>
              <p>${work.concept}</p>
              <p><strong>Artist:</strong> ${work.artist}</p>
              <div class="tag-row"><span class="tag">custom composition</span><span class="tag">skin-first placement</span></div>
              <a class="button" href="${BASE}/booking/index.html">Request similar direction</a>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.classList.add("has-modal");
    document.querySelector(".modal-card")?.focus();
    document.querySelector("[data-modal-close]")?.addEventListener("click", closeModal);
    document.querySelector("[data-modal-backdrop]")?.addEventListener("click", (event) => {
      if (event.target.matches("[data-modal-backdrop]")) closeModal();
    });
  }

  function closeModal() {
    modalRoot.innerHTML = "";
    document.body.classList.remove("has-modal");
  }

  function handleForm(event) {
    event.preventDefault();
    const fields = [...event.currentTarget.querySelectorAll("input[required], select[required], textarea[required]")];
    const valid = fields.every(validateField);
    if (!valid) return;
    const type = event.currentTarget.dataset.form;
    event.currentTarget.reset();
    showToast(type === "booking" ? "Your consultation request has been prepared. The atelier would now contact you with next steps." : "Your message has been prepared. Thank you.");
  }

  function validateField(field) {
    const error = field.closest(".field")?.querySelector(".error-text");
    let message = "";
    if (field.type === "checkbox" && !field.checked) message = "Please confirm this field.";
    if (!message && !field.value.trim()) message = "Please complete this field.";
    if (!message && field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) message = "Please enter a valid email.";
    if (error) error.textContent = message;
    field.setAttribute("aria-invalid", message ? "true" : "false");
    return !message;
  }

  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    toastRegion.appendChild(toast);
    setTimeout(() => toast.remove(), 4300);
  }

  function setupReveal() {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
  }

  function setupCursor() {
    const cursor = document.querySelector("#cursor");
    if (!cursor || !matchMedia("(pointer: fine)").matches) return;
    window.addEventListener("pointermove", (event) => {
      cursor.classList.add("is-visible");
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    });
    document.addEventListener("pointerover", (event) => {
      cursor.classList.toggle("is-active", Boolean(event.target.closest("a, button, input, textarea, select")));
    });
  }

  function setupParallax() {
    const target = document.querySelector("[data-parallax]");
    if (!target || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    window.addEventListener("scroll", () => {
      const y = Math.min(24, window.scrollY * 0.025);
      target.style.transform = `translateY(${y}px)`;
    }, { passive: true });
  }

  function route() {
    renderHeader();
    renderFooter();
    if (page === "home") renderHome();
    if (page === "works") renderWorks();
    if (page === "artists") renderArtists();
    if (page === "artist-detail") renderArtistDetail();
    if (page === "about") renderAbout();
    if (page === "process") renderProcess();
    if (page === "booking") renderBooking();
    if (page === "faq") renderFaq();
    if (page === "contact") renderContact();
    if (page === "not-found") renderNotFound();
    bindInteractions();
    setupReveal();
    setupCursor();
    setupParallax();
    document.querySelector("#loader")?.classList.add("is-hidden");
  }

  window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 18), { passive: true });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });

  route();
})();
