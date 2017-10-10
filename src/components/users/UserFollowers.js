import PropTypes from 'prop-types'
import React from 'react'
import {compose, getContext} from 'recompose'


const enhanceSubs = compose(
  getContext({
    baseUrl: PropTypes.string.isRequired
  }),
)

const UserFollowers = ({baseUrl}) => (
  <div>
  </div>
)

export default enhanceSubs(UserFollowers)
