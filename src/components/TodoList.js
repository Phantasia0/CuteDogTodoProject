import { Component } from "../core/template";
import TodoItem from "../components/TodoItem";
import todoStore from "../store/todo";

export default class TodoList extends Component {
  constructor() {
    super();
    this.el.classList.add("todo-list");
    todoStore.subscribe("todos", () => {
      this.render();
    });
  }

  render() {
    this.el.innerHTML = /* html */ `
      <div class="todos"></div>
    `;

    const todosEl = this.el.querySelector(".todos");
    todosEl.append(...todoStore.state.todos.map((todo, idx) => new TodoItem({ todo, idx }).el));
  }
}
