import { roomAddress } from './submit-form.js';
import { CENTER_MAP_POSITION, MAIN_PIN_ICON_HEIGTH, MAIN_PIN_ICON_URL, MAIN_PIN_ICON_WIDTH, OFFER_PIN_ICON_HEIGTH, OFFER_PIN_ICON_URL, OFFER_PIN_ICON_WIDTH } from './constants.js';
import { createCustomOffer } from './offer.js';
import { deactivateForm, activateForm } from './activate-form.js';

/**
 * Центр карты
 */

const { lat, lng } = CENTER_MAP_POSITION;

/**
 * Деактивируем формы
 */

deactivateForm();

/**
 * Грузим контейнер с картой
 * задаем центр
 * и создаем универсальную функцию для разных маркеров
 */

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
  })
  .setView({
    lat,
    lng,
  }, 13);
const createCustomPin = (imageUrl, width, heigth) => {
  const customPin = L.icon({
    iconUrl: imageUrl,
    iconSize: [width, heigth],
    iconAnchor: [width / 2, heigth],
  });

  return customPin;
};

/**
 * Добавляем опенстрит карты со слоями
 */

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

/**
 * Добавляем красынй маркер, который можно таскать
 */

const mainPinMarker = L.marker(
  {
    lat,
    lng,
  },
  {
    draggable: true,
    icon: createCustomPin(MAIN_PIN_ICON_URL, MAIN_PIN_ICON_WIDTH, MAIN_PIN_ICON_HEIGTH),
  },
);

/**
 * Перебор всех объявлений и вывод на страницу
 * добавляем маркеры синего цвета
 */

const drawProperties = (allProperties) => {
  allProperties.slice(9).forEach((singleOffer) => {
    const marker = L.marker({
      lat: singleOffer.location.lat,
      lng: singleOffer.location.lng,
    }, {
      draggable: false,
      icon: createCustomPin(OFFER_PIN_ICON_URL, OFFER_PIN_ICON_WIDTH, OFFER_PIN_ICON_HEIGTH),
    },
    );
    marker
      .addTo(map)
      .bindPopup(createCustomOffer(singleOffer));
  });
};

/**
 * Вывод красного маркера на карту, который таскаем
 */
mainPinMarker.addTo(map);

/**
 * Берем координаты маркера и подставляем в форму, обрезаем и оставляем последние
 * 5 значений после запятой
 */

mainPinMarker.on('moveend', (evt) => {
  const address = evt.target.getLatLng();
  roomAddress.value = `${address.lat.toFixed(5)}, ${address.lng.toFixed(5)}`;
});

/**
 * Сброс карты для очистки формы
 * Маркер ставим на дефолтное зачение
 */

const resetMap = () => {
  map.setView({
    lat,
    lng,
  }, 13);

  mainPinMarker.setLatLng({
    lat,
    lng,
  });
};

export { roomAddress, resetMap, drawProperties };
