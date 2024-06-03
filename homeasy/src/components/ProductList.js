// ProductList.js
import React, { useEffect, useState } from 'react';
import { RiShoppingBasketLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import apiClient from '../apiClient';
import './collection.css';

function ProductList() {
  const [products, setProducts] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiClient.get('/products/');
        console.log('API Response:', response.data); // Debug: Log the response
        if (Array.isArray(response.data)) {
          setProducts(response.data); // Ensure the response is an array
        } else {
          console.error('Expected array but got:', response.data);
          setProducts([]); // Set products to an empty array if the response is not an array
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='product-collection'>
      {Array.isArray(products) && products.map(product => (
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
              {product.original_price && <span className='original-price'>{product.original_price}</span>}
              {product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
