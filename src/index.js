import {InMemoryCache} from 'apollo-cache-inmemory'
import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import {setContext} from 'apollo-link-context'
import React from 'react'
import {ApolloProvider} from 'react-apollo'
import ReactDOM from 'react-dom'

import auth from './auth'
import App from './components/App'


import 'normalize.css/normalize.css'
import './index.css'


const httpLink = new HttpLink({uri: 'http://localhost:4000/graph'})
const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: auth.header
  }
}))

const apolloClient = new ApolloClient(
  {
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  }
)

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App/>
  </ApolloProvider>,
  document.getElementById('root')
)
