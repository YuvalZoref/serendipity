import React from 'react';
import './styling/carousel.scss';

const Carousel = ({ data }) => {
  console.log(data);
  return (
    <div>{data.slides.map((item, idx) => {
      return <img src={item.src} alt={item.alt} key={idx} />
    })}</div>
  )
}


export default Carousel;
