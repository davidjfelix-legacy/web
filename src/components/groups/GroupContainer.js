import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router'
import {NavLink} from 'react-router-dom'
import {compose, withProps} from 'recompose'

import {updateGroup} from '../../actions/groups'
import {withDatabaseSubscribe} from '../hocs'
import GroupMembersView from './GroupMembersView'
import GroupPerformancesView from './GroupPerformancesView'
import GroupRolesView from './GroupRolesView'
import GroupSeriesView from './GroupSeriesView'
import GroupShowsView from './GroupShowsView'
import GroupVideosView from './GroupVideosView'


const mapStateToProps = ({auth, groups}) => ({
  groups
})

const enhance = compose(
  connect(mapStateToProps),
  withProps(({match}) => ({
    basePath: match.path,
    baseUrl: match.url,
    groupId: match.params.groupId
  })),
  withDatabaseSubscribe(
    'value',
    (props) => (`groups/${props.groupId}`),
    (props) => (snapshot) => (props.dispatch(updateGroup({
                                                           groupId: props.groupId,
                                                           groupSnapshot: snapshot.val(),
                                                         }
    )))
  )
)

const GroupContainer = ({basePath, baseUrl, groupId}) => (
  <div>
    <NavLink to={`${baseUrl}/members`}>members</NavLink>
    <NavLink to={`${baseUrl}/roles`}>roles</NavLink>
    <NavLink to={`${baseUrl}/series`}>series</NavLink>
    <NavLink to={`${baseUrl}/shows`}>shows</NavLink>
    <NavLink to={`${baseUrl}/performances`}>performances</NavLink>
    <NavLink to={`${baseUrl}/videos`}>videos</NavLink>
    <Switch>
      <Route path={`${basePath}/members`} component={GroupMembersView}/>
      <Route path={`${basePath}/roles`} component={GroupRolesView}/>
      <Route path={`${basePath}/series`} component={GroupSeriesView}/>
      <Route path={`${basePath}/shows`} component={GroupShowsView}/>
      <Route path={`${basePath}/performances`} component={GroupPerformancesView}/>
      <Route path={`${basePath}/videos`} component={GroupVideosView}/>
    </Switch>
  </div>
)

export default enhance(GroupContainer)
