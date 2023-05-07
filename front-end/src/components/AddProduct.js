import React, { useState } from "react";


const AddProduct =()=>{
    let [name,setName]=useState('');
    let [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [company,setCompany]=useState('');
    const [error,setError]=useState(false)

    const addProduct = async()=>{

        if(!name||!price||!category||!company){
            setError(true)
            return false
        }

        console.log(name,price,category,company)
        const userId = JSON.parse(localStorage.getItem('user'))._id
        let result = await fetch('http://127.0.0.1:5000/add-product',{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                'Content-Type':'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`

            }
        })
        result = await result.json()
        console.log(result)
    }
    return(
        <div className="product">
            <div className="product-card">
                <h1>Add Product</h1>
                <label className='inputLabel' htmlFor="pName">Product Name</label>
                <input className="inputBox" type="text" placeholder="Enter Product Name" name="pName" 
                onChange={(e)=>{setName(e.target.value)}} value={name}/>
                {error && !name && <span className="invalid-input">Write correct name</span>}

                <label className='inputLabel' htmlFor="pPrice">Product Price in USD-$</label>
                <input className="inputBox" type="text" placeholder="9999,8999,499..." name="pPrice"
                onChange={(e)=>{setPrice(e.target.value)}}value={price}/>
                {error && !price && <span className="invalid-input">Enter valid price</span>}


                <label className='inputLabel' htmlFor="pCategory">Product Category</label>
                <input className="inputBox" type="text" placeholder="Mobilr,Laptop etc..." name="pCategory"
                onChange={(e)=>{setCategory(e.target.value)}} value={category}/>
                {error && !category && <span className="invalid-input">Enter valid category</span>}


                <label className='inputLabel' htmlFor="pCompany">Product Company</label>
                <input className="inputBox" type="text" placeholder="Apple,Samsung etc.." name="pCompany"
                onChange={(e)=>{setCompany(e.target.value)}} value={company}/>
                {error && !company && <span className="invalid-input">Enter valid company</span>}


                <button onClick={addProduct} id='add_btn'>Add Product</button>

            </div>
        </div>
    )
}

export default AddProduct;