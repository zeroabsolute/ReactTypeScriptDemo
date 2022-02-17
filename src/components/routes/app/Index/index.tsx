import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation } from 'react-router-dom';
import { Layout } from 'antd';

import LeftMenu from '../../../common/LeftMenu';
import classes from './index.module.scss';
import CustomHeader from '../../../common/Header';
import { routeNamesMapper } from './helpers';

function AppIndex(): ReactElement {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <Layout className={classes.AppIndex}>
      <LeftMenu />
      <Layout>
        <CustomHeader title={routeNamesMapper(t, pathname)} />
        <Layout.Content><Outlet /></Layout.Content>
      </Layout>
    </Layout>
  );
}

export default AppIndex;
