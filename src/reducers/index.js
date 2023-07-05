import { combineReducers } from 'redux';

// import all reducers here
import taskManagerReducer from './taskManagerReducer';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  tasks: taskManagerReducer,
});

// make the combined reducers available for import
export default reducers;
