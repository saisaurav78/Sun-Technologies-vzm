import React from 'react';

const Brands = () => {
  const categories = [
    { src: '/images/categories/Monitors.png', alt: 'Monitors Image', name: 'Monitors' },
    {
      src: '/images/categories/peripherals.png',
      alt: 'IT accessories and peripherals',
      name: 'IT Peripherals',
    },
    { src: '/images/categories/cctv.png', alt: 'CCTV Image', name: 'CCTV' },
    {
      src: '/images/categories/components.png',
      alt: 'Computer Components',
      name: 'All CPU, GPU Components',
    },
    { src: '/images/categories/motherboards.png', alt: 'Motherboards Image', name: 'Motherboards' },
  ];

  return (
    <section className='container flex flex-col justify-evenly items-center lg:mt-5 text-center mx-auto' id="services">
      <h1 className='text-customBlue lg:text-6xl text-4xl'>Categories</h1>
      <div className='flex flex-wrap justify-center gap-4 items-center mt-10 mx-auto w-full'>
        {categories.map((category, index) => (
          <figure
            key={index}
            className='hover:-translate-y-2 duration-300 transition-all ease-in-out flex flex-col justify-between items-center p-6 lg:p-10 max-w-xs'
          >
            <img loading='lazy' className='object-contain max-h-48' src={category.src} alt={category.alt} />
            <figcaption className='text-lg p-2'>{category.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Brands;
