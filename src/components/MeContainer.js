import React from 'react'
import { connect } from 'react-redux'

import UserView from './UserView'


const mapStateToProps = ({auth}) => ({
  auth
})

const MeContainer = ({auth, children}) => (
  <div>
    <UserView userId={auth.user.uid}>
      {children}
    </UserView>
  </div>
)

export default connect(mapStateToProps)(MeContainer)