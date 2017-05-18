import React from 'react'
import { connect } from 'react-redux'
import {compose, lifecycle } from 'recompose'
import { replace } from 'react-router-redux'

import auth from '../auth'
import { updateAuth } from '../actions/auth'

const mapStateToProps = ({auth}) => ({
  auth
})

const enhance = compose(
  connect(mapStateToProps),
  lifecycle({
    componentWillMount() {
      this.unsubscribeAuth = auth.onAuthStateChanged((user) => {
        this.props.dispatch(updateAuth({user}))
        if (this.props.auth.user !== null) {
          this.props.dispatch(replace('/'))
        }
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