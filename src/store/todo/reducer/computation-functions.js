export function putTodo(state, payload) {
    return {
      ...state,
      data: {
        ...state.data,
        ...payload
      }
    };
  }
  
export function addTodo(state, payload) {
    return {
        ...state,
        data: {
          ...state.data,
          ...payload
        }
      };
}

export function getTodo(state, todoId) {

}

export function deleteTodo(state, todoId) {
    
}
