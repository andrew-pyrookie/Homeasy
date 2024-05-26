import React from 'react';
import Navbar from './Navbar';
import Newsletter from './letter';
import Footer from './footer';
import './ContactUs.css'; // Ensure you import your CSS file

function ContactUs() {
  return (
    <div className="ContactUs">
      <Navbar/>
      
      {/* Contact Us Section */}
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>Tempus amet, sit erat malesuada lorem purus dictum pretium, posuere sagittis ultricies enim massa nisi neque augue in condimentum diam commodo ornare.</p>
        
        <div className="contact-info">
          
          {/* Store Info */}
          <div className="store-info">
            <h4>Our Store</h4>
            <p>3538 Torrance Blvd, Torrance, CA 90503, USA</p>
            <p>Posuere sagittis ultricies enim massa nisi neque augue in condimentum lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fas fa-map-marker-alt"></i> Get Direction</a>
            </div>
          </div>
          
          {/* Contact Details */}
          <div className="contact-details">
            <div>
              <h4>Call Us</h4>
              <p>+1 123 456 7890</p>
            </div>
            <div>
              <h4>Support</h4>
              <p><a href="mailto:support@email.com">support@email.com</a></p>
            </div>
            <div>
              <h4>Sales</h4>
              <p><a href="mailto:sales@email.com">sales@email.com</a></p>
            </div>
            <div>
              <h4>Complaints</h4>
              <p><a href="mailto:complaints@email.com">complaints@email.com</a></p>
            </div>
          </div>
        </div>
        
        {/* Map and Contact Form */}
        <div className="map-and-form">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Nairobi,Kenya"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
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
      
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default ContactUs;
