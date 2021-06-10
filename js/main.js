import { getRandomInt, getLocation, shuffle, getRandomValue } from './utils.js';

const PROPERTY_TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

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

const ALL_PROPERTIES_LENGTH = 10;

/**
 * Main Property Object
 */
const getSingleProperty = () => {
  const locationPosition = getLocation();
  const [lat, lng] = locationPosition;

  const singleProperty = {
    avatar: `img/avatars/user0${getRandomInt(1, 8)}.png`,
    location: {
      lat: lat,
      lng: lng,
    },
    offer: {
      title: 'Заголовок объявления',
      price: getRandomInt(0, 100000),
      address: `${lat},${lng}`,
      type: getRandomValue(PROPERTY_TYPE),
      rooms: getRandomInt(0, 8),
      guests: getRandomInt(0, 8),
      checkin: getRandomValue(CHECKIN_TIME),
      checkout: getRandomValue(CHECKOUT_TIME),
      features: shuffle(ROOM_FEATURES),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      photos: shuffle(ROOM_PHOTOS),
    },
  };

  return singleProperty;
};

const allProperties = Array.from({ length: ALL_PROPERTIES_LENGTH }, () => getSingleProperty());

