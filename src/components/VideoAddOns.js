import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'

import CommentStream from './CommentStream'
import StreamingPoll from './StreamingPoll'


const mapStateToProps = ({videoStreamsContainer}) => {
  return {
    addOns: videoStreamsContainer.addOns.map((addOn) => addOn.type)
  };
}

const VideoAddOns = ({addOns}) => (
  <Container>
    {addOns.map((addOn, index) => {
      switch (addOn) {
        case "CommentStream":
          return (<CommentStream key={index}/>)
        case "StreamingPoll":
          return (<StreamingPoll key={index}/>)
        default:
          return null;
    }})}
  </Container>
);

VideoAddOns.propTypes = {
  addOns: PropTypes.arrayOf(
    PropTypes.string.isRequired).isRequired,
}

export default connect(mapStateToProps)(VideoAddOns);
