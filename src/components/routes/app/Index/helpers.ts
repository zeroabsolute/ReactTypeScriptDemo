import routes from '../../../../constants/routes';

export const routeNamesMapper = (t: any, path: string): string => {
  switch (path) {
    case `${routes.APP_INDEX}/${routes.AUTHORS}`:
      return t('routes:authors');
    case `${routes.APP_INDEX}/${routes.SETTINGS}`:
      return t('routes:settings');
    default:
      return '';
  }
};
