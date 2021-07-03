
import {
  MIN_NAME_LENGTH, MAX_NAME_LENGTH, MAX_ROOM_PRICE, DEFAULT_ROOM_NUMBER, DEFAULT_ROOM_CAPACITY,
  MAX_ROOM_NUMBER, ROOM_VAL_MESSAGE, CENTER_MAP_POSITION, PROPERTY_TYPE, SEND_DATA_URL
} from './constants.js';
import { resetMap } from './map.js';
import { showAlert } from './utils.js';

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
const successMessage = document.querySelector('#success ').content;
const successMessageClone = successMessage.cloneNode(true);
const body = document.querySelector('body');

const { lat, lng } = CENTER_MAP_POSITION;
const defaultAddress = () => {
  roomAddress.setAttribute('value', `${lat}, ${lng}`);

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
  const { value } = typeRoom;
  minPriceRoom = PROPERTY_TYPE[value].price;
  priceRoom.placeholder = PROPERTY_TYPE[value].price;
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

const successMessageHandler = () => {
  successMessageClone.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      console.log('click');
      //evt.target.remove();
      //body.removeChild(successMessageClone);
    }
  });
  console.log(successMessage);
};

const resetForm = () => {
  body.appendChild(successMessageClone);
  successMessageHandler();
  adForm.reset();
  resetMap();
};

const offerFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch(
      SEND_DATA_URL,
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          onSuccess();
        } else {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
        }
      })
      .catch(() => {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
      });
  });
};

export { roomAddress, offerFormSubmit, resetForm };
