import React from "react";
import styles from './TodoItem.module.css'

let TodoItem = ({item, handleDeleteButton}) => {

  function handleDelete(){
    handleDeleteButton(item.todoname)
  }

  return (
    <React.Fragment>
      <div className={`${styles.rt_text} col-6`}>{item.todoname}</div>
      <div className={`${styles.rt_text} col-4`}>{item.tododate}</div>
      <div className="col-2 text-center">
        <button type="button" className="btn btn-danger rt-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </React.Fragment>
  );
};

export default TodoItem;
