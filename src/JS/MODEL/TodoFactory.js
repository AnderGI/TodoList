const projectExtension = ({ id, title }) => ({
  projectId,
  proyectTitle,
  /*
  getProyectId: function () {
    return this.projectId;
  },*/
});

const dueDateExtension = (date) => ({
  dueDate: date,
});

const notesExtension = () => ({
  notes: [],
  /*
  addNotes: function (note) {
    this.notes.push(note);
  },
  getNotes: function () {
    return this.notes;
  },
  removeNote: function (noteId) {
    this.notes.filter((n) => n.getId() !== noteId);
  },*/
});

const checkedExtension = () => ({
  checked: false,
  /*
  toggleChecked: function () {
    this._checked = !this._checked;
  },
  isChecked: function () {
    return this._checked;
  },*/
});

const prioritiesExtension = () => ({
  priority: "low",
  /*
  setPriority: function (p) {
    this._priority = p;
  },
  getPriority: function () {
    return this._priority;
  },*/
});

const descriptionExtension = () => ({
  description,
  /*
  getDescription: function () {
    return this._description;
  },
  setDescription: function (desc) {
    this._description = desc;
  },
  */
});

const extensionsArray = [
  projectExtension,
  dueDateExtension,
  notesExtension,
  checkedExtension,
  prioritiesExtension,
  descriptionExtension,
];

const todoExtensions = (extensions) => {
  const baseObj = {};
  extensions.forEach((extension) => {
    Object.assign(baseObj, extension());
  });
  return baseObj;
};

export const TodoFactory = (title) => {
  const basicData = {
    title,
    id: Date.now(),
    /*
    getId: function () {
      return this.id;
    },
    */
  };

  const basic = todoExtensions(extensionsArray);
  const composite = Object.assign({}, basic);
  return Object.assign(Object.create(composite), basicData);
};
