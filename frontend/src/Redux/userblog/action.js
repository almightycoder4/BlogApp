import axios from "axios";
import * as types from "./actionTypes";

const getPosts = (params) => (dispatch) => {
  dispatch({ type: types.GET_POSTS_DATA_REQUEST });
  return axios
    .get(`${process.env.REACT_APP_BACKEND_SERVER}${params}`)
    .then((res) => {
      dispatch({ type: types.GET_POSTS_DATA_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_POSTS_DATA_FAILURE, payload: err });
    });
};
export { getPosts };
