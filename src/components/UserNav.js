import React, { PropTypes } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router';


const UserNav = ({active}) => (
  <Nav tabs>
    <NavItem>
      <NavLink disabled tag={Link} to="/">Overview</NavLink>
    </NavItem>
    <NavItem>
      <NavLink disabled tag={Link} to="/">Videos</NavLink>
    </NavItem>
    <NavItem>
      <NavLink disabled active tag={Link} to="/">Organizations</NavLink>
    </NavItem>
    <NavItem>
      <NavLink disabled tag={Link} to="/">Following</NavLink>
    </NavItem>
    <NavItem>
      <NavLink disabled tag={Link} to="/">Followers</NavLink>
    </NavItem>
  </Nav>
);

UserNav.PropTypes = {
  active: PropTypes.active.String.isRequired,
};


export default UserNav;