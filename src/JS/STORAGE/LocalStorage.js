//TODO
let todos;
const getTodos = () => {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  return todos;
};

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const addTodo = (todo) => {
  getTodos();
  todos.unshift(todo);
  saveTodos();
};

const removeTodo = (todoId) => {
  getTodos();
  todos = todos.filter((t) => t.id !== todoId);
  saveTodos();
};

//Modify todo -> Get and Save at the same index
const getTodo = (todoId) => {
  getTodos();
  const todo = todos.filter((t) => t.id === todoId)[0];
  saveTodos();
  return todo;
};

const saveTodo = (todo) => {
  getTodos();
  const index = todos.findIndex((t) => t.id === todo.id);
  todos[index] = todo;
  saveTodos();
};

const TodoLocalStorage = {
  getTodos,
  saveTodos,
  getTodo,
  addTodo,
  removeTodo,
  saveTodo,
};

export { TodoLocalStorage };
