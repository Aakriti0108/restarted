import React,{useState} from 'react'; 
import Expense from './components/NewExpenses/expense';


const App=()=> {
  const [userList,setUserList] = useState([]);

  const AddUserHandler = (UI,Price,dish,table) => {
    setUserList((prevUserList)=>{
      return[...prevUserList,{UI:UI,Price:Price,dish:dish,table:table,id:Math.random().toString()}]
    })
  }

  let deleteHandler = (index)=>{
    console.log("delete expense",index)
    userList.splice(index,1)
    setUserList([...userList])

  }
 
  
  return (
    <div>
     <Expense AddUser={AddUserHandler} />
     <ul>
      <li>Table 1</li>
         {userList.filter(user =>user.table === "Table 1")
         .map ((user,i)=>
         <li key={user.UI}>{user.Price} total price of product <button onClick={()=>deleteHandler(i)}>Delete expense</button></li>
         )}
         </ul>
         <ul>
         <li>Table 2</li>
         {userList.filter(user =>user.table === "Table 2")
         .map ((user,i)=>
         <li key={user.UI}>{user.Price} total price of product <button onClick={()=>deleteHandler(i)}>Delete expense</button></li>
         )}
         </ul>
         <ul>
         <li>Table 3</li>
         {userList.filter(user =>user.table === "Table 3")
         .map ((user,i)=>
         <li key={user.UI}>{user.Price} total price of product <button onClick={()=>deleteHandler(i)}>Delete expense</button></li>
         )}
         </ul>
    </div>
   
  );
}

export default App;
