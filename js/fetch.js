import { REQUEST_URL } from './constants.js';


const getData = (onSuccess, onError) => () => {
  fetch(
    REQUEST_URL,
    {
      method: 'GET',
    },
  )
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

export { getData };
