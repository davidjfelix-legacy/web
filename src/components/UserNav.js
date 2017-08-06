import React from 'react'
import { Link } from 'react-router'
import injectSheet from 'react-jss'


const styles = {
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

const UserNav = ({active, baseUrl, classes}) => (
  <nav className={classes.nav}>
    {active === navLinks.overview?
      <Link className={classes.activeLink} to={baseUrl}>{navLinks.overview}</Link>:
      <Link className={classes.link} to={baseUrl}>{navLinks.overview}</Link>
    }
    {active === navLinks.videos?
      <Link className={classes.activeLink} to={`${baseUrl}/videos`}>{navLinks.videos}</Link>:
      <Link className={classes.link} to={`${baseUrl}/videos`}>{navLinks.videos}</Link>
    }
    {active === navLinks.organizations?
      <Link className={classes.activeLink} to={`${baseUrl}/organizations`}>{navLinks.organizations}</Link>:
      <Link className={classes.link} to={`${baseUrl}/organizations`}>{navLinks.organizations}</Link>
    }
    {active === navLinks.following?
      <Link className={classes.activeLink} to={`${baseUrl}/following`}>{navLinks.following}</Link>:
      <Link className={classes.link} to={`${baseUrl}/following`}>{navLinks.following}</Link>
    }
    {active === navLinks.followers?
      <Link className={classes.activeLink} to={`${baseUrl}/followers`}>{navLinks.followers}</Link>:
      <Link className={classes.link} to={`${baseUrl}/followers`}>{navLinks.followers}</Link>
    }
    {active === navLinks.shows?
      <Link className={classes.activeLink} to={`${baseUrl}/shows`}>{navLinks.shows}</Link>:
      <Link className={classes.link} to={`${baseUrl}/shows`}>{navLinks.shows}</Link>
    }
    {active === navLinks.series?
      <Link className={classes.activeLink} to={`${baseUrl}/series`}>{navLinks.series}</Link>:
      <Link className={classes.link} to={`${baseUrl}/series`}>{navLinks.series}</Link>
    }
    {active === navLinks.playlists?
      <Link className={classes.activeLink} to={`${baseUrl}/playlists`}>{navLinks.playlists}</Link>:
      <Link className={classes.link} to={`${baseUrl}/playlists`}>{navLinks.playlists}</Link>
    }
  </nav>
)

export default injectSheet(styles)(UserNav)
