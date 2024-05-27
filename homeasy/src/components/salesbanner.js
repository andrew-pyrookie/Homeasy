import React from 'react';
import './salesbanner.css';
import banner from './Assets/forbanner.jpg';

const SalesBanner = () => {
    return (
        <div className="banner-container">
            <div className="banner-content">
                <h1>Sales up to 50% OFF</h1>
                <p>
                Transform your home with our exclusive deals! Don’t miss out on stylish upgrades at unbeatable prices.
                </p>
                <button className="shop-button">SHOP NOW</button>
            </div>
            <div className="banner-image">
                <img src={banner} alt="Sales Banner"/>
            </div>
        </div>
    );
};

export default SalesBanner;
