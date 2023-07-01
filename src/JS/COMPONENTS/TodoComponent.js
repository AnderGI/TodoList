import { timeDistanceFromNow } from "../UTILITIES/DateFns";

export const TodoComponent = ({ title, dueDate }) => {
  const todoDiv = document.createElement("div");
  todoDiv.setAttribute("class", "todo");
  todoDiv.innerHTML = `
    <article>
        <h4>${title}</h4>
        <p>${timeDistanceFromNow(Date.parse(dueDate))}</p>
        <button>Read More</button>
    </article>
  `;
  return todoDiv;
};
