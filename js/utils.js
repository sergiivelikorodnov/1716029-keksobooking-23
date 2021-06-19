import { LAT_MIN, LAT_MAX, LNG_MIN, LNG_MAX, SHUFFLE_MIN, SHUFFLE_MAX } from './constants.js';

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

  return (Math.random() * (max - min) + min + 1).toFixed(exp);
};

const getRandomInt = (min, max) => getRandomFloat(min, max, 0);

/**
 * Get Location coordinates
 */

const getLocation = () => [getRandomFloat(LAT_MIN, LAT_MAX, 5), getRandomFloat(LNG_MIN, LNG_MAX, 5)];

/**
 * Shuffle Array function
 */

const shuffle = (arr) => arr.sort(() => Math.round(Math.random() * SHUFFLE_MAX) - SHUFFLE_MIN).slice(0, arr.length - getRandomInt(1, arr.length - 1));

/**
 * Get Random Value from Any Array
 */

const getRandomValue = function (elements) {
  return elements[getRandomInt(0, elements.length - 1)];
};

export { getRandomInt, getLocation, shuffle, getRandomValue };
