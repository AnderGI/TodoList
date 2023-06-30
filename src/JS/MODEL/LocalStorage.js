//Projects
//to navigate to todos take into account the id of the project
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
  projects.push(project);
  saveProjects(); //temporal it will be saved once the window is closed in an event
};

const removeProject = (projectId) => {
  getProjects();
  projects.filter((p) => p.id !== projectId);
};

//Todos
/*
let todos;
const getTodos = () => {
  //if empty in localStorgae it will retrieve null (falsy) thus no todos have been saved
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  return todos;
};

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getProjectTodos = (projectId) =>
  todos.filter((t) => t.getProyectId() === projectId);

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
*/
const LocalStorage = {
  getProjects,
  saveProjects,
  addProject,
  removeProject,
  /* getProjectTodos,
  getTodos,
  saveTodos,
  addTodo,
  removeTodo,
  updateTodo,*/
};

export { LocalStorage };
