import "./ExpenseDate.css";

function ExpenseDate({ date }){
    const month = date.toLocaleDateString('en-US', { month: "long" });
    const day = date.toLocaleDateString('en-US', { day: "2-digit" });
    const year = date.getFullYear();
    return(
        <div className="expense-date">
            <div className="expense-month">{month}</div>
            <div className="expense-year">{year}</div>
            <div className="expense-day">{day}</div>
        </div>
    );
}

export default ExpenseDate;