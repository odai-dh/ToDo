// src/dom.js

import {
    addProject,
    addTodoToCurrentProject,
    projects,
    setCurrentProject,
    deleteProject,
    editProject,
    deleteTodo,
    editTodo,
    currentProjectIndex
} from './app';

// Modal variables
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalInput = document.getElementById('modal-input');
const modalDescription = document.getElementById('modal-description');
const modalDueDate = document.getElementById('modal-due-date');
const modalPriority = document.getElementById('modal-priority');
const modalSaveBtn = document.getElementById('modal-save');
const modalCancelBtn = document.getElementById('modal-cancel');

// Function to render the list of projects
function renderProjects() {
    const projectContainer = document.getElementById('project-container');
    projectContainer.innerHTML = ''; // Clear the container

    projects.forEach((project, index) => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project-item');

        const projectName = document.createElement('span');
        projectName.textContent = project.name;
        projectElement.appendChild(projectName);

        // Edit Button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-btn');
        editButton.addEventListener('click', () => openModal('Project', index));
        projectElement.appendChild(editButton);

        // Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => {
            deleteProject(index);
            renderProjects();
        });
        projectElement.appendChild(deleteButton);

        projectElement.addEventListener('click', () => {
            setCurrentProject(index);
            renderTodos(index);
        });

        projectContainer.appendChild(projectElement);
    });
}

// Function to render todos within a selected project
function renderTodos(projectIndex) {
    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML = ''; // Clear the container

    projects[projectIndex].todos.forEach((todo, index) => {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo-item');

        const todoTitle = document.createElement('span');
        todoTitle.textContent = `${todo.title} - Due: ${todo.dueDate}`;
        todoElement.appendChild(todoTitle);

        // Edit Button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-btn');
        editButton.addEventListener('click', () => openModal('Todo', projectIndex, index));
        todoElement.appendChild(editButton);

        // Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => {
            deleteTodo(projectIndex, index);
            renderTodos(projectIndex);
        });
        todoElement.appendChild(deleteButton);

        todoContainer.appendChild(todoElement);
    });
}

// Open the modal for adding or editing items
function openModal(type, projectIndex = null, todoIndex = null) {
    if (type === 'Project') {
        modalTitle.textContent = projectIndex !== null ? 'Edit Project' : 'Add Project';
        modalInput.value = projectIndex !== null ? projects[projectIndex].name : '';
    } else if (type === 'Todo') {
        modalTitle.textContent = todoIndex !== null ? 'Edit Todo' : 'Add Todo';
        if (todoIndex !== null) {
            const todo = projects[projectIndex].todos[todoIndex];
            modalInput.value = todo.title;
            modalDescription.value = todo.description;
            modalDueDate.value = todo.dueDate;
            modalPriority.value = todo.priority;
        } else {
            modalInput.value = '';
            modalDescription.value = '';
            modalDueDate.value = '';
            modalPriority.value = 'low';
        }
    }

    modal.classList.remove('hidden');

    // Event handler for save button
    modalSaveBtn.onclick = () => {
        const name = modalInput.value;
        const description = modalDescription.value;
        const dueDate = modalDueDate.value;
        const priority = modalPriority.value;

        if (type === 'Project') {
            if (projectIndex !== null) {
                editProject(name, projectIndex);
            } else {
                addProject(name);
            }
            renderProjects();
        } else if (type === 'Todo') {
            if (todoIndex !== null) {
                editTodo(name, description, dueDate, priority, projectIndex, todoIndex);
            } else {
                addTodoToCurrentProject(name, description, dueDate, priority);
            }
            renderTodos(projectIndex);
        }

        closeModal();
    };
}

// Close the modal
function closeModal() {
    modal.classList.add('hidden');
}

modalCancelBtn.addEventListener('click', closeModal);

document.getElementById('add-project-btn').addEventListener('click', () => openModal('Project'));
document.getElementById('add-todo-btn').addEventListener('click', () => openModal('Todo', currentProjectIndex));

export { renderProjects, renderTodos };