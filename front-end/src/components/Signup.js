import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate()

    useEffect(()=>{
      const auth = localStorage.getItem('user');
      if(auth){
          navigate('/')
      }

  })

    const collectData= async()=>{
        console.log(name,email,password)
        let result = await fetch('http://localhost:5000/register',{
          method:'post',
          body:JSON.stringify({name,email,password}),
          headers:{
            'Content-Type':'application/json'
          }
        });
        result = await result.json()
        console.log(result)
        localStorage.setItem("user",JSON.stringify(result.result));
        localStorage.setItem("token",JSON.stringify(result.auth));
        navigate('/');
    }
  return (
    <div className='signup'>
        <div id='signup-card'>
            <h2>SignUp</h2>

            <label className='inputLabel' htmlFor="username">User Name</label>
            <input className='inputBox' type="text" placeholder='Enter Name' name='username' value={name} onChange={(e)=>{setName(e.target.value)}}/>

            <label className='inputLabel' htmlFor="email">Email Address</label>
            <input className='inputBox' type="email" placeholder='abc@abc.com' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

            <label className='inputLabel' htmlFor="pass">Password</label>
            <input className='inputBox' type="password" placeholder='*******' name='pass' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

            <button id='signup_btn' onClick={collectData}>I am in 😊</button>
        </div>
    </div>
  )
}

    