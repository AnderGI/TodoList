import { $, $$ } from "../UTILITIES/Selectors";
import {
  TodoCreationController,
  handleProjectCreation,
} from "../CONTROLLER/Controller";
import { renderAsideFieldContent } from "./UI";
import { LocalStorage, TodoLocalStorage } from "../MODEL/LocalStorageSingleton";

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
  });
};

function remove(element) {
  const target = element.parentElement.parentElement;
  const warningDialog = $("dialog.eliminationWarning");
  const warningDialogRemoveButton = $(
    "dialog.eliminationWarning button.remove"
  );
  //set dialog visible
  warningDialog.classList.remove("hidden");
  if (target.localName === "div" && target.classList.contains("todo")) {
    warningDialogRemoveButton.addEventListener("click", function () {
      warningDialog.classList.add("hidden");
      //remove from dom
      target.remove();
      //local storage
      TodoLocalStorage.removeTodo(target.getAttribute("data-id"));
    });
  } else {
    const project = target.parentElement;
    warningDialogRemoveButton.addEventListener("click", function () {
      warningDialog.classList.add("hidden");
      //remove from dom
      project.remove();
      //remove from local storafe
      LocalStorage.removeProject(project.getAttribute("data-id"));
    });
  }
}

const addTodoBtnClicked = () => {
  $("dialog.newTodo footer button:last-child").addEventListener(
    "click",
    TodoCreationController
  );
};

const expandTodoContainer = (target) => {
  const todoDOMDiv = target.parentElement.parentElement.parentElement;
  todoDOMDiv.classList.toggle("expanded");
  target.classList.toggle("clicked");
};

function handleProjectDOMClicks(event) {
  const target = event.target;
  if (
    target.localName === "button" &&
    target.classList.contains("expandContent")
  ) {
    //expand project todo container
    expandTodoContainer(target);
  } else if (
    target.localName === "button" &&
    target.classList.contains("deleteBtn")
  ) {
    //remove project
    remove(target);
  }
}

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
  $("div.projectContainer").addEventListener("click", handleProjectDOMClicks);

  //todos
  addTodoBtnClicked();
};
