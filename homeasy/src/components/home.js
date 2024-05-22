import React from 'react';
import './home.css';
import { TiShoppingCart } from "react-icons/ti";
import { FaBars } from "react-icons/fa";

function Home() {
  return (
    <div className='homepage'>
        <video autoPlay muted loop id="background-video">
            <source src={require('./Assets/interior-design.mp4')} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <nav className="navbar">
        <label className='logo'>Homeasy</label>
        <input type='checkbox' id='check' />
        <label htmlFor='check' className='checkbtn'>
            <FaBars className='icon-bars' />
        </label>
        <ul>
            <li><a className="active" href='#'>Home</a></li>
            <li><a href='#'>Products</a></li>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Contact Us</a></li>
            <li><a href='#' ><TiShoppingCart className='icon'/></a></li>
        </ul>
        </nav>
        <section className='home-section'>
            <p className='tag-name'><span className='small-line'></span> Homeasy Store</p>
            <h2 className='home-h2'>Where Luxury Meets Convenience</h2>
            <p className='home-p'> We believe that luxury should be effortless. Transform your home into a haven of comfort and sophistication with our curated collection of innovative solutions. We offer a range of ingenious products that elevate your living space to new heights.

Discover the joy of simple luxuries that enhance your everyday life. Whether you're looking to add a touch of elegance or streamline your home maintenance, we have something special waiting for you. Explore our selection today and turn your house into a sanctuary of style and comfort.</p>
            <button className='home-btn'>SHOP NOW</button>
        </section>
    </div>
  );
}

export default Home;
