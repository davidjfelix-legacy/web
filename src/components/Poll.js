import React, { PropTypes } from 'react';
import keyMirror from 'keymirror';
import { Col, Container, Progress, Row } from 'reactstrap';


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

const mapValuesOrDefault = (pollValues, totalVotes) => {
  if (Object.keys(pollValues).length === 0) {
    return (
      <Progress bar />
    );
  } else {
    return Object.keys(pollValues).map((pollValueKey, index) => (
                renderPollItem(pollValueKey, pollValues[pollValueKey], totalVotes, index)));
  }
};

const renderPollItems = (pollQuestion, pollValues) => {
    let totalVotes = 0;
    for (let item in pollValues) {
      if ({}.hasOwnProperty.call(pollValues, item)) {
        totalVotes += pollValues[item]
      }
    };
    return (
      <Container>
        <Row>
          <Col>{pollQuestion}</Col>
        </Row>
        <Row>
          <Col>
            <Progress multi>
              {mapValuesOrDefault(pollValues, totalVotes)}
            </Progress>
          </Col>
        </Row>
      </Container>
    )
};


const Poll = ({ pollValues, pollType, pollQuestion }) => (
  <div>
    {renderPollItems(pollQuestion, pollValues)}
  </div>
);

Poll.propTypes = {
  pollValues: PropTypes.objectOf(
    PropTypes.number.isRequired
  ).isRequired,
  pollType: PropTypes.string.isRequired,
  pollQuestion: PropTypes.string.isRequired,
}

export default Poll;
