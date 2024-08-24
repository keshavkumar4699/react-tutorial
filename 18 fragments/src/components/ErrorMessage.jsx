import styles from './ErrorMessage.module.css'

const ErrorMessage = ({foodItems}) => {
  return foodItems.length === 0 && <p className={`${styles.message} ${styles["bold-text"]} ${styles["italic-text"]} text-center`}>I am Hungry</p>;
};

export default ErrorMessage;
