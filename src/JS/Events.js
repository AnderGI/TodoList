import { getTodoFormData, todoCreationFromForm } from "./CONTROLLER/Controller";
import { TodoFactory } from "./FACTORIES/TodoFactory";
import { TodoLocalStorage } from "./STORAGE/LocalStorage";
import {
  displayDialog,
  hideDialog,
  renderActiveLiContent,
  renderAside,
} from "./UI";
import { TodoDialogComponent } from "./UI_COMPONENTS/TodoDialogComponent";
import {
  $,
  $$,
  getDOMTodoFromElement,
  getTodoDivFromBtn,
} from "./UTILITIES/Selectors";

const addTodoBtn = $("button.dialogDisplayer.newTodo");

export function asideElementsClick(event) {
  //this -> aside ul
  //event will be either on the ul or the li
  const asideElements = [...this.getElementsByTagName("li")];
  const activeAsideElements = asideElements.filter((el) =>
    el.classList.contains("active")
  );
  if (activeAsideElements.length > 0) {
    activeAsideElements.forEach((el) => el.classList.remove("active"));
  }

  if (event.target.localName === "li") {
    event.target.classList.add("active");
    //render the main content on the element that is active
    renderActiveLiContent(event.target);
  }
}

//CLOSE ANY DIALOG
//DIALOG : HEADER > CLOSE X, ^ MAIN,  FOOTER > CLOSE BUTTON
//EVENT DELEGATION
//RENDER ADD TODO DIALOG

export function handleDialogEvents(event) {
  if (
    event.target.matches("button.closeDialog") ||
    event.target.matches("span.closeDialog")
  ) {
    hideDialog(getDOMTodoFromElement(event.target));
  } else if (event.target.matches("button.addTodo")) {
    //add todo
    const form = getDOMTodoFromElement(event.target).getElementsByTagName(
      "form"
    )[0];

    //validate form
    if (validateTodoForm(form)) {
      //create todo obj
      const todoObj = todoCreationFromForm(form);
      TodoLocalStorage.addTodo(todoObj);
      renderActiveLiContent(
        [...$$("aside ul li")].filter((el) =>
          el.classList.contains("active")
        )[0]
      );
      hideDialog($("dialog.newTodo"));
    }
  } else if (event.target.matches("button.editTodo")) {
    const dialog = getTodoDivFromBtn(event.target);
    const form = dialog.querySelector("form");
    const { title, dueDate, priority, description } = getTodoFormData(form);
    const toEditTodo = TodoLocalStorage.getTodo(dialog.getAttribute("data-id"));
    //set values
    toEditTodo.title = title;
    toEditTodo.description = description;
    toEditTodo.dueDate = dueDate;
    toEditTodo.priority = priority;
    TodoLocalStorage.saveTodo(toEditTodo);
    hideDialog(dialog);
    renderActiveLiContent(
      [...$$("aside ul li")].filter((el) => el.classList.contains("active"))[0]
    );
  } else if (event.target.matches("button.deleteBtn.deleteTodo")) {
    const todoDiv = getTodoDivFromBtn(event.target);
    const id = todoDiv.getAttribute("data-id");
    console.log(id);
    /*
    todoDiv.remove();
    TodoLocalStorage.removeTodo(id);
    renderActiveLiContent(
      [...$$("aside ul li")].filter((el) => el.classList.contains("active"))[0]
    );
    */
  }
}

export function renderTodoDialog() {
  addTodoBtn.addEventListener("click", function () {
    displayDialog(
      TodoDialogComponent({
        header: "New Todo",
        titleValue: "",
        id: "",
        dateValue: "",
        descriptionValue: "",
        lastButtonText: "Add Todo",
      })
    );
  });
}

function validateTodoForm(form) {
  for (let i = 0; i < [...form.elements].length; i++) {
    const element = form.elements[i];
    if (element.value === "") {
      element.focus();
      break;
    }
  }
  return [...form.elements].every((el) => el.value !== "");
}

//HANDLE DIV PROJECTCONTAINER EVENTS
export function projectContainerEventsHandler() {
  $("div.projectContainer").addEventListener("click", function (event) {
    if (event.target.matches("div.showMore")) {
      //get id from todo
      const id = getTodoDivFromBtn(event.target).getAttribute("data-id");
      //get todo
      const todo = TodoLocalStorage.getTodo(id);
      //show dialog
      displayDialog(
        TodoDialogComponent({
          header: "Edit Todo",
          titleValue: todo.title,
          id: todo.id,
          dateValue: todo.dueDate,
          priorityValue: todo.priority,
          descriptionValue: todo.description,
          lastButtonText: "Edit Todo",
        })
      );
    } else if (event.target.matches("button.deleteBtn.deleteTodo")) {
      const todoDiv = getTodoDivFromBtn(event.target);
      const id = todoDiv.getAttribute("data-id");
      todoDiv.remove();
      TodoLocalStorage.removeTodo(id);
      renderActiveLiContent(
        [...$$("aside ul li")].filter((el) =>
          el.classList.contains("active")
        )[0]
      );
    } else if (event.target.matches("input#todoChecked")) {
      const todoDiv = getTodoDivFromBtn(event.target);
      const id = todoDiv.getAttribute("data-id");
      const todo = TodoLocalStorage.getTodo(id);
      todo.checked = !todo.checked;
      TodoLocalStorage.saveTodo(todo);
    }
  });
}
