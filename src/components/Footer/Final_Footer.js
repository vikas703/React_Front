import React from 'react';
import logo from '../../assets/Logo.svg';
import face from '../../assets/Facebook.svg';
import twi from '../../assets/Twitter.svg';
import insta from '../../assets/Instagram.svg';

const Final_Footer = () => {
  return (
    <div className='Final_Footer1'>

    <div className='Final_Footer2'>
    <img src={logo} alt='img' className='final_footer_img' />
    <p><b>LaslesVPN</b> is a private virtual network that<br/>
     has unique features and has high security.</p>
     <div className='Footer_icons'>
     <div className='icon_back'>
     <img src={face} alt='img' className='final_footer_icon' />
     </div>
     <div className='icon_back'>
     <img src={twi} alt='img' className='final_footer_icon' />
     </div>
     <div className='icon_back'>
     <img src={insta} alt='img' className='final_footer_icon' />
     </div>
     </div>
    <span>©2020LaslesVPN</span>
    </div>

    <div className='Final_Footer3'>
    <h4>Product</h4>
    <p>Download </p>
    <p>Pricing</p>
    <p>Locations</p>
    <p>Server</p>
    <p>Countries</p>
    <p>Blog</p>
    </div>

    <div className='Final_Footer3'>
    <h4>Engage</h4>
    <p>LaslesVPN ?  </p>
    <p>FAQ</p>
    <p>Tutorials</p>
    <p>About Us</p>
    <p>Privacy Policy</p>
    <p>Terms of Service</p>
    </div>

    <div className='Final_Footer3'>
    <h4>Earn Money</h4>
    <p>Affiliate </p>
    <p>Become Partner</p>
    </div>
    
      
    </div>
  )
}

export default Final_Footer
