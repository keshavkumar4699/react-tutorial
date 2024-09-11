import TodoItem from "./TodoItem";
import styles from "./Todo.module.css";
import { useContext } from "react";
import TodoItemsContext from "../store/todoItemsStorage";

function Todo() {
  const {todoItems, deleteItem} = useContext(TodoItemsContext);
  return (
    <div className={`container ${styles.rt_container}`}>
      {todoItems.map((item) => (
        <div key={item.todoname} className={`${styles.rt_row} row`}>
          <TodoItem
            todoname={item.todoname}
            tododate={item.tododate}
          ></TodoItem>
        </div>
      ))}
    </div>
  );
}

export default Todo;
