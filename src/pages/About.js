import { useEffect } from 'react';
import Linked from './../components/Linked';
import react from './../images/react.svg';
import html from './../images/html.svg';
import css from './../images/css.svg';
import javaScript from './../images/javaScript.svg';
import firebase from './../images/firebase.svg';
import tailwind from './../images/tailwind.svg';

const About = () => {
  // Loading LinkedIn badge script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='mt-6 mb-6 mx-4'>
      {/* LinkedIn Badge Section */}
      <section className='flex justify-center mb-8'>
        <div
          className='badge-base LI-profile-badge'
          data-locale='en_US'
          data-size='large'
          data-theme='light'
          data-type='HORIZONTAL'
          data-vanity='abraham-aiyedogbon-9a7095282'
          data-version='v1'></div>
      </section>

      {/* Contact Section */}
      <div className='sm:w-[80%] lg:w-[60%] mx-auto flex flex-col'>
        <section>
          <h2 className='text-gray-700 font-semibold text-lg mb-4 border-b border-gray-300'>
            Contact
          </h2>
          <p className='mb-4'>
            Hey! I post on{' '}
            <a
              href='https://twitter.com/joshuaAAbraham?s=20'
              className='text-blue-500 hover:underline'>
              Twitter
            </a>{' '}
            and{' '}
            <a
              href='https://linkedin.com/in/abraham-aiyedogbon-9a7095282'
              className='text-blue-500 hover:underline'>
              LinkedIn
            </a>{' '}
            often. Check out my amazing content. If you want to get in touch,
            feel free to connect with me.
          </p>
        </section>

        {/* My Collections Section */}
        <section className='mt-4'>
          <h2 className='text-gray-700 font-semibold text-lg mb-4 border-b border-gray-300'>
            My Collections
          </h2>
          <p className='mb-3'>
            I write on{' '}
            <a
              href='https://hashnode.com/@AiyedogbonAbraham'
              className='text-blue-500 hover:underline'>
              Hashnode
            </a>{' '}
            and you can follow my{' '}
            <a
              href='https://aiyedogbonabraham.hashnode.dev/'
              className='text-blue-500 hover:underline'>
              blogs
            </a>{' '}
            and connect with me on{' '}
            <a
              href='https://linkedin.com/in/abraham-aiyedogbon-9a7095282'
              className='text-blue-500 hover:underline'>
              LinkedIn
            </a>
            . I often talk about{' '}
            <span className='text-sm italic'>#ReactJS #JavaScript #SEO</span>.
          </p>
        </section>

        {/* Skills Section */}
        <section className='mt-4'>
          <h2 className='text-gray-700 font-semibold text-lg mb-4 border-b border-gray-300'>
            Skills
          </h2>
          <p className='mb-4'>
            I’m an architect of{' '}
            <span className='font-bold'>user-friendly interfaces</span>, with a
            keen eye for detail and a commitment to{' '}
            <span className='font-bold'>
              creating efficient and effective designs
            </span>
            .
          </p>
          <p className='mb-6'>
            Here are some of the <span className='font-bold'>tools</span> I’ve
            worked with over the years for personal, professional, and
            open-source projects:
          </p>
          {/* Tools Section */}
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            <SkillCard img={html} name='HTML' />
            <SkillCard img={css} name='CSS' />
            <SkillCard img={javaScript} name='JavaScript' />
            <SkillCard img={tailwind} name='Tailwind CSS' />
            <SkillCard img={react} name='React.js' />
            <SkillCard img={firebase} name='Firebase' />
          </div>
        </section>
      </div>

      {/* Sidebar Links for Desktop */}
      <div className='fixed left-10 top-[445px] hidden lg:block'>
        <Linked />
      </div>

      {/* Email Section for Desktop */}
      <div className='fixed right-2 rotate-90 top-[470px] hidden lg:block'>
        <a href='mailto:aiyedogbonabraham@gmail.com'>
          <p className='text-sm font-semibold text-center'>
            aiyedogbonabraham@gmail.com
          </p>
        </a>
      </div>
    </div>
  );
};

// SkillCard Component
const SkillCard = ({ img, name }) => (
  <div className='bg-white flex flex-col items-center p-4 shadow-md rounded-lg hover:shadow-lg transition'>
    <img src={img} alt={name} className='h-16 w-16' />
    <p className='text-center mt-2 font-semibold'>{name}</p>
  </div>
);

export default About;
