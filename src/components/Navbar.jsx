'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import { FaClock } from 'react-icons/fa6';


const NavItem = ({ to, children }) => (
  <Link className='hover:text-customBlue' href={'#'+to} children={children}/>

);

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50'>
      {/* Top Bar */}
      <div className='bg-customBlack text-white'>
        <div className='flex flex-col lg:flex-row justify-between items-center px-4 py-2 gap-2'>
          {/* Opening Hours */}
          <div className='flex items-center gap-2'>
            <FaClock className='text-lg' />
            <span className='text-sm lg:text-base font-medium'>
              We are open: Monday - Sunday, 10:00 AM - 10:00 PM
            </span>
          </div>

          {/* Email Section */}
          <div className='flex items-center gap-2'>
            <CiMail className='text-lg' />
            <a
              href='mailto:suntechnologies.vzm@gmail.com'
              className='underline text-sm lg:text-base hover:text-gray-300'
            >
              suntechnologies.vzm@gmail.com
            </a>
          </div>

          {/* Chat Section */}
          <div className='flex items-center gap-2'>
            <span className='text-sm lg:text-base'>💬 Chat with us:</span>
            <a
              target='_blank'
              href='https://api.whatsapp.com/send/?phone=%2B918977760871&text=Hi%2C+I%27m+interested+to+know+more+about&type=phone_number&app_absent=0'
              className='text-green-500 hover:text-green-400 transition-all duration-200'
            >
              <FaWhatsapp className='text-2xl' />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className='bg-white shadow-md'>
        <div className='flex items-center justify-between px-4 py-3'>
          {/* Logo */}
          <span className='text-xl font-semibold text-customBlue whitespace-nowrap'>
            Sun Technologies
          </span>

          {/* Desktop Navigation */}
          <div className='hidden md:flex flex-1 justify-center space-x-6'>
            <NavItem to='home'>Home</NavItem>
            <NavItem to='about'>About Us</NavItem>
            <NavItem to='services'>Services</NavItem>
            <NavItem to='contact'>Contact Us</NavItem>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className='md:hidden text-customBlack hover:text-customBlue focus:outline-none'
            aria-label='Toggle Menu'
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className='flex flex-col bg-gray-100 p-4 space-y-4 md:hidden shadow-md'>
          <NavItem to='home'>Home</NavItem>
          <NavItem to='about'>About Us</NavItem>
          <NavItem to='services'>Services</NavItem>
          <NavItem to='contact'>Contact Us</NavItem>
        </div>
      )}
    </header>
  );
};

export default Navbar;
