import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import UserReducer from './UserIdReducer';
export default combineReducers({
	isSignIn: AuthReducer,
	userId: UserReducer
});
