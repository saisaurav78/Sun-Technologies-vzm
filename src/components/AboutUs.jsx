import React from 'react';

const AboutUs = () => {
  return (
    <section className='container mx-auto px-4 mt-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-8' id="about">
      {/* Text Section */}
      <div className='text-center lg:text-left text-customBlue lg:ml-20 '>
        <h1 className='text-4xl lg:text-6xl  mb-6'>About Us</h1>
        <p className='text-lg font-medium mb-4 lg:leading-loose text-customBlack tex-pretty'>
          At Sun Technologies, we specialize in delivering high-quality IT peripherals, accessories,
          and cutting-edge security solutions to cater to all your technological needs. Based in
          Vizianagaram, we pride ourselves on offering reliable, innovative, and cost-effective
          products that empower businesses, professionals, and individuals alike. Our mission is to
          enhance your efficiency, productivity, and security through our curated range of IT
          solutions. Whether you need the latest computer peripherals, advanced surveillance
          systems, or accessories to optimize your work environment, Sun Technologies has you
          covered.
        </p>
        <span className='text-3xl font-semibold block mt-4'>Your satisfaction is our priority!</span>
      </div>

      {/* Image Section */}
      <div className='w-full h-auto flex justify-center'>
        <img
          src='/images/store-images/suntechnologies_img.png'
          alt='Sun Technologies Vizianagaram'
          className='lg:w-[38vw]  lg:max-w-full object-cover rounded-lg shadow-lg lg:ml-20'
        />
      </div>
    </section>
  );
};

export default AboutUs;
