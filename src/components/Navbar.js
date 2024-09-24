import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Toggle Mobile Navigation
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const mobileNavRef = useRef();

  // Handle Clicks Outside the Mobile Nav and Location Changes
  useEffect(() => {
    const closeMobileNav = (event) => {
      if (
        isMobileNavOpen &&
        !event.target.closest('.hamburger-menu') &&
        !event.target.closest('.mobile-nav-content')
      ) {
        setIsMobileNavOpen(false);
      }
    };

    const handleOrientationChange = () => {
      setIsMobileNavOpen(false);
    };

    const handleLocationChange = () => {
      setIsMobileNavOpen(false);
    };

    document.addEventListener('mousedown', closeMobileNav);
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      document.removeEventListener('mousedown', closeMobileNav);
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, [isMobileNavOpen]);

  // Navigation Links
  const navLinks = [
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' },
    { path: '/projects', name: 'Projects' },
  ];

  return (
    <nav className='relative z-50'>
      {/* Mobile Navbar */}
      <div
        className='bg-transparent relative flex items-center h-16 sm:hidden px-4'
        style={{ borderBottom: '1px solid #9ca3bf' }}>
        {/* Hamburger Menu for Mobile */}
        {!isHomePage && (
          <div className='sm:hidden'>
            <button className='p-2 hamburger-menu' onClick={toggleMobileNav}>
              <svg
                className={`w-8 h-8 transition-transform duration-300 ease-in-out transform ${
                  isMobileNavOpen ? 'rotate-45' : 'rotate-0'
                }`}
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                {isMobileNavOpen ? (
                  <path d='M6 18L18 6M6 6l12 12'></path>
                ) : (
                  <path d='M4 6h16M4 12h16M4 18h16'></path>
                )}
              </svg>
            </button>
          </div>
        )}

        {/* Brand Logo Link */}
        <div className='text-xl font-semibold ml-3 tracking-wide'>
          <Link to='/' style={{ color: isHomePage ? '#ff3b30' : '#3b82f6' }}>
            Aiyedogbon
          </Link>
        </div>

        {/* Resume Link */}
        <a
          href='https://docs.google.com/document/d/1GjQEfE7ynZ82Pjl9miXdwVkr9kFj3_v8Hhoih1d46z0/edit?usp=sharing'
          className='ml-auto text-gray-700 hover:text-blue-500 transition-colors duration-300'>
          Resume
        </a>

        {/* Mobile Nav Menu */}
        {isMobileNavOpen && !isHomePage && (
          <>
            <div className='fixed inset-0 bg-black opacity-50 z-40 sm:hidden'></div>

            <div
              className={`absolute top-16 left-0 right-0 bottom-0 w-[70%] h-screen bg-gradient-to-b from-blue-500 to-blue-900 z-50 shadow-md transform transition-transform duration-500 ease-in-out ${
                isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'
              } mobile-nav-content`}
              ref={mobileNavRef}>
              {/* Introduction/Tagline */}
              <div className='px-6 pt-6 text-white text-lg font-medium'>
                <p>Aiyedogbon Abraham</p>
              </div>

              <ul className='px-6 pt-4 space-y-8'>
                {navLinks.map((link) => (
                  <li key={link.path} className='text-lg'>
                    <Link
                      to={link.path}
                      className='text-white hover:text-gray-300 transition-colors duration-300 font-semibold tracking-wider'
                      onClick={() => {
                        setIsMobileNavOpen(false);
                      }}>
                      {link.name}
                      {location.pathname === link.path && (
                        <span className='absolute right-4'>▪</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className='mt-8 px-6'>
                <a
                  href='mailto:aiyedogbonabraham@gmail.com'
                  className='block text-center py-3 px-6 bg-white text-blue-600 font-semibold rounded-md shadow hover:bg-gray-100 transition-colors duration-300'>
                  Get In Touch
                </a>
              </div>

              {/* Social Media Links */}
              <div className='absolute bottom-6 px-6'>
                <div className='flex space-x-4 text-white'>
                  <a
                    href='https://www.linkedin.com/in/abraham-aiyedogbon-9a7095282'
                    className='hover:text-gray-300 transition-colors duration-300'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <svg
                      className='w-6 h-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M16 8a6 6 0 00-12 0v6a6 6 0 0012 0V8z'
                      />
                    </svg>
                  </a>
                  <a
                    href='https://twitter.com/your-profile'
                    className='hover:text-gray-300 transition-colors duration-300'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <svg
                      className='w-6 h-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M18 2a10 10 0 01-10 10H4a10 10 0 1114-8v0'
                      />
                    </svg>
                  </a>
                  {/* Add other social media icons here */}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Desktop Navbar */}
      <div
        className='hidden sm:flex flex-col items-center'
        style={{ height: '130px', borderBottom: '4px solid #3b82f6' }}>
        <div className='flex space-x-4 sm:tracking-3 text-xl mt-4 sm:mt-1 sm:ml-auto sm:mr-4 sm:space-x-5'>
          {/* Home Link */}
          {!isHomePage && (
            <Link
              to='/'
              className='border-b-2 border-transparent hover:border-blue-500 transition duration-300 lg:text-lg text-base'>
              Home
            </Link>
          )}
          {/* Other Navigation Links */}
          {navLinks.map((link) => {
            if (link.path !== location.pathname) {
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className='border-b-2 border-transparent hover:border-blue-500 transition duration-300 lg:text-lg text-base text-gray-700'>
                  {link.name}
                </Link>
              );
            }
            return null;
          })}
        </div>

        {/* Current Path */}
        {!isHomePage && (
          <div className='mt-4 mb-0 hidden sm:block'>
            <p className='text-gray-700 text-base'>
              <Link to='/' className='font-semibold'>
                aiyedogbonabraham.pro
              </Link>{' '}
              ➡ {location.pathname.substring(1)}
            </p>
          </div>
        )}

        {/* Home Page Welcome Text */}
        {isHomePage && (
          <div className='mt-4'>
            <p className='text-gray-700 hidden sm:block text-base'>
              Welcome to my{' '}
              <span className='font-semibold' style={{ color: '#3b82f6' }}>
                utopia
              </span>
            </p>
          </div>
        )}

        {/* Main Logo */}
        <div className='my-3 font-bold text-3xl'>
          <h2 className='text-gray-700 flex justify-center items-center'>
            <Link to='/'>AIYEDOGBON</Link>
          </h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
