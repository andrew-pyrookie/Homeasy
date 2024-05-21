import React from 'react';
import './letter.css';

function Newsletter(){
    return (
        <div className='letter-body'>
            <div class="container">
                <div class="image-section"></div>
                <div class="text-section">
                    <h2>Subscribe to Our Newsletter</h2>
                    <p>See the latest collection & get special offer</p>
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