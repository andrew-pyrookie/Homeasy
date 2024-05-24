import React from 'react';
import { IoClose } from "react-icons/io5";
import './Basket.css';

function Basket({ onClose, visible }) {
  return (
    <div className={`basket ${visible ? 'open' : ''}`}>
      <div className='top-bar'>
        <p className='shopping-cart'>Shopping Cart</p>
        <div className='close' onClick={onClose}>
          <IoClose />
        </div>
      </div>
      <div className='content'>
        <p className='empty-cart'>No products in the cart.</p>
      </div>
      <button className='continue-btn' onClick={onClose}>Continue Shopping</button>
    </div>
  );
}

export default Basket;
