import { getStorage } from "../modules/storage/storage";
import renderProjects from "../modules/ui/renderProjects";
import initEvents from "../modules/ui/uiEvents";
import { getProjects, setActiveProject, setProjects } from "../state/globalState";

export default function bootstrapProject() {
    let projects = getStorage();
   
    if (projects) {
        setProjects(projects);
        setActiveProject(projects[0].getId());
    } 

    renderProjects(getProjects())
    initEvents();
}