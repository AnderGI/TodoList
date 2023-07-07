import "./styles.css";
import { registerEvents } from "./JS/VIEW/RegisterEvents";
import { renderAside, renderAsideFieldContent } from "./JS/VIEW/UI";
window.addEventListener("DOMContentLoaded", function () {
  //if any element needs to be dinamically rendered
  renderAside(); //UI
  renderAsideFieldContent();
  registerEvents();
});
