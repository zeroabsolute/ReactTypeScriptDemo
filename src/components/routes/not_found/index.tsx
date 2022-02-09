import { ReactElement } from 'react';

import classes from './index.module.scss';

function NotFound(): ReactElement {
  return (
    <div className={classes.NotFoundContainer}>
      Not Found Page
    </div>
  );
}

export default NotFound;
