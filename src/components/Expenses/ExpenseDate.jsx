import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
    const parsedDate = new Date(date);

    const month = parsedDate.toLocaleDateString('en-US', { month: "long" });
    const day = parsedDate.toLocaleDateString('en-US', { day: "2-digit" });
    const year = parsedDate.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-month">{month}</div>
            <div className="expense-year">{year}</div>
            <div className="expense-day">{day}</div>
        </div>
    );
};

export default ExpenseDate;