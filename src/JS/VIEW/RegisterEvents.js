import { $, $$ } from "../UTILITIES/Selectors";
import {
  ProjectCreationController,
  ProjectDeletionController,
  TodoCreationController,
  handleProjectCreation,
} from "../CONTROLLER/Controller";
import { renderAsideFieldTitle } from "./UI";

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
    renderAsideFieldTitle(this);
  }
};

const proyectBtnClicked = () => {
  const addProjectBtn = $("dialog.newProject footer button:last-child");
  addProjectBtn.addEventListener("click", function () {
    handleProjectCreation();
    expandTodoContainer();
  });
};

const expandTodoContainer = () => {
  const expandTodContainerBtn = $("div.project button.expandContent");
  expandTodContainerBtn.addEventListener("click", function () {
    const mainSection = $("div.project section.main");
    mainSection.classList.toggle("expanded");
    this.classList.toggle("clicked");
  });
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
};
