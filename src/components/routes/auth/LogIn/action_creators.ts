import actionTypes from './action_types';
import actionStatuses from '../../../../redux/constants/action_statuses';
import * as types from './types';
import { AppDispatch } from '../../../../redux/store';
import * as api from './api';

export const logIn = (
  { email, password }: types.LogInFormValues,
) => async (dispatch: AppDispatch): Promise<void> => {
  dispatch({
    type: actionTypes.LOG_IN,
    status: actionStatuses.STARTED,
  });

  try {
    const response = await api.logIn({ email, password });
    dispatch({
      type: actionTypes.LOG_IN,
      status: actionStatuses.SUCCEEDED,
      payload: response,
    });
  } catch (e: any) {
    dispatch({
      type: actionTypes.LOG_IN,
      status: actionStatuses.FAILED,
      payload: e.message,
    });
  }
};

export const logOut = () => { };
