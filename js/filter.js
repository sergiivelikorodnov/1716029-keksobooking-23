import { MAX_PROPERTY_NUMBER } from './constants.js';
import { drawProperties, markerGroup, resetMap } from './map.js';

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

const filterHouseType = (typeHouse) => {
  if (typeHouse === 'any') {
    result;
  } else {
    result = result.filter((singleOffer) => singleOffer.offer.type === typeHouse);
  }
};

const filterHousePrice = (priceHouse) => {
  if (priceHouse === 'low') {
    result = result.filter((singleOffer) => singleOffer.offer.price < 10001);
  } else if (priceHouse === 'medium') {
    result = result.filter((singleOffer) => 50001 > singleOffer.offer.price > 10000);
  } else if (priceHouse === 'high') {
    result = result.filter((singleOffer) => singleOffer.offer.price > 50000);
  } else {
    return result;
  }
};

const filterHouseRooms = (roomsHouse) => {
  if (roomsHouse === 'any') {
    result;
  } else {
    result = result.filter((singleOffer) => singleOffer.offer.rooms === parseInt(roomsHouse, 10));
  }
};

const filterHouseGuests = (guestsHouse) => {
  if (guestsHouse === 'any') {
    result;
  } else {
    result = result.filter((singleOffer) => singleOffer.offer.guests === parseInt(housingGuests.value, 10));
  }
};

const filterFeature = (feature) => {
  if (feature) {
    result = result.filter((singleOffer) => singleOffer.offer.features);
    // console.log(result[2].offer.features);
    // console.log(feature);
    // console.log(result[2].offer.features.includes(feature));
  } else {
    result;
  }
};

const filterProperties = () => {
  result = allData;
  filterHouseType(type);
  filterHousePrice(price);
  filterHouseRooms(rooms);
  filterHouseGuests(guests);
  filterFeature(wifi);
  // filterFeature(dishwasher);
  // filterFeature(parking);
  // filterFeature(washer);
  // filterFeature(elevator);
  // filterFeature(conditioner);

  result = result.slice(0, MAX_PROPERTY_NUMBER);
  resetMap();
  markerGroup.clearLayers();
  drawProperties(result);
};


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
  if (filterWifi.checked) {
    wifi = filterWifi.value;
  } else {
    wifi = '';
  }
  filterProperties();
});

filterDishwasher.addEventListener('change', () => {
  dishwasher = filterDishwasher.checked;
  filterProperties();
});

filterParking.addEventListener('change', () => {
  parking = filterParking.checked;
  filterProperties();
});

filterWasher.addEventListener('change', () => {
  washer = filterWasher.checked;
  filterProperties();
});

filterElevator.addEventListener('change', () => {
  elevator = filterElevator.checked;
  filterProperties();
});

filterConditioner.addEventListener('change', () => {
  conditioner = filterConditioner.checked;
  filterProperties();
});
