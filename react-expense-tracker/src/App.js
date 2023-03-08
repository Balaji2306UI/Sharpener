import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [{
    title: "Medical Insurance Premium",
    amount: "Rs.10000",
    date: "08-03-2023",
    location: "Online"
  },
  {
    title: "Grocery",
    amount: "Rs.4000",
    date: "07-03-2023",
    location: "Pheonix Marketcity"
  }
];

  return (
    <div>
      <h1>Getting started with React</h1>
      {
        expenses.map((expense)=>{
          return <ExpenseItem title={expense.title} amount={expense.amount} location={expense.location} date={expense.date}/>
        })
      }
    </div>
  );
}

export default App;
