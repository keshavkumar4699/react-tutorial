import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  let [todoItems, setTodoItem] = useState([]);

  let addNewItems = (todoText, selectedDate) => {
    setTodoItem((currValue) => [
      ...currValue,
      { todoname: todoText, tododate: selectedDate },
    ]);
  };

  let deleteItem = (item) => {
    console.log(item);
    let updatedTodoItems = todoItems.filter((todo) => todo.todoname !== item);
    setTodoItem(updatedTodoItems);
  };

  return (
    <div className="container main-container">
      <h4 className="text-center">TODO APP</h4>
      <AddTodo todoItems={todoItems} handleAddButton={addNewItems}></AddTodo>
      {todoItems.length !== 0 ? (
        <Todo todoItems={todoItems} handleDeleteButton={deleteItem}></Todo>
      ) : (
        <WelcomeMessage></WelcomeMessage>
      )}
    </div>
  );
}

export default App;
