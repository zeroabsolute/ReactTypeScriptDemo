export type LogInFormValues = {
  email: string,
  password: string,
};

export type User = {
  _id: string,
  email: string,
  firstName: string,
  lastName: string,
  confirmationLevel: number,
  confirmationToken: string,
  isAdmin: boolean,
  createdAt: string,
  updatedAt: string,
  token: string,
};
