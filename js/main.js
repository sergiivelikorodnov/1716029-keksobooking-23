import './map.js';
import './offer.js';
import './submit-form.js';
import { getOffers } from './fetch.js';
import { offerFormSubmit, resetForm } from './submit-form.js';

getOffers();
offerFormSubmit(resetForm);
