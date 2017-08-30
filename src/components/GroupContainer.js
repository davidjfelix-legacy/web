import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router'
import {NavLink} from 'react-router-dom'
import {compose, withProps} from 'recompose'

import {updateGroup} from '../actions/groups'
import {withDatabaseSubscribe} from './hocs'

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

const GroupContainer = ({groupName, groups, match}) => (
  <div>
    <NavLink to={`${match.url}/members`}>members</NavLink>
    <NavLink to={`${match.url}/roles`}>roles</NavLink>
    <NavLink to={`${match.url}/series`}>series</NavLink>
    <NavLink to={`${match.url}/shows`}>members</NavLink>
    <NavLink to={`${match.url}/performances`}>performances</NavLink>
    <NavLink to={`${match.url}/videos`}>videos</NavLink>
    <Switch>
      <Route path={`${match.url}/members`}/>
      <Route path={`${match.url}/roles`}/>
      <Route path={`${match.url}/series`}/>
      <Route path={`${match.url}/shows`}/>
      <Route path={`${match.url}/performances`}/>
      <Route path={`${match.url}/videos`}/>
    </Switch>
  </div>
)

export default enhance(GroupContainer)
