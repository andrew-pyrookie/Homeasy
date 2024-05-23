import React from 'react';
import './WhyChooseUs.css';
import { CiDiscount1, CiDeliveryTruck } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import { MdLocationSearching } from "react-icons/md";

const features = [
  {
    icon: <CiDiscount1 />,
    title: 'Big Discounts',
    description: 'Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.',
  },
  {
    icon: <CiDeliveryTruck />,
    title: 'Free Shipping',
    description: 'Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.',
  },
  {
    icon: <IoWalletOutline />,
    title: 'Secure Payments',
    description: 'Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.',
  },
  {
    icon: <MdLocationSearching />,
    title: 'Order Tracking',
    description: 'Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <div className="title-container">
        <p className='selling-seller'><span className='selling-line'></span>If You Wonder</p>
        <h1>Why Choose Us</h1>
        <div className='line-thru'></div>
      </div>
      
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
