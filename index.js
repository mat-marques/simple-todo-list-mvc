import TodoModel from './models/todo.model.js';
import TodoController from './controllers/todo.controller.js';
import TodoView from './views/todo.view.js';

(() => {
    let model = new TodoModel();
    let controller = new TodoController(model);
    let view = new TodoView(controller);
})();