/**
 * Тип объекта с русским именем и ценой
 */

const PROPERTY_TYPE = {
  palace: {
    name: 'Дворец',
    price: 10000,
  },
  flat: {
    name: 'Квартира',
    price: 1000,
  },
  house: {
    name: 'Дом',
    price: 5000,
  },
  bungalow: {
    name: 'Бунгало',
    price: 0,
  },
  hotel: {
    name: 'Отель',
    price: 3000,
  },
};

/**
 * Ценовой диапозон недвижимости для фильтра
 */

const PROPERTY_PRICE_LOW = 10000;
const PROPERTY_PRICE_HIGH = 50000;

/**
 * Центр карты
 */

const CENTER_MAP_POSITION = {
  lat: 35.68156,
  lng: 139.75433,
};

/**
 * Пины для карты
 */

const MAIN_PIN_ICON_URL = 'img/main-pin.svg';
const MAIN_PIN_ICON_WIDTH = 50;
const MAIN_PIN_ICON_HEIGTH = 50;
const OFFER_PIN_ICON_URL = 'img/pin.svg';
const OFFER_PIN_ICON_WIDTH = 40;
const OFFER_PIN_ICON_HEIGTH = 40;


/**
 * Минимальное и максимальное значение длины тайтла
 * Максимальная цена недвижимости
 * Дефолтные значения кол-ва комнат, людей
 * Максмальное кол-во комнат
 */

const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const MAX_ROOM_PRICE = 1000000;

const DEFAULT_ROOM_NUMBER = 1;
const DEFAULT_ROOM_CAPACITY = 3;
const MAX_ROOM_NUMBER = 100;

/**
 * Название классов, которые деактивируют формы
 */

const MAP_FILTER_DISABLED = 'map__filters--disabled';
const AD_FORM_DISABLED = 'ad-form--disabled';

/**
 * Сообщения для поля Кол-во мест
 */

const ROOM_VAL_MESSAGE = [
  'Слишком много гостей. Выберите меньше значение',
  'Выберите опцию "Не для гостей"',
  'Выберите количество гостей',
  '',
];

/**
 * Типы загружаемых файлов и дефотрный плейсхолдер для аватарки и картинки
 */

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_IMAGE_PLACEHOLDER = 'img/muffin-grey.svg';

/**
 * Ссылки для загрузки и выгрузки данных
 */

const REQUEST_URL = 'https://23.javascript.pages.academy/keksobooking/data';
const SEND_DATA_URL = 'https://23.javascript.pages.academy/keksobooking/';

/**
 * Время сколько будет показываться сообщение
 */
const ALERT_SHOW_TIME = 5000;

/**
 * Сообшение об ошибке
 */
const MESSAGE_SEND_ERROR = 'Не удалось отправить форму. Попробуйте ещё раз';
const MESSAGE_GET_ERROR = 'Не удалось получить данные';

/**
 * Сообшение об ошибке
 */
const MAX_PROPERTY_NUMBER = 10;


/**
 * Задержка для дребезга
 */
const RERENDER_DELAY = 500;

export {
  PROPERTY_TYPE, MIN_NAME_LENGTH, MAX_NAME_LENGTH, MAX_ROOM_PRICE, DEFAULT_ROOM_NUMBER, DEFAULT_ROOM_CAPACITY, MAX_ROOM_NUMBER,
  ROOM_VAL_MESSAGE, MAP_FILTER_DISABLED, AD_FORM_DISABLED, CENTER_MAP_POSITION, MAIN_PIN_ICON_URL, OFFER_PIN_ICON_URL, REQUEST_URL,
  ALERT_SHOW_TIME, OFFER_PIN_ICON_HEIGTH, OFFER_PIN_ICON_WIDTH, MAIN_PIN_ICON_HEIGTH, MAIN_PIN_ICON_WIDTH, SEND_DATA_URL, FILE_TYPES,
  DEFAULT_IMAGE_PLACEHOLDER, MESSAGE_SEND_ERROR, MESSAGE_GET_ERROR, MAX_PROPERTY_NUMBER, RERENDER_DELAY, PROPERTY_PRICE_HIGH, PROPERTY_PRICE_LOW
};
