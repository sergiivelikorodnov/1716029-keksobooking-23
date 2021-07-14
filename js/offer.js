import { PROPERTY_TYPE } from './constants.js';

const createCustomOffer = (singleOffer) => {
  const { title, address, price, rooms, type, guests, checkout, checkin, features, description, photos } = singleOffer.offer;
  const { avatar } = singleOffer.author;
  const offerTemplate = document.querySelector('#card').content.querySelector('.popup');
  const offerCard = offerTemplate.cloneNode(true);

  /**
  * Условия для склонения слов
  */
  const roomsText = () => {
    if (rooms === '1') {
      return 'комната для ';
    } else if (rooms < 5) {
      return 'комнаты для ';
    } return 'комнат для ';
  };

  const guestsText = (guests === '1') ? 'гостя' : 'гостей';

  /**
   * Поля карточки объявления
   */
  const photoCard = offerCard.querySelector('.popup__photo');
  offerCard.querySelector('.popup__title').textContent = title;
  offerCard.querySelector('.popup__text--address').textContent = address;
  offerCard.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
  if (type) {
    offerCard.querySelector('.popup__type').textContent = PROPERTY_TYPE[type].name;
  }
  offerCard.querySelector('.popup__text--capacity').textContent = `${rooms} ${roomsText()} ${guests} ${guestsText}`;
  offerCard.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;

  /**
   * Features List
   */


  const renderFeatures = (featuresArray) => {
    if (featuresArray) {
      const offerFeaturesList = offerCard.querySelector('.popup__features');
      offerFeaturesList.innerHTML = '';

      featuresArray.forEach((feature) => {
        const createFeatureElement = document.createElement('li');
        offerFeaturesList.append(createFeatureElement);
        createFeatureElement.classList.add('popup__feature');
        createFeatureElement.classList.add(`popup__feature--${feature}`);
      });
    }
  };

  /**
  * Offer Photos
  */
  if (description) {
    offerCard.querySelector('.popup__description').textContent = description;
  }


  const renderPhotos = (photosArray) => {
    if (photosArray) {
      photosArray.forEach((photo) => {
        const photoNode = photoCard.cloneNode(true);
        photoNode.src = photo;
        offerCard.querySelector('.popup__photos').appendChild(photoNode);
      });
    }
    photoCard.remove();
  };


  /**
  * Avatar image
  */

  if (avatar) {
    offerCard.querySelector('.popup__avatar').src = avatar;
  }

  renderFeatures(features);
  renderPhotos(photos);

  return offerCard;
};

export { createCustomOffer };
