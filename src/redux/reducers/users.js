import * as types from "../actions/types";

const initialState = {
  users: [],
  user: {},
  loading: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_REQUEST:
      return { ...state, loading: true };
    case types.GET_USERS_SUCCESS:
      return { ...state, users: action.payload, loading: false, error: false };
    case types.GET_USERS_FAILED:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default userReducer;
