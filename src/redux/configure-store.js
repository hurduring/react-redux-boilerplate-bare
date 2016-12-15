import { createStore, applyMiddleware, compose } from 'redux';
import appReducer from './reducer';
import createSagaMiddleware, { END } from 'redux-saga';
import logger from 'redux-logger';

export default function () {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(appReducer, {}, compose(
    applyMiddleware(sagaMiddleware, logger()), window.devToolsExtension())
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  if (module.hot) {
    module.hot.accept('./reducer', () => store.replaceReducer(appReducer));
  }

  return store;
}