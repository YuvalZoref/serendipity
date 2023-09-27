import React, { useState } from 'react';
import './styling/carouselGallery.scss';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import imageData from '../data/carouselDataGallery.json'

const CarouselGallery = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.slides.length - 1 ? 0 : slide + 1);
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? data.slides.length - 1 : slide - 1);
  }

  const slideImages = imageData.slides;

  return (
    <div className='carousel'>
    <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} />
    {slideImages.map((img, index) => {
      return (
        <img
          src={process.env.PUBLIC_URL + img.src}
          alt={img.alt}
          key={index}
          className={slide === index ? 'slide' : 'slide-hidden'} />
        );
    })}
    <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} />
    <span className='indicators'>
      {slideImages.map((_, index) => {
        return (
          <button
            key={index}
            onClick={() => setSlide(index)}
            className={slide === index ? 'indicator' : 'indicator-inactive'}>
          </button>
        );
      })}
    </span>
    </div>
  );
};


export default CarouselGallery;
