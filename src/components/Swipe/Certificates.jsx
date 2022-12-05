import React from 'react'
import './Certificates.css';
import pic1 from '../../assets/pic1.png';
import pic2 from '../../assets/pic2.png';
import pic3 from '../../assets/pic3.png';
import {AiFillStar} from 'react-icons/ai';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";


import { Navigation } from "swiper";

const  data = [
  {
    avatar: pic3,
    Name: 'Viezh Robert',
    place:'Warsaw, Poland',
    review:'“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. VPN always the best”.',
  },
  {
    avatar: pic2,
    Name: 'Yessica Christy',
    place:'Shanxi, China',
    review:'“I like it because I like to travel far and still can connect with high speed.”.',
  },
  {
    avatar: pic1,
    Name: 'Kim Young Jou',
    place:'Seoul, South Korea',
    review:'“This is very unusual for my business that currently requires a virtual private network that has high security.”.',
  }
]


const Testimonials = () => {
  return (
   <section>
   <div className='swiper'>

    <Swiper navigation={true} modules={[Navigation]} slidesPerView={1}  >

    {
      data.map(({avatar,Name,place,review}, index) => {
        return (
          <SwiperSlide  key={index} className='slider_in'>
          <div className='slider1'>
          <div className='slider_img'>
          <div className='slider_img11'>
          <div className='slider_img12'>
          <img src={avatar} alt='img' className='slider_img13'/>
          </div>
          <div className='slider_img2'>
          <h5>{Name}</h5>
          <p>{place}</p>
          </div>
          </div>

          <div className='slider_icon'>
          <p>4.5</p>
          <span><AiFillStar/></span>
          </div>
          
          </div>
          <div className='slider_txt'>
          <p>{review}</p>
          </div>
          
          </div>
        </SwiperSlide>
        )
      })

    }
    
    </Swiper>
    </div>
  </section>
  )
}

export default Testimonials;
