import * as Types from './ActionType';
import { CALL_API } from 'middleware/api';

// const MRT_ENDPOINT = 'http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=55ec6d6e-dc5c-4268-a725-d04cc262172b';
const LOCAL_END_POINT = 'http://localhost:3000/mrt.json';
export const loadMRT = () => ({
  [CALL_API]: {
    types: [
      Types.GET_MRT_REQUEST,
      Types.GET_MRT_SUCCESS,
      Types.GET_MRT_FAILURE,
    ],
    endpoint: LOCAL_END_POINT,
  },
});
