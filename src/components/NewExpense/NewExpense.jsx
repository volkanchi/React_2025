import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
    return (
        <div className="new-expense">
            <ExpenseForm onAddExpense={onAddExpense}></ExpenseForm>
        </div>
    )
}

export default NewExpense;