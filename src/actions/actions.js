export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: todo,
    },
  };
};
export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id:id,
  };
};

export const removeTodo = () => {
  return {
    type: "REMOVE_TODO",
  };
};
