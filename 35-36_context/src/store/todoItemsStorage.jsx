import { createContext } from "react";

const TodoItemsContext = createContext({
  todoItems: [],
  addNewItems: () => {},
  deleteItem: () => {},
});

export default TodoItemsContext;
