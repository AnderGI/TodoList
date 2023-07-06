import { timeDistanceFromNow } from "../UTILITIES/DateFns";

export const TodoComponent = ({ title, dueDate }) => {
  const todoDiv = document.createElement("div");
  todoDiv.setAttribute("class", "todo");
  todoDiv.innerHTML = `
  <div>
    <input type="checkbox" name="todoChecked" id="todoChecked" />
    <span class="todoTitle">Un titulo</span>
  </div>
  <div>
    <div class="showMore">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <button class="deleteBtn"></button>
  </div>
  `;
  return todoDiv;
};
