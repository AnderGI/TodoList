import { LocalStorage } from "../MODEL/LocalStorage";
import { $ } from "../UTILITIES/Selectors";
import { ProjectComponent } from "../COMPONENTS/ProjectComponent";
//PROJECT DOM RENDERING
const renderDOMProjects = (projectObj) => {
  const divProjectCotainer = $("div.projectContainer");
  const newProjectBtn = $("button.dialogDisplayer.newProject");
  //create html component
  divProjectCotainer.insertBefore(ProjectComponent(projectObj), newProjectBtn);
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
