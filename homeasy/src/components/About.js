import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import Newsletter from './letter';


function AboutUs() {
  return (
    <div className="AboutUs">
        <Navbar/>
        <h2>About Us</h2>
        <Newsletter/>
        <Footer/>
    </div>
  );
}

export default AboutUs;