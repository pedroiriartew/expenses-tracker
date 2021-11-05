import React, { useState, useEffect } from "react";
import "./App.css";
import DisplayExpenses from "./components/Expenses/DisplayExpenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { db } from "./components/firebase/config.js";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const readDatabase = async () => {
    const expensesRef = (await db.ref("Expenses").get()).val() || []; //get obtiene el array, val los valores
    setExpenses(expensesRef);
  };

  useEffect(() => {
    //UseEffect se ejecuta cuando se inicializa el componente o cuando se cambia alguna de sus dependencias; este no tiene dependencias
    readDatabase();
  }, []);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      //Automáticamente por react obtenemos el anterior estado
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      {
        console.log(expenses)
        //<DisplayExpenses expenses={expenses} />
      }
    </div>
  );
};

export default App;
