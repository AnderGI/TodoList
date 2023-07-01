export function DialogDisplayerButton(additionalClases) {
  const btn = document.createElement("button");
  btn.setAttribute("class", "dialogDisplayer");
  for (const addiitionalClass of additionalClases) {
    btn.classList.add(addiitionalClass);
  }

  return btn;
}
