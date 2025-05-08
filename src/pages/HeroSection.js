import React, { useState } from 'react'
import { Cloudinary } from '@cloudinary/url-gen'
import { auto } from '@cloudinary/url-gen/actions/resize'
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity'
import { AdvancedImage } from '@cloudinary/react'
import Banner from './../components/Banner'
import Footer from './../components/Footer'
import { Link } from 'react-router-dom'
import abraham from './../images/aiyedogbon-abraham.png'
import log from './../images/logo.png'

const HeroSection = () => {
  const [showMore, setShowMore] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleToggle = () => {
    setShowMore(!showMore)
    scrollToTop()
  }

  const cld = new Cloudinary({ cloud: { cloudName: 'dgreljx82' } })

  const img = cld
    .image('aiyedogbon')
    .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(180).height(180)) // Transform the image: auto-crop to square

  const logo = cld
    .image('logo')
    .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(180).height(180)) // Transform the image: auto-crop to square

  return (
    <div className='hero-section sm:relative lg:mt-8 mt-10 text-gray-950'>
      {/* Logo Section */}
      <div className='logo w-1/5 h-1/4 sm:w-24 my-4 mx-4 top-4 sm:relative sm:top-24 sm:left-16'>
        <AdvancedImage cldImg={logo} />
      </div>

      {/* Hero Text Section */}
      <div className='sm:w-1/2 flex items-start flex-col sm:left-16 sm:top-24 sm:relative mx-4'>
        <h1 className='text-4xl font-bold text-gray-800 mb-4'>
          Hi, I'm Abraham 👋🏾
        </h1>
        <p className='text-base sm:text-lg leading-relaxed'>
          {showMore ? (
            <div className='space-y-3'>
              <p>
                I have always been fascinated by problem-solving. I love the
                challenge of figuring out how to make things work better, and I
                find it incredibly rewarding to create something that solves a
                real problem for people.
              </p>
              <p>
                I know that there are a lot of challenges involved in creating
                successful apps. But I'm confident that I have the skills and
                the drive to overcome those challenges. I'm a hard worker, and
                I'm not afraid to learn new things. I believe that everyone has
                the potential to solve problems, and that technology can be a
                powerful tool for solving them.
              </p>
              <p>
                I'm excited to use my problem-solving skills and passion for
                technology to create apps that make a positive impact on the
                world. I am also a team player and am always willing to help
                others.
              </p>
              <p>
                I would absolutely love to share this exciting part of my life
                with you.
              </p>
              <p>Let's…</p>
              <ul className='ml-8 brand-list list-disc'>
                <li>
                  Work together to create clear, concise, and easy-to-understand
                  documentation.
                </li>
                <li>
                  Collaborate on writing informative, engaging, and
                  SEO-optimized articles and blog posts.
                </li>
                <li>
                  Analyze your website to identify opportunities for improvement
                  and make actionable recommendations.
                </li>
                <li>
                  Develop SEO strategies tailored to your specific needs that
                  will help attract more visitors to your website.
                </li>
                <li>
                  Work together to create functional and visually appealing
                  websites, apps, or other digital products to help you achieve
                  your business goals.
                </li>
              </ul>
              <p>
                I'm <span className='font-semibold'>excited</span> to learn more
                about <span className='font-semibold'>your organisation</span>{' '}
                and how I can use{' '}
                <span className='font-semibold'>my skills</span> to help you{' '}
                <span className='font-semibold'>achieve</span> your{' '}
                <span className='font-semibold'>goals</span>.
              </p>
            </div>
          ) : (
            `I'm passionate about technology and problem-solving. I've always wanted to build products that make a positive impact on the world. I'm excited to share my work with you, but there's so much more to tell.`
          )}
          <br />
          <span onClick={handleToggle} className='cursor-pointer text-black'>
            {showMore ? 'less' : 'more'}
          </span>
        </p>

        {/* Resume Button */}
        <a
          href='https://docs.google.com/document/d/1vjjUT7fc2KLVMcgYZqwl2RtEEoDPu_0FRQBVpHzwYMQ/edit?usp=sharing'
          className='my-4 mx-auto hidden sm:block'
        >
          <button className='lg:px-4 lg:py-3 px-3 py-2 rounded-lg bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out'>
            RESUME
          </button>
        </a>
      </div>

      {/* Hero Section Card */}
      <div className='min-w-[264px] w-1/4 right-16 top-60 hidden lg:flex flex-col items-center bg-white p-6 rounded-lg shadow-lg fixed'>
        <AdvancedImage cldImg={img} className='rounded-lg' />
        <h2 className='mt-4 text-lg font-semibold text-gray-800'>
          Aiyedogbon Abraham
        </h2>
        <p className='text-sm text-gray-600'>Software Developer</p>
        <div className='flex items-center space-x-4 mt-4'>
          {/* Social Icons */}
          <a
            href='https://twitter.com/joshuaAAbraham?s=20'
            className='hover:text-gray-300 transition-colors duration-300'
            target='_blank'
            rel='noopener noreferrer'
          >
            {/* Twitter Icon */}
            <svg
              className='w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors duration-300 bg-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M22.46 6.11c-.77.34-1.6.57-2.47.67a4.2 4.2 0 001.82-2.32 8.22 8.22 0 01-2.6.99A4.1 4.1 0 0015.83 4c-2.27 0-4.11 1.82-4.11 4.07 0 .32.04.63.1.92A11.65 11.65 0 012.12 4.71a4.03 4.03 0 00-.56 2.05c0 1.41.73 2.65 1.84 3.38a4.1 4.1 0 01-1.86-.5v.05c0 1.97 1.42 3.6 3.31 3.97-.34.09-.7.14-1.06.14-.26 0-.52-.02-.77-.07a4.09 4.09 0 003.83 2.83A8.27 8.27 0 010 19.56a11.63 11.63 0 006.29 1.84c7.55 0 11.68-6.18 11.68-11.54 0-.18-.01-.36-.02-.53a8.29 8.29 0 002.04-2.1z' />
            </svg>
          </a>
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
            href='https://github.com/ayanfeOlugbeja'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-black'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              className='w-6 h-6'
            >
              {/* SVG Path for GitHub */}
              <path
                fill='currentColor'
                d='M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.39c.6.11.82-.26.82-.58v-2.23a3.64 3.64 0 01-1.33-1.01 3.31 3.31 0 01-.7-2.1v-.05a3.31 3.31 0 011.56-2.83c-2.87-.33-5.89-1.44-5.89-6.41a5.5 5.5 0 011.49-3.82 5.08 5.08 0 01.13-3.73s1.15-.37 3.82 1.41a13.15 13.15 0 017.01 0c2.67-1.78 3.82-1.41 3.82-1.41.48 1.25.5 2.69.14 3.73a5.51 5.51 0 011.49 3.82c0 4.97-3.03 6.08-5.9 6.41a3.3 3.3 0 011.56 2.85c0 1.57-.05 2.82-.05 3.21 0 .32.22.69.83.58A12 12 0 0024 12C24 5.37 18.63 0 12 0z'
              />
            </svg>
          </a>
        </div>
        <Link to='/contact'>
          <button className='mt-6 px-6 py-2 bg-blue-700 text-white rounded-sm shadow-md transition font-bold'>
            Let’s Talk
          </button>
        </Link>
      </div>

      {/* Banner for Mobile */}
      <div
        className='mt-12 h-32 px-2 text-xl font-semibold text-justify sm:hidden'
        style={{ borderBottom: '0.5px solid #9ca3bf' }}
      >
        <Banner />
      </div>

      {/* Footer for Mobile */}
      <div className='footer sm:hidden mt-12'>
        <Footer />
      </div>
    </div>
  )
}

export default HeroSection
