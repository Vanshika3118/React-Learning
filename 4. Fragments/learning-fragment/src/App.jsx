import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

// falsy values : null , undefined , 0 , false , '' , NaN
// truthy values : 1 , ' ' , true , any object

//Conditional rendering : if-else , terneary , logical
function App() {
  let foodItems = ["Sabzi", "Green Vegetable", "Roti", "Salad", "Milk"];
  // let foodItems=[];
  // if(foodItems.length===0){
  //   return <h3>I am still hungry.</h3>
  // }
  // let emptyMessage=foodItems.length===0 ? <h3>I am still hungry.</h3>:null
  return (
    <React.Fragment>
      <h1 className="food-heading">HEALTHY FOOD</h1>
      {/* {foodItems.length===0 ? <h3>I am still hungry.</h3>:null} */}
      {/* {emptyMessage} */}
      {/* {foodItems.length === 0 && <h3>I am still hungry.</h3>} */}
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
      {/* <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul> */}
    </React.Fragment>
  );
}

export default App;
