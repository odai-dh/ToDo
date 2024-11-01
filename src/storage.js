// src/storage.js

import Project from './project';
import Todo from './todo';

// Function to save projects to localStorage
function saveToLocalStorage(data) {
    localStorage.setItem('projects', JSON.stringify(data));
}

// Function to load projects from localStorage and re-instantiate as Project and Todo objects
function loadFromLocalStorage() {
    const data = localStorage.getItem('projects');
    if (!data) return []; // Return an empty array if no data is found

    // Convert each loaded project to a Project instance
    const projectsData = JSON.parse(data);
    return projectsData.map(projectData => {
        // Create a new Project instance
        const project = new Project(projectData.name);
        
        // Map each todo in the project to a Todo instance
        project.todos = projectData.todos.map(todoData => {
            return new Todo(
                todoData.title,
                todoData.description,
                todoData.dueDate,
                todoData.priority,
                todoData.notes,
                todoData.checklist
            );
        });
        
        return project;
    });
}

export { saveToLocalStorage, loadFromLocalStorage };