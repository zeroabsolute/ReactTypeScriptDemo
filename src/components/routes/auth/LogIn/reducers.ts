import * as types from './types';
import actionTypes from './action_types';
import actionStatuses from '../../../../redux/constants/action_statuses';

const initialState: types.AuthState = {
  user: undefined,
  isLoggingIn: false,
  error: undefined,
};

const reducer = (
  state: types.AuthState = initialState,
  action: types.AuthAction,
): types.AuthState => {
  if (action.type === actionTypes.LOG_IN) {
    if (action.status === actionStatuses.STARTED) {
      return {
        ...state,
        isLoggingIn: true,
      };
    }
    if (action.status === actionStatuses.SUCCEEDED) {
      return {
        ...state,
        isLoggingIn: false,
        user: action.payload as types.User,
      };
    }
    if (action.status === actionStatuses.FAILED) {
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload as string,
      };
    }

    return state;
  }

  return state;
};

export default reducer;
