
import {
  MIN_NAME_LENGTH, MAX_NAME_LENGTH, MAX_ROOM_PRICE, DEFAULT_ROOM_NUMBER, DEFAULT_ROOM_CAPACITY,
  MAX_ROOM_NUMBER, ROOM_VAL_MESSAGE, LAT_CENTER, LNG_CENTER, PROPERTY_TYPE
} from './constants.js';
import { resetMap } from './map.js';

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

const defaultAddress = () => {
  roomAddress.setAttribute('value', `${LAT_CENTER}, ${LNG_CENTER}`);

};

defaultAddress();

let minPriceRoom = PROPERTY_TYPE.flat.price;
let roomNumberValue = DEFAULT_ROOM_NUMBER;
let roomCapacityValue = DEFAULT_ROOM_CAPACITY;

if (roomNumberValue < roomCapacityValue) {
  roomCapacity.setCustomValidity(ROOM_VAL_MESSAGE[0]);
  roomCapacity.reportValidity();
}

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
const checkMinPrice = () => {
  if (typeRoom.value === PROPERTY_TYPE.bungalow.name) {
    minPriceRoom = PROPERTY_TYPE.bungalow.price;
    priceRoom.placeholder = PROPERTY_TYPE.bungalow.price;
  } else if (typeRoom.value === PROPERTY_TYPE.flat.name) {
    minPriceRoom = PROPERTY_TYPE.flat.price;
    priceRoom.placeholder = PROPERTY_TYPE.flat.price;
  } else if (typeRoom.value === PROPERTY_TYPE.palace.name) {
    minPriceRoom = PROPERTY_TYPE.palace.price;
    priceRoom.placeholder = PROPERTY_TYPE.palace.price;
  } else if (typeRoom.value === PROPERTY_TYPE.house.name) {
    minPriceRoom = PROPERTY_TYPE.house.price;
    priceRoom.placeholder = PROPERTY_TYPE.house.price;
  } else {
    minPriceRoom = PROPERTY_TYPE.hotel.price;
    priceRoom.placeholder = PROPERTY_TYPE.hotel.price;
  }
};

checkMinPrice();

typeRoom.addEventListener('change', () => {
  checkMinPrice();
});

priceRoom.addEventListener('input', () => {
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
});

roomNumber.addEventListener('change', () => {
  roomNumberValue = Number(roomNumber.value);
  let message;

  if (roomNumberValue < roomCapacityValue) {
    message = ROOM_VAL_MESSAGE[0];
  } else if (roomNumberValue === MAX_ROOM_NUMBER && roomCapacityValue !== 0) {
    message = ROOM_VAL_MESSAGE[1];
  } else if (roomNumberValue < MAX_ROOM_NUMBER && roomCapacityValue === 0) {
    message = ROOM_VAL_MESSAGE[2];
  } else {
    message = ROOM_VAL_MESSAGE[3];
  }
  roomCapacity.setCustomValidity(message);
  roomCapacity.reportValidity();
});

roomCapacity.addEventListener('change', () => {
  roomCapacityValue = Number(roomCapacity.value);
  let message;
  if (roomNumberValue < roomCapacityValue) {
    message = ROOM_VAL_MESSAGE[0];
  } else if (roomNumberValue < MAX_ROOM_NUMBER && roomCapacityValue === 0) {
    message = ROOM_VAL_MESSAGE[2];
  } else {
    message = ROOM_VAL_MESSAGE[3];
  }
  roomCapacity.setCustomValidity(message);
  roomCapacity.reportValidity();
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

resetFormButton.addEventListener('click', () => {
  defaultAddress();
  resetMap();
});

const formSubmit = (event) => {
  event.preventDefault();
};

adForm.addEventListener('submit', formSubmit);

export { roomAddress };
