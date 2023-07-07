//FUNCTIONS ARE COMMENTED SINCE THEY CANNOT BE STORED IN LOCAL STORAGE

const projectExtension = () => ({
  projectId: null,
  proyectTitle: null,
  /*
  getProyectId: function () {
    return this.projectId;
  },*/
});

const dueDateExtension = (date) => ({
  dueDate: date,
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
  description: null,
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
  dueDateExtension,
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
