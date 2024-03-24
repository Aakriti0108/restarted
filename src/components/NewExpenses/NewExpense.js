import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) =>{

    let SaveExpenseData = (enteredExpenseData)=>{
        let expenseData = {
         ...enteredExpenseData,
         id:Math.random().toString()
        }
        console.log(expenseData,"ExpenseDta2");
        props.onAddExpense(expenseData)
        
    }
   return(
    <div className='new-expense'>
       <ExpenseForm onSaveExpenseData ={SaveExpenseData}/>
    </div>
   )
}

export default NewExpense;