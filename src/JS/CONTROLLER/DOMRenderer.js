import { $ } from "../UTILITIES/Selectors";
import { ProjectComponent } from "../COMPONENTS/ProjectComponent";

export const CreateDOMProjects = (event) => {
  let projectNameInputValue = $("dialog input[type='text'].project").value;
  //create project with the input text value
  //const newProject = ProyectFactory(projectNameInputValue);
  //create html component
  $("div.projectContainer").insertBefore(
    ProjectComponent(projectNameInputValue),
    $("button#newProject")
  );

  projectNameInputValue = "";
  //append the project in aside and in main
  //close modal
  const addProjectBtn = event.target;
  //btn < footer < dialog
  const dialog = addProjectBtn.parentElement.parentElement;
  dialog.classList.add("hidden");
};
