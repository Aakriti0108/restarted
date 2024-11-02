import React,{useState} from "react";

const Expense = (props) =>{

    let [UI,setUI] = useState();
    let [Price,setPrice] = useState();
    let [dish,setDish] = useState(); 
    let [selectedValue,setselectedValue] = useState(); 

    const submitHandler = (event) =>{
        event.preventDefault();

        props.AddUser(UI,Price,dish,selectedValue)
        console.log(UI,Price,dish,selectedValue)
        setUI("")
        setPrice("")
        setDish("")
    }
    
    let UINameChange = (event) =>{
        setUI(event.target.value)
    }

    let PriceChange = (event) =>{
        setPrice(event.target.value)
    }

    let dishChange = (event) =>{
        setDish(event.target.value)
    }

    let IdChange = (event) =>{
        
        setselectedValue(event.target.value)
    }

    

    return(
        <form onSubmit={submitHandler}>
           <label htmlFor="UnquieId">UnquieId</label>
           <input id="UnquieId" type="number"  onChange={UINameChange}/>
           <label htmlFor="Price">Choose Price</label>
           <input id="Price" type="number"  onChange={PriceChange}/>
           <label htmlFor="Dish">Choose Dish</label>
           <input id="Dish" type="text" onChange={dishChange}/>
           <select  value={selectedValue} onChange={IdChange}>
           <option value="">Select an option</option>
            <option value="Table 1">Table 1</option>
            <option value="Table 2">Table 2</option>
            <option value="Table 3">Table 3</option>
            </select>
           <button type="submit">Submit</button>
        </form>
    )

}

export default Expense;