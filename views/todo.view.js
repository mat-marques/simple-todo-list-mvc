export default class TodoView {
  constructor(controller) {
    this.controller = controller;
    this.app = document.getElementById("root");
    this.app.innerHTML = this.mountView();
    this.moundEvents();
  }

  mountView() {
    return `
        <div id="add-todo">
            <input type="text" placeholder="Digite a descrição da tarefa." id="description"/>
            <input type="submit" id="submit-todo"/>
        </div>
        <div id="todo-list">
            <ul>
            </ul>
        </div>
        `;
  }

  moundEvents() {
    let description = document.getElementById("description");
    let submit = document.getElementById("submit-todo");
    
    if (submit != null) description.addEventListener("input", this.controller);
    if (submit != null) submit.addEventListener("click", this.controller);
  }
}
