import styles from "./Item.module.css";
const Item = ({ foodItem, bought, handleBuyButton }) => {
  // ({foodItem}) => { <-destructuring
  // let { foodItem } = props; // destructuring

  // const handleBuyButtonClicked=(event)=>{
  //   console.log(event);
  //   console.log(`${foodItem} being clicked`)
  // }

  return (
    <li className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}>
      {/* {props.foodItem} */}
      <span className={`${styles["kg-span"]}`}> {foodItem} </span>
      {/* <button className={`${styles.button} btn btn-info`} onClick={(event)=>handleBuyButtonClicked(event)}>Buy</button> */}
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
