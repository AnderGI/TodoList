import { TodoListField } from "../COMPONENTS/TodoListFieldComponent";
import { getTodoListFields } from "../MODEL/TodoListSingleton";
import { $, $$ } from "../UTILITIES/Selectors";
import { expandTodoContainer } from "./RegisterEvents";
import { ProjectComponent } from "../COMPONENTS/ProjectComponent";
import { LocalStorage, TodoLocalStorage } from "../MODEL/LocalStorageSingleton";
import { TodoComponent } from "../COMPONENTS/TodoComponent";

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
  important: () => console.log("important"),
  "next 7 days": () => console.log("next7Days"),
  "next month": () => console.log("nextMonth"),
  projects: renderProjectsField,
};

export function renderAsideFieldContent() {
  const asideElements = [...$$("aside > ul > li")];
  const activeElement = asideElements.filter((el) =>
    el.classList.contains("active")
  )[0];
  console.dir(activeElement);
  //set title
  const title = $("body > main > section > h1");
  const asideFieldText = activeElement.firstChild.childNodes[1].textContent;
  title.textContent = asideFieldText;
  //remove elements from container
  const divProjectCotainer = $("div.projectContainer");
  divProjectCotainer.replaceChildren();
  //set content
  contentRenderer[title.textContent.toLowerCase()]();
}
const divProjectCotainer = $("div.projectContainer");

//PROJECT DOM RENDERING
const renderDOMProjects = (projectObj) => {
  //create html component
  const DOMProject = ProjectComponent(projectObj);
  divProjectCotainer.append(DOMProject);
  expandTodoContainer();
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
