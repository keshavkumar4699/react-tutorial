function AddTodo() {
  return (
    <div class="container">
      <div class="row rt-row">
        <div class="col-6">
          <input type="text" placeholder="Enter TODO here"></input>
        </div>
        <div class="col-4">
          <input type="date"></input>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success rt-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
