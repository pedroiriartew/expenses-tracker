import React, { useState, useEffect } from "react";
import "./App.css";
import DisplayExpenses from "./components/Expenses/DisplayExpenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { db } from "./components/firebase/config.js";

const App = () => {
  const [expenses, setExpenses] = useState([]); //este lo entiendo, tengo que pasarle un array vacío así sabe que le tiene que llegar

  const readDatabase = async () => {
    const expensesRef = (await db.ref("Expenses").get()).val() || []; //get obtiene el array, val los valores
    setExpenses(expensesRef);
  };

  useEffect(() => {
    //UseEffect se ejecuta cuando se inicializa el componente o cuando se cambia alguna de sus dependencias; este no tiene dependencias
    readDatabase();
  }, []); //si no va a tener dependencias, va así.

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      //Automáticamente por react obtenemos el anterior estado
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <DisplayExpenses expenses={expenses} />
    </div>
  );
};

export default App;
