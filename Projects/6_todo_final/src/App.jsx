import AddTodo from "./components/AddTODO";
import Todo from "./components/Todo";
import "./App.css";
import { useState } from "react";

function App() {
  let [todoItem, setTodoItem] = useState([]);

  let handleAddButton = (todoText, selectedDate) => {
    let updatedTodoItems = [
      ...todoItem,
      { todoname: todoText, tododate: selectedDate },
    ];
    setTodoItem(updatedTodoItems);
  };

  let handleDeleteButton = (item) => {
    console.log(item);
    let updatedTodoItems = todoItem.filter((todo) => todo.todoname !== item);
    console.log(updatedTodoItems);
    setTodoItem(updatedTodoItems);
  };

  return (
    <div className="container main-container">
      <h4 className="text-center">TODO APP</h4>
      <AddTodo handleAddButton={handleAddButton}></AddTodo>
      <Todo todoItems={todoItem} handleDeleteButton={handleDeleteButton}></Todo>
    </div>
  );
}

export default App;
