import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card'
import './ExpenseItem.css'

function ExpenseItem(props) {
    const [amount, setAmount] = useState(props.amount);
    function deleteExpense(e){
        e.target.parentNode.remove();
    }
    function addExpense(){
        setAmount('Rs.100')
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date = {props.date} />
            <ExpenseDetails title = {props.title} amount = {amount} />
            <button className="expense-item__delete-btn" onClick={deleteExpense}>Delete</button>
            <button className="expense-item__add-btn" onClick={addExpense}>Add</button>
        </Card>
    );
}

export default ExpenseItem;