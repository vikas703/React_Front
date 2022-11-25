import React from 'react';
import person from '../../assets/person.svg';
import map from '../../assets/map.svg';
import bottom3 from '../../assets/bottom3.svg';


const Bottom = () => {
  return (
    <div className='in_bottom'>

    <div className='first'>
    <div className='bottom_img'>
    <img src={person} alt='img'className='bottom_img1' />
    </div>
    <div className='bottom_text'>
    <h2>90+</h2>
    <p>Users</p>
    </div>
    </div>

    
    <div className='first1'>
    <div className='bottom_img'>
    <img src={map} alt='img'className='bottom_img1' />
    </div>
    <div className='bottom_text'>
    <h2>30+</h2>
    <p>Locations</p>
    </div>
    </div>

    <div className='first2'>
    <div className='bottom_img'>
    <img src={bottom3} alt='img'className='bottom_img1' />
    </div>
    <div className='bottom_text'>
    <h2>50+</h2>
    <p>Servers</p>
    </div>
    </div>

    

    </div>
  )
}

export default Bottom
