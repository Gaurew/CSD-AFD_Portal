// Navbar.js
import { MDBBadge } from 'mdbreact';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Assets/logo.png';
import cart from '../../Assets/shopping-cart.png';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // State to manage cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding a product to the cart
  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="Loading" />
      </div>
      <ul className="nav-menu">
        <li>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">Home</Link>
          {currentPath === "/" && <hr />}
        </li>
        <li>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/newpro">New Arrivals</Link>
          {currentPath === "/newpro" && <hr />}
        </li>
        <li>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/product">All Items</Link>
          {currentPath === "/product" && <hr />}
        </li>
      </ul>
     
        <div className='d-inline-flex position-relative'>
          <MDBBadge className='position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle'>
            <span className='visually-hidden'>New alerts</span>
          </MDBBadge>
          <img
            src={cart}
            alt='Avatar'
            style={{ width: '30px', height: '30px' }}
          />
        
        {/* <Link to="/cart">
          <div style={{ position: 'relative' }}>
            <img src={cart} {...currentPath === "/cart" && <hr />}/>
            {cartItems.length > 0 && <span className="badge">{cartItems.length}</span>}
          </div>
        </Link> */}
      </div>
    </div>
  );
}

export default Navbar;
