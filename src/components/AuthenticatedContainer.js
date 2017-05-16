import React from 'react'
import {compose, lifecycle } from 'recompose'

import auth from '../auth'

const enhance = compose(
  lifecycle({
    componentWillMount() {
    },
  })
)

const AuthenticatedContainer = ({children}) => (
  <div>{children}</div>
)

export default enhance(AuthenticatedContainer)