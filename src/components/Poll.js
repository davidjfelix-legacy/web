import React, { PropTypes } from 'react';
import keyMirror from 'keymirror';
import { Col, Progress, Row } from 'reactstrap';


export const PollTypes = keyMirror({
  RADIO: null,
})

const renderPollItem = (itemName, itemVotes, totalVotes, index) => {
  const votePercent = ((itemVotes / totalVotes) * 100 ).toString();
  const color = ["primary", "success", "info", "warning", "danger"][index % 5]
  return (
    <Progress bar key={index} color={color} value={votePercent}>
      {itemName} {itemVotes}
    </Progress>
  );
};

const renderPollItems = (pollValues) => {
    let totalVotes = 0;
    for (let item in pollValues) {
      if ({}.hasOwnProperty.call(pollValues, item)) {
        totalVotes += pollValues[item]
      }
    };
    return (
      <Row>
        <Col>
          <Progress multi>
            {Object.keys(pollValues).map((pollValueKey, index) => (
              renderPollItem(pollValueKey, pollValues[pollValueKey], totalVotes, index)
            ))}
          </Progress>
        </Col>
      </Row>
    )
};


const Poll = ({ pollValues, pollType }) => (
  <div>
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
