import "./App.css";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";

let foodItems = [
  "Fruits",
  "Ghee",
  "Vegetables",
  "Eggs",
  "Milk",
  "Pulses",
  "Noodles",
];
// let foodItems = [];

function App() {
  return (
    <>
      <Container>
        <h3 className="m-4 text-center">Healthy Foods</h3>
        <ErrorMessage foodItems={foodItems}></ErrorMessage>
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
