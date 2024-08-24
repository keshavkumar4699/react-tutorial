import styles from './Button.module.css'

let Button = ({text}) => {
  return (
    <button className = {styles.button}>{text}</button>
  );
}

export default Button;