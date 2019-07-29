import { FETCH_STREAM, FETCH_STREAMS, DELETE_STREAM, EDIT_STREAM, CREATE_STREAM } from '../actions/types';
import _ from 'lodash';
export default (stream = {}, action) => {
	switch (action.type) {
		case FETCH_STREAM:
			return { ...stream, [action.payload.id]: action.payload };
		case FETCH_STREAMS:
			// mapKeys will modify the key of an iterable and return a a object
			// here it will take the 'id' attribute from its values as the new id
			return { ...stream, ..._.mapKeys(action.payload, 'id') };
		case DELETE_STREAM:
			return _.omit(stream, action.payload);
		case EDIT_STREAM:
			return { ...stream, [action.payload.id]: action.payload }; // little tricks with []
		case CREATE_STREAM:
			return { ...stream, [action.payload.id]: action.payload };
		default:
			return stream;
	}
};
