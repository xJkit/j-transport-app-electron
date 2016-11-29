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
      store.dispatch({
        type: successType,
        payload: json,
      });
    })
    .catch(() => {
      store.dispatch({
        type: failureType,
        payload: undefined,
      });
    });
};
