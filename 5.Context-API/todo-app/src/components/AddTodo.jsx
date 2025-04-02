import React, { useState, useRef } from "react";
import { useContext } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };

  const {addNewItem}=useContext(TodoItemsContext);

  const handleAddButtonClicked = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    
    if (!todoName || !dueDate) {
      alert("Please enter a todo name and due date.");
      return;
    }
  
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
    // setTodoName("");
    // setDueDate("");
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        {/* <div className="row kg-row"> */}
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            // value={todoName}
            placeholder="Enter Todo here"
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input 
          type="date"
          ref={dueDateElement} 
          // value={dueDate} 
          // onChange={handleDateChange} 
           />
        </div>
        <div className="col-2">
          {/* <button
            type="button"
            className="btn btn-success kg-btn"
            onClick={handleAddButtonClicked}
          > */}
          <button type="submit" className="btn btn-success kg-btn">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
