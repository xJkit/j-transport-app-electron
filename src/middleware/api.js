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
  return fetch(endpoint)
    .then(res => res.json())
    .then(json => {
      console.warn(`got data: ${json}`);
      store.dispatch({
        type: successType,
        payload: json,
      });
    })
    .catch(err => {
      console.warn(`fetch data err: ${err}`);
      store.dispatch({
        type: failureType,
        payload: err,
      });
    });
};
