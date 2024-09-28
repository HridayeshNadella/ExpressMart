import React, { useState } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png';
import cartIcon from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [menu, setMenu] = useState("SHOP");
  return (
    <div className="Navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>EXPRESS MART</p>
      </div>
      <ul className='nav-menu'>
       <li onClick={()=>{setMenu("SHOP")}}><Link style={{textDecoration:'none',color: 'inherit'}} to='/'>SHOP</Link> {menu==="SHOP"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("MEN")}}><Link style={{textDecoration:'none',color: 'inherit'}} to='/men'>MEN</Link> {menu==="MEN"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("WOMEN")}}><Link style={{textDecoration:'none',color: 'inherit'}} to='/women'>WOMEN</Link> {menu==="WOMEN"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("KIDS")}}><Link style={{textDecoration:'none',color: 'inherit'}} to='/kids'>KIDS</Link> {menu==="KIDS"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cartIcon} alt=""></img></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar;
