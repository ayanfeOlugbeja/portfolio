import Banner from './../components/Banner';
import Footer from './../components/Footer';

import astro from './../images/astro.png';
import log from './../images/logo.png';
import React, { useState } from 'react';

const HeroSection = () => {
  const [showMore, setShowMore] = useState(false);
  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='hero-section sm:relative lg:mt-8 mt-10 text-gray-950'>
      {/* Logo Section */}
      <div className='logo w-1/5 h-1/4 sm:w-24 my-4 mx-4 top-4 sm:relative sm:top-24 sm:left-16'>
        <img src={log} alt='Company logo' />
      </div>

      {/* Hero Text Section */}
      <div className='sm:w-1/2 flex items-start flex-col sm:left-16 sm:top-24 sm:relative mx-4'>
        <h1 className='text-4xl font-bold text-gray-800 mb-4'>
          Hi, I'm Abraham 👋🏾
        </h1>
        <p className='text-base sm:text-lg  leading-relaxed'>
          {showMore ? (
            <div className='space-y-3 '>
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
                I'm <span className='text-blue-500'>excited</span> to learn more
                about <span className='text-blue-500'>your company</span> and
                how I can use <span className='text-blue-500'>my skills</span>{' '}
                to help you <span className='text-blue-500'>achieve</span> your
                <span className='text-blue-500'> goals</span>.
              </p>
            </div>
          ) : (
            `I'm passionate about technology and problem-solving. I've always wanted to build products that make a positive impact on the world. I'm excited to share my work with you, but there's so much more to tell.`
          )}
          <br />
          <span onClick={handleToggle} className='text-red-500 cursor-pointer'>
            {showMore ? 'less' : 'more'}
          </span>
        </p>

        {/* Resume Button */}
        <a
          href='https://docs.google.com/document/d/1GjQEfE7ynZ82Pjl9miXdwVkr9kFj3_v8Hhoih1d46z0/edit?usp=sharing'
          className='my-4 mx-auto hidden sm:block'>
          <button className='lg:px-4 lg:py-3 px-3 py-2 rounded-lg bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out'>
            RESUME
          </button>
        </a>
      </div>

      {/* Astronaut Image */}
      <div className='absolute w-1/4 right-16 top-0 hidden sm:block'>
        <img
          src={astro}
          alt='Astronaut floating in space illustration'
          className='w-full h-auto object-contain'
        />
      </div>

      {/* Banner for Mobile */}
      <div
        className='mt-12 h-32 px-2 text-xl font-semibold text-justify sm:hidden'
        style={{ borderBottom: '0.5px solid #9ca3bf' }}>
        <Banner />
      </div>

      {/* Footer for Mobile */}
      <div className='footer sm:hidden mt-12'>
        <Footer />
      </div>
    </div>
  );
};

export default HeroSection;
