import React, {useState} from 'react';
import "./App.css";
import DisplayExpenses from "./components/Expenses/DisplayExpenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    price: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    price: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    price: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    price: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log(expense.amount);
    setExpenses(prevExpenses =>{//Automáticamente por react obtenemos el anterior estado
      return [expense, ...prevExpenses];
    })
  }


  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      {/*recordar que así son los comentarios*/}
      <DisplayExpenses expenses={expenses} />
    </div>
  );
};

export default App;
