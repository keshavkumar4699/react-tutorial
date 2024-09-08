import styles from './Button.module.css'

let Button = ({text, handleOnClick}) => {
  return (
    <button className = {styles.button} onClick={handleOnClick}>{text}</button>
  );
}

export default Button;