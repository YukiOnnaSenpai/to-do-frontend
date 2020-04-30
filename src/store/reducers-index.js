import { combineReducers } from "redux";
import todoReducer from "./todo/reducer";

const rootReducer = combineReducers({
  todoReducer
});

export default (state, action) => {
  return rootReducer(state, action);
};