import { timeDistanceFromNow } from "../UTILITIES/DateFns";

export const TodoComponent = (todoObj) => {
  const { title, dueDate, id } = todoObj;
  const todoDiv = document.createElement("div");
  todoDiv.setAttribute("class", "todo");
  todoDiv.setAttribute("data-id", id);
  todoDiv.innerHTML = `
  <div>
    <input type="checkbox" name="todoChecked" id="todoChecked" />
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
