const PROPERTY_TYPE = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
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
const SHUFFLE_MIN = 0.5;

const ALL_PROPERTIES_LENGTH = 10;

const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const MAX_ROOM_PRICE = 1000000;
const MIN_BUNGALOW_PRICE = 0;
const MIN_FLAT_PRICE = 1000;
const MIN_HOTEL_PRICE = 3000;
const MIN_HOUSE_PRICE = 5000;
const MIN_PALACE_PRICE = 1000;
const DEFAULT_ROOM_NUMBER = 1;
const DEFAULT_ROOM_CAPACITY = 3;
const MAX_ROOM_NUMBER = 100;


export { PROPERTY_TYPE, CHECKIN_TIME, CHECKOUT_TIME, ROOM_FEATURES, ROOM_PHOTOS, ALL_PROPERTIES_LENGTH, LAT_MIN, LAT_MAX, LNG_MIN, LNG_MAX, SHUFFLE_MIN, MIN_NAME_LENGTH, MAX_NAME_LENGTH, MAX_ROOM_PRICE, MIN_BUNGALOW_PRICE, MIN_FLAT_PRICE, MIN_HOTEL_PRICE, MIN_HOUSE_PRICE, MIN_PALACE_PRICE, DEFAULT_ROOM_NUMBER, DEFAULT_ROOM_CAPACITY, MAX_ROOM_NUMBER };
