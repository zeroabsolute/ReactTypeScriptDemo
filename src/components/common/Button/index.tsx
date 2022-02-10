import { ReactElement } from 'react';
import { Button } from 'antd';

import classes from './index.module.scss';

type CustomButtonProps = {
  htmlType?: 'button' | 'submit' | 'reset' | undefined,
  type: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined,
  onClick?: () => void,
  label: string,
  loading?: boolean,
};

function CustomButton(props: CustomButtonProps): ReactElement {
  return (
    <Button
      className={classes.ButtonContainer}
      htmlType={props.htmlType}
      type={props.type}
      onClick={props.onClick}
      loading={props.loading}
    >
      {props.label}
    </Button>
  );
}

CustomButton.defaultProps = {
  htmlType: undefined,
  onClick: undefined,
  loading: false,
};

export default CustomButton;
