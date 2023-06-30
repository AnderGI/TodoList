let projects = [];

const getMemoryProjects = () => projects;
const addProject = (project) => projects.push(project);
const getProject = (id) => projects.filter((p) => p.getId() === id); //returns an array
const removeProject = (id) => {
  projects = projects.filter((p) => p.getId() !== id);
};
