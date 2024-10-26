import React,{useState} from "react";

const Expense = (props) =>{

    let [productName,setProductName] = useState('');
    let [Quantity,setQuantity] = useState();
    let [productPrice,setProductPrice] = useState(); 

    const submitHandler = (event) =>{
        event.preventDefault();

        props.AddUser(productName,Quantity,productPrice)
        console.log(productName,Quantity,productPrice)
        setProductName('')
        setQuantity(0)
        setProductPrice(0)
    }
    
    let productNameChange = (event) =>{
        setProductName(event.target.value)
    }

    let productQtyChange = (event) =>{
        setQuantity(event.target.value)
    }

    let productPriceChange = (event) =>{
        setProductPrice(event.target.value)
    }

    return(
        <form onSubmit={submitHandler}>
           <label htmlFor="productName">Product Name</label>
           <input id="productName" type="text" onChange={productNameChange}/>
           <label htmlFor="productQty">Product Qty</label>
           <input id="productQty" type="number" onChange={productQtyChange}/>
           <label htmlFor="productPrice">Product Price</label>
           <input id="productPrice" type="number" onChange={productPriceChange}/>
           <button type="submit">Submit</button>
        </form>
    )

}

export default Expense;