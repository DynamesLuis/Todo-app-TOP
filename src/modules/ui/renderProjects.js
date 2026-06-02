import { getActiveProject } from "../../state/globalState"

export default function renderProjects(projects) {
    const $projectsContainer = document.querySelector(".projects-container");
    $projectsContainer.innerHTML = "";
    $projectsContainer.innerHTML = projects
        .map((project, index) => {
            const isActive = project.getId() == getActiveProject() ? "active-nav" : ""
            const content = index == 0 
            ? `
                <span class="project-name">
                    ${project.getName()}
                </span>
            ` :
            `
                <span class="project-name">
                    ${project.getName()}
                </span>
                <div class="project-actions">
                    <button class="edit-project-btn">✏️</button>
                    <button class="delete-project-btn">🗑️</button>
                </div>
            `;
           
           return `
                <li data-id="${project.getId()}" class="project-item ${isActive}">
                    ${content}
                </li>
                `
        })
        .join("");
}