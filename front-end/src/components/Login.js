import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user')
        if(auth){
            navigate('/')
        }
    }  )

    const handleLogin=async()=>{
        console.log(email,password)
        let result = await fetch('http://127.0.0.1:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json()
        console.log(result)
        if(result.auth){
            localStorage.setItem('user', JSON.stringify(result.user))
            localStorage.setItem('token', JSON.stringify(result.auth))
            navigate('/')
        }else{
            alert('please check your email or password')
        }

    }
    return(
        <div className="login">
            <div id='login-card'>
            <h2>Login</h2>

            <label className='inputLabel' htmlFor="email">Email Address</label>
            <input className='inputBox' type="email" placeholder='abc@abc.com' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

            <label className='inputLabel' htmlFor="pass">Password</label>
            <input className='inputBox' type="password" placeholder='*******' name='pass' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

            <button id='signup_btn' onClick={handleLogin}>Coming Back😊</button>
        </div>
        </div>
    )
}

export default Login;