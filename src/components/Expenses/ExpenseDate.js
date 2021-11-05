import React, { useState } from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const [date, setDate] = useState({
    month: props.date.toLocaleString("en-US", { month: "long" }),
    day: props.date.toLocaleString("en-US", { day: "2-digit" }),
    year: props.date,
  });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{date.month}</div>
      <div className="expense-date__year">{date.year}</div>
      <div className="expense-date__day">{date.day}</div>
    </div>
  );
};

export default ExpenseDate;
