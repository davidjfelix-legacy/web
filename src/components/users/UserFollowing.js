import PropTypes from 'prop-types'
import React from 'react'
import {compose, getContext} from 'recompose'


const enhanceSubs = compose(
  getContext({
    baseUrl: PropTypes.string.isRequired
  }),
)

const UserFollowing = ({baseUrl}) => (
  <div>
  </div>
)

export default enhanceSubs(UserFollowing)
