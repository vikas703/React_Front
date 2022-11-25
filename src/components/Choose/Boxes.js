import React from 'react';
import free from '../../assets/Free.svg';
import {TiTick} from 'react-icons/ti';

const Boxes = () => {
  return (
    <div className='box'>
    <div className='box1'>
    <img src={free} alt='img' className='box_img'/>
    <h2>Free Plan</h2>

    <div className='box2'>
     <div className='box3'>
     <span className='box4' ><TiTick/></span>
     <p>Unlimited Bandwitch</p>
     </div>
     
     <div className='box3'>
     <span className='box4' ><TiTick/></span>
     <p>Encrypted Connection</p>
     </div>

     <div className='box3'>
     <span className='box4' ><TiTick/></span>
     <p>No Traffic Logs</p>
     </div>

     <div className='box3'>
     <span className='box4' ><TiTick/></span>
     <p>Works on All Devices</p>
     </div>
    
     </div>

     <div className='box_last1'>
     <h1>Free</h1>
     <button>Select</button>
     </div>
    
    </div>

    <div className='box1'>
    <img src={free} alt='img' className='box_img'/>
    <h2>Standard Plan</h2>

    <div className='box2'>
     <div className='box3'>
     <span className='box4' ><TiTick/></span>
     <p>Unlimited Bandwitch</p>
     </div>
     
     <div className='box3'>
     <span className='box4' ><TiTick/></span>
     <p>Encrypted Connection</p>
     </div>

     <div className='box3'>
     <span className='box4' ><TiTick/></span>
     <p>Yes Traffic Logs</p>
     </div>

     <div className='box3'>
     <span className='box4' ><TiTick/></span>
     <p>Works on All Devices</p>
     </div>

     <div className='box3'>
     <span className='box4' ><TiTick/></span>
     <p>Connect Anyware</p>
     </div>
    
     </div>

     <div className='box_last2'>
     <h1>Free</h1>
     <button>Select</button>
     </div>
    
    </div>

    <div className='box1'>
    <img src={free} alt='img' className='box_img'/>
    <h2>Premium Plan</h2>

    <div className='box2'>
     <div className='box3'>
     <span className='box4' ><TiTick/></span>
     <p>Unlimited Bandwitch</p>
     </div>
     
     <div className='box3'>
     <span className='box4' ><TiTick/></span>
     <p>Encrypted Connection</p>
     </div>

     <div className='box3'>
     <span className='box4' ><TiTick/></span>
     <p>Yes Traffic Logs</p>
     </div>

     <div className='box3'>
     <span className='box4' ><TiTick/></span>
     <p>Works on All Devices</p>
     </div>

     <div className='box3'>
     <span className='box4' ><TiTick/></span>
     <p>Connect Anyware</p>
     </div>

     <div className='box3'>
     <span className='box4' ><TiTick/></span>
     <p>Get New Features</p>
     </div>
    
     </div>

     <div className='box_last'>
     <h1>Free</h1>
     <button>Select</button>
     </div>
    
    </div>
      
    </div>
  )
}

export default Boxes
