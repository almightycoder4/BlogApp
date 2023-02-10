import * as types from "./actionTypes";
const loginData = {
  token: "",
  isLoading: false,
  isError: false,
};
const reducer = (state = loginData, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        isLoading: false,
        isError: false,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return {
        ...state,
      };
  }
};
export { reducer };
