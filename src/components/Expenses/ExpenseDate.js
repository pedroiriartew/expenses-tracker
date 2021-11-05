import React, { useState } from "react";
import "./ExpenseDate.css";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const ExpenseDate = (props) => {
  const [date, setDate] = useState(new Date(props.date.replace(/-/g, "/")));
  // const [date, setDate] = useState({
  //   month: new Date(props.date).getMonth().toLocaleString("en-US", { month: "long" }),
  //   day: new Date(props.date).getDay().toLocaleString("en-US", { day: "2-digit" }),
  //   year: new Date(props.date),
  // });//understandable

    const expenseDate = new Date(props.date);
    const expenseMonth = expenseDate.getMonth();
    const expenseYear = expenseDate.getFullYear();
    const expenseDay = expenseDate.getDate();

    
  return (
    <div className="expense-date">
      <div className="expense-date__month">{months[expenseMonth]}</div>
      <div className="expense-date__year">{expenseYear}</div>
      <div className="expense-date__day">{expenseDay}</div>
    </div>
  );
};

export default ExpenseDate;
