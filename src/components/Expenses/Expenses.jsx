import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import NewExpense from "../NewExpense/NewExpense";

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          key={Math.random()}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        ></ExpenseItem>
      ))}
    </Card>
  );
}

export default Expenses;