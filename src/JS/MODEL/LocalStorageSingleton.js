//get the id
let projects;

const getProjects = () => {
  projects = JSON.parse(localStorage.getItem("projects")) || [];
  return projects;
};

const saveProjects = () => {
  localStorage.setItem("projects", JSON.stringify(projects));
};

const addProject = (project) => {
  getProjects();
  projects.unshift(project);
  saveProjects(); //temporal it will be saved once the window is closed in an event
};

const removeProject = (projectId) => {
  projects = getProjects();
  projectId = idValidation(projectId);
  projects = projects.filter((p) => p.id !== projectId);
  saveProjects();
};

//Todo Addition
let todos;
const getTodos = () => {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  return todos;
};

const saveTodos = () => {
  localStorage.setItem(JSON.stringify(todos));
};

const addTodo = (todo) => {
  getTodos();
  todos.unshift(todo);
  saveTodos();
};

const removeTodo = (todoId) => {
  todoId = idValidation(todoId);
  todos = todos.filter((t) => t.id !== todoId);
};

//Modify todo -> Get and Save at the same index
const getTodo = (todoId) => {
  todoId = idValidation(todoId);
  getTodos();
  const todo = todos.filter((t) => t.id === todoId);
  const index = todos.findIndex((t) => t.id === todoId);
  return { todo, index };
};

const saveTodo = ({ todo, index }) => {
  getTodos();
  todos.splice(index, 0, todo); //add without removing nothing todo at index x
};

function idValidation(id) {
  if (typeof id !== "number") {
    id = parseInt(id);
  }

  return id;
}

const LocalStorage = {
  getProjects,
  saveProjects,
  addProject,
  removeProject,
};

const TodoLocalStorage = {
  getTodos,
  saveTodos,
  getTodo,
  addTodo,
  removeTodo,
  saveTodo,
};

export { LocalStorage };
