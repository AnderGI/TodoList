import { $, $$ } from "../UTILITIES/Selectors";
import {
  TodoCreationController,
  handleProjectCreation,
} from "../CONTROLLER/Controller";
import { renderAsideFieldContent } from "./UI";

const showHideAside = () => {
  const menuBtn = $("button.menu");
  const aside = $("body > main > aside");
  menuBtn.addEventListener("click", () => {
    aside.classList.toggle("hidden");
    //the main container will have a different styling if aside is displayed
    aside.classList.contains("hidden")
      ? $("body > main").classList.remove("asideOpen") || ""
      : $("body > main").classList.add("asideOpen");
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

const proyectBtnClicked = () => {
  const addProjectBtn = $("dialog.newProject footer button:last-child");
  addProjectBtn.addEventListener("click", function () {
    handleProjectCreation();
    // expandTodoContainer();
  });
};

function removeProjectOrTodo(element) {
  if (element.classList.contains("deleteProject")) {
    const project = element.parentElement.parentElement.parentElement;
    removeProjectFromDialog(project);
  } else if (element.classList.contains("deleteTodo")) {
  }
}

function removeProjectFromDialog(project) {
  const warningDialog = $("dialog.eliminationWarning");
  const warningDialogRemoveButton = $(
    "dialog.eliminationWarning button.remove"
  );
  //set dialog visible
  warningDialog.classList.remove("hidden");
  //remove project if it is accepted
  warningDialogRemoveButton.addEventListener("click", function () {
    warningDialog.classList.add("hidden");
    project.remove();
  });
}

const addTodoBtnClicked = () => {
  $("dialog.newTodo footer button:last-child").addEventListener(
    "click",
    TodoCreationController
  );
};

export const expandTodoContainer = (event) => {
  const target = event.target;
  if (
    target.localName === "button" &&
    target.classList.contains("expandContent")
  ) {
    const todoDOMDiv = target.parentElement.parentElement.parentElement;
    todoDOMDiv.classList.toggle("expanded");
    target.classList.toggle("clicked");
  }
};

export const registerEvents = () => {
  //ASIDE
  showHideAside();

  //close any dialog
  closeDialog();

  //display nay dialog
  displayDailog();

  asideElementsClick();

  proyectBtnClicked();

  //handle clicks on the project container rather than on every element (expand buttons, remove buttons)
  $("div.projectContainer").addEventListener("click", expandTodoContainer);

  //todos
  addTodoBtnClicked();
};
