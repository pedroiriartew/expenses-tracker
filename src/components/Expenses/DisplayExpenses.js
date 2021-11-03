import React, { useState } from "react";

import "./DisplayExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const DisplayExpenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={changeFilterHandler}
        />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </li>
  );
};

export default DisplayExpenses;
