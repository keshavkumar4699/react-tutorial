import styles from "./AddTodo.module.css";
import { useContext, useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";
import TodoItemsContext from "../store/todoItemsStorage";

function AddTodo() {
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  const {addNewItems} = useContext(TodoItemsContext);

  const handleAddClick = (event) => {
    event.preventDefault();
    const todoText = todoNameElement.current.value;
    const selectedDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItems(todoText, selectedDate)
  };
  
  return (
    <div className={`${styles.rt_container} container`}>
      <form className="row rt-row" onSubmit={handleAddClick}>
        <div className="col-6">
          <input
            className={styles.rt_input}
            type="text"
            placeholder="Enter TODO here"
            ref={todoNameElement}
          ></input>
        </div>
        <div className="col-4">
          <input
            className={styles.rt_input}
            type="date"
            ref={dueDateElement}
          ></input>
        </div>
        <div className="col-2 text-center">
          <button
            className={`${styles.rt_button} btn btn-success`}
          >
            <IoMdAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
