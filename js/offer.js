import { allProperties } from './property-data.js';

const offerTemplate = document.querySelector('#card').content;
const mapCanvas = document.querySelector('#map-canvas');
let offerTitle = offerTemplate.querySelector('.popup__title');
let offerAddress = offerTemplate.querySelector('.popup__text--address');
let offerPrice = offerTemplate.querySelector('.popup__text--price');
let offerType = offerTemplate.querySelector('.popup__type');
let offerCapacity = offerTemplate.querySelector('.popup__text--capacity');
let offerTime = offerTemplate.querySelector('.popup__text--time');
let offerFeatures = offerTemplate.querySelector('.popup__features');
let offerDescription = offerTemplate.querySelector('.popup__description');
let offerPhotos = offerTemplate.querySelector('.popup__photos');
let offerAvatar = offerTemplate.querySelector('.popup__avatar');

const allOffers = document.createDocumentFragment();

//console.log(allProperties[0].avatar)
const offerCards = (properties) => {
  properties.forEach((singleOffer) => {
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

    offerCard.querySelector('.popup__title').textContent = singleOffer.offer.title;
    offerCard.querySelector('.popup__text--address').textContent = singleOffer.offer.address;
    offerCard.querySelector('.popup__text--price').textContent = `${singleOffer.offer.price} ₽/ночь`;
    //offerCard.querySelector('.popup__type').textContent =
    offerCard.querySelector('.popup__text--capacity').textContent = `${singleOffer.offer.rooms} ${rooms()} ${singleOffer.offer.guests} ${guests()}`;
    offerCard.querySelector('.popup__text--time').textContent = `Заезд после ${singleOffer.offer.checkin}, выезд до ${singleOffer.offer.checkout}`;
    offerCard.querySelector('.popup__features').textContent = singleOffer.offer.features;
    offerCard.querySelector('.popup__description').textContent = singleOffer.offer.description;
    offerCard.querySelector('.popup__photo').src = singleOffer.offer.photos[0];
    console.log(singleOffer.offer.photos);
    singleOffer.offer.photos.forEach((photo) => {
      const photoCard = offerCard.querySelector('.popup__photo');
      photoCard.src = photo;
      photoCard.cloneNode(false)
      offerCard.querySelector('.popup__photos').appendChild(photoCard);
    });
    offerCard.querySelector('.popup__avatar').src = singleOffer.avatar;
    allOffers.appendChild(offerCard);
  });
};
offerCards(allProperties);


mapCanvas.appendChild(allOffers);
