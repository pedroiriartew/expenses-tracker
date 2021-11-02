import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./DisplayExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const DisplayExpenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      {props.expenses.map((expense) => ( //expense es un parámetro que le paso ala función map. Viene del array que estoy mapeando y es en si un item de ese array.
        <ExpenseItem
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default DisplayExpenses;
