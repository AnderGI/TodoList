import { asideElementsClick, handleDialogEvents } from "./Events";
import { TodoLocalStorage } from "./STORAGE/LocalStorage";
import { AsideComponent } from "./UI_COMPONENTS/AsideComponent";
import { getTodoListFields } from "./UI_COMPONENTS/AsideComponentsArray";
import { TodoComponent } from "./UI_COMPONENTS/TodoComponent";
import { TodoDialogComponent } from "./UI_COMPONENTS/TodoDialogComponent";
import { addWeeksFromDate, isDateBeforeOther } from "./UTILITIES/DateFns";
import { $, $$ } from "./UTILITIES/Selectors";

const divProjectCotainer = $("div.projectContainer");
const asideFieldComponents = getTodoListFields(); //retreive fields with name, svg an other components (optional)
//const addTodoDialog = $("dialog.newTodo");

//RENDER ASIDE
export function renderAside() {
  const aside = $("body > main > aside");
  const ul = document.createElement("ul");
  for (const field of asideFieldComponents) {
    const li = document.createElement("li");
    const { span: component, active } = AsideComponent(field); // create fields with name, svg an other components (optional)
    li.append(component);
    if (active) {
      li.classList.add("active");
      renderActiveLiContent(li);
    }
    ul.append(li);
  }

  ul.addEventListener("click", asideElementsClick);
  aside.append(ul);
}

//RENDER MAIN CONTENT SECTION TAKING INTO ACCOUNT THE ACTIVE LI ELEMENT
const contentRenderer = {
  all: renderAllTodosField,
  important: renderImportantTodos,
  "next 7 days": renderNextWeekTodos,
  "next month": renderNextMonthTodos,
};

export function renderActiveLiContent(activeElement) {
  divProjectCotainer.replaceChildren();
  //set the data from the active element
  const titleEl = $("body > main > section > h1");
  const asideFieldText = activeElement.firstChild.childNodes[1].textContent;
  titleEl.textContent = asideFieldText;
  //render the dom components taking into account the active element
  contentRenderer[titleEl.textContent.toLowerCase()]();
}

function renderDOMTodo(todoObj) {
  const DOMTodo = TodoComponent(todoObj);
  divProjectCotainer.append(DOMTodo);
}

function renderAllTodosField() {
  const todos = TodoLocalStorage.getTodos();
  if (todos.length > 0) {
    todos.forEach((t) => renderDOMTodo(t));
  }
}

//IMPORTANT FIELD
function renderImportantTodos() {
  const todos = TodoLocalStorage.getTodos().filter(
    (t) => t.priority.toLowerCase() === "high"
  );
  todos.forEach((t) => renderDOMTodo(t));
}

//NEXT WEEK (7 days or 1 week from todays date)
function renderNextWeekTodos() {
  const today = new Date();
  const limit = addWeeksFromDate(today, 1);
  const todos = TodoLocalStorage.getTodos().filter((t) =>
    isDateBeforeOther(Date.parse(t.dueDate), limit)
  );
  todos.forEach((t) => renderDOMTodo(t));
}

function renderNextMonthTodos() {
  const today = new Date();
  const limit = addWeeksFromDate(today, 4);
  const todos = TodoLocalStorage.getTodos().filter((t) =>
    isDateBeforeOther(Date.parse(t.dueDate), limit)
  );
  todos.forEach((t) => renderDOMTodo(t));
}

//ADD TODO DIALOG
export function displayDialog(dialog) {
  $("body").append(dialog);
  dialog.classList.remove("hidden");
  dialog.addEventListener("click", handleDialogEvents);
}

export function hideDialog(dialog) {
  dialog.classList.add("hidden");
  $("body").removeChild(dialog);
}
