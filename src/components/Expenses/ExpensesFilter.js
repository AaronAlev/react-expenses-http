import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const saveExpenseFilterHandler = (enteredExpenseFilter) => {
        props.onChangeFilter(enteredExpenseFilter)
    }

    const selectHandler = (event) => {
        event.preventDefault()
        const expenseFilter = event.target.value
        saveExpenseFilterHandler(expenseFilter)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={selectHandler}>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;