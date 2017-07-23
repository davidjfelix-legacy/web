import React from 'react'
import { compose, getContext } from 'recompose'

import UserNav, { navLinks } from './UserNav'
import { context } from './UserView'


const enhanceSubs = compose(
  getContext(context),
)

const UserPlaylists = ({baseUrl}) => (
  <div>
    <UserNav baseUrl={baseUrl} active={navLinks.playlists} />
  </div>
)

export default enhanceSubs(UserPlaylists)
