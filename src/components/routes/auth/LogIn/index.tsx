import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import {
  Formik,
  Field,
  Form,
  // FormikHelpers,
} from 'formik';

import * as types from './types';
import classes from './index.module.scss';
import Button from '../../../common/Button';
import { colors } from '../../../../styles/abstracts/variables';

function LogIn(): ReactElement {
  const { t } = useTranslation();
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
  const onSubmit = (values: types.LogInFormValues) => {
    console.log(values);
  };

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
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LogIn;
