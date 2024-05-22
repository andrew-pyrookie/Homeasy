import React from 'react';
import './column.css';
import living from './Assets/living_room.jpg';
import bathroom from './Assets/bathroom.jpg';
import bedroom from './Assets/bedroom.jpg';
import kitchen from './Assets/kitchen.jpg';

function NavColumn() {
  return (
    <div className='images-column'>
      <div className='image-container'>
        <img src={living} alt='living room' className='image'/>
        <div className='overlay'>
          <div className='overlay-text'>Living Room →</div>
        </div>
      </div>
      <div className='image-container'>
        <img src={bedroom} alt='bedroom' className='image'/>
        <div className='overlay'>
          <div className='overlay-text'>Bedroom →</div>
        </div>
      </div>
      <div className='image-container'>
        <img src={kitchen} alt='kitchen' className='image'/>
        <div className='overlay'>
          <div className='overlay-text'>Kitchen →</div>
        </div>
      </div>
      <div className='image-container'>
        <img src={bathroom} alt='bathroom' className='image'/>
        <div className='overlay'>
          <div className='overlay-text'>Bath Room →</div>
        </div>
      </div>
    </div>
  );
}

export default NavColumn;
