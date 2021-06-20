import { allProperties } from './property-data.js';
import { getRandomValue } from './utils.js';

const offerTemplate = document.querySelector('#card').content;
const mapCanvas = document.querySelector('#map-canvas');

const offerBox = document.createDocumentFragment();
const randomOffer = getRandomValue(allProperties);

const offerCards = (singleOffer) => {
  const offerCard = offerTemplate.cloneNode(true);
  const rooms = () => {
    if (singleOffer.offer.rooms === '1') {
      return 'комната для ';
    } else if (singleOffer.offer.rooms < 5) {
      return 'комнаты для ';
    } else {
      return 'комнат для ';
    }
  };

  const guests = () => {
    if (singleOffer.offer.guests === '1') {
      return 'гостя';
    } else {
      return 'гостей';
    }
  };

  const photoCard = offerCard.querySelector('.popup__photo');
  offerCard.querySelector('.popup__title').textContent = singleOffer.offer.title;
  offerCard.querySelector('.popup__text--address').textContent = singleOffer.offer.address;
  offerCard.querySelector('.popup__text--price').textContent = `${singleOffer.offer.price} ₽/ночь`;
  offerCard.querySelector('.popup__type').textContent = singleOffer.offer.type[1];
  offerCard.querySelector('.popup__text--capacity').textContent = `${singleOffer.offer.rooms} ${rooms()} ${singleOffer.offer.guests} ${guests()}`;
  offerCard.querySelector('.popup__text--time').textContent = `Заезд после ${singleOffer.offer.checkin}, выезд до ${singleOffer.offer.checkout}`;

  /**
   * Features List
   */
  const offerFeaturesList = offerTemplate.querySelector('.popup__features');
  const modifiers = singleOffer.offer.features.map((feature) => `popup__feature--${feature}`);
  offerFeaturesList.querySelectorAll('.popup__feature')
    .forEach((item) => {
      const modifier = item.classList[1];
      if (!modifiers.includes(modifier)) {
        item.remove();
      }
    });

  offerCard.querySelector('.popup__description').textContent = singleOffer.offer.description;
  singleOffer.offer.photos.forEach((photo) => {
    const photoNode = photoCard.cloneNode(true);
    photoNode.src = photo;
    offerCard.querySelector('.popup__photos').appendChild(photoNode);
  });
  photoCard.remove();
  offerCard.querySelector('.popup__avatar').src = singleOffer.avatar;
  offerBox.appendChild(offerCard);
};


offerCards(randomOffer);


mapCanvas.appendChild(offerBox);
