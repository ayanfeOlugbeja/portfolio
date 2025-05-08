import { useEffect } from 'react'
import Linked from './../components/Linked'
import react from './../images/react.svg'
import html from './../images/html.svg'
import css from './../images/css.svg'
import javaScript from './../images/javaScript.svg'
import firebase from './../images/firebase.svg'
import tailwind from './../images/tailwind.svg'

const About = () => {
  // Loading LinkedIn badge script
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
    <div className='min-h-screen bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          {/* Main Content */}
          <div className='lg:col-span-8'>
            {/* LinkedIn Badge Section */}
            <section className='mb-12'>
              <div
                className='badge-base LI-profile-badge'
                data-locale='en_US'
                data-size='large'
                data-theme='light'
                data-type='HORIZONTAL'
                data-vanity='abraham-aiyedogbon-9a7095282'
                data-version='v1'
              />
            </section>

            {/* Contact Section */}
            <section className='mb-12'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
                Contact
              </h2>
              <div className='prose prose-lg max-w-none'>
                <p className='text-gray-600'>
                  Hey! I post on{' '}
                  <a
                    href='https://twitter.com/joshuaAAbraham?s=20'
                    className='text-blue-600 hover:text-blue-700 transition-colors duration-200'
                  >
                    Twitter
                  </a>{' '}
                  and{' '}
                  <a
                    href='https://linkedin.com/in/abraham-aiyedogbon-9a7095282'
                    className='text-blue-600 hover:text-blue-700 transition-colors duration-200'
                  >
                    LinkedIn
                  </a>{' '}
                  often. Check out my amazing content. If you want to get in
                  touch, feel free to connect with me.
                </p>
              </div>
            </section>

            {/* My Collections Section */}
            <section className='mb-12'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
                My Collections
              </h2>
              <div className='prose prose-lg max-w-none'>
                <p className='text-gray-600'>
                  I write on{' '}
                  <a
                    href='https://hashnode.com/@AiyedogbonAbraham'
                    className='text-blue-600 hover:text-blue-700 transition-colors duration-200'
                  >
                    Hashnode
                  </a>{' '}
                  and you can follow my{' '}
                  <a
                    href='https://aiyedogbonabraham.hashnode.dev/'
                    className='text-blue-600 hover:text-blue-700 transition-colors duration-200'
                  >
                    blogs
                  </a>{' '}
                  and connect with me on{' '}
                  <a
                    href='https://linkedin.com/in/abraham-aiyedogbon-9a7095282'
                    className='text-blue-600 hover:text-blue-700 transition-colors duration-200'
                  >
                    LinkedIn
                  </a>
                  . I often talk about{' '}
                  <span className='text-sm font-medium text-gray-500'>
                    #ReactJS #JavaScript #SEO
                  </span>
                  .
                </p>
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
                Skills
              </h2>
              <div className='prose prose-lg max-w-none mb-8'>
                <p className='text-gray-600'>
                  I'm an architect of{' '}
                  <span className='font-medium text-gray-900'>
                    user-friendly interfaces
                  </span>
                  , with a keen eye for detail and a commitment to{' '}
                  <span className='font-medium text-gray-900'>
                    creating efficient and effective designs
                  </span>
                  .
                </p>
                <p className='text-gray-600'>
                  Here are some of the{' '}
                  <span className='font-medium text-gray-900'>tools</span> I've
                  worked with over the years for personal, professional, and
                  open-source projects:
                </p>
              </div>
              {/* Tools Section */}
              <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
                <SkillCard img={html} name='HTML' />
                <SkillCard img={css} name='CSS' />
                <SkillCard img={javaScript} name='JavaScript' />
                <SkillCard img={tailwind} name='Tailwind CSS' />
                <SkillCard img={react} name='React.js' />
                <SkillCard img={firebase} name='Firebase' />
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className='lg:col-span-4'>
            <div className='lg:sticky lg:top-8'>
              {/* Sidebar Links */}
              <div className='mb-8'>
                <Linked />
              </div>

              {/* Email Section */}
              <div className='hidden lg:block'>
                <a
                  href='mailto:aiyedogbonabraham@gmail.com'
                  className='text-gray-600 hover:text-blue-600 transition-colors duration-200'
                >
                  <p className='text-sm font-medium'>
                    aiyedogbonabraham@gmail.com
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// SkillCard Component
const SkillCard = ({ img, name }) => (
  <div className='bg-white border border-gray-100 rounded-lg p-6 hover:shadow-md transition-all duration-200'>
    <div className='flex flex-col items-center'>
      <img src={img} alt={name} className='h-12 w-12 mb-4' />
      <p className='text-gray-900 font-medium'>{name}</p>
    </div>
  </div>
)

export default About
