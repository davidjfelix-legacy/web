import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import { withLoading, withNotFound } from './hocs'

import UserView from './UserView'

const styles = {
  view: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "2em",
  }
}

const mapStateToProps = ({auth}) => ({
  auth
})

const UserLoading = () => (
  <div>...</div>
)

const UserNotFound = () => (
  <div>User not found</div>
)

const enhance = compose(
  connect(mapStateToProps),
  withLoading(
    (props) => (Object.keys(props.auth).length === 0),
    UserLoading
  ),
  withNotFound(
    (props) => (props.auth.user === null),
    UserNotFound
  )
)

const MeContainer = ({auth, children}) => (
  <div style={styles.view}>
    <UserView userId={auth.user.uid} baseUrl='/me' isEditable>
      {children}
    </UserView>
  </div>
)

export default enhance(MeContainer)