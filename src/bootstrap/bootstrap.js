import { getStorage } from "../modules/storage/storage";
import renderProjects from "../modules/ui/renderProjects";
import renderTodos from "../modules/ui/renderTodos";
import initEvents from "../modules/ui/uiEvents";
import { getProjects, setActiveProject, setProjects } from "../state/globalState";

export default function bootstrapProject() {
    let projects = getStorage();
   
    if (projects) {
        setProjects(projects);
        console.log(projects);
        
        setActiveProject(projects[0].getId());
    } 

    renderProjects(getProjects())
    renderTodos();
    initEvents();
}