import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

//nfn para crear las arrow functions
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveNewExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      date: enteredExpenseData.date.toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveNewExpenseData={saveNewExpenseDataHandler}
          onStopEditing={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
