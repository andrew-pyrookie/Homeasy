import React from 'react';
import './salesbanner.css';
import banner from './Assets/forbanner.jpg';

const SalesBanner = () => {
    return (
        <div className="banner-container">
            <div className="banner-content">
                <h1>Sales up to 50% OFF</h1>
                <p>
                    Molestie amet tempor, diam id magna ridiculus tincidunt cursus curabitur non ipsum mattis in vel venenatis nam enim facilisis mi, egestas metus, nunc at.
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
