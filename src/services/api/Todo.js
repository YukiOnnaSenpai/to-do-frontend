import { httpBaseClient } from "../HttpBaseClient";

const ENDPOINTS = {
  GET_TODOS: "/api/todo",
  SAVE_TODO: "api/todo",
  UPDATE_TODO: "api/todo/%d",
  DELETE_TODO: "api/todo/%d"
};

class TodoService{

  saveTodo = todoData => {
    return httpBaseClient.getApiClient().put(ENDPOINTS.SAVE_USER, todoData);
  };

  getTodo = () => {
    return httpBaseClient.getApiClient().get(ENDPOINTS.GET_TODOS);
  };

  updateTodo = todo => {
    return httpBaseClient.getApiClient().put(ENDPOINTS.UPDATE_TODO, todo);
  };

  deleteTodo = todoId => {
    return httpBaseClient.getApiClient().delete(
      format(ENDPOINTS.DELETE_TODO, todoId)
    );
  };

}
export default new TodoService();