import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import logo from '../../Assets/logo.png';
import cart from '../../Assets/shopping-cart.png'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="Loading" />
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("/") }} ><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">Home{menu === "/" ? <hr /> : <></>}</Link></li>
        <li onClick={() => { setMenu("shop") }} ><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/newpro">New Arrivals {menu === "shop" ? <hr /> : <></>}</Link></li>
        <li onClick={() => { setMenu("product") }} ><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/product">All Items{menu === "product" ? <hr /> : <></>}</Link></li>
      </ul>
      <div className='nav-login-cart'>
        <img src={cart} alt="" />
      </div>

    </div>
  );
}

export default Navbar;