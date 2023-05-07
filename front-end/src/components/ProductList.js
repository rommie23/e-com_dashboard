import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ProductList=()=> {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        getProducts()
    },[])

     const getProducts = async()=>{
        let result = await fetch('http://127.0.0.1:5000/products',{
          headers:{
            authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        })
        result = await result.json()
        setProducts(result)
     }

     const deleteProduct =async(id)=>{
        let result = await fetch(`http://127.0.0.1:5000/product/${id}`,{
          method:'Delete',
          headers:{
            authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        })
        result = result.json()
        if(result){
          alert('record deleted')
          getProducts()

        }
     }
     const searchHandle = async(event)=>{
      console.log()
      let key = event.target.value
      if(key){
        let result = await fetch(`http://127.0.0.1:5000/search/${key}`,{
          headers:{
            authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        })
        result = await result.json()
        if(result){
          setProducts(result)
        }
      }else{
        getProducts()
      }
      
     }
    //  console.log("products",products)

  return (
    <div className='product-list'>
      <h3>Your Products List</h3>
      <input type="text" placeholder='Search here' id='search' onChange={searchHandle}/>
      <ul>
        <li>S.no</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operations</li>
      </ul>
      {
        products.length>0 ? products.map((item,index)=>
          <ul key={item._id}>
            <li>{index+1}</li>
            <li>{item.name}</li>
            <li>$ {item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li>
              <button onClick={()=>deleteProduct(item._id)}>Delete</button>
              <Link to={"/update/"+item._id}>Update</Link>
            </li>
          </ul>
        ):
        <h2>No results found</h2>
      }
    </div>
  )
}

export default ProductList
