import React from 'react';

const Brands = () => {
  const brandLogos = [
    { src: '/images/brands-logo/logitech.png', alt: 'Logitech Logo' },
    { src: '/images/brands-logo/zebronics.png', alt: 'Zebronics Logo' },
    { src: '/images/brands-logo/tplink.png', alt: 'TP-Link Logo' },
    { src: '/images/brands-logo/hp.png', alt: 'HP Logo' },
    { src: '/images/brands-logo/dlink.png', alt: 'D-Link Logo' },
  ];

  return (
    <section className='container flex flex-col justify-evenly items-center mt-10 lg:p-32 text-center mb-8 mx-auto'>
      <h2 className='text-customBlue lg:text-6xl text-4xl text-nowrap'>Brands We Offer</h2>
      <ul className='flex flex-col lg:flex-row justify-center lg:flex-wrap lg:gap-12 lg:justify-evenly items-center lg:mt-16 mx-auto w-full'>
        {brandLogos.map((logo, index) => (
          <li key={index} className='transition-all ease-linear  flex justify-center items-center'>
            <img loading='lazy' className='object-contain p-5 max-w-[50vw] mx-auto' src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Brands;
