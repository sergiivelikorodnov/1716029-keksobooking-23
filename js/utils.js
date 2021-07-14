import { ALERT_SHOW_TIME } from './constants.js';
import { keydownHandler, successMessageHandler } from './submit-form.js';

/**
 * Show Alert Message
 */

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.textContent = message;

  document.body.append(alertContainer);
  alertContainer.classList.add('alert-message');
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const { body } = document;

const removeEvtListener = () => {
  body.removeEventListener('click', successMessageHandler);
  body.removeEventListener('keydown', keydownHandler);
};

export { showAlert, removeEvtListener };
