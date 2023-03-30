import Observer from "./observer.js";

export default class TodoView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.controller.model.addObserver(this);
    this.app = document.getElementById("root");
    this.app.innerHTML = this.mountView();
    this.moundEvents();
  }

  mountView() {
    return `
        <div id="title"> <h1>TODO List</h1> </div>
        <div id="add-todo">
          <div>
            <input type="text" placeholder="Digite a descrição da tarefa." id="description"/>
          </div>
          <div>
            <button id="submit-todo">
              Adicionar
            </button>
          </div>
        </div>
        <div id="todo-list">
            <ul>
              <li>Fazer compras</li>
              <li>Fazer compras...............................................</li>
            </ul>
        </div>
        `;
  }

  moundEvents() {
    let description = document.getElementById("description");
    let submit = document.getElementById("submit-todo");

    description.addEventListener("input", this.controller);
    submit.addEventListener("click", this.controller);
  }

  mountTodo(todo) {
    let ulTodoList = document.getElementById("todo-list").getElementsByTagName("ul")[0];

    let li = document.createElement("li");
    li.textContent = todo;
    ulTodoList.append(li);
  }

  update(model) {
    this.mountTodo(model.description);
  }
}
