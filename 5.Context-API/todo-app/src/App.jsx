import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
// import { useState, useReducer } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

// In React, a pure function is a function whose output solely depends on its input arguments, without causing any side effects. This means that given the same input, a pure function will always return the same output, and it does not modify any external variables or states. React assumes that every component written is a pure function.

// const todoItemsReducer = (currTodoItems, action) => {
//   // pure function that take action onject and return current state , we can make this function in another file

//   let newTodoItems = currTodoItems;
//   if (action.type === "ADD_ITEM") {
//     newTodoItems = [
//       ...currTodoItems,
//       {
//         name: action.payload.itemName,
//         date: action.payload.itemDueDate,
//       },
//     ];
//   } else if (action.type === "DELETE_ITEM") {
//     newTodoItems = currTodoItems.filter((item) => item.name !== action.payload.itemName);
//   }
//   return newTodoItems;
// };

function App() {
  //const [todoItems, setTodoItems] = useState([]);
  // const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  // const addNewItem = (itemName, itemDueDate) => {
    // const newTodoItems = [
    //   ...todoItems,
    //   {
    //     name: itemName,
    //     date: itemDueDate,
    //   },
    // ];
    // setTodoItems(newTodoItems);

    // setTodoItems((currValue) => [
    //   ...currValue,
    //   { name: itemName, date: itemDueDate },
    // ]);

  //   const newItemAction = {
  //     type: "ADD_ITEM",
  //     payload: {
  //       itemName,
  //       itemDueDate,
  //     },
  //   };

  //   dispatchTodoItems(newItemAction); // dispatching action to reducer function
  // };
  // const deleteItem = (itemName) => {
  //   // const newTodoItems = todoItems.filter((item) => item.name !== itemName);
  //   // setTodoItems(newTodoItems);

  //   const deleteItemAction = {
  //     type: "DELETE_ITEM",
  //     payload: {
  //       itemName,
  //     },
  //   };
  //   dispatchTodoItems(deleteItemAction); // dispatching action to reducer function
  // };

  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
      </TodoItemsContextProvider>
  );
}


export default App;
