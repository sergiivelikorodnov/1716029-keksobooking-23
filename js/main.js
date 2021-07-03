import './map.js';
import './offer.js';
import './submit-form.js';
import { getData } from './fetch.js';
import { drawProperties } from './map.js';
import { showAlert } from './utils.js';
import { offerFormSubmit, resetForm } from './submit-form.js';


const getOffers = getData(
  (allProperties) => {
    drawProperties(allProperties);
  },
  (err) => {
    showAlert(`Произошла ошибка: ${err}`);
  });

getOffers();
offerFormSubmit(resetForm);
