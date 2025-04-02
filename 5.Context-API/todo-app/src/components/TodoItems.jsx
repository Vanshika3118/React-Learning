import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
import TodoItem from "./TodoItem";
const TodoItems = () => {
  // const contextObj=useContext(TodoItemsContext);
  // const {todoItems}=contextObj.todoItems;

  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.date}
            // onDeleteClick={deleteItem}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
