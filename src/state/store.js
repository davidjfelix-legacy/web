import { applyMiddleware, compose, createStore } from 'redux';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import { responsiveStoreEnhancer } from 'redux-responsive';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

import mg4App from './root-reducer';

const finalCreateStore = compose(
  responsiveStoreEnhancer,
  applyMiddleware(
    routerMiddleware(browserHistory),
    thunkMiddleware,
    promiseMiddleware,
    createLogger({ collapsed: true }),
  )
)(createStore);

let store;

export function configure(initialState) {
  store = finalCreateStore(mg4App, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./root-reducer', () => store.replaceReducer(mg4App));
  }

  return store;
}

export function get() { return store; }
