const createCustomOffer = (singleOffer) => {
  const { title, address, price, rooms, type, guests, checkout, checkin, features, description, photos } = singleOffer.offer;
  const offerTemplate = document.querySelector('#card').content.querySelector('.popup');
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
  offerCard.querySelector('.popup__type').textContent = type[1].name;
  offerCard.querySelector('.popup__text--capacity').textContent = `${rooms} ${roomsText()} ${guests} ${guestsText}`;
  offerCard.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;

  /**
   * Features List
   */
  if (features !== undefined) {
    const offerFeaturesList = offerTemplate.querySelector('.popup__features');
    const modifiers = features.map((feature) => `popup__feature--${feature}`);
    offerFeaturesList.querySelectorAll('.popup__feature')
      .forEach((item) => {
        const modifier = item.classList[1];
        if (!modifiers.includes(modifier)) {
          item.remove();
        }
      });
  }

  if (photos !== undefined) {
    offerCard.querySelector('.popup__description').textContent = description;
    photos.forEach((photo) => {
      const photoNode = photoCard.cloneNode(true);
      photoNode.src = photo;
      offerCard.querySelector('.popup__photos').appendChild(photoNode);
    });
  }
  photoCard.remove();
  offerCard.querySelector('.popup__avatar').src = singleOffer.avatar;

  return offerCard;
};

export { createCustomOffer };
