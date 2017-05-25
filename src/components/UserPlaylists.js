import React from 'react'
import PropTypes from 'prop-types'
import { compose, getContext } from 'recompose'

import UserNav from './UserNav'


const enhanceSubs = compose(
  getContext({
    baseUrl: PropTypes.string.isRequired
  }),
)

const UserPlaylists = ({baseUrl}) => (
  <div>
    <UserNav baseUrl={baseUrl} active="Playlists" />
  </div>
)

export default enhanceSubs(UserPlaylists)
