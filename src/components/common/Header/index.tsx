import { ReactElement } from 'react';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import classes from './index.module.scss';
import { RootState } from '../../../redux/store';

const { Header } = Layout;

type CustomHeaderProps = {
  title: string,
}

function CustomHeader(props: CustomHeaderProps): ReactElement {
  const { t } = useTranslation();
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <Header className={classes.HeaderContainer}>
      <div className={classes.Title}>{props.title}</div>
      <div className={classes.UserSection}>
        {`${t('globals:welcome')} ${user?.firstName}`}
      </div>
    </Header>
  );
}

CustomHeader.defaultProps = {
};

export default CustomHeader;
