import { timeDistanceFromNow } from "../UTILITIES/DateFns";

export const TodoComponent = (todoObj) => {
  const { title, dueDate, id, checked } = todoObj;
  const todoDiv = document.createElement("div");
  todoDiv.setAttribute("class", "todo");
  todoDiv.setAttribute("data-id", id);
  if (checked) {
    todoDiv.setAttribute("checked", "checked");
  }
  todoDiv.innerHTML = `
  <div>
    <input type="checkbox" name="todoChecked" id="todoChecked" ${
      checked ? "checked" : ""
    }/>
    <span class="todoTitle">${title}, ${timeDistanceFromNow(dueDate)}</span>
    </div>
  <div>
    <div class="showMore">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <button class="deleteBtn deleteTodo"></button>
  </div>
  `;
  return todoDiv;
};
