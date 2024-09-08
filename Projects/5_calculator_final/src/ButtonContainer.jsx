import Button from "./Button";
import styles from "./ButtonContainer.module.css";

let ButtonContainer = ({ button_text, handleOnClick }) => {
  return (
    <div className={styles.buttonsContainer}>
      {button_text.map((text) => (
        <Button key={text} text={text} handleOnClick={handleOnClick}></Button>
      ))}
    </div>
  );
};

export default ButtonContainer;
