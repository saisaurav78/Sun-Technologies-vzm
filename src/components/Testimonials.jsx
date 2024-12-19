import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed:500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: true,
    fade: true,
  };

  const testimonials = [
    {
      id: 1,
      image: '/images/Testimonials/User-1.png',
      alt: 'User 1 Profile Picture',
      date: 'May 2024',
      title: 'Excellent Service!',
      description:
        'Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.',
    },
    {
      id: 2,
      image: '/images/Testimonials/User-2.png',
      alt: 'User 2 Profile Picture',
      date: 'June 2024',
      title: 'Highly Recommended!',
      description:
        'Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.',
    },
    {
      id: 3,
      image: '/images/Testimonials/User-3.png',
      alt: 'User 3 Profile Picture',
      date: 'July 2024',
      title: 'Amazing Quality!',
      description:
        'Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.',
    },
    {
      id: 4,
      image: '/images/Testimonials/User-1.png',
      alt: 'User 4 Profile Picture',
      date: 'July 2024',
      title: 'Best Service!',
      description:
        'Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.',
    },
  ];

  return (
    <section className='container mx-auto flex flex-col justify-center items-center p-20'>
      {/* Section Title */}
      <h1 className='text-customBlue text-4xl lg:text-6xl'>Testimonials</h1>

      {/* Slider */}
      <Slider className='lg:w-[60vw] w-[80vw] p-5 mt-10' {...settings}>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className='flex flex-row items-center justify-center rounded-l-2xl '
          >
            {/* <div className="grid grid-cols-3 lg:max-w-[70vw] max-w-[50vw]  border-gray-300 border-2 rounded-2xl"> */}
            <div className='grid grid-cols-1 lg:h-max sm:grid-cols-2 md:grid-cols-3 lg:max-w-[70vw] sm:max-w-[80vw] max-w-[90vw] sm:h-[50vh] md:h-[60vh] h-auto border-gray-300 border-2 rounded-2xl'>
              {/* Image Section */}
              <div className='flex items-center justify-center'>
                <img loading='lazy'
                  className='w-full h-auto object-contain rounded-sm'
                  src={testimonial.image}
                  alt={testimonial.alt}
                />
              </div>

              {/* Content Section */}
              <div className='col-span-2 flex flex-col justify-center items-center mx-auto p-4'>
                <span className='text-md text-customBlack'>{testimonial.date}</span>
                <h3 className='text-2xl font-bold text-customBlue mt-2'>{testimonial.title}</h3>
                <p className='text-customBlack font-light w-full text-balance text-center p-5'>
                  {testimonial.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
