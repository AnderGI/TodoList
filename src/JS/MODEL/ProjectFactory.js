const checkedExtension = () => ({
  _checked: false,
});

const extensionsArray = [checkedExtension];

const proyectExtension = (extensions) => {
  //add the extensions to an empty object
  //which will be the prototype that holds the extensions
  const extensionsProto = {};
  extensions.forEach((extension) => {
    Object.assign(extensionsProto, extension());
  });

  return extensionsProto;
};

export const ProyectFactory = (title) => {
  const proyectBasicData = {
    id: Date.now(),
    title: title,
  };

  //create object that hold all the methods
  const basic = proyectExtension(extensionsArray);
  //assign to an empty object all the extensions
  const composite = Object.assign({}, basic);
  //create a proyect object from the composite object (is its prototype)
  return Object.assign(Object.create(composite), proyectBasicData);
};
