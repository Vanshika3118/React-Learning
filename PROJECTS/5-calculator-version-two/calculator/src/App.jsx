import styles from "./App.module.css";
import { useState } from "react";
import ButtonsContainer from "./components/ButtonsContainer.jsx";
import Display from "./components/Display.jsx";
function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick=(buttonText)=> {
    if(buttonText==='C')
    {
      setCalVal("");
    } else if (buttonText==="=")
    {
      const result=eval(calVal);
      setCalVal(result);
    }
    else
    {
      const newDisplayValue=calVal+buttonText;
      setCalVal(newDisplayValue);
    }
  }

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
