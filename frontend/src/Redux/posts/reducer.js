import * as types from "./actionTypes";
const data = {
  posts: [],
  isLoading: false,
  isLoaded: false,
  isError: false,
};

const reducer = (state = data, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_POSTS_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_POSTS_DATA_SUCCESS:
      return {
        ...state,
        posts: payload,
        isLoading: false,
        isLoaded: true,
        isError: false,
      };
    case types.GET_POSTS_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export { reducer };
