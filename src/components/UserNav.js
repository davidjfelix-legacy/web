import React from 'react'
import { Link } from 'react-router'

const styles = {
  nav: {
    display: 'flex',
    flexDirection: 'row',
    padding: "1em",
  },
  activeLink: {
    borderBottom: "2px solid #BBDEFB",
    padding: "1em",
    textDecoration: "none",
  },
  link: {
    borderBottom: "2px solid #222222",
    padding: "1em",
    textDecoration: "none",
  },
}

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
    {active === navLinks.overview?
      <Link style={styles.activeLink} to={baseUrl}>{navLinks.overview}</Link>:
      <Link style={styles.link} to={baseUrl}>{navLinks.overview}</Link>
    }
    {active === navLinks.videos?
      <Link style={styles.activeLink} to={`${baseUrl}/videos`}>{navLinks.videos}</Link>:
      <Link style={styles.link} to={`${baseUrl}/videos`}>{navLinks.videos}</Link>
    }
    {active === navLinks.organizations?
      <Link style={styles.activeLink} to={`${baseUrl}/organizations`}>{navLinks.organizations}</Link>:
      <Link style={styles.link} to={`${baseUrl}/organizations`}>{navLinks.organizations}</Link>
    }
    {active === navLinks.following?
      <Link style={styles.activeLink} to={`${baseUrl}/following`}>{navLinks.following}</Link>:
      <Link style={styles.link} to={`${baseUrl}/following`}>{navLinks.following}</Link>
    }
    {active === navLinks.followers?
      <Link style={styles.activeLink} to={`${baseUrl}/followers`}>{navLinks.followers}</Link>:
      <Link style={styles.link} to={`${baseUrl}/followers`}>{navLinks.followers}</Link>
    }
    {active === navLinks.shows?
      <Link style={styles.activeLink} to={`${baseUrl}/shows`}>{navLinks.shows}</Link>:
      <Link style={styles.link} to={`${baseUrl}/shows`}>{navLinks.shows}</Link>
    }
    {active === navLinks.series?
      <Link style={styles.activeLink} to={`${baseUrl}/series`}>{navLinks.series}</Link>:
      <Link style={styles.link} to={`${baseUrl}/series`}>{navLinks.series}</Link>
    }
    {active === navLinks.playlists?
      <Link style={styles.activeLink} to={`${baseUrl}/playlists`}>{navLinks.playlists}</Link>:
      <Link style={styles.link} to={`${baseUrl}/playlists`}>{navLinks.playlists}</Link>
    }
  </nav>
)

export default UserNav
