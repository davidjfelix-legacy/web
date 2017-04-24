import { applyMiddleware, compose, createStore } from 'redux';
import createLogger from 'redux-logger';
import { responsiveStoreEnhancer } from 'redux-responsive';
import { createEpicMiddleware } from 'redux-observable';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

import { rootReducer, rootEpic } from './reducers';

// Configure The default Redux store
const configureStore = (initialState) => {

  // Create a store using the root reducer, initial state and middleware
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      responsiveStoreEnhancer,
      applyMiddleware(
        routerMiddleware(browserHistory),
        thunkMiddleware,
        createEpicMiddleware(rootEpic),
        createLogger({ collapsed: true }),
      )
    ));

  // Enable hot module reloading for webpack
  if (module.hot) {
    module.hot.accept(
      './reducers',
      () => store.replaceReducer(rootReducer)
    );
  }

  return store;
}

export default configureStore;
