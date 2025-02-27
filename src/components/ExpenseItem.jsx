import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";


function ExpenseItem({date, amount, title}) {
  

  return (
    <div className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <div>{title}</div>
        <div className="expense-item__price">${amount.toFixed(2)}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;
