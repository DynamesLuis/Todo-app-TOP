let editingProject = null;

function getEditingProject() {
    return editingProject;
}

function setEditingProject(project) {
    editingProject = project;
}

function resetEditingProject() {
    editingProject = null;
}

export {
    getEditingProject,
    setEditingProject,
    resetEditingProject
}