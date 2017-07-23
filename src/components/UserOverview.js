import React from 'react'
import { compose, getContext } from 'recompose'

import UserNav, { navLinks } from './UserNav'
import { context } from './UserView'


const enhanceSubs = compose(
  getContext(context),
)

export const UserOverview = ({baseUrl}) => (
  <div>
    <UserNav baseUrl={baseUrl} active={navLinks.overview} />
  </div>
)

export default enhanceSubs(UserOverview)
