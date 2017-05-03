import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Col, Row } from 'reactstrap'

import { updateTime } from '../reducers/videoStreams'

export const styles = {
  Container: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10px",
  },
  Video: {
    width: "100%"
  }
}


const VideoStreamsContainer = ({ videos, dispatch }) => (
  <Container style={styles.Container} >
    <Row>
      <Col>
        <video style={styles.Video} controls onTimeUpdate={(event) => dispatch(updateTime(event.target.currentTime))}>
          <source src={videos[0]['url']} />
        </video>
      </Col>
    </Row>
  </Container>
);

VideoStreamsContainer.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(VideoStreamsContainer);
