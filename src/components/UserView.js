import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardImg, Col, Container, Row } from 'reactstrap'

import { updateUser } from '../actions/users'
import database from '../database'


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


const mapStateToProps = ({users}) => ({
  users
})

let onFirebaseValue = null

class UserView extends Component {
  componentWillMount() {
    this.databaseRef = database.ref(`users/${this.props.params.userId}`)
    onFirebaseValue = this.databaseRef.on('value', (snapshot) => (
      this.props.dispatch(updateUser({
        userId: this.props.params.userId,
        userSnapshot: snapshot.val()
      }))
    ))
  }

  componentWillUnmount() {
    this.databaseRef.off('value', onFirebaseValue)
  }

  render() {
    return (
      <Container style={styles.container}>
        <Row>
          <Col {...sizes.avatar}>
            <Row>
              <Card>
                <CardImg top width="100%" src="http://placekitten.com/g/230/230" alt={`$'s avatar`}/>
              </Card>
            </Row>
            <Row>
              <Col>{this.props.users[this.props.params.userId] === undefined ?
                "Unnamed User":
                this.props.users[this.props.params.userId]['username']
              }</Col>
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
