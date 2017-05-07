import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'

import auth from '../auth'
import { updateAuth } from '../actions/auth'
import PageHeader from './PageHeader'

import '../css/App.css'

const styles = {
  app: {
    minHeight: '100vh',
  },
}

const enhance = compose(
  connect(),
  lifecycle({
    componentWillMount() {
      this.unsubscribeAuth = auth.onAuthStateChanged((user) => (
        this.props.dispatch(updateAuth({user}))
      ))
    },

    componentWillUnmount() {
      this.unsubscribeAuth()
    },
  }),
)

const App = ({children}) => (
  <div style={styles.app}>
    <PageHeader />
    {children}
  </div>
)

export default enhance(App)
