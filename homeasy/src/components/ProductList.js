// src/components/ProductList.js
import React from 'react';
import { RiShoppingBasketLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import './collection.css'; // or create a separate CSS file if necessary

function ProductList({ products }) {
  return (
    <div className='product-collection'>
      {products.map(product => (
        <div key={product.id} className='product-item'>
          <img src={product.image} alt={product.name} />
          <div className='product-icons'>
            <button className='icon-btn'><RiShoppingBasketLine /></button>
            <button className='icon-btn'><FaEye /></button>
          </div>
          <div className='product-info'>
            {product.sale && <p className='product-sale'>Sale!</p>}
            <p className='product-category'>{product.category}</p>
            <h3 className='product-name'>{product.name}</h3>
            <p className='product-price'>
              {product.originalPrice && <span className='original-price'>{product.originalPrice}</span>}
              {product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
