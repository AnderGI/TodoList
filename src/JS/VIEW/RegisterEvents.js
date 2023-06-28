import { $ } from "../UTILITIES/Selectors";
import { CreateDOMProjects } from "../CONTROLLER/DOMRenderer";

export const registerEvents = () => {
  //add project
  const addProjectBtn = $("dialog footer button:last-child");
  addProjectBtn.addEventListener("click", function (event) {
    let projectNameInput = $("dialog input[type='text'].project");
    CreateDOMProjects(event);
    projectNameInput.value = "";
  });
};
