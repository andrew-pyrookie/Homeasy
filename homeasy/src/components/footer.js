import React from 'react';
import './footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
function Footer(){
    return(
        <div className='footer-section'>
            <footer class="footer">
                <div class="contact">
                    <h2>HOMEASY</h2>
                    <p>Kahawa Sukari, Thika Road Nairobi 0100</p>
                    <p>+254-742-574-698</p>
                    <a href="mailto:musilipofficialandrew@gmail.com">musiliofficialandrew@gmail.com</a>
                    <a href="#">Visit Our Store</a>
                </div>
                <div class="links">
                    <h3>Useful Links</h3>
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">Rooms</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
                </div>
                <div class="rooms">
                    <h3>Rooms</h3>
                    <a href="#">Living Room</a>
                    <a href="#">Bedroom</a>
                    <a href="#">Kitchen</a>
                    <a href="#">Bath Room</a>
                    <a href="#">Home Office</a>
                </div>
                <div class="social">
                    <h3>Stay In Touch</h3>
                    <p>Subscribe for updates, exclusive offers, and home improvement tips. Follow us on social media for the latest from Homeasy.</p>
                    <div class="social-icons">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FiYoutube /></a>
                        <a href="#"><FaXTwitter /></a>
                    </div>
                </div>
            </footer>
            <div class="footer copyright">
                <p>Copyright © 2024 Online Furniture Store</p>
                <p>Powered by Maxisell Agency</p>
            </div>
        </div>
    );
}

export default Footer;