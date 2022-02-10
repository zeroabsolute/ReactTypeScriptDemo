import config from '../../../../config';
import * as types from './types';

export const logIn = async (
  { email, password }: types.LogInFormValues,
): Promise<types.User> => {
  const logInUrl = `${config.API_URL}/auth/login`;
  const response = await fetch(logInUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error('Invalid email or password');
  }

  return response.json();
};

export const logOut = () => {

};
