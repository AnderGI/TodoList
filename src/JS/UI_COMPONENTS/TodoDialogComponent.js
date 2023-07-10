export function TodoDialogComponent({
  header,
  titleValue = "",
  id = "",
  dateValue = "",
  priorityValue = "low",
  descriptionValue = "",
  lastButtonText = "",
}) {
  const dialog = document.createElement("dialog");
  dialog.setAttribute("class", "newTodo");
  dialog.setAttribute("data-id", id);
  dialog.classList.add("hidden");
  dialog.innerHTML = `
    <header>
      <h6>${header}</h6>
      <span class="closeDialog newTodo"></span>
    </header>
    <main>
      <form action="#">
        <section>
          <label for="todoTitle">Title : </label>
          <input type="text" name="todoTitle" id="todoTitle" value="${titleValue}"/>
        </section>
        <section>
          <label for="dueDate">Due Date : </label>
          <input type="datetime-local" name="dueDate" id="dueDate" value="${dateValue}"/>
          <label for="priority">Priority : </label>
          <select name="priority" id="priority">
            <option value="high" ${
              priorityValue === "high" ? "selected" : ""
            }>High &#128561;</option>
            <option value="medium" ${
              priorityValue === "medium" ? "selected" : ""
            }>Medium &#128550;</option>
            <option value="low" ${
              priorityValue === "low" ? "selected" : ""
            }>Low &#128554;</option>
          </select>
        </section>
        <section>
          <label for="todoDescription">Description : </label>
          <br / >
          <textarea
            name="todoDescription"
            id="todoDescription"
            cols="30"
            rows="10"
            >${descriptionValue}</textarea>
        </section>
      </form>
    </main>
    <footer>
      <button class="closeDialog">Close</button>
      <button class="${
        lastButtonText === "Add Todo"
          ? "addTodo"
          : lastButtonText === "Edit Todo"
          ? "editTodo"
          : ""
      }">${lastButtonText}</button>
    </footer>`;

  return dialog;
}
