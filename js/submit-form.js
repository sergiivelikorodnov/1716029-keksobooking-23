
import {
  MIN_NAME_LENGTH, MAX_NAME_LENGTH, MAX_ROOM_PRICE, DEFAULT_ROOM_NUMBER, DEFAULT_ROOM_CAPACITY,
  MAX_ROOM_NUMBER, ROOM_VAL_MESSAGES, CENTER_MAP_POSITION, PROPERTY_TYPE, SEND_DATA_URL, MESSAGE_SEND_ERROR, DEFAULT_PROPERTY_TYPE
} from './constants.js';
import { resetMap } from './map.js';
import { showAlert } from './utils.js';
import { sendData } from './fetch.js';
import './avatar.js';
import { resetPhoto } from './avatar.js';
import { resetFilter } from './filter.js';

const offerName = document.querySelector('#title');
const priceRoom = document.querySelector('#price');
const typeRoom = document.querySelector('#type');
const roomNumber = document.querySelector('#room_number');
const roomCapacity = document.querySelector('#capacity');
const roomAddress = document.querySelector('#address');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const resetFormButton = document.querySelector('.ad-form__reset');
const adForm = document.querySelector('.ad-form');
const successMessage = document.querySelector('#success ').content.querySelector('.success');
const { body } = document;

/**
 * Дефолтное значение карты и адрес
 */

const { lat, lng } = CENTER_MAP_POSITION;
const getDefaultAddress = () => {
  roomAddress.setAttribute('value', `${lat}, ${lng}`);

};

getDefaultAddress();

/**
 * Дефолтные значени минимальной цены, кол-ва комнат и людей
 */

let minPriceRoom = PROPERTY_TYPE.flat.price;
let roomNumberValue = DEFAULT_ROOM_NUMBER;
let roomCapacityValue = DEFAULT_ROOM_CAPACITY;

if (roomNumberValue < roomCapacityValue) {
  roomCapacity.setCustomValidity(ROOM_VAL_MESSAGES[0]);
  roomCapacity.reportValidity();
}

/**
 * Валидация длины Тайтла
 */

offerName.addEventListener('input', () => {
  const valueLength = offerName.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    offerName.setCustomValidity(`Введите ещё ${MIN_NAME_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    offerName.setCustomValidity(`Удалите лишние ${valueLength - MAX_NAME_LENGTH} симв.`);
  } else {
    offerName.setCustomValidity('');
  }

  offerName.reportValidity();
});

/**
 * Валидация минимальной цены и изменение в плейсхолдере
 */

const checkMinPrice = () => {
  const { value } = typeRoom;
  minPriceRoom = PROPERTY_TYPE[value].price;
  priceRoom.placeholder = PROPERTY_TYPE[value].price;

  const valuePrice = priceRoom.value;
  let message;

  if (valuePrice > MAX_ROOM_PRICE) {
    message = `Цена не может быть больше ${MAX_ROOM_PRICE} руб.`;
  } else if (valuePrice < minPriceRoom) {
    message = `Цена не может быть меньше ${minPriceRoom} руб.`;
  } else {
    message = '';
  }
  priceRoom.setCustomValidity(message);
  priceRoom.reportValidity();
};

const resetPricePlaceholder = () => {
  priceRoom.placeholder = PROPERTY_TYPE[DEFAULT_PROPERTY_TYPE].price;
};

checkMinPrice();

/**
 * Зависимость типа комнаты от цены
 */

typeRoom.addEventListener('change', () => {
  checkMinPrice();
});

/**
 * Валидация на минимальную и максимальную стоимость комнаты
 */

priceRoom.addEventListener('input', () => {
  checkMinPrice();
});

/**
 * Валидация количество комнат с количеством людей в комнате
 * Вывод сообщений
 */

roomNumber.addEventListener('change', () => {
  roomNumberValue = Number(roomNumber.value);
  let message;

  if (roomNumberValue < roomCapacityValue) {
    message = ROOM_VAL_MESSAGES[0];
  } else if (roomNumberValue === MAX_ROOM_NUMBER && roomCapacityValue !== 0) {
    message = ROOM_VAL_MESSAGES[1];
  } else if (roomNumberValue < MAX_ROOM_NUMBER && roomCapacityValue === 0) {
    message = ROOM_VAL_MESSAGES[2];
  } else {
    message = ROOM_VAL_MESSAGES[3];
  }
  roomCapacity.setCustomValidity(message);
  roomCapacity.reportValidity();
});

/**
 * Валидация количества людей с количеством комнат
 * Вывод сообщений
 */

roomCapacity.addEventListener('change', () => {
  roomCapacityValue = Number(roomCapacity.value);
  let message;
  if (roomNumberValue < roomCapacityValue) {
    message = ROOM_VAL_MESSAGES[0];
  } else if (roomNumberValue < MAX_ROOM_NUMBER && roomCapacityValue === 0) {
    message = ROOM_VAL_MESSAGES[2];
  } else {
    message = ROOM_VAL_MESSAGES[3];
  }
  roomCapacity.setCustomValidity(message);
  roomCapacity.reportValidity();
});

/**
 * Зависимость время чек-ин и чек-аута
 */

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

/**
 * Очистка формы при нажатии на кнопку Очистить форму
 */

resetFormButton.addEventListener('click', () => {
  getDefaultAddress();
  resetPricePlaceholder();
  resetMap();
  resetPhoto();
  resetFilter();
});

/**
 * Скрытие сообщения об удачной отправке
 */


function successMessageHandler() {
  successMessage.remove();
  body.removeEventListener('click', successMessageHandler);
  // eslint-disable-next-line no-use-before-define
  body.removeEventListener('keydown', keydownHandler);
}

function keydownHandler(evt) {
  if (evt.key === 'Escape') {
    successMessage.remove();
    body.removeEventListener('keydown', keydownHandler);
    body.removeEventListener('click', successMessageHandler);
  }
}

/**
 * Очистка формы при удачной отправке формы
 */

const resetForm = () => {
  body.appendChild(successMessage);
  body.addEventListener('keydown', keydownHandler);
  body.addEventListener('click', successMessageHandler);
  adForm.reset();
  resetPricePlaceholder();
  resetMap();
  resetPhoto();
  resetFilter();
};

/**
 * Кнопка сабмита формы
 */

const offerFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      onSuccess,
      () => showAlert(MESSAGE_SEND_ERROR),
      'POST',
      SEND_DATA_URL,
      new FormData(evt.target),
    );
  });
};

export { roomAddress, resetForm, offerFormSubmit };
