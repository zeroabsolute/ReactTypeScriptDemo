import { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import classes from './index.module.scss';
import { logOut } from '../core/action_creators';
import routes from '../../../../constants/routes';

function LogOut(): ReactElement {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      dispatch(logOut());
      navigate(routes.LOG_IN);
    }, 500);
  }, []);

  return (
    <div className={classes.LogOutContainer}>
      {t('auth:loggingOut')}
    </div>
  );
}

export default LogOut;
