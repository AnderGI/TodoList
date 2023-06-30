import { $, $$ } from "../UTILITIES/Selectors";
import { ProjectComponent } from "../COMPONENTS/ProjectComponent";
import { ProyectFactory } from "../MODEL/ProjectFactory";
import { LocalStorage } from "../MODEL/LocalStorage";
import { DOMRenderer } from "../VIEW/DOMRenderer";

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
  DOMRenderer.renderDOMProjects(newProject);

  //close project modal because a ne project has been made
  closeModal(event);
};

//PROJECT REMOVAL
const removeLocalStorageProjectController = (id) => {
  if (typeof id === "string") id = Number(id);
  LocalStorage.removeProject(id);
};

const removeDOMProject = (target) => {
  //div.project > button.deleteProject > svg
  const projectDiv = target.parentElement.parentElement;
  const projectDivId = projectDiv.getAttribute("data-id");
  removeLocalStorageProjectController(projectDivId);
  projectDiv.remove();
  $("main h1").textContent = "";
};

const handleDIVProjectClick = (target) => {
  //add classlist when clicked and remove the ones that have it
  const hoveredProyects = [
    ...target.parentElement.getElementsByClassName("project"),
  ].filter((p) => p.classList.contains("hovered"));

  for (const project of hoveredProyects) {
    project.classList.remove("hovered");
  }

  target.classList.add("hovered");

  //add title to main
  $("main h1").textContent = target.textContent;
};

export const ProjectDeletionController = (event) => {
  const target = event.target;
  if (target.nodeName === "svg") {
    removeDOMProject(target);
  } else if (target.nodeName === "DIV" && target.className === "project") {
    //handle click over div.projects
    //add class to div and render its name in main
    handleDIVProjectClick(target); //<- div.project
  }
};
