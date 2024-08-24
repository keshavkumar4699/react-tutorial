import Button from "./Button";
import styles from "./ButtonContainer.module.css";

let ButtonContainer = ({ button_text }) => {
  return (
    <div className={styles.buttonsContainer}>
      {button_text.map((text)=>(
        <Button text = {text}></Button>
      ))}
    </div>
  );
};

export default ButtonContainer;
