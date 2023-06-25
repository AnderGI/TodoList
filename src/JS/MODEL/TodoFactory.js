export const TodoFactory = (todoObj) => {
  const todo = Object.create(TodoFactory);
  const { title, description, dueDate, priority } = todoObj; //the user should  then add if he wants notes and should check the todo by himself
  todo.id = 1;
  todo.title = title;
  todo.description = description;
  todo.dueDate = dueDate;
  todo.priority = priority;
  todo.notes = [];
  todo.checked = false;

  return todo;
};

TodoFactory.prototype.addNotes = function (note) {
  this.notes.push(note);
};

TodoFactory.prototype.removeNotes = function (note) {
  if (this.notes.length > 0) {
    this.notes = this.notes.filter((n) => n.getId() !== note.getId());
  }
};

TodoFactory.prototype.getId = function () {
  return this.id;
};
