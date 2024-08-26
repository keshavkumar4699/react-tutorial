import styles from "./Item.module.css";

const Item = ({foodItem, handleBuyButton}) => {
  // let { foodItem } = props;

  // const handleBuyBUttonClicked = (foodItem, event) => {
  //   console.log(`${foodItem} being bought`);
  //   console.log(event);
  // }

  return (
    <li className={`${styles.item} list-group-item`}>
      {foodItem}
      <button
        type="button"
        className={`btn btn-info ${styles.button}`}
        // onClick={(event) => handleBuyBUttonClicked(foodItem, event)}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
