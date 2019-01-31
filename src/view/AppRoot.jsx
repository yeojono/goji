import React from 'react';
import styled from 'react-emotion';
import { Provider } from 'unstated';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import {
  Item,
  LayoutManagerWithViewController,
  MenuSection,
  NavigationProvider,
  withNavigationViewController,
} from '@atlaskit/navigation-next';
import { colors } from '@atlaskit/theme';

import { HomeRoute } from './home/components/HomeRoute';
import { NotesRoute } from './notes/components/NotesRoute';
import { NoteEditorRoute } from './notes/components/NoteEditorRoute';
import { NewNoteRoute } from './notes/components/NewNoteRoute';
import { GlobalNavigation } from './navigation/GlobalNavigation';
import { customComponents } from './navigation/custom-components';
import { memesView } from './navigation/nav-views';

/**
 * Loaders are manually specified here instead of in webpack config as this
 * should be the only place they're used.
 */
import 'style-loader!css-loader!@atlaskit/css-reset/dist/bundle.css';

export class AppRootBase extends React.Component {
  componentDidMount() {
    this.props.navigationViewController.addView(memesView);
    this.props.navigationViewController.setView(memesView.id);
  }

  render() {
    return (
      <LayoutManagerWithViewController
        globalNavigation={GlobalNavigation}
        customComponents={customComponents}
      >
        <Switch>
          <Route exact path="/notes" component={NotesRoute}/>
          <Route path="/notes/new" component={NewNoteRoute}/>
          <Route path="/notes/:noteId" component={NoteEditorRoute}/>
        </Switch>
      </LayoutManagerWithViewController>
    );
  }
}

export const AppRoot = withNavigationViewController(AppRootBase);

export default ({ stores }) => (
  <Provider inject={stores}>
    <Router>
      <NavigationProvider>
        <AppRoot />
      </NavigationProvider>
    </Router>
  </Provider>
);
