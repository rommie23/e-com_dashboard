import React from "react";
import { Link,useNavigate } from "react-router-dom";


const Nav=()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear()
        navigate('/')
    }
    return(

        <div className="nav">
            <img className="logo" src="https://static.vecteezy.com/system/resources/previews/012/597/312/original/dragon-music-logo-awesome-snake-music-logo-template-png.png" alt="logo" />
            {auth?
            <ul className="nav-ul">
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/add'>Add Product</Link></li>
                <li><Link to='/update'>update Product</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link onClick={logout} to='/signup'>Logout({JSON.parse(auth).name})</Link></li>
            </ul> :
            <ul className="nav-ul nav-ul-right">
                <li><Link to='/signup'>Sign-Up</Link></li>             
                <li><Link to='/login'>LogIn</Link></li>   
            </ul>}
        </div>
    )
 }

 export default Nav;
 