//***https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random */

const getRundomNumber = (min, max, exp = 0) => {
  if (min < 0 || max < 0 || exp <= 0) {
    return 'Ошибка. Все числа должны быть положительные';
  }

  if (min >= max) {
    return 'Ошибка. Второе число должно быть больше первого';
  }

  return (Math.random() * (max - min) + min).toFixed(exp);
};

const getRandomInt = (min, max) => {
  max = max + 1;
  return getRundomNumber(min, max, 0);
};

const getRandomFloat = (min, max, exp) => getRundomNumber(min, max, exp);

getRandomInt(0, 3);
getRandomFloat(0, 3, 3);
