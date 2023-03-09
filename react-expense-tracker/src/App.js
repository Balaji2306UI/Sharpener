import Expenses from './components/Expenses/Expenses';
import ExpenseForm from './components/Expenses/ExpenseForm/ExpenseForm';

function App() {
  const expenses = [{
    title: "Medical Insurance Premium",
    amount: "Rs.10000",
    date: new Date(2023,2,8), //new Date(year, month, day) => month starts with 0; 0 means January
    location: "Online"
  },
  {
    title: "Grocery",
    amount: "Rs.4000",
    date: new Date(2023,2,7),
    location: "Pheonix Marketcity"
  }
];

  return (
    <div>
      <ExpenseForm />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
