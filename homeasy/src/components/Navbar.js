import React, { useState } from 'react';
import './LandingPage.css'; // Adjust the import if the CSS file name or location is different
import { TiShoppingCart } from "react-icons/ti";
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Basket from './Basket'; // Ensure the correct path

const Navbar = () => {
  const [basketVisible, setBasketVisible] = useState(false);

  const toggleBasket = () => {
    setBasketVisible(!basketVisible);
  };

  return (
    <>
      <nav className="navbar">
        <label className='logo'>Homeasy</label>
        <input type='checkbox' id='check' />
        <label htmlFor='check' className='checkbtn'>
          <FaBars className='icon-bars' />
        </label>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" activeClassName="active">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact Us
            </NavLink>
          </li>
          <li>
            <TiShoppingCart className='icon' onClick={toggleBasket} />
          </li>
        </ul>
      </nav>
      {basketVisible && <Basket onClose={toggleBasket} visible={basketVisible} />}
    </>
  );
};

export default Navbar;
