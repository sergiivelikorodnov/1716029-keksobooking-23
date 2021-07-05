import { REQUEST_URL } from './constants.js';
import { drawProperties } from './map.js';
import { showAlert } from './utils.js';

function getData(method, url, body = null) {
  return fetch(url, {
    method: method,
    body: body,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return response.json().then((error) => {
      const e = new Error(`${response.status} ${response.statusText}`);
      e.data = error;
      throw e;
    });
  });
}

const getOffers = () => {
  getData('GET', REQUEST_URL)
    .then((data) => drawProperties(data))
    .catch((err) => showAlert(err));
};

export { getOffers, getData };
