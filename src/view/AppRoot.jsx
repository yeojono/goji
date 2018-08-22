import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import HomePage from './home/components/HomePage';
import NoteEditorPage from './notes/components/NoteEditorPage';

/**
 * Loaders are manually specified here instead of in webpack config as this
 * should be the only place they're used.
 */
import 'style-loader!css-loader!@atlaskit/css-reset/dist/bundle.css';

export default class AppRoot extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Link to="/">Home</Link>
          <Link to="/notes">Notes</Link>
          <Route exact path="/" component={HomePage}/>
          <Route path="/notes" component={NoteEditorPage}/>
        </React.Fragment>
      </Router>
    );
  }
}