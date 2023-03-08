import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from './Card'
import './ExpenseItem.css'

function ExpenseItem(props) {

    return (
        <Card className='expense-item'>
            <ExpenseDate date = {props.date} />
            <ExpenseDetails title = {props.title} amount = {props.amount} />
        </Card>
    );
}

export default ExpenseItem;