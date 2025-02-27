import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import Card from "./UI/Card";

function App() {
  const expenses = [
    {title:"Car Insurance ", amount:294.45, date:new Date(2021,2,28)},
    {title:"Toilet Paper ", amount:9.25, date:new Date(2021,2,29)},
    {title:"New Phone ", amount:224.99, date:new Date(2021,3,1)},
    {title:"A Desk (Wooden) ", amount:294.45, date:new Date(2021,3,2)},
  ]
  return (
    <Card>
      <Expenses props = {expenses}></Expenses>
    </Card>
  );
}

export default App;
