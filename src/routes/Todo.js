import { Component } from "../core/template";
import TodoList from "../components/TodoList";
import TodoEdit from "../components/TodoEdit";

export default class Todo extends Component {
  render() {
    const todoList = new TodoList().el;
    const todoEdit = new TodoEdit().el;

    this.el.classList.add("todo");

    this.el.append(todoList, todoEdit);
  }
}
