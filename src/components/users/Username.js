import * as _ from 'lodash'
import React from 'react'
import {compose} from 'recompose'

import {withLoading, withNotFound} from '../hocs'
import LoadingView from '../LoadingView'
import NotFoundView from '../NotFoundView'


const enhance = compose(
  withLoading(
    ({users, userId}) => !(_.has(users, userId)),
    LoadingView
  ),
  withNotFound(
    ({users, userId}) => (userId in users) && users[userId] === null,
    NotFoundView
  ),
)

const Username = ({userId, users}) => (
  <span>{_.get(users, `${userId}.username`, '[Not Found]')}</span>
)

export default enhance(Username)
