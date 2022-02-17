import { ReactElement } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import routes from '../../../constants/routes';
import classes from './index.module.scss';

const { Sider } = Layout;

function LeftMenu(): ReactElement {
  const { t } = useTranslation();

  return (
    <Sider className={classes.LeftMenuContainer}>
      <Menu theme="dark">
        <Menu.Item>
          <Link
            to={routes.AUTHORS}
            key={routes.AUTHORS}
          >
            {t('routes:authors')}
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={routes.SETTINGS}
            key={routes.SETTINGS}
          >
            {t('routes:settings')}
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={routes.LOG_OUT}
            key={routes.LOG_OUT}
          >
            {t('routes:logOut')}
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

LeftMenu.defaultProps = {
};

export default LeftMenu;
