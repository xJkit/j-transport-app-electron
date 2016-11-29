import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import api from 'middleware/api';

function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(api),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
}

export default configureStore;
