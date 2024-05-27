import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import Newsletter from './letter';
import './About.css';

function AboutUs() {
  return (
    <div className="AboutUs">
      <Navbar/>
      <div className='about-section'>
        <h2 className='about-h2'>About Us</h2>
        <p>
          At Homeasy, we believe that every home deserves to be both stylish and functional. Our mission is to bring you innovative home improvement solutions that elevate your living spaces. With a keen eye for quality and design, we offer a wide range of products including special lights, fancy pipes, and dust-blocking doormats, all crafted to enhance the aesthetics and comfort of your home.
        </p>
        <p>
          Our team is dedicated to providing exceptional service and ensuring customer satisfaction. We source the finest materials and employ advanced technologies to deliver products that meet the highest standards of durability and performance. Whether you're looking to transform a single room or your entire home, you can trust Homeasy to offer reliable, elegant solutions that make your home a true sanctuary.
        </p>
        <p>
          Join our community of satisfied customers and experience the Homeasy difference – where style meets functionality and quality is guaranteed.
        </p>
      </div>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default AboutUs;
