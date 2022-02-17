import { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import classes from './index.module.scss';
import { logOut } from '../core/action_creators';

function LogOut(): ReactElement {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      dispatch(logOut());
    }, 500);
  }, []);

  return (
    <div className={classes.LogOutContainer}>
      {t('auth:loggingOut')}
    </div>
  );
}

export default LogOut;
