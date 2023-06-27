import { useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/New Expense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 2, 28),
    },
  ];
  const [NewExpenses, setNewExpenses] = useState(expenses);

  const addExpenseHandler = (expense) => {
    setNewExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  useEffect(() => {
    console.log("App.js useEffect");
  });
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={NewExpenses} />
    </div>
  );
};

export default App;
