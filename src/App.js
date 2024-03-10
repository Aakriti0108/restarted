import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from './components/Expenses/Expenses'

const App=()=> {

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
    <Expenses items={expenses}/>
  );
}

export default App;
