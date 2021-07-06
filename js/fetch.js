import { activateFilter } from './activate-form.js';
import { MESSAGE_GET_ERROR, REQUEST_URL } from './constants.js';
import { drawProperties } from './map.js';
import { showAlert } from './utils.js';


/**
 * Get fetch
*/

function getData(method, url, body) {
  return fetch(url, {
    method: method,
    body: body,
  });
}


/**
 * Get data
*/

const createFetch = (onSuccess, onError, method, url, body = null) => () => {
  getData(method, url, body)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((json) => {
      onSuccess(json);
    })
    .catch((err) => {
      onError(err);
    });
};

/**
 * Output data from Fetch
*/

const outputProperties = createFetch(
  (data) => {
    drawProperties(data);
    activateFilter();
  },
  (err) => {
    showAlert(err);
  },
  'GET', REQUEST_URL);

/**
 * Send data fetch
*/

const sendData = (onSuccess, onFail, method, url, body) => {
  getData(method, url, body)

    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail(MESSAGE_GET_ERROR);
      }
    })
    .catch(() => {
      onFail(MESSAGE_GET_ERROR);
    });
};

export { getData, outputProperties, sendData };
