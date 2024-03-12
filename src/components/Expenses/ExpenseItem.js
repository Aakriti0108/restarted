import React,{ useState } from 'react';
import ExpenseDate from './ExpenseDate';
import  Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props)=>{
    
   let [title,setTitle] = useState(props.title);
   let [amount,setAmount] = useState(props.amount);


      const clickHandler = () => {
        setTitle('updated!!');
        setAmount('100');
        console.log('Clicked!!!!');

      }
    return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
        <button className="delete-expense" onClick={clickHandler}>expense</button>
        <div className='expense-item__price'>${props.LocationOfExpenditure}</div>
        <button className="delete-expense" onClick={clickHandler}>expense</button>
      </div>
      <button className="delete-expense" onClick={clickHandler}>Delete Expense</button>
    </Card>
    )
}

export default ExpenseItem;