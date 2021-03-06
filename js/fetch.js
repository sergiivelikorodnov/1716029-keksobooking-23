
import { MESSAGE_GET_ERROR } from './constants.js';

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

export { getData, sendData, createFetch };
