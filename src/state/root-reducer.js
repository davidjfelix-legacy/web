import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { responsiveStateReducer } from 'redux-responsive';
import commentStream from './modules/commentStream';
import streamingPoll from './modules/streamingPoll';
import videoContainer from './modules/videoContainer';

const mg4App = combineReducers({
  browser: responsiveStateReducer,
  commentStream,
  streamingPoll,
  videoContainer,
  routing: routerReducer,
});

export default mg4App;
