import { Link, useLocation } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  // Toggle Mobile Navigation
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
    if (!isMobileNavOpen) {
      document.body.style.overflow = 'hidden' // Prevent background scroll when nav is open
    } else {
      document.body.style.overflow = 'auto' // Allow scroll when nav is closed
    }
  }

  const mobileNavRef = useRef()

  // Handle Clicks Outside the Mobile Nav and Location Changes
  useEffect(() => {
    const closeMobileNav = (event) => {
      if (
        isMobileNavOpen &&
        !event.target.closest('.hamburger-menu') &&
        !event.target.closest('.mobile-nav-content')
      ) {
        setIsMobileNavOpen(false)
        document.body.style.overflow = 'auto'
      }
    }

    const handleOrientationChange = () => {
      setIsMobileNavOpen(false)
      document.body.style.overflow = 'auto'
    }

    const handleLocationChange = () => {
      setIsMobileNavOpen(false)
      document.body.style.overflow = 'auto'
    }

    document.addEventListener('mousedown', closeMobileNav)
    window.addEventListener('orientationchange', handleOrientationChange)
    window.addEventListener('popstate', handleLocationChange)

    return () => {
      document.removeEventListener('mousedown', closeMobileNav)
      window.removeEventListener('orientationchange', handleOrientationChange)
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [isMobileNavOpen])

  // Navigation Links
  const navLinks = [
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' },
    { path: '/projects', name: 'Projects' },
  ]

  // Determine the text based on the current route
  const getNavText = () => {
    if (location.pathname === '/about') return 'About'
    if (location.pathname === '/contact') return 'Contact'
    if (location.pathname === '/projects') return 'Projects'
    return 'Aiyedogbon' // Default text
  }

  return (
    <nav className='relative z-50'>
      {/* Mobile Navbar */}
      <div className='bg-transparent relative flex items-center h-16 sm:hidden px-4'>
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
                strokeLinejoin='round'
              >
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
          <h2 style={{ color: isHomePage ? '#ff3b30' : '#3b82f6' }}>
            {getNavText()}
          </h2>
        </div>

        {/* Resume Link */}
        <a
          href='https://docs.google.com/document/d/1vjjUT7fc2KLVMcgYZqwl2RtEEoDPu_0FRQBVpHzwYMQ/edit?usp=sharing'
          className='ml-auto text-gray-700 hover:text-blue-500 transition-colors duration-300'
        >
          Resume
        </a>

        {/* Mobile Nav Menu */}
        {isMobileNavOpen && !isHomePage && (
          <>
            <div className='fixed inset-0 bg-black opacity-50 z-40 sm:hidden'></div>

            <div
              className={`absolute top-16 left-0 right-0 bottom-0 w-[70%] h-screen overflow-y-auto bg-gradient-to-b from-blue-500 to-blue-900 z-50 shadow-md transform transition-transform duration-500 ease-in-out ${
                isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'
              } mobile-nav-content`}
              ref={mobileNavRef}
            >
              {/* Introduction/Tagline */}
              <div className='px-6 pt-6 text-white text-lg font-medium'>
                {/* <p>Aiyedogbon Abraham</p> */}
              </div>

              <ul className='px-6 pt-4 space-y-8'>
                <li className='text-lg'>
                  <Link
                    to='/'
                    className='text-white hover:text-gray-300 transition-colors duration-300 font-semibold tracking-wider'
                    onClick={() => {
                      setIsMobileNavOpen(false)
                      document.body.style.overflow = 'auto'
                    }}
                  >
                    Home{' '}
                    {location.pathname === '/' && (
                      <span className='absolute right-4'>▪</span>
                    )}
                  </Link>
                </li>
                {navLinks.map((link) => (
                  <li key={link.path} className='text-lg'>
                    <Link
                      to={link.path}
                      className='text-white hover:text-gray-300 transition-colors duration-300 font-semibold tracking-wider'
                      onClick={() => {
                        setIsMobileNavOpen(false)
                        document.body.style.overflow = 'auto'
                      }}
                    >
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
                  className='block text-center py-3 px-6 bg-white text-blue-600 font-semibold rounded-md shadow hover:bg-gray-100 transition-colors duration-300'
                >
                  Get In Touch
                </a>
              </div>

              {/* Social Media Links */}
              <div className='absolute top-96 px-6'>
                <div className='flex space-x-4 text-white'>
                  <a
                    href='https://www.linkedin.com/in/aiyedogbon'
                    className='hover:text-gray-300 transition-colors duration-300'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg
                      className='w-6 h-6 bg-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.22.8 24 1.77 24h20.45c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zm-13.84 20.42h-3.7V9.23h3.7v11.19zM7.48 7.66H7.45C6.33 7.66 5.5 6.82 5.5 5.74s.82-1.93 1.95-1.93c1.13 0 1.95.86 1.98 1.94 0 1.08-.85 1.91-1.95 1.91zM20.43 20.42h-3.7V14.9c0-1.31-.47-2.2-1.65-2.2-.9 0-1.43.61-1.66 1.21-.08.19-.1.45-.1.71v6.8h-3.7s.05-11.03 0-12.18h3.7v1.73c.49-.76 1.37-1.83 3.34-1.83 2.44 0 4.27 1.59 4.27 5.01v7.27h-.01z' />
                    </svg>
                  </a>
                  <a
                    href='https://twitter.com/joshuaAAbraham?s=20'
                    className='hover:text-gray-300 transition-colors duration-300'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg
                      className='w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors duration-300 bg-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M22.46 6.11c-.77.34-1.6.57-2.47.67a4.2 4.2 0 001.82-2.32 8.22 8.22 0 01-2.6.99A4.1 4.1 0 0015.83 4c-2.27 0-4.11 1.82-4.11 4.07 0 .32.04.63.1.92A11.65 11.65 0 012.12 4.71a4.03 4.03 0 00-.56 2.05c0 1.41.73 2.65 1.84 3.38a4.1 4.1 0 01-1.86-.5v.05c0 1.97 1.42 3.6 3.31 3.97-.34.09-.7.14-1.06.14-.26 0-.52-.02-.77-.07a4.09 4.09 0 003.83 2.83A8.27 8.27 0 010 19.56a11.63 11.63 0 006.29 1.84c7.55 0 11.68-6.18 11.68-11.54 0-.18-.01-.36-.02-.53a8.29 8.29 0 002.04-2.1z' />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Desktop Navbar */}
      <div
        className='hidden sm:flex flex-col items-center'
        style={{ height: '130px' }}
      >
        <div className='flex space-x-4 sm:tracking-3 text-xl mt-4 sm:mt-1 sm:ml-auto sm:mr-4 sm:space-x-5'>
          {/* Home Link */}
          {!isHomePage && (
            <Link
              to='/'
              className='border-b-2 border-transparent hover:border-blue-500 transition duration-300 lg:text-lg text-base'
            >
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
                  className='border-b-2 border-transparent hover:border-blue-500 transition duration-300 lg:text-lg text-base text-gray-700'
                >
                  {link.name}
                </Link>
              )
            }
            return null
          })}

          <a
            href='https://docs.google.com/document/d/1vjjUT7fc2KLVMcgYZqwl2RtEEoDPu_0FRQBVpHzwYMQ/edit?usp=sharing'
            className='border-b-2 border-transparent hover:border-blue-500 transition duration-300 lg:text-lg text-base'
          >
            Resume
          </a>
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
              {/* Welcome to my{' '} */}
              <span className='font-semibold' style={{ color: '#3b82f6' }}>
                Introduction
              </span>
            </p>
          </div>
        )}

        {/* Main Logo */}
        <div className='my-3 font-bold text-3xl'>
          <h2 className='text-gray-700 flex justify-center items-center'>
            <h2 className='text-transform: uppercase'> {getNavText()} </h2>
          </h2>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
