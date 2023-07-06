import { $, $$ } from "../UTILITIES/Selectors";
import { ProjectComponent } from "../COMPONENTS/ProjectComponent";
import { ProyectFactory } from "../MODEL/ProjectFactory";
import { LocalStorage } from "../MODEL/LocalStorageSingleton";
import { DOMRenderer } from "../VIEW/DOMRenderer";
import { TodoFactory } from "../MODEL/TodoFactory";

export function handleProjectCreation() {
  //validar
  if (validateProjectCreation()) {
    $("dialog.newProject").classList.add("hidden");
    const project = ProyectFactory($("dialog.newProject #name").value);
    $("div.projectContainer").append(ProjectComponent(project));
    LocalStorage.addProject(project);
  }
  //crear, renderizar, guardar en local storage
}

function validateProjectCreation() {
  const input = $("dialog.newProject #name");
  let valid = false;
  if (input.value === "") {
    input.focus();
    input.value = "the field must not be empty";
    input.classList.add("invalid");
    input.addEventListener("input", function () {
      this.classList.remove("invalid");
    });
  } else {
    valid = true;
  }
  return valid;
}

function validateTodo() {
  const todoForm = $("dialog.newTodo form");
  let valid = false;
  if (
    todoForm.elements.todoTitle.value === "" ||
    todoForm.elements.todoTitle.value.toLowerCase() ===
      "the field must not be empty"
  ) {
    todoForm.elements.todoTitle.focus();
    todoForm.elements.todoTitle.value = "This field is required";
  } else if (
    todoForm.elements.todoDescription.value === "" ||
    todoForm.elements.todoDescription.value.toLowerCase() ===
      "this field is required"
  ) {
    todoForm.elements.todoDescription.focus();
    todoForm.elements.todoDescription.value = "This field is required";
  } else if (todoForm.elements.dueDate.value === "") {
    todoForm.elements.dueDate.focus();
  } else {
    valid = true;
  }

  return valid;
}

const createTodo = () => {
  const todoForm = $("dialog.newTodo form");
  const todo = TodoFactory(todoForm.elements.todoTitle.value);
};

export const TodoCreationController = () => {
  //validar todo y si es valido crealo
  if (validateTodo()) {
    //createTodo();
  }

  //guardarlo en el localstorage´
  //añadirlo al dom y renderizarlo
};
