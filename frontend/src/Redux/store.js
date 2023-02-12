import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as postReducer } from "./posts/reducer";
import { reducer as authReducer } from "./auth/reducer";
import { reducer as userpostReducer } from "./userblog/reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  postReducer,
  authReducer,
  userpostReducer,
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunk, logger));

export { store };
