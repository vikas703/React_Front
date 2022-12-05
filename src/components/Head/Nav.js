import React,{useRef} from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';
import {AiFillUnlock} from 'react-icons/ai';



const Nav = () => {
  const NavRef = useRef();

  const showNavbar = () => {
    NavRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div className='in_nav'>

    <div className='nav_logo'>
    <h4>VPN</h4>
    <span><AiFillUnlock/></span>
    </div>
    <button className='nav_btn ' onClick={showNavbar} ><FaBars/></button>

    <div className='menu_nav' ref={NavRef}>
    <p>About</p>
    <p>Features</p>
    <p>Pricing</p>
    <p>Testimonials</p>
    <p>Help</p>
    <div className='signup'>
    <p><b>Sign In</b></p>
    <button >Sign Up</button>
    </div>
    <button className='nav_btn nav_close_btn' onClick={showNavbar}><FaTimes/>  </button>
    
    </div>



    
    </div>
  )
}

export default Nav
