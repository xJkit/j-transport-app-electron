/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
export const CALL_API = Symbol('Call API');
import 'isomorphic-fetch';

export default store => next => action => {
  if (!action[CALL_API]) {
    return next(action);
  }
  const [requestType, successType, failureType] = action[CALL_API].types;
  const { endpoint } = action[CALL_API];
  store.dispatch({
    type: requestType,
  });
  return fetch(endpoint, {
    mode: 'cors',
    method: 'get',
  }).then(res => {
    if (!res.ok) {
      console.warn(`not ok, status: ${res.status}`);
      return Promise.reject(res);
    }
    console.warn(`ok, status: ${res.status}`);
    return res.json();
  }).then(json => {
    store.dispatch({
      type: successType,
      payload: json,
    });
  })
    .catch((err) => {
      store.dispatch({
        type: failureType,
        payload: undefined,
      });
      console.warn(err);
    });
};
