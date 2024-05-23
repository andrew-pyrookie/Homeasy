import React from 'react';
import './letter.css';

function Newsletter(){
    return (
        <div className='letter-body'>
            <div class="container">
                <div class="image-section"></div>
                <div class="text-section">
                <p className='selling-seller'><span className='selling-line'></span>SUBSCRIBE TO OUR NEWSLETTER</p>
                    <h2>See the latest collection & get special offer</h2>
                    <form action="#" method="post">
                        <input type="email" placeholder="Email address" required/>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;