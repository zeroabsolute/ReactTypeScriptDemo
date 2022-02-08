import { ReactElement } from 'react';
import { Button } from 'antd';
import './App.css';

const App = (): ReactElement => {
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
        Click me!
      </Button>
    </div>
  );
};

export default App;
