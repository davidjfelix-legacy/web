import React from 'react';
import { connect } from 'react-redux';

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
      <div>{JSON.stringify(this.props.user)}</div>
    );
  }
};

export default connect(mapStateToProps)(UserView);
