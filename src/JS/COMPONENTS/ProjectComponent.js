export const ProjectComponent = (title) => {
  const projectDiv = document.createElement("div");
  projectDiv.setAttribute("class", "project");

  projectDiv.innerHTML = `
  <section class="header">
    <span>
      <span class="text">${title}</span>
    </span>
    <span>
      <button class="expandContent"></button>
      <button class="deleteBtn"></button>
    </span>
  </section>
  <section class="main">
    
  </section>

    `;
  return projectDiv;
};
