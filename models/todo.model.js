import Observable from "./observable.js";

export default class TodoModel extends Observable {
  constructor(description = "") {
    super();
    this.description = description;
  }
}
