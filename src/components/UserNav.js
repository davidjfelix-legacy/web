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

export const navLinks = {
  overview: "Overview",
  videos: "Videos",
  organizations: "Organizations",
  following: "Following",
  followers: "Followers",
  shows: "Shows",
  series: "Series",
  playlists: "Playlists",
}

const UserNav = ({baseUrl, active}) => (
  <nav style={styles.nav}>
    <Link style={styles.link} to={baseUrl}>Overview</Link>
    <Link style={styles.link} to={`${baseUrl}/videos`}>{navLinks.overview}</Link>
    <Link style={styles.link} to={`${baseUrl}/organizations`}>{navLinks.organizations}</Link>
    <Link style={styles.link} to={`${baseUrl}/following`}>{navLinks.following}</Link>
    <Link style={styles.link} to={`${baseUrl}/followers`}>{navLinks.followers}</Link>
    <Link style={styles.link} to={`${baseUrl}/shows`}>{navLinks.shows}</Link>
    <Link style={styles.link} to={`${baseUrl}/series`}>{navLinks.series}</Link>
    <Link style={styles.link} to={`${baseUrl}/playlists`}>{navLinks.playlists}</Link>
  </nav>
)

export default UserNav
