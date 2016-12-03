import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { responsiveStateReducer } from 'redux-responsive';
import commentStream from './modules/commentStream';
import streamingPoll from './modules/streamingPoll';
import videoStreamsContainer from './modules/videoStreams';

const mg4App = combineReducers({
  browser: responsiveStateReducer,
  commentStream,
  streamingPoll,
  videoStreamsContainer,
  routing: routerReducer,
});

export default mg4App;
