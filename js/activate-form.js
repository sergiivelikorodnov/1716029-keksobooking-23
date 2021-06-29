const adForm = document.querySelector('.ad-form');
const fieldsets = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');

/**
   * Deactivate Form
   */
const deactivateForm = () => {
  adForm.classList.add('ad-form--disabled');

  fieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });

  mapFilters.classList.add('map__filters--disabled');
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
};
/** */

export { deactivateForm, activateForm };
