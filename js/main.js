import { getRandomInt, getLocation, shuffle, getRandomValue } from './utils.js';
import { PROPERTY_TYPE, CHECKIN_TIME, CHECKOUT_TIME, ROOM_FEATURES, ROOM_PHOTOS, ALL_PROPERTIES_LENGTH } from './constants.js';

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

console.log(allProperties);
