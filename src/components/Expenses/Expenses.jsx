import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import NewExpense from "../NewExpense/NewExpense";

const Expenses = ({ expenses }) => {
  return (
    <div>
      {expenses.length == 0 && <div>No items</div>}

      {expenses.length > 0 && (
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
      )}
    </div>
  );

}

export default Expenses;