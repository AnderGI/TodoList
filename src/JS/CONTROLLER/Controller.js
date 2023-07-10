import { $, $$ } from "../UTILITIES/Selectors";
import { LocalStorage, TodoLocalStorage } from "../STORAGE/LocalStorage";
import { TodoFactory } from "../FACTORIES/TodoFactory";

//TODO CREATION
function validateTodo(todoForm) {
  let valid = false;
  if (
    todoForm.elements.todoTitle.value === "" ||
    todoForm.elements.todoTitle.value.toLowerCase() ===
      "the field must not be empty"
  ) {
    //todo title
    todoForm.elements.todoTitle.focus();
    todoForm.elements.todoTitle.value = "This field is required";
  } else if (
    todoForm.elements.todoDescription.value === "" ||
    todoForm.elements.todoDescription.value.toLowerCase() ===
      "this field is required"
  ) {
    //todo description
    todoForm.elements.todoDescription.focus();
    todoForm.elements.todoDescription.value = "This field is required";
  } else if (todoForm.elements.dueDate.value === "") {
    //todo date
    todoForm.elements.dueDate.focus();
  } else {
    valid = true;
  }

  return valid;
}

export const TodoCreationController = () => {
  const todoForm = $(`dialog.newTodo form`);
  //validar todo y si es valido crealo
  if (validateTodo(todoForm)) {
    const { title, dueDate, priority, description } = getTodoFormData(todoForm);
    const todoObj = TodoFactory(title);
    todoObj.description = description;
    todoObj.dueDate = dueDate;
    todoObj.priority = priority;
    TodoLocalStorage.addTodo(todoObj);
    //close dialog
    todoForm.parentElement.parentElement.classList.add("hidden");
    //render the content
    renderAsideFieldContent();
  }
};

export function todoCreationFromForm(form) {
  const { title, dueDate, priority, description } = getTodoFormData(form);
  const todoObj = TodoFactory(title);
  todoObj.dueDate = dueDate;
  todoObj.priority = priority;
  todoObj.description = description;
  return todoObj;
}

export function getTodoFormData(todoForm) {
  return Object.assign(
    {},
    { title: todoForm.elements.todoTitle.value },
    { dueDate: todoForm.elements.dueDate.value },
    { priority: todoForm.elements.priority.value },
    { description: todoForm.elements.todoDescription.value }
  );
}
