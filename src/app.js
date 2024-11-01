import Project from './project';
import Todo from './todo';
import { saveToLocalStorage, loadFromLocalStorage } from './storage';
import { renderProjects, renderTodos } from './dom';

let projects = loadFromLocalStorage();
if (projects.length === 0) {
    projects.push(new Project('Default Project'));
}
let currentProjectIndex = 0;

function addProject(name) {
    const newProject = new Project(name);
    projects.push(newProject);
    saveToLocalStorage(projects);
    renderProjects();
}

function deleteProject(index) {
    projects.splice(index, 1);
    saveToLocalStorage(projects);
}

function editProject(name, index) {
    projects[index].name = name;
    saveToLocalStorage(projects);
}

function addTodoToCurrentProject(title, description, dueDate, priority) {
    const currentProject = projects[currentProjectIndex];
    if (currentProject) {
        const newTodo = new Todo(title, description, dueDate, priority);
        currentProject.addTodo(newTodo);
        saveToLocalStorage(projects);
        renderTodos(currentProjectIndex);
    }
}

function deleteTodo(projectIndex, todoIndex) {
    projects[projectIndex].todos.splice(todoIndex, 1);
    saveToLocalStorage(projects);
}

function editTodo(title, description, dueDate, priority, projectIndex, todoIndex) {
    const todo = projects[projectIndex].todos[todoIndex];
    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
    todo.priority = priority;
    saveToLocalStorage(projects);
}

function setCurrentProject(index) {
    currentProjectIndex = index;
    renderTodos(currentProjectIndex);
}

export {
    projects,
    addProject,
    addTodoToCurrentProject,
    setCurrentProject,
    deleteProject,
    editProject,
    deleteTodo,
    editTodo,
    currentProjectIndex,
};