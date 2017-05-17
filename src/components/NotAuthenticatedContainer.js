import React from 'react'
import { connect } from 'react-redux'
import {compose, lifecycle } from 'recompose'
import { replace } from 'react-router-redux'

import auth from '../auth'
import { updateAuth } from '../actions/auth'


const enhance = compose(
  connect(),
  lifecycle({
    componentWillMount() {
      this.unsubscribeAuth = auth.onAuthStateChanged((user) => {
        this.props.dispatch(updateAuth({user}))
        this.props.dispatch(replace('/'))
      })
    },

    componentWillUnmount() {
      this.unsubscribeAuth()
    },
  }),
)

const NotAuthenticatedContainer = ({children}) => (
  <div>{children}</div>
)

export default enhance(NotAuthenticatedContainer)