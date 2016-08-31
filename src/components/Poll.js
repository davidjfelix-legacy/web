import React, { PropTypes } from 'react';
import keyMirror from 'keymirror';

export const PollTypes = keyMirror({
  RADIO: null,
})

const renderPollItem = (itemName, itemVotes, totalVotes, index) => {
  const votePercent = ((itemVotes / totalVotes) * 100 ).toString();
  return (
    <li key={index}>
      <span className="Poll__ItemLabel">{itemName}</span>
      <span className="Poll__ItemValue" style={{width: (votePercent +"%")}} />
    </li>
  );
};

const renderPollItems = (pollValues) => {
    const totalVotes = Object.keys(pollValues).reduce(
      (a, b) => (pollValues[a] + pollValues[b]), 0
    );
    return Object.keys(pollValues).map((pollValueKey, index) => (
      renderPollItem(pollValueKey, pollValues[pollValueKey], totalVotes, index)));
};


const Poll = ({ pollValues, pollType }) => (
  <ul className="Poll">
    {renderPollItems(pollValues)}
  </ul>
);

Poll.propTypes = {
  pollValues: PropTypes.objectOf(
    PropTypes.number.isRequired
  ).isRequired,
  pollType: PropTypes.string.isRequired,
}

export default Poll;
