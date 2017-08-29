import React from 'react'
import {connect} from 'react-redux'
import {compose, withProps} from 'recompose'

import {withDatabaseSubscribe} from './hocs'
import {updateGroup} from '../actions/groups'

const mapStateToProps = ({auth, groups}) => ({
  groups
})

const enhance = compose(
  connect(mapStateToProps),
  withProps(({match}) => ({
    groupName: match.params.groupName
  })),
  withDatabaseSubscribe(
    'value',
    (props) => (`groups/${props.groupName}`),
    (props) => (snapshot) => (props.dispatch(updateGroup({
        groupId: props.groupName,
        groupSnapshot: snapshot,
      }
    )))
  )
)

const GroupContainer = ({groupName, groups}) => (
  <div>{JSON.stringify(groups)}</div>
)

export default enhance(GroupContainer)
