import React from 'react'
import {compose, withProps} from 'recompose'
import {connect} from 'react-redux'

const mapStateToProps = ({users}) => ({
  users
})

const enhanceSubs = compose(
  connect(mapStateToProps),
  withProps(({match}) => ({
    userId: match.params.userId
  }))
)

const UserGroups = ({userId, users}) => (
  <div>
  </div>
)

export default enhanceSubs(UserGroups)