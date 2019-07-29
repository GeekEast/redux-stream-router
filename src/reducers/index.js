import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import UserReducer from './UserIdReducer';
import StreamReducer from './StreamReducer';
import { reducer as formReducer } from 'redux-form';
export default combineReducers({
	isSignIn: AuthReducer,
	userId: UserReducer,
	form: formReducer,
	streams: StreamReducer
});
