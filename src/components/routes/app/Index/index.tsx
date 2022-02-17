import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, Link } from 'react-router-dom';

import routes from '../../../../constants/routes';
import classes from './index.module.scss';

function AppIndex(): ReactElement {
  const { t } = useTranslation();

  return (
    <div className={classes.AppIndex}>
      {t('globals:albanian')}
      <nav>
        <Link
          to={routes.AUTHORS}
          key={routes.AUTHORS}
        >
          {t('routes:authors')}
        </Link>
        <Link
          to={routes.SETTINGS}
          key={routes.SETTINGS}
        >
          {t('routes:settings')}
        </Link>
        <Link
          to={routes.LOG_OUT}
          key={routes.LOG_OUT}
        >
          {t('routes:logOut')}
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default AppIndex;
