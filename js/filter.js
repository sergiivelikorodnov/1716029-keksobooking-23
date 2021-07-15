import { MAX_PROPERTY_NUMBER, PROPERTY_PRICE_HIGH, PROPERTY_PRICE_LOW, REQUEST_URL, RERENDER_DELAY } from './constants.js';
import { drawProperties, markerGroup, resetMap } from './map.js';
import { debounce } from './utils/debounce.js';
import { createFetch } from './fetch.js';
import { showAlert } from './utils.js';
import { activateFilter } from './activate-form.js';

const mapFiters = document.querySelector('.map__filters');
const housingType = mapFiters.querySelector('#housing-type');
const housingPrice = mapFiters.querySelector('#housing-price');
const housingRooms = mapFiters.querySelector('#housing-rooms');
const housingGuests = mapFiters.querySelector('#housing-guests');

const housingFeatures = document.querySelector('#housing-features');
const filterWifi = housingFeatures.querySelector('#filter-wifi');
const filterDishwasher = housingFeatures.querySelector('#filter-dishwasher');
const filterParking = housingFeatures.querySelector('#filter-parking');
const filterWasher = housingFeatures.querySelector('#filter-washer');
const filterElevator = housingFeatures.querySelector('#filter-elevator');
const filterConditioner = housingFeatures.querySelector('#filter-conditioner');

/**
 * Output data from Fetch
*/

let allData = [];

const outputProperties = createFetch(
  (data) => {
    drawProperties(data.slice(0, MAX_PROPERTY_NUMBER));
    activateFilter();
    allData = data;
  },
  showAlert,
  'GET', REQUEST_URL);


/**
 * Vaiables
 *
 */

let results;

let type = 'any';
let price = 'any';
let rooms = 'any';
let guests = 'any';
let wifi = '';
let dishwasher = '';
let parking = '';
let washer = '';
let elevator = '';
let conditioner = '';

/**
 *Conditions
 *
 */

const filterHouseType = (typeHouse) => {
  typeHouse === 'any' ? results : results = results.filter((singleOffer) => singleOffer.offer.type === typeHouse);
};

const filterHousePrice = (priceHouse) => {
  if (priceHouse === 'low') {
    results = results.filter((singleOffer) => singleOffer.offer.price < PROPERTY_PRICE_LOW);
  } else if (priceHouse === 'medium') {
    results = results.filter((singleOffer) => PROPERTY_PRICE_HIGH >= singleOffer.offer.price >= PROPERTY_PRICE_LOW);
  } else if (priceHouse === 'high') {
    results = results.filter((singleOffer) => singleOffer.offer.price > PROPERTY_PRICE_HIGH);
  }
};

const filterHouseRooms = (roomsHouse) => {
  roomsHouse === 'any' ? results : results = results.filter((singleOffer) => singleOffer.offer.rooms === parseInt(roomsHouse, 10));
};

const filterHouseGuests = (guestsHouse) => {
  guestsHouse === 'any' ? results : results = results.filter((singleOffer) => singleOffer.offer.guests === parseInt(housingGuests.value, 10));
};

const filterFeature = (feature) => {
  if (feature) {
    results = results.filter((singleOffer) => singleOffer.offer.features);
    results = results.filter((singleOffer) => singleOffer.offer.features.includes(feature));
  }
};

/**
 * Main Filtering function
 * filterApply is debounce function with delay
 *
 */


const filterApply = debounce(() => { drawProperties(results); }, RERENDER_DELAY);

const filterProperties = () => {
  results = allData;

  filterHouseType(type);
  filterHousePrice(price);
  filterHouseRooms(rooms);
  filterHouseGuests(guests);
  filterFeature(wifi);
  filterFeature(dishwasher);
  filterFeature(parking);
  filterFeature(washer);
  filterFeature(elevator);
  filterFeature(conditioner);

  results = results.slice(0, MAX_PROPERTY_NUMBER);
  resetMap();
  markerGroup.clearLayers();

  filterApply();
};

/**
 * Event Listeners
 *
 */

housingType.addEventListener('change', () => {
  type = housingType.value;
  filterProperties();
});

housingPrice.addEventListener('change', () => {
  price = housingPrice.value;
  filterProperties();
});

housingRooms.addEventListener('change', () => {
  rooms = housingRooms.value;
  filterProperties();
});

housingGuests.addEventListener('change', () => {
  guests = housingGuests.value;
  filterProperties();
});

filterWifi.addEventListener('change', () => {
  filterWifi.checked ? wifi = filterWifi.value : wifi = '';
  filterProperties();
});

filterDishwasher.addEventListener('change', () => {
  filterDishwasher.checked ? dishwasher = filterDishwasher.value : dishwasher = '';
  filterProperties();
});

filterParking.addEventListener('change', () => {
  filterParking.checked ? parking = filterParking.value : parking = '';
  filterProperties();
});

filterWasher.addEventListener('change', () => {
  filterWasher.checked ? washer = filterWasher.value : washer = '';
  filterProperties();
});

filterElevator.addEventListener('change', () => {
  filterElevator.checked ? elevator = filterElevator.value : elevator = '';
  filterProperties();
});

filterConditioner.addEventListener('change', () => {
  filterConditioner.checked ? conditioner = filterConditioner.value : conditioner = '';
  filterProperties();
});

/**
 * Reset Filter
 *
 */

const resetFilter = () => {
  results = allData;
  housingType.value = 'any';
  housingPrice.value = 'any';
  housingRooms.value = 'any';
  housingGuests.value = 'any';
  type = 'any';
  price = 'any';
  rooms = 'any';
  guests = 'any';
  filterWifi.checked = false;
  wifi = '';
  filterDishwasher.checked = false;
  dishwasher = '';
  filterParking.checked = false;
  parking = '';
  filterWasher.checked = false;
  washer = '';
  filterElevator.checked = false;
  elevator = '';
  filterConditioner.checked = false;
  conditioner = '';

  filterProperties();

};

export { resetFilter, outputProperties };
