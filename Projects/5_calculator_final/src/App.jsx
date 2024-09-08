import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import InputText from "./InputText";
import ButtonContainer from "./ButtonContainer";
import { useState } from "react";

const btn_text = [
  "C",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  ".",
  "+",
  "-",
  "*",
  "/",
  "=",
];

function App() {
  const [displayText, setDisplayText] = useState("");

  const handleOnClick = (event) => {
    const key = event.target.innerText;
    if (key === "C") {
      setDisplayText("");
    } else if (key === "=") {
      const result = eval(displayText);
      setDisplayText(result);
    } else {
      const updateText = displayText + key;
      setDisplayText(updateText);
    }
  };

  return (
    <div className={`${styles.calculator} text-center`}>
      <InputText
        inputValue={displayText}
      ></InputText>
      <ButtonContainer
        button_text={btn_text}
        handleOnClick={handleOnClick}
      ></ButtonContainer>
    </div>
  );
}

export default App;
