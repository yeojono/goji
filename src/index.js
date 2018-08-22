import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './view/AppRoot';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <AppRoot />,
  document.getElementById('app')
);

module.hot.accept();