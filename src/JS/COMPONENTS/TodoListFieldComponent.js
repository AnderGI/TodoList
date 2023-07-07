export function TodoListField(component) {
  const span = document.createElement("span");
  let active = false;
  span.innerHTML = component.image;
  span.innerHTML += component.name;
  if (component?.otherComponents) {
    for (const component of component.otherComponents) {
      span.append(component);
    }
  }
  if (component?.active) {
    active = true;
  }
  return { span, active };
}
