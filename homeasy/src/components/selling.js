import React from 'react';
import './selling.css';
import { RiShoppingBasketLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";

function SellingProducts(){
    return (
        <div>
            <div className='upper-part'>
                <div className='selling-left'>
                    <p className='selling-seller'><span className='selling-line'></span> BEST SELLER</p>
                    <h2 className='selling-h2'>Discover Our Most Selling Products</h2>
                </div>
                <div className='selling-right'>
                <button className='selling-btn'>VIEW ALL BEST SELLERS</button>
                </div>
            </div>
            <div className='items-collection'>
                <div className='selling-item'>
                    <img src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/2590771/1.jpg?3701" alt='Geometric Round Hanging Wall Flower vase / Plant Vase - Light Turquoise' />
                    <div className='selling-info'>
                        <p className='selling-category'>Living Room</p>
                        <h3 className='selling-name'>Geometric Round Wall Flower vase</h3>
                        <p className='selling-price'>Ksh 2,000.00</p>
                    </div>
                    <div className='selling-icons'>
                        <button className='icon-btn'><RiShoppingBasketLine /></button>
                        <button className='icon-btn'><FaEye /></button>
                    </div>
                </div>
                <div className='selling-item'>
                    <img src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/892915/1.jpg?8727" alt="Earth Globe from Jumia" />
                    <div className='selling-info'>
                        <p className='selling-category'>Home Office</p>
                        <h3 className='selling-name'>Earth Globe Delicate Practical Mini Artificial</h3>
                        <p className='selling-price'>KSh 614.00</p>
                    </div>
                    <div className='selling-icons'>
                        <button className='icon-btn'><RiShoppingBasketLine /></button>
                        <button className='icon-btn'><FaEye /></button>
                    </div>
                </div>
                <div className='selling-item'>
                    <img src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/0225091/1.jpg?6362" alt='Scandinavian-inspired Chandeliers.' />
                    <div className='selling-info'>
                        <p className='selling-sale'>Sale!</p>
                        <p className='selling-category'>Living Room</p>
                        <h3 className='selling-name'>Scandinavian-inspired Chandeliers.</h3>
                        <p className='selling-price'>
                            <span className='original-price'>KSh 10,920.00</span>KSh 7,920.00
                        </p>
                    </div>
                    <div className='selling-icons'>
                        <button className='icon-btn'><RiShoppingBasketLine /></button>
                        <button className='icon-btn'><FaEye /></button>
                    </div>
                </div>
                <div className='selling-item'>
                    <img src="https://m.media-amazon.com/images/I/615Z4owp4UL._AC_SL1500_.jpg" alt=' Coffee Table' />
                    <div className='selling-info'>
                        <p className='selling-category'>Table</p>
                        <h3 className='selling-name'>Coffee Table with Hidden Compartment and Storage Shelf </h3>
                        <p className='selling-price'>KSh 8,600.00</p>
                    </div>
                    <div className='selling-icons'>
                        <button className='icon-btn'><RiShoppingBasketLine /></button>
                        <button className='icon-btn'><FaEye /></button>
                    </div>
                </div>
                <div className='selling-item'>
                    <img src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/892915/1.jpg?8727" alt="Earth Globe from Jumia" />
                    <div className='selling-info'>
                        <p className='selling-category'>Home Office</p>
                        <h3 className='selling-name'>Earth Globe Delicate Practical Mini Artificial</h3>
                        <p className='selling-price'>KSh 614.00</p>
                    </div>
                    <div className='selling-icons'>
                        <button className='icon-btn'><RiShoppingBasketLine /></button>
                        <button className='icon-btn'><FaEye /></button>
                    </div>
                </div>
                <div className='selling-item'>
                    <img src="https://m.media-amazon.com/images/I/615Z4owp4UL._AC_SL1500_.jpg" alt=' Coffee Table' />
                    <div className='selling-info'>
                        <p className='selling-category'>Table</p>
                        <h3 className='selling-name'>Coffee Table with Hidden Compartment and Storage Shelf </h3>
                        <p className='selling-price'>KSh 8,600.00</p>
                    </div>
                    <div className='selling-icons'>
                        <button className='icon-btn'><RiShoppingBasketLine /></button>
                        <button className='icon-btn'><FaEye /></button>
                    </div>
                </div>
                <div className='selling-item'>
                    <img src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/892915/1.jpg?8727" alt="Earth Globe from Jumia" />
                    <div className='selling-info'>
                        <p className='selling-category'>Home Office</p>
                        <h3 className='selling-name'>Earth Globe Delicate Practical Mini Artificial</h3>
                        <p className='selling-price'>KSh 614.00</p>
                    </div>
                    <div className='selling-icons'>
                        <button className='icon-btn'><RiShoppingBasketLine /></button>
                        <button className='icon-btn'><FaEye /></button>
                    </div>
                </div>
                <div className='selling-item'>
                    <img src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/892915/1.jpg?8727" alt="Earth Globe from Jumia" />
                    <div className='selling-info'>
                        <p className='selling-category'>Home Office</p>
                        <h3 className='selling-name'>Earth Globe Delicate Practical Mini Artificial</h3>
                        <p className='selling-price'>KSh 614.00</p>
                    </div>
                    <div className='selling-icons'>
                        <button className='icon-btn'><RiShoppingBasketLine /></button>
                        <button className='icon-btn'><FaEye /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SellingProducts;
