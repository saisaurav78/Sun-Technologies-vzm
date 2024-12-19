'use client';

import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Herobutton from './Herobutton';

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: true,
    fade: true,
  };

  return (
    <section id="home">
      <Slider {...settings}>
        <div>
          <div className='relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex flex-col justify-center items-center'>
            <img
              alt='Hero image of IT Sales and Services'
              src='/images/Carousel/hero-image.png'
              className='w-full h-full object-cover'
              loading='lazy'
            />
            <div className='absolute flex flex-col justify-center items-center text-center px-4'>
              <h1 className='text-customBlack text-2xl md:text-3xl lg:text-4xl xl:text-6xl mt-[-10%] mb-2'>
                We Deal with IT Sales and Services
              </h1>
              <div className='mt-4'>
                <Herobutton />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex flex-col justify-center items-center'>
            <img 
              alt='Hero image of IT Sales and Services'
              src='/images/Carousel/hero-image-2.jpg'
              className='w-full h-full object-cover'
              loading='lazy'
            />
          </div>
        </div>
        <div>
          <div className='relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex flex-col justify-center items-center'>
            <img
              alt='Hero image of IT Sales and Services'
              src='/images/Carousel/hero-image-3.jpg'
              className='w-full h-full object-cover'
              loading='lazy'
            />
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default HeroSection;
