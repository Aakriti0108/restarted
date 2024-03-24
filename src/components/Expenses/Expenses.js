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
    return(
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                  <ExpenseItem 
                        title={props.items[0].title} 
                        amount={props.items[0].amount} 
                        date ={props.items[0].date}
                        LocationOfExpenditure={props.items[0].LocationOfExpenditure}
                        />
                        <ExpenseItem 
                        title={props.items[1].title} 
                        amount={props.items[1].amount} 
                        date ={props.items[1].date}
                        LocationOfExpenditure={props.items[1].LocationOfExpenditure}

                        />
                        <ExpenseItem 
                        title={props.items[2].title} 
                        amount={props.items[2].amount} 
                        date ={props.items[2].date}
                        LocationOfExpenditure={props.items[2].LocationOfExpenditure}

                        />
                        <ExpenseItem 
                        title={props.items[3].title} 
                        amount={props.items[3].amount} 
                        date ={props.items[3].date}
                        LocationOfExpenditure={props.items[3].LocationOfExpenditure}

                        />
        </Card>
    )
}

export default Expenses;