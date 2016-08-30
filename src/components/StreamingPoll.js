import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Poll, { PollTypes } from './Poll';

const mapStateToProps = (state) => {
  return {
    pollValues: {
      "Turd Sandwich": 99,
      "Giant Douche": 1
    }
    pollType: ""
  }
}

export default connect()(Poll);
