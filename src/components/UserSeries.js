import React from 'react'
import { compose, getContext } from 'recompose'

import UserNav, { navLinks } from './UserNav'
import { context } from './UserView'


const enhanceSubs = compose(
  getContext(context),
)

const UserSeries = ({baseUrl}) => (
  <div>
    <UserNav baseUrl={baseUrl} active={navLinks.series} />
  </div>
)

export default enhanceSubs(UserSeries)
