import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";

// let foodItems = ["Fruits", "Ghee", "Vegetables", "Eggs", "Milk", "Pulses", "Noodles"];
let foodItems = [];

function App() {
  
  return (
    <>
      <h3 className="m-4 text-center">Healthy Foods</h3>
      <ErrorMessage foodItems = {foodItems}></ErrorMessage>
      <FoodItems foodItems = {foodItems}></FoodItems>
    </>
  );
}

export default App;
