import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { connectRouter } from 'connected-react-router';
import store, { history } from './store';
import App from './containers/app';

import './index.css';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <connectRouter history={history}>
      <div>
        <App />
      </div>
    </connectRouter>
  </Provider>,
  target
);
