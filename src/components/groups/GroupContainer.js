import * as _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {compose, withProps} from 'recompose'

import {updateGroup} from '../../actions/groups'
import {withDatabaseSubscribe, withLoading, withNotFound} from '../hocs'
import LoadingView from '../LoadingView'
import NotFoundView from '../NotFoundView'
import ProfileView from '../profile/ProfileView'
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
    ({groupId}) => (`groups/${groupId}`),
    ({dispatch, groupId}) => (snapshot) => (
      dispatch(updateGroup(
        {
          groupId: groupId,
          groupSnapshot: snapshot.val(),
        }
      )))
  ),
  withLoading(
    ({groupId, groups}) => !(_.has(groups, groupId)),
    LoadingView,
  ),
  withNotFound(
    ({groupId, groups}) => (_.isNull(_.get(groups, groupId, null))),
    NotFoundView,
  ),
)

export const navLinks = {
  overview: 'Overview',
  members: 'Members',
  roles: 'Roles',
  series: 'Series',
  shows: 'Shows',
  performances: 'Performances',
  videos: 'Videos',
}

const GroupContainer = (
  {
    basePath,
    baseUrl,
    groupId,
    groups,
  }) => (
  <ProfileView
    basePath={basePath}
    baseUrl={baseUrl}
    baseView={{
      component: GroupMembersView,
      linkText: navLinks.overview,
    }}
    image={{
      src: 'http://placekitten.com/g/200/200',
      alt: `${_.get(groups, `${groupId}.groupname`, 'group')}'s avatar`,
    }}
    subViews={{
      [navLinks.members]: {
        path: 'members',
        component: GroupMembersView,
      },
      [navLinks.roles]: {
        path: 'roles',
        component: GroupRolesView,
      },
      [navLinks.series]: {
        path: 'series',
        component: GroupSeriesView,
      },
      [navLinks.shows]: {
        path: 'shows',
        component: GroupShowsView,
      },
      [navLinks.performances]: {
        path: 'performances',
        component: GroupPerformancesView,
      },
      [navLinks.videos]: {
        path: 'videos',
        component: GroupVideosView,
      },
    }}
  />
)

export default enhance(GroupContainer)
