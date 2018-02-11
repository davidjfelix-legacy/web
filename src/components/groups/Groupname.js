import * as _ from 'lodash'
import React from 'react'
import {compose} from 'recompose'

import {withLoading, withNotFound} from '../hocs'
import LoadingView from '../LoadingView'
import NotFoundView from '../NotFoundView'



const enhance = compose(
  withLoading(
    ({groups, groupId}) => !(_.has(groups, groupId)),
    LoadingView
  ),
  withNotFound(
    (props) => (props.groupId in props.groups) && props.groups[props.groupId] === null,
    NotFoundView
  ),
)

const Groupname = ({groupId, groups}) => (
  <span>{groups[groupId]['group_name']}</span>
)

export default enhance(Groupname)
