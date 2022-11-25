import React from 'react';
import './Choose.css';
import Boxes from './Boxes'

const Choose = () => {
  return (
    <section>
    <div className='container'>
    <div className='Choose'>
    <div className='choose_text'>
    <h1>Choose Your Plan</h1>
    <p>Let's choose the package that is best 
    for you and explore it happily and <br/>cheerfully.</p>
    </div>

    <div className='choose_boxes'>
    <Boxes />
    </div>
    
    </div>
    </div>
    </section>
  )
}

export default Choose
