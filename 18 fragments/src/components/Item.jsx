import styles from "./Item.module.css";

const Item = (props) => {
  let { foodItem } = props;

  const handleBuyBUttonClicked = (foodItem, event) => {
    console.log(`${foodItem} being bought`);
    console.log(event);
  }

  return (
    <li className={`${styles.item} list-group-item`}>
      {foodItem}
      <button
        type="button"
        className={`btn btn-info ${styles.button}`}
        onClick={(event) => handleBuyBUttonClicked(foodItem, event)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
