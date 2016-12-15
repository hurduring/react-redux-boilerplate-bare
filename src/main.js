import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { Provider } from 'react-redux';

import mySaga from './sagas';
import appReducer from './reducer';

import App from './app';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(sagaMiddleware));

store.runSaga = sagaMiddleware.run;
store.close = () => store.dispatch(END);

store.runSaga(mySaga);

const rootEl = document.getElementById('root');
const renderApp = () => (
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    rootEl
  )
);

if (module.hot) {
  module.hot.accept();
  module.hot.accept('./reducer', () => store.replaceReducer(appReducer));
  module.hot.accept('./app', () => renderApp());
  module.hot.accept('./sagas', () => {
    store.close();
    store.runSaga(mySaga);
  })
}

renderApp();
