import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'GLINORCAL Landscape Construction - Luxury Quality, serving Marin, SF, and the North Bay';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();
