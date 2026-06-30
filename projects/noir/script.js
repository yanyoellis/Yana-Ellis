const desk = document.querySelector('#desk');
const folder = document.querySelector('#folder');
const openFile = document.querySelector('#openFile');
const folderStage = document.querySelector('#folderStage');
const closeFile = document.querySelector('#closeFile');
const investigation = document.querySelector('#investigation');
const cards = [...document.querySelectorAll('.suspect-card')];
const cup = document.querySelector('#coffeeCup');
const coffeeCluster = document.querySelector('#coffeeCluster');
const evidenceCard = document.querySelector('#evidenceCard');
const evidenceText = document.querySelector('#evidenceText');
const verdictPrompt = document.querySelector('#verdictPrompt');
const suspectHint = document.querySelector('#suspectHint');
const wrongNote = document.querySelector('#wrongNote');
const solution = document.querySelector('#solution');
const strings = document.querySelector('#strings');
const restartCase = document.querySelector('#restartCase');
const stepLabel = document.querySelector('#stepLabel');
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightboxImage');
const lightboxCaption = document.querySelector('#lightboxCaption');
const toast = document.querySelector('#toast');
const deskProps = [...document.querySelectorAll('.desk-prop')];

let viewed = new Set();
let evidenceFound = false;
let solved = false;
let typeTimer;

const setStep = text => { stepLabel.textContent = text; };

folder.addEventListener('click', () => {
  if (folder.classList.contains('is-opening')) return;
  folder.classList.add('is-opening');
  setStep('INCIDENT REPORT');
  setTimeout(() => {
    openFile.classList.add('is-visible');
    openFile.setAttribute('aria-hidden', 'false');
  }, 380);
});

closeFile.addEventListener('click', () => {
  openFile.classList.remove('is-visible');
  openFile.setAttribute('aria-hidden', 'true');
  folderStage.classList.add('is-closing');
  setStep('SUSPECT REVIEW');
  setTimeout(() => {
    investigation.classList.add('is-visible');
    investigation.setAttribute('aria-hidden', 'false');
  }, 650);
});

function handleCard(card) {
  if (solved) return;
  if (evidenceFound) {
    accuse(card);
    return;
  }
  card.classList.toggle('is-flipped');
  if (card.classList.contains('is-flipped')) viewed.add(card.dataset.suspect);
  updateCupAccess();
}

cards.forEach(card => {
  card.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    event.preventDefault();
    handleCard(card);
  });
  card.addEventListener('click', event => {
    if (event.detail === 0) handleCard(card);
  });
});

function updateCupAccess() {
  if (viewed.size < 3) {
    suspectHint.textContent = `${3 - viewed.size} more photograph${3 - viewed.size === 1 ? '' : 's'} to inspect.`;
    return;
  }
  cup.classList.add('is-ready');
  coffeeCluster.classList.add('is-ready');
  suspectHint.textContent = 'Something on the desk is out of place.';
  setStep('SEARCH THE DESK');
}

function revealEvidence() {
  if (viewed.size < 3 || evidenceFound) return;
  evidenceFound = true;
  cup.classList.remove('is-ready');
  cup.classList.add('is-moved');
  coffeeCluster.classList.add('is-revealed');
  evidenceCard.classList.add('is-visible');
  suspectHint.textContent = 'The hidden clue changes everything.';
  setStep('EVIDENCE FOUND');
  setTimeout(() => typeEvidence('Mint cigarette butt\nRed lipstick mark found on the filter'), 900);
  setTimeout(() => {
    cards.forEach(c => c.classList.remove('is-flipped'));
    verdictPrompt.classList.add('is-visible');
    setStep('NAME THE THIEF');
  }, 2250);
}

cup.addEventListener('click', revealEvidence);
let dragStart = null;
cup.addEventListener('pointerdown', e => {
  if (!cup.classList.contains('is-ready')) return;
  dragStart = {x:e.clientX,y:e.clientY};
  cup.setPointerCapture(e.pointerId);
});
cup.addEventListener('pointerup', e => {
  if (!dragStart) return;
  const distance = Math.hypot(e.clientX-dragStart.x,e.clientY-dragStart.y);
  dragStart = null;
  if (distance > 10) revealEvidence();
});

function typeEvidence(text) {
  clearInterval(typeTimer);
  evidenceText.textContent = '';
  let i = 0;
  typeTimer = setInterval(() => {
    evidenceText.textContent = text.slice(0, ++i);
    if (i >= text.length) clearInterval(typeTimer);
  }, 34);
}

function accuse(card) {
  if (card.dataset.suspect !== 'emily') {
    card.classList.remove('is-wrong');
    void card.offsetWidth;
    card.classList.add('is-wrong');
    wrongNote.classList.add('is-visible');
    setTimeout(() => wrongNote.classList.remove('is-visible'), 1400);
    return;
  }
  solved = true;
  cards.forEach(c => c.classList.remove('is-flipped'));
  card.classList.add('is-guilty');
  verdictPrompt.classList.remove('is-visible');
  strings.classList.add('is-visible');
  setStep('CASE SOLVED');
  setTimeout(() => {
    solution.classList.add('is-visible');
    solution.setAttribute('aria-hidden', 'false');
  }, 950);
}

document.querySelectorAll('[data-lightbox]').forEach(photo => photo.addEventListener('click', () => {
  const isScene = photo.dataset.lightbox === 'scene';
  lightboxImage.style.backgroundPosition = isScene ? 'right center' : 'left center';
  lightboxCaption.textContent = isScene ? 'Small burn mark by the vanity — no cigarette recovered.' : 'The missing Blackwood earrings.';
  lightbox.showModal();
}));
document.querySelector('.lightbox__close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.close(); });

restartCase.addEventListener('click', () => {
  desk.classList.add('is-resetting');
  clearInterval(typeTimer);
  setTimeout(() => {
    viewed = new Set(); evidenceFound = false; solved = false;
    folder.classList.remove('is-opening');
    folderStage.classList.remove('is-closing');
    openFile.classList.remove('is-visible');
    investigation.classList.remove('is-visible');
    investigation.setAttribute('aria-hidden', 'true');
    solution.classList.remove('is-visible');
    solution.setAttribute('aria-hidden', 'true');
    strings.classList.remove('is-visible');
    cards.forEach(c => c.classList.remove('is-flipped','is-wrong','is-guilty'));
    cup.classList.remove('is-ready','is-moved');
    coffeeCluster.classList.remove('is-ready','is-revealed');
    evidenceCard.classList.remove('is-visible');
    verdictPrompt.classList.remove('is-visible');
    evidenceText.textContent = '';
    suspectHint.textContent = 'Turn over at least three photographs.';
    setStep('SEALED FILE');
    desk.classList.remove('is-resetting');
    showToast('The file has been resealed.');
  }, 620);
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1600);
}

deskProps.forEach(prop => prop.addEventListener('click', () => {
  prop.classList.remove('is-touched');
  void prop.offsetWidth;
  prop.classList.add('is-touched');
  showToast(prop.dataset.propMessage);
}));

document.addEventListener('mousemove', e => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const x = (e.clientX / innerWidth - .5);
  const y = (e.clientY / innerHeight - .5);
  document.documentElement.style.setProperty('--mx', `${x * 5}px`);
  document.documentElement.style.setProperty('--my', `${y * 4}px`);
  document.querySelector('.ambient-props').style.translate = `${x * -2}px ${y * -2}px`;
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && lightbox.open) lightbox.close();
});
