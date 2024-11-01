// src/project.js

import Todo from './todo';

class Project {
    constructor(name) {
        this.name = name;
        this.todos = []; // An array to store todos for this project
    }

    // Method to add a new todo to the project
    addTodo(todo) {
        this.todos.push(todo);
    }

    // Method to remove a todo by its index
    removeTodo(index) {
        if (index > -1 && index < this.todos.length) {
            this.todos.splice(index, 1);
        }
    }
}

export default Project;