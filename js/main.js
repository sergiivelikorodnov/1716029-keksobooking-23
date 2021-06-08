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
 * Random Float and Intenger function
 */

const getRandomFloat = (min, max, exp) => {
  if (min < 0 || max < 0 || exp < 0) {
    return 'Ошибка. Все числа должны быть положительные';
  }

  if (min >= max) {
    return 'Ошибка. Второе число должно быть больше первого';
  }

  return (Math.random() * (max - min) + min).toFixed(exp);
};

const getRandomInt = (min, max) => getRandomFloat(min, max, 0);

/**
 * Get Location coordinates
 */

const getLocation = () => [getRandomFloat(35.65000, 35.70000, 5), getRandomFloat(139.70000, 139.80000, 5)];

/**
 * Shuffle Array function
 */

const shuffle = (arr) => arr.sort(() => Math.round(Math.random() * 100) - 50).slice(0, arr.length - getRandomInt(0, arr.length - 1));

/**
 * Get Random Value from Any Array
 */

const getRandomValue = function (element) {
  return element[getRandomInt(0, element.length - 1)];
};

/**
 * Main Property Object
 */
const getSingleProperty = () => {
  const locationPosition = getLocation();
  const [lat, lng] = locationPosition;
  //console.log(lat, lng);

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


//console.log(allProperties);
