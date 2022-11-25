import React from 'react';
import './Clients.css';
import glo1 from '../../assets/glo1.svg';
import glo2 from '../../assets/glo2.svg';
import glo3 from '../../assets/glo3.svg';
import glo4 from '../../assets/glo4.svg';
import glo5 from '../../assets/glo5.svg';


const Clients = () => {
  return (
    <section>
    <div className='container'>
    <div className='Clients'>
    
    <div className='logos'>
    <img src={glo1} alt='img' className='logo1' />
    <img src={glo2} alt='img' className='logo1' />
    <img src={glo3} alt='img' className='logo1' />
    <img src={glo4} alt='img' className='logo1' />
    <img src={glo5} alt='img' className='logo1' />
    </div>

    <div className='Clients_text'>
    <h1>Trusted by Thousands of<br/> Happy Customer</h1>
    <p>These are the stories of our customers who have joined us with great<br/>
     pleasure when using this crazy feature.</p>
    </div>

    </div>
    </div>
    </section>
  )
}

export default Clients
