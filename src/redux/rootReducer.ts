import { Reducer, combineReducers } from 'redux';

// slices
import userReducer from './slice/user'
import { get_user } from '../state/response_constant';

// ----------------------------------------------------------------------

const rootReducer = combineReducers({
  user: userReducer as Reducer<get_user>
});

export default rootReducer;
