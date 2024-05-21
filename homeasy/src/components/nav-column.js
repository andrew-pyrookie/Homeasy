import React from 'react';
import './column.css';
import living from './Assets/living_room.jpg';
import bathroom from './Assets/bathroom.jpg';
import bedroom from './Assets/bedroom.jpg';
import kitchen from './Assets/kitchen.jpg';


function NavColumn() {
  return (
    <div className='images-column'>
        <img src={living} alt='living room' className='livingroom'/> 
        <img src={bathroom} alt='bathroom' className='bathroom'/>
        <img src={bedroom} alt='bedroom' className='bedroom'/>
        <img src={kitchen} alt='kitchen' className='kitchen'/>
    </div>
  );
}

export default NavColumn;