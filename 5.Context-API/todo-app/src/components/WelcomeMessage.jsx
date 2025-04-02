import { useContext } from "react";
import styles from "./WelcomeMessage.module.css"; // Import the CSS module
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const contextObj=useContext(TodoItemsContext);
  const todoItems=contextObj.todoItems;
  if (todoItems.length === 0) {
    return (
      <div className={styles.welcome}>
        Welcome to the Todo App. Enjoy Your Day!
      </div>
    );
  }
};

export default WelcomeMessage;
