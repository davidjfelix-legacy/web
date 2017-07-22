import React from 'react'
import { Link } from 'react-router'

const styles = {
  nav: {
    display: 'flex',
    flexDirection: 'row',
    padding: "1em",
  },
  link: {
    borderBottom: "2px solid #222222",
    padding: "1em",
    textDecoration: "none",
}}

const UserNav = ({baseUrl, active}) => (
  <nav style={styles.nav}>
    <Link style={styles.link} to={baseUrl}>Overview</Link>
    <Link style={styles.link} to={`${baseUrl}/videos`}>Videos</Link>
    <Link style={styles.link} to={`${baseUrl}/organizations`}>Organizations</Link>
    <Link style={styles.link} to={`${baseUrl}/following`}>Following</Link>
    <Link style={styles.link} to={`${baseUrl}/followers`}>Followers</Link>
    <Link style={styles.link} to={`${baseUrl}/shows`}>Shows</Link>
    <Link style={styles.link} to={`${baseUrl}/series`}>Series</Link>
    <Link style={styles.link} to={`${baseUrl}/playlists`}>Playlists</Link>
  </nav>
)

export default UserNav
