import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date().toISOString();
    const expenseTitle = "Medical Insurance Premium";
    const expensePrice = "Rs.10000";
    const expenseLocation = "Insurance"

    return (
        <div className='expense-item'>
            <div>{expenseDate}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <h2>{expenseLocation}</h2>
                <div className='expense-item__price'>{expensePrice}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;