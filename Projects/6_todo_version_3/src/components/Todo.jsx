import TodoItem from "./TodoItem";
import styles from "./Todo.module.css";

function Todo({ todoItems, handleDeleteButton }) {
  return (
    <div className={`container ${styles.rt_container}`}>
      {todoItems.map((item) => (
        <div key={item.todoname} className={`${styles.rt_row} row`}>
          <TodoItem
            item={item}
            handleDeleteButton={handleDeleteButton}
          ></TodoItem>
        </div>
      ))}
    </div>
  );
}

export default Todo;
