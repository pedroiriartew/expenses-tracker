import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map(
        (
          expense, idx //expense es un parámetro que le paso a la función map. Viene del array que estoy mapeando y es en si un item de ese array.
        ) => (
          <ExpenseItem
            key={idx}
            title={expense.title}
            price={expense.amount}
            date={expense.date}
          />
        )
      )}
    </ul>
  );
};

export default ExpensesList;
