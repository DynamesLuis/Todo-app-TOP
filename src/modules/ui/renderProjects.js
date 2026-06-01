import { getActiveProject } from "../../state/globalState"

export default function renderProjects(projects) {   
    const $projectsContainer = document.querySelector(".projects-container");
    $projectsContainer.innerHTML = "";     
    $projectsContainer.innerHTML = projects
        .map(project => {
            const isActive = project.getId() == getActiveProject() ? true : false
            if (isActive) {
                return `<li data-id="${project.getId()}" class="active-nav">${project.getName()}</li>`
            } else {
                return `<li data-id="${project.getId()}">${project.getName()}</li>`
            }
        })
        .join("");
}