import { combineReducers } from 'redux';
import authenticated from './authenticateReducer';

const rootReducer = combineReducers({
  authenticated
});

export default rootReducer;
