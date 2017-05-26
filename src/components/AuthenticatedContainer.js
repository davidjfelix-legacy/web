import React from 'react'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import {compose, lifecycle } from 'recompose'

const mapStateToProps = ({auth}) => ({
  auth
})

const enhance = compose(
  connect(mapStateToProps),
  lifecycle({
    componentWillMount() {
      if (this.props.auth.user === null) {
        replace('/auth/login')
      }
    },
  })
)

const AuthenticatedContainer = ({children}) => (
  <div>{children}</div>
)

export default enhance(AuthenticatedContainer)