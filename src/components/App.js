import React, { Component } from 'react'

import auth from '../auth'
import { updateAuth } from '../actions/auth'
import PageHeader from './PageHeader'

import '../css/App.css'

let unsubscribeAuth = null

class App extends Component {
  componentWillMount() {
    unsubscribeAuth = auth.onAuthStateChanged((user) => (
      this.props.dispatch(updateAuth({user}))
    ))
  }

  componentWillUnmount() {
    unsubscribeAuth()
  }

  render() {
    return (
      <div>
        <PageHeader />
        {this.props.children}
      </div>
    )
  }
}

export default App
