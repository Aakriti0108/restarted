import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) =>{

   let [enteredTitle,setEnteredTitle] = useState('');
   let [enteredAmount,setEnteredAmount] = useState('');
   let [enteredExpenditure,setEnteredExpenditure] = useState('');
   let [enteredDate,setEnteredDate] = useState('');

// const [userInput,setUserInput] = useState({
//             setEnteredTitle:'',
//             setEnteredAmount:'',
//             setEnteredDate:''
//         })

   const titleChangeHandler = (event) =>{
    console.log(event.target.value);
     setEnteredTitle(event.target.value);
    // setUserInput({...userInput,setEnteredTitle:event.target.value})
    // setUserInput((prevState)=>{
    //      return {...prevState,enteredTitle:event.target.value}
    // })
   }

   const amountChangeHandler = (event) =>{
    console.log(event.target.value);
     setEnteredAmount(event.target.value);
    // setUserInput({...userInput,setEnteredAmount:event.target.value})
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredAmount:event.target.value}
    //  })
   }

   const expenditureChangeHandler = (event) =>{
    console.log(event.target.value);
    setEnteredExpenditure(event.target.value);
    // setUserInput({...userInput,setEnteredAmount:event.target.value})
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredAmount:event.target.value}
    //  })
   }

   const dateChangeHandler = (event) =>{
    console.log(event.target.value);
     setEnteredDate(event.target.value);
    // setUserInput({...userInput,setEnteredDate:event.target.value})
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredDate:event.target.value}
    //  })
   }

   const submitChangeHandler=(event)=>{
           event.preventDefault();

           let expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            expenditure:enteredExpenditure,
            date:new Date(enteredDate)
           }
              console.log(expenseData,'EExpenseDta3');
           props.onSaveExpenseData(expenseData)
           setEnteredTitle('')
           setEnteredAmount('')
           setEnteredDate('')
           setEnteredExpenditure('')

   }
   

    return(
        <form onSubmit={submitChangeHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Expenditure</label>
                    <input type='number' min="0.01" step="0.01" value={enteredExpenditure} onChange={expenditureChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-01-01" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
                
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;