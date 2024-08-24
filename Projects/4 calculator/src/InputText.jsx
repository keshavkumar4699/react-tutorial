import styles from "./InputText.module.css";

let InputText = () => {
  return (
    <input
      className={styles.text_display}
      type="text"
      placeholder="Input text"
    ></input>
  );
};

export default InputText;
