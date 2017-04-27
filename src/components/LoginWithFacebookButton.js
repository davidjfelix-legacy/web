import React from 'react'
import PropTypes from 'prop-types'

import styles from '../css/LoginWithFacebookButton.css'


const LoginWithFacebookButton = ({clientId, redirectURI, scopes}) => (
  <form action="https://www.facebook.com/v2.8/dialog/oauth">
    <input type="hidden" name="client_id" value={clientId} />
    <input type="hidden" name="redirect_uri" value={redirectURI} />
    <input type="hidden" name="scope" value={scopes.join(",")} />
    <button
      className={styles.Button}
      type="submit"
      >Log in with Facebook</button>
  </form>
);

LoginWithFacebookButton.PropTypes = {
  clientId: PropTypes.string.isRequired,
  redirectURI: PropTypes.string.isRequired,
  scopes: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default LoginWithFacebookButton;