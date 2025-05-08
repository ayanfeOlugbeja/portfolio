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
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(180).height(180))

  const logo = cld
    .image('logo')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(180).height(180))

  return (
    <div className='min-h-screen bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
          {/* Logo Section */}
          <div className='lg:col-span-2'>
            <div className='w-24 h-24'>
              <AdvancedImage
                cldImg={logo}
                className='w-full h-full object-contain'
              />
            </div>
          </div>

          {/* Main Content Section */}
          <div className='lg:col-span-7'>
            <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight'>
              Hi, I'm Abraham
            </h1>
            <div className='prose prose-lg max-w-none'>
              <p className='text-gray-600 leading-relaxed'>
                {showMore ? (
                  <div className='space-y-6'>
                    <p>
                      I have always been fascinated by problem-solving. I love
                      the challenge of figuring out how to make things work
                      better, and I find it incredibly rewarding to create
                      something that solves a real problem for people.
                    </p>
                    <p>
                      I know that there are a lot of challenges involved in
                      creating successful apps. But I'm confident that I have
                      the skills and the drive to overcome those challenges. I'm
                      a hard worker, and I'm not afraid to learn new things. I
                      believe that everyone has the potential to solve problems,
                      and that technology can be a powerful tool for solving
                      them.
                    </p>
                    <p>
                      I'm excited to use my problem-solving skills and passion
                      for technology to create apps that make a positive impact
                      on the world. I am also a team player and am always
                      willing to help others.
                    </p>
                    <p>
                      I would absolutely love to share this exciting part of my
                      life with you.
                    </p>
                    <p>Let's…</p>
                    <ul className='space-y-3 list-none pl-0'>
                      <li className='flex items-start'>
                        <span className='mr-2 text-blue-600'>•</span>
                        Work together to create clear, concise, and
                        easy-to-understand documentation.
                      </li>
                      <li className='flex items-start'>
                        <span className='mr-2 text-blue-600'>•</span>
                        Collaborate on writing informative, engaging, and
                        SEO-optimized articles and blog posts.
                      </li>
                      <li className='flex items-start'>
                        <span className='mr-2 text-blue-600'>•</span>
                        Analyze your website to identify opportunities for
                        improvement and make actionable recommendations.
                      </li>
                      <li className='flex items-start'>
                        <span className='mr-2 text-blue-600'>•</span>
                        Develop SEO strategies tailored to your specific needs
                        that will help attract more visitors to your website.
                      </li>
                      <li className='flex items-start'>
                        <span className='mr-2 text-blue-600'>•</span>
                        Work together to create functional and visually
                        appealing websites, apps, or other digital products to
                        help you achieve your business goals.
                      </li>
                    </ul>
                    <p>
                      I'm{' '}
                      <span className='font-medium text-gray-900'>excited</span>{' '}
                      to learn more about{' '}
                      <span className='font-medium text-gray-900'>
                        your organisation
                      </span>{' '}
                      and how I can use{' '}
                      <span className='font-medium text-gray-900'>
                        my skills
                      </span>{' '}
                      to help you{' '}
                      <span className='font-medium text-gray-900'>achieve</span>{' '}
                      your{' '}
                      <span className='font-medium text-gray-900'>goals</span>.
                    </p>
                  </div>
                ) : (
                  `I'm passionate about technology and problem-solving. I've always wanted to build products that make a positive impact on the world. I'm excited to share my work with you, but there's so much more to tell.`
                )}
              </p>
              <button
                onClick={handleToggle}
                className='mt-4 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200'
              >
                {showMore ? 'Show less' : 'Read more'}
              </button>
            </div>

            {/* Resume Button */}
            <div className='mt-8'>
              <a
                href='https://docs.google.com/document/d/1vjjUT7fc2KLVMcgYZqwl2RtEEoDPu_0FRQBVpHzwYMQ/edit?usp=sharing'
                className='inline-block'
              >
                <button className='px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-200 font-medium'>
                  View Resume
                </button>
              </a>
            </div>
          </div>

          {/* Profile Card */}
          <div className='lg:col-span-3 lg:sticky lg:top-8'>
            <div className='bg-white rounded-lg shadow-sm border border-gray-100 p-6'>
              <div className='aspect-square w-full mb-6'>
                <AdvancedImage
                  cldImg={img}
                  className='w-full h-full object-cover rounded-lg'
                />
              </div>
              <h2 className='text-xl font-semibold text-gray-900 mb-1'>
                Aiyedogbon Abraham
              </h2>
              <p className='text-gray-600 mb-6'>Software Developer</p>

              {/* Social Links */}
              <div className='flex space-x-4 mb-6'>
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
                  href='https://github.com/ayanfeOlugbeja'
                  className='text-gray-600 hover:text-gray-900 transition-colors duration-200'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.39c.6.11.82-.26.82-.58v-2.23a3.64 3.64 0 01-1.33-1.01 3.31 3.31 0 01-.7-2.1v-.05a3.31 3.31 0 011.56-2.83c-2.87-.33-5.89-1.44-5.89-6.41a5.5 5.5 0 011.49-3.82 5.08 5.08 0 01.13-3.73s1.15-.37 3.82 1.41a13.15 13.15 0 017.01 0c2.67-1.78 3.82-1.41 3.82-1.41.48 1.25.5 2.69.14 3.73a5.51 5.51 0 011.49 3.82c0 4.97-3.03 6.08-5.9 6.41a3.3 3.3 0 011.56 2.85c0 1.57-.05 2.82-.05 3.21 0 .32.22.69.83.58A12 12 0 0024 12C24 5.37 18.63 0 12 0z' />
                  </svg>
                </a>
              </div>

              <Link to='/contact'>
                <button className='w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium'>
                  Let's Talk
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Banner */}
      <div className='lg:hidden mt-12 border-t border-gray-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-8'>
          <Banner />
        </div>
      </div>

      {/* Mobile Footer */}
      <div className='lg:hidden mt-12 border-t border-gray-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-8'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
