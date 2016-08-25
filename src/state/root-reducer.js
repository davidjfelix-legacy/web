import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import commentStream from './modules/commentStream';
import videoContainer from './modules/videoContainer';

const mg4App = combineReducers({
  commentStream,
  videoContainer,
  routing: routerReducer,
});

export default mg4App;
