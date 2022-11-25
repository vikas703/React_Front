import React from 'react';
import './Provider.css';
import Provider1 from '../../assets/provider.svg';
import tick from '../../assets/tick.svg';


const Provider = () => {
  return (
    <section>
    <div className='container'>
    <div className='provider'>

    <div className='provider_img'>
    <img src={Provider1} alt="img"  className='provider_img1'/>
    </div>

    <div className='provider_text'>
    <h1>We Provide Many<br/> Features You Can Use</h1>
    <p>You can explore the features that we provide with fun<br />
     and have their own functions each feature.</p>
        
     <div className='provider_text1'>
     <div className='provider_text2'>
     <img src={tick} alt='img' className='provider_text3'/>
     <p>Powerfull online protection.</p>
     </div>
     <div className='provider_text2'>
     <img src={tick} alt='img' className='provider_text3'/>
     <p>Internet without borders.</p>
     </div>
     <div className='provider_text2'>
     <img src={tick} alt='img' className='provider_text3'/>
     <p>Supercharged VPN</p>
     </div>
     <div className='provider_text2'>
     <img src={tick} alt='img' className='provider_text3'/>
     <p>No specific time limits.</p>
     </div>
     </div>

    </div>
    
    </div>
    </div>
    </section>
  )
}

export default Provider
