import styles from "./AddTodo.module.css";
import { useState, useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ handleAddButton }) {
  // const [todoText, setTodoText] = useState("");
  // const [selectedDate, setSelectedDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // function handleTodoName(event) {
  //   setTodoText(event.target.value);
  //   noOfUpdates.current += 1;
  // };

  // function handleDateChange(event) {
  //   setSelectedDate(event.target.value);
  //   console.log(`noOfUpdates are: ${noOfUpdates.current}`);
  // };

  const handleAddClick = (event) => {
    event.preventDefault();
    const todoText = todoNameElement.current.value;
    const selectedDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    handleAddButton(todoText, selectedDate)
    // setTodoText("");
    // setSelectedDate("");
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
            // onChange={handleTodoName}
            // value={todoText}
          ></input>
        </div>
        <div className="col-4">
          <input
            className={styles.rt_input}
            type="date"
            ref={dueDateElement}
            // onChange={handleDateChange}
            // value={selectedDate}
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
