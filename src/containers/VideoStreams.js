import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'reactstrap';

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


const VideoStreamsContainer = ({ dispatch }) => (
  <Container style={styles.Container} >
    <Row>
      <Col>
        <video style={styles.Video} controls onTimeUpdate={(event) => dispatch(updateTime(event.target.currentTime))}>
          <source src="https://s3.amazonaws.com/buukkittt/bbb_sunflower_1080p_60fps_normal.mp4" />
        </video>
      </Col>
    </Row>
  </Container>
);

VideoStreamsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(VideoStreamsContainer);
