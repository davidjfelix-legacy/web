import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router'
import {NavLink} from 'react-router-dom'
import {compose, withProps} from 'recompose'

import {updateGroup} from '../actions/groups'
import GroupMembersView from './GroupMembersView'
import GroupPerformancesView from './GroupPerformancesView'
import GroupRolesView from './GroupRolesView'
import GroupSeriesView from './GroupSeriesView'
import GroupShowsView from './GroupShowsView'
import GroupVideosView from './GroupVideosView'
import {withDatabaseSubscribe} from './hocs'

const styles = {
  navLink: {
    padding: '5px',
  },
}

const mapStateToProps = ({auth, groups}) => ({
  groups
})

const enhance = compose(
  connect(mapStateToProps),
  withProps(({match}) => ({
    basePath: match.path,
    baseUrl: match.url,
    groupName: match.params.groupName
  })),
  withDatabaseSubscribe(
    'value',
    (props) => (`groups/${props.groupName}`),
    (props) => (snapshot) => (props.dispatch(updateGroup({
        groupId: props.groupName,
        groupSnapshot: snapshot.val(),
      }
    )))
  )
)

const GroupContainer = ({ basePath, baseUrl, groupName, groups}) => (
  <div>
    <NavLink style={styles.navLink} to={`${baseUrl}/members`}>members</NavLink>
    <NavLink style={styles.navLink} to={`${baseUrl}/roles`}>roles</NavLink>
    <NavLink style={styles.navLink} to={`${baseUrl}/series`}>series</NavLink>
    <NavLink style={styles.navLink} to={`${baseUrl}/shows`}>shows</NavLink>
    <NavLink style={styles.navLink} to={`${baseUrl}/performances`}>performances</NavLink>
    <NavLink style={styles.navLink} to={`${baseUrl}/videos`}>videos</NavLink>
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
