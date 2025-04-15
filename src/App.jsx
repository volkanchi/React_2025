import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";

const App = () => {
  /*const expenses = [
    {title:"Car Insurance ", amount:294.45, date:new Date(2021,2,28)},
    {title:"Toilet Paper ", amount:9.25, date:new Date(2021,2,29)},
    {title:"New Phone ", amount:224.99, date:new Date(2021,3,1)},
    {title:"A Desk (Wooden) ", amount:294.45, date:new Date(2021,3,2)},
  ]*/
  const [expenses, setExpenses] = useState([]);
  const [year, setYear] = useState(2022);



  const addExpense = (expense) => {
    setExpenses((prevState) => {
      return [...prevState, expense];
    });
  };

  const filteredExpenses = () => {
    return (
      expenses.filter((e) => new Date(e.date).getFullYear() == year)
    );
  }

  const dropDownChangeHandler = (e) => {
     setYear(e.target.value);
  }

  return (
    <div>
       
      <NewExpense onAddExpense={addExpense}></NewExpense>
      <ExpenseFilter selected={year} onChangeFilter={dropDownChangeHandler}></ExpenseFilter>
      <Expenses expenses={filteredExpenses}></Expenses>
      </div>
  
  );
};

export default App;