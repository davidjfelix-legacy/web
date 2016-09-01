import React, { PropTypes } from 'react';
import keyMirror from 'keymirror';

import '../css/Poll.css'


export const PollTypes = keyMirror({
  RADIO: null,
})

const renderPollItem = (itemName, itemVotes, totalVotes, index) => {
  const votePercent = ((itemVotes / totalVotes) * 100 ).toString();
  return (
    <div key={index}>
      <span className="Poll__ItemLabel">{itemName}</span>
      <span style={{width: (votePercent +"%")}} className="Poll__ItemValue"/>
    </div>
  );
};

const renderPollItems = (pollValues) => {
    let totalVotes = 0;
    for (let item in pollValues) {
      if ({}.hasOwnProperty.call(pollValues, item)) {
        totalVotes += pollValues[item]
      }
    };
    return Object.keys(pollValues).map((pollValueKey, index) => (
      renderPollItem(pollValueKey, pollValues[pollValueKey], totalVotes, index)));
};


const Poll = ({ pollValues, pollType }) => (
  <div className="Poll">
    {renderPollItems(pollValues)}
  </div>
);

Poll.propTypes = {
  pollValues: PropTypes.objectOf(
    PropTypes.number.isRequired
  ).isRequired,
  pollType: PropTypes.string.isRequired,
}

export default Poll;
