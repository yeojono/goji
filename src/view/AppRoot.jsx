import React from 'react';
import styled from 'react-emotion';
import { Provider } from 'unstated';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom'
import {
  Item,
  LayoutManager,
  MenuSection,
  NavigationProvider,
  withNavigationViewController,
} from '@atlaskit/navigation-next';
import GlobalNavigation from '@atlaskit/global-navigation';
import { colors } from '@atlaskit/theme';
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled';

import { HomeRoute } from './home/components/HomeRoute';
import { NotesRoute } from './notes/components/NotesRoute';
import { NoteEditorRoute } from './notes/components/NoteEditorRoute';
import { RouterLinkComponent } from './components/RouterLinkComponent';
import { NavigationMenuLink } from './components/NavigationMenuLink';

/**
 * Loaders are manually specified here instead of in webpack config as this
 * should be the only place they're used.
 */
import 'style-loader!css-loader!@atlaskit/css-reset/dist/bundle.css';

const MyGlobalNavigation = () => (
  <GlobalNavigation
    productIcon={() => <EditFilledIcon size="medium" />}
    onProductClick={() => {}}
  />
);

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

const ContainerNavivation = () => (
  <MenuSection>
    {({ className }) => (
      <div className={className}>
        <NavigationMenuLink text="Dashboard" component={RouterLinkComponent} href="/notes">Deshbord</NavigationMenuLink>
      </div>
    )}
  </MenuSection>
)

export class AppRoot extends React.Component {
  render() {
    return (
      <LayoutManager
        globalNavigation={MyGlobalNavigation}
        productNavigation={() => null}
        containerNavigation={ContainerNavivation}
      >
        <>
          <BootlegNav>
            <TitleMark>Goji</TitleMark>
            <Link to="/">Home</Link>
            <Link to="/notes">Notes</Link>
          </BootlegNav>
          <Switch>
            <Route exact path="/" component={HomeRoute}/>
            <Route exact path="/notes" component={NotesRoute}/>
            <Route path="/notes/:noteId" component={NoteEditorRoute}/>
          </Switch>
        </> 
      </LayoutManager>
    );
  }
}

export default ({ stores }) => (
  <Provider inject={stores}>
    <Router>
      <NavigationProvider>
        <AppRoot />
      </NavigationProvider>
    </Router>
  </Provider>
);
