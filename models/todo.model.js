import Database from './database.js';

export default class TodoModel {
    constructor(id = null, state = 'todo', description = '') {
        this.id = id;
        this.state = state;
        this.description = description;
        this.table = 'todos';
        
    }


    setStateTodo() {
        this.state = 'todo';
    }

    setStateDoing() {
        this.state = 'doing';
    }

    setStateDone() {
        this.state = 'done';
    }

    save() {
        
    }
    
};