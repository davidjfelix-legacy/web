import React from 'react'
import { compose, getContext } from 'recompose'

import UserNav, { navLinks } from './UserNav'
import { context } from './UserView'

const enhanceSubs = compose(
  getContext(context),
)

const UserShows = ({baseUrl}) => (
  <div>
    <UserNav baseUrl={baseUrl} active={navLinks.shows} />
  </div>
)

export default enhanceSubs(UserShows)
