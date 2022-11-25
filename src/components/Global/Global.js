import React from 'react';
import './Global.css';
import Global1 from '../../assets/Global.svg';

const Global = () => {
  return (
    <section>
    <div className='container'>
    
    <div className='global'>
    <div className='global_text'>
    <h1>Huge Global Network<br/> of Fast VPN</h1>
    <p>See LaslesVPN everywhere to make it easier for you when you move<br/>
     locations.</p>
    </div>
    
    <div className='global_img'>
    <img src={Global1} alt='img' className='global_img1' />
    </div>
    </div>
    
    </div>
    </section>
  )
}

export default Global
