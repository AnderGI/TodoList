import { $, $$ } from "../UTILITIES/Selectors";
import {
  ProjectCreationController,
  ProjectDeletionController,
} from "../CONTROLLER/Controller";

const showHideAside = () => {
  const menuBtn = $("button.menu");
  const aside = $("body > main > aside");
  menuBtn.addEventListener("click", () => {
    aside.classList.toggle("hidden");
    aside.classList.contains("hidden")
      ? $("body > main").classList.remove("asideOpen") || ""
      : $("body > main").classList.add("asideOpen");
  });
};

const addProyect = () => {
  const addProjectBtn = $("dialog.newProject footer button:last-child");

  addProjectBtn.addEventListener("click", function (event) {
    let projectNameInput = $("dialog input[type='text'].project");
    ProjectCreationController(event); //insert the dom element
    projectNameInput.value = ""; //empty the input everytime the button is being clicked
  });
};

const displayDailog = () => {
  //the dialog displayer button has that class and another one to differentiate dialogs
  //the second class will be the one the dialog has
  const dialogDisplayerBtns = [...$$("button.dialogDisplayer")];

  dialogDisplayerBtns.forEach((el) => {
    el.addEventListener("click", showDialog);
  });

  function showDialog() {
    const dialogEl = $(`dialog.${[...this.classList][1]}`);
    const isDialogHidden = dialogEl.classList.contains("hidden");
    if (isDialogHidden) {
      dialogEl.classList.remove("hidden");
    }
  }
};

const closeDialog = () => {
  //two ways -> span.closeDialog || button.closeDialog (in every dialog)
  const dialogClosingElements = [...$$("dialog .closeDialog")];

  function hideDialog() {
    const dialogEl = $(`dialog.${[...this.classList][1]}`);
    const isDialogHidden = dialogEl.classList.contains("hidden");
    if (!isDialogHidden) {
      dialogEl.classList.add("hidden");
    }
  }

  dialogClosingElements.forEach((el) => {
    el.addEventListener("click", hideDialog);
  });
};

export const registerEvents = () => {
  //ASIDE
  showHideAside();

  //New Proyect Btn
  addProyect();

  //close any dialog
  closeDialog();

  //display nay dialog
  displayDailog();

  $("div.projectContainer").addEventListener(
    "click",
    ProjectDeletionController
  );
};
