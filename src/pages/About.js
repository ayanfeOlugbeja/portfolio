import Linked from './../components/Linked';
import me from './../images/me.png';
import react from './../images/react.svg';
import html from './../images/html.svg';
import css from './../images/css.svg';
import javaScript from './../images/javaScript.svg';
import firebase from './../images/firebase.svg';
import tailwind from './../images/tailwind.svg';

const About = () => {
  return (
    <div className=' mt-4 mx-4 mb-4'>
      <section>
        <h2 className='text-center text-gray-700 font-semibold text-3xl'>
          About
        </h2>
        <div className='flex justify-center'>
          <img
            src={me}
            alt='a pic of myself'
            className='w-2/3 h-90 sm:w-1/3 lg:w-1/4 md:w-1/3'
          />
        </div>
      </section>
      <div className='sm:w-[55%] sm:mx-auto flex flex-col justify-between mt-8'>
        <section>
          <h2
            style={{ borderBottom: '1px solid #9ca3af' }}
            className='text-gray-700 font-semibold text-lg mb-4'>
            Contact
          </h2>
          <p className='mb-3'>
            Hey! I post on{' '}
            <a
              href='https://twitter.com/joshuaAAbraham?s=20'
              className='text-blue-500 hover:text-red-500'>
              Twitter
            </a>{' '}
            and{' '}
            <a
              href='https://linkedin.com/in/abraham-aiyedogbon-9a7095282'
              className='text-blue-500 hover:text-red-500'>
              LinkedIn
            </a>{' '}
            often. Check out my amazing contents. If you want to get in touch,
            feel free to consult with me.
          </p>
        </section>
        <div className=' contact mt-2'>
          <h2
            style={{ borderBottom: '1px solid #9ca3af' }}
            className='text-gray-700 font-semibold text-lg mb-4'>
            My Collections
          </h2>
          <p className='mb-3'>
            I write on{' '}
            <a
              href='https://hashnode.com/@AiyedogbonAbraham'
              className='text-blue-500 hover:text-red-500'>
              hashnode
            </a>
            , you can follow and read my{' '}
            <a
              href='https://aiyedogbonabraham.hashnode.dev/'
              className='text-blue-500 hover:text-red-500'>
              blogs
            </a>
            , connect with me on{' '}
            <a
              href='https://linkedin.com/in/abraham-aiyedogbon-9a7095282'
              className='text-blue-500 hover:text-red-500'>
              LinkedIn
            </a>
            .
            <p>
              I talk about{' '}
              <span className='text-sm font-italic'>
                #reactjs #javaScript #seo(good practices)
              </span>
            </p>
          </p>
        </div>

        <section className='mt-2'>
          <h2
            style={{ borderBottom: '1px solid #9ca3af' }}
            className='text-gray-700 font-semibold text-lg mb-4'>
            Skills
          </h2>

          <p>
            I'm an architect of{' '}
            <span className='font-normal text-blue-500'>
              user-friendly interfaces
            </span>
            , with a keen eye for detail and a{' '}
            <span className='font-normal text-blue-500'>commitment</span> to
            creating interfaces that are both{' '}
            <span className='font-normal text-blue-500'>
              efficient and effective
            </span>
            .
          </p>
          <p className='mt-1'>
            Here are some of the{' '}
            <span className='font-normal text-blue-500'>tools</span> I have{' '}
            <span className='font-normal text-blue-500'>worked</span> with over
            the years, for my{' '}
            <span className='font-normal text-blue-500'>personal</span>,{' '}
            <span className='font-normal text-blue-500'>professional</span> and{' '}
            <span className='font-normal text-blue-500'>open source </span>
            projects:
          </p>
          <div className='my-2 flex flex-row flex-wrap  justify-center gap-1 items-center px-2 lg:px-0 lg:w-[80%] w-full mx-auto '>
            <div className='bg-white flex flex-row justify-evenly items-center w-[163px] h-[77px] mx-auto shadow-md rounded-lg'>
              <img
                src={html}
                alt='html'
                className=' h-14 w-14 lg:h-10 lg:w-10'
                fill='currentColor'
                viewBox='0 0 20 20'
              />
              <p className='w-[60%] text-center'>HTML</p>
            </div>
            <div className='bg-white flex flex-row justify-evenly items-center w-[163px] h-[77px] mx-auto shadow-md'>
              {' '}
              <img
                src={css}
                alt='css'
                className=' h-14 w-14 lg:h-10 lg:w-10'
                fill='currentColor'
                viewBox='0 0 20 20'
              />
              <p className='w-[60%] text-center'>CSS</p>
            </div>
            <div className='bg-white flex flex-row justify-evenly items-center w-[163px] h-[77px] mx-auto shadow-md'>
              {' '}
              <img
                src={javaScript}
                alt='javaScript'
                className=' h-14 w-14 lg:h-10 lg:w-10'
                fill='currentColor'
                viewBox='0 0 20 20'
              />
              <p className='w-[60%] text-center'>javaScript</p>
            </div>
            <div className='bg-white flex flex-row justify-evenly items-center w-[163px] h-[77px] mx-auto shadow-md'>
              {' '}
              <img
                src={tailwind}
                alt='tailwind css'
                className=' h-14 w-14 lg:h-10 lg:w-10'
                fill='currentColor'
                viewBox='0 0 20 20'
              />
              <p className='w-[60%] text-center'>Tailwind CSS</p>
            </div>
            <div className='bg-white flex flex-row justify-evenly items-center w-[163px] h-[77px] mx-auto shadow-md'>
              {' '}
              <img
                src={react}
                alt='react'
                className=' h-14 w-14 lg:h-10 lg:w-10'
                fill='currentColor'
                viewBox='0 0 20 20'
              />
              <p className='w-[60%] text-center'>React.js</p>
            </div>
            <div className='bg-white flex flex-row justify-evenly items-center w-[163px] h-[77px] mx-auto  shadow-md'>
              {' '}
              <img
                src={firebase}
                alt='firebase'
                className=' h-14 w-14 lg:h-10 lg:w-10'
                fill='currentColor'
                viewBox='0 0 20 20'
              />
              <p className='w-[60%] text-center'>Firebase</p>
            </div>
          </div>
        </section>
      </div>
      <div className='fixed left-10 top-[445px] sm:hidden md:hidden lg:block hidden flex flex-col'>
        <Linked />
      </div>
      <div className='fixed right-2 rotate-90 top-[470px]   sm:hidden md:hidden lg:block hidden flex flex-col'>
        <a href='mailto:aiyedogbonabraham@gmail.com'>
          <p className='text-sm font-semibold h-[70px] w-[290px] text-center'>
            {' '}
            aiyedogbonabraham@gmail.com
          </p>
        </a>
      </div>
    </div>
  );
};

export default About;
