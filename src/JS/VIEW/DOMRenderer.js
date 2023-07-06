import { LocalStorage } from "../MODEL/LocalStorageSingleton";
import { $ } from "../UTILITIES/Selectors";
import { ProjectComponent } from "../COMPONENTS/ProjectComponent";
import { expandTodoContainer } from "./RegisterEvents";
//PROJECT DOM RENDERING
const renderDOMProjects = (projectObj) => {
  const divProjectCotainer = $("div.projectContainer");
  //create html component
  const DOMProject = ProjectComponent(projectObj);
  divProjectCotainer.append(DOMProject);
  expandTodoContainer();
};

const renderLocalStorageProjects = () => {
  const projects = LocalStorage.getProjects();
  if (projects.length > 0) {
    projects.forEach((p) => renderDOMProjects(p));
  }
};

export const DOMRenderer = {
  renderDOMProjects,
  renderLocalStorageProjects,
};
