import React from 'react';
import github from './../images/github.svg';
import portfolio from './../images/portfolio.png';
import weatherApp from './../images/weatherApp.png';
import blog from './../images/blog.png';
import Passi from './../images/passi.jpg';
import AimPro from './../images/aimprodriv.png';

const Projects = () => {
  return (
    <div className='projects min-h-screen py-12 bg-gray-100 dark:bg-gray-900'>
      <h2 className='text-4xl font-extrabold text-gray-800 dark:text-white text-center mb-12 tracking-wide'>
        Featured Projects
      </h2>

      <div className='grid gap-12 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-6'>
        {/* Aim ProDrive Project */}
        <div className='relative bg-white shadow-xl rounded-lg dark:bg-gray-800 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300'>
          <div className='relative group'>
            <img
              className='rounded-t-lg w-full'
              src={AimPro}
              alt='Aim Prodrive Training Centre booking website'
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
              <a
                href='https://aim-prodrive.vercel.app'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white text-lg font-semibold py-2 px-6 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300'>
                Visit Website
              </a>
            </div>
          </div>
          <div className='p-6'>
            <h5 className='text-gray-900 font-bold text-3xl mb-3 dark:text-white tracking-tight'>
              Aim ProDrive Training Centre
            </h5>
            <p className='font-medium text-base text-gray-700 dark:text-gray-400 mb-4 tracking-wide'>
              React.js | Redux | Tailwind | Node | Firebase
            </p>
            <a
              href='https://github.com/ayanfeOlugbeja/aim-pro'
              target='_blank'
              rel='noopener noreferrer'>
              <img className='h-7 w-7' src={github} alt='GitHub repository' />
            </a>
          </div>
        </div>

        {/* PASSI Project */}
        <div className='relative bg-white shadow-xl rounded-lg dark:bg-gray-800 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300'>
          <div className='relative group'>
            <img
              className='rounded-t-lg w-full'
              src={Passi}
              alt='Pass/Exeat application system'
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
              <a
                href='https://gvuexeat.vercel.app'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white text-lg font-semibold py-2 px-6 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300'>
                Visit Website
              </a>
            </div>
          </div>
          <div className='p-6'>
            <h5 className='text-gray-900 font-bold text-3xl mb-3 dark:text-white tracking-tight'>
              PASSI (Exeat/Pass System)
            </h5>
            <p className='font-medium text-base text-gray-700 dark:text-gray-400 mb-4 tracking-wide'>
              React.js | Redux | Tailwind | Node | Firebase
            </p>
            <a
              href='https://github.com/ayanfeOlugbeja/exeat-app'
              target='_blank'
              rel='noopener noreferrer'>
              <img className='h-7 w-7' src={github} alt='GitHub repository' />
            </a>
          </div>
        </div>

        {/* Blog Project */}
        <div className='relative bg-white shadow-xl rounded-lg dark:bg-gray-800 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300'>
          <div className='relative group'>
            <img
              className='rounded-t-lg w-full'
              src={blog}
              alt='Blog project'
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
              <a
                href='https://github.com/ayanfeOlugbeja/i-blog'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white text-lg font-semibold py-2 px-6 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300'>
                Visit Website
              </a>
            </div>
          </div>
          <div className='p-6'>
            <h5 className='text-gray-900 font-bold text-3xl mb-3 dark:text-white tracking-tight'>
              Blog
            </h5>
            <p className='font-medium text-base text-gray-700 dark:text-gray-400 mb-4 tracking-wide'>
              React.js | JSON Server
            </p>
            <a
              href='https://github.com/ayanfeOlugbeja/i-blog'
              target='_blank'
              rel='noopener noreferrer'>
              <img className='h-7 w-7' src={github} alt='GitHub repository' />
            </a>
          </div>
        </div>

        {/* Weather App Project */}
        <div className='relative bg-white shadow-xl rounded-lg dark:bg-gray-800 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300'>
          <div className='relative group'>
            <img
              className='rounded-t-lg w-full'
              src={weatherApp}
              alt='Weather App'
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
              <a
                href='https://github.com/ayanfeOlugbeja/weather-app'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white text-lg font-semibold py-2 px-6 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300'>
                Visit Website
              </a>
            </div>
          </div>
          <div className='p-6'>
            <h5 className='text-gray-900 font-bold text-3xl mb-3 dark:text-white tracking-tight'>
              Weather App
            </h5>
            <p className='font-medium text-base text-gray-700 dark:text-gray-400 mb-4 tracking-wide'>
              JavaScript | Accuweather API | Bootstrap | localStorage
            </p>
            <a
              href='https://github.com/ayanfeOlugbeja/weather-app'
              target='_blank'
              rel='noopener noreferrer'>
              <img className='h-7 w-7' src={github} alt='GitHub repository' />
            </a>
          </div>
        </div>

        {/* Portfolio Project */}
        <div className='relative bg-white shadow-xl rounded-lg dark:bg-gray-800 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300'>
          <div className='relative group'>
            <img
              className='rounded-t-lg w-full'
              src={portfolio}
              alt='Portfolio project'
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
              <a
                href='https://www.aiyedogbonabraham.pro'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white text-lg font-semibold py-2 px-6 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300'>
                Visit Website
              </a>
            </div>
          </div>
          <div className='p-6'>
            <h5 className='text-gray-900 font-bold text-3xl mb-3 dark:text-white tracking-tight'>
              Portfolio
            </h5>
            <p className='font-medium text-base text-gray-700 dark:text-gray-400 mb-4 tracking-wide'>
              React.js | Tailwind CSS
            </p>
            <a
              href='https://github.com/ayanfeOlugbeja/portfolio'
              target='_blank'
              rel='noopener noreferrer'>
              <img className='h-7 w-7' src={github} alt='GitHub repository' />
            </a>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center mt-12'>
        <a
          href='https://github.com/ayanfeOlugbeja'
          target='_blank'
          rel='noopener noreferrer'>
          <button className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-6 py-3 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 transition-all duration-300'>
            See other Projects
          </button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
