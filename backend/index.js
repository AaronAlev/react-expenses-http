import express from 'express';
import fs from 'node:fs/promises';

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.urlencoded({ extended: true }));

app.get('/expenses', async (req, res) => {
    const fileConent = await fs.readFile('./data/expenses.json');
    const expensesData = JSON.parse(fileConent);
    res.status(200).json({ expenses: expensesData });
});

app.post('/add-expense', async (req, res) => {
    console.log(req.body);
    const expenseData = req.body.expense;
    const newExpense = {
        ...expenseData,
        id: (Math.random() * 1000).toString()
    };
    const fileContent = await fs.readFile('./data/expenses.json', 'utf8');
    const expensesData = JSON.parse(fileContent);
    expensesData.push(newExpense);
    await fs.writeFile('./data/expenses.json', JSON.stringify(expensesData));
    res.status(201).json({ message: 'Expense added' });
});

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});