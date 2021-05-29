//***https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random */

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max + 1);
  if (min < 0 || max < 0) {
    return 'Ошибка. Все числа должны быть положительные';
  }

  if (min >= max) {
    return 'Ошибка. Второе число должно быть больше первого';
  }

  return Math.floor(Math.random() * (max - min) + min);
};


const getRandomFloat = (min, max, exp = 2) => {
  if (typeof min === 'undefined') {
    return 'Ошибка. Введите число';
  }

  if (min < 0 || max < 0 || exp < 0) {
    return 'Ошибка. Все числа должны быть положительные';
  }

  if (min > max) {
    return 'Ошибка. Второе число должно быть больше первого';
  }

  if (exp === 0) {
    return Math.random() * (max - min) + min;
  }

  return (Math.random() * (max - min) + min).toFixed(exp);
};

//console.log(getRandomFloat(1, 10, 4));
