import { Store } from "../core/template";

const store = new Store({
  todos: localStorage.length === 0 ? [] : [...JSON.parse(localStorage.getItem("todoList"))],
  todo: {},
});

export default store;

// export const createTodo = ()=>{}

export const updateTodo = () => {};

// export const deleteTodo = ()=>{}

export const readTodo = async (id) => {
  try {
    const res = (await JSON.parse(localStorage.getItem("todoList"))[id]) || {};
    store.state.todo = res;
    //const res = (await JSON.parse(localStorage.getItem("todoList")[id])) || {};
    //store.state.todo = res;
  } catch (error) {
    console.log("ReadTodo Error:", error);
  }
};

// export const getTodos = () => {};
