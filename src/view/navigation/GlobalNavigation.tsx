import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import AkGlobalNavigation from '@atlaskit/global-navigation';
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled';

import { ROUTES } from '../../constants/routes';

const GlobalNavigationBase: React.SFC<RouteComponentProps> = ({ history }) => (
  <AkGlobalNavigation
    productIcon={() => <EditFilledIcon label="Goji home" size="medium" />}
    onProductClick={() => { history.push(ROUTES.NOTES); }}
  />
);

export const GlobalNavigation = withRouter(GlobalNavigationBase);
