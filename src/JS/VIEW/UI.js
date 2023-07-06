import { TodoListField } from "../COMPONENTS/TodoListFieldComponent";
import { getTodoListFields } from "../MODEL/TodoListSingleton";
import { $ } from "../UTILITIES/Selectors";
import { DOMRenderer } from "./DOMRenderer";

export function renderAside() {
  const aside = $("body > main > aside");
  const ul = document.createElement("ul");
  const fields = getTodoListFields();
  for (const field of fields) {
    const li = document.createElement("li");
    const component = TodoListField(field);
    li.append(component);
    ul.append(li);
  }
  aside.append(ul);
}

const contentRenderer = {
  all: () => console.log("all"),
  important: () => console.log("important"),
  "next 7 days": () => console.log("next7Days"),
  "next month": () => console.log("nextMonth"),
  projects: DOMRenderer.renderLocalStorageProjects,
};

export function renderAsideFieldElements(element) {
  //set title
  const title = $("body > main > section > h1");
  const asideFieldText = element.firstChild.childNodes[1].textContent;
  title.textContent = asideFieldText;
  //remove elements from container
  const divProjectCotainer = $("div.projectContainer");
  divProjectCotainer.replaceChildren();
  //set content
  contentRenderer[title.textContent.toLowerCase()]();
}

function renderProjectSection() {}
