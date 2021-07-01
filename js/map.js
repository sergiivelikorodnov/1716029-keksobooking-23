import { roomAddress } from './submit-form.js';
import { allProperties } from './property-data.js';
import { CENTER_MAP_POSITION, MAIN_PIN_ICON_URL, OFFER_PIN_ICON_URL } from './constants.js';
import { createCustomOffer } from './offer.js';
import { deactivateForm, activateForm } from './activate-form.js';

const { lat, lng } = CENTER_MAP_POSITION;
deactivateForm();

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
  })
  .setView({
    lat,
    lng,
  }, 13);
const createCustomPin = (imageUrl) => {
  const customPin = L.icon({
    iconUrl: imageUrl,
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  return customPin;
};

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinMarker = L.marker(
  {
    lat,
    lng,
  },
  {
    draggable: true,
    icon: createCustomPin(MAIN_PIN_ICON_URL),
  },
);

allProperties.forEach((singleOffer) => {
  const marker = L.marker({
    lat: singleOffer.location.lat,
    lng: singleOffer.location.lng,
  }, {
    draggable: false,
    icon: createCustomPin(OFFER_PIN_ICON_URL),
  },
  );
  marker
    .addTo(map)
    .bindPopup(createCustomOffer(singleOffer));
});

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const address = evt.target.getLatLng();
  roomAddress.value = `${address.lat.toFixed(5)}, ${address.lng.toFixed(5)}`;
});

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

export { roomAddress, resetMap };
