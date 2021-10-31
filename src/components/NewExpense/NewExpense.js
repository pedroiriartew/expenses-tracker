import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

//nfn para crear las arrow functions
const NewExpense = () => {
  return (
    <div className="new-expense">
        <ExpenseForm />
    </div>
  );
};

export default NewExpense;
