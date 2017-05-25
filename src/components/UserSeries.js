import React from 'react'
import PropTypes from 'prop-types'
import { compose, getContext } from 'recompose'

import UserNav from './UserNav'


const enhanceSubs = compose(
  getContext({
    baseUrl: PropTypes.string.isRequired
  }),
)

const UserSeries = ({baseUrl}) => (
  <div>
    <UserNav baseUrl={baseUrl} active="Series" />
  </div>
)

export default enhanceSubs(UserSeries)
