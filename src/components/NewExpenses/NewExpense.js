import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) =>{
    const [isEditing,setEditing] = useState(false);

    let editingHandler = () =>{
        setEditing(true);
    }

    let stopHandler =() =>{
        setEditing(false);
    }

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
       {!isEditing && <button onClick={editingHandler}>Add Expense</button>}
       {isEditing && <ExpenseForm onSaveExpenseData ={SaveExpenseData} onCancel={stopHandler}/>}
    </div>
   )
}

export default NewExpense;