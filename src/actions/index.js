/**
 * In Actions, you serveral things.
 * 1. API Request: CRUD
 * 2. dispatch actions to redux store to update state
 * Any response should be updated to redux at first then to the view through redux.
 */

import { signIn, signOut } from './auth';
import { createStream, getStream, getStreams, udpateStream, deleteStream } from './streams';
export { signIn, signOut, createStream, getStream, getStreams, udpateStream, deleteStream };
