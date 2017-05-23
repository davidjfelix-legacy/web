import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, getContext, withContext } from 'recompose'
import { Link } from 'react-router'

import { updateUser } from '../actions/users'

import { withDatabaseSubscribe, withLoading, withNotFound } from './hocs'

const mapStateToProps = ({users}) => ({
  users
})

const UserLoading = () => (
  <div>...</div>
)

const UserNotFound = () => (
  <div>User not found</div>
)

const enhance = compose(
  connect(mapStateToProps),
  withDatabaseSubscribe(
    'value',
    (props) => (`users/${props.userId}`),
    (props) => (snapshot) => (
      props.dispatch(updateUser({
        userId: props.userId,
        userSnapshot: snapshot.val()
      }))
    )
  ),
  withLoading(
    (props) => !(props.userId in props.users),
    UserLoading
  ),
  withNotFound(
    (props) => (props.users[props.userId] === null),
    UserNotFound
  ),
  withContext(
    {baseUrl: PropTypes.string.isRequired},
    (props) => ({baseUrl: props.baseUrl})
  )
)

const enhanceSubs = compose(
  getContext({
    baseUrl: PropTypes.string.isRequired
  }),
)

const UserNav = ({baseUrl, active}) => (
  <nav>
    <Link to={baseUrl}>Overview</Link>
    <Link to={`${baseUrl}/videos`}>Videos</Link>
    <Link to={`${baseUrl}/organizations`}>Organizations</Link>
    <Link to={`${baseUrl}/following`}>Following</Link>
    <Link to={`${baseUrl}/followers`}>Followers</Link>
    <Link to={`${baseUrl}/shows`}>Shows</Link>
    <Link to={`${baseUrl}/series`}>Series</Link>
    <Link to={`${baseUrl}/playlists`}>Playlists</Link>
  </nav>
)

export const UserOverview = enhanceSubs(
  ({baseUrl}) => (
    <div>
      <UserNav baseUrl={baseUrl} active="Overview" />
    </div>
  )
)

export const UserVideos = enhanceSubs(
  ({baseUrl}) => (
    <div>
      <UserNav baseUrl={baseUrl} active="Videos" />
    </div>
  )
)

export const UserOrganizations = enhanceSubs(
  ({baseUrl}) => (
    <div>
      <UserNav baseUrl={baseUrl} active="Organizations" />
    </div>
  )
)

export const UserFollowing = enhanceSubs(
  ({baseUrl}) => (
    <div>
      <UserNav baseUrl={baseUrl} active="Following" />
    </div>
  )
)

export const UserFollowers = enhanceSubs(
  ({baseUrl}) => (
    <div>
      <UserNav baseUrl={baseUrl} active="Followers" />
    </div>
  )
)

export const UserShows = enhanceSubs(
  ({baseUrl}) => (
    <div>
      <UserNav baseUrl={baseUrl} active="Shows" />
    </div>
  )
)

export const UserSeries = enhanceSubs(
  ({baseUrl}) => (
    <div>
      <UserNav baseUrl={baseUrl} active="Series" />
    </div>
  )
)

export const UserPlaylists = enhanceSubs(
  ({baseUrl}) => (
    <div>
      <UserNav baseUrl={baseUrl} active="Playlists" />
    </div>
  )
)

const UserView = ({baseUrl, isEditable=false, children, userId, users}) => (
  <div>
    <img src='http://placekitten.com/g/200/200' alt={`${users[userId].username}`} />
    {children}
  </div>
)

export default enhance(UserView);
