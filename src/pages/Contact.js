import Linked from './../components/Linked'

const Contact = () => {
  return (
    <div className='min-h-screen bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          {/* Main Content */}
          <div className='lg:col-span-8 lg:col-start-3'>
            <div className='text-center max-w-2xl mx-auto'>
              {/* What's Next? */}
              <h3 className='text-lg font-medium text-blue-600 mb-4'>
                What's Next?
              </h3>

              {/* Get In Touch Section */}
              <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                Get In Touch
              </h2>
              <p className='text-lg text-gray-600 mb-12'>
                I'm currently looking for new opportunities. My inbox is always
                open! Whether you have a question, want to collaborate, or just
                want to say hi, I'll get back to you as soon as possible.
              </p>

              {/* Call To Action */}
              <div className='flex justify-center'>
                <a
                  href='mailto:aiyedogbonabraham@gmail.com'
                  className='inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-200'
                >
                  Say Hello
                </a>
              </div>
            </div>

            {/* Mobile Linked Component */}
            <div className='mt-16 lg:hidden'>
              <Linked />
            </div>
          </div>

          {/* Sidebar */}
          <div className='lg:col-span-2'>
            <div className='lg:sticky lg:top-8'>
              {/* Social Links Sidebar */}
              <div className='hidden lg:block mb-8'>
                <Linked />
              </div>

              {/* Email Sidebar */}
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

      {/* Footer */}
      <footer className='border-t border-gray-100 py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <p className='text-center text-sm text-gray-600'>
            Designed & Built by{' '}
            <a
              href='https://linkedin.com/in/abraham-aiyedogbon-9a7095282'
              className='text-blue-600 hover:text-blue-700 transition-colors duration-200'
            >
              Aiyedogbon Abraham
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Contact
