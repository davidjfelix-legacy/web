import * as _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import {updateGroup} from '../../actions/groups'
import {withDatabaseSubscribe, withLoading, withNotFound} from '../hocs'
import LoadingView from '../LoadingView'
import NotFoundView from '../NotFoundView'


const mapStateToProps = ({groups}) => ({
  groups
})

const enhance = compose(
  connect(mapStateToProps),
  withDatabaseSubscribe(
    'value',
    (props) => (`groups/${props.groupId}`),
    (props) => (snapshot) => (
      props.dispatch(updateGroup(
        {
          groupId: props.groupId,
          groupSnapshot: snapshot.val()
        }))
    )
  ),
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
