import React from 'react';


import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);  useState devuelve un state value (variable) y una función para modificarlo.

  // const clickHandler = () =>{
  //   setTitle('Updated');
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
