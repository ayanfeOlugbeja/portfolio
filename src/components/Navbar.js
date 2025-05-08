import { Link, useLocation } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Toggle Mobile Navigation
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
    document.body.style.overflow = !isMobileNavOpen ? 'hidden' : 'auto'
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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      {/* Mobile Navbar */}
      <div className='relative flex items-center h-16 sm:hidden px-4'>
        {/* Hamburger Menu for Mobile */}
        {!isHomePage && (
          <button
            className='p-2 hamburger-menu focus:outline-none'
            onClick={toggleMobileNav}
            aria-label='Toggle navigation menu'
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ease-in-out transform ${
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
        )}

        {/* Brand Logo Link */}
        <div className='text-xl font-medium ml-3 tracking-tight'>
          <h2 className={scrolled ? 'text-black' : 'text-white'}>
            {location.pathname === '/'
              ? 'Aiyedogbon'
              : location.pathname.slice(1)}
          </h2>
        </div>

        {/* Resume Link */}
        <a
          href='https://docs.google.com/document/d/1vjjUT7fc2KLVMcgYZqwl2RtEEoDPu_0FRQBVpHzwYMQ/edit?usp=sharing'
          className={`ml-auto transition-colors duration-300 ${
            scrolled
              ? 'text-black hover:text-gray-600'
              : 'text-white hover:text-gray-200'
          }`}
        >
          Resume
        </a>

        {/* Mobile Nav Menu */}
        {isMobileNavOpen && !isHomePage && (
          <>
            <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 sm:hidden'></div>
            <div
              className={`fixed top-0 left-0 w-[280px] h-screen bg-white z-50 transform transition-transform duration-300 ease-in-out ${
                isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'
              } mobile-nav-content`}
              ref={mobileNavRef}
            >
              <div className='p-6'>
                <ul className='space-y-6'>
                  <li>
                    <Link
                      to='/'
                      className='block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200'
                      onClick={() => {
                        setIsMobileNavOpen(false)
                        document.body.style.overflow = 'auto'
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className={`block text-lg font-medium transition-colors duration-200 ${
                          location.pathname === link.path
                            ? 'text-blue-600'
                            : 'text-gray-900 hover:text-blue-600'
                        }`}
                        onClick={() => {
                          setIsMobileNavOpen(false)
                          document.body.style.overflow = 'auto'
                        }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className='mt-8'>
                  <a
                    href='mailto:aiyedogbonabraham@gmail.com'
                    className='block w-full text-center py-3 px-6 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200'
                  >
                    Get In Touch
                  </a>
                </div>

                {/* Social Media Links */}
                <div className='mt-8 flex space-x-4'>
                  <a
                    href='https://www.linkedin.com/in/aiyedogbon'
                    className='text-gray-600 hover:text-blue-600 transition-colors duration-200'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg
                      className='w-6 h-6'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.22.8 24 1.77 24h20.45c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zm-13.84 20.42h-3.7V9.23h3.7v11.19zM7.48 7.66H7.45C6.33 7.66 5.5 6.82 5.5 5.74s.82-1.93 1.95-1.93c1.13 0 1.95.86 1.98 1.94 0 1.08-.85 1.91-1.95 1.91zM20.43 20.42h-3.7V14.9c0-1.31-.47-2.2-1.65-2.2-.9 0-1.43.61-1.66 1.21-.08.19-.1.45-.1.71v6.8h-3.7s.05-11.03 0-12.18h3.7v1.73c.49-.76 1.37-1.83 3.34-1.83 2.44 0 4.27 1.59 4.27 5.01v7.27h-.01z' />
                    </svg>
                  </a>
                  <a
                    href='https://twitter.com/joshuaAAbraham?s=20'
                    className='text-gray-600 hover:text-blue-600 transition-colors duration-200'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg
                      className='w-6 h-6'
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
      <div className='hidden sm:block'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex-shrink-0'>
              <Link to='/' className='text-xl font-medium tracking-tight'>
                Aiyedogbon
              </Link>
            </div>
            <div className='hidden sm:flex sm:space-x-8'>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-blue-600'
                      : 'text-gray-900 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href='https://docs.google.com/document/d/1vjjUT7fc2KLVMcgYZqwl2RtEEoDPu_0FRQBVpHzwYMQ/edit?usp=sharing'
                className='text-base font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200'
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
