import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
    
    if(props.filteredExpenses.length === 0)
    return ( 
        <h2 className="expenses-list__fallback">No expenses found.</h2> 
    )

    return ( 
        <ul className="expenses-list">
            {props.filteredExpenses.map((expense, index) => (    
                <ExpenseItem key={index}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                ></ExpenseItem>
            ))}
        </ul>
    )
}

export default ExpensesList;