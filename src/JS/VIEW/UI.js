import { TodoListField } from "../COMPONENTS/TodoListFieldComponent";
import { getTodoListFields } from "../MODEL/TodoListSingleton";
import { $ } from "../UTILITIES/Selectors";

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

export function renderAsideFieldTitle(element) {
  const title = $("body > main > section > h1");
  const asideFieldText = element.firstChild.childNodes[1].textContent;
  title.textContent = asideFieldText;
}

function renderProjectSection() {}
