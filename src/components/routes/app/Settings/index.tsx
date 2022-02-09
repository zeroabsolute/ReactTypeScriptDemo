import { ReactElement } from 'react';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { RootState } from '../../../../redux/store';
import locales from '../../../../constants/locales';
import selectLanguage from '../../../../redux/modules/locales/actions';
import * as localizationTypes from '../../../../redux/modules/locales/types';
import classes from './index.module.scss';

function Settings(): ReactElement {
  const { t, i18n } = useTranslation();
  const localizationState: localizationTypes.switchLanguageState = useSelector(
    (state: RootState) => state.localization,
  );
  const dispatch = useDispatch();

  const onButtonClick = (selectedLanguage: string): void => {
    dispatch(selectLanguage(selectedLanguage));
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className={classes.SettingsContainer}>
      Settings Page
      <Button
        disabled={localizationState.selectedLanguage === locales.ALBANIAN}
        onClick={() => onButtonClick(locales.ALBANIAN)}
        type="default"
        danger
      >
        {t('globals:albanian')}
      </Button>
      <Button
        disabled={localizationState.selectedLanguage === locales.ENGLISH}
        onClick={() => onButtonClick(locales.ENGLISH)}
        type="primary"
      >
        {t('globals:english')}
      </Button>
    </div>
  );
}

export default Settings;
