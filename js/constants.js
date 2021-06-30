const PROPERTY_TYPE = {
  palace: {
    name: 'palace',
    price: 10000,
  },
  flat: {
    name: 'flat',
    price: 1000,
  },
  house: {
    name: 'house',
    price: 5000,
  },
  bungalow: {
    name: 'bungalow',
    price: 0,
  },
  hotel: {
    name: 'hotel',
    price: 3000,
  },
};

const CHECKIN_TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT_TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const ROOM_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const ROOM_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const LAT_CENTER = 35.68156;
const LNG_CENTER = 139.75433;
const SHUFFLE_MIN = 0.5;

const ALL_PROPERTIES_LENGTH = 10;

const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const MAX_ROOM_PRICE = 1000000;

const DEFAULT_ROOM_NUMBER = 1;
const DEFAULT_ROOM_CAPACITY = 3;
const MAX_ROOM_NUMBER = 100;

const MAP_FILTER_DISABLED = 'map__filters--disabled';
const AD_FORM_DISABLED = 'ad-form--disabled';

const ROOM_VAL_MESSAGE = [
  'Слишком много гостей. Выберите меньше значение',
  'Выберите опцию "Не для гостей"',
  'Выберите количество гостей',
  '',
];

export {
  PROPERTY_TYPE, CHECKIN_TIME, CHECKOUT_TIME, ROOM_FEATURES, ROOM_PHOTOS, ALL_PROPERTIES_LENGTH, LAT_MIN, LAT_MAX, LNG_MIN, LNG_MAX,
  SHUFFLE_MIN, MIN_NAME_LENGTH, MAX_NAME_LENGTH, MAX_ROOM_PRICE, DEFAULT_ROOM_NUMBER, DEFAULT_ROOM_CAPACITY, MAX_ROOM_NUMBER,
  ROOM_VAL_MESSAGE, LAT_CENTER, LNG_CENTER, MAP_FILTER_DISABLED, AD_FORM_DISABLED
};
