import "./styles.css";
import { $ } from "./JS/UTILITIES/Selectors";
import { registerEvents } from "./JS/VIEW/RegisterEvents";

window.addEventListener("DOMContentLoaded", function () {
  $("button.menu").addEventListener("click", function () {
    $("body > main > aside").classList.toggle("hidden");
  });

  $("button#newProject").addEventListener("click", function () {
    const isDialogHidden = $("dialog#newProject").classList.contains("hidden");
    if (isDialogHidden) {
      $("dialog#newProject").classList.remove("hidden");
    }
  });

  [$("dialog .delete"), $("dialog footer button:first-child")].forEach(
    (btn) => {
      btn.addEventListener("click", function () {
        const isDialogHidden =
          $("dialog#newProject").classList.contains("hidden");
        if (!isDialogHidden) {
          $("dialog#newProject").classList.add("hidden");
        }
      });
    }
  );

  registerEvents();
});
