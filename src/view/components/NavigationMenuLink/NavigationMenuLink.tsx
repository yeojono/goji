import React from 'react';
import { Route } from 'react-router-dom';

import { Item } from '@atlaskit/navigation-next';

import { RouterLinkComponent } from '../RouterLinkComponent';

export interface Props {
  href: string;
}

export const NavigationMenuLink: React.SFC<Props> = ({ href, ...props }) => (
  <Route
    render={({ location: { pathname } }) => (
      <Item
        href={href}
        component={RouterLinkComponent}
        isSelected={pathname === href}
        {...props}
      />
    )}
  />
);