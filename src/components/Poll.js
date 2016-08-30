import React, { PropTypes } from 'react';
import keymirror from 'KeyMirror';

export const PollTypes = keymirror({
  RADIO: null,
})

const Poll = ({ pollValues, pollType }) => (
  <div className="Poll"></div>
);

Poll.propTypes = {
  pollValues: PropTypes.objectOf(
    PropTypes.number.isRequired
  ).isRequired,
  pollType: PropTypes.string.isRequired,
}

export default Poll;
