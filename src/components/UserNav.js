import React from 'react'
import { Link } from 'react-router'


const UserNav = ({baseUrl, active}) => (
  <nav style={{display: 'flex', flexDirection: 'row'}}>
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

export default UserNav
