import { ReactElement } from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import classes from './index.module.scss';
import LogInPage from '../routes/auth/LogIn';
import LogOutPage from '../routes/auth/LogOut';
import AppIndex from '../routes/app/Index';
import AuthorsPage from '../routes/app/Authors';
import SettingsPage from '../routes/app/Settings';
import NotFoundPage from '../routes/not_found';
import routes from '../../constants/routes';
import ProtectedRoute from '../common/ProtectedRoute';

const App = (): ReactElement => (
  <div className={classes.App}>
    <Routes>
      <Route
        path="/"
        element={<Navigate to={`${routes.APP_INDEX}/${routes.AUTHORS}`} replace />}
      />
      <Route path={routes.LOG_IN} element={<LogInPage />} />
      <Route
        path={routes.LOG_OUT}
        element={<ProtectedRoute><LogOutPage /></ProtectedRoute>}
      />
      <Route
        path={routes.APP_INDEX}
        element={<ProtectedRoute><AppIndex /></ProtectedRoute>}
      >
        <Route
          path={routes.AUTHORS}
          element={<ProtectedRoute><AuthorsPage /></ProtectedRoute>}
        />
        <Route
          path={routes.SETTINGS}
          element={<ProtectedRoute><SettingsPage /></ProtectedRoute>}
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);

export default App;
