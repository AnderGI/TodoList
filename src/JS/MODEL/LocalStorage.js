let todos;

const getTodos = () => {
  //if empty in localStorgae it will retrieve null (falsy) thus no todos have been saved
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  return todos;
};

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getTodo = (todoId) => todos.filter(({ id }) => id === todoId);

const addTodo = (todo) => todos.push(todo);

const removeTodo = (todo) => todos.filter((t) => t.getId() !== todo.getId());

const updateTodo = (id, newUpdates) => {
  //newUpdates will be a todo like object that will contain any key value pair of a todo
  //we will update the todo
  const toUpdate = getTodo(id);
  const toUpdateIndex = todos.findIndex(
    (todo) => todo.getId() === toUpdate.getIndex()
  );
  //newUpdate needs to have same property keys
  for (const entry of Object.entries(newUpdates)) {
    const [key, value] = entry;
    toUpdate[key] = value;
  }
  //add updates
  todos[toUpdateIndex] = toUpdate;
};
