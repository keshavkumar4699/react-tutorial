import Item from "./Item";

const FoodItems = (props) => {
  let { foodItems } = props;

  return (
    <ul className="m-3 list-group">
      {foodItems.map((item) => (
        <Item
          key={item}
          foodItem={item}
          handleBuyButton={() => console.log(`${item} bought`)}
        ></Item> 
      ))}
    </ul>
  );
};

export default FoodItems;
