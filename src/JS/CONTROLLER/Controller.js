import { $, $$ } from "../UTILITIES/Selectors";
import { ProjectComponent } from "../COMPONENTS/ProjectComponent";
import { ProyectFactory } from "../MODEL/ProjectFactory";
import { LocalStorage } from "../MODEL/LocalStorage";

const renderDOMProjects = (projectObj) => {
  const divProjectCotainer = $("div.projectContainer");
  const newProjectBtn = $("button.newProject");
  //create html component
  divProjectCotainer.insertBefore(ProjectComponent(projectObj), newProjectBtn);
};

const closeModal = (event) => {
  //close project modal
  const addProjectBtn = event.target;
  //btn < footer < dialog
  const dialog = addProjectBtn.parentElement.parentElement;
  dialog.classList.add("hidden");
};

export const ProjectCreationController = (event) => {
  //create project with the input text value
  const newProject = ProyectFactory(
    $("dialog input[type='text'].project").value
  );

  //save in localstorage
  LocalStorage.addProject(newProject);

  //render it in html
  renderDOMProjects(newProject);

  //close project modal
  closeModal(event);
};

const removeDOMProject = (event) => {
  const target = event.target;
  //div.project > button.deleteProject > svg
  if (target.nodeName === "svg") {
    const projectDiv = target.parentElement.parentElement;
    const projectDivId = projectDiv.getAttribute("data-id");
    //remove from localStorgae
    LocalStorage.removeProject(projectDivId);
    projectDiv.remove();
    LocalStorage.saveProjects();
  }
};

export const ProjectDeletionController = (event) => {
  removeDOMProject(event);
};
