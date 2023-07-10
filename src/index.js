import { projectContainerEventsHandler, renderTodoDialog } from "./JS/Events";
import { renderAside } from "./JS/UI";
import "./styles.css";
window.addEventListener("DOMContentLoaded", function () {
  //if any element needs to be dinamically rendered
  renderAside();
  renderTodoDialog();
  projectContainerEventsHandler();
});
