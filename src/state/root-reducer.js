import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import commentStream from './modules/commentStream';
import streamingPoll from './modules/streamingPoll';
import videoContainer from './modules/videoContainer';

const mg4App = combineReducers({
  commentStream,
  streamingPoll,
  videoContainer,
  routing: routerReducer,
});

export default mg4App;
