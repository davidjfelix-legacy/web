import React from 'react'
import { connect } from 'react-redux'

import UserView from './UserView'


const UserContainer = ({children, params}) => (
  <div>
    <UserView userId={params.userId}>
      {children}
    </UserView>
  </div>
)

export default connect()(UserContainer)