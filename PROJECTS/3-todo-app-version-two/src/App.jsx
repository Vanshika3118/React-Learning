import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      date: "4/10/2023",
    },
    {
      name: "Go to College",
      date: "4/10/2023",
    },
    {
      name: "PLaying Badminton",
      date: "Right now",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}/>
    </center>
  );
}

export default App;
