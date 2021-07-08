import { activateFilter } from './activate-form.js';
import { MAX_PROPERTY_NUMBER, MESSAGE_GET_ERROR, REQUEST_URL } from './constants.js';
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
    .then(onSuccess)
    .catch(onError);
};

/**
 * Output data from Fetch
*/
let allData = [];

const outputProperties = createFetch(
  (data) => {
    drawProperties(data.slice(0, MAX_PROPERTY_NUMBER));
    activateFilter();
    allData = data;
  },
  showAlert,
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

export { getData, outputProperties, sendData, allData };
