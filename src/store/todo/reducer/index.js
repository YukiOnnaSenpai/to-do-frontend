import {
    PUT_ADD_NEW_TODO,
    PUT_OVERVIEW_TODO,
    PUT_UPDATE_TODO,
    PUT_DELETE_TODO
  } from "../constants";
  import * as computationFunctions from "./computation-functions";
  
  const initialState = {
    data: {},
    todos: []
  };
  
  const todoReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
      return actionHandler[type](state, payload);
    }
  
    return state;
  };
  
  const actionHandler = {
    [PUT_ADD_NEW_TODO]: computationFunctions.addTodo,
    [PUT_OVERVIEW_TODO]: computationFunctions.getTodo,
    [PUT_UPDATE_TODO]: computationFunctions.putTodo,
    [PUT_DELETE_TODO]: computationFunctions.deleteTodo
  };
  
  export default todoReducer;