import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { convertFacebookCode } from '../actions/authentication';
import { FACEBOOK_CLIENT_ID, MG4_WEB_BASE_URL } from '../config';


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
   return (
     <div>{JSON.stringify(this.props.location.query)}</div>
   ) 
  }
}

FacebookLoginCallback.PropTypes = {
  location: PropTypes.shape({
    query: PropTypes.objectOf(PropTypes.string).isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
} 

FacebookLoginCallback = connect()(FacebookLoginCallback)

export default FacebookLoginCallback;