import actionTypes from './action_types';
import actionStatuses from '../../../../redux/constants/action_statuses';
import * as types from './types';
import { AppDispatch } from '../../../../redux/store';
import * as api from './api';
import errorParser from '../../../../utils/api_error_parser';
import { saveItem } from '../../../../utils/storage';
import localStorageKeys from '../../../../constants/local_storage_keys';

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
    saveItem({
      key: localStorageKeys.USER,
      value: response,
    });
  } catch (e: any) {
    dispatch({
      type: actionTypes.LOG_IN,
      status: actionStatuses.FAILED,
      payload: errorParser(e),
    });
  }
};

export const logOut = () => { };
