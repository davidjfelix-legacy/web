import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router'
import {NavLink} from 'react-router-dom'
import {compose, withProps} from 'recompose'
import styled from 'styled-components'

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


const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2em;
  width: calc(100% - 4em);
`

const NonSwitchedContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`

const ProfileNav = styled.nav`
  display: flex;
  justify-content: center;
  overflow: auto;
  padding: 1em;
`

const activeProfileNavLinkClassName = 'active-profile-nav-link'

const ProfileNavLink = styled(NavLink).attrs(
  {
    activeProfileNavLinkClassName
  })`
  display: flex;
  align-items: flex-end;
  height: 3em;
  border-bottom: 1px solid #818181;
  color: #212121;
  padding: 1em;
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid #dd4b39;
    color: #dd4b39;
  }

  &.${activeProfileNavLinkClassName} {
    color: #dd4b39;
    font-weight: bold;
    border-bottom: 2px solid #dd4b39;
  }
`

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
  <Container>
    <NonSwitchedContent>
      <img
        src='http://placekitten.com/g/200/200'
        alt={`${users[userId].username}`}
      />
      <ProfileNav>
        <ProfileNavLink
          activeClassName={activeProfileNavLinkClassName}
          exact
          to={baseUrl}
        >
          {navLinks.overview}
        </ProfileNavLink>
        <ProfileNavLink
          activeClassName={activeProfileNavLinkClassName}
          to={`${baseUrl}/videos`}
        >
          {navLinks.videos}
        </ProfileNavLink>
        <ProfileNavLink
          activeClassName={activeProfileNavLinkClassName}
          to={`${baseUrl}/groups`}
        >
          {navLinks.groups}
        </ProfileNavLink>
        <ProfileNavLink
          activeClassName={activeProfileNavLinkClassName}
          to={`${baseUrl}/following`}
        >
          {navLinks.following}
        </ProfileNavLink>
        <ProfileNavLink
          activeClassName={activeProfileNavLinkClassName}
          to={`${baseUrl}/followers`}
        >
          {navLinks.followers}
        </ProfileNavLink>
        <ProfileNavLink
          activeClassName={activeProfileNavLinkClassName}
          to={`${baseUrl}/shows`}
        >
          {navLinks.shows}
        </ProfileNavLink>
        <ProfileNavLink
          activeClassName={activeProfileNavLinkClassName}
          to={`${baseUrl}/series`}
        >
          {navLinks.series}
        </ProfileNavLink>
        <ProfileNavLink
          activeClassName={activeProfileNavLinkClassName}
          to={`${baseUrl}/playlists`}
        >
          {navLinks.playlists}
        </ProfileNavLink>
      </ProfileNav>
    </NonSwitchedContent>
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
  </Container>
)

export default enhance(UserContainer)