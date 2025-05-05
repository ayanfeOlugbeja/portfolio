import React from 'react';
import github from './../images/github.svg';
import portfolio from './../images/portfolio.png';
import weatherApp from './../images/weatherApp.png';
import blog from './../images/blog.png';
import Passi from './../images/passi.jpg';
import AimPro from './../images/aimprodriv.png';
import autism from './../images/autism.png';

const Projects = () => {
  return (
    <div className='projects min-h-screen py-12 '>


      <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-6'>
        {[
          {
            title: 'Autism Awareness Africa',
            description: 'React.js | Tailwind | Node | Firebase',
            image: autism,
            alt: 'Autism Awareness Africa website',
            website: 'https://www.autismaawareness.africa',
            repo: 'https://github.com/ayanfeOlugbeja',
          },
          {
            title: 'Aim ProDrive Training Centre',
            description: 'React.js | Redux | Tailwind | Node | Firebase',
            image: AimPro,
            alt: 'Aim Prodrive Training Centre booking website',
            website: 'https://aim-prodrive.vercel.app',
            repo: 'https://github.com/ayanfeOlugbeja/aim-pro',
          },
          {
            title: 'PASSI (Exeat/Pass System)',
            description: 'React.js | Redux | Tailwind | Node | Firebase',
            image: Passi,
            alt: 'Pass/Exeat application system',
            website: 'https://gvuexeat.vercel.app',
            repo: 'https://github.com/ayanfeOlugbeja/exeat-app',
          },
          {
            title: 'Blog',
            description: 'React.js | JSON Server',
            image: blog,
            alt: 'Blog project',
            website: 'https://github.com/ayanfeOlugbeja/i-blog',
            repo: 'https://github.com/ayanfeOlugbeja/i-blog',
          },
          {
            title: 'Weather App',
            description:
              'JavaScript | Accuweather API | Bootstrap | localStorage',
            image: weatherApp,
            alt: 'Weather App',
            website: 'https://github.com/ayanfeOlugbeja/weather-app',
            repo: 'https://github.com/ayanfeOlugbeja/weather-app',
          },
          {
            title: 'Portfolio',
            description: 'React.js | Tailwind CSS',
            image: portfolio,
            alt: 'Portfolio project',
            website: 'https://www.aiyedogbonabraham.pro',
            repo: 'https://github.com/ayanfeOlugbeja/portfolio',
          },
        ].map((project, index) => (
          <div
            key={index}
            className='bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105'>
            <div className='relative group'>
              <img
                className='w-full h-48 object-contain'
                src={project.image}
                alt={project.alt}
              />
              <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
                <a
                  href={project.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white text-lg font-semibold py-2 px-6 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300'>
                  Visit Website
                </a>
              </div>
            </div>
            <div className='p-6'>
              <h5 className='text-gray-900 font-bold text-xl mb-3 dark:text-white'>
                {project.title}
              </h5>
              <p className='text-gray-700 dark:text-gray-400 mb-4 text-sm'>
                {project.description}
              </p>
              <a
                href={project.repo}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center'>
                <img
                  className='h-6 w-6 mr-2'
                  src={github}
                  alt='GitHub repository'
                />
                <span className='text-blue-600 hover:underline dark:text-blue-400'>
                  View Code
                </span>
              </a>
            </div>
          </div>
        ))}
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
