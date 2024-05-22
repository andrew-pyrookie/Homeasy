import React from 'react';
import './WhyChooseUs.css';

const features = [
  {
    icon: 'path-to-icon1.svg',
    title: 'Big Discounts',
    description: 'Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.',
  },
  {
    icon: 'path-to-icon2.svg',
    title: 'Free Shipping',
    description: 'Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.',
  },
  {
    icon: 'path-to-icon3.svg',
    title: 'Secure Payments',
    description: 'Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.',
  },
  {
    icon: 'path-to-icon4.svg',
    title: 'Order Tracking',
    description: 'Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h2>If You Wonder</h2>
      <h1>Why Choose Us</h1>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <img src={feature.icon} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
