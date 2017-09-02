import React from 'react'
import {compose} from 'recompose'
import {connect} from 'react-redux'


const enhanceSubs = compose(
  connect()
)

const UserPlaylists = ({baseUrl}) => (
  <div>
  </div>
)

export default enhanceSubs(UserPlaylists)
