(() => {
  const BASE = "/projects/lucent-dentistry";
  const page = document.body.dataset.page || "home";
  const slug = document.body.dataset.slug || "";
  const root = document.querySelector("#pageRoot");
  const header = document.querySelector("#siteHeader");
  const footer = document.querySelector("#siteFooter");
  const modalRoot = document.querySelector("#modalRoot");
  const toastRegion = document.querySelector("#toastRegion");

  const copy = {
    caption: "Private dental studio",
    home: "Home",
    services: "Services",
    doctors: "Doctors",
    about: "About",
    pricing: "Pricing",
    reviews: "Reviews",
    contact: "Contact",
    appointment: "Appointment",
    book: "Book an appointment",
    explore: "Explore treatments",
    learnMore: "Learn more",
    viewProfile: "View profile",
    search: "Search services",
    all: "All",
    submit: "Submit request",
    find: "Find an appointment",
    next: "Next",
    back: "Back",
    confirm: "Confirm request",
    close: "Close",
    menu: "Menu",
    success: "Your request has been received. Our coordinator will contact you shortly.",
    newsletter: "Newsletter saved. Thank you.",
    required: "Please complete this field.",
    email: "Please enter a valid email address.",
    phone: "Please enter a phone number.",
    legal: "This demonstration website is for portfolio presentation. Treatment decisions require a real clinical consultation."
  };

  const services = [
    {
      id: "check-up",
      category: "preventive",
      title: "Dental Check-up",
      icon: "01",
      price: "from EUR 85",
      duration: "45 min",
      description: "A calm examination with digital imaging, oral health screening and a clear personal care plan."
    },
    {
      id: "cleaning",
      category: "preventive",
      title: "Professional Cleaning",
      icon: "02",
      price: "from EUR 120",
      duration: "60 min",
      description: "Guided biofilm therapy, gentle polishing and tailored home-care advice for a fresher smile."
    },
    {
      id: "whitening",
      category: "aesthetic",
      title: "Teeth Whitening",
      icon: "03",
      price: "from EUR 290",
      duration: "75 min",
      description: "Clinically supervised whitening designed to brighten teeth while protecting enamel comfort."
    },
    {
      id: "implants",
      category: "surgical",
      title: "Dental Implants",
      icon: "04",
      price: "from EUR 1,250",
      duration: "Consultation first",
      description: "Digitally planned implant treatment with transparent staging and restorative coordination."
    },
    {
      id: "veneers",
      category: "aesthetic",
      title: "Veneers",
      icon: "05",
      price: "from EUR 690",
      duration: "2-3 visits",
      description: "Porcelain veneer planning for proportion, translucency and natural facial harmony."
    },
    {
      id: "orthodontics",
      category: "orthodontics",
      title: "Orthodontics",
      icon: "06",
      price: "from EUR 1,800",
      duration: "Plan dependent",
      description: "Clear aligner and fixed orthodontic planning for bite function and confident aesthetics."
    },
    {
      id: "root-canal",
      category: "restorative",
      title: "Root Canal Treatment",
      icon: "07",
      price: "from EUR 420",
      duration: "90 min",
      description: "Microscope-assisted endodontic care designed to reduce discomfort and preserve natural teeth."
    },
    {
      id: "emergency",
      category: "urgent",
      title: "Emergency Dentistry",
      icon: "08",
      price: "from EUR 140",
      duration: "Same-day triage",
      description: "Fast assessment for pain, swelling, broken restorations or dental trauma when timing matters."
    },
    {
      id: "digital-smile-design",
      category: "aesthetic",
      title: "Digital Smile Design",
      icon: "09",
      price: "from EUR 360",
      duration: "2 visits",
      description: "A visual smile planning consultation using facial references, photographs and mock-up previews.",
      featured: true
    }
  ];

  const doctors = [
    {
      id: "elena-park",
      name: "Dr Elena Park",
      initials: "EP",
      role: "Lead aesthetic dentist",
      focus: "Digital smile planning, veneers, restorative care",
      experience: "14 years",
      languages: "EN / PL / UA",
      bio: "Dr Park combines facially driven smile design with minimally invasive restorative dentistry and calm patient communication."
    },
    {
      id: "mateo-keller",
      name: "Dr Mateo Keller",
      initials: "MK",
      role: "Implantologist",
      focus: "Guided surgery, implant restoration, bone planning",
      experience: "16 years",
      languages: "EN / DE / PL",
      bio: "Dr Keller focuses on digitally planned implant care and clear staging for complex restorative cases."
    },
    {
      id: "sofia-ivanenko",
      name: "Dr Sofia Ivanenko",
      initials: "SI",
      role: "Orthodontist",
      focus: "Clear aligners, bite correction, teen orthodontics",
      experience: "11 years",
      languages: "EN / UA / PL",
      bio: "Dr Ivanenko plans orthodontic treatment around comfort, predictable movement and realistic timeframes."
    },
    {
      id: "nora-vale",
      name: "Nora Vale",
      initials: "NV",
      role: "Dental hygienist",
      focus: "Guided biofilm therapy, prevention, periodontal maintenance",
      experience: "9 years",
      languages: "EN / PL",
      bio: "Nora creates gentle hygiene visits for patients who want precise preventive care without a rushed feeling."
    }
  ];

  const reviews = [
    ["Aesthetic", "Maya L.", 5, "The digital preview helped me understand every step before starting treatment."],
    ["Implants", "Jonas R.", 5, "Everything was explained clearly and the staged plan made a complex process feel manageable."],
    ["Cleaning", "Katarzyna W.", 5, "The most comfortable hygiene appointment I have ever had. Detailed, calm and very professional."],
    ["Orthodontics", "Olena S.", 5, "My aligner plan was realistic and the team never pushed unnecessary extras."],
    ["Emergency", "Thomas B.", 4, "Same-day help, clear pricing and a very reassuring dentist."],
    ["Veneers", "Elise M.", 5, "The result looks like my smile, just balanced and brighter. Nothing artificial."],
    ["Check-up", "Anton P.", 5, "Beautiful clinic and very clear diagnostics. I left with a plan I actually understood."],
    ["Root Canal", "Nina D.", 5, "I was nervous, but the team explained what would happen and checked in throughout."],
    ["Whitening", "Iga N.", 4, "Soft natural whitening, exactly what I wanted."],
    ["Implants", "Mark S.", 5, "The digital planning and follow-up were excellent."],
    ["Cleaning", "Laura T.", 5, "Gentle, thorough and the glassy calm space really helps."],
    ["Aesthetic", "Amelia G.", 5, "Premium care without pressure. I felt listened to from the first consultation."]
  ];

  const pricing = [
    ["Consultation & diagnostics", "from EUR 85", "Clinical examination, digital images and a written initial plan."],
    ["Professional hygiene", "from EUR 120", "Guided biofilm therapy and personal prevention guidance."],
    ["Digital Smile Design", "from EUR 360", "Photography, aesthetic planning and preview discussion."],
    ["Whitening", "from EUR 290", "Clinician-guided whitening protocol with shade assessment."],
    ["Porcelain veneer", "from EUR 690", "Final cost depends on material, number of teeth and bite analysis."],
    ["Dental implant", "from EUR 1,250", "Surgical placement only; restoration and diagnostics quoted separately."],
    ["Clear aligners", "from EUR 1,800", "Final plan depends on case complexity and treatment duration."],
    ["Emergency visit", "from EUR 140", "Same-day triage when appointment availability allows."]
  ];

  const faq = [
    ["Are treatment prices final online?", "No. Online pricing shows starting points. A final treatment plan depends on examination, imaging, materials and individual clinical needs."],
    ["Do you treat nervous patients?", "Yes. The team uses clear explanations, unhurried appointments and techniques designed to reduce discomfort. Individual options are discussed during consultation."],
    ["Can I book without calling?", "Yes. The appointment form works on the frontend and shows a confirmation state. A real clinic would connect it to scheduling software."],
    ["Do results vary?", "Yes. Aesthetic and medical outcomes depend on oral health, anatomy, habits and treatment choices. Individual consultation is required."]
  ];

  let appointmentState = { step: 0, service: "", doctor: "", slot: "", name: "", email: "", phone: "" };

  function t(key) {
    return copy[key] || key;
  }

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
  }

  function path(to = "") {
    return `${BASE}/${to}`.replace(/\/$/, "/index.html");
  }

  function renderHeader() {
    const nav = [
      ["home", path()],
      ["services", `${BASE}/services/index.html`],
      ["doctors", `${BASE}/doctors/index.html`],
      ["about", `${BASE}/about/index.html`],
      ["pricing", `${BASE}/pricing/index.html`],
      ["reviews", `${BASE}/reviews/index.html`],
      ["contact", `${BASE}/contact/index.html`]
    ];
    header.innerHTML = `
      <div class="nav-inner">
        <a class="brand" href="${path()}" aria-label="Lucent Dentistry home">
          <span class="brand-mark" aria-hidden="true">L</span>
          <span class="brand-text">
            <span class="brand-name">Lucent Dentistry</span>
            <span class="brand-caption">${t("caption")}</span>
          </span>
        </a>
        <nav class="nav-links" id="navLinks" aria-label="Main navigation">
          ${nav.map(([key, href]) => `<a class="${isActive(key)}" href="${href}">${t(key)}</a>`).join("")}
        </nav>
        <div class="nav-actions">
          <a class="glass-button" href="${BASE}/appointment/index.html">${t("book")}</a>
          <button class="menu-toggle" type="button" data-menu-toggle aria-label="${t("menu")}">☰</button>
        </div>
      </div>
    `;
  }

  function isActive(key) {
    const map = { home: "home", services: "services", doctors: "doctors", about: "about", pricing: "pricing", reviews: "reviews", contact: "contact" };
    if (page === map[key] || (key === "services" && page === "service-detail") || (key === "doctors" && page === "doctor-detail")) {
      return "is-active";
    }
    return "";
  }

  function renderFooter() {
    footer.innerHTML = `
      <div class="footer-grid">
        <div>
          <a class="brand" href="${path()}"><span class="brand-mark">L</span><span class="brand-text"><span class="brand-name">Lucent Dentistry</span><span class="brand-caption">${t("caption")}</span></span></a>
          <p>Advanced dental care, digital precision and a calmer experience from the first consultation to your final result.</p>
          <form class="newsletter-form" data-form="newsletter" novalidate>
            <div class="field">
              <label for="newsletterEmail">Newsletter</label>
              <input id="newsletterEmail" name="email" type="email" placeholder="you@email.com" required />
              <span class="error-text"></span>
            </div>
          </form>
        </div>
        <div><h3>${t("services")}</h3><ul>${services.slice(0, 6).map((service) => `<li><a href="${serviceLink(service)}">${service.title}</a></li>`).join("")}</ul></div>
        <div><h3>${t("contact")}</h3><ul><li>27 Opal Avenue, Wroclaw 50-104</li><li>+48 71 204 18 88</li><li>hello@lucent-dentistry.example</li><li>Mon-Fri 8:00-20:00</li></ul></div>
        <div><h3>Legal</h3><ul><li><a href="${BASE}/privacy/index.html">Privacy Policy</a></li><li><a href="${BASE}/terms/index.html">Terms of Use</a></li><li><a href="../../index.html">Yana Ellis portfolio</a></li></ul></div>
      </div>
      <div class="footer-bottom"><span>© 2026 Lucent Dentistry. Portfolio concept.</span><span>${t("legal")}</span></div>
      <button class="glass-button floating-contact" type="button" data-open-modal>${t("book")}</button>
      <button class="glass-button secondary back-top" type="button" data-back-top aria-label="Back to top">↑</button>
    `;
  }

  function serviceLink(service) {
    return service.id === "digital-smile-design" ? `${BASE}/services/digital-smile-design/index.html` : `${BASE}/services/index.html#${service.id}`;
  }

  function renderHome() {
    root.innerHTML = `
      <section class="page hero">
        <div class="hero-copy reveal">
          <p class="eyebrow">Private dental care / digital precision</p>
          <h1>Dentistry designed around you</h1>
          <p>Advanced dental care, digital precision and a calmer experience from the first consultation to your final result.</p>
          <div class="hero-actions">
            <a class="glass-button" href="${BASE}/appointment/index.html">${t("book")}</a>
            <a class="glass-button secondary" href="${BASE}/services/index.html">${t("explore")}</a>
          </div>
          <div class="trust-grid">
            ${stat("12+", "years of experience")}
            ${stat("8,000+", "happy patients")}
            ${stat("4.9", "average rating")}
            ${stat("15", "expert doctors")}
          </div>
        </div>
        <div class="hero-visual reveal">
          <div class="hero-image-card"><img src="${BASE}/assets/lucent-cover.png" alt="Glassmorphism dental interface with a luminous tooth and appointment cards" /></div>
          <div class="floating-card one"><strong>Next available</strong><span>Today, 17:30 with Dr Park</span></div>
          <div class="floating-card two"><strong>Digital smile preview</strong><span>See proportion, shade and treatment stages before starting.</span></div>
          <div class="floating-card three"><strong>4.9 patient rating</strong><span>Independent review platforms and clinic feedback.</span></div>
        </div>
      </section>
      <section class="page quick-panel form-panel reveal">
        <div class="section-heading"><div><p class="eyebrow">Quick appointment</p><h2>Find a calm time for your first visit</h2></div><p>Send basic details and our coordinator will suggest the most suitable appointment. No server submission is used in this portfolio demo.</p></div>
        ${quickForm("quick")}
      </section>
      <section class="page section reveal">${sectionHeading("Services preview", "Precision care without a clinical coldness", "Browse the treatments most patients ask about first. Each plan is confirmed only after consultation and diagnostics.")}<div class="grid-4">${services.slice(0, 8).map(serviceCard).join("")}</div></section>
      <section class="page section reveal">${sectionHeading("Clinical team", "Specialists who explain before they treat", "A fictional but realistic team structure for a premium private clinic.")}<div class="grid-4">${doctors.map(doctorCard).join("")}</div></section>
      <section class="page section reveal">${sectionHeading("Patient pathway", "A transparent process from first scan to maintenance", "The site makes the treatment journey feel clear instead of overwhelming.")}<ol class="timeline glass-card"><li><strong>Consultation</strong><p>Concerns, medical history, digital images and comfort preferences.</p></li><li><strong>Diagnosis</strong><p>Clear findings, risk level and treatment options without pressure.</p></li><li><strong>Plan</strong><p>Transparent staging, fees and expected visits before work begins.</p></li><li><strong>Care</strong><p>Treatment, review and maintenance plan adapted to the patient.</p></li></ol></section>
      <section class="page section reveal">${sectionHeading("FAQ", "Questions patients ask before booking", "Short answers written with realistic medical caution.")}${faqList()}</section>
    `;
  }

  function renderServices() {
    root.innerHTML = `
      <section class="page page-hero reveal">
        <div><p class="eyebrow">Treatment menu</p><h1 class="page-title">Services</h1><p class="lead">From preventive hygiene to aesthetic smile planning and digitally guided implants, every plan starts with diagnostics and a conversation.</p></div>
        <div class="glass-card"><h3>Included in every first visit</h3><p>Medical history review, intraoral examination, digital images when required, transparent recommendations and comfort planning.</p></div>
      </section>
      <section class="page reveal">
        <div class="toolbar">
          <input type="search" id="serviceSearch" placeholder="${t("search")}" aria-label="${t("search")}" />
          ${["all", "preventive", "aesthetic", "surgical", "orthodontics", "restorative", "urgent"].map((category) => `<button class="filter-button ${category === "all" ? "is-active" : ""}" type="button" data-service-filter="${category}">${category === "all" ? t("all") : title(category)}</button>`).join("")}
        </div>
        <div class="grid-3" id="serviceGrid">${services.map(serviceCard).join("")}</div>
      </section>
    `;
  }

  function renderServiceDetail() {
    const service = services.find((item) => item.id === slug) || services.find((item) => item.featured);
    root.innerHTML = `
      <section class="page page-hero reveal">
        <div><p class="eyebrow">Featured treatment</p><h1 class="page-title">${service.title}</h1><p class="lead">${service.description} Results may vary and every treatment plan depends on clinical examination.</p><div class="hero-actions"><a class="glass-button" href="${BASE}/appointment/index.html">${t("book")}</a><a class="glass-button secondary" href="${BASE}/services/index.html">${t("services")}</a></div></div>
        <div class="glass-card"><span class="card-icon">${service.icon}</span><h3>${service.price}</h3><p>${service.duration}. Includes photography, smile analysis, preview discussion and written recommendations.</p></div>
      </section>
      <section class="page section split reveal">
        <div class="glass-card"><h2>What happens during the visit</h2><ul class="list"><li>Facial and intraoral photographs for proportion analysis.</li><li>Discussion of shade, shape, gum line and bite considerations.</li><li>Digital planning to compare conservative and restorative options.</li><li>Clear next steps, fees and expected appointments before treatment starts.</li></ul></div>
        <div class="before-after glass-card"><h3>Smile preview slider</h3><div class="smile-compare" id="smileCompare" aria-label="Before and after smile preview"></div><input class="range" type="range" min="15" max="85" value="50" data-before-after /><p class="fine-print">Visual preview only. Final result depends on clinical conditions, materials and patient choices.</p></div>
      </section>
      <section class="page section reveal">${sectionHeading("Treatment stages", "Aesthetic planning with clinical restraint", "No dramatic promises. Just a structured way to understand what is possible.")}<ol class="timeline glass-card"><li><strong>Discover</strong><p>We define what feels wrong, what should stay natural and what should change.</p></li><li><strong>Preview</strong><p>Digital references help visualise proportion and shade before irreversible decisions.</p></li><li><strong>Confirm</strong><p>The final plan is confirmed after examination, bite analysis and material choice.</p></li></ol></section>
      <section class="page section reveal">${sectionHeading("FAQ", "Before you start", "Aesthetic dentistry should feel informed, not rushed.")}${faqList()}</section>
    `;
  }

  function renderDoctors() {
    root.innerHTML = `
      <section class="page page-hero reveal"><div><p class="eyebrow">Doctors</p><h1 class="page-title">Clinical team</h1><p class="lead">A fictional multidisciplinary team created for a realistic premium dental clinic website.</p></div><div class="glass-card"><h3>Care coordination</h3><p>Your plan can involve aesthetic, surgical, orthodontic and hygiene specialists without losing one clear point of contact.</p></div></section>
      <section class="page reveal"><div class="grid-4">${doctors.map(doctorCard).join("")}</div></section>
    `;
  }

  function renderDoctorDetail() {
    const doctor = doctors.find((item) => item.id === slug) || doctors[0];
    root.innerHTML = `
      <section class="page page-hero reveal">
        <div><p class="eyebrow">${doctor.role}</p><h1 class="page-title">${doctor.name}</h1><p class="lead">${doctor.bio}</p><div class="hero-actions"><a class="glass-button" href="${BASE}/appointment/index.html">${t("book")}</a><a class="glass-button secondary" href="${BASE}/doctors/index.html">${t("doctors")}</a></div></div>
        <div class="doctor-card"><div class="doctor-portrait">${doctor.initials}</div><h3>${doctor.focus}</h3><div class="meta-row"><span class="tag">${doctor.experience}</span><span class="tag">${doctor.languages}</span></div></div>
      </section>
      <section class="page section grid-3 reveal">
        <div class="glass-card"><h3>Approach</h3><p>Detailed explanations, visual planning and staged treatment options before irreversible decisions are made.</p></div>
        <div class="glass-card"><h3>Focus areas</h3><p>${doctor.focus}. Treatment recommendations depend on examination and patient goals.</p></div>
        <div class="glass-card"><h3>Availability</h3><p>Monday, Wednesday and Friday with selected late consultations for complex planning visits.</p></div>
      </section>
    `;
  }

  function renderAbout() {
    root.innerHTML = `
      <section class="page page-hero reveal"><div><p class="eyebrow">About Lucent</p><h1 class="page-title">A calmer private clinic experience</h1><p class="lead">Lucent Dentistry is positioned as a modern private dental clinic for patients who value clarity, comfort and high-quality aesthetic outcomes.</p></div><div class="glass-card"><h3>Core promise</h3><p>Sterile precision without hospital coldness. Premium service without pressure. Digital planning without hiding the human conversation.</p></div></section>
      <section class="page section grid-3 reveal">${["Digital diagnostics", "Comfort-first visits", "Transparent planning"].map((titleText, index) => `<div class="glass-card"><span class="card-icon">0${index + 1}</span><h3>${titleText}</h3><p>${["Intraoral scans, photography and imaging support clinical decisions and visual explanations.", "Appointments are paced with explanations, breaks when needed and techniques designed to reduce discomfort.", "Fees, stages and alternatives are discussed before treatment starts."][index]}</p></div>`).join("")}</section>
      <section class="page section split reveal"><div class="glass-card"><h2>Clinic standards</h2><ul class="list"><li>Digital records and photography for treatment planning.</li><li>Clear infection-control workflow and instrument traceability.</li><li>Material options explained with longevity and maintenance in mind.</li><li>Follow-up and prevention built into long-term care.</li></ul></div><div class="map-card">Pearl District / Wroclaw</div></section>
    `;
  }

  function renderPricing() {
    root.innerHTML = `
      <section class="page page-hero reveal"><div><p class="eyebrow">Transparent starting points</p><h1 class="page-title">Pricing</h1><p class="lead">These are guide prices. Final treatment costs depend on diagnostics, materials, complexity and the chosen treatment plan.</p></div><div class="glass-card"><h3>Payment options</h3><p>Selected treatment plans may be split into stages. Financing availability would be confirmed individually by a real clinic coordinator.</p></div></section>
      <section class="page reveal"><div class="grid-2">${pricing.map(([name, price, description]) => `<article class="price-card"><h3>${name}</h3><p class="page-title" style="font-size:2.2rem;margin:0 0 10px">${price}</p><p>${description}</p></article>`).join("")}</div></section>
      <section class="page section reveal">${sectionHeading("Payment FAQ", "Clear before commitment", "Dental pricing should never feel like a surprise after the fact.")}${faqList()}</section>
    `;
  }

  function renderReviews() {
    root.innerHTML = `
      <section class="page page-hero reveal"><div><p class="eyebrow">Patient feedback</p><h1 class="page-title">Reviews</h1><p class="lead">A realistic review experience with filters, rating distribution and short video placeholders for a portfolio-ready clinic concept.</p></div><div class="glass-card"><h3>4.9 average rating</h3><div class="rating-bars">${[92, 6, 2, 0, 0].map((width, index) => `<div class="bar"><span>${5 - index}★</span><span class="bar-track"><span class="bar-fill" style="width:${width}%"></span></span><span>${width}%</span></div>`).join("")}</div></div></section>
      <section class="page reveal"><div class="toolbar">${["All", "Aesthetic", "Implants", "Cleaning", "Orthodontics", "Emergency"].map((filter) => `<button class="filter-button ${filter === "All" ? "is-active" : ""}" type="button" data-review-filter="${filter}">${filter}</button>`).join("")}</div><div class="grid-3" id="reviewGrid">${reviewCards(reviews)}</div></section>
      <section class="page section grid-3 reveal"><div class="video-placeholder">Video review / Invisalign</div><div class="video-placeholder">Video review / Implants</div><div class="video-placeholder">Video review / Whitening</div></section>
      <section class="page section form-panel reveal"><h2>Leave a review</h2>${reviewForm()}</section>
    `;
  }

  function renderContact() {
    root.innerHTML = `
      <section class="page page-hero reveal"><div><p class="eyebrow">Contact</p><h1 class="page-title">Visit Lucent Dentistry</h1><p class="lead">A fictional European address, realistic hours and a frontend message form for the portfolio demo.</p></div><div class="glass-card"><h3>Emergency contact</h3><p>+48 71 204 18 99<br />Same-day triage when availability allows.</p></div></section>
      <section class="page split reveal"><div class="glass-card"><h2>Clinic details</h2><ul class="list"><li>27 Opal Avenue, Wroclaw 50-104</li><li>+48 71 204 18 88</li><li>hello@lucent-dentistry.example</li><li>Mon-Fri 8:00-20:00, Sat 9:00-15:00</li><li>Parking available under the Pearl Atrium building.</li><li>Tram lines 3, 10 and 33 stop within 4 minutes.</li></ul></div><div class="map-card">Interactive map placeholder<br />No API key required</div></section>
      <section class="page section form-panel reveal"><h2>Send a message</h2>${contactForm()}</section>
    `;
  }

  function renderAppointment() {
    root.innerHTML = `
      <section class="page page-hero reveal"><div><p class="eyebrow">Appointment</p><h1 class="page-title">Book a consultation</h1><p class="lead">Choose a service, doctor, time and contact details. This frontend demo validates the flow and shows a confirmation number.</p></div><div class="glass-card"><h3>What happens next?</h3><p>A real coordinator would confirm timing, explain preparation and answer questions before the visit.</p></div></section>
      <section class="page appointment-layout reveal"><div class="form-panel" id="appointmentFlow"></div><aside class="glass-card" id="appointmentSummary"></aside></section>
    `;
    renderAppointmentStep();
  }

  function renderLegal(kind) {
    const isPrivacy = kind === "privacy";
    root.innerHTML = `
      <section class="page page-hero reveal"><div><p class="eyebrow">Legal</p><h1 class="page-title">${isPrivacy ? "Privacy Policy" : "Terms of Use"}</h1><p class="lead">${isPrivacy ? "How this portfolio demo handles form data and local interface preferences." : "General terms for using this fictional clinic website concept."}</p></div><div class="glass-card"><h3>Portfolio demo</h3><p>No real clinic, no real medical service and no real server submission are connected.</p></div></section>
      <section class="page split reveal">
        <div class="glass-card"><h2>${isPrivacy ? "Data handling" : "Website use"}</h2><ul class="list"><li>Forms validate information in the browser and show success states.</li><li>Language preference may be stored locally in the browser.</li><li>No medical records, payments or patient accounts are created.</li><li>Content is fictional and should not be treated as medical advice.</li></ul></div>
        <div class="glass-card"><h2>${isPrivacy ? "Your choices" : "Medical limitations"}</h2><p>${isPrivacy ? "A production clinic site would connect forms to secure systems, provide consent records and follow applicable privacy law." : "Treatment descriptions are general. Individual diagnosis, suitability and fees require examination by a qualified clinician."}</p></div>
      </section>
    `;
  }

  function renderNotFound() {
    root.innerHTML = `<section class="page page-hero reveal"><div><p class="eyebrow">404</p><h1 class="page-title">This page drifted out of focus</h1><p class="lead">The page may have moved, but the clinic navigation is still ready.</p><div class="hero-actions"><a class="glass-button" href="${path()}">${t("home")}</a><a class="glass-button secondary" href="${BASE}/services/index.html">${t("services")}</a></div></div><div class="glass-card"><h3>Lucent Dentistry</h3><p>Return to the main experience or continue exploring treatments.</p></div></section>`;
  }

  function stat(value, label) {
    return `<div class="stat-card"><strong>${value}</strong><span>${label}</span></div>`;
  }

  function sectionHeading(kicker, titleText, body) {
    return `<div class="section-heading"><div><p class="eyebrow">${kicker}</p><h2>${titleText}</h2></div><p>${body}</p></div>`;
  }

  function serviceCard(service) {
    return `<article class="service-card" id="${service.id}" data-category="${service.category}" data-title="${esc(service.title.toLowerCase())}"><span class="card-icon">${service.icon}</span><h3>${service.title}</h3><p>${service.description}</p><div class="meta-row"><span class="tag">${service.price}</span><span class="tag">${service.duration}</span></div><a class="text-link" href="${serviceLink(service)}">${t("learnMore")} →</a></article>`;
  }

  function doctorCard(doctor) {
    return `<article class="doctor-card"><div class="doctor-portrait">${doctor.initials}</div><h3>${doctor.name}</h3><p><strong>${doctor.role}</strong></p><p>${doctor.focus}</p><div class="meta-row"><span class="tag">${doctor.experience}</span><span class="tag">${doctor.languages}</span></div><a class="text-link" href="${doctor.id === "elena-park" ? `${BASE}/doctors/elena-park/index.html` : `${BASE}/doctors/index.html#${doctor.id}`}">${t("viewProfile")} →</a></article>`;
  }

  function reviewCards(items) {
    return items.map(([category, name, rating, text]) => `<article class="review-card" data-category="${category}"><div class="meta-row"><span class="tag">${category}</span><span class="tag">${"★".repeat(rating)}</span></div><h3>${name}</h3><p>${text}</p></article>`).join("");
  }

  function faqList() {
    return `<div class="faq-list">${faq.map(([question, answer]) => `<article class="faq-item"><button class="faq-question" type="button" aria-expanded="false"><span>${question}</span><span>+</span></button><div class="faq-answer">${answer}</div></article>`).join("")}</div>`;
  }

  function quickForm(type) {
    return `<form class="form-grid" data-form="${type}" novalidate>
      ${field("Name", "name", "text", "Maya Novak", "span-2")}
      ${field("Phone", "phone", "tel", "+48 600 000 000", "span-2")}
      ${field("Email", "email", "email", "you@email.com", "span-2")}
      <div class="field span-2"><label for="${type}Service">Service</label><select id="${type}Service" name="service" required><option value="">Select service</option>${services.map((service) => `<option>${service.title}</option>`).join("")}</select><span class="error-text"></span></div>
      ${field("Preferred date", "date", "date", "", "span-2")}
      <div class="field span-2"><label>&nbsp;</label><button class="glass-button" type="submit">${type === "quick" ? t("find") : t("submit")}</button></div>
    </form>`;
  }

  function contactForm() {
    return `<form class="form-grid" data-form="contact" novalidate>${field("Name", "name", "text", "Your name", "span-3")}${field("Email", "email", "email", "you@email.com", "span-3")}${field("Phone", "phone", "tel", "+48 600 000 000", "span-3")}<div class="field span-3"><label for="topic">Topic</label><select id="topic" name="topic" required><option value="">Choose topic</option><option>Appointment question</option><option>Treatment plan</option><option>Pricing</option><option>Emergency</option></select><span class="error-text"></span></div><div class="field span-6"><label for="message">Message</label><textarea id="message" name="message" placeholder="How can we help?" required></textarea><span class="error-text"></span></div><div class="field span-6"><button class="glass-button" type="submit">${t("submit")}</button></div></form>`;
  }

  function reviewForm() {
    return `<form class="form-grid" data-form="review" novalidate>${field("Name", "name", "text", "Your name", "span-2")}<div class="field span-2"><label for="reviewService">Service</label><select id="reviewService" name="service" required><option value="">Select service</option>${services.slice(0, 8).map((service) => `<option>${service.title}</option>`).join("")}</select><span class="error-text"></span></div><div class="field span-2"><label for="reviewRating">Rating</label><select id="reviewRating" name="rating" required><option value="">Select rating</option><option>5</option><option>4</option><option>3</option></select><span class="error-text"></span></div><div class="field span-6"><label for="reviewText">Review</label><textarea id="reviewText" name="review" required placeholder="Share your experience"></textarea><span class="error-text"></span></div><div class="field span-6"><button class="glass-button" type="submit">Add review</button></div></form>`;
  }

  function field(label, name, type, placeholder, className = "") {
    return `<div class="field ${className}"><label for="${name}">${label}</label><input id="${name}" name="${name}" type="${type}" placeholder="${placeholder}" ${type !== "date" ? "required" : "required"} /><span class="error-text"></span></div>`;
  }

  function title(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  function renderAppointmentStep() {
    const flow = document.querySelector("#appointmentFlow");
    const summary = document.querySelector("#appointmentSummary");
    if (!flow || !summary) return;
    const steps = ["Service", "Doctor", "Date & time", "Contact details", "Confirm"];
    const stepper = `<div class="stepper">${steps.map((_, index) => `<span class="step-dot ${index === appointmentState.step ? "is-active" : index < appointmentState.step ? "is-complete" : ""}"></span>`).join("")}</div>`;
    let content = "";
    if (appointmentState.step === 0) {
      content = `<h2>Choose a service</h2><div class="choice-grid">${services.slice(0, 8).map((service) => choice(service.title, "service", service.title, appointmentState.service)).join("")}</div>`;
    } else if (appointmentState.step === 1) {
      content = `<h2>Choose a doctor</h2><div class="choice-grid">${["Any available doctor", ...doctors.map((doctor) => doctor.name)].map((name) => choice(name, "doctor", name, appointmentState.doctor)).join("")}</div>`;
    } else if (appointmentState.step === 2) {
      content = `<h2>Choose a time</h2><div class="choice-grid">${["Mon 12 Aug / 10:00", "Tue 13 Aug / 15:30", "Wed 14 Aug / 17:30", "Fri 16 Aug / 09:20"].map((slot) => choice(slot, "slot", slot, appointmentState.slot)).join("")}</div>`;
    } else if (appointmentState.step === 3) {
      content = `<h2>Contact details</h2><div class="form-grid">${field("Name", "apptName", "text", "Your name", "span-3")}${field("Email", "apptEmail", "email", "you@email.com", "span-3")}${field("Phone", "apptPhone", "tel", "+48 600 000 000", "span-3")}</div>`;
    } else {
      content = `<h2>Confirm request</h2><ul class="list"><li>Service: ${appointmentState.service || "Not selected"}</li><li>Doctor: ${appointmentState.doctor || "Any available doctor"}</li><li>Time: ${appointmentState.slot || "Not selected"}</li><li>Contact: ${appointmentState.name || "Not added"}</li></ul><p class="fine-print">This frontend demo does not create a real appointment. A real clinic would confirm availability directly.</p>`;
    }
    flow.innerHTML = `${stepper}${content}<div class="hero-actions">${appointmentState.step > 0 ? `<button class="glass-button secondary" type="button" data-step-back>${t("back")}</button>` : ""}<button class="glass-button" type="button" data-step-next>${appointmentState.step === 4 ? t("confirm") : t("next")}</button></div>`;
    summary.innerHTML = `<h3>Request summary</h3><ul class="list"><li>${appointmentState.service || "Choose a service"}</li><li>${appointmentState.doctor || "Doctor preference"}</li><li>${appointmentState.slot || "Appointment time"}</li><li>${appointmentState.name || "Contact details"}</li></ul>`;
  }

  function choice(label, key, value, selected) {
    return `<button class="choice ${selected === value ? "is-selected" : ""}" type="button" data-choice-key="${key}" data-choice-value="${esc(value)}"><strong>${label}</strong></button>`;
  }

  function route() {
    renderHeader();
    renderFooter();
    if (page === "home") renderHome();
    if (page === "services") renderServices();
    if (page === "service-detail") renderServiceDetail();
    if (page === "doctors") renderDoctors();
    if (page === "doctor-detail") renderDoctorDetail();
    if (page === "about") renderAbout();
    if (page === "pricing") renderPricing();
    if (page === "reviews") renderReviews();
    if (page === "contact") renderContact();
    if (page === "appointment") renderAppointment();
    if (page === "privacy") renderLegal("privacy");
    if (page === "terms") renderLegal("terms");
    if (page === "not-found") renderNotFound();
    bindInteractions();
    revealVisible();
  }

  function bindInteractions() {
    document.querySelector("[data-menu-toggle]")?.addEventListener("click", () => document.querySelector("#navLinks")?.classList.toggle("is-open"));
    document.querySelectorAll("[data-form]").forEach((form) => form.addEventListener("submit", handleForm));
    document.querySelectorAll(".faq-question").forEach((button) => button.addEventListener("click", () => toggleFaq(button)));
    document.querySelector("[data-before-after]")?.addEventListener("input", (event) => document.querySelector("#smileCompare")?.style.setProperty("--position", `${event.target.value}%`));
    document.querySelectorAll("[data-service-filter]").forEach((button) => button.addEventListener("click", () => filterServices(button)));
    document.querySelector("#serviceSearch")?.addEventListener("input", () => filterServices());
    document.querySelectorAll("[data-review-filter]").forEach((button) => button.addEventListener("click", () => filterReviews(button.dataset.reviewFilter, button)));
    document.querySelectorAll("[data-open-modal]").forEach((button) => button.addEventListener("click", openModal));
    document.querySelector("[data-back-top]")?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    document.querySelectorAll("[data-choice-key]").forEach((button) => button.addEventListener("click", () => {
      appointmentState[button.dataset.choiceKey] = button.dataset.choiceValue;
      renderAppointmentStep();
      bindInteractions();
    }));
    document.querySelector("[data-step-back]")?.addEventListener("click", () => {
      appointmentState.step = Math.max(0, appointmentState.step - 1);
      renderAppointmentStep();
      bindInteractions();
    });
    document.querySelector("[data-step-next]")?.addEventListener("click", handleAppointmentNext);
  }

  function handleAppointmentNext() {
    if (appointmentState.step === 0 && !appointmentState.service) return showToast("Choose a service first.");
    if (appointmentState.step === 1 && !appointmentState.doctor) appointmentState.doctor = "Any available doctor";
    if (appointmentState.step === 2 && !appointmentState.slot) return showToast("Choose an appointment time.");
    if (appointmentState.step === 3) {
      const name = document.querySelector("#apptName");
      const email = document.querySelector("#apptEmail");
      const phone = document.querySelector("#apptPhone");
      const valid = [name, email, phone].every(validateField);
      if (!valid) return;
      appointmentState.name = name.value.trim();
      appointmentState.email = email.value.trim();
      appointmentState.phone = phone.value.trim();
    }
    if (appointmentState.step === 4) {
      const number = `LD-${Math.floor(10000 + Math.random() * 89999)}`;
      document.querySelector("#appointmentFlow").innerHTML = `<div class="glass-card"><p class="eyebrow">Request received</p><h2>${number}</h2><p>${t("success")}</p><a class="glass-button" href="${BASE}/index.html">${t("home")}</a></div>`;
      showToast(t("success"));
      return;
    }
    appointmentState.step += 1;
    renderAppointmentStep();
    bindInteractions();
  }

  function handleForm(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const valid = Array.from(form.querySelectorAll("input, select, textarea")).filter((fieldElement) => fieldElement.hasAttribute("required")).every(validateField);
    if (!valid) return;
    if (form.dataset.form === "review") {
      const name = form.querySelector("[name='name']").value.trim();
      const service = form.querySelector("[name='service']").value.trim().split(" ")[0];
      const rating = Number(form.querySelector("[name='rating']").value || 5);
      const text = form.querySelector("[name='review']").value.trim();
      reviews.unshift([service, name, rating, text]);
      const reviewGrid = document.querySelector("#reviewGrid");
      if (reviewGrid) reviewGrid.innerHTML = reviewCards(reviews);
    }
    form.reset();
    showToast(form.dataset.form === "newsletter" ? t("newsletter") : t("success"));
  }

  function validateField(fieldElement) {
    const error = fieldElement.closest(".field")?.querySelector(".error-text");
    let message = "";
    if (!fieldElement.value.trim()) message = t("required");
    if (!message && fieldElement.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldElement.value)) message = t("email");
    if (!message && fieldElement.type === "tel" && fieldElement.value.trim().length < 6) message = t("phone");
    if (error) error.textContent = message;
    fieldElement.setAttribute("aria-invalid", message ? "true" : "false");
    return !message;
  }

  function toggleFaq(button) {
    const item = button.closest(".faq-item");
    const open = !item.classList.contains("is-open");
    item.classList.toggle("is-open", open);
    button.setAttribute("aria-expanded", String(open));
    button.querySelector("span:last-child").textContent = open ? "−" : "+";
  }

  function filterServices(activeButton) {
    if (activeButton) {
      document.querySelectorAll("[data-service-filter]").forEach((button) => button.classList.toggle("is-active", button === activeButton));
    }
    const active = document.querySelector("[data-service-filter].is-active")?.dataset.serviceFilter || "all";
    const query = document.querySelector("#serviceSearch")?.value.toLowerCase().trim() || "";
    document.querySelectorAll("#serviceGrid .service-card").forEach((card) => {
      const categoryMatch = active === "all" || card.dataset.category === active;
      const textMatch = !query || card.dataset.title.includes(query);
      card.hidden = !(categoryMatch && textMatch);
    });
  }

  function filterReviews(filter, activeButton) {
    document.querySelectorAll("[data-review-filter]").forEach((button) => button.classList.toggle("is-active", button === activeButton));
    document.querySelectorAll("#reviewGrid .review-card").forEach((card) => {
      card.hidden = filter !== "All" && card.dataset.category !== filter;
    });
  }

  function openModal() {
    modalRoot.innerHTML = `<div class="modal-backdrop" data-modal-backdrop><div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle"><div class="modal-header"><div><p class="eyebrow">Quick request</p><h2 id="modalTitle">Find an appointment</h2></div><button class="icon-button" type="button" data-close-modal aria-label="${t("close")}">×</button></div>${quickForm("modal")}</div></div>`;
    const close = () => (modalRoot.innerHTML = "");
    modalRoot.querySelector("[data-close-modal]")?.addEventListener("click", close);
    modalRoot.querySelector("[data-modal-backdrop]")?.addEventListener("click", (event) => {
      if (event.target.dataset.modalBackdrop !== undefined) close();
    });
    modalRoot.querySelector("[data-form]")?.addEventListener("submit", (event) => {
      handleForm(event);
      if (!event.currentTarget.querySelector("[aria-invalid='true']")) setTimeout(close, 250);
    });
    modalRoot.querySelector("input")?.focus();
  }

  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    toastRegion.appendChild(toast);
    window.setTimeout(() => toast.remove(), 3600);
  }

  function revealVisible() {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modalRoot.innerHTML) modalRoot.innerHTML = "";
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
    document.querySelector("[data-back-top]")?.classList.toggle("is-visible", window.scrollY > 600);
  }, { passive: true });

  route();
})();
