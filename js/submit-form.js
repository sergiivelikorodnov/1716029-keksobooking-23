
import { MIN_NAME_LENGTH, MAX_NAME_LENGTH, MAX_ROOM_PRICE, MIN_BUNGALOW_PRICE, MIN_FLAT_PRICE, MIN_HOTEL_PRICE, MIN_HOUSE_PRICE, MIN_PALACE_PRICE, DEFAULT_ROOM_NUMBER, DEFAULT_ROOM_CAPACITY, MAX_ROOM_NUMBER, ROOM_VAL_MESSAGE } from './constants.js';

const offerName = document.querySelector('#title');
const priceRoom = document.querySelector('#price');
const typeRoom = document.querySelector('#type');
const roomNumber = document.querySelector('#room_number');
const roomCapacity = document.querySelector('#capacity');
const roomAddress = document.querySelector('#address');

roomAddress.value = '35.68950, 139.70171';

let minPriceRoom = MIN_FLAT_PRICE;
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

typeRoom.addEventListener('change', () => {
  if (typeRoom.value === 'bungalow') {
    minPriceRoom = MIN_BUNGALOW_PRICE;
  } else if (typeRoom.value === 'flat') {
    minPriceRoom = MIN_FLAT_PRICE;
  } else if (typeRoom.value === 'palace') {
    minPriceRoom = MIN_PALACE_PRICE;
  } else if (typeRoom.value === 'house') {
    minPriceRoom = MIN_HOUSE_PRICE;
  } else {
    minPriceRoom = MIN_HOTEL_PRICE;
  }
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
