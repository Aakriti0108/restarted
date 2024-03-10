import './ExpenseDate.css';
import Card from '../UI/Card';

const ExpenseDate = (props) =>{
    const month = props.date.toLocaleString('en-US',{month:'long'})
    const day = props.date.toLocaleString('en-US',{day:'2-digit'})
    const year = props.date.getFullYear();

   return(
    <Card className="expense-date">
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
    </Card>
   )
}

export default ExpenseDate;