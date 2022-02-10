import { ReactElement } from 'react';

import classes from './index.module.scss';

function Authors(): ReactElement {
  return (
    <div className={classes.AuthorsContainer}>
      Authors Page
    </div>
  );
}

export default Authors;
