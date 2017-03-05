import React from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, Col, Container, Row } from 'reactstrap';

import { getUser } from '../actions/users';


export const styles = {
  container: {
    marginTop: "25px",
  }
}


const sizes = {
  avatar: {
    xs: {
      size: 8,
      offset: 0,
    },
    sm: {
      size: 2,
      offset: 0,
    },
    md: {
      size: 2,
      offset: 0,
    },
    lg: {
      size: 2,
      offset: 0,
    },
    xl: {
      size: 2,
      offset: 0,
    }
  },
  topNav: {
    xs: {
      size: 10,
      offset: 0,
    },
    sm: {
      size: 10,
      offset: 0,
    },
    md: {
      size: 10,
      offset: 0,
    },
    lg: {
      size: 10,
      offset: 0,
    },
    xl: {
      size: 10,
      offset: 0,
    }
  },
}


const mapStateToProps = (state) => (
  {user: state.users.currentUser}
);


class UserView extends React.Component {
  componentWillMount() {
    this.props.dispatch(getUser(this.props.params.userName));
  }

  render() {
    return (
      <Container style={styles.container}>
        <Row>
          <Col {...sizes.avatar}>
            <Row>
              <Card>
                <CardImg top width="100%" src="http://placekitten.com/g/230/230" alt={`${this.props.user.username}'s avatar`}/>
              </Card>
            </Row>
            <Row>
              <Col>{this.props.user.username}</Col>
            </Row>
          </Col>
          <Col {...sizes.topNav}>
            {this.props.children}
          </Col>
        </Row>

      </Container>
    );
  }
};

export default connect(mapStateToProps)(UserView);
