import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';


import { convertFacebookCode } from '../actions/authentication';
import { FACEBOOK_CLIENT_ID, MG4_WEB_BASE_URL } from '../configuration';


const mapStateToProps = ({authentication}) => ({
  isAuthenticated: authentication.isAuthenticated,
});

class FacebookLoginCallback extends React.Component {
  componentDidMount() {
    let request = {
      code: this.props.location.query.code,
      client_id: FACEBOOK_CLIENT_ID,
      redirect_uri:  MG4_WEB_BASE_URL + "/a/facebook",
    }
    this.props.dispatch(convertFacebookCode(request))
  }

  redirectSuccess() {
    // TODO: build this
  }

  redirectError() {
    // TODO: build this 
  }
  render() {
   if (this.props.isAuthenticated) {
     this.props.dispatch(push('/'));
   }
   return (
     <div>signing in...</div>
   ) 
  }
}

FacebookLoginCallback.PropTypes = {
  location: PropTypes.shape({
    query: PropTypes.objectOf(PropTypes.string).isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
} 

FacebookLoginCallback = connect(mapStateToProps)(FacebookLoginCallback)

export default FacebookLoginCallback;