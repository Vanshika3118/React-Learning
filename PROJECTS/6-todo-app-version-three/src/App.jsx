import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // const newTodoItems = [
    //   ...todoItems,
    //   {
    //     name: itemName,
    //     date: itemDueDate,
    //   },
    // ];
    // setTodoItems(newTodoItems);
    setTodoItems((currValue)=>[
      ...currValue,
      {name:itemName, date:itemDueDate}
    ]);
  };
  const handleDeleteItem = (itemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <WelcomeMessage todoItems={todoItems} />
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
