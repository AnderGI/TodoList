import "./styles.css";
import { $ } from "./JS/UTILITIES/Selectors";
import { registerEvents } from "./JS/VIEW/RegisterEvents";
import { DOMRenderer } from "./JS/VIEW/DOMRenderer";
window.addEventListener("DOMContentLoaded", function () {
  //Render Local Storage Elements
  DOMRenderer.renderLocalStorageProjects();
  registerEvents();
});

//this method will save the data regarding to projects and todos every time the user closes or switches the current window
//that way the data retrieved from localstorage does not have to be saved every time a user creates, modifies, removes projects or todos
//window.addEventListener("beforeunload", LocalStorage.saveProjects);
