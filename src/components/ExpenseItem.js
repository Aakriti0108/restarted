import './ExpenseItem.css';

function ExpenseItem(){

   
    let expenseDate = new Date();
    let expenseTitle = 'Car Insurances';
    let expenseAmount = 294.67;
    let LocationOfExpenditure= 89.23;
    
    return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
        <div className='expense-item__price'>${LocationOfExpenditure}</div>
      </div>
    </div>
    )
}

export default ExpenseItem;