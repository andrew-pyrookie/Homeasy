import React from 'react';
import './LandingPage.css';
import Navbar from './Navbar'; 

function LandingPage() {
  return (
    <div className='homepage'>
        <video autoPlay muted loop id="background-video">
            <source src={require('./Assets/interior-design.mp4')} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <div className='navigation'>
            <Navbar />
            <div className='line-thru'></div>
        </div>
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

export default LandingPage;
