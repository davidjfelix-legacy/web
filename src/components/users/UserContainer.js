import * as _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {compose, withProps} from 'recompose'

import {updateUser} from '../../actions/users'
import {withDatabaseSubscribe, withLoading, withNotFound} from '../hocs'
import LoadingView from '../LoadingView'
import NotFoundView from '../NotFoundView'
import ProfileView from '../profile/ProfileView'
import UserFollowers from './UserFollowers'
import UserFollowing from './UserFollowing'
import UserGroups from './UserGroups'
import UserOverview from './UserOverview'
import UserPlaylists from './UserPlaylists'
import UserSeries from './UserSeries'
import UserShows from './UserShows'
import UserVideosView from './UserVideosView'


const mapStateToProps = ({users}) => ({
  users
})

const enhance = compose(
  connect(mapStateToProps),
  withProps(({match}) => ({
    basePath: match.path,
    baseUrl: match.url,
    userId: match.params.userId
  })),
  withDatabaseSubscribe(
    'value',
    ({userId}) => (`users/${userId}`),
    ({dispatch, userId}) => (snapshot) => (
      dispatch(updateUser(
        {
          userId: userId,
          userSnapshot: snapshot.val()
        })
      )
    )
  ),
  withLoading(
    ({userId, users}) => !(_.has(users, userId)),
    LoadingView
  ),
  withNotFound(
    ({userId, users}) => (_.isNull(_.get(users, userId, null))),
    NotFoundView
  ),
)

export const navLinks = {
  overview: 'Overview',
  videos: 'Videos',
  groups: 'Groups',
  following: 'Following',
  followers: 'Followers',
  shows: 'Shows',
  series: 'Series',
  playlists: 'Playlists',
}

const UserContainer = (
  {
    basePath,
    baseUrl,
    userId,
    users
  }) => (
  <ProfileView
    basePath={basePath}
    baseUrl={baseUrl}
    baseView={{
      component: UserOverview,
      linkText: navLinks.overview,
    }}
    image={{
      src: 'http://placekitten.com/g/200/200',
      alt: `${_.get(users, `${userId}.username`, 'user')}'s avatar`,
    }}
    subViews={{
      [navLinks.videos]: {
        path: 'videos',
        component: UserVideosView,
      },
      [navLinks.groups]: {
        path: 'groups',
        component: UserGroups
      },
      [navLinks.following]: {
        path: 'following',
        component: UserFollowing,
      },
      [navLinks.followers]: {
        path: 'followers',
        component: UserFollowers,
      },
      [navLinks.shows]: {
        path: 'shows',
        component: UserShows,
      },
      [navLinks.series]: {
        path: 'series',
        component: UserSeries,
      },
      [navLinks.playlists]: {
        path: 'playlists',
        component: UserPlaylists,
      },
    }}
  />
)

export default enhance(UserContainer)
