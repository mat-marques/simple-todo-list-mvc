export default class TodoController {
  constructor(model) {
    this.model = model;
  }

  handleEvent(e) {
    e.stopPropagation();
    switch (e.type) {
      case "input":
        this.changeHandler(e.target);
        break;
      case "click":
        this.clickHandler(e.target);
        break;
      default:
        console.log(e.target);
    }
  }

  changeHandler(target) {
    this.model.description = target.value;
  }

  clickHandler(target) {
    this.model.notify(this.model);
  }
}
