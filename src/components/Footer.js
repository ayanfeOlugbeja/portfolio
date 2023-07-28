import { Link } from 'react-router-dom';
import React from 'react';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className='footer h-80' style={{ background: '#f8f9fa' }}>
      <div className='flex flex-col items-center justify-between space-x-3 my-3'>
        <h1
          className=' font-bold text-3xl mt-6 mb-2'
          style={{ color: '#3b82f6' }}
          onClick={scrollToTop}>
          Aiyedogbon
        </h1>
        <div className='links text-gray-700 text-base flex flex-col items-center my-5'>
          <Link to='/about' className='mb-4' onClick={scrollToTop}>
            About
          </Link>
          <a href='https://hashnode.com/@AiyedogbonAbraham' className='mb-4'>
            Blog
          </a>
          <Link to='/contact' className='mb-4' onClick={scrollToTop}>
            Contact
          </Link>
          <Link to='/projects' onClick={scrollToTop}>
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
