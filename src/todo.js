// src/todo.js

class Todo {
    constructor(title, description, dueDate, priority, notes = '', checklist = []) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.completed = false; // Tracks if the todo is completed
    }

    // Method to mark the todo as complete
    markComplete() {
        this.completed = true;
    }

    // Method to toggle completion status
    toggleComplete() {
        this.completed = !this.completed;
    }
}

export default Todo;