import { $, $$ } from "../UTILITIES/Selectors";
import { CreateDOMProjects } from "../CONTROLLER/DOMRenderer";

const showHideAside = () => {
  const menuBtn = $("button.menu");
  const aside = $("body > main > aside");
  menuBtn.addEventListener("click", () => aside.classList.toggle("hidden"));
};

const addProyect = () => {
  const addProjectBtn = $("dialog footer button:last-child");

  addProjectBtn.addEventListener("click", function (event) {
    let projectNameInput = $("dialog input[type='text'].project");
    CreateDOMProjects(event); //insert the dom element
    projectNameInput.value = ""; //empty the input everytime the button is being clicked
  });
};

const displayDailog = () => {
  //the dialog displayer button has that class and another one to differentiate dialogs
  //the second class will be the one the dialog has
  const dialogDisplayerBtns = [...$$("button.dialogDisplayer")];

  dialogDisplayerBtns.forEach((btn) => {
    btn.addEventListener("click", showDialog);
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
  //all dialogs will have a header (we'll have the span there), main and footer (we'll have the button there)
  //-> two nested levels until we get the dialog element
  const dialogEl = dialogClosingElements[0].parentElement.parentElement;

  function hideDialog() {
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
};
