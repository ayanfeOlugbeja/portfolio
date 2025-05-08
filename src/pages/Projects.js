import React from 'react'
import github from './../images/github.svg'
import portfolio from './../images/portfolio.png'
import weatherApp from './../images/weatherApp.png'
import blog from './../images/blog.png'
import Passi from './../images/passi.jpg'
import AimPro from './../images/aimprodriv.png'
import autism from './../images/autism.png'

const Projects = () => {
  return (
    <div className='min-h-screen bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>Projects</h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            A collection of my work showcasing my skills in web development and
            design.
          </p>
        </div>

        <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-2'>
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
              className='group bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300'
            >
              <div className='relative aspect-video'>
                <img
                  className='w-full h-full object-cover'
                  src={project.image}
                  alt={project.alt}
                />
                <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                  <a
                    href={project.website}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-3 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200'
                  >
                    Visit Website
                  </a>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  {project.title}
                </h3>
                <p className='text-gray-600 mb-4 text-sm'>
                  {project.description}
                </p>
                <a
                  href={project.repo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200'
                >
                  <img
                    className='h-5 w-5 mr-2'
                    src={github}
                    alt='GitHub repository'
                  />
                  <span className='font-medium'>View Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <a
            href='https://github.com/ayanfeOlugbeja'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block'
          >
            <button className='px-8 py-4 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition-colors duration-200'>
              See More Projects
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
import React from 'react'
import github from './../images/github.svg'
import portfolio from './../images/portfolio.png'
import weatherApp from './../images/weatherApp.png'
import blog from './../images/blog.png'
import Passi from './../images/passi.jpg'
import AimPro from './../images/aimprodriv.png'
import autism from './../images/autism.png'

const Projects = () => {
  return (
    <div className='min-h-screen bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>Projects</h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            A collection of my work showcasing my skills in web development and
            design.
          </p>
        </div>

        <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-2'>
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
              className='group bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300'
            >
              <div className='relative aspect-video'>
                <img
                  className='w-full h-full object-cover'
                  src={project.image}
                  alt={project.alt}
                />
                <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                  <a
                    href={project.website}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-3 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200'
                  >
                    Visit Website
                  </a>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  {project.title}
                </h3>
                <p className='text-gray-600 mb-4 text-sm'>
                  {project.description}
                </p>
                <a
                  href={project.repo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200'
                >
                  <img
                    className='h-5 w-5 mr-2'
                    src={github}
                    alt='GitHub repository'
                  />
                  <span className='font-medium'>View Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <a
            href='https://github.com/ayanfeOlugbeja'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block'
          >
            <button className='px-8 py-4 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition-colors duration-200'>
              See More Projects
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
