import React from 'react';
import './collection.css';
import './LandingPage.css';
import { RiShoppingBasketLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";


function Collection() {
  return (
    <div>
      <div className='collection-section'>
        <div className='living-image'>
          <img src={require('./Assets/living.jpg')} alt='collection' />
        </div>
        <div className='right-contents'>
          <p className='tag-name'><span className='small-line'></span> New Collection</p>
          <h2 className='home-h2'>A Perfect Set For Your Living Room</h2>
          <p className='home-p'> 
            We believe that luxury should be effortless. Transform your home into a haven of comfort and sophistication with our curated collection of innovative solutions. We offer a range of ingenious products that elevate your living space to new heights.
            <br /><br />
            Discover the joy of simple luxuries that enhance your everyday life. Whether you're looking to add a touch of elegance or streamline your home maintenance, we have something special waiting for you. Explore our selection today and turn your house into a sanctuary of style and comfort.
          </p>
          <button className='home-btn'>SHOP THIS COLLECTION</button>
        </div>
      </div>
      <div className='product-collection'>
        <div className='product-item'>
          <img src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/2590771/1.jpg?3701" alt='Geometric Round Hanging Wall Flower vase / Plant Vase - Light Turquoise' />
            <div className='product-icons'>
              <button className='icon-btn'><RiShoppingBasketLine /></button>
              <button className='icon-btn'><FaEye /></button>
            </div>
          <div className='product-info'>
            <p className='product-category'>Living Room</p>
            <h3 className='product-name'>Geometric Round Wall Flower vase</h3>
            <p className='product-price'>Ksh 2,000.00</p>
          </div>
        </div>
        <div className='product-item'>
          <img src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/892915/1.jpg?8727" alt="Earth Globe from Jumia" />
          <div className='product-icons'>
          <button className='icon-btn'><RiShoppingBasketLine /></button>
              <button className='icon-btn'><FaEye /></button>
          </div>
          <div className='product-info'>
            <p className='product-category'>Home Office</p>
            <h3 className='product-name'>Earth Globe Delicate Practical Mini Artificial</h3>
            <p className='product-price'>KSh 614.00</p>
          </div>
        </div>
        <div className='product-item'>
          <img src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/0225091/1.jpg?6362" alt='Scandinavian-inspired Chandeliers.' />
          <div className='product-icons'>
          <button className='icon-btn'><RiShoppingBasketLine /></button>
              <button className='icon-btn'><FaEye /></button>
          </div>
          <div className='product-info'>
            <p className='product-sale'>Sale!</p>
            <p className='product-category'>Living Room</p>
            <h3 className='product-name'>Scandinavian-inspired Chandeliers.</h3>
            <p className='product-price'>
              <span className='original-price'>KSh 10,920.00</span>KSh 7,920.00
            </p>
          </div>
        </div>
        <div className='product-item'>
          <img src="https://m.media-amazon.com/images/I/615Z4owp4UL._AC_SL1500_.jpg" alt=' Coffee Table' />
          <div className='product-icons'>
          <button className='icon-btn'><RiShoppingBasketLine /></button>
              <button className='icon-btn'><FaEye /></button>
          </div>
          <div className='product-info'>
            <p className='product-category'>Table</p>
            <h3 className='product-name'>Coffee Table with Hidden Compartment and Storage Shelf </h3>
            <p className='product-price'>KSh 8,600.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
