import React from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router'
import {NavLink} from 'react-router-dom'
import {compose, withProps} from 'recompose'
import UserFollowers from './UserFollowers'
import UserFollowing from './UserFollowing'
import UserOrganizations from './UserOrganizations'

import UserOverview from './UserOverview'
import UserPlaylists from './UserPlaylists'
import UserSeries from './UserSeries'
import UserShows from './UserShows'
import UserVideos from './UserVideos'


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
  connect(),
  injectSheet(styles),
  withProps(({match}) => ({
    basePath: match.path,
    baseUrl: match.url,
    userId: match.params.userId
  }))
)

export const navLinks = {
  overview: 'Overview',
  videos: 'Videos',
  organizations: 'Organizations',
  following: 'Following',
  followers: 'Followers',
  shows: 'Shows',
  series: 'Series',
  playlists: 'Playlists',
}

const UserContainer = ({basePath, baseUrl, classes, children, userId}) => (
  <div style={styles.view}>
    <NavLink className={classes.activeLink} to={baseUrl}>{navLinks.overview}</NavLink>
    <NavLink className={classes.activeLink} to={`${baseUrl}/videos`}>{navLinks.videos}</NavLink>
    <NavLink className={classes.activeLink} to={`${baseUrl}/organizations`}>{navLinks.organizations}</NavLink>
    <NavLink className={classes.activeLink} to={`${baseUrl}/following`}>{navLinks.following}</NavLink>
    <NavLink className={classes.activeLink} to={`${baseUrl}/followers`}>{navLinks.followers}</NavLink>
    <NavLink className={classes.activeLink} to={`${baseUrl}/shows`}>{navLinks.shows}</NavLink>
    <NavLink className={classes.activeLink} to={`${baseUrl}/series`}>{navLinks.series}</NavLink>
    <NavLink className={classes.activeLink} to={`${baseUrl}/playlists`}>{navLinks.playlists}</NavLink>
    <Switch>
      <Route path={`${basePath}/`} component={UserOverview}/>
      <Route path={`${basePath}/videos`} component={UserVideos}/>
      <Route path={`${basePath}/organizations`} component={UserOrganizations}/>
      <Route path={`${basePath}/following`} component={UserFollowing}/>
      <Route path={`${basePath}/followers`} component={UserFollowers}/>
      <Route path={`${basePath}/shows`} component={UserShows}/>
      <Route path={`${basePath}/series`} component={UserSeries}/>
      <Route path={`${basePath}/playlists`} component={UserPlaylists}/>
    </Switch>
  </div>
)

export default enhance(UserContainer)