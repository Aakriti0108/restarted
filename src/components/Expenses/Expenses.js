import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from "../NewExpenses/ExpenseFilter";
import { useState } from "react";


const Expenses = (props) =>{

    let [filteredYear,setfilteredYear] = useState('2020');
    let filterChangeHandler = selectedYear =>{
        setfilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense)=>{
        return expense.date.getFullYear().toString() === filteredYear
    })
    return(
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} 
            onChangeFilter={filterChangeHandler}/>
            {filteredExpenses.map((expense)=>(
            <ExpenseItem key={expense.id} 
             title={expense.title} 
              amount={expense.amount}
              date={expense.date} 
              expenditure={expense.expenditure}
               />
               ))}
        </Card>
    )
}

export default Expenses;