export function TodoListField(component) {
  const span = document.createElement("span");
  span.innerHTML = component.image;
  span.innerHTML += component.name;
  if (component?.otherComponents) {
    for (const component of component.otherComponents) {
      span.append(component);
    }
  }
  return span;
}
