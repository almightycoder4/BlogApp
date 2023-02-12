import axios from "axios";
import * as types from "./actionTypes";

const getUsersPosts = (params, config) => (dispatch) => {
  dispatch({ type: types.GET_POSTS_DATA_REQUEST });
  console.log(params, config);
  return axios
    .get(`${process.env.REACT_APP_BACKEND_SERVER}${params}`, config)
    .then((res) => {
      dispatch({ type: types.GET_POSTS_DATA_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_POSTS_DATA_FAILURE, payload: err });
    });
};
export { getUsersPosts };
