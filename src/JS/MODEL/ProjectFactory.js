export const ProyectFactory = (title) => {
  const proyect = Object.create(ProyectFactory);

  proyect.id = Date.now();
  proyect.title = title;
  proyect.checked = false;
};

ProyectFactory.prototype.addTodo = function (todo) {
  this.todos.push(todo);
};

ProyectFactory.prototype.getId = function () {
  return this.id;
};
