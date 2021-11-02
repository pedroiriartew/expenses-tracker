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
      <ExpensesFilter selected = {filteredYear} onChangeFilter={changeFilterHandler} />
      <ExpenseItem
        title={props.expenses[0].title}
        price={props.expenses[0].price}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        price={props.expenses[1].price}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        price={props.expenses[2].price}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        price={props.expenses[3].price}
        date={props.expenses[3].date}
      />
    </Card>
  );
};

export default DisplayExpenses;