import styles from "./WelcomeMessage.module.css"; // Import the CSS module

const WelcomeMessage = ({ todoItems }) => {
  if (todoItems.length === 0) {
    return (
      <div className={styles.welcome}>
        Welcome to the Todo App. Enjoy Your Day!
      </div>
    );
  }
};

export default WelcomeMessage;
