import { useEffect } from 'react'
import Linked from './../components/Linked'
import react from './../images/react.svg'
import html from './../images/html.svg'
import css from './../images/css.svg'
import javaScript from './../images/javaScript.svg'
import firebase from './../images/firebase.svg'
import tailwind from './../images/tailwind.svg'

const About = () => {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = 'https://platform.linkedin.com/badges/js/profile.js'
    script.async = true
    script.defer = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
    <div className=' mt-4 mx-4 mb-4'>
      <section>
        <div className='flex justify-center'>
          <div
            class='badge-base LI-profile-badge'
            data-locale='en_US'
            data-size='large'
            data-theme='light'
            data-type='HORIZONTAL'
            data-vanity='abraham-aiyedogbon-9a7095282'
            data-version='v1'
          ></div>
        </div>
      </section>
      <div className='sm:w-[55%] sm:mx-auto flex flex-col justify-between mt-8'>
        <section>
          <h2
            style={{ borderBottom: '1px solid #9ca3af' }}
            className='text-gray-700 font-semibold text-lg mb-4'
          >
            Contact
          </h2>
          <p className='mb-3'>
            Hey! I post on{' '}
            <a
              href='https://twitter.com/joshuaAAbraham?s=20'
              className='text-red-500'
            >
              Twitter
            </a>{' '}
            and{' '}
            <a
              href='https://linkedin.com/in/abraham-aiyedogbon-9a7095282'
              className='text-red-500'
            >
              LinkedIn
            </a>{' '}
            often. Check out my amazing contents. If you want to get in touch,
            feel free to consult with me.
          </p>
        </section>
        <div className=' contact mt-2'>
          <h2
            style={{ borderBottom: '1px solid #9ca3af' }}
            className='text-gray-700 font-semibold text-lg mb-4'
          >
            My Collections
          </h2>
          <p className='mb-3'>
            I write on{' '}
            <a
              href='https://hashnode.com/@AiyedogbonAbraham'
              className='text-red-500'
            >
              hashnode
            </a>
            , you can follow and read my{' '}
            <a
              href='https://aiyedogbonabraham.hashnode.dev/'
              className='text-red-500'
            >
              blogs
            </a>
            , connect with me on{' '}
            <a
              href='https://linkedin.com/in/abraham-aiyedogbon-9a7095282'
              className='text-red-500'
            >
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
            className='text-gray-700 font-semibold text-lg mb-4'
          >
            Skills
          </h2>

          <p>
            I'm an architect of{' '}
            <span className='font-bold'>user-friendly interfaces</span>, with a
            keen eye for detail and a commitment to{' '}
            <span className='font-bold'>creating interfaces</span> that are both
            efficient and effective.
          </p>
          <p className='mt-1'>
            Here are some of the <span className='font-bold'>tools</span> I have{' '}
            <span className='font-bold'>worked</span> with over the years, for
            my <span className='font-bold'>personal</span>,{' '}
            <span className='font-bold'>professional</span> and{' '}
            <span className='font-bold'>open source </span>
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
  )
}

export default About
