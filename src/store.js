import { applyMiddleware, compose, createStore } from 'redux';
import createLogger from 'redux-logger';
import { responsiveStoreEnhancer } from 'redux-responsive';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

import mg4App from './reducers';

// Configure The default Redux store
const configureStore = (initialState) => {

  // Create a store using the root reducer, initial state and middleware
  const store = createStore(
    mg4App,
    initialState,
    compose(
      responsiveStoreEnhancer,
      applyMiddleware(
        routerMiddleware(browserHistory),
        thunkMiddleware,
        createLogger({ collapsed: true }),
      )
    ));

  // Enable hot module reloading for webpack
  if (module.hot) {
    module.hot.accept(
      './reducers',
      () => store.replaceReducer(mg4App)
    );
  }

  return store;
}

export default configureStore;
