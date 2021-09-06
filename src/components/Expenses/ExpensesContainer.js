import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import "./ExpensesContainer.css"

const ExpensesContainer = (props) => {
  return( 
    <Card className="expenses">
        {props.expenses.map((expense, index) => {     
            return(<ExpenseItem key={index}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            ></ExpenseItem>)
        })}
    </Card>);
}

export default ExpensesContainer;