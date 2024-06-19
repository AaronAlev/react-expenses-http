import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses= (props) => {
    const [yearFilter, setExpenseFilter] = useState('2023')

    const filterHandler = (yearFilter) => {
        console.log(yearFilter)
        setExpenseFilter(yearFilter)
    }

    const filteredExpenses = props.expenses.filter((expense) => {
        return new Date(expense.date).getFullYear().toString() === yearFilter
    })

    return (
        <Card className='expenses'>
            <ExpensesFilter onChangeFilter={filterHandler}/>
            {
                filteredExpenses.length === 0 && <h2>No expenses found</h2>
            }
            {
                filteredExpenses.length > 0 && filteredExpenses.map((expense) => {
                    return <ExpenseItem key={expense.id} expenseData={expense}/>
                })
            }
        </Card>
    );
}

export default Expenses;