import React from 'react'
import {compose, lifecycle } from 'recompose'

import auth from '../auth'

const enhance = compose(
  lifecycle({
    componentWillMount() {
    },
  })
)

const NotAuthenticatedContainer = ({children}) => (
  <div>{children}</div>
)

export default enhance(NotAuthenticatedContainer)