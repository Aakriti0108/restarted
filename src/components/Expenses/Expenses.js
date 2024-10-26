import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from "../NewExpenses/ExpenseFilter";
import { useState } from "react";
import ExpensesChart from "./ExpenseChart";


const Expenses = (props) =>{

    let [filteredYear,setfilteredYear] = useState('2020');
    let filterChangeHandler = selectedYear =>{
        setfilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense)=>{
        return expense.date.getFullYear().toString() === filteredYear
    })
       
    let expensesContext = <p> No Expenses....</p>;
    if(filteredExpenses.length > 0){
        expensesContext = filteredExpenses.map((expense)=>(
            <ExpenseItem key={expense.id} 
             title={expense.title} 
              amount={expense.amount}
              date={expense.date} 
              expenditure={expense.expenditure}
               />
    ));
    }

    return(
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} 
            onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses} />
            {expensesContext}
        </Card>
    )
}

export default Expenses;