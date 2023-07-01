export const ProjectComponent = (title) => {
  const projectDiv = document.createElement("div");
  projectDiv.setAttribute("class", "project");

  projectDiv.innerHTML = `
  <span>
    <input type="checkbox" id="checkbox" hidden />
    <label for="checkbox" class="checkbox">
      <span class="icon"></span>
      <span class="text">${title}</span>
    </label>
  </span>
  <span>
    <button class="expandContent"></button>
    <button class="deleteBtn"></button>
  </span>
    `;
  return projectDiv;
};
