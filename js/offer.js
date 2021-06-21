import { allProperties } from './property-data.js';
import { getRandomValue } from './utils.js';

const offerTemplate = document.querySelector('#card').content;
const mapCanvas = document.querySelector('#map-canvas');

const offerBox = document.createDocumentFragment();
const randomOffer = getRandomValue(allProperties);

const offerCards = (singleOffer) => {
  const { title, address, price, rooms, type, guests, checkout, checkin, features, description, photos } = singleOffer.offer;

  const offerCard = offerTemplate.cloneNode(true);
  const roomsText = () => {
    if (singleOffer.offer.rooms === '1') {
      return 'комната для ';
    } else if (singleOffer.offer.rooms < 5) {
      return 'комнаты для ';
    } return 'комнат для ';
  };

  const guestsText = (guests === '1') ? 'гостя' : 'гостей';

  const photoCard = offerCard.querySelector('.popup__photo');
  offerCard.querySelector('.popup__title').textContent = title;
  offerCard.querySelector('.popup__text--address').textContent = address;
  offerCard.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
  offerCard.querySelector('.popup__type').textContent = type[1];
  offerCard.querySelector('.popup__text--capacity').textContent = `${rooms} ${roomsText()} ${guests} ${guestsText}`;
  offerCard.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;

  /**
   * Features List
   */
  const offerFeaturesList = offerTemplate.querySelector('.popup__features');
  const modifiers = features.map((feature) => `popup__feature--${feature}`);
  offerFeaturesList.querySelectorAll('.popup__feature')
    .forEach((item) => {
      const modifier = item.classList[1];
      if (!modifiers.includes(modifier)) {
        item.remove();
      }
    });

  offerCard.querySelector('.popup__description').textContent = description;
  photos.forEach((photo) => {
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
