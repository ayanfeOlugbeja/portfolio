import Banner from './../components/Banner';
import Footer from './../components/Footer';

import astro from './../images/astro.png';
import log from './../images/logo.png';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  const [showMore, setShowMore] = useState(false);
  const handleToogle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='hero-section  sm:relative lg:mt-8 mt-10'>
      <div className='logo w-1/5 h-1/4 sm:w-24 my-4 mx-4 top-4  sm:relative sm:top-24 sm:left-16'>
        <img src={log} alt='logo' />
      </div>

      <div className='sm:w-1/2 flex items-start flex-col sm:left-16 sm:top-24 sm:relative mx-4'>
        <div className='h-16 sm:h-12 w-auto '>
          <span className='sm:text-lg font-bold text-xl text-red-500 md:text-lg lg:text-2xl'>
            I can{' '}
          </span>

          <span className='text-gray-500 font-bold text-lg sm:text-lg md:text-lg lg:text-2xl inline-block'>
            <Typewriter
              options={{
                strings: [
                  'design beautiful websites',
                  'build responsive layout',
                  'optimize website performance',
                  'create interactive UI',
                  'implement smooth animations',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </span>
        </div>

        <p className='text-gray-700'>
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
                I'm not afraid to learn new things.I believe that everyone has
                the potential to solve problems. And I believe that technology
                can be a powerful tool for solving problems.{' '}
              </p>
              <p>
                I'm excited to use my problem-solving skills and my passion for
                technology to create apps that make a positive impact on the
                world. I am also a team player and I am always willing to help
                others.
              </p>{' '}
              <p>
                {' '}
                I will absolutely love to share this exciting part of my life
                with you.
              </p>
              <p>Let's.….</p>
              <ul className='ml-8 brand-list'>
                <li>
                  work together to create documentation that is clear, concise,
                  and easy to understand. collaborate on writing articles and
                  blog posts that are informative, engaging, and SEO-optimized.{' '}
                </li>
                <li>
                  analyze your website together to identify opportunities for
                  improvement and make recommendations that will help you
                  achieve your goals.
                </li>
                <li>
                  develop an SEO strategy that is tailored to your specific
                  needs and that will help you attract more visitors to your
                  website.
                </li>
                <li>
                  work together to create websites, apps, or other digital
                  products that are both functional and visually appealing , and
                  that will help you achieve your business goals.
                </li>
              </ul>
              <p>
                {' '}
                I'm <span style={{ color: '#3b82f6' }}>excited</span> to learn
                more about{' '}
                <span style={{ color: '#3b82f6' }}>your company</span> and how I
                can use <span style={{ color: '#3b82f6' }}>my skills</span> to
                help you <span style={{ color: '#3b82f6' }}>achieve</span> your
                <span style={{ color: '#3b82f6' }}> goals</span>.
              </p>
            </div>
          ) : (
            `When I got into tech three years ago, I set a goal to "appear at the top of the search results" when my name is searched.`
          )}{' '}
          <br />
          <span onClick={handleToogle} className='text-red-500'>
            {showMore ? 'less' : 'more'}
          </span>
        </p>

        <a
          href='https://docs.google.com/document/d/1GjQEfE7ynZ82Pjl9miXdwVkr9kFj3_v8Hhoih1d46z0/edit?usp=sharing'
          className=' my-4 mx-auto hidden sm:block'>
          <button
            style={{ color: '#3b82f6', border: '1px solid #3b82f6' }}
            className='lg:px-4 lg:py-3 px-3 py-2  rounded-lg bg-transparent '>
            RESUME
          </button>
        </a>
      </div>

      <div className='absolute w-1/4  right-16 top-0 hidden sm:block'>
        <img
          src={astro}
          alt='utopia'
          className='w-2/1 md:w-100 md:h-full h-2/3'
        />
      </div>

      <div
        className='mt-12 h-32 px-2 text-xl font-semibold text-justify sm:hidden'
        style={{ borderBottom: '0.5px solid #9ca3bf' }}>
        <Banner />
      </div>
      <div className='footer sm:hidden mt-16'>
        <Footer />
      </div>
    </div>
  );
};

export default HeroSection;
