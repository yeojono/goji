import React from 'react';
import { Redirect } from 'react-router-dom';
import uuid from 'uuid';

import { ROUTES } from '../../../../constants/routes';

export class NewNoteRoute extends React.Component<{}> {
  render() {
    return (
      <Redirect to={`${ROUTES.NOTES}/${uuid()}`} />
    );
  }
}

export default NewNoteRoute;
