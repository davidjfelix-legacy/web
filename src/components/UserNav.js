import React, { PropTypes } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router';


const UserNav = ({active}) => (
  <Nav tabs>
    <NavItem>
      <NavLink active={active === "overview"} tag={Link} to="/">Overview</NavLink>
    </NavItem>
    <NavItem>
      <NavLink active={active === "videos"} tag={Link} to="/">Videos</NavLink>
    </NavItem>
    <NavItem>
      <NavLink active={active === "organizations"} tag={Link} to="/">Organizations</NavLink>
    </NavItem>
    <NavItem>
      <NavLink active={active === "following"} tag={Link} to="/">Following</NavLink>
    </NavItem>
    <NavItem>
      <NavLink active={active === "followers"} tag={Link} to="/">Followers</NavLink>
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
  ]),
};


export default UserNav;