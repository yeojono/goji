import React from 'react';
import styled from 'styled-components';
import { Editor } from '@atlaskit/editor-core';

const HomeOuter = styled.div`
  margin: 20px auto 0;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid grey;
  width: 400px;
`;

export default class HomePage extends React.Component {
  render() {
    return (
      <HomeOuter>
        🏠
      </HomeOuter>
    );
  }
}