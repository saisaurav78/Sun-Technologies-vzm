import axios from 'axios';
import React, { useState } from 'react';

const ContactUs = () => {
  const [data, setData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState(''); // Add error state
  const [success, setSuccess] = useState(''); // Add success state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    setSuccess('')
    setLoading(true); // Set loading to true when submitting

    try {
      // Change the URL to your Next.js API route
      const response = await axios.post('/api/email', data);
      if (response.status === 200) {
        setSuccess(response.data.message || 'Message sent successfully!');
        alert('Form submitted successfully, We will get back to you.');
         setData({
           email: '',
           subject: '',
           message: '',
         });
     }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send Message. Please try again later.');
    } finally {
      setLoading(false); // Set loading to false after completing the request
    }
  };

  return (
    <section className='p-4 lg:p-0 mb-10' id="contact">
      <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
        <h1 className='mb-4 lg:text-6xl text-4xl text-center text-customBlue'>Contact Us</h1>
        <p className='mb-8 lg:mb-12 font-normal text-center text-customBlack sm:text-xl lg:text-pretty'>
          Need help with our services or have a query? Contact Sun Technologies—we’re here to
          assist!
        </p>
        <form onSubmit={handleSubmit} className='space-y-8'>
          <div>
            <label htmlFor='email' className='block mb-2 text-md font-medium text-customBlack'>
              Your email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={data.email}
              onChange={handleChange}
              className='shadow-sm bg-gray-50 border border-gray-300 text-customBlack text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
              placeholder='name@yahoo.com'
              required
            />
          </div>
          <div>
            <label htmlFor='subject' className='block mb-2 text-md font-medium text-customBlack'>
              Subject
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              value={data.subject}
              onChange={handleChange}
              className='block p-3 w-full text-sm text-customBlack bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500'
              placeholder='Let us know how we can help you'
              required
            />
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor='message' className='block mb-2 text-md font-medium text-customBlack'>
              Your message
            </label>
            <textarea
              id='message'
              name='message'
              value={data.message}
              onChange={handleChange}
              rows='6'
              className='block p-2.5 w-full text-sm text-customBlack bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
              placeholder='Leave a comment...'
              required
            ></textarea>
          </div>
          <button
            type='submit'
            className='py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-customBlue sm:w-fit hover:bg-customBlack transition-all ease-in-out duration-200 flex items-center justify-center
            min-w-20 min-h-12'
            // Fixed width and height
            disabled={loading}
          >
            {loading ? (
              <div
                className='w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin'
                aria-label='Loading spinner'
              ></div>
            ) : (
              'Send Message'
            )}
          </button>
        </form>

        {/* Show success or error messages */}
        {success && <p className='text-green-500'>{success}</p>}
        {error && <p className='text-red-500'>{error}</p>}
      </div>
    </section>
  );
};

export default ContactUs;
