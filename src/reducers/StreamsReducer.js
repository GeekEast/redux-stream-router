import { FETCH_STREAM, FETCH_STREAMS, DELETE_STREAM, EDIT_STREAM, CREATE_STREAM } from '../actions/types';

export default (streams = [], action) => {
	switch (action.type) {
		case FETCH_STREAM:
			return { ...streams, [action.payload.id]: action.payload };
		case FETCH_STREAMS:
		case DELETE_STREAM:
		case EDIT_STREAM:
			return { ...streams, [action.payload.id]: action.payload }; // little tricks with []
		case CREATE_STREAM:
			return { ...streams, [action.payload.id]: action.payload };
		default:
			return streams;
	}
};
