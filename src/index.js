import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './components/App'

import configureStore, {browserHistory} from './store'

import './index.css'
import 'normalize.css/normalize.css'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App history={browserHistory}/>
  </Provider>,
  document.getElementById('root')
)
