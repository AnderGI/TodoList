import "./styles.css";
import { $ } from "./JS/UTILITIES/Selectors";

$("button.menu").addEventListener("click", function () {
  $("body > main > aside").classList.toggle("hidden");
});
