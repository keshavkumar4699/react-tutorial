import styles from './AddTodo.module.css'

function AddTodo() {
  return (
    <div className={`${styles.rt_container} container`}>
      <div className="row rt-row">
        <div className="col-6">
          <input className={styles.rt_input} type="text" placeholder="Enter TODO here"></input>
        </div>
        <div className="col-4">
          <input className={styles.rt_input} type="date"></input>
        </div>
        <div className="col-2 text-center">
          <button type="button" className={`${styles.rt_button} btn btn-success`}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
