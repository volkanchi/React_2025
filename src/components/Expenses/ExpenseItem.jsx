import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import { useState } from "react";
import Card from "../UI/Card";


const ExpenseItem = ({date, amount, title}) => {

  const [newTitle , setNewTitle] = useState(title);
  const[newAmount, setNewAmount] = useState(amount);
  
  const clickHandler = () =>{
    console.log("newTitle Value : " + newTitle );
    setNewTitle("Updated");
    console.log("Clicked");
    console.log("newTitle Value : " + newTitle );

  }  

  const amountInc = () =>{
    setNewAmount(newAmount + 10);

  }
  const amountDec = () =>{
    setNewAmount(newAmount - 10);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <div>{newTitle}</div>
        <div className="expense-item__price">${newAmount.toFixed(2)}</div>
        <button onClick={ () => clickHandler()}>Change title</button>
        <button onClick={ () => amountInc()}> + </button>
        <button onClick={ () => amountDec()}> - </button>

      </div>
    </Card>
  )
}

export default ExpenseItem;
