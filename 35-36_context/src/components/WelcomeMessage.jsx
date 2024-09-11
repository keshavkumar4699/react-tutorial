import TodoItemsContext from "../store/todoItemsStorage";
import styles from "./WelcomeMessage.module.css";
import React, { useContext } from "react";

const WelcomeMessage = () => {
  let { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy your day</p>
  );
};

export default WelcomeMessage;
