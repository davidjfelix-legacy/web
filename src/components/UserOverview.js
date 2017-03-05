import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router';


const UserOverview = () => (
  <Nav tabs>
    <NavItem>
      <NavLink active tag={Link} to="#">Overview</NavLink>
    </NavItem>
    <NavItem>
      <NavLink tag={Link} to="videos">Videos</NavLink>
    </NavItem>
    <NavItem>
      <NavLink tag={Link} to="organizations">Organizations</NavLink>
    </NavItem>
    <NavItem>
      <NavLink tag={Link} to="following">Following</NavLink>
    </NavItem>
    <NavItem>
      <NavLink tag={Link} to="followers">Followers</NavLink>
    </NavItem>
  </Nav>
);

export default UserOverview;