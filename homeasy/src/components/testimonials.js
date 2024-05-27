import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Sarah K.',
    image: require('./Assets/Anna.webp'), // Adjust path if necessary
    text: '"From the moment I installed Homeasy\'s dust-blocking doormats, my home has stayed cleaner than ever. Their products are not just beautiful, but also incredibly functional. I couldn\'t be happier!"',
  },
  {
    name: 'David M.',
    image: require('./Assets/jim.webp'), // Adjust path if necessary
    text: '"Homeasy has completely transformed my living space. The fancy pipes and special lights have added a touch of elegance that I never knew was possible. The quality is exceptional!"',
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <p className='selling-seller'><span className='selling-line'></span>Testimonials</p>
      <h2>What People Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img src={testimonial.image} alt={testimonial.name} />
            <p>{testimonial.text}</p>
            <h4>{testimonial.name}</h4>
          </div>
        ))}
      </div>
      <button className="view-all-button">View All Testimonials</button>
    </div>
  );
};

export default Testimonials;
