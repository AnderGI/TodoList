import {
  $,
  $$,
  getDOMTodoFromElement,
  getDialogFromBtn,
} from "../UTILITIES/Selectors";
import { TodoCreationController } from "../CONTROLLER/Controller";
import { renderAsideFieldContent } from "./UI";
import { LocalStorage, TodoLocalStorage } from "../STORAGE/LocalStorage";
import { set } from "date-fns";

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

const asideElementsClick = () => {
  //whenever one of the elements of the aside is being clicked
  //add class to element and display title
  const asideElements = [...$$("aside > ul > li")];

  asideElements.forEach((el) =>
    el.addEventListener("click", toogleActiveClass)
  );

  function toogleActiveClass() {
    const activeElements = asideElements.filter((el) =>
      el.classList.contains("active")
    );
    if (activeElements.length > 0) {
      activeElements.forEach((el) => el.classList.remove("active"));
    }
    this.classList.add("active");
    renderAsideFieldContent();
  }
};

const addTodoBtnClicked = () => {
  $("dialog.newTodo footer button:last-child").addEventListener(
    "click",
    TodoCreationController
  );
};

function handleProjectDOMClicks(event) {
  const target = event.target;
  if (target.matches("button.deleteBtn")) {
    //remove project
    remove();
  }
}

function remove() {
  //set dialog visible
  setWarningDialogVisible();
}

function setWarningDialogVisible() {
  const warningDialog = $("dialog.eliminationWarning");
  //set dialog visible
  warningDialog.classList.remove("hidden");
  //event delegation
  warningDialog.addEventListener("click", warningDialogEventDelegation);
}

function warningDialogEventDelegation(event) {
  if (event.target.matches("dialog.eliminationWarning button.remove")) {
    //close dialog
    //UI
    //remove todo from dom
    //controlle remove todo from localstorage
  }

  //x and close to close
}

export const registerEvents = () => {
  //close any dialog
  closeDialog();

  //display nay dialog
  displayDailog();

  asideElementsClick();

  //handle clicks on the project container rather than on every element (expand buttons, remove buttons)
  $("div.projectContainer").addEventListener("click", handleProjectDOMClicks);

  //todos
  addTodoBtnClicked();
};
