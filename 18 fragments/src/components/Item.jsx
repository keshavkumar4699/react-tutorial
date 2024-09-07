import styles from "./Item.module.css";

const Item = ({ foodItem, handleBuyButton, isBought }) => {
  return (
    <li className={`${styles.item} list-group-item ${isBought && `active`}`}>
      {foodItem}
      <button
        type="button"
        className={`btn btn-info ${styles.button}`}
        onClick={() => handleBuyButton(foodItem)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
