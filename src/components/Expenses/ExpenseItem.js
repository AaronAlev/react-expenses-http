import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.expenseData.title);

    const clickHandler = () => {
        console.log('Clicked!!!');
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.expenseData.date} />
            <div className='expense-item__description'>
                <h2>{props.expenseData.title}</h2>
                <div className='expense-item__price'>{props.expenseData.amount}</div>
            </div>
            <button onClick={clickHandler}>Click me</button>
        </Card>
    );
};

export default ExpenseItem;