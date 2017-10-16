import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router'
import {NavLink} from 'react-router-dom'
import {compose, withProps} from 'recompose'

import {updateUser} from '../../actions/users'
import {withDatabaseSubscribe, withLoading, withNotFound} from '../hocs'
import LoadingView from '../LoadingView'
import NotFoundView from '../NotFoundView'
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

const styles = {
  view: {
    display: 'flex'
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    padding: '1em',
  },
  activeLink: {
    extend: 'link',
    borderBottom: '4px solid #BBDEFB',
    padding: '1em',
  },
  link: {
    borderBottom: '2px solid #222222',
    color: '#666',
    padding: '1em',
    textDecoration: 'none',
    '&:hover': {
      color: '#222',
    },
    '&:visited:hover': {
      color: '#222',
    },
    '&:visited': {
      color: '#666',
    }
  },
}

const enhance = compose(
  connect(mapStateToProps),
  withProps(({match}) => ({
    basePath: match.path,
    baseUrl: match.url,
    userId: match.params.userId
  })),
  withDatabaseSubscribe(
    'value',
    (props) => (`users/${props.userId}`),
    (props) => (snapshot) => (
      props.dispatch(updateUser(
        {
          userId: props.userId,
          userSnapshot: snapshot.val()
        })
      )
    )
  ),
  withLoading(
    (props) => !(props.userId in props.users),
    LoadingView
  ),
  withNotFound(
    (props) => (props.users[props.userId] === null),
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

const UserContainer = ({basePath, baseUrl, children, userId, users}) => (
  <div style={styles.view}>
    <img
      style={{alignSelf: 'flex-start', borderRadius: '0.5em'}}
      src='http://placekitten.com/g/200/200'
      alt={`${users[userId].username}`}
    />
    <div>
      <NavLink to={baseUrl}>{navLinks.overview}</NavLink>
      <NavLink to={`${baseUrl}/videos`}>{navLinks.videos}</NavLink>
      <NavLink to={`${baseUrl}/groups`}>{navLinks.groups}</NavLink>
      <NavLink to={`${baseUrl}/following`}>{navLinks.following}</NavLink>
      <NavLink to={`${baseUrl}/followers`}>{navLinks.followers}</NavLink>
      <NavLink to={`${baseUrl}/shows`}>{navLinks.shows}</NavLink>
      <NavLink to={`${baseUrl}/series`}>{navLinks.series}</NavLink>
      <NavLink to={`${baseUrl}/playlists`}>{navLinks.playlists}</NavLink>
    </div>
    <Switch>
      <Route path={`${basePath}/videos`} component={UserVideosView}/>
      <Route path={`${basePath}/groups`} component={UserGroups}/>
      <Route path={`${basePath}/following`} component={UserFollowing}/>
      <Route path={`${basePath}/followers`} component={UserFollowers}/>
      <Route path={`${basePath}/shows`} component={UserShows}/>
      <Route path={`${basePath}/series`} component={UserSeries}/>
      <Route path={`${basePath}/playlists`} component={UserPlaylists}/>
      <Route path={`${basePath}/`} component={UserOverview}/>
    </Switch>
  </div>
)

export default enhance(UserContainer)