import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';

import classes from './index.module.scss';
import LogInPage from '../routes/auth/LogIn';
import LogOutPage from '../routes/auth/LogOut';
import AccountsPage from '../routes/app/Accounts';
import SettingsPage from '../routes/app/Settings';
import NotFoundPage from '../routes/404';
import routes from '../../constants/routes';

const App = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className={classes.App}>
      <nav>
        <Link
          to={routes.LOG_IN}
          key={routes.LOG_IN}
        >
          {t('routes:logIn')}
        </Link>
        <Link
          to={routes.LOG_OUT}
          key={routes.LOG_OUT}
        >
          {t('routes:logOut')}
        </Link>
        <Link
          to={routes.ACCOUNTS}
          key={routes.ACCOUNTS}
        >
          {t('routes:accounts')}
        </Link>
        <Link
          to={routes.SETTINGS}
          key={routes.SETTINGS}
        >
          {t('routes:settings')}
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to={routes.ACCOUNTS} replace />} />
        <Route path={routes.LOG_IN} element={<LogInPage />} />
        <Route path={routes.LOG_OUT} element={<LogOutPage />} />
        <Route path={routes.ACCOUNTS} element={<AccountsPage />} />
        <Route path={routes.SETTINGS} element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
