import React from 'react';
import { Link } from 'react-router-dom';

export const RouterLinkComponent = ({ href, className, children }) => (
  <Link to={href} className={className}>
    {children}
  </Link>
);
