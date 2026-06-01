import { getProjects, setActiveProject } from "../../state/globalState";
import renderProjects from "./renderProjects";

export default function setActiveProjectOnNav(e) {
    const $element = e.target;
    if ($element.tagName === 'LI') {
        const projectId = $element.dataset.id;
        setActiveProject(projectId);    
        renderProjects(getProjects());
    }
    //obtener el id
    //setear appstate
    //renderizar
}