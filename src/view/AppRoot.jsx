import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import HomePage from './home/components/HomePage';
import NoteEditorPage from './notes/components/NoteEditorPage';
import { colors } from '@atlaskit/theme';

/**
 * Loaders are manually specified here instead of in webpack config as this
 * should be the only place they're used.
 */
import 'style-loader!css-loader!@atlaskit/css-reset/dist/bundle.css';

import styled from 'react-emotion';
import { Provider } from 'unstated';
import stores from './app-state/stores';

const BootlegNav = styled.nav`
  width: 100vw;
  height: 64px;

  background-color: ${colors.R400};

  display: flex;
  align-items: center;
  padding-left: 8px;

  > * {
    margin-right: 8px;
    color: ${colors.R50};
  }

  a {
    text-decoration: none;
  }
`;

const TitleMark = styled.h1`
  font-family: "Charlie Display";
  margin-right: 16px;
`;

export default class AppRoot extends React.Component {
  render() {
    return (
      <Provider inject={stores}>
        <Router>
          <React.Fragment>
            <BootlegNav>
              <TitleMark>Goji</TitleMark>
              <Link to="/">Home</Link>
              <Link to="/notes">Notes</Link>
            </BootlegNav>
            <Route exact path="/" component={HomePage}/>
            <Route path="/notes/:noteId" component={NoteEditorPage}/>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}