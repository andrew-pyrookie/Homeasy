// Shop.js
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import './shop.css';
import { IoIosOptions } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import apiClient from '../apiClient';

function Shop() {
  const [shopProducts, setShopProducts] = useState([]);
  const [sortOption, setSortOption] = useState('Default sorting');

  useEffect(() => {
    console.log('Fetching shop products...');
    const fetchShopProducts = async () => {
      try {
        const response = await apiClient.get('/products/');
        console.log('Fetched products:', response.data);
        setShopProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchShopProducts();
  }, []);

  const sortBy = (criteria, label) => {
    setSortOption(label);
    // Implement your sorting logic here based on criteria
    console.log(`Sorting by ${criteria}`);
  };

  return (
    <div>
      <Navbar />
      <div className='list-container'>
        <div className='options-container'>
          <button className='optn-btn'><IoIosOptions /> OPTIONS</button>
          <span>Showing 1–12 of 18 results</span>
          <div className="dropdown">
            <button className="dropbtn">{sortOption} <FaAngleDown /></button>
            <div className="dropdown-content">
              <a href="#" onClick={() => sortBy('popularity', 'Sort by popularity')}>Sort by popularity</a>
              <a href="#" onClick={() => sortBy('rating', 'Sort by average rating')}>Sort by average rating</a>
              <a href="#" onClick={() => sortBy('latest', 'Sort by latest')}>Sort by latest</a>
              <a href="#" onClick={() => sortBy('priceLowToHigh', 'Sort by price: Low to High')}>Sort by price: Low to High</a>
              <a href="#" onClick={() => sortBy('priceHighToLow', 'Sort by price: High to Low')}>Sort by price: High to Low</a>
            </div>
          </div>
        </div>
        <div className='product-grid'>
          {shopProducts.length > 0 ? (
            shopProducts.map((product, index) => (
              <div key={index} className='product-item'>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <p>{product.price}</p>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
