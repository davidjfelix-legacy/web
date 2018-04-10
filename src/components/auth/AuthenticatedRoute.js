import React from 'react'
import {Redirect, Route} from 'react-router'

import auth from '../../auth'


const AuthenticatedRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated ?
      <Component {...props} /> :
      <Redirect
        to={{
          pathname: '/auth/login',
          state: {from: props.location}
        }}
      />
  )}
  />
)

export default AuthenticatedRoute
