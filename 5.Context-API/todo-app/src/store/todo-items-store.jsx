import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext([]);

const todoItemsReducer = (currTodoItems, action) => {
  // pure function that take action onject and return current state , we can make this function in another file

  let newTodoItems = currTodoItems;
  if (action.type === "ADD_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      {
        name: action.payload.itemName,
        date: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter((item) => item.name !== action.payload.itemName);
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "ADD_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };

    dispatchTodoItems(newItemAction); // dispatching action to reducer function
  };
  const deleteItem = (itemName) => {
    // const newTodoItems = todoItems.filter((item) => item.name !== itemName);
    // setTodoItems(newTodoItems);

    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };
    dispatchTodoItems(deleteItemAction); // dispatching action to reducer function
  };
  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
