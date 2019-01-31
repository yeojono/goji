import React from 'react';
import { Link } from 'react-router-dom';

export interface Props {
  href: string;
  className: string;
}

export const RouterLinkComponent: React.SFC<Props> = ({ href, className, children }) => (
  <Link to={href} className={className}>
    {children}
  </Link>
);
