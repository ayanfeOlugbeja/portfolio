import { Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigation = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  const externalLinks = [
    { name: 'Blog', href: 'https://hashnode.com/@AiyedogbonAbraham' },
    { name: 'GitHub', href: 'https://github.com/ayanfeOlugbeja' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/aiyedogbon' },
  ]

  return (
    <footer className='bg-white border-t border-gray-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {/* Logo and Description */}
          <div className='space-y-4'>
            <button
              onClick={scrollToTop}
              className='text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200'
              aria-label='Scroll to top'
            >
              Aiyedogbon
            </button>
            <p className='text-sm text-gray-600 max-w-xs'>
              Building digital experiences with clean, functional, and
              user-centered design.
            </p>
          </div>

          {/* Internal Navigation */}
          <div>
            <h3 className='text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4'>
              Navigation
            </h3>
            <ul className='space-y-3'>
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={scrollToTop}
                    className='text-base text-gray-600 hover:text-blue-600 transition-colors duration-200'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h3 className='text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4'>
              Connect
            </h3>
            <ul className='space-y-3'>
              {externalLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-base text-gray-600 hover:text-blue-600 transition-colors duration-200'
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-12 pt-8 border-t border-gray-100'>
          <p className='text-sm text-gray-600 text-center'>
            © {new Date().getFullYear()} Aiyedogbon Abraham. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
