import AddTodo from "./components/AddTODO";
import Todo from "./components/Todo";
import "./App.css";

let todos = [{
  todoname: "Go to nursery",
  tododate: "4/10/2024"
},
{
  todoname: "Trip to village",
  tododate: "6/12/2023"
},
{
  todoname: "Trip to bali",
  tododate: "12/2/2025"
},
{
  todoname: "Buy Cooler",
  tododate: "5/3/2024"
},
{
  todoname: "Shopping",
  tododate: "8/10/2024"
}];

// let todos = [];

function App() {
  return (
    <div className="container main-container">
      <h4 className="text-center">TODO APP</h4>
      <AddTodo></AddTodo>
      <Todo todoItems = {todos}></Todo>
    </div>
  );
}

export default App;
