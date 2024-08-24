import styles from './FoodINput.module.css'

const FoodInput = () =>{
  const handleOnChange = (event) => {
    console.log(event.target.value);
  }  

  return <input type="text" placeholder="Enter food item here" className={styles.foodInput} onChange={handleOnChange}>
  </input>
}

export default FoodInput;