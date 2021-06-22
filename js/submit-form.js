import { MIN_NAME_LENGTH, MAX_NAME_LENGTH, MAX_ROOM_PRICE, MIN_BUNGALOW_PRICE, MIN_FLAT_PRICE, MIN_HOTEL_PRICE, MIN_HOUSE_PRICE, MIN_PALACE_PRICE, DEFAULT_ROOM_NUMBER, DEFAULT_ROOM_CAPACITY, MAX_ROOM_NUMBER } from './constants.js';

const offerName = document.querySelector('#title');
const priceRoom = document.querySelector('#price');
const typeRoom = document.querySelector('#type');
const roomNumber = document.querySelector('#room_number');
const roomCapacity = document.querySelector('#capacity');
const roomAddress = document.querySelector('#address');

roomAddress.setAttribute('value', '35.68950, 139.70171'); пше

let minPriceRoom = MIN_FLAT_PRICE;
let roomNumberValue = DEFAULT_ROOM_NUMBER;
let roomCapacityValue = DEFAULT_ROOM_CAPACITY;

if (roomNumberValue < roomCapacityValue) {
  roomCapacity.setCustomValidity('Слишком много гостей. Выберите меньше значение');
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

  if (valuePrice > MAX_ROOM_PRICE) {
    priceRoom.setCustomValidity(`Цена не может быть больше ${MAX_ROOM_PRICE} руб.`);
  } else if (valuePrice < minPriceRoom) {
    priceRoom.setCustomValidity(`Цена не может быть меньше ${minPriceRoom} руб.`);
  } else {
    priceRoom.setCustomValidity('');
  }

  priceRoom.reportValidity();
});


roomNumber.addEventListener('change', () => {
  roomNumberValue = Number(roomNumber.value);
  if (roomNumberValue < roomCapacityValue) {
    roomCapacity.setCustomValidity('Слишком много гостей. Выберите меньше значение');
  } else if (roomNumberValue === MAX_ROOM_NUMBER && roomCapacityValue !== 0) {
    roomCapacity.setCustomValidity('Выберите опцию "Не для гостей"');
  } else if (roomNumberValue < MAX_ROOM_NUMBER && roomCapacityValue === 0) {
    roomCapacity.setCustomValidity('Выберите количество гостей');
  } else {
    roomCapacity.setCustomValidity('');
  }
  roomCapacity.reportValidity();
});

roomCapacity.addEventListener('change', () => {
  roomCapacityValue = Number(roomCapacity.value);
  if (roomNumberValue < roomCapacityValue) {
    roomCapacity.setCustomValidity('Слишком много гостей. Выберите меньше значение');
  } else if (roomNumberValue < MAX_ROOM_NUMBER && roomCapacityValue === 0) {
    roomCapacity.setCustomValidity('Выберите количество гостей');
  } else {
    roomCapacity.setCustomValidity('');
  }
  roomCapacity.reportValidity();
});
