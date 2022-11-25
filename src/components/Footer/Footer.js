import React from 'react';
import Final_Footer from './Final_Footer';
import './Footer.css';

const Footer = () => {
  return (
    <section>
    <div className='container'>
    <div className='Footer'>

    <div className='Footer_box'>
    <div className='Footer_text'>
    <h1>Subscribe Now for<br/>
     Get Special Features!</h1>
     <p>Let's subscribe with us and find the fun.</p>
     </div>

     <div className='Footer_btn'>
     <button className='Footer_btn1'>Subscribe Now</button>
     </div>
    </div>

    <div className='Final_footer'>
    <Final_Footer/>
    </div>
    
    </div>
    </div>
    </section>
  )
}

export default Footer
