import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';


function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.data.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No expenses here</p>
    let oneExpenseContent;

    if(filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense)=>{
            return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} location={expense.location} date={expense.date}/>
        });
        if(filteredExpenses.length === 1) {
            oneExpenseContent = <p>Only single Expense here. Please add more...</p>
        }
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            { expensesContent }
            { oneExpenseContent }
            
        </Card>
    );
}

export default Expenses;