const apartments = [
  { id: '2D', floor: 2, column: 4, rooms: 1, area: 39, price: 1325, image: 'assets/apartments/apartment-2d.png' },
  { id: '4B', floor: 4, column: 2, rooms: 1, area: 42, price: 1450, image: 'assets/apartments/apartment-4b.png' },
  { id: '5C', floor: 5, column: 3, rooms: 2, area: 56, price: 1700, image: 'assets/apartments/apartment-5c.png' },
  { id: '7A', floor: 7, column: 1, rooms: 2, area: 64, price: 1950, image: 'assets/apartments/apartment-7a.png' },
  { id: '8E', floor: 8, column: 5, rooms: 2, area: 71, price: 2150, image: 'assets/apartments/apartment-8e.png' },
  { id: '10C', floor: 10, column: 3, rooms: 3, area: 88, price: 2700, image: 'assets/apartments/apartment-10c.png' },
  { id: '11B', floor: 11, column: 2, rooms: 3, area: 96, price: 2950, image: 'assets/apartments/apartment-11b.png' }
];

const floorsRoot = document.querySelector('#building-floors');
const panel = document.querySelector('#apartment-panel');
const backdrop = document.querySelector('#panel-backdrop');
const closeButton = document.querySelector('.panel-close');
const resetButton = document.querySelector('.filter-reset');
const resultCount = document.querySelector('#result-count');
const bookButton = document.querySelector('.book-button');
const bookingNote = document.querySelector('.booking-note');

const filterState = { rooms: 'all', floor: 'all', price: 'all', area: 'all' };
const windowDecor = {
  '12-2': ['has-plant'],
  '11-4': ['has-curtains'],
  '9-1': ['has-balcony', 'has-plant'],
  '8-5': ['has-plant'],
  '6-3': ['has-curtains'],
  '5-1': ['has-balcony', 'has-chair'],
  '3-2': ['has-curtains'],
  '2-4': ['has-plant']
};
const motionAllowed = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let selectedWindow = null;

function formatPrice(price) {
  return `£${price.toLocaleString('en-GB')} / month`;
}

function findApartment(floor, column) {
  return apartments.find((apartment) => apartment.floor === floor && apartment.column === column);
}

function buildFacade() {
  for (let floorNumber = 12; floorNumber >= 1; floorNumber -= 1) {
    const floor = document.createElement('div');
    floor.className = 'floor';
    floor.dataset.floor = String(floorNumber).padStart(2, '0');

    for (let column = 1; column <= 5; column += 1) {
      const apartment = findApartment(floorNumber, column);

      if (apartment) {
        const windowButton = document.createElement('button');
        windowButton.type = 'button';
        windowButton.className = 'window window--available';
        windowButton.dataset.apartment = apartment.id;
        windowButton.setAttribute('aria-label', `Apartment ${apartment.id}, ${apartment.rooms} ${apartment.rooms === 1 ? 'room' : 'rooms'}, ${apartment.area} square metres, ready to rent`);
        windowButton.innerHTML = '<span class="window__status">Ready to rent</span>';
        windowButton.addEventListener('click', () => openPanel(apartment, windowButton));
        floor.append(windowButton);
      } else {
        const darkWindow = document.createElement('div');
        darkWindow.className = 'window window--unavailable';
        const unitKey = `${floorNumber}-${column}`;
        darkWindow.dataset.unit = unitKey;
        (windowDecor[unitKey] || []).forEach((className) => darkWindow.classList.add(className));
        darkWindow.innerHTML = `
          <span class="curtain curtain--left"></span>
          <span class="curtain curtain--right"></span>
          <span class="interior-plant"></span>
          <span class="balcony"></span>
          <span class="balcony-chair"></span>
        `;
        darkWindow.setAttribute('aria-hidden', 'true');
        floor.append(darkWindow);
      }
    }

    floorsRoot.append(floor);
  }
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function scheduleResidentLight() {
  window.setTimeout(() => {
    const candidates = [...document.querySelectorAll('.window--unavailable:not(.is-tv-on)')];
    const target = randomItem(candidates);
    target.classList.add('is-lived-lit');

    window.setTimeout(() => {
      target.classList.remove('is-lived-lit');
      scheduleResidentLight();
    }, randomBetween(6000, 11000));
  }, randomBetween(30000, 90000));
}

function scheduleTelevisionGlow() {
  window.setTimeout(() => {
    const candidates = [...document.querySelectorAll('.window--unavailable:not(.is-lived-lit)')];
    const target = randomItem(candidates);
    const duration = randomBetween(10000, 17000);
    target.style.setProperty('--event-duration', `${duration}ms`);
    target.classList.add('is-tv-on');

    window.setTimeout(() => {
      target.classList.remove('is-tv-on');
      target.style.removeProperty('--event-duration');
      scheduleTelevisionGlow();
    }, duration);
  }, randomBetween(45000, 110000));
}

function scheduleCurtainMovement() {
  window.setTimeout(() => {
    const curtains = [...document.querySelectorAll('.window--unavailable.has-curtains')];
    const target = randomItem(curtains);
    target.classList.add('is-curtain-moving');

    window.setTimeout(() => {
      target.classList.remove('is-curtain-moving');
      window.setTimeout(scheduleCurtainMovement, 15000);
    }, 16000);
  }, randomBetween(180000, 300000));
}

function actorMarkup(type) {
  if (type === 'car' || type === 'taxi') {
    return '<span class="actor__body"></span><span class="actor__wheel actor__wheel--one"></span><span class="actor__wheel actor__wheel--two"></span>';
  }
  if (type === 'dog-walker') {
    return '<span class="actor__person"></span><span class="actor__dog"></span>';
  }
  if (type === 'cyclist') {
    return '<span class="actor__bike-wheel actor__bike-wheel--one"></span><span class="actor__bike-wheel actor__bike-wheel--two"></span><span class="actor__bike-frame"></span><span class="actor__person"></span>';
  }
  return '<span class="actor__person"></span>';
}

function scheduleStreetEvent() {
  window.setTimeout(() => {
    const streetActors = document.querySelector('#street-actors');
    if (streetActors.childElementCount > 0) {
      scheduleStreetEvent();
      return;
    }

    const type = randomItem(['car', 'taxi', 'walker', 'dog-walker', 'cyclist']);
    const actor = document.createElement('span');
    const fromRight = Math.random() > .5;
    const duration = type === 'walker' || type === 'dog-walker'
      ? randomBetween(26000, 34000)
      : randomBetween(18000, 27000);

    actor.className = `street-actor street-actor--${type}${fromRight ? ' from-right' : ''}`;
    actor.style.setProperty('--travel-duration', `${duration}ms`);
    actor.innerHTML = actorMarkup(type);
    streetActors.append(actor);

    window.setTimeout(() => {
      actor.remove();
      scheduleStreetEvent();
    }, duration + 500);
  }, randomBetween(40000, 90000));
}

function startAmbientLife() {
  if (!motionAllowed) return;
  document.querySelector('#building').dataset.ambientLife = 'ready';
  scheduleResidentLight();
  scheduleTelevisionGlow();
  scheduleCurtainMovement();
  scheduleStreetEvent();
}

function openPanel(apartment, windowButton) {
  if (selectedWindow) selectedWindow.classList.remove('is-selected');
  selectedWindow = windowButton;
  selectedWindow.classList.add('is-selected');

  panel.querySelector('#panel-title').textContent = `Apartment ${apartment.id}`;
  panel.querySelector('[data-field="floor"]').textContent = apartment.floor;
  panel.querySelector('[data-field="rooms"]').textContent = apartment.rooms;
  panel.querySelector('[data-field="area"]').textContent = apartment.area;
  panel.querySelector('[data-field="price"]').textContent = formatPrice(apartment.price);
  const apartmentImage = panel.querySelector('#apartment-image');
  apartmentImage.classList.remove('is-visible');
  apartmentImage.src = apartment.image;
  apartmentImage.alt = `Interior of Apartment ${apartment.id}`;
  window.requestAnimationFrame(() => apartmentImage.classList.add('is-visible'));
  bookingNote.textContent = '';

  panel.classList.add('is-open');
  backdrop.classList.add('is-open');
  panel.setAttribute('aria-hidden', 'false');
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  closeButton.focus();
}

function closePanel() {
  panel.classList.remove('is-open');
  backdrop.classList.remove('is-open');
  panel.setAttribute('aria-hidden', 'true');
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  if (selectedWindow) {
    const returnTarget = selectedWindow;
    selectedWindow.classList.remove('is-selected');
    selectedWindow = null;
    returnTarget.focus({ preventScroll: true });
  }
}

function apartmentMatches(apartment) {
  const roomMatch = filterState.rooms === 'all' || apartment.rooms === Number(filterState.rooms);
  const priceMatch = filterState.price === 'all' || apartment.price <= Number(filterState.price);
  const areaMatch = filterState.area === 'all' || apartment.area >= Number(filterState.area);
  const floorMatch = filterState.floor === 'all'
    || (filterState.floor === 'low' && apartment.floor <= 4)
    || (filterState.floor === 'mid' && apartment.floor >= 5 && apartment.floor <= 8)
    || (filterState.floor === 'high' && apartment.floor >= 9);

  return roomMatch && priceMatch && areaMatch && floorMatch;
}

function applyFilters() {
  let matches = 0;
  apartments.forEach((apartment) => {
    const windowButton = document.querySelector(`[data-apartment="${apartment.id}"]`);
    const isMatch = apartmentMatches(apartment);
    windowButton.classList.toggle('is-filtered', !isMatch);
    windowButton.setAttribute('aria-disabled', String(!isMatch));
    if (isMatch) matches += 1;
  });
  resultCount.textContent = matches;
}

document.querySelectorAll('[data-filter="rooms"] button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter="rooms"] button').forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    filterState.rooms = button.dataset.value;
    applyFilters();
  });
});

document.querySelector('#floor-filter').addEventListener('change', (event) => {
  filterState.floor = event.target.value;
  applyFilters();
});

document.querySelector('#price-filter').addEventListener('change', (event) => {
  filterState.price = event.target.value;
  applyFilters();
});

document.querySelector('#area-filter').addEventListener('change', (event) => {
  filterState.area = event.target.value;
  applyFilters();
});

resetButton.addEventListener('click', () => {
  Object.keys(filterState).forEach((key) => { filterState[key] = 'all'; });
  document.querySelectorAll('[data-filter="rooms"] button').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.value === 'all');
  });
  document.querySelectorAll('.select-field select').forEach((select) => { select.value = 'all'; });
  applyFilters();
});

closeButton.addEventListener('click', closePanel);
backdrop.addEventListener('click', closePanel);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && panel.classList.contains('is-open')) closePanel();
});

bookButton.addEventListener('click', () => {
  bookingNote.textContent = 'Thank you — the viewing team will confirm the next available appointment.';
});

buildFacade();
startAmbientLife();
