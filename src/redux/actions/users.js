import axios from "axios";
import * as types from "../actions/types";

export const getUsers = () => async (dispatch) => {
  dispatch({ type: types.GET_USERS_REQUEST });
  try {
    const response = await axios.get("https://dummyjson.com/users");
    const data = response.data.users;
    dispatch({ type: types.GET_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.GET_USERS_FAILED });
  }
};
