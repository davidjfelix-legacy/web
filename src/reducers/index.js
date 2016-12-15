import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { responsiveStateReducer } from 'redux-responsive';
import authentication from './authentication';
import commentStream from './commentStream';
import streamingPoll from './streamingPoll';
import videoStreamsContainer from './videoStreams';

const mg4App = combineReducers({
  browser: responsiveStateReducer,
  authentication,
  commentStream,
  streamingPoll,
  videoStreamsContainer,
  routing: routerReducer,
});

export default mg4App;
