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
  projects.push(project);
  saveProjects(); //temporal it will be saved once the window is closed in an event
};

const removeProject = (projectId) => {
  projects = getProjects();
  projects = projects.filter((p) => p.id !== projectId);
  saveProjects();
};

const LocalStorage = {
  getProjects,
  saveProjects,
  addProject,
  removeProject,
};

export { LocalStorage };
