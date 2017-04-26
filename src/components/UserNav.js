import React from 'react'
import PropTypes from 'prop-types'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router'


const UserNav = ({active, userName}) => (
  <Nav tabs>
    <NavItem>
      <NavLink active={active === "overview"} tag={Link} to={`/u/${userName}`}>Overview</NavLink>
    </NavItem>
    <NavItem>
      <NavLink active={active === "videos"} tag={Link} to={`/u/${userName}/videos`}>Videos</NavLink>
    </NavItem>
    <NavItem>
      <NavLink active={active === "organizations"} tag={Link} to={`/u/${userName}/organizations`}>Organizations</NavLink>
    </NavItem>
    <NavItem>
      <NavLink active={active === "following"} tag={Link} to={`/u/${userName}/following`}>Following</NavLink>
    </NavItem>
    <NavItem>
      <NavLink active={active === "followers"} tag={Link} to={`/u/${userName}/followers`}>Followers</NavLink>
    </NavItem>
  </Nav>
);

UserNav.PropTypes = {
  active: PropTypes.oneOf([
    "overview",
    "videos",
    "organizations",
    "following",
    "followers",
  ]).isRequired,
  userName: PropTypes.string.isRequired,
};


export default UserNav;