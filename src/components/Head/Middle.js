import React from 'react';
import middle1 from '../../assets/middle1.svg';

const Middle = () => {
  return (
    <div className='in_middle'>
    <div className='middle_text'>
    <h1>Want anything to be<br/> easy with VPN.</h1>
    <p>Provide a network for all your needs with ease and fun using VPN<br/>
     discover interesting features from us.</p>
    <div className='middle_btn'>
    <button>Get Started</button>
    </div>
    </div>

    <div className='middle_img'>
    <img src={middle1}  alt='img'/>
    </div>
    </div>
  )
}

export default Middle
