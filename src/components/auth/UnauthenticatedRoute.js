import React from 'react'
import {Redirect, Route} from 'react-router'

import auth from '../../auth'


const UnauthenticatedRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    (!auth.isAuthenticated) ?
      <Component {...props} /> :
      <Redirect
        to={{
          pathname: '/',
          state: {from: props.location}
        }}
      />
  )}
  />
)

export default UnauthenticatedRoute
