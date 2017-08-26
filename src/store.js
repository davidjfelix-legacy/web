import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

import { rootReducer } from './reducers'

// Configure The default Redux store
const configureStore = (initialState) => {

  // Create a store using the root reducer, initial state and middleware
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(browserHistory),
        thunkMiddleware,
        createLogger({ collapsed: true }),
      )
    ))

  // Enable hot module reloading for webpack
  if (module.hot) {
    module.hot.accept(
      './reducers',
      () => store.replaceReducer(rootReducer)
    )
  }

  return store
}

export default configureStore
