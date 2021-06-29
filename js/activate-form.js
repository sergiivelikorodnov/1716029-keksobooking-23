const adForm = document.querySelector('.ad-form');
const fieldsets = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const selectors = mapFilters.querySelectorAll('select');

/**
   * Deactivate Form
   */
const deactivateForm = () => {
  adForm.classList.add('ad-form--disabled');

  fieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });

  mapFilters.classList.add('map__filters--disabled');

  selectors.forEach((selector) => {
    selector.disabled = true;
  });
};

/**
   * Activate Form
   */
const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');

  fieldsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });

  mapFilters.classList.remove('map__filters--disabled');

  selectors.forEach((selector) => {
    selector.disabled = false;
  });
};
/** */

export { deactivateForm, activateForm };
