import { TodoListField } from "../COMPONENTS/TodoListFieldComponent";
import { getTodoListFields } from "../MODEL/TodoListSingleton";
import { $, $$ } from "../UTILITIES/Selectors";
import { expandTodoContainer } from "./RegisterEvents";
import { ProjectComponent } from "../COMPONENTS/ProjectComponent";
import { LocalStorage, TodoLocalStorage } from "../MODEL/LocalStorageSingleton";
import { TodoComponent } from "../COMPONENTS/TodoComponent";

const divProjectCotainer = $("div.projectContainer");

export function renderAside() {
  const aside = $("body > main > aside");
  const ul = document.createElement("ul");
  const fields = getTodoListFields(); //retreive fields with name, svg an other components (optional)
  for (const field of fields) {
    const li = document.createElement("li");
    const { span: component, active } = TodoListField(field); // create fields with name, svg an other components (optional)
    li.append(component);
    if (active) li.classList.add("active");
    ul.append(li);
  }
  aside.append(ul);
}

const contentRenderer = {
  all: renderAllTodosField,
  important: renderImportantTodos,
  "next 7 days": () => console.log("next7Days"),
  "next month": () => console.log("nextMonth"),
  projects: renderProjectsField,
};

export function renderAsideFieldContent() {
  divProjectCotainer.replaceChildren();
  //set content
  renderActiveAsideFieldContent();
}

function renderActiveAsideFieldContent() {
  //get the list
  const asideElements = [...$$("aside > ul > li")];
  //get the active element from it
  const activeElement = asideElements.filter((el) =>
    el.classList.contains("active")
  )[0];
  //set the data from the active element
  const titleEl = $("body > main > section > h1");
  const asideFieldText = activeElement.firstChild.childNodes[1].textContent;
  titleEl.textContent = asideFieldText;
  //render the dom components taking into account the active element
  contentRenderer[titleEl.textContent.toLowerCase()]();
}

//PROJECT DOM RENDERING
const renderDOMProjects = (projectObj) => {
  //create html component
  const DOMProject = ProjectComponent(projectObj);
  divProjectCotainer.append(DOMProject);
};

function renderProjectsField() {
  const projects = LocalStorage.getProjects();
  if (projects.length > 0) {
    projects.forEach((p) => renderDOMProjects(p));
  }
}

//ALL FIELD
const renderDOMTodo = (todoObj) => {
  const DOMTodo = TodoComponent(todoObj);
  divProjectCotainer.append(DOMTodo);
};

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
