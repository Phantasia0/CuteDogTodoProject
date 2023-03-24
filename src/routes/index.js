import { createRouter } from "../core/template";
import Home from "./Home";
import Todo from "./Todo";
import TodoDetail from "./TodoDetail";
import About from "./About";

export default createRouter([
  { path: "#/", component: Home },
  { path: "#/todo", component: Todo },
  { path: "#/todoDetail", component: TodoDetail },
  { path: "#/about", component: About },
]);
