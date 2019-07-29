/**
 * In Actions, you serveral things
 * 1. API Request: CRUD
 * 2. dispatch actions to redux store to update state
 */

import { streams } from '../apis';
import { STREAM_CREATE, FETCH_STREAM, FETCH_STREAMS, DELETE_STREAM, EDIT_STREAM } from './types';

// C
export const createStream = (formValues) => async (dispatch) => {
	const response = await streams.post('/streams', formValues);
	dispatch({ type: STREAM_CREATE, payload: response.data });
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
export const udpateStream = (id, formValues) => async (dispatch) => {
	const response = await streams.put(`/streams/${id}`, formValues);
	dispatch({ type: EDIT_STREAM, payload: response.data });
};

// D
export const deleteStream = (id) => async (dispatch) => {
	await streams.delete(`/streams/${id}`);
	dispatch({ type: DELETE_STREAM, payload: id });
};
