import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState, useReducer } from "react";
import TodoItemsContext from "./store/todoItemsStorage";

const todoItemsReducer = (action) => { //takes action object and return current state
  return [];
}

function App() {
  // const [todoItems, setTodoItem] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);//const [state, dispatch] = useReducer(reducer. initialState)



  let addNewItems = (todoText, selectedDate) => {
    const newItemObject = {
      type: "NEW_ITEM",
      payload:{
        itemName,
        itemDueDate
      }
    };
    dispatchTodoItems(newItemObject);
    // setTodoItem((currValue) => [
    //   ...currValue,
    //   { todoname: todoText, tododate: selectedDate },
    // ]);
  };

  let deleteItem = (item) => {
    let updatedTodoItems = todoItems.filter((todo) => todo.todoname !== item);
    setTodoItem(updatedTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItems: addNewItems,
        deleteItem: deleteItem,
      }}
    >
      <div className="container main-container">
        <h4 className="text-center">TODO APP</h4>
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <Todo></Todo>
      </div>
    </TodoItemsContext.Provider>
  );
}

export default App;
