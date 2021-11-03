import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(""); //inicialmente lo ponemos como vacío, por ser la primera vez
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //    const [userInput, setUserInput] = useState({
  //        enteredTitle = '',
  //        enteredAmount = '',
  //        enteredDate = ''
  //    })
  //   const titleChangeHandler = (event) => {
  //     setEnteredTitle(event.target.value); //Obtenemos el valor de cada input (tecla por tecla) que hace el usuario
  //     Otra manera de hacerlo es así, creando un sólo state y le pasamos como valor inicial un objeto con los strings que necesitamos
  //      setUserInput((prevState) =>{
  //          return {...prevState, enteredTitle = event.target.value};
  //      }); Uso un separator para el prevState (mi State en su valor previo y luego actualizo el atributo que necesito, en este caso el título.)
  //     Luego devuelvo todo el objeto porque sería lo que mi useState necesita

  const titleChangeHandler = (event) => {
    //El event object se pasa automáticamente por JS cuando el evento ocurre
    setEnteredTitle(event.target.value); //Obtenemos el valor de cada input (tecla por tecla) que hace el usuario
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //Default request send... Osea previene que recargue la página

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate.replace(/-/g, "/")),
    };

    props.onSaveNewExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onStopEditing}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
