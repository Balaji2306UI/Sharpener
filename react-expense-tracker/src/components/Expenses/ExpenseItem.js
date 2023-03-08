import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card'
import './ExpenseItem.css'

function ExpenseItem(props) {
    function deleteExpense(e){
        e.target.parentNode.remove();
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date = {props.date} />
            <ExpenseDetails title = {props.title} amount = {props.amount} />
            <button className="expense-item__delete-btn" onClick={deleteExpense}>Delete</button>
        </Card>
    );
}

export default ExpenseItem;