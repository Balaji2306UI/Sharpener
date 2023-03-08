import ExpenseItem from './components/ExpenseItem'

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
      <h1>Getting started with React</h1>
      {
        expenses.map((expense)=>{
          return <ExpenseItem key={expenses.indexOf(expense)} title={expense.title} amount={expense.amount} location={expense.location} date={expense.date}/>
        })
      }
    </div>
  );
}

export default App;
