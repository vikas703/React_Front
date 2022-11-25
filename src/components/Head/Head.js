import React from 'react';
import Bottom from './Bottom';
import './Head.css';
import Middle from './Middle';
import Nav from './Nav';

const Head = () => {
  return (
  
   

    <div className='head'>

    <div className='nav'>
    <Nav />
    </div>

    <div className='middle'>
    <Middle />
    </div>
    
    <div className='bottom'>
    <Bottom/> 
    </div>
    
    </div>


  )
}

export default Head
