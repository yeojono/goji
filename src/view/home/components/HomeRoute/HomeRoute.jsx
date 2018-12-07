import React from 'react';
import styled from 'react-emotion';

import { Editor } from '@atlaskit/editor-core';
import { withNavigationViewController } from '@atlaskit/navigation-next';

const HomeOuter = styled.div`
  margin: 20px auto 0;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid grey;
  width: 400px;
`;

export class HomeRouteBase extends React.Component {
  // componentDidMount() {
  //   const { navigationViewController } = this.props;
  //   navigationViewController.setView('memes');
  // }

  render() {
    return (
      <HomeOuter>
        🏠
      </HomeOuter>
    );
  }
}

export const HomeRoute = HomeRouteBase;
// export const HomeRoute = withNavigationViewController(HomeRouteBase);
