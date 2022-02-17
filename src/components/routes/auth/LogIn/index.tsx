import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import {
  Formik,
  Field,
  Form,
} from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import * as types from '../core/types';
import classes from './index.module.scss';
import Button from '../../../common/Button';
import { colors } from '../../../../styles/abstracts/variables';
import { logIn } from '../core/action_creators';
import { RootState } from '../../../../redux/store';
import routes from '../../../../constants/routes';

function LogIn(): ReactElement {
  const { t } = useTranslation();
  const authState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const initialValues: types.LogInFormValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    email: Yup
      .string()
      .email(t('auth:invalidEmail'))
      .required(t('globals:required')),
    password: Yup
      .string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[?!@#$%^&*])[0-9a-zA-Z?!@#$%^&*]{6,}$/,
        (t('auth:invalidPassword')),
      )
      .required(t('globals:required')),
  });
  const onSubmit = async (values: types.LogInFormValues): Promise<void> => {
    dispatch(logIn({
      email: values.email,
      password: values.password,
    }));
  };

  if (authState.user) {
    return <Navigate to={`${routes.APP_INDEX}/${routes.AUTHORS}`} replace />;
  }

  return (
    <div className={classes.LogInContainer}>
      Log In Page
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors }) => (
          <Form className={classes.Form}>
            <label htmlFor="email">{t('auth:email')}</label>
            <Field
              id="email"
              name="email"
              placeholder="john@acme.com"
              type="email"
            />
            <div style={{ color: colors.danger }}>{errors.email}</div>
            <label htmlFor="password">{t('auth:password')}</label>
            <Field
              id="password"
              name="password"
              placeholder={t('auth:passwordPlaceholder')}
              type="password"
            />
            <div style={{ color: colors.danger }}>{errors.password}</div>
            <Button
              htmlType="submit"
              label={t('auth:logIn')}
              type="default"
              loading={authState.isLoggingIn}
            />
            <div className={classes.Error}>{authState.error}</div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LogIn;
