import {InMemoryCache} from 'apollo-cache-inmemory'
import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import React from 'react'
import {ApolloProvider} from 'react-apollo'
import ReactDOM from 'react-dom'

import App from './components/App'


import 'normalize.css/normalize.css'
import './index.css'


const apolloClient = new ApolloClient(
  {
    link: new HttpLink({uri: 'http://localhost:4000/graph'}),
    cache: new InMemoryCache()
  }
)

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App/>
  </ApolloProvider>,
  document.getElementById('root')
)
