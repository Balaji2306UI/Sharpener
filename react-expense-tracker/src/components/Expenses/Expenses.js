import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css'


function Expenses(props) {
    return (
        <Card className="expenses">
        {
            props.data.map((expense)=>{
                return <ExpenseItem key={props.data.indexOf(expense)} title={expense.title} amount={expense.amount} location={expense.location} date={expense.date}/>
            })
        }
        </Card>
    );
}

export default Expenses;