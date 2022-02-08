import { ReactElement } from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

import './App.css';

const App = (): ReactElement => {
  const { t } = useTranslation();

  const onButtonClick = (): void => {
    console.log('Cliked');
  };

  return (
    <div className="App">
      <Button
        onClick={onButtonClick}
        type="default"
        danger
      >
        {t('globals:save')}
      </Button>
    </div>
  );
};

export default App;
