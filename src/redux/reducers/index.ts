import { combineReducers } from 'redux';

import localesReducer from '../modules/locales/reducers';

const baseReducer = combineReducers({
  localization: localesReducer,
});

export default baseReducer;
