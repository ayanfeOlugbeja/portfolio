import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const mobileNavRef = useRef();
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

    document.addEventListener('mousedown', closeMobileNav);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      document.removeEventListener('mousedown', closeMobileNav);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [isMobileNavOpen]);

  const navLinks = [
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' },
    { path: '/projects', name: 'Projects' },
  ];
  return (
    <nav>
      <div
        className='bg-transparent-100 relative flex items-center  sm:hidden h-24 mr-2'
        style={{ borderBottom: '1px solid #9ca3bf' }}>
        {!isHomePage && (
          <div className='sm:hidden'>
            <button className='p-2 hamburger-menu' onClick={toggleMobileNav}>
              <svg
                className='w-6 h-6'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                {isMobileNavOpen ? (
                  // <path d='M4 6h16M4 12h16M4 18h16'></path>
                  <path d='M6 18L18 6M6 6l12 12'></path>
                ) : (
                  <path d='M4 6h16M4 12h16M4 18h16'></path>
                )}
              </svg>
            </button>
          </div>
        )}
        {!isHomePage ? (
          <div className='block sm:hidden text-xl font-semibold ml-3 tracking-wide'>
            <Link to='/' style={{ color: '#3b82f6' }}>Aiyedogbon</Link>
          </div>
        ) : (
          <div className='block sm:hidden text-xl font-semibold ml-3 text-red-500 tracking-wide'>
            <Link to='/'>
              Aiyedogbon
            </Link>
          </div>
        )}
        <a
          href='https://docs.google.com/document/d/1GjQEfE7ynZ82Pjl9miXdwVkr9kFj3_v8Hhoih1d46z0/edit?usp=sharing'
          className='ml-auto block sm:hidden'>
          Resume
        </a>
        {!isHomePage && isMobileNavOpen && (
          <>
            <div className='relative top-0 left-0 right-0 bottom-0 bg-black  z-50 sm:hidden shadow-md'></div>

            <div
              className='absolute top-24 left-0 right-0 bottom-0 w-[55%] h-screen bg-white z-50 transition-transform  duration-300 ease-in-out transform sm:hidden  shadow-md mobile-nav-content'
              ref={mobileNavRef}>
              <ul className='p-4 '>
                {navLinks.map((link) => (
                  <li key={link.path} className='mb-7'>
                    <Link
                      to={link.path}
                      className='text-gray-700 hover:text-gray-900 text-lg font-semibold'
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
            </div>
          </>
        )}
      </div>

      <div
        className=' hidden sm:flex flex-col items-center'
        style={{ height: '130px', borderBottom: '4px solid #3b82f6' }}>
        <div className='flex space-x-4 sm:tracking-3 text-xl mt-4 sm:mt-1 sm:ml-auto sm:mr-4 sm:space-x-5'>
          {!isHomePage && (
            <Link
              to='/'
              className='border-b-2 border-blue-500 lg:text-lg text-base'>
              Home
            </Link>
          )}
          {navLinks.map((link) => {
            if (link.path !== location.pathname) {
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className=' border-b-2 border-blue-500 lg:text-lg text-base text-gray-700'>
                  {link.name}
                </Link>
              );
            }
            return null;
          })}
        </div>
        {!isHomePage && (
          <div className='mt-4 mb-0 hidden sm:block'>
            <p className='text-gray-700  text-base'>
              <Link to='/' className='font-semibold'>
                aiyedogbonabraham.com
              </Link>{' '}
              ➡{location.pathname.substring(1)}
            </p>
          </div>
        )}
        {isHomePage && (
          <div className='mt-4'>
            <p className='text-gray-700 hidden sm:block  text-base'>
              Welcome to my{' '}
              <span className=' font-semibold' style={{ color: '#3b82f6' }}>
                utopia
              </span>
            </p>
          </div>
        )}

        <div className='my-3  font-bold text-3xl'>
          <h2 className='text-gray-700 flex justify-center items-center'>
            <Link to='/'>AIYEDOGBON</Link>
          </h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
