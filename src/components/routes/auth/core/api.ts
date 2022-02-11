import Axios from 'axios';

import config from '../../../../config';
import * as types from './types';

const logIn = async (
  { email, password }: types.LogInFormValues,
): Promise<types.User> => {
  const logInUrl = `${config.API_URL}/auth/login`;
  const response = await Axios({
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    url: logInUrl,
    data: { email, password },
  });

  return response.data;
};

export default logIn;
