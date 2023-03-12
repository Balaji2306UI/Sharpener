import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';


function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    return (
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {
            props.data.map((expense)=>{
                return <ExpenseItem key={props.data.indexOf(expense)} title={expense.title} amount={expense.amount} location={expense.location} date={expense.date}/>
            })
        }
        </Card>
    );
}

export default Expenses;