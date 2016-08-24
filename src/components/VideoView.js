import { connect } from 'react-redux';

import VideoContainer from './VideoContainer';

import '../css/VideoView.css';

const VideoView = connect()(VideoContainer);

export default VideoView;
