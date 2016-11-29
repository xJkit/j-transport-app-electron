import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Other reducers are imported below
import mrtReducer from './mrt';

const rootReducer = combineReducers({
  routing: routerReducer,
  mrt: mrtReducer,
});

export default rootReducer;
