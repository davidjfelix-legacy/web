import { connect } from 'react-redux';

import Poll, { PollTypes } from './Poll';

const mapStateToProps = (state) => {
  return {
    pollValues: {
      "Turd Sandwich": 99,
      "Giant Douche": 1
    },
    pollType: PollTypes.RADIO,
  }
}

export default connect(mapStateToProps)(Poll);
