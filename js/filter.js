import { MAX_PROPERTY_NUMBER, RERENDER_DELAY } from './constants.js';
import { drawProperties, markerGroup, resetMap } from './map.js';
import { debounce } from './utils/debounce.js';

import { allData } from './fetch.js';

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
 * Vaiables
 *
 */

let result;

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
  !typeHouse === 'any' ? result = result.filter((singleOffer) => singleOffer.offer.type === typeHouse) : result;
};

const filterHousePrice = (priceHouse) => {
  if (priceHouse === 'low') {
    result = result.filter((singleOffer) => singleOffer.offer.price < 10001);
  } else if (priceHouse === 'medium') {
    result = result.filter((singleOffer) => 50001 > singleOffer.offer.price > 10000);
  } else if (priceHouse === 'high') {
    result = result.filter((singleOffer) => singleOffer.offer.price > 50000);
  }
};

const filterHouseRooms = (roomsHouse) => {
  !roomsHouse === 'any' ? result = result.filter((singleOffer) => singleOffer.offer.rooms === parseInt(roomsHouse, 10)) : result;
};

const filterHouseGuests = (guestsHouse) => {
  !guestsHouse === 'any' ? result = result.filter((singleOffer) => singleOffer.offer.guests === parseInt(housingGuests.value, 10)) : result;
};

const filterFeature = (feature) => {
  if (feature) {
    result = result.filter((singleOffer) => singleOffer.offer.features);
    result = result.filter((singleOffer) => singleOffer.offer.features.includes(feature));
  }
};

/**
 * Main Filtering function
 * filterApply is debounce function with delay
 */


const filterApply = debounce(() => { drawProperties(result); }, RERENDER_DELAY);

const filterProperties = () => {
  result = allData;
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

  result = result.slice(0, MAX_PROPERTY_NUMBER);
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
