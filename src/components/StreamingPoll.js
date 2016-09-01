import { connect } from 'react-redux';

import Poll, { PollTypes } from './Poll';

const mapStateToProps = (state) => {
  return {
    pollValues: {
      "Red": 70,
      "Blue": 30
    },
    pollType: PollTypes.RADIO,
  }
}

export default connect(mapStateToProps)(Poll);
