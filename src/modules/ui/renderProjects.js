import { getActiveProject } from "../../state/globalState"

export default function renderProjects(projects) {   
    const $projectsContainer = document.querySelector(".projects-container");
    $projectsContainer.innerHTML = "";     
    $projectsContainer.innerHTML = projects
        .map(project => {
            const isActive = project.getId() == getActiveProject() ? true : false
            if (isActive) {
                return `<li class="active-nav">${project.name}</li>`
            } else {
                return `<li>${project.name}</li>`
            }
        })
        .join("");
}