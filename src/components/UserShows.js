import React from 'react'
import PropTypes from 'prop-types'
import { compose, getContext } from 'recompose'

import { context } from './UserView'
import UserNav from './UserNav'


const enhanceSubs = compose(
  getContext(context),
)

const UserShows = ({baseUrl}) => (
  <div>
    <UserNav baseUrl={baseUrl} active="Shows" />
  </div>
)

export default enhanceSubs(UserShows)
