import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [inputsVisible, setInputsVisible] = useState(false);

    const titleChangeHandler = (evt) => {
        setEnteredTitle(evt.target.value);
    }
    const amountChangeHandler = (evt) => {
        setEnteredAmount(evt.target.value);
    }
    const dateChangeHandler = (evt) => {
        setEnteredDate(evt.target.value);
    }

    const inputsVisibleToggle = () => {
        setInputsVisible((lastState)=>{
           return !lastState;
        });
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return ( 
        <form onSubmit={submitHandler}>
            {
                inputsVisible ? (
                    <div>
                        <div className="new-expense__controls">
                            <div className="new-expense__control">
                                <label>Title</label>
                                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                            </div>
                            <div className="new-expense__control">
                                <label>Amount</label>
                                <input type="text" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                            </div>
                            <div className="new-expense__control">
                                <label>Date</label>
                                <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                            </div>
                        </div>
                        <div className="new-expense__actions">
                            <button type="button" value="" onClick={inputsVisibleToggle}>Cancel</button>
                            <button type="submit" value="">Add Expense</button>
                        </div>
                    </div>
                ) : (
                    <div className="new-expense__actions__initial">
                        <button type="button" value="" onClick={inputsVisibleToggle}>Add New Expense</button>
                    </div>
                )
            }
        </form>
    );
}

export default ExpenseForm;