import { combineReducers } from 'redux';

// slices
import userReducer from './slice/user'

// ----------------------------------------------------------------------

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;
