import { useState } from "react";
import Item from "./Item";

const FoodItems = ({foodItems, handleBuyButton}) => {
  let [boughtItems, setBoughtItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...boughtItems, item];
    setBoughtItems(newItems);
  }

  return (
    <ul className="m-3 list-group">
      {foodItems.map((item) => (
        <Item
          key={item}
          foodItem={item}
          isBought = {boughtItems.includes(item)}
          handleBuyButton={(event)=>onBuyButton(item, event)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
