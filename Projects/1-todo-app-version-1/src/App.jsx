import AddTodo from "./components/AddTODO";
import AppName from "./components/AppName";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  return (
    <div className="container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className='item-container'>
        <Todo></Todo>
        <Todo></Todo>
      </div>
    </div>
  );
}

export default App;
