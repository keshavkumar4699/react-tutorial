import styles from "./InputText.module.css";

let InputText = ({handleOnKeyUp, inputValue}) => {
  return (
    <input
      className={styles.text_display}
      type="text"
      placeholder="Input text"
      value = {inputValue} readOnly
    ></input>
  );
};

export default InputText;
