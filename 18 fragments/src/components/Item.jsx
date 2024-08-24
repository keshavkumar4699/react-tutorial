import styles from './Item.module.css'

const Item = (props) => {
  let { foodItem } = props;
  return (
    <li className={`${styles.item} list-group-item`}>
      {foodItem}
    </li>
  );
};

export default Item;
