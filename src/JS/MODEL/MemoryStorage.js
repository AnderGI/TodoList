let projects = [];

const getProjects = () => projects;
const addProject = (project) => projects.push(project);
const getProject = (id) => projects.filter((p) => p.getId() === id); //returns an array
const removeProject = (id) => {
  projects = projects.filter((p) => p.getId() !== id);
};

export const MemoryStorage = {
  getProjects,
  addProject,
  getProject,
  removeProject,
};
