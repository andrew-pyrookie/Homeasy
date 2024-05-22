import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Anna Cynthia',
    image: 'path-to-anna-image.jpg',
    text: 'Enim, interdum vulputate netus quis sapien malesuada neque, nec enim at urna gravida accumsan nunc, mi eu id ullamcorper amet commodo pulvinar tortor, augue donec placerat.',
  },
  {
    name: 'Jim Taylor',
    image: 'path-to-jim-image.jpg',
    text: 'Porttitor diam porta eu, id et vestibulum quam vestibulum facilisis nulla ornare eu pretium dictum quam pharetra, nisl maecenas pretium sed eget interdum auctor et, aliquam sem lectus.',
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
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
