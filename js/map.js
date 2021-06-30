import { roomAddress } from './submit-form.js';
import { allProperties } from './property-data.js';
import { LAT_CENTER, LNG_CENTER } from './constants.js';
import { createCustomOffer } from './offer.js';
import { deactivateForm, activateForm } from './activate-form.js';

deactivateForm();

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
  })
  .setView({
    lat: LAT_CENTER,
    lng: LNG_CENTER,
  }, 13);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const offerPinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinMarker = L.marker(
  {
    lat: LAT_CENTER,
    lng: LNG_CENTER,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

allProperties.forEach((singleOffer) => {
  const { lat, lng } = singleOffer.location;
  const marker = L.marker({
    lat,
    lng,
  }, {
    draggable: false,
    icon: offerPinIcon,
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
    lat: LAT_CENTER,
    lng: LNG_CENTER,
  }, 13);

  mainPinMarker.setLatLng({
    lat: LAT_CENTER,
    lng: LNG_CENTER,
  });
};

export { roomAddress, resetMap };
