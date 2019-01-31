import React from 'react';
import { withRouter } from 'react-router-dom';

import AkGlobalNavigation from '@atlaskit/global-navigation';
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled';

const GlobalNavigationBase = ({ history }) => (
  <AkGlobalNavigation
    productIcon={() => <EditFilledIcon size="medium" />}
    onProductClick={() => { history.push('/notes'); }}
  />
);

export const GlobalNavigation = withRouter(GlobalNavigationBase);
