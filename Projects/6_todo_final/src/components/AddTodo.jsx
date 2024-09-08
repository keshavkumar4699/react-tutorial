import styles from "./AddTodo.module.css";
import { useState } from "react";

function AddTodo({ handleAddButton }) {
  const [todoText, setTodoText] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  function handleTodoName(event) {
    setTodoText(event.target.value);
  }
  function handleDateChange(event) {
    setSelectedDate(event.target.value);
  }
  const handleAddClick = () => {
    handleAddButton(todoText, selectedDate)
  };
  return (
    <div className={`${styles.rt_container} container`}>
      <div className="row rt-row">
        <div className="col-6">
          <input
            className={styles.rt_input}
            type="text"
            placeholder="Enter TODO here"
            onChange={handleTodoName}
            value={todoText}
          ></input>
        </div>
        <div className="col-4">
          <input
            className={styles.rt_input}
            type="date"
            onChange={handleDateChange}
            value={selectedDate}
          ></input>
        </div>
        <div className="col-2 text-center">
          <button
            type="button"
            className={`${styles.rt_button} btn btn-success`}
            onClick={handleAddClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
