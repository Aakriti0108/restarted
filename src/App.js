import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    {
      id:1,
      title:'Pasta',
      amount:94.12,
      date:new Date(2020,7,19),
      LocationOfExpenditure:74
    },
    {
      id:2,
      title:'Pizza',
      amount:92.12,
      date:new Date(2020,7,18),
      LocationOfExpenditure:72
    },
    {
      id:3,
      title:'noodles',
      amount:80.12,
      date:new Date(2020,7,17),
      LocationOfExpenditure:70
    },
    {
      id:4,
      title:'chilli panner',
      amount:78.12,
      date:new Date(2020,7,16),
      LocationOfExpenditure:68
    },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
      title={expenses[0].title} 
      amount={expenses[0].amount} 
      date ={expenses[0].date}
      LocationOfExpenditure={expenses[0].LocationOfExpenditure}
      />
      <ExpenseItem 
      title={expenses[1].title} 
      amount={expenses[1].amount} 
      date ={expenses[1].date}
      LocationOfExpenditure={expenses[1].LocationOfExpenditure}

      />
      <ExpenseItem 
      title={expenses[2].title} 
      amount={expenses[2].amount} 
      date ={expenses[2].date}
      LocationOfExpenditure={expenses[2].LocationOfExpenditure}

      />
      <ExpenseItem 
      title={expenses[3].title} 
      amount={expenses[3].amount} 
      date ={expenses[3].date}
      LocationOfExpenditure={expenses[3].LocationOfExpenditure}

      />
     
    </div>
  );
}

export default App;
