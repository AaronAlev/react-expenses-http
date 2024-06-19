import { useState, useEffect } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [{
  id: 'id1',
  date: new Date(2023, 9, 6),
  title: 'Car Insurance',
  amount: 294.67
},
{
  id: 'id2',
  date: new Date(2024, 9, 7),
  title: 'Library book overdue',
  amount: 1.45
},
{
  id: 'id3',
  date: new Date(2024, 10, 7),
  title: 'Bandages',
  amount: 12.59
}];

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const expensesFronLS = JSON.parse(localStorage.getItem('expenses'));
    return expensesFronLS || [];
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses])

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses
        expenses={expenses}
      />
    </div>
  );
}

export default App;
