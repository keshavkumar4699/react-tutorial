import TodoItem from "./TodoItem";
import styles from "./Todo.module.css";

function Todo({ todoItems, handleDeleteButton }) {
  let emptyTodo = todoItems.length === 0 && (
    <p className={`${styles.rt_message} text-center`}>
      There is no <b>todo</b> so add a new one
    </p>
  );

  return (
    <div className={`container ${styles.rt_container}`}>
      {emptyTodo}
      {todoItems.map((item) => (
        <div key={item.todoname} className={`${styles.rt_row} row`}>
          <TodoItem item={item} handleDeleteButton={handleDeleteButton}></TodoItem>
        </div>
      ))}
    </div>
  );
}

export default Todo;
