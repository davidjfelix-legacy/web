import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import commentStream from './modules/commentStream';

const mg4App = combineReducers({
  commentStream,
  routing: routerReducer,
});

export default mg4App;
