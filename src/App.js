import React,{useState} from 'react'; 
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpenses/NewExpense";


const DummyData = [
  {
    id:1,
    title:'Pasta',
    amount:94.12,
    date:new Date(2020,7,19),
    expenditure:74
  },
  {
    id:2,
    title:'Pizza',
    amount:92.12,
    date:new Date(2020,7,18),
    expenditure:72
  },
  {
    id:3,
    title:'noodles',
    amount:80.12,
    date:new Date(2020,7,17),
    expenditure:70
  },
  {
    id:4,
    title:'chilli panner',
    amount:78.12,
    date:new Date(2020,7,16),
    expenditure:68
  },
]

const App=()=> {
  let [expenses,setExpenses]=useState(DummyData);

  // let addExpenseData = expense =>{
  //    console.log('In App js')
  //    let addItem = {
  //     ...expense,
  //     id:Math.random()
  //    }
  //    console.log(addItem,"addItem1");
  // }

  let addExpenseData = expense =>{
    console.log(expense,"data");
    setExpenses([expense,...expenses])
  }

  return (
    <div>
      
      <NewExpense onAddExpense={addExpenseData} />
      <Expenses items={expenses}/>
    </div>
   
  );
}

export default App;
