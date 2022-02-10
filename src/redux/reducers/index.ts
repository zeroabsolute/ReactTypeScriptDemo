import { combineReducers } from 'redux';

import localesReducer from '../modules/locales/reducers';
import authReducer from '../../components/routes/auth/LogIn/reducers';

const baseReducer = combineReducers({
  localization: localesReducer,
  auth: authReducer,
});

export default baseReducer;
