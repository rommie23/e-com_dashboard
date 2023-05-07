import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const UpdateProduct =()=>{
    let [name,setName]=useState('');
    let [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [company,setCompany]=useState('');
    const params = useParams()
    const navigate = useNavigate();

    useEffect( ()=>{
        getProductDetails()
    },[])
    
    const getProductDetails = async()=>{
        let result = await fetch(`http://127.0.0.1:5000/product/${params.id}`,{
            headers:{
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
              }
        })
        result = await result.json()
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

    const updateProduct = async()=>{
        let result = await fetch(`http://127.0.0.1:5000/product/${params.id}`,{
            method:'Put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`

            }
        })
        result = await result.json()
        console.log(result)
        navigate('/')
    }
    return(
        <div className="product">
            <div className="product-card">
                <h1>Update Product</h1>
                <label className='inputLabel' htmlFor="pName">Product Name</label>
                <input className="inputBox" type="text" placeholder="Enter Product Name" name="pName" 
                onChange={(e)=>{setName(e.target.value)}} value={name}/>

                <label className='inputLabel' htmlFor="pPrice">Product Price in USD-$</label>
                <input className="inputBox" type="text" placeholder="9999,8999,499..." name="pPrice"
                onChange={(e)=>{setPrice(e.target.value)}}value={price}/>


                <label className='inputLabel' htmlFor="pCategory">Product Category</label>
                <input className="inputBox" type="text" placeholder="Mobilr,Laptop etc..." name="pCategory"
                onChange={(e)=>{setCategory(e.target.value)}} value={category}/>


                <label className='inputLabel' htmlFor="pCompany">Product Company</label>
                <input className="inputBox" type="text" placeholder="Apple,Samsung etc.." name="pCompany"
                onChange={(e)=>{setCompany(e.target.value)}} value={company}/>


                <button onClick={updateProduct} id='add_btn'>Update Product</button>

            </div>
        </div>
    )
}

export default UpdateProduct;