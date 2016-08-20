import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


export default function get() {
  return combineReducers({
    routing: routerReducer,
  });
}

