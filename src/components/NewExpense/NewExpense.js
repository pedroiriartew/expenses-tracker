import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

//nfn para crear las arrow functions
const NewExpense = (props) => {

    const saveNewExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()//Después lo voy a sacar
        };

        props.onAddExpense(expenseData);
    }
    
  return (
    <div className="new-expense">
        <ExpenseForm onSaveNewExpenseData ={saveNewExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
