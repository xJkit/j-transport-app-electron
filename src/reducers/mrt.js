import * as Types from 'actions/ActionType';

const initialState = {
  isFetching: false,
};

const mrtReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_MRT_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case Types.GET_MRT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        payload: { ...action.payload },
      };
    case Types.GET_MRT_FAILURE:
      return {
        ...state,
        isFetching: false,
        payload: action.payload,
      };
    default:
      return state;
  }
};

export default mrtReducer;
