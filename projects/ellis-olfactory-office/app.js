const scentFamilies = {
  woody: {
    color: "rgba(64, 49, 42, 0.52)",
    accent: "rgba(177, 122, 72, 0.42)",
    speed: 0.18,
    drift: 0.34,
    density: 1.05,
    curl: 0.003
  },
  citrus: {
    color: "rgba(214, 151, 79, 0.46)",
    accent: "rgba(248, 243, 235, 0.6)",
    speed: 0.62,
    drift: 0.18,
    density: 0.82,
    curl: 0.008
  },
  floral: {
    color: "rgba(143, 116, 137, 0.42)",
    accent: "rgba(248, 213, 226, 0.42)",
    speed: 0.25,
    drift: 0.52,
    density: 1.16,
    curl: 0.006
  },
  mineral: {
    color: "rgba(118, 136, 132, 0.42)",
    accent: "rgba(226, 237, 229, 0.5)",
    speed: 0.2,
    drift: 0.16,
    density: 0.74,
    curl: 0.002
  },
  smoky: {
    color: "rgba(72, 57, 55, 0.5)",
    accent: "rgba(91, 38, 48, 0.35)",
    speed: 0.16,
    drift: 0.68,
    density: 1.22,
    curl: 0.011
  },
  musk: {
    color: "rgba(222, 204, 188, 0.5)",
    accent: "rgba(143, 168, 148, 0.36)",
    speed: 0.14,
    drift: 0.44,
    density: 1.34,
    curl: 0.004
  }
};

const canvas = document.querySelector("#scentCanvas");
const ctx = canvas.getContext("2d");
const cursor = document.querySelector("#customCursor");
const cursorLabel = document.querySelector("#cursorLabel");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let activeFamily = "musk";
let width = 0;
let height = 0;
let particles = [];
const pointer = { x: -9999, y: -9999, active: false };

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  createParticles();
}

function createParticles() {
  const count = Math.round(Math.min(210, Math.max(86, width / 8)) * scentFamilies[activeFamily].density);
  particles = Array.from({ length: count }, (_, index) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    size: 1 + Math.random() * 4,
    phase: index * 0.37 + Math.random() * 8,
    opacity: 0.26 + Math.random() * 0.42
  }));
}

function setScentFamily(family) {
  if (!scentFamilies[family]) return;
  activeFamily = family;
  if (!reduceMotion) {
    createParticles();
  }
}

function drawScentField(time = 0) {
  const profile = scentFamilies[activeFamily];
  ctx.clearRect(0, 0, width, height);
  ctx.globalCompositeOperation = "source-over";

  const gradient = ctx.createRadialGradient(width * 0.52, height * 0.45, 40, width * 0.52, height * 0.45, width * 0.74);
  gradient.addColorStop(0, profile.accent);
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  if (reduceMotion) return;

  ctx.globalCompositeOperation = "lighter";
  particles.forEach((particle) => {
    const curl = Math.sin(time * profile.curl + particle.phase) * profile.drift;
    const dx = particle.x - pointer.x;
    const dy = particle.y - pointer.y;
    const distance = Math.hypot(dx, dy);

    if (pointer.active && distance < 170) {
      const force = (170 - distance) / 170;
      particle.vx += (dx / Math.max(distance, 1)) * force * 0.42;
      particle.vy += (dy / Math.max(distance, 1)) * force * 0.42;
    }

    particle.vx += Math.cos(time * 0.0003 + particle.phase) * profile.speed * 0.012 + curl * 0.008;
    particle.vy += Math.sin(time * 0.00025 + particle.phase) * profile.speed * 0.012;
    particle.vx *= 0.985;
    particle.vy *= 0.985;
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < -20) particle.x = width + 20;
    if (particle.x > width + 20) particle.x = -20;
    if (particle.y < -20) particle.y = height + 20;
    if (particle.y > height + 20) particle.y = -20;

    const radius = particle.size + Math.abs(curl) * 2.5;
    ctx.beginPath();
    ctx.fillStyle = profile.color.replace("0.52", `${particle.opacity}`).replace("0.5", `${particle.opacity}`);
    ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(drawScentField);
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("pointermove", (event) => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
  pointer.active = true;
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});

window.addEventListener("pointerleave", () => {
  pointer.active = false;
  cursor.style.opacity = "0";
});

window.addEventListener("pointerenter", () => {
  cursor.style.opacity = "1";
});

document.addEventListener("pointerover", (event) => {
  const interactive = event.target.closest("a, button, input, textarea, select, .colour-field, .blend-zone");
  cursor.classList.toggle("is-active", Boolean(interactive));
  cursorLabel.textContent = interactive?.dataset.cursor || (interactive ? "OPEN" : "MOVE");
});

resizeCanvas();
drawScentField();

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target.dataset.scent) {
        setScentFamily(entry.target.dataset.scent);
      }
    });
  },
  { threshold: 0.35 }
);

document.querySelectorAll("[data-scent]").forEach((section) => sectionObserver.observe(section));

const materialOutput = document.querySelector("#materialOutput");
document.querySelectorAll(".material-orbit").forEach((button) => {
  button.addEventListener("mouseenter", () => activateMaterial(button));
  button.addEventListener("focus", () => activateMaterial(button));
  button.addEventListener("click", () => activateMaterial(button));
});

function activateMaterial(button) {
  document.querySelectorAll(".material-orbit").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  setScentFamily(button.dataset.family);
  const tone = button.dataset.tone;
  const descriptions = {
    CEDAR: "CEDAR changes the field: slower, grounded, structured.",
    IRIS: "IRIS softens the field into powder, skin and pale diffusion.",
    MINERAL: "MINERAL thins the field: cold, sparse and exact.",
    INCENSE: "INCENSE curls the field into smoke-like trails.",
    MUSK: "MUSK blurs the field until the edges almost disappear."
  };
  materialOutput.textContent = descriptions[tone] || descriptions.CEDAR;
}

const scents = {
  "after-rain": {
    number: "ELLIS / 01",
    name: "AFTER RAIN",
    family: "mineral",
    className: "Mineral / Woody / Cold",
    description: "Wet stone. Juniper. A room with an open window after summer rain.",
    impression: "Cold stone after summer rain. An open window. Wet cedar. Air before the room warms again.",
    layers: {
      top: "Bergamot / Juniper / Ozone",
      heart: "Iris / Wet Stone Accord",
      base: "Cedar / Vetiver / White Musk"
    },
    stages: [
      ["00:00", "Bergamot / Ozone / Juniper", "Sharp opening", "Fast dispersion. Cold air. Bright mineral pressure."],
      ["00:15", "Juniper / Rain / Green Stem", "Clean fracture", "A brief green line crosses the field and disappears."],
      ["01:00", "Iris / Wet Stone Accord / Vetiver", "Mineral heart", "The field becomes colder, quieter and more architectural."],
      ["04:00", "Cedar / White Musk / Amber Mineral", "Grounded body", "Particles fall lower and move with heavier gravity."],
      ["08:00", "Vetiver / Dry Musk / Stone Dust", "Afterimage", "Only the base remains, close to skin and almost silent."]
    ],
    formula: [
      ["ISO E SUPER", "18.4%"],
      ["AMBROXAN", "12.7%"],
      ["HEDIONE", "11.2%"],
      ["CEDRAMBER", "6.8%"],
      ["MUSK ACCORD", "5.4%"],
      ["MINERAL ACCORD", "4.1%"],
      ["OTHER", "41.4%"]
    ]
  },
  "quiet-fire": {
    number: "ELLIS / 02",
    name: "QUIET FIRE",
    family: "smoky",
    className: "Smoky / Amber / Dry",
    description: "Warm ash. Black tea. The final glow of a room after everyone leaves.",
    impression: "A fireplace no longer burning. Resin on the fingers. Tea cooling beside dark wool.",
    layers: {
      top: "Pink Pepper / Black Tea / Dry Air",
      heart: "Incense / Labdanum / Warm Ash",
      base: "Amber / Birch Tar / Cedar"
    },
    stages: [
      ["00:00", "Pink Pepper / Black Tea", "Bright smoke", "Sharp heat enters and immediately softens."],
      ["00:15", "Incense / Warm Ash", "Curling body", "The field forms slow dark ribbons."],
      ["01:00", "Labdanum / Cedar / Dry Resin", "Resin pressure", "The movement becomes viscous and deliberate."],
      ["04:00", "Amber / Birch Tar / Musk", "Low flame", "Particles gather close to the bottom of the screen."],
      ["08:00", "Cedar Smoke / Skin Amber", "After-warmth", "Only a private warmth remains."]
    ],
    formula: [
      ["LABDANUM", "16.2%"],
      ["CEDRAMBER", "14.1%"],
      ["BIRCH TAR TRACE", "1.6%"],
      ["AMBER CORE", "19.8%"],
      ["TEA ABSOLUTE", "4.2%"],
      ["DRY WOOD BASE", "10.9%"],
      ["OTHER", "33.2%"]
    ]
  },
  "skin-02": {
    number: "ELLIS / 03",
    name: "SKIN / 02",
    family: "musk",
    className: "Musk / Iris / Soft",
    description: "Clean cotton. Pale powder. Skin still warm from sleep.",
    impression: "Something worn close to the body. Not sweetness. Not soap. Presence.",
    layers: {
      top: "Aldehydes / Rice Powder / Air",
      heart: "Iris / Cotton / White Tea",
      base: "Soft Musk / Ambrette / Skin Accord"
    },
    stages: [
      ["00:00", "Aldehydes / Rice Powder", "White static", "A clean veil appears with almost no weight."],
      ["00:15", "Iris / Cotton", "Soft surface", "The field spreads outward like fabric breathing."],
      ["01:00", "White Tea / Ambrette", "Skin contact", "Edges blur and the centre warms."],
      ["04:00", "Soft Musk / Skin Accord", "Private diffusion", "The scent stays close and almost invisible."],
      ["08:00", "Ambrette / Warm Cotton", "Trace", "A faint textile memory remains."]
    ],
    formula: [
      ["WHITE MUSK", "22.4%"],
      ["AMBRETTE ACCORD", "8.7%"],
      ["IRIS MODIFIER", "6.4%"],
      ["HEDIONE", "12.5%"],
      ["ALDEHYDE TRACE", "1.8%"],
      ["COTTON ACCORD", "7.2%"],
      ["OTHER", "41.0%"]
    ]
  },
  "black-fig": {
    number: "ELLIS / 04",
    name: "BLACK FIG",
    family: "floral",
    className: "Fruit / Leaf / Leather",
    description: "Fig leaf cut open. Dark fruit. Leather held in warm shade.",
    impression: "Green milk from the stem, a black fruit skin, and the quiet heat of leather.",
    layers: {
      top: "Fig Leaf / Galbanum / Green Tea",
      heart: "Black Fig / Iris / Sap",
      base: "Leather / Cedar / Labdanum"
    },
    stages: [
      ["00:00", "Fig Leaf / Galbanum", "Green incision", "The field breaks into sharp green fragments."],
      ["00:15", "Sap / Green Tea", "Bitter shade", "Movement becomes leafy and cool."],
      ["01:00", "Black Fig / Iris", "Dark fruit", "A soft burgundy density expands from the centre."],
      ["04:00", "Leather / Cedar", "Warm structure", "The field settles into dry shade."],
      ["08:00", "Labdanum / Fig Skin", "Dark residue", "Fruit is gone. Texture remains."]
    ],
    formula: [
      ["FIG LEAF ACCORD", "13.2%"],
      ["GALBANUM", "3.1%"],
      ["BLACK FRUIT BASE", "9.8%"],
      ["LEATHER ACCORD", "8.5%"],
      ["CEDAR", "10.2%"],
      ["LABDANUM", "5.4%"],
      ["OTHER", "49.8%"]
    ]
  },
  "cold-library": {
    number: "ELLIS / 05",
    name: "COLD LIBRARY",
    family: "woody",
    className: "Paper / Cedar / Rain",
    description: "A private library before the heat comes on. Paper, leather, rain at the windows.",
    impression: "Old paper in cold air. Waxed wood. A leather chair that remembers winter coats.",
    layers: {
      top: "Rain / Dust / Cold Air",
      heart: "Old Paper / Wax / Leather",
      base: "Cedar / Vetiver / Coal Smoke"
    },
    stages: [
      ["00:00", "Rain / Cold Air", "Window opening", "The field thins and lifts."],
      ["00:15", "Dust / Wax", "Dry surface", "Small particles move like paper dust in light."],
      ["01:00", "Old Paper / Leather", "Interior body", "The field becomes warmer and more textured."],
      ["04:00", "Cedar / Vetiver", "Shelving", "Movement slows into vertical structure."],
      ["08:00", "Coal Smoke / Dry Wood", "Closed room", "Only a dark architectural base remains."]
    ],
    formula: [
      ["CEDAR", "18.9%"],
      ["VETIVER", "7.4%"],
      ["PAPER ACCORD", "10.8%"],
      ["LEATHER TRACE", "3.8%"],
      ["WAX ABSOLUTE", "2.6%"],
      ["MINERAL RAIN", "4.9%"],
      ["OTHER", "51.6%"]
    ]
  },
  "hotel-2am": {
    number: "ELLIS / 06",
    name: "HOTEL AT 2AM",
    family: "smoky",
    className: "Tea / Smoke / Linen",
    description: "White sheets. Corridor air. Black tea, smoke and the anonymous luxury of silence.",
    impression: "A room number you forget, curtains still warm from the city, tea left untouched.",
    layers: {
      top: "Linen / Aldehydes / Cardamom",
      heart: "Black Tea / Violet Smoke",
      base: "Musk / Sandalwood / Warm Dust"
    },
    stages: [
      ["00:00", "Linen / Cardamom", "Clean signal", "The field opens crisp and dry."],
      ["00:15", "Black Tea / Violet Smoke", "Low corridor", "Soft smoke crosses the centre line."],
      ["01:00", "Warm Dust / Musk", "Stayed-in air", "Particles soften into a private atmosphere."],
      ["04:00", "Sandalwood / Tea", "Quiet luxury", "The scent becomes polished and low."],
      ["08:00", "Musk / Dust / Sheet Cotton", "Room trace", "The field fades into soft textile residue."]
    ],
    formula: [
      ["BLACK TEA", "6.9%"],
      ["CLEAN LINEN", "9.7%"],
      ["SANDALWOOD", "12.4%"],
      ["MUSK BASE", "18.2%"],
      ["CARDAMOM TRACE", "1.7%"],
      ["VIOLET SMOKE", "2.8%"],
      ["OTHER", "48.3%"]
    ]
  }
};

const scentRows = document.querySelectorAll(".scent-row");
const scentTimeline = document.querySelector("#scentTimeline");
let currentScent = scents["after-rain"];

function renderScentDetail(scent) {
  currentScent = scent;
  document.querySelector("#detailNumber").textContent = scent.number;
  document.querySelector("#detailName").textContent = scent.name;
  document.querySelector("#detailClass").textContent = scent.className;
  document.querySelector("#detailDescription").textContent = scent.description;
  document.querySelector("#topNotes").textContent = scent.layers.top;
  document.querySelector("#heartNotes").textContent = scent.layers.heart;
  document.querySelector("#baseNotes").textContent = scent.layers.base;
  document.querySelector("#impressionMode").innerHTML = `<p>${scent.impression}</p>`;
  document.querySelector("#formulaMode").innerHTML = scent.formula
    .map(([name, value]) => `<p><span>${name}</span><b>${value}</b></p>`)
    .join("");
  scentTimeline.value = "0";
  renderStage(0);
  setScentFamily(scent.family);
}

function renderStage(index) {
  const stage = currentScent.stages[index];
  document.querySelector("#stageTime").textContent = stage[0];
  document.querySelector("#stageNotes").textContent = stage[1];
  document.querySelector("#stageBehaviour").textContent = stage[2];
  document.querySelector("#stageMood").textContent = stage[3];
}

scentRows.forEach((row) => {
  row.addEventListener("click", () => {
    scentRows.forEach((item) => item.classList.remove("active"));
    row.classList.add("active");
    renderScentDetail(scents[row.dataset.scentId]);
  });
});

scentTimeline.addEventListener("input", () => renderStage(Number(scentTimeline.value)));

document.querySelectorAll("[data-mode]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-mode]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelectorAll(".mode-content").forEach((content) => content.classList.remove("active"));
    document.querySelector(`#${button.dataset.mode}Mode`).classList.add("active");
  });
});

const materialProfiles = {
  CEDAR: { cold: 38, sweet: 28, dense: 70, space: 64, family: "woody", tags: ["DRY", "WOODY", "STRUCTURED"] },
  IRIS: { cold: 48, sweet: 42, dense: 44, space: 38, family: "floral", tags: ["POWDER", "PALE", "SKIN"] },
  LEATHER: { cold: 32, sweet: 34, dense: 78, space: 56, family: "woody", tags: ["DARK", "TEXTILE", "DRY"] },
  AMBER: { cold: 22, sweet: 68, dense: 76, space: 42, family: "musk", tags: ["WARM", "RESINOUS", "SOFT"] },
  FIG: { cold: 54, sweet: 62, dense: 50, space: 58, family: "floral", tags: ["GREEN", "FRUIT", "MILKY"] },
  TOBACCO: { cold: 26, sweet: 66, dense: 82, space: 52, family: "smoky", tags: ["DARK", "SWEET", "DRY"] },
  MINERAL: { cold: 78, sweet: 18, dense: 30, space: 72, family: "mineral", tags: ["COLD", "PRECISE", "STONE"] },
  INCENSE: { cold: 36, sweet: 40, dense: 72, space: 82, family: "smoky", tags: ["SMOKY", "RITUAL", "SHADOW"] },
  NEROLI: { cold: 62, sweet: 48, dense: 24, space: 70, family: "citrus", tags: ["BRIGHT", "GREEN", "AIR"] },
  MUSK: { cold: 44, sweet: 50, dense: 58, space: 28, family: "musk", tags: ["SKIN", "SOFT", "DIFFUSED"] },
  TEA: { cold: 58, sweet: 22, dense: 36, space: 62, family: "mineral", tags: ["BITTER", "QUIET", "CLEAR"] },
  SAFFRON: { cold: 24, sweet: 54, dense: 66, space: 48, family: "smoky", tags: ["WARM", "METALLIC", "SPICE"] }
};

const blend = new Map();
const bank = document.querySelector("#ingredientBank");
const blendZone = document.querySelector("#blendZone");
const formulaLines = document.querySelector("#formulaLines");
const profileName = document.querySelector("#profileName");
const profileScales = document.querySelector("#profileScales");
const savedFormula = document.querySelector("#savedFormula");

bank.querySelectorAll("button").forEach((button) => {
  button.draggable = true;
  button.addEventListener("click", () => addMaterial(button.dataset.material));
  button.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", button.dataset.material);
  });
});

blendZone.addEventListener("dragover", (event) => event.preventDefault());
blendZone.addEventListener("drop", (event) => {
  event.preventDefault();
  addMaterial(event.dataTransfer.getData("text/plain"));
});

function addMaterial(material) {
  if (!materialProfiles[material]) return;
  if (!blend.has(material)) {
    blend.set(material, blend.size ? 30 : 100);
    rebalance(material);
  }
  setScentFamily(materialProfiles[material].family);
  renderBlend();
}

function rebalance(newMaterial) {
  const total = Array.from(blend.values()).reduce((sum, value) => sum + value, 0);
  if (total <= 100) return;
  const overflow = total - 100;
  const others = Array.from(blend.keys()).filter((key) => key !== newMaterial);
  others.forEach((key) => {
    blend.set(key, Math.max(5, blend.get(key) - overflow / Math.max(others.length, 1)));
  });
}

function normalizedBlend() {
  const total = Array.from(blend.values()).reduce((sum, value) => sum + Number(value), 0) || 1;
  return Array.from(blend.entries()).map(([material, value]) => [material, Math.round((Number(value) / total) * 100)]);
}

function renderBlend() {
  const entries = normalizedBlend();
  if (!entries.length) {
    formulaLines.innerHTML = '<p class="empty-formula">No materials selected yet.</p>';
    profileName.textContent = "AIR / WAITING";
    savedFormula.textContent = "";
    updateScales({ cold: 45, sweet: 50, dense: 35, space: 60 });
    return;
  }

  formulaLines.innerHTML = entries
    .map(
      ([material, percent]) => `
        <div class="formula-line">
          <label for="blend-${material}">${material}</label>
          <input id="blend-${material}" type="range" min="5" max="100" value="${blend.get(material)}" data-blend="${material}" aria-label="${material} proportion" />
          <output>${percent}%</output>
        </div>
      `
    )
    .join("");

  formulaLines.querySelectorAll("[data-blend]").forEach((input) => {
    input.addEventListener("input", () => {
      blend.set(input.dataset.blend, Number(input.value));
      renderBlend();
    });
  });

  const weighted = { cold: 0, sweet: 0, dense: 0, space: 0 };
  const tags = new Map();
  entries.forEach(([material, percent]) => {
    const profile = materialProfiles[material];
    weighted.cold += profile.cold * (percent / 100);
    weighted.sweet += profile.sweet * (percent / 100);
    weighted.dense += profile.dense * (percent / 100);
    weighted.space += profile.space * (percent / 100);
    profile.tags.forEach((tag) => tags.set(tag, (tags.get(tag) || 0) + percent));
  });

  const topTags = Array.from(tags.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([tag]) => tag);

  profileName.textContent = topTags.join(" / ");
  updateScales(weighted);
}

function updateScales(values) {
  profileScales.innerHTML = `
    <div><span>Cold</span><i style="--value: ${Math.round(values.cold)}%"></i><span>Warm</span></div>
    <div><span>Dry</span><i style="--value: ${Math.round(values.sweet)}%"></i><span>Sweet</span></div>
    <div><span>Transparent</span><i style="--value: ${Math.round(values.dense)}%"></i><span>Dense</span></div>
    <div><span>Skin</span><i style="--value: ${Math.round(values.space)}%"></i><span>Space</span></div>
  `;
}

document.querySelector("#resetFormula").addEventListener("click", () => {
  blend.clear();
  renderBlend();
});

document.querySelector("#saveFormula").addEventListener("click", () => {
  const entries = normalizedBlend();
  if (!entries.length) {
    savedFormula.textContent = "Add at least one material before saving.";
    return;
  }
  const code = Math.floor(1200 + Math.random() * 7800);
  const formula = entries.map(([material, percent]) => `${material} ${percent}%`).join(" / ");
  localStorage.setItem("ellis-saved-formula", formula);
  savedFormula.textContent = `ELLIS EXPERIMENT No. ${code}. ${formula}. Created in the digital laboratory.`;
});

const colourField = document.querySelector("#colourField");
const floatingNotes = document.querySelector("#floatingNotes");
const paletteTitle = document.querySelector("#paletteTitle");
const paletteChips = document.querySelector("#paletteChips");
const palette = [];

function scentFromPoint(x, y) {
  if (x < 0.45 && y < 0.45) {
    return { label: "IVORY", color: "#f1e8d8", notes: "IRIS / ALDEHYDES / WHITE MUSK / RICE POWDER" };
  }
  if (x >= 0.45 && y < 0.45) {
    return { label: "BURGUNDY", color: "#7f2d3f", notes: "BLACK CHERRY / SAFFRON / LEATHER / LABDANUM" };
  }
  if (x < 0.45 && y >= 0.45) {
    return { label: "PALE GREEN", color: "#98ab8d", notes: "FIG LEAF / GALBANUM / MOSS / GREEN TEA" };
  }
  return { label: "SMOKED BROWN", color: "#3b2923", notes: "CEDAR / TOBACCO / CACAO / VETIVER" };
}

function updateColourField(event) {
  const rect = colourField.getBoundingClientRect();
  const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
  const y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
  const scent = scentFromPoint(x, y);
  floatingNotes.style.left = `${x * 100}%`;
  floatingNotes.style.top = `${y * 100}%`;
  floatingNotes.innerHTML = `<span>${scent.label}</span><strong>${scent.notes}</strong>`;
  return scent;
}

colourField.addEventListener("pointermove", updateColourField);
colourField.addEventListener("click", (event) => {
  const scent = updateColourField(event);
  palette.push(scent);
  renderPalette();
});
colourField.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    palette.push(scentFromPoint(0.5, 0.5));
    renderPalette();
  }
});

function renderPalette() {
  if (!palette.length) {
    paletteTitle.textContent = "No points selected";
    paletteChips.innerHTML = "";
    return;
  }
  paletteTitle.textContent = `Conceptual scent profile / ${palette.length} colour ${palette.length === 1 ? "point" : "points"}`;
  paletteChips.innerHTML = palette
    .map(
      (item) => `
        <span class="palette-chip">
          <i style="--chip: ${item.color}"></i>
          <span>${item.notes}</span>
        </span>
      `
    )
    .join("");
}

document.querySelector("#resetPalette").addEventListener("click", () => {
  palette.length = 0;
  renderPalette();
});

const memoryFlow = document.querySelector("#memoryFlow");
const questions = Array.from(document.querySelectorAll(".question"));
const prevQuestion = document.querySelector("#prevQuestion");
const nextQuestion = document.querySelector("#nextQuestion");
const memoryResult = document.querySelector("#memoryResult");
const memoryAnswers = {};
let questionIndex = 0;

document.querySelector("#beginMemory").addEventListener("click", () => {
  memoryFlow.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
});

questions.forEach((question) => {
  question.querySelectorAll(".choice-row button").forEach((button) => {
    button.addEventListener("click", () => {
      question.querySelectorAll("button").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      memoryAnswers[question.dataset.question] = button.textContent.trim();
    });
  });
});

function renderQuestion() {
  questions.forEach((question, index) => question.classList.toggle("active", index === questionIndex));
  prevQuestion.disabled = questionIndex === 0;
  nextQuestion.textContent = questionIndex === questions.length - 1 ? "Generate memory" : "Continue";
}

prevQuestion.addEventListener("click", () => {
  questionIndex = Math.max(0, questionIndex - 1);
  memoryResult.classList.remove("show");
  renderQuestion();
});

nextQuestion.addEventListener("click", () => {
  if (questionIndex < questions.length - 1) {
    questionIndex += 1;
    renderQuestion();
    return;
  }
  generateMemory();
});

document.querySelector("#memoryTime").addEventListener("input", (event) => {
  const hour = Number(event.target.value);
  const period = hour < 6 ? "deep night" : hour < 12 ? "morning" : hour < 18 ? "afternoon" : "low evening";
  document.querySelector("#memoryTimeOutput").textContent = `${String(hour).padStart(2, "0")}:00 / ${period}`;
});

function generateMemory() {
  const place = memoryAnswers[0] || "Somewhere else";
  const remembered = memoryAnswers[2] || "Air";
  const light = memoryAnswers[4] || "Soft";
  const temp = Number(document.querySelector("#memoryTemp").value);
  const emotion = Number(document.querySelector("#memoryEmotion").value);
  const detail = document.querySelector("#memoryDetail").value.trim();
  const coldWarm = temp < 45 ? "COLD AIR" : "WARM DUST";
  const emotionalNote = emotion < 45 ? "SKIN" : "SMOKE";
  const detailNote = detail ? detail.split(/\s+/).slice(0, 3).join(" ").toUpperCase() : "UNNAMED DETAIL";
  memoryResult.innerHTML = `
    <p>MEMORY 042 / ${place.toUpperCase()} / ${remembered.toUpperCase()} / ${light.toUpperCase()}</p>
    <h3>RAIN / OLD PAPER / ${coldWarm} / CEDAR / ${emotionalNote}</h3>
    <span>Trace remembered: ${detailNote}. We can begin from here.</span>
    <a href="#enquiry">Request a private consultation</a>
  `;
  memoryResult.classList.add("show");
  setScentFamily(emotion < 45 ? "musk" : "smoky");
}

renderQuestion();

document.querySelector("#enquiryForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = new FormData(form).get("name") || "your request";
  document.querySelector("#formStatus").textContent = `${name}, your private commission request has been prepared. This concept form is client-side only.`;
  form.reset();
});
