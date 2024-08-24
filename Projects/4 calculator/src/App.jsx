import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "./App.module.css";
import InputText from "./InputText";
import ButtonContainer from "./ButtonContainer";

let btn_text = ["C", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "/"];

function App() {
  return (
    <div className={`${styles.calculator} text-center`}>
      <InputText></InputText>
      <ButtonContainer button_text = {btn_text}></ButtonContainer>
    </div>
  );
}

export default App;
