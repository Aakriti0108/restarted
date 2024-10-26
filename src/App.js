import React,{useState} from 'react'; 
import Expense from './components/NewExpenses/expense';


const App=()=> {
  const [userList,setUserList] = useState([]);

  const AddUserHandler = (productName,productQty,productPrice) => {
    setUserList((prevUserList)=>{
      return[...prevUserList,{productName:productName,productQty:productQty,productPrice:productPrice,id:Math.random().toString()}]
    })
  }

  const dataPointValues = userList.reduce((totalCalories, meal) => totalCalories + parseInt(meal.productPrice), 0);
 
 
  
  return (
    <div>
     <Expense AddUser={AddUserHandler} />
     <ul>
         {userList.map(user=>
         <li key={user.productName}>{user.productPrice} total price of product <button >Delete expense</button></li>
         )}
          <p>Total Price: ${dataPointValues}</p>
         </ul>
    </div>
   
  );
}

export default App;
