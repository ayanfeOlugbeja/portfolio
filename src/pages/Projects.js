import github from './../images/github.svg';
import portfolio from './../images/portfolio.png';
import weatherApp from './../images/weatherApp.png';
const Projects = () => {
  return (
    <div className='projects min-h-screen'>
      <h2 className='mx-auto font-bold text-3xl text-center text-gray-700 my-6 md:mt-4 md:text-3xl'>
        Noteworthy Projects
      </h2>
      <div className='project-cards space-y-5 mt-6 px-2 flex flex-col items-center'>
        <div className='max-w-2xl mx-auto'>
          <div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-lg dark:bg-gray-800 dark:border-gray-700'>
            <a href='#'>
              <img
                className='rounded-t-lg'
                src='https://flowbite.com/docs/images/blog/image-1.jpg'
                alt='img'
              />
            </a>
            <div className='p-5'>
              <h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white'>
                Mini Blog
              </h5>

              <p className='font-normal text-gray-700 mb-3 dark:text-gray-400 space-x-3'>
                React.js Json Server
              </p>
              <a href='#'>
                <img
                  class='-mr-1 ml-2 h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  src={github}
                  alt='github'
                />
              </a>
            </div>
          </div>
        </div>

        <div className='max-w-2xl mx-auto'>
          <div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-lg dark:bg-gray-800 dark:border-gray-700'>
            <a href='#'>
              <img
                className=' w-1/2 h-1/2 mx-auto'
                src={weatherApp}
                alt='weather App'
              />
            </a>
            <div className='p-5'>
              <h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white'>
                Weather App
              </h5>

              <p className='font-normal text-gray-700 mb-3 dark:text-gray-400'>
                javaScript Accuweather API Bootstrap localStorage
              </p>
              <a href='#'>
                <img
                  className='-mr-1 ml-2 h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  src={github}
                  alt='github'
                />
              </a>
            </div>
          </div>
        </div>
        <div className='max-w-2xl mx-auto'>
          <div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-lg dark:bg-gray-800 dark:border-gray-700'>
            <a href='#'>
              <img className='rounded-t-lg' src={portfolio} alt='portfolio' />
            </a>
            <div className='p-5'>
              <h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white'>
                Portfolio
              </h5>

              <p className='font-normal text-gray-700 mb-3 dark:text-gray-400'>
                React.js Tailwind CSS
              </p>
              <a href='#'>
                <img
                  className='-mr-1 ml-2 h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  src={github}
                  alt='github'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;