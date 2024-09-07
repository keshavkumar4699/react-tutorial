import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/foodInput";
import FoodItems from "./components/FoodItems";

function App() {
  let [foodItems, setFoodItems] = useState([]); //empty array in beginning 

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      let newItems = [newFoodItem, ...foodItems];
      setFoodItems(newItems);
      event.target.value = "";
    }
  };

  return (
    <>
      <Container>
        <h3 className="m-4 text-center">Healthy Foods</h3>
        <ErrorMessage foodItems={foodItems}></ErrorMessage>
        <FoodInput handleOnKeyDown={onKeyDown}></FoodInput>
        <FoodItems foodItems={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>
          Above is the list of foods that are good for your health and well
          being
        </p>
      </Container>
    </>
  );
}

export default App;
