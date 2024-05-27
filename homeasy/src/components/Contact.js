import React from 'react';
import Navbar from './Navbar';
import Newsletter from './letter';
import Footer from './footer';
import './ContactUs.css'; // Ensure you import your CSS file
import { IoIosCall } from "react-icons/io";
import { FaHeadset } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoNavigate } from "react-icons/io5";

function ContactUs() {
  return (
    <div className="ContactUs">
      <Navbar />
      
      {/* Contact Us Section */}
      <div className="contact-section">
        <h2 className='contact-h2'>Contact Us</h2>
        <p>We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. Reach out to us anytime.</p>
        
        <div className="contact-info">
          <div className="store-info">
            <h4>Our Store</h4>
            <p>Kahawa Sukari, Thika Road Nairobi 0100, Kenya</p>
            <p>Explore our range of innovative home products at Homeasy. Find stylish lighting, fancy pipes, and dust-blocking doormats to enhance your home's beauty and functionality.</p>
            <div className="social-icons">
              <a href="#"><BiLogoFacebookCircle /></a>
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><IoNavigate /> Get Direction</a>
            </div>
          </div>
          <div className="contact-details">
            <div className="contact-item">
              <IoIosCall className="icon" /> 
              <div>
                <h4>Call Us</h4>
                <p>+1 123 456 7890</p>
              </div>
            </div>
            <div className="contact-item">
              <FaHeadset className="icon" />
              <div>
                <h4>Support</h4>
                <p><a href="mailto:support@email.com">support@email.com</a></p>
              </div>
            </div>
            <div className="contact-item">
              <FaTags className="icon" />
              <div>
                <h4>Sales</h4>
                <p><a href="mailto:sales@email.com">sales@email.com</a></p>
              </div>
            </div>
            <div className="contact-item">
              <FaUserShield className="icon" />
              <div>
                <h4>Complaints</h4>
                <p><a href="mailto:complaints@email.com">complaints@email.com</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Map and Contact Form */}
        <div className="map-and-form">
          <div className="map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.806064175837!2d36.93454375542088!3d-1.1943440807078125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f8e4b8ad947%3A0x9504ecc7473b7b93!2sKahawa%20Sukari!5e0!3m2!1sen!2ske!4v1716797553926!5m2!1sen!2ske" 
              width="600" 
              height="450" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className="contact-form">
            <h4>Send Us A Message</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ContactUs;
