import React, { useContext } from "react";
import styles from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";
import TodoItemsContext from "../store/todoItemsStorage";

let TodoItem = ({ todoname,tododate}) => {
  const {deleteItem} = useContext(TodoItemsContext)
  return (
    <React.Fragment>
      <div className={`${styles.rt_text} col-6`}>{todoname}</div>
      <div className={`${styles.rt_text} col-4`}>{tododate}</div>
      <div className="col-2 text-center">
        <button
          type="button"
          className="btn btn-danger rt-button"
          onClick={()=>deleteItem(todoname)}
        >
          <MdDelete />
        </button>
      </div>
    </React.Fragment>
  );
};

export default TodoItem;
