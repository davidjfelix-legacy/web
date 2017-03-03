import React from 'react';
import { connect } from 'react-redux';
import { Col, Container, Nav, NavItem, NavLink, Row } from 'reactstrap';
import { Link } from 'react-router';

import { getUser } from '../actions/users';


const mapStateToProps = (state) => (
  {user: state.users.currentUser}
);


class UserView extends React.Component {
  componentWillMount() {
    this.props.dispatch(getUser(this.props.params.userName));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <img src="http://placekitten.com/g/230/230" alt={`${this.props.user.username}'s avatar`}/>
          </Col>
          <Col>
            <Nav tabs>
              <NavItem>
                <NavLink disabled tag={Link} to="/">Videos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled tag={Link} to="/">Organizations</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled tag={Link} to="/">Following</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled tag={Link} to="/">Followers</NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>{this.props.user.username}</Col>
        </Row>
      </Container>
    );
  }
};

export default connect(mapStateToProps)(UserView);
