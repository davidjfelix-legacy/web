import React from 'react'
import { compose, getContext } from 'recompose'

import UserNav from './UserNav'
import { context } from './UserView'


const enhanceSubs = compose(
  getContext(context),
)

const UserSeries = ({baseUrl}) => (
  <div>
    <UserNav baseUrl={baseUrl} active="Series" />
  </div>
)

export default enhanceSubs(UserSeries)
