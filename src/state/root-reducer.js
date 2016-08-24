import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


const mg4App = combineReducers({
  routing: routerReducer,
});

export default mg4App;
