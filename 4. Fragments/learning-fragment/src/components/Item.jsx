import styles from "./Item.module.css";
const Item = (props) => { // ({foodItem}) => { <-destructuring
  let {foodItem} = props; // destructuring
  return (
    <li className={`${styles ['kg-item']} list-group-item`}>
      {/* {props.foodItem} */}
    <span className={`${styles ['kg-span']}`}> {foodItem} </span> 
    </li>
  );
};
export default Item;