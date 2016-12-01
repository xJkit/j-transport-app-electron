import * as Types from './ActionType';
import { CALL_API } from 'middleware/api';

const ENDPOINT = 'http://localhost:3000/mrt.json';
// const ENDPOINT = 'http://localhost:3000/test-mrt.json';
export const loadMRT = () => ({
  [CALL_API]: {
    types: [
      Types.GET_MRT_REQUEST,
      Types.GET_MRT_SUCCESS,
      Types.GET_MRT_FAILURE,
    ],
    endpoint: ENDPOINT,
  },
});
