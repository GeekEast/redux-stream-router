import { streams } from '../apis';
import { CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, DELETE_STREAM, EDIT_STREAM } from './types';
import history from '../history';

// C
export const createStream = (formValues) => async (dispatch, getState) => {
	const { userId } = getState();
	const response = await streams.post('/streams', { ...formValues, userId });
	dispatch({ type: CREATE_STREAM, payload: response.data });
	// navigaions
	history.push('/'); // go to the main page
};

// R
export const getStream = (id) => async (dispatch) => {
	const response = await streams.get(`/streams/${id}`);
	dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const getStreams = () => async (dispatch) => {
	const response = await streams.get('/streams');
	dispatch({ type: FETCH_STREAMS, payload: response.data });
};

// U
export const udpateStream = (id, formValues) => async (dispatch, getState) => {
	// the difference between patch and put
	const response = await streams.patch(`/streams/${id}`, formValues);
	dispatch({ type: EDIT_STREAM, payload: response.data });
	history.push('/'); // go to the main page
};

// D
export const deleteStream = (id) => async (dispatch) => {
	await streams.delete(`/streams/${id}`);
	dispatch({ type: DELETE_STREAM, payload: id });
};
