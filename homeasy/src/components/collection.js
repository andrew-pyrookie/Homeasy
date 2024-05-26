import React, { useEffect, useState } from 'react';
import './collection.css';
import './LandingPage.css';
import ProductList from './ProductList'; // Import the new component

function Collection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, []);

  return (
    <div>
      <div className='collection-section'>
        <div className='living-image'>
          <img src={require('./Assets/living.jpg')} alt='collection' />
        </div>
        <div className='right-contents'>
          <p className='tag-name'><span className='small-line'></span> New Collection</p>
          <h2 className='home-h2'>A Perfect Set For Your Living Room</h2>
          <p className='home-p'>
            We believe that luxury should be effortless. Transform your home into a haven of comfort and sophistication with our curated collection of innovative solutions. We offer a range of ingenious products that elevate your living space to new heights.
            <br /><br />
            Discover the joy of simple luxuries that enhance your everyday life. Whether you're looking to add a touch of elegance or streamline your home maintenance, we have something special waiting for you. Explore our selection today and turn your house into a sanctuary of style and comfort.
          </p>
          <button className='home-btn'>SHOP THIS COLLECTION</button>
        </div>
      </div>
      <ProductList products={products} />
    </div>
  );
}

export default Collection;
