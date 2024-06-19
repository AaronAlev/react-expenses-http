import './ExpenseForm.css';
import { Fragment, useState, useRef } from 'react';
import Error from '../UI/Error';

const ExpenseForm = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState(null);

    //const [enteredTitle, setEnteredTitle] = useState('');
    //const [enteredAmount, setEnteredAmount] = useState('');
    //const [enteredDate, setEnteredDate] = useState('');

    const titleInputRef = useRef();
    const amountInputRef = useRef();
    const dateInputRef = useRef();

    /*const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };*/

    const errorHandler = () => {
        setError(null);
    };

    const submitHandler = (event) => {
        const enteredTitle = titleInputRef.current.value;
        const enteredAmount = amountInputRef.current.value;
        const enteredDate = dateInputRef.current.value;
        event.preventDefault();

        if(enteredTitle.trim().length === 0 || enteredAmount.trim().length === 0 || enteredDate.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid title, amount and date (non-empty values).'
            });
            console.log(error);
            return;
        }

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        titleInputRef.current.value= '' ;
        amountInputRef.current.value= '' ;
        dateInputRef.current.value= '' ;
    };

    return (
        <>
        <Fragment>
            { error && (
                <Error
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
        {isEditing && (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' 
                    //onChange={titleChangeHandler}
                    //value={enteredTitle}
                    id='title'
                    ref={titleInputRef}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' 
                    //onChange={amountChangeHandler}
                    //value={enteredAmount}
                    id='amount'
                    ref={amountInputRef}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2023-01-01' max='2025-01-31' 
                    //onChange={dateChangeHandler}
                    //value={enteredDate}
                    id='date'
                    ref={dateInputRef}/>
                </div>
            </div>
            <div className='.new-expense__actions'>
                <button type='submit'>Add Expense</button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
        </form>
        )}
        {!isEditing && (
            <button onClick={() => setIsEditing(true)}>Add New Expense</button>
        )}
        </Fragment>
        </>
    )
}

export default ExpenseForm;