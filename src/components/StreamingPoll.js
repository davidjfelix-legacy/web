import { connect } from 'react-redux';

import Poll, { PollTypes } from './Poll';

const getPollValues = (votes, currentTime) => {
  return votes
    .filter((streamedVote) => (currentTime >= streamedVote.time))
    .reduce((pollValues, streamedVote) => {
      if (!pollValues[streamedVote.vote]) {
        pollValues[streamedVote.vote] = 1;
      } else {
        pollValues[streamedVote.vote] += 1;
      }

      return pollValues;
    }, {});
};

const mapStateToProps = (state) => {
  return {
    pollValues: getPollValues(state.streamingPoll, state.videoContainer.currentTime),
    pollType: PollTypes.RADIO,
  }
}

export default connect(mapStateToProps)(Poll);
