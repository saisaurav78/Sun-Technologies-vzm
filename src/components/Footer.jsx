import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaLinkedinIn, FaFacebook, FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <footer className='bg-customBlack'>
        <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
          <div className='md:flex md:justify-between'>
            <div className='mb-6 md:mb-0'>
              <h2 className='text-2xl text-center font-semibold text-white'>Find Us On</h2>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.00121630283613!2d83.41484088309126!3d18.116892507210263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be5510d21009b%3A0xc2d4a4d3a9a71997!2sSuntechnologies!5e0!3m2!1sen!2sin!4v1734588329319!5m2!1sen!2sin'
                width='250'
                height='250'
                className='border-0'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>

            {/* Footer Links */}
            <div className='grid grid-cols-2 space-x-10 gap-8 sm:gap-6 sm:grid-cols-3'>
              {/* Quick Links */}
              <div>
                <h2 className='mb-6 text-lg font-semibold text-white'>Quick Links</h2>
                <ul className='text-white font-medium space-y-2'>
                  <FooterLink href='#home'>Home</FooterLink>
                  <FooterLink href='#about'>About</FooterLink>
                  <FooterLink href='#services'>Services</FooterLink>
                  <FooterLink href='#contact'>Contact Us</FooterLink>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h2 className='mb-6 text-lg font-semibold text-white'>Legal</h2>
                <ul className='text-white font-medium space-y-2'>
                  <FooterLink href='#'>Privacy Policy</FooterLink>
                  <FooterLink href='#'>T & C</FooterLink>
                  <FooterLink href='#'>Refund Policy</FooterLink>
                </ul>
              </div>

              {/* Follow Us */}
              <div className='max-w-full'>
                <h2 className='mb-6 text-lg font-semibold text-white text-center lg:text-left'>
                  Follow us
                </h2>
                <ul className='grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:gap-5 justify-center lg:justify-start items-center lg:items-start text-white font-medium'>
                  <li className='flex justify-center items-center'>
                    <Link
                      href='https://instagram.com'
                      target='_blank'
                      aria-label='Visit Instagram'
                      className='flex items-center'
                    >
                      <FaInstagram className='mr-2 text-pink-500' size={20} />
                      <span className='hidden lg:inline'>Instagram</span>
                    </Link>
                  </li>
                  <li className='flex justify-center items-center'>
                    <Link
                      href='https://twitter.com'
                      target='_blank'
                      aria-label='Visit Twitter'
                      className='flex items-center'
                    >
                      <FaSquareXTwitter className='mr-2 text-blue-400' size={20} />
                      <span className='hidden lg:inline'>Twitter</span>
                    </Link>
                  </li>
                  <li className='flex justify-center items-center'>
                    <Link
                      href='https://facebook.com'
                      target='_blank'
                      aria-label='Visit Facebook'
                      className='flex items-center'
                    >
                      <FaFacebook className='mr-2 text-blue-600' size={20} />
                      <span className='hidden lg:inline'>Facebook</span>
                    </Link>
                  </li>
                  <li className='flex justify-center items-center'>
                    <Link
                      href='https://linkedin.com/in/'
                      target='_blank'
                      aria-label='Visit LinkedIn'
                      className='flex items-center'
                    >
                      <FaLinkedinIn className='mr-2 text-blue-500' size={20} />
                      <span className='hidden lg:inline'>LinkedIn</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <hr className='my-6 border-gray-400 sm:mx-auto lg:my-8' />
          <div className='sm:flex sm:items-center sm:justify-between'>
            <span className='text-sm text-white lg:text-center sm:text-center'>
              © {new Date().getFullYear()} Sun Technologies Vzm All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

// Reusable Footer Link Component
const FooterLink = ({ href, children }) => (
  <li>
    <Link href={href} className='hover:underline text-white font-medium'>
      {children}
    </Link>
  </li>
);

export default Footer;
