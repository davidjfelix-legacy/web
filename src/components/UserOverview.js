import React from 'react'
import PropTypes from 'prop-types'
import { compose, getContext } from 'recompose'

import UserNav from './UserNav'


const enhanceSubs = compose(
  getContext({
    baseUrl: PropTypes.string.isRequired
  }),
)

export const UserOverview = ({baseUrl}) => (
  <div>
    <UserNav baseUrl={baseUrl} active="Overview" />
  </div>
)

export default enhanceSubs(UserOverview)
