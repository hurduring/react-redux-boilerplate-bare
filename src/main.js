import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './redux/configure-store';

import mySaga from './sagas';

import App from './app';

const store = configureStore();

store.runSaga(mySaga);

const rootEl = document.getElementById('root');


if (module.hot) {
  module.hot.accept('./app', () => {
    ReactDOM.render(
      <App store={store}/>,
      rootEl
    )
  });

  module.hot.accept('./sagas', () => {
    store.close();
    store.runSaga(mySaga);
  });
}

ReactDOM.render(
  <App store={store}/>,
  rootEl
);
