import { AD_FORM_DISABLED, MAP_FILTER_DISABLED } from './constants.js';

const adForm = document.querySelector('.ad-form');
const fieldsets = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const selectors = mapFilters.querySelectorAll('select');

/**
   * Disable Form Function
   */

const disableForm = (object, objectClass, collections) => {
  object.classList.add(objectClass);

  collections.forEach((collectionsObject) => {
    collectionsObject.disabled = true;
  });
};

/**
   * Enable Form Function
   */

const enableForm = (object, objectClass, collections) => {
  object.classList.remove(objectClass);

  collections.forEach((collectionsObject) => {
    collectionsObject.disabled = false;
  });
};

/**
   * Deactivate Form
   */

const deactivateForm = () => {
  disableForm(adForm, AD_FORM_DISABLED, fieldsets);
  disableForm(mapFilters, MAP_FILTER_DISABLED, selectors);
};

/**
   * Activate Form
   */
const activateForm = () => {
  enableForm(adForm, AD_FORM_DISABLED, fieldsets);
  // enableForm(mapFilters, MAP_FILTER_DISABLED, selectors);
};

const activateFilter = () => {
  enableForm(mapFilters, MAP_FILTER_DISABLED, selectors);
};

export { deactivateForm, activateForm, activateFilter };
