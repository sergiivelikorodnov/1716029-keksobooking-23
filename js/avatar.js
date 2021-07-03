import { DEFAULT_IMAGE_PLACEHOLDER, FILE_TYPES } from './constants.js';

const avataChooser = document.querySelector('#avatar');
const previewAvatar = document.querySelector('.ad-form-header__preview').querySelector('img');
const photoOfferChooser = document.querySelector('#images');
const previewOfferPhoto = document.querySelector('.ad-form__photo').querySelector('img');

/**
 * Функция загрузки фотки
 */


const uploadPhoto = (imageChooserPhotos, previewPhoto) => {

  imageChooserPhotos.addEventListener('change', () => {
    const file = imageChooserPhotos.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        previewPhoto.src = reader.result;
      });
      reader.readAsDataURL(file);
    }
  });
};

/**
 * Задаем дефолтные картинки для сброса формы или при успешной отправке
 */

const resetPhoto = () => {
  previewAvatar.src = DEFAULT_IMAGE_PLACEHOLDER;
  previewOfferPhoto.src = DEFAULT_IMAGE_PLACEHOLDER;
};

/**
 * Загрузка фотки и аватарки
 */

uploadPhoto(avataChooser, previewAvatar);
uploadPhoto(photoOfferChooser, previewOfferPhoto);

export { resetPhoto };
