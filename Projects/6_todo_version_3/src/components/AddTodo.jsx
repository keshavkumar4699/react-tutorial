import styles from "./AddTodo.module.css";
import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ handleAddButton }) {
  const [todoText, setTodoText] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  function handleTodoName(event) {
    setTodoText(event.target.value);
  };

  function handleDateChange(event) {
    setSelectedDate(event.target.value);
  };

  const handleAddClick = (event) => {
    handleAddButton(todoText, selectedDate)
    setTodoText("");
    setSelectedDate("");
    event.preventDefault();
  };
  
  return (
    <div className={`${styles.rt_container} container`}>
      <form className="row rt-row" onSubmit={handleAddClick}>
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
