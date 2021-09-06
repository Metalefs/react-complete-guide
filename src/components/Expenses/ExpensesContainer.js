import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpensesList from "./ExpensesList";
import ExpenseFilter from './ExpenseFilter/ExpenseFilter';
import ExpensesChart from './ExpensesChart';

import "./ExpensesContainer.css"

const ExpensesContainer = (props) => {
    const [filteredYear, setFilteredYear] = useState(2021);
  
    const filterExpenseHandler = (year) => {
        setFilteredYear(year);
    }

    let filteredExpenses = props.expenses
    .filter(expense => expense.date.getFullYear().toString() === filteredYear.toString());

    return( 
       <li>
            <Card className="expenses">
                <ExpenseFilter 
                    selected={filteredYear}
                    onFilterExpense={filterExpenseHandler} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList filteredExpenses={filteredExpenses}/>
            </Card>
       </li>
    );
}

export default ExpensesContainer;