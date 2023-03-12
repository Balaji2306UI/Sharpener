import { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import ExpenseForm from "./components/Expenses/ExpenseForm/ExpenseForm";

function App() {
    const expenses = [
        {
			id: 0,
            title: "Medical Insurance Premium",
            amount: 10000,
            date: new Date(2023, 2, 8), //new Date(year, month, day) => month starts with 0; 0 means January
            location: "Online",
        },
        {
			id: 1,
            title: "Grocery",
            amount: 4000,
            date: new Date(2023, 2, 7),
            location: "Pheonix Marketcity",
        },
    ];

	const [expensesData, setExpensesData] = useState(expenses);

	function onAddNewExpense(expense) {

		setExpensesData((prevState) => {
			return [expense, ...prevState]
		});
	}

    return (
        <div>
            <ExpenseForm onAddNewExpense={onAddNewExpense}/>
            <Expenses data={expensesData} />
        </div>
    );
}

export default App;
