import github from './../images/github.svg';
import portfolio from './../images/portfolio.png';
import weatherApp from './../images/weatherApp.png';
import blog from './../images/blog.png';
const Projects = () => {
  return (
    <div className='projects min-h-screen my-4'>
      <h2 className='mx-auto font-bold text-3xl text-center text-gray-700 my-6 md:mt-4 md:text-3xl'>
        Noteworthy Projects
      </h2>
      
      <div className='project-cards space-y-5 mt-6 px-2 flex flex-col items-center'>

            <div className='max-w-2xl mx-auto'>
          <div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700'>
            <a href='https://github.com/ayanfeOlugbeja'>
              <img className='rounded-t-lg' src='https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/375180336_1495175591254667_9047282910493735318_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeG02njwUz2PWmOKMXhteJaTCiCflXVPvbIKIJ-VdU-9skifx3BSnUAK_3sctd1ZtfnnwZU7XwdYe8etGG2uralD&_nc_ohc=ebJCeCXB8FIAX8dm94V&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&oh=00_AfBUQPWXvFTG3JVDa54HQQXIiks2U7PpqdhDOnOEcaNbww&oe=651BC04B' alt='Pass/Exeat application system' />
            </a>
            <div className='p-5'>
              <h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white'>
               PASSI (Electronic Exeat/Pass System)
              </h5>

              <p className='font-normal text-sm text-gray-700 mb-3 dark:text-gray-400 space-x-3 tracking-widest'>
                React.js | Redux | Tailwind | Node
              </p>
              <a href='https://github.com/ayanfeOlugbeja'>
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
          <div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700'>
            <a href='https://github.com/ayanfeOlugbeja/i-blog'>
              <img className='rounded-t-lg' src={blog} alt='img' />
            </a>
            <div className='p-5'>
              <h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white'>
                Blog
              </h5>

              <p className='font-normal text-sm text-gray-700 mb-3 dark:text-gray-400 space-x-3 tracking-widest'>
                React.js | Json Server
              </p>
              <a href='https://github.com/ayanfeOlugbeja/i-blog'>
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
          <div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700'>
            <a href='https://github.com/ayanfeOlugbeja/weather-app'>
              <img
                className=' rounded-t-lg'
                src={weatherApp}
                alt='weather App'
              />
            </a>
            <div className='p-5'>
              <h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white'>
                Weather App
              </h5>

              <p className='font-normal text-sm text-gray-700 mb-3 dark:text-gray-400 tracking-widest'>
                javaScript | AccuweatherAPI | Bootstrap | localStorage
              </p>
              <a href='https://github.com/ayanfeOlugbeja/weather-app'>
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
          <div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700'>
            <a href='https://github.com/ayanfeOlugbeja/portfolio'>
              <img className='rounded-t-lg' src={portfolio} alt='portfolio' />
            </a>
            <div className='p-5'>
              <h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white'>
                Portfolio
              </h5>

              <p className='font-normal text-sm text-gray-700 mb-3 dark:text-gray-400 tracking-widest'>
                React.js | Tailwind CSS
              </p>
              <a href='https://github.com/ayanfeOlugbeja/portfolio'>
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
<div className="mx-auto lg:w-[27%] md:w-[27%] w-[45%] mt-8 flex justify-center items-center"><a href="https://github.com/ayanfeOlugbeja" target="_blank">
<button class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 mt-6 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">See other Projects</button></a> </div>

    </div>
  );
};

export default Projects;
