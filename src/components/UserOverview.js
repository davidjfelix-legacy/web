import React from 'react'
import { compose, getContext } from 'recompose'

import UserNav from './UserNav'
import { context } from './UserView'


const enhanceSubs = compose(
  getContext(context),
)

export const UserOverview = ({baseUrl}) => (
  <div>
    <UserNav baseUrl={baseUrl} active="Overview" />
  </div>
)

export default enhanceSubs(UserOverview)
